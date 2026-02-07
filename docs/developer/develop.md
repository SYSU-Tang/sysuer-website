---
title: 开发步骤
description: 中大儿开发步骤
---

# 开发

## 环境配置

1. 安装[Git](https://git-scm.com/)
2. 安装[Android Studio](https://developer.android.com/studio)

## 导入项目

1. 打开 Android Studio
2. 点击 `File` -> `New` -> `Project from Version Control`
3. 选择 `Git` 并输入项目路径`https://github.com/中大儿/中大儿.git`
4. 点击 `Clone` 按钮，等待 Android Studio 导入项目
5. 等待 Android Studio 完成项目同步

## 运行项目
1. 点击 `Run` -> `Run 'app'`
2. 等待 Android Studio 编译项目
3. 等待 Android Studio 安装应用到模拟器或真机
4. 点击 `Stop` 按钮停止应用运行

## 构建项目
1. 点击 `Build` -> `Build Bundle(s) / APK(s)`
2. 选择 `Build APK(s)`
3. 点击 `OK` 按钮
4. 等待 Android Studio 完成构建
5. 在 `app\debug` 目录下找到生成的 APK 文件