---
title: 开发步骤
description: 中大儿开发步骤
sidebar_position: 2
---

# 开发步骤

本文介绍如何搭建中大儿的开发环境、导入项目并运行调试。

## ⚙️ 环境配置

在开始之前，请确保已安装以下工具：

| 工具 | 说明 | 下载地址 |
| ---- | ---- | -------- |
| Git | 版本控制工具 | [git-scm.com](https://git-scm.com/) |
| Android Studio | 官方 Android 开发 IDE | [developer.android.com](https://developer.android.com/studio) |
| JDK 17+ | Java 开发工具包 | Android Studio 自带或独立安装 |

> 💡 推荐使用 Android Studio Hedgehog (2023.1) 或更新版本，以获得最佳兼容性。

## 📥 导入项目

1. 打开 Android Studio。
2. 点击 **File → New → Project from Version Control**。
3. 选择 **Git**，在 URL 栏输入：
   ```
   https://github.com/SYSU-Tang/Sysuer.git
   ```
4. 点击 **Clone**，等待项目克隆完成。
5. Android Studio 会自动开始 Gradle 同步，等待依赖下载完成。

> ⚠️ 首次导入可能需要较长时间下载依赖，请确保网络畅通。如果遇到 Gradle 同步失败，可以尝试配置国内镜像源。

## ▶️ 运行项目

### 使用模拟器

1. 打开 **Device Manager**，创建一个 Android 虚拟设备（推荐 API 33+）。
2. 启动模拟器。
3. 点击工具栏的 **Run 'app'** 按钮（绿色三角形），或使用快捷键 `Shift + F10`。
4. 等待编译完成，应用将自动安装到模拟器上。

### 使用真机

1. 在手机上开启 **开发者选项** 和 **USB 调试**。
2. 使用 USB 数据线连接手机到电脑。
3. 在 Android Studio 中选择你的设备。
4. 点击 **Run 'app'**，等待安装完成。

## 📦 构建 APK

1. 点击菜单栏 **Build → Build Bundle(s) / APK(s) → Build APK(s)**。
2. 点击 **OK**，等待构建完成。
3. 构建完成后，在右下角通知中点击 **locate**，即可打开 APK 输出目录。
4. 默认输出路径：`app/build/outputs/apk/debug/`。

## 📁 项目结构

```
Sysuer/
├── app/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/sysu/edu/   # 主要源码
│   │   │   ├── res/                  # 资源文件
│   │   │   └── AndroidManifest.xml
│   │   └── ...
│   └── build.gradle
├── gradle/                           # Gradle 配置
├── build.gradle                      # 项目级构建配置
└── settings.gradle
```

## 🔧 常见问题

| 问题 | 解决方案 |
| ---- | -------- |
| Gradle 同步超时 | 检查网络连接，或配置 Gradle 镜像源 |
| SDK 版本不匹配 | 在 SDK Manager 中安装所需版本的 SDK |
| 编译错误：Java 版本 | 确保使用 JDK 17 或更高版本 |
| 设备连接失败 | 检查 USB 调试是否开启，驱动是否安装 |
