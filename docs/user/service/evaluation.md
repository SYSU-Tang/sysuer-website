---
title: 评教
description: 评教功能介绍
---
import '@material/web/all.js';

# 评教

## ⚠️ 注意事项

- 评教界面只实现单选题，评分题，填空题，如果你的评教界面有其他提醒，**切勿**使用功能
- 切记看清选项，**不要**选择错误的选项
- 评教系统的登录机制不一样，所以会出现每次进去可能出现需要重新登录、登录时间特别长的现象，请耐心登录

---

## 🗃 工具栏

<div style = {{display: 'flex', justifyContent: 'start', flexWrap: 'wrap', gap: '8px', marginBottom: '10px'}}>
<md-filled-tonal-button>保存 </md-filled-tonal-button>
<md-filled-tonal-button>重置 </md-filled-tonal-button>
<md-filled-tonal-button>填充 </md-filled-tonal-button>
<md-filled-tonal-button>提交 </md-filled-tonal-button>
</div>

### 保存

将**当前的答案**保存，下次可以继续编辑，也可以在网页上继续操作。

### 重置

将**所有的答案**清除，操作之前请三思。

### 填充

将**所有的答案**选择最后一个选项，通常为积极评价。

### 提交

1. 将所有的答案提交，注意**此操作不可逆**，即提交后不可重新填写。

2. 提交时自行注意检查**有没有漏选**，没有选择的答案也会被提交，这与网页上评教不一样。
