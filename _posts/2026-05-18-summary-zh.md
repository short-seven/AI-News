---
layout: default
title: "Horizon Summary: 2026-05-18 (ZH)"
date: 2026-05-18
lang: zh
---

> From 19 items, 8 important content pieces were selected

---

1. [Semble：面向 AI 代理的代码搜索工具，比 grep 少用 98%的代币](#item-1) ⭐️ 8.0/10
2. [Mozilla 呼吁英国监管机构承认 VPN 是至关重要的隐私和安全工具。](#item-2) ⭐️ 8.0/10
3. [80 美元安卓平板变身 Debian Linux 工作站](#item-3) ⭐️ 7.0/10
4. [人工智能可能无法加速软件开发流程](#item-4) ⭐️ 7.0/10
5. [选择原生 API 进行文本渲染，直到它变得复杂](#item-5) ⭐️ 7.0/10
6. [针对 NHS 退出开源的决定，英国政府数字服务部主张‘默认保持开放’](#item-6) ⭐️ 7.0/10
7. [OpenClaw 开发者的 AI 自动化测试单月消耗 130 万美元](#item-7) ⭐️ 7.0/10
8. [欧盟 DMA 推动 Firefox 在欧洲新增逾 600 万用户](#item-8) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [Semble：面向 AI 代理的代码搜索工具，比 grep 少用 98%的代币](https://github.com/MinishLab/semble) ⭐️ 8.0/10

MinishLab 开源了 Semble，这是一款专为 AI 代理设计的代码搜索工具，通过结合静态嵌入与 BM25 排序，声称可比传统基于 grep 的搜索减少 98% 的代币使用。 该工具直接解决了 AI 编码代理的一个关键低效问题——在大型代码库中搜索时产生的过多代币消耗会显著增加运营成本并限制可扩展性，它有潜力让代理运行得更快、更便宜。 Semble 使用自定义的 1600 万参数静态模型（potion-code-16M）生成嵌入，并通过互惠排序融合（RRF）将其结果与 BM25 融合；它完全在 CPU 上运行，无需 GPU 或外部 API 密钥，在其基准测试中达到了 0.854 NDCG@10 的准确度。

hackernews · Bibabomas · May 17, 15:37

**背景**: 像 Claude Code 这样的 AI 编码代理通常依赖 `grep` 等工具搜索代码库，这需要读取完整文件并消耗大量代币（LLM 处理的计费单位）。Model2Vec 是一种从大型 Transformer 模型创建小型、快速静态嵌入模型的技术，而 BM25 是一种根据关键词相关性对文档进行排序的经典信息检索算法。互惠排序融合（RRF）是一种将来自多个搜索模型的排名组合成一个统一结果的方法。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/MinishLab/model2vec">GitHub - MinishLab/model2vec: Fast State-of-the-Art Static Embeddings · GitHub</a></li>
<li><a href="https://en.wikipedia.org/wiki/Okapi_BM25">Okapi BM25 - Wikipedia</a></li>
<li><a href="https://www.elastic.co/docs/reference/elasticsearch/rest-apis/reciprocal-rank-fusion">Reciprocal rank fusion | Elasticsearch Reference</a></li>

</ul>
</details>

**社区讨论**: 讨论指出了实际担忧，例如 AI 代理是否会信任 Semble 提供的非 grep 搜索结果，因为模型已大量基于 grep 模式训练，社区要求提供用 Semble 替代 grep 的真实代理基准测试。其他观点包括代理在处理小型代码库时低效地搜索而非完全加载，以及对该工具语言支持广度的疑问。

**标签**: `#code-search`, `#AI-agents`, `#token-optimization`, `#open-source-tools`, `#embeddings`

---

<a id="item-2"></a>
## [Mozilla 呼吁英国监管机构承认 VPN 是至关重要的隐私和安全工具。](https://blog.mozilla.org/netpolicy/2026/05/15/mozilla-to-uk-regulators-vpns-are-essential-privacy-and-security-tools-and-should-not-be-undermined/) ⭐️ 8.0/10

针对英国政府一项关于在线安全的公众咨询，Mozilla 正式主张将虚拟专用网络（VPN）认可为隐私和安全的必备工具，并认为不应通过年龄验证或其他限制措施来削弱它们。 此次表态凸显了在加强儿童在线安全与保护所有用户数字隐私权利之间的重要政策辩论，其潜在的监管影响可能波及英国安全工具的可用性与设计。 Mozilla 的声明是针对一项名为“在网络世界中成长”的英国政府专项咨询提交的，该咨询文件深处隐藏了一个关于对 VPN 及类似技术实施年龄验证的问题。

hackernews · WithinReason · May 17, 06:17

**背景**: 英国的《在线安全法案》是一项重要立法，旨在通过赋予在线平台新的责任，让互联网（尤其是对儿童而言）变得更加安全。Mozilla 是知名非营利组织，旗下有 Firefox 浏览器，同时也提供付费的 VPN 服务。VPN 是一种加密互联网流量并隐藏用户 IP 地址的工具，常用于在公共网络上增强隐私和安全，以及绕过地理限制。

**社区讨论**: 社区讨论指出，澳大利亚政府竟然推荐并指导公民使用 VPN，提供了一个相反的国际案例。用户呼吁非英国居民也参与此次咨询，强调其全球相关性。同时，一位用户尖锐地建议 Mozilla 应在倡导时披露其作为 VPN 经销商的商业利益。

**标签**: `#privacy`, `#vpn`, `#UK regulation`, `#digital rights`, `#Mozilla`

---

<a id="item-3"></a>
## [80 美元安卓平板变身 Debian Linux 工作站](https://github.com/tech4bot/rk3562deb) ⭐️ 7.0/10

一位开发者成功地将一款基于 Rockchip RK3562 芯片的廉价安卓平板改造成了可以正常工作的 Debian Linux 工作站，大部分硬件功能都已实现。该项目的完整实施细节和指南已在 GitHub 上分享。 此项目展示了将廉价的通用安卓硬件改造成功能强大的 Linux 机器的潜力，这对于教育、嵌入式系统开发和创建经济实惠的工作站非常有价值。它也为 Linux 社区提供了一个将系统移植到非主流 ARM 设备上的实际案例研究。 其核心硬件是 Rockchip RK3562 SoC，一款中端四核 Cortex-A53 处理器。虽然功能可用，但平板电脑 4GB 的运行内存是一个明显的限制，使其更适合轻量级桌面环境或基于终端的工作流，而非多任务重负荷处理。

hackernews · tech4bot · May 17, 13:16

**背景**: Rockchip RK3562 是一款常用于廉价平板电脑和其他消费电子产品的片上系统(SoC)。Rockchip 处理器在嵌入式 Linux 社区中很受欢迎，因为它们的文档和引导加载程序源代码相对容易获取，使其成为此类社区驱动移植项目的目标。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.aiwedo.com/blog/feature/rockchip-rk3562-soc-feature-specifications/">ROCKCHIP RK3562: High-Performance SOC for Consumer and Industrial Computing Applications - AIWEDO.COM</a></li>
<li><a href="https://opensource.rock-chips.com/wiki_Fastboot">Fastboot - Rockchip open source Document</a></li>

</ul>
</details>

**社区讨论**: 社区的讨论积极且务实，集中于实际可用性和扩展性。主要观点包括关于在 4GB 内存上能流畅运行哪些软件的辩论、询问虚拟键盘是否适合编程任务，以及对利用 AI 工具辅助此类移植项目逆向工程的兴趣。

**标签**: `#Linux`, `#Embedded Systems`, `#ARM`, `#DIY`, `#Reverse Engineering`

---

<a id="item-4"></a>
## [人工智能可能无法加速软件开发流程](https://frederickvanbrabant.com/blog/2026-05-15-i-dont-think-ai-will-make-your-processes-go-faster/) ⭐️ 7.0/10

一篇 2026 年的博客文章指出，人工智能，特别是大型语言模型（LLMs），可能无法显著加速软件开发生命周期的整体速度，其核心理由是需求工程中持续存在的瓶颈问题。 这一观点挑战了认为人工智能工具将普遍提升开发者生产力的主流叙事，敦促团队批判性地审视人工智能在其特定工作流程中的适用位置，而非期望它能解决所有流程低效问题。 文章的核心论点是，软件开发的初始阶段，特别是将模糊想法转化为精确、可执行规格说明（即需求工程）的过程，仍然是耗时且需要大量人力的任务，当前的人工智能无法可靠地自动化或显著加速这一过程。

hackernews · TheEdonian · May 17, 12:13

**背景**: 需求工程是软件开发中的一个基本阶段，涉及定义、记录和维护系统的需求。大型语言模型（LLMs）是在海量文本数据上训练以理解和生成类人语言的人工智能系统，常用于聊天机器人和编码助手。相关讨论围绕这些人工智能工具能否克服收集和完善项目需求中固有的困难和主观性展开。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Large_language_model">Large language model - Wikipedia</a></li>
<li><a href="https://www.ibm.com/think/topics/large-language-models">What Are Large Language Models (LLMs)? | IBM</a></li>
<li><a href="https://en.wikipedia.org/wiki/Requirements_engineering">Requirements engineering - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 社区普遍认同模糊的需求是一个根本性瓶颈，一些用户分享了接收到定义不清任务的经验。然而，也有人认为文章低估了人工智能在编码之外的影响，指出其在构思、文档编制和部署阶段可能带来的辅助作用。

**标签**: `#AI`, `#software engineering`, `#productivity`, `#LLMs`, `#requirements engineering`

---

<a id="item-5"></a>
## [选择原生 API 进行文本渲染，直到它变得复杂](https://justsitandgrin.im/posts/native-all-the-way-until-you-need-text/) ⭐️ 7.0/10

一篇技术博客文章引发了一场详细的社区讨论（265 条评论），比较了在软件中使用原生平台 API 与内嵌 Web 视图（如 WebKit）进行文本渲染的复杂性与权衡。 这场辩论凸显了开发者构建富文本应用时的一个关键决策点，原生技术与 Web 技术之间的选择会显著影响性能、开发复杂性和功能访问。 原生 API 的支持者，如 iOS 上的 TextKit 2，引用了卓越的性能基准，显示每次按键的重新样式化时间低于 8 毫秒；而 Web 视图的支持者则认为，现代浏览器引擎（如 WebKit）已非常成熟，具备 GPU 加速，并且在 macOS 上本身就可以是原生操作系统组件。

hackernews · dive · May 17, 11:49

**背景**: 在原生软件开发中，“原生 API”指操作系统提供的平台特定框架（如苹果的 TextKit、Windows 的 DirectWrite），用于底层控制和提升性能。“Web 视图”是一种嵌入网页浏览器引擎（如 WebKit、Blink 或 Gecko）的组件，以在原生应用内渲染 HTML/CSS/JavaScript。文本渲染，特别是对于复杂文字或富格式，涉及文本塑形（由 HarfBuzz 等引擎处理）和布局等复杂过程，开发者必须选择其底层技术。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/HarfBuzz">HarfBuzz - Wikipedia</a></li>
<li><a href="https://daringfireball.net/2025/04/webkit_textwrap_pretty">Daring Fireball: WebKit Adds Support for ‘text-wrap: pretty’, Now Shipping in Safari Technology Preview</a></li>

</ul>
</details>

**社区讨论**: 讨论中出现了强烈对立的观点：一些开发者分享了成功的高性能原生实现案例，而另一些人则质疑前提，认为现代 Web 引擎已足够高效，并且高级原生 API（如 SwiftUI）的复杂性可能超过其带来的好处。

**标签**: `#native development`, `#text rendering`, `#performance optimization`, `#web technologies`, `#software engineering`

---

<a id="item-6"></a>
## [针对 NHS 退出开源的决定，英国政府数字服务部主张‘默认保持开放’](https://simonwillison.net/2026/May/17/gds-weighs-in/#atom-everything) ⭐️ 7.0/10

英国政府数字服务部（GDS）于 2026 年 5 月 14 日发布指导意见，明确建议公共部门机构应‘默认保持开放’，仅在审慎考虑后才关闭代码，此举直接回应了 NHS 决定将其代码仓库设为私有的事件。 这是一个中央政府数字机构发布的重要公开政策声明，可能为英国其他公共部门机构在开源和安全方面的技术策略树立先例并产生影响。 虽然 GDS 的指导文件没有直接点名 NHS，但观察人士将其解读为一次重大升级和对 NHS 决定的公开批评，该决定是针对通过 Project Glasswing 项目发现的安全漏洞而做出的。

rss · Simon Willison · May 17, 15:59

**背景**: 英国政府数字服务部（GDS）是政府中央数字和技术办公室。此前，NHS 在通过 Project Glasswing 项目接到安全漏洞报告后，决定将其开源代码仓库转为私有。此举引发了关于平衡开源协作与安全性的讨论。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.anthropic.com/glasswing">Project Glasswing: Securing critical software for the AI era</a></li>

</ul>
</details>

**标签**: `#open source`, `#government policy`, `#NHS`, `#vulnerability management`, `#public sector`

---

<a id="item-7"></a>
## [OpenClaw 开发者的 AI 自动化测试单月消耗 130 万美元](https://www.tomshardware.com/tech-industry/artificial-intelligence/openclaw-creator-burns-through-1-3-million-in-openai-api-tokens-in-a-single-month) ⭐️ 7.0/10

OpenClaw 开发者 Peter Steinberger 披露，其团队在 30 天内为了压力测试自主 AI 代理，在 OpenAI API Token 上花费了 130 万美元，涉及 6030 亿个 Token 和 760 万次请求。 这一事件凸显了使用商业 API 构建大规模自主 AI 系统所面临的极端运营成本和可扩展性挑战，为 AI 经济学和基础设施规划提供了一个具体的数据点。 高额成本主要由使用 Codex 的“快速模式”计费导致，所使用的模型被列为 GPT-5.5（2026 年 4 月 23 日版本）。若禁用快速模式，原始 API 成本将降至约 30 万美元。

telegram · zaihuapd · May 17, 13:38

**背景**: OpenClaw 是一个开源的自主 AI 代理，旨在通过大型语言模型和消息平台执行任务。GPT-5.5 是 OpenAI 推出的后续模型，在编码等复杂任务方面能力有所提升。Codex 是 OpenAI 专注于编程的工具，其“快速模式”以更高的信用额度消耗率为代价提供更快的响应速度。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/OpenClaw">OpenClaw - Wikipedia</a></li>
<li><a href="https://developers.openai.com/codex/pricing">Pricing – Codex | OpenAI Developers</a></li>
<li><a href="https://openai.com/index/introducing-gpt-5-5/">Introducing GPT - 5 . 5 | OpenAI</a></li>

</ul>
</details>

**标签**: `#AI costs`, `#OpenAI API`, `#AI automation`, `#Codex`, `#GPT-5.5`

---

<a id="item-8"></a>
## [欧盟 DMA 推动 Firefox 在欧洲新增逾 600 万用户](http://news.zol.com.cn/1182/11821187.html) ⭐️ 7.0/10

在欧盟《数字市场法案》实施后，该法案要求移动设备提供浏览器选择界面，Firefox 在欧洲新增了逾 600 万用户，平均每 10 秒就有 1 人将其设为默认浏览器。第三方分析显示，iOS 上的日活跃用户较政策前预测增长了 113%，Android 增长了 12%。 这显示了监管干预对市场竞争的实际影响，挑战了 Safari 和 Chrome 等浏览器的默认主导地位，并可能在全球范围内激励类似的监管措施。Mozilla 倡导将规则扩展到个人电脑，表明了对数字市场公平性的更广泛影响。 根据第三方分析，用户增长在 iOS 设备上尤为显著，日活跃用户增加了 113%，而 Android 则有 12% 的温和增长。Mozilla 已呼吁将《数字市场法案》的浏览器选择义务扩展到桌面操作系统，如 Windows 和 macOS。

telegram · zaihuapd · May 18, 02:32

**背景**: 欧盟《数字市场法案》（DMA）是一项旨在通过为大型“守门人”公司制定规则，使数字市场更公平和更具竞争性的法规。它要求像苹果和谷歌这样的平台在移动设备上为用户提供默认浏览器的选择，而不是强加自己的浏览器。DMA 于 2022 年 11 月生效，并于 2023 年 5 月开始适用于应用商店和浏览器等服务。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blog.mozilla.org/netpolicy/2026/05/11/six-million-selections-later-how-the-dma-is-giving-people-browser-choice/">Six Million Selections Later: How the DMA Is Giving People Browser ...</a></li>
<li><a href="https://digital-markets-act.ec.europa.eu/index_en">Digital Markets Act</a></li>

</ul>
</details>

**标签**: `#EU DMA`, `#Firefox`, `#browser competition`, `#tech regulation`, `#user growth`

---