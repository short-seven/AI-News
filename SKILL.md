---
name: ai-news-daily
description: >
  每日 AI 新闻搜集、评分、生成与发布。从 Hacker News、Reddit、RSS、GitHub Trending、
  Google News 等多源聚合 AI/ML/LLM 相关新闻，生成中英文双语 Markdown 摘要，
  并自动提交到 GitHub 仓库发布到 GitHub Pages 站点。
  当用户提到"AI 新闻""每日速递""搜集新闻""AI News""发布新闻""更新仓库"时激活。
---

# Skill: AI News Daily — 每日 AI 新闻搜集与发布

## 概述

本 Skill 定义了从多个信息源搜集 AI 新闻、评分筛选、生成双语 Markdown、
提交到 GitHub 仓库并发布到 GitHub Pages 的完整工作流。

---

## Step 0: 环境准备

### 仓库信息
- **GitHub 仓库**: `https://github.com/short-seven/AI-News`
- **本地路径**: `/home/node/.openclaw/workspace/AI-News`
- **GitHub 用户名**: `short-seven`
- **发布地址**: `https://short-seven.github.io/AI-News/`
- **状态文件**: `/home/node/.openclaw/workspace/ai_news_state.json`

### 前置检查
1. 确认本地仓库存在且 remote 已配置（含 GitHub Token）
2. `git pull origin main` 拉取最新代码
3. 确认 Gravitave API Key 可用（用于搜索引擎搜索）

---

## Step 1: 搜集新闻（多源并行）

### 信息源清单

按 `data/config.json` 中的 `sources` 配置，从以下渠道搜集**前一天**的 AI 新闻：

| 序号 | 信息源 | 搜集方式 | 筛选条件 |
|------|--------|----------|----------|
| 1 | **Hacker News** | `web_fetch` 抓取 `https://news.ycombinator.com/` | Top 30，筛选 AI/ML/LLM 相关，`min_score: 150` |
| 2 | **Reddit** | Gravitave Search API 搜索 `site:reddit.com/r/MachineLearning` 和 `r/LocalLLaMA` | `sort: hot`，`min_score: 60`，当日热门 |
| 3 | **Simon Willison 博客** | `web_fetch` 抓取 RSS `https://simonwillison.net/atom/everything/` | AI/LLM 相关文章 |
| 4 | **GitHub Trending** | Gravitave Search 搜索当日 GitHub 热门 AI 项目 | AI/ML 相关 |
| 5 | **Google News** | Gravitave `search/news` API，关键词 `AI machine learning LLM news` | 近 24-48 小时 |
| 6 | **GitHub 用户/Releases** | 检查 karpathy 动态、vllm/sglang/triton 发版 | 有新内容则收录 |
| 7 | **Telegram** | 频道 `zaihuapd`（如可访问） | `fetch_limit: 20` |

### 搜集工具优先级
1. **Gravitave Search API**（`POST /v1/search` 和 `/v1/search/news`）— 主力搜索引擎
2. **web_fetch** — 直接抓取已知 URL（HN 首页、RSS feed 等）
3. **Gravitave Fetch API**（`POST /v1/fetch`）— 需要 JS 渲染或反爬的站点

### 搜集策略
- **并行请求**：多个独立信息源同时发起请求，减少总耗时
- **去重**：同一条新闻可能出现在多个源（如 HN + Reddit），按 URL 去重
- **AI 相关过滤**：只保留与 AI/ML/LLM/深度学习/大模型/Agent 等相关的内容

---

## Step 2: 评分与筛选

### 评分规则（0-10 分）

对每条新闻进行评分，标准如下：

| 维度 | 权重 | 说明 |
|------|------|------|
| **影响力** | 30% | 是否影响整个 AI 行业？（如重大模型发布、安全漏洞） |
| **新颖性** | 25% | 是否为全新发现/发布？（不是旧闻重复） |
| **技术深度** | 20% | 是否有实质性技术内容？（论文/代码/架构） |
| **社区热度** | 15% | HN 分数、Reddit 热度、讨论量 |
| **实用性** | 10% | 对开发者/研究者是否有直接价值？ |

### 筛选阈值
- **`ai_score_threshold: 7.0`** — 低于 7 分的新闻不收录
- **目标数量**: 10-15 条高质量新闻
- **时间窗口**: `time_window_hours: 24`（前一天的内容）

---

## Step 3: 内容充实

对评分 ≥ 8 的重要新闻，使用 `web_fetch` 抓取原文获取更多细节：

- 文章摘要和关键观点
- 技术背景和影响分析
- 社区讨论亮点（HN/Reddit 评论）

---

## Step 4: 生成 Markdown

### 文件命名规则
```
docs/_posts/YYYY-MM-DD-zh.md   # 中文版
docs/_posts/YYYY-MM-DD-en.md   # 英文版
```

日期 = **前一天的日期**（搜集的是前一天的新闻）

### Front Matter 格式
```yaml
---
layout: default
title: "每日 AI 速递"      # 中文版
# title: "Daily AI Briefing"  # 英文版
date: YYYY-MM-DD
lang: zh                      # 或 en
---
```

### 正文结构模板

