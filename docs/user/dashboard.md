---
title: 面板
description: 用户面板介绍
sidebar_position: 3
---
import '@material/web/all.js';
export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '4px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);
export const Card = ({children}) => (
  <div style = {{
    position: 'relative',
    borderRadius: '8px',
    height: 'auto',
    width: 'auto',
    maxWidth: '50%',
    margin: '16px 0',
    '--md-elevation-level': 2,
    backgroundColor: '#005826'
    }}>
  <md-elevation></md-elevation>
  <div style = {{color: '#fff',  padding: ' 16px 8px 2px 8px'}}> 
    {children}
  </div>
  </div>
);

# 面板

## 🗃 界面介绍

用户面板主要用于显示用户的课程信息、考试信息和待办事项等内容，方便用户查看和管理自己的学习计划。面板界面简洁明了，信息分类清晰，用户可以快速找到所需内容。

### 1. 进度条

<md-linear-progress value="0.5" style = {{marginBottom: '10px'}}></md-linear-progress>

进度条位于最上方，用于显示今天的课程进度，如果当天没有课程，进度条的进度则为0%。

### 2. 快捷方式

<div style = {{display: 'flex', justifyContent: 'start', flexWrap: 'wrap', gap: '8px', marginBottom: '10px'}}>
<md-filled-tonal-button>扫码 </md-filled-tonal-button>
<md-filled-tonal-button>逸仙码 </md-filled-tonal-button>
<md-filled-tonal-button>课程表 </md-filled-tonal-button>
</div>

快捷方式位于快捷方式下方，用于快速访问常用功能，包括**扫码**、**逸仙码**、**课程表**。  

### 3. 下节课

<Card>

#### 当前课程

下一节课程：**高等数学**

位置：**逸夫楼xxx**

时间：**xx：xx-xx：xx**
</Card>

该组件位于进度条下面的左边，用于显示下一节课的`名称`、`地点`和`时间`，便于用户及时了解下一节课的信息。

### 4. 时间表
<Card>

**第xx周**

**第xxxx-x学期**

**x月xx日**

**星期x**

xx:xx:xx
</Card>

该组件位于进度条下面的右边，显示`周次`、`学年学期`、`月份日期`、`星期`、`时分秒`，便于用户及时了解当前时间的信息。

### 5. 课程表

课程表位于核心部分，包括两大部分，用于显示`当天课程`安排以及`最近两节课`的信息，可以通过右边的按钮切换。

- #### 当天课程

    - 课程表会默认滚动到当前（如果没有就下一节）课程，便于用户及时了解当前或下一节课程的信息😏；

    - 已上过的课程的`背景`变浅且课程名称不加粗体，便于用户识别**已上过**的课程；

    - 正在上的课程 <Highlight color="#005826">背景</Highlight> 加深且**课程名称**加粗体，便于用户识别**正在上**的课程；
    
    - 将要上的课程的背景正常且**课程名称**加粗体，便于用户识别**将要上**的课程。

- #### 最近课程

    - 显示不限于今天、将要上的最近两节课，便于用户提前了解未来课程安排。

⚠️ **注意**

    - 点击课程可以查看课程详情和课程大纲。
    - 长按可以复制对应文本内容。

### 6. 考试表

考试表位于课程表的下方，显示当前学期的期末考试安排。

每一科考试会显示`考试名称`、`考试日期`、`时间`、`时长`、`节次`、`考核方式`、`考试阶段`的信息，便于用户及时了解考试时间和考试内容。

### 7. 待办表（半成品）

~~显示未完成和已完成的待办~~，该板块尚未完善，暂不要使用！

---

## ⚙ 自定义

<Card>

#### 面板

- [ ] 快捷方式
- [ ] 下节课
- [ ] 时间表
- [ ] 课程表
- [ ] 考试表
- [ ] 待办表
</Card>

用户可以通过在 **我的&rarr;设置&rarr;面板** 来自定义面板6个组件的显示与隐藏，满足不同用户的需求。