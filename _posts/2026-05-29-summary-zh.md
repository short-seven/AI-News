---
layout: default
title: "Horizon Summary: 2026-05-29 (ZH)"
date: 2026-05-29
lang: zh
---

> From 32 items, 13 important content pieces were selected

---

1. [在 Postgres 上构建持久工作流](#item-1) ⭐️ 8.0/10
2. [Anthropic 完成 650 亿美元 H 轮融资，估值达 9650 亿美元](#item-2) ⭐️ 8.0/10
3. [黄仁勋称台湾是 AI 革命中心，英伟达计划年投 1500 亿美元](#item-3) ⭐️ 8.0/10
4. [比亚迪发布 4nm 智驾芯片“璇玑 A3”](#item-4) ⭐️ 8.0/10
5. [Anthropic 发布 Claude Opus 4.8 小幅更新](#item-5) ⭐️ 7.0/10
6. [对电影《创：战纪》中 Unix Shell 场景的技术剖析](#item-6) ⭐️ 7.0/10
7. [60 秒游戏模拟 AI 代理的权限审批疲劳](#item-7) ⭐️ 7.0/10
8. [GitHub 封禁发布 Windows 零日漏洞的安全研究人员](#item-8) ⭐️ 7.0/10
9. [识别大语言模型生成文本的典型特征](#item-9) ⭐️ 7.0/10
10. [Anthropic 年化收入达 470 亿美元](#item-10) ⭐️ 7.0/10
11. [YouTube 调整 AI 视频标注，自动添加未申报内容标签](#item-11) ⭐️ 7.0/10
12. [DOMD：自研渲染引擎的 Markdown 所见即所得编辑器](#item-12) ⭐️ 7.0/10
13. [NBA 拟用 AI 自动判罚出界](#item-13) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [在 Postgres 上构建持久工作流](https://www.dbos.dev/blog/postgres-is-all-you-need-for-durable-execution) ⭐️ 8.0/10

博客文章提出使用 PostgreSQL 作为核心基础设施来构建持久工作流，通过利用其内置功能（如事务管理和队列）来简化分布式系统中的可靠执行。 这种方法很重要，因为它减少了对专业工作流引擎的需求，可能降低分布式系统设计的复杂性和成本，同时利用现有广泛采用的数据库。 关键技术细节包括使用 PostgreSQL 的 SELECT FOR UPDATE 进行队列管理，替代方案如 pgque 采用快照和表截断来最小化膨胀，以及 DBOS 和 absurd 等工具提供额外的持久执行层。

hackernews · KraftyOne · May 28, 18:41

**背景**: 持久工作流是容错的过程，它们将状态检查点存储到持久存储中，以便在分布式系统中从故障中恢复。可靠的执行模式对于处理部分故障、网络延迟和维持服务间一致性至关重要。PostgreSQL 作为一个健壮的关系数据库，可以扩展以支持这些模式，如 DBOS 等工具将持久执行直接集成到数据库层所示。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.restate.dev/what-is-durable-execution">What is Durable Execution? A Definitive Guide | Restate</a></li>
<li><a href="https://www.dbos.dev/blog/why-postgres-durable-execution">Why You Should Build Durable Workflows With Postgres</a></li>
<li><a href="https://lucumr.pocoo.org/2025/11/3/absurd-workflows/">Absurd Workflows: Durable Execution With Just Postgres | Armin Ronacher's Thoughts and Writings</a></li>

</ul>
</details>

**社区讨论**: 社区讨论强调了在 PostgreSQL 中实现持久工作流的替代工具，如 pgque（使用快照和截断来减少膨胀）和 absurd。用户分享了使用 DBOS、Restate 和 Cloudflare 工作流的实际经验，指出了 DBOS 的可靠性、Restate 的可自托管性以及 Cloudflare 的成本效益等权衡，同时与 Temporal 的比较揭示了对负载限制的担忧。

**标签**: `#PostgreSQL`, `#durable workflows`, `#distributed systems`, `#backend engineering`, `#system design`

---

<a id="item-2"></a>
## [Anthropic 完成 650 亿美元 H 轮融资，估值达 9650 亿美元](https://www.anthropic.com/news/series-h) ⭐️ 8.0/10

Anthropic 宣布完成 650 亿美元的 H 轮融资，投后估值达到 9650 亿美元。公司还披露，其年化收入已于 2026 年 5 月初突破 470 亿美元。 这笔巨额融资和接近万亿美元的估值巩固了 Anthropic 作为 AI 行业主导力量的地位，其收入和市场价值可能已超越其主要竞争对手 OpenAI。这表明投资者对领先的 AI 模型开发者的长期增长和商业可行性持续抱有巨大信心。 本轮融资包括来自亚马逊等超大规模云服务商的 150 亿美元承诺投资，Anthropic 自报的年化收入在短短几个月内从约 300 亿美元跃升至超过 470 亿美元。9650 亿美元的投后估值为私人 AI 公司树立了新的标杆。

hackernews · meetpateltech · May 28, 18:09

**背景**: H 轮融资是风险投资后期的融资轮次，通常是成熟的初创公司为实现大规模增长或准备退出而进行。'投后估值'是指公司在获得新投资后的即时价值，通过将投资金额加到投资前的价值来计算。'年化收入'（或称年度化营收）是一种财务指标，将当前收入投影到一整年以估算年度业绩。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://startupheroes.io/startups/glossary/series-h-funding/">What is Series H Funding? - Startup Heroes</a></li>
<li><a href="https://en.cryptonomist.ch/2026/05/28/anthropic-series-h-funding-claude-growth/">Anthropic Series H funding: $65B round for Claude growth</a></li>
<li><a href="https://www.investopedia.com/terms/p/postmoneyvaluation.asp">Understanding Post-Money Valuation: Key Concepts and Examples</a></li>

</ul>
</details>

**社区讨论**: 社区讨论强调了 Anthropic 收入的快速增长，有用户指出其已超越 OpenAI。其他人则质疑万亿美元级别的私人估值对股票市场的影响，并向新读者解释了年化收入的概念。一个反复出现的主题是消费者最终通过订阅或养老金基金承担这些成本。

**标签**: `#AI`, `#funding`, `#Anthropic`, `#valuation`, `#tech industry`

---

<a id="item-3"></a>
## [黄仁勋称台湾是 AI 革命中心，英伟达计划年投 1500 亿美元](https://arstechnica.com/tech-policy/2026/05/nvidia-ceo-wants-taiwan-to-be-center-of-ai-revolution-not-us/) ⭐️ 8.0/10

英伟达计划每年在台湾投入约 1500 亿美元，以使其成为 AI 革命的中心，投资涵盖 AI 芯片生产、系统制造和供应链合作，规模远高于此前的每年 100 亿至 150 亿美元。 这项巨额投资凸显了台湾在全球 AI 供应链和半导体制造中的关键作用，可能巩固英伟达在 AI 产业的地位，并影响芯片设计和硬件生产等相关生态系统。 英伟达在台北的新总部预计于 2026 年动工、2030 年启用，计划容纳 4000 名员工，主要合作伙伴包括台积电、鸿海、纬创和广达，以进行供应链合作。

telegram · zaihuapd · May 28, 07:33

**背景**: 台湾是全球半导体制造中心，台积电等公司在先进芯片生产领域领先，这对 AI 技术至关重要。英伟达作为美国主要的芯片设计公司，依赖此类制造能力来生产用于数据中心和 AI 训练的 GPU 及 AI 系统。

**标签**: `#AI`, `#Nvidia`, `#Taiwan`, `#semiconductor manufacturing`, `#investment`

---

<a id="item-4"></a>
## [比亚迪发布 4nm 智驾芯片“璇玑 A3”](https://finance.sina.com.cn/roll/2026-05-28/doc-inhznenn1371824.shtml) ⭐️ 8.0/10

比亚迪在 5 月 28 日正式发布了采用 4nm 工艺的“璇玑 A3”自动驾驶芯片，该芯片已开启规模化量产，支持 L3 和 L4 级自动驾驶，通过三颗芯片协同工作实现超过 2100 TOPS 的总计算性能。 此次发布标志着中国领先汽车制造商在实现自动驾驶核心技术的垂直整合与自主化方面迈出关键一步，有望加速 L3/L4 级车辆的商业化部署，并加剧汽车 AI 芯片市场的竞争。 该芯片采用 4nm 半导体工艺，通常能提供比旧制程更优的能效和晶体管密度。比亚迪声称通过自研算法优化，实现了算力利用率提升 100%，从而最大化地利用了高计算性能。

telegram · zaihuapd · May 28, 13:01

**背景**: 在半导体制造中，“4nm 工艺”指代一个先进的制程节点，能够实现更小、更高效的晶体管。SAE International（国际汽车工程师学会）定义的自动驾驶等级中，L3 级为有条件自动驾驶（驾驶员可脱手），L4 级为高度自动驾驶（系统在特定领域内运行）。TOPS（每秒万亿次操作）是衡量 AI 芯片原始计算能力的标准指标。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.diffracty.in/post/understanding-the-4nm-semiconductor-process-and-its-impact-on-modern-technology">Understanding the 4nm Semiconductor Process and Its Impact on Modern Technology</a></li>
<li><a href="https://www.synopsys.com/blogs/chip-design/autonomous-driving-levels.html">The 6 Levels of Vehicle Autonomy Explained | Synopsys Automotive</a></li>
<li><a href="https://www.ernestchiang.com/en/notes/general/tops-comparison-table-by-brand/">Decoding AI TOPS: Essential Metrics for AI Chips and TOPS Comparison Chart | Ernest Chiang</a></li>

</ul>
</details>

**标签**: `#autonomous driving`, `#AI chips`, `#BYD`, `#semiconductor`, `#L3/L4`

---

<a id="item-5"></a>
## [Anthropic 发布 Claude Opus 4.8 小幅更新](https://www.anthropic.com/news/claude-opus-4-8) ⭐️ 7.0/10

Anthropic 宣布推出 Claude Opus 4.8，这是一个小幅更新，新增了允许用户禁用自适应思考功能的选项，以便那些偏好直接回复的用户可以使用。 此次更新体现了 Anthropic 对其旗舰模型的持续迭代优化，直接回应了用户对控制模型行为的反馈，并保持了快速的更新周期。 此次改进被描述为‘适度但切实的’，并且其版本号标志着继 4.6 和 4.7 之后，Opus 4.5 系列已连续发布了第三次小幅更新。

hackernews · craigmart · May 28, 16:49

**背景**: Claude 是由 Anthropic 开发的一系列大语言模型。‘自适应思考’指的是模型在生成答案之前进行中间思维链推理的能力。‘Opus’系列代表了 Anthropic 能力最强的模型层级。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://machinelearning.apple.com/research/adaptive-thinking">Adaptive Thinking: Large Language Models Know When to Think in Latent Space - Apple Machine Learning Research</a></li>
<li><a href="https://en.wikipedia.org/wiki/Claude_(language_model)">Claude (language model) - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 社区讨论指出，这是 Opus 系列首次获得连续三次的小版本升级，用户注意到从 4.6 到 4.8 的改进是渐进式的。对于新增的禁用自适应思考选项，情绪普遍积极，因为一些用户发现该功能不可靠。同时，评论也对传闻中未来更强大的‘Mythos’级模型进行了推测。

**标签**: `#AI`, `#large language models`, `#Anthropic`, `#model updates`, `#Claude`

---

<a id="item-6"></a>
## [对电影《创：战纪》中 Unix Shell 场景的技术剖析](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/tron-legacy/) ⭐️ 7.0/10

一篇博客文章对 2010 年电影《创：战纪》中描绘的 Unix Shell 命令和历史机制的准确性进行了详细的技术分析，引发了程序员群体的深入讨论。 该分析揭示了好莱坞如何描绘技术系统，为程序员和电影爱好者提供了一个案例研究，并展示了技术社群在评估流行文化时所表现出的活跃且严谨的兴趣。 该批判性分析审视了电影 Shell 界面中显示的具体命令，质疑其在 Unix 传统中的历史准确性和连贯性，而社区评论则揭示了在编辑器偏好（vi 与 emacs）、基于故事设定的解释以及法律合理使用方面的不同解读。

hackernews · speckx · May 28, 19:15

**背景**: Unix 是一个起源于 1969 年贝尔实验室的基础性多用户操作系统家族。Shell 是其命令行界面，用户在此输入文本命令，而历史机制是一项记录先前输入命令的功能，允许用户查看或重用它们。电影为了叙事需要，常常以不同程度的技术准确性来描绘计算机界面。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Unix">Unix - Wikipedia</a></li>
<li><a href="https://www.geeksforgeeks.org/linux-unix/history-command-in-linux-with-examples/">How to Display Command History in Linux | history ... - GeeksforGeeks</a></li>

</ul>
</details>

**社区讨论**: 社区讨论非常热烈，评论提供了对技术场景基于故事设定的替代解释，辩论不同文本编辑器（vi vs. emacs）的优劣，分析电影登录序列中可能引用的真实世界 CVE（公共漏洞和暴露），并对 Daft Punk 的原声音乐表示赞赏。

**标签**: `#Unix`, `#Technical Analysis`, `#Pop Culture`, `#Programming`, `#Movies`

---

<a id="item-7"></a>
## [60 秒游戏模拟 AI 代理的权限审批疲劳](https://llmgame.scalex.dev/) ⭐️ 7.0/10

一款名为 'Continue? Y/N' 的全新浏览器游戏在 Show HN 上发布，它要求玩家在 60 秒的时间限制内为一名 AI 代理快速做出权限决策，以模拟审批疲劳现象。 这个互动体验有效地揭示了 AI 代理设计中一个日益严峻的关键安全挑战：随着代理需要更多权限来自动化任务，操作人员可能会不堪重负，从而养成危险的自动批准习惯。 玩家发现可以通过快速拒绝所有请求来“作弊”并获得完美分数，同时他们批评了游戏中特定的安全假设，例如认为 `cat ~/.zshrc` 命令本身就不安全，这曲解了真实世界的安全实践。

hackernews · Wirbelwind · May 28, 13:02

**背景**: AI 代理是旨在通过与软件、文件和服务交互来执行任务的自主系统，这需要它们请求用户权限。“审批疲劳”描述的是人类面对大量此类权限提示时，开始不加适当审查就条件反射般地予以批准，从而增加安全风险的现象。这个游戏精确地模拟了这种压力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.reddit.com/r/cybersecurity/comments/1qzrase/when_ai_agents_go_rogue_the_approval_fatigue/">When AI Agents Go Rogue: The Approval Fatigue Problem Nobody's Solving - Reddit</a></li>
<li><a href="https://www.linkedin.com/posts/donelmartinez_the-human-in-the-loop-illusion-activity-7452329152528932864-7bk2">AI Agent Permission Prompts Lead to Approval Fatigue | Donel Martinez posted on the topic | LinkedIn</a></li>
<li><a href="https://mitsloan.mit.edu/ideas-made-to-matter/agentic-ai-explained">Agentic AI, explained | MIT Sloan</a></li>

</ul>
</details>

**社区讨论**: 社区讨论非常活跃且具有批判性；玩家觉得游戏有趣，但指出了具体缺陷，例如可以通过拒绝所有操作来“获胜”、对命令（如 `lsof`）的错误描述，以及权限请求缺乏上下文分组导致场景不真实。一些人认为，游戏中被标记为“坏”的操作，实际上在真实工作环境中是常被允许的。

**标签**: `#AI agents`, `#security`, `#game design`, `#permissions`, `#human-computer interaction`

---

<a id="item-8"></a>
## [GitHub 封禁发布 Windows 零日漏洞的安全研究人员](https://www.tomshardware.com/tech-industry/cyber-security/microsofts-github-bans-security-researcher-who-posted-zero-day-windows-exploits-because-company-ruined-their-life-expert-claims-action-is-vindictive-and-promises-further-retaliation) ⭐️ 7.0/10

GitHub 封禁了一名发布 Windows 零日漏洞概念验证利用代码的安全研究人员的账户，该研究人员声称微软的行为毁掉了他的生活。 此事件凸显了独立安全研究人员与大型科技公司在负责任披露、平台治理以及漏洞挖掘的伦理界限方面日益加剧的紧张关系。 据称，这名研究人员曾使用人工智能帮助发现零日漏洞，其行为源于对微软的个人恩怨；此次封禁引发疑问：作为微软旗下的平台，GitHub 是否因此承担了清除平台上漏洞利用代码的编辑责任。

hackernews · possibilistic · May 28, 21:45

**背景**: 零日漏洞是一种软件安全缺陷，其供应商尚不知情，攻击者可以在补丁发布前利用它。漏洞赏金计划是公司向道德黑客提供奖励，以负责任地报告此类漏洞来帮助提升安全性的倡议。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Zero-day_vulnerability">Zero - day vulnerability - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Bug_bounty_program">Bug bounty program - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 社区讨论意见不一：一些评论者认为微软本有动力支付赏金，封禁可能适得其反；而其他人则认为该研究人员的行为过激或带有报复性，并担心这可能开创一个先例，迫使 GitHub 必须审查所有漏洞利用代码。

**标签**: `#cybersecurity`, `#GitHub`, `#bug-bounty`, `#security-research`, `#AI`

---

<a id="item-9"></a>
## [识别大语言模型生成文本的典型特征](https://shvbsle.in/various-llm-smells/) ⭐️ 7.0/10

文章与社区讨论详细列举了大语言模型生成文本中可识别的语言模式或“痕迹”，并提供了具体的例子和识别建议。 它为用户提供了实用工具来批判性地评估大语言模型输出，并揭示了当前局限性，有助于在专业写作和设计中区分真正有用的内容与泛泛的 AI 模式。 关键指标包括“honest caveat:”等特定开头短语、“不是 X，而是 Y”的修辞结构（对比否定），以及在非典型语境下过度使用“承重”或“爆炸半径”等术语。

hackernews · speckx · May 28, 19:02

**背景**: AI 检测工具通常通过分析文本中的统计模式和重复结构来识别大语言模型生成的内容。然而，这些方法并非万无一失，随着模型进化，准确区分人类写作与高级 AI 输出仍面临持续挑战。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.linkedin.com/posts/rajeevsubramanian_the-new-llm-smell-test-for-content-if-activity-7432137266896031745-9h_j">Detecting AI- generated content with the LLM smell test | LinkedIn</a></li>
<li><a href="https://www.grammarly.com/blog/ai/how-do-ai-detectors-work/">How Do AI Detectors Work? Key Methods and Limitations | Grammarly</a></li>

</ul>
</details>

**社区讨论**: 社区成员提供了具体的“痕迹”例子（如“the smoking gun:”），并给出了细致的建议：利用大语言模型来批评结构和风格，但避免直接复制其措辞，以防同质化自己的语言风格。

**标签**: `#LLM`, `#AI detection`, `#writing style`, `#Hacker News`

---

<a id="item-10"></a>
## [Anthropic 年化收入达 470 亿美元](https://simonwillison.net/2026/May/29/anthropic/#atom-everything) ⭐️ 7.0/10

Anthropic 在其 H 轮融资公告中透露，其年化收入已于本月早些时候突破 470 亿美元，较 2026 年 4 月报告的 300 亿美元大幅增长。 对于一家已达此规模的公司而言，这种超高速增长在历史上是前所未有的，表明企业对 AI 服务的采用非常积极，并深刻影响着 AI 行业的竞争格局和未来投资。 年化收入是一种年化预测指标，通过将最近一个月的收入乘以 12 来计算，它提供的是前瞻性增长指标，而非精确的年度总收入。这些数据是在向投资者发布的官方融资公告中披露的，由于证券监管规定，故意误报的可能性极低。

rss · Simon Willison · May 29, 01:23

**背景**: 年化收入是一种财务指标，用于根据公司最近的收入数据预测其年度表现。Anthropic 是一家领先的人工智能公司，以其 Claude 系列模型而闻名，随着企业越来越多地集成 AI 服务，该公司正经历爆炸式增长。Anthropic 一直在其融资公告中定期披露此指标，以展示其增长轨迹。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.wallstreetprep.com/knowledge/run-rate-revenue/">Run Rate Revenue | Formula + Calculator</a></li>
<li><a href="https://www.investopedia.com/terms/r/runrate.asp">investopedia.com/terms/r/runrate.asp</a></li>

</ul>
</details>

**社区讨论**: 存在一些对收入数字的怀疑，主要因为这些数据是 Anthropic 自我报告的；然而，有反驳观点指出，在融资期间误导投资者将构成证券欺诈。其他讨论还强调了有关巨额 AI 支出的轶事证据，例如据报道一位客户单月在 Claude 许可证上花费了 5 亿美元。

**标签**: `#AI industry`, `#Business metrics`, `#Anthropic`, `#Revenue growth`

---

<a id="item-11"></a>
## [YouTube 调整 AI 视频标注，自动添加未申报内容标签](https://blog.youtube/news-and-events/improving-ai-labels-viewers-creators/) ⭐️ 7.0/10

从 2026 年 5 月起，YouTube 将使 AI 标签在逼真 AI 生成的视频中更加显眼，并且如果创作者未主动申报，系统将自动添加标签。 这一改变增强了主要平台上 AI 生成内容的透明度，并可能影响行业对内容标注的标准。 对于不太逼真或轻微修改的内容，标签仍放在展开描述中；创作者可以更正标签，但使用 YouTube AI 工具生成或带有 C2PA 元数据的标签是永久性的。

telegram · zaihuapd · May 28, 04:18

**背景**: C2PA 是一个行业标准，用于内容溯源，提供技术框架来验证数字内容的来源和编辑历史。YouTube 的政策更新旨在应对 AI 生成媒体对透明度日益增长的需求。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://c2pa.org/">C 2 PA | Verifying Media Content Sources</a></li>
<li><a href="https://en.wikipedia.org/wiki/Content_Authenticity_Initiative">Content Authenticity Initiative - Wikipedia</a></li>

</ul>
</details>

**标签**: `#AI-generated content`, `#content labeling`, `#YouTube`, `#digital media`, `#AI policy`

---

<a id="item-12"></a>
## [DOMD：自研渲染引擎的 Markdown 所见即所得编辑器](https://github.com/do-md/domd) ⭐️ 7.0/10

DOMD 作为一个开源、本地优先的 Markdown 所见即所得编辑器发布，它搭载了自研的 20KB 渲染引擎，并通过 domd-cli 等工具支持 AI 集成。 该编辑器很重要，因为它引入了创新的轻量级且快速的渲染引擎，通过本地优先的方式和流畅的 AI 功能（如流式文本生成）可能提升开发者的生产力。 该编辑器拥有一个 gzip 压缩后仅 20KB 的内核，除 React 外无运行时依赖，采用单一数据源和不可变状态以确保操作间的性能一致，并提供基于 Tauri 的 macOS 原生版本，支持 Quick Look 扩展以预览文件。

telegram · zaihuapd · May 28, 05:48

**背景**: 富文本编辑器通常依赖 ProseMirror、Slate 或 Lexical 等框架实现所见即所得功能，但 DOMD 从零自研渲染引擎以实现极小体积。Tauri 是一个用于构建轻量级、安全桌面应用的开源框架，而本地优先软件优先将数据存储在用户设备上，以提高数据持久性和用户控制权，区别于以云为中心的模式。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://liveblocks.io/blog/which-rich-text-editor-framework-should-you-choose-in-2025">Which rich text editor framework should you choose... | Liveblocks blog</a></li>
<li><a href="https://v1.tauri.app/">Build smaller, faster, and more secure desktop applications ... | Tauri v1</a></li>
<li><a href="https://www.inkandswitch.com/essay/local-first/">Local - first software : You own your data, in spite of the cloud</a></li>

</ul>
</details>

**标签**: `#Markdown Editor`, `#Open Source`, `#Rendering Engine`, `#Local-First`, `#AI Integration`

---

<a id="item-13"></a>
## [NBA 拟用 AI 自动判罚出界](https://cybernews.com/ai-news/nba-ai-camera-out-of-bounds-replay-challenges/) ⭐️ 7.0/10

NBA 总裁亚当·萧华宣布，联盟将引入类似鹰眼技术的 AI 系统，自动判定出界等客观判罚，无需裁判人工确认或教练挑战。 此举通过减少人为错误，可能显著提高篮球裁判的公平性和效率，并为 AI 在体育及其他行业的实时决策应用树立了先例。 该系统将利用场边摄像机即时判定球权归属，具体落地时间未定但亚当·萧华称会“相当快”，裁判将专注于犯规等主观裁量环节。

telegram · zaihuapd · May 28, 10:08

**背景**: 鹰眼是一种计算机视觉系统，自 2001 年以来广泛应用于网球和板球等运动中，用于球迹追踪和裁判辅助，提高了准确性。NBA 计划采用类似 AI 技术进入篮球领域，这建立在体育科技现有进步的基础上。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Hawk-Eye">Hawk - Eye - Wikipedia</a></li>
<li><a href="https://www.hawkeyeinnovations.com/">Hawk - Eye | A global leader in the live sports arena</a></li>

</ul>
</details>

**标签**: `#AI`, `#sports technology`, `#computer vision`, `#officiating`

---