```markdown
# 📡 每日 AI 速递 — YYYY年M月DD日

> 由 Hacker News、Simon Willison 博客、GitHub Trending、科技新闻等多源聚合，AI 筛选评分后生成。

---

## 🔥 今日头条
（评分 9-10 的新闻，通常 2-4 条）

### 1. 新闻标题
**评分：N/10** · 来源：[来源名称](URL) · 📰 Hacker News 热度：XXX 分

摘要正文（2-4 段，包含背景、核心内容、影响分析）

**💡 关键洞察**：一句话总结这条新闻的核心价值

---

## 🛠️ 开发工具 & 开源
（评分 7-8 的工具/开源项目新闻）

### N. 新闻标题
**评分：N/10** · 来源：[来源名称](URL) · 📰 来源标识

摘要正文

---

## 🤖 AI 研究 & 安全
（评分 7-8 的研究论文/安全相关新闻）

---

## 🌐 科技 & 行业动态
（评分 7-8 的行业新闻）

---

## 📊 今日概览

| 类别 | 数量 | 亮点 |
|------|------|------|
| 🔥 头条 | N | 关键词列表 |
| 🛠️ 工具 & 开源 | N | 关键词列表 |
| 🤖 研究 & 安全 | N | 关键词列表 |
| 🌐 行业 | N | 关键词列表 |

---

*📡 数据来源：Hacker News Top 30、Simon Willison RSS、GitHub Trending、Google News*
*🕐 生成时间：YYYY-MM-DD HH:MM (UTC+8)*
```

### 分类规则

| 分类 | emoji | 收录标准 |
|------|-------|----------|
| 今日头条 | 🔥 | 评分 ≥ 9，或 HN ≥ 500 分，或重大行业事件 |
| 开发工具 & 开源 | 🛠️ | 新工具发布、开源项目、SDK/框架更新 |
| AI 研究 & 安全 | 🤖 | 论文、安全漏洞、对齐/安全研究 |
| 科技 & 行业动态 | 🌐 | 公司动态、融资、政策法规、市场趋势 |

### 写作风格要求
- **中文版**：专业但不晦涩，适合技术从业者快速浏览
- **英文版**：简洁专业的技术新闻风格
- **每条新闻必须有**：标题、评分、来源链接、摘要、（高分新闻）关键洞察
- **摘要长度**：头条 150-300 字，普通 50-150 字
- **禁止**：编造事实、虚构链接、夸大描述

---

## Step 5: 提交与发布

### Git 操作
```bash
cd /home/node/.openclaw/workspace/AI-News
git add docs/_posts/YYYY-MM-DD-zh.md docs/_posts/YYYY-MM-DD-en.md
git commit -m "AI News(YYYY.M.DD)"
git push origin main
```

### commit message 格式
```
AI News(YYYY.M.DD)
```
注意：月份不补零（`4.30` 而非 `04.30`），与用户要求一致。

### 推送认证
- 使用 Git remote URL 中内嵌的 GitHub Token
- 格式：`https://short-seven:<TOKEN>@github.com/short-seven/AI-News.git`

### 发布后验证
- 确认 push 成功（无 rejected/error）
- GitHub Pages 会自动部署（通常 1-2 分钟）
- 站点地址：`https://short-seven.github.io/AI-News/`

---

## Step 6: 通知用户

push 成功后，通过飞书 `message` 工具通知用户：

```
target: user:ou_f32e515259ac7cfc3abe7ad172a6a627
```

通知内容包含：
- ✅ 完成状态
- 📅 搜集日期
- 📊 新闻数量和分类概要
- 🔗 仓库链接和站点链接

---

## Step 7: 更新状态文件

更新 `ai_news_state.json`：
```json
{
  "completed_dates": ["...", "YYYY-MM-DD"],
  "last_run_date": "YYYY-MM-DD",
  "last_run_ts": <unix_timestamp>
}
```

---

## 异常处理

| 异常场景 | 处理方式 |
|----------|----------|
| Gravitave API 无结果 | 切换搜索引擎（google → bing → duckduckgo），或直接用 web_fetch |
| web_fetch 被 403 | 使用 Gravitave Fetch API（自动处理反爬） |
| Reddit JSON 被拦截 | 通过搜索引擎间接获取 Reddit 热门帖子 |
| Git push 被拒绝 | `git pull --rebase` 后重试 |
| 新闻数量不足 10 条 | 降低阈值到 6 分，或扩大时间窗口到 48 小时 |
| GitHub Token 过期 | 通知用户重新生成 Token |

---

## 站点技术栈

| 组件 | 技术 |
|------|------|
| 静态站点生成 | Jekyll (GitHub Pages 内置) |
| 主题基础 | jekyll-theme-cayman |
| 自定义样式 | `docs/assets/css/horizon.css`（双主题：暗色赛博朋克 / 浅色 Horizon Dawn） |
| 交互逻辑 | `docs/assets/js/horizon.js`（语言切换、主题切换、评分徽章） |
| 字体 | Inter (Google Fonts) + PingFang SC / Microsoft YaHei |
| 部署 | GitHub Pages，push 到 `main` 分支后自动构建 |
