---
---
# 模板

## 瀑布流Fragment + AuthorizationManager

```Java
package com.sysu.edu.studentAffair;

import static com.sysu.edu.api.CommonUtil.extractValue;

import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.alibaba.fastjson2.JSONObject;
import com.sysu.edu.R;
import com.sysu.edu.api.AuthorizationManager;
import com.sysu.edu.api.HttpManager;
import com.sysu.edu.api.Params;
import com.sysu.edu.api.TargetUrl;
import com.sysu.edu.view.StaggeredFragment;

import java.util.List;

public class Template extends StaggeredFragment {


    final AuthorizationManager authorizationManager = new AuthorizationManager(/*原始URL*/"https://xgxt.sysu.edu.cn/", /*替代URL*/"https://xgxt-443.webvpn.sysu.edu.cn/");
    HttpManager http;
    View view;

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        if (view == null) {
            view = super.onCreateView(inflater, container, savedInstanceState);
            Params params = new Params(requireActivity());
            params.setCallback(this, () -> getData(""));/*登录后的事件*/
            http = new HttpManager(new Handler(Looper.getMainLooper()) {
                @Override
                public void handleMessage(@NonNull Message msg) {
                    super.handleMessage(msg);
                    boolean isJSON = msg.getData().getBoolean("isJSON");
                    int code = msg.getData().getInt("code");
                    String response = (String) msg.obj;
                    if (code == 0) {
                        authorizationManager.setAccessible(false);
                        getData("");/*需要校园网*/
                        return;
                    }
                    if (response == null) {
                        params.toast(R.string.no_wifi_warning);
                        return;
                    }
                    if (!isJSON) {
                        if (!authorizationManager.isAuthorized(response)) {
                            params.toast(R.string.login_warning);
                            params.gotoLogin(view, authorizationManager.isAccessible() ? TargetUrl.XGXT/*目标URL*/ : TargetUrl.XGXT_WEBVPN/*目标URL(无校园网)*/);/*需要登录*/
                            return;
                        }
                        if (!authorizationManager.isAccessible(response)) {
                            params.toast(R.string.educational_wifi_warning);
                            getData("");/*需要校园网*/
                            return;
                        }
                    }
                    if (msg.what == -1) {
                        params.toast(R.string.no_wifi_warning);
                        return;
                    } else {
                        /*
                         * 处理获取到的JSON数据
                         * */
                        JSONObject data = JSONObject.parseObject(response);
                        if (data.containsKey("code") && data.getInteger("code") == 200) {
                            switch (msg.what) {
                                case 0 -> {

                                    /*处理JSONObject*/
                                    add(/*标题*/"", /*key的中文*/List.of("中文"),
                                            extractValue(data.getJSONObject("data"), /*json的key*/new String[]{"key"}));

                                }
                                case 1 -> {

                                    /*处理JSONArray*/
                                    data.getJSONArray(/*key*/"data").forEach(i ->
                                            add(/*标题*/"", /*key的中文*/List.of("中文"),
                                                    extractValue((JSONObject) i, /*json的key*/new String[]{"key"})));
                                }
                            }
                        } else if (data.getJSONObject("meta").getInteger("statusCode") == 302) {
                            params.toast(R.string.login_warning);/*需要登录*/
                            params.gotoLogin(view, authorizationManager.isAccessible() ? TargetUrl.XGXT/*目标URL*/ : TargetUrl.XGXT_WEBVPN/*目标URL(无校园网)*/);/*需要登录*/
                        }
                    }
                }
            });
            http.setParams(params);
            //http.setAuthorization(true);/*需要授权*/
            getData("");
        }
        return view;
    }

    /**
     * 获取数据
     *
     * @param path 数据路径，注意路径根据authorizationManager的原始URL和替代URL决定要不要加"/"
     *
     */
    void getData(String path) {
        http.getRequest(authorizationManager.getBaseUrl() + path, 0); // GET请求
        //http.postRequest(authorizationManager.getBaseUrl() + path, /*data*/"", 1); // POST请求
    }
}

```

## 瀑布流Fragment

## 瀑布流Fragment + TabLayout + ViewPager2

