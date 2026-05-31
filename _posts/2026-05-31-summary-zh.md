---
layout: default
title: "Horizon Summary: 2026-05-31 (ZH)"
date: 2026-05-31
lang: zh
---

> From 30 items, 12 important content pieces were selected

---

1. [Zig 语言宣布其 ELF 链接器获得重大性能提升](#item-1) ⭐️ 8.0/10
2. [Anthropic 发布新文档详细说明 Claude 的沙箱隔离方法](#item-2) ⭐️ 8.0/10
3. [微软将在 2026 年前将永久授权 Office 产品降级为只读模式](#item-3) ⭐️ 7.0/10
4. [领域专业知识被视为人工智能时代持久的竞争护城河](#item-4) ⭐️ 7.0/10
5. [2017 年重现 Comanche 体素地形算法引起社区关注](#item-5) ⭐️ 7.0/10
6. [OpenRouter 完成 1.13 亿美元 B 轮融资](#item-6) ⭐️ 7.0/10
7. [OpenBSD 团队发布安全增强版 rsync 实现：Openrsync](#item-7) ⭐️ 7.0/10
8. [Pandoc 模板资源与社区讨论](#item-8) ⭐️ 7.0/10
9. [教皇利奥的首份通谕批评技术弥赛亚主义](#item-9) ⭐️ 7.0/10
10. [Pyodide 与服务工作线程实现浏览器内运行完整 Python ASGI 应用](#item-10) ⭐️ 7.0/10
11. [英伟达、Windows 与 Arm 同步预告 PC 新时代，N1X 笔记本芯片或于 Computex 亮相](#item-11) ⭐️ 7.0/10
12. [研究揭示 FROST 攻击通过 SSD 计时推测用户活动](#item-12) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [Zig 语言宣布其 ELF 链接器获得重大性能提升](https://ziglang.org/devlog/2026/#2026-05-30) ⭐️ 8.0/10

Zig 的开发日志详细介绍了其内置 ELF 链接器的显著增强，重点在于实现更快的编译速度并增加对增量构建的支持。 这些改进直接提升了开发者的迭代速度和效率，使 Zig 作为一种高性能系统语言更具竞争力，并巩固了其作为 C 语言可行替代品的地位。 增量链接能力是一项旨在加速开发周期的关键技术特性，但它可能与链接时优化（LTO）相互排斥，后者通常用于发布构建。

hackernews · kristoff_it · May 30, 17:29

**背景**: 可执行与可链接格式（ELF）是类 Unix 系统中用于可执行文件和共享库的通用标准。链接器的工作是将编译后的目标文件合并成一个单一的可执行程序。Zig 是一种旨在改进 C 语言的系统编程语言，其集成的工具链（包括链接器）是其核心价值主张的一部分。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Executable_and_Linkable_Format">Executable and Linkable Format - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Zig_(programming_language)">Zig (programming language) - Wikipedia</a></li>
<li><a href="https://noratrieb.dev/blog/posts/elf-linkage/">ELF Linking and Symbol Resolution :: Noratrieb's blog</a></li>

</ul>
</details>

**社区讨论**: 社区情绪非常乐观，开发者们对 Zig 有潜力成为高性能开发领域的‘C 语言替代者’表示兴奋，认为它能实现类似脚本语言的快速迭代。讨论也强调了 Zig 因其卓越的构建系统设计而被其他语言用作转译目标。

**标签**: `#Zig`, `#Linker`, `#Systems Programming`, `#Compiler Toolchain`, `#Performance Optimization`

---

<a id="item-2"></a>
## [Anthropic 发布新文档详细说明 Claude 的沙箱隔离方法](https://simonwillison.net/2026/May/30/how-we-contain-claude/#atom-everything) ⭐️ 8.0/10

Anthropic 发布了一份详细的技术概述，介绍了其 Claude.ai、Claude Code 和 Cowork 等产品所采用的沙箱隔离方法。文档明确列出了具体工具：Claude.ai 使用 gVisor，Claude Code 在 macOS 上使用 Seatbelt，在 Linux 上使用 Bubblewrap，而 Cowork 则使用完整的虚拟机。 这种级别的隔离方法公开文档具有重要意义，因为它为人工智能安全工程的透明度树立了先例。它允许开发者和用户理解人工智能代理的信任边界，随着这些模型越来越深度地集成到产品和工作流中，这一点至关重要。 隔离技术根据每个产品的运行环境进行定制，其中 Claude Cowork 通过在 macOS 和 Windows 上使用完整虚拟机采用了最严格隔离方案。文档还透明地讨论了过去的安全疏漏，例如通过 `api.anthropic.com/v1/files` 端点的文件泄露漏洞，这展示了其以开放态度应对安全漏洞的方法。

rss · Simon Willison · May 30, 21:36

**背景**: 沙箱是一种安全机制，它将应用程序或进程限制在一个受限环境中，限制其对宿主系统资源和数据的访问。在像 Claude 这样的人工智能代理的语境下，沙箱对于防止意外操作、数据泄露或恶意利用至关重要。像 gVisor（谷歌开发的容器沙箱）、macOS Seatbelt（一个内置的沙箱配置文件）和 Bubblewrap（一个轻量级的 Linux 沙箱工具）等工具，都是在操作系统层面执行这些边界隔离的成熟技术。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/GVisor">gVisor - Wikipedia</a></li>
<li><a href="https://github.com/containers/bubblewrap">GitHub - containers/ bubblewrap : Low-level unprivileged sandboxing ...</a></li>
<li><a href="https://hacktricks.wiki/en/macos-hardening/macos-security-and-privilege-escalation/macos-security-protections/macos-sandbox/index.html">macOS Sandbox - HackTricks</a></li>

</ul>
</details>

**标签**: `#AI safety`, `#sandboxing`, `#documentation`, `#Anthropic`, `#Claude`

---

<a id="item-3"></a>
## [微软将在 2026 年前将永久授权 Office 产品降级为只读模式](https://consumerrights.wiki/w/Microsoft_Office_2019_and_2021_for_Mac_view-only_conversion_(2026)) ⭐️ 7.0/10

微软宣布，其永久授权的离线版 Office 产品（特别是 Mac 版的 Office 2019 和 2021）将在 2026 年之前失去完整的编辑功能，并被转换为只读模式。 此举从根本上改变了一次性“永久”授权的价值主张，引发了严重的消费者权益担忧，并可能为其他软件供应商设定先例，对已购买的软件进行追溯性降级。 此变更将通过软件更新强制执行，不再更新的旧版本也可能受到影响，迫使用户订阅 Microsoft 365 才能继续获得完整的功能。

hackernews · antipurist · May 30, 23:26

**背景**: 永久软件许可是一种一次性付费即可无限期使用的模式，传统上不同于需要持续付费的订阅模式（如 Microsoft 365）。“离线”或“永久”授权的软件历来因其不依赖厂商的持续监督或互联网连接而受到重视。数字版权管理（DRM）和许可验证机制被供应商用来执行条款，在本案例中，这些机制可被用于远程限制软件功能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://lawtriva.com/perpetual-software-licenses/">Understanding Perpetual Software Licenses: Benefits and Key ...</a></li>
<li><a href="https://legalclarity.org/perpetual-software-license-how-it-works-and-your-rights/">Perpetual Software License: How It Works and Your Rights</a></li>

</ul>
</details>

**社区讨论**: 社区的反应极为负面，用户表达了愤怒并呼吁抵制微软产品。一些评论指出此行为可能在澳大利亚等地区违反了消费者法，该法律保障消费者不受干扰地拥有产品以及产品应适合其宣传用途。其他人则推荐转向 LibreOffice 等免费开源替代品，并将供应商锁定视为一个核心担忧。

**标签**: `#microsoft`, `#software-licensing`, `#consumer-rights`, `#office-suite`, `#vendor-lock-in`

---

<a id="item-4"></a>
## [领域专业知识被视为人工智能时代持久的竞争护城河](https://www.brethorsting.com/blog/2026/05/domain-expertise-has-always-been-the-real-moat/) ⭐️ 7.0/10

一篇博客文章提出，尽管人工智能工具快速发展，关于开发者所需技能的叙事不断变化，但深厚的领域专业知识在科技行业中仍然是根本且持久的竞争优势。 这一观点为围绕人工智能的炒作提供了战略性的反面视角，它建议技术专业人士和公司应专注于培养深厚的行业知识，将其作为关键差异点，而不仅仅是追逐最新的人工智能工具技能。 这篇文章的重要性通过读者的高度参与和讨论得以凸显，评论者既认同领域知识的重要性，也辩论其持久性，部分人还提供了领域专家指导人工智能辅助开发的真实案例。

hackernews · aaronbrethorst · May 30, 20:40

**背景**: 领域专业知识指在特定行业或领域（如医疗、金融、物流）内的专门知识和技能。竞争性“护城河”是一个商业概念，指的是保护公司免受竞争对手侵害的可持续优势。相关的辩论通常围绕人工智能工具能否侵蚀像深厚专业知识这样的传统优势。

**社区讨论**: 社区的反应虽有分歧但很有深度：一些用户对人工智能影响的叙事不断变化感到沮丧，而另一些人则认同，领域专家对于有效利用人工智能工具至关重要，数据库设计和渔业应用的例子就说明了这一点。一个关键的反驳观点是，如果借助人工智能可以快速学习领域知识，那么领域知识本身可能也不是永久的护城河。

**标签**: `#domain-expertise`, `#artificial-intelligence`, `#software-development`, `#competitive-advantage`, `#tech-trends`

---

<a id="item-5"></a>
## [2017 年重现 Comanche 体素地形算法引起社区关注](https://s-macke.github.io/VoxelSpace/) ⭐️ 7.0/10

2017 年，一个基于网络的 Voxel Space 引擎重现被开发，该引擎源自 1992 年的游戏《Comanche》，使现代用户能够访问这一历史地形渲染算法。 这次重现对于教育目的具有价值，让开发者和爱好者能够研究 1990 年代初的一种开创性渲染技术，并激发了关于现代改编和游戏开发历史背景的讨论。 该算法使用基于高度图的棱柱方法，而非真正的体积体素，正如社区讨论所澄清，并已被移植到现代引擎如 C++和 AGS 中以进行进一步实验。

hackernews · davikr · May 30, 14:25

**背景**: 《Comanche》于 1992 年发布，是一款飞行模拟游戏，使用专有的 Voxel Space 引擎进行基于体素的地形渲染，与当时的基于多边形的游戏相比，提供了高度详细的环境。体素是表示网格上 3D 空间的体积像素，该引擎以汇编语言实现以提高效率。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Comanche_(video_game_series)">Comanche (video game series) - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Voxel">Voxel - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Voxel_Space">Voxel Space - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 社区评论包括技术澄清，指出渲染是基于高度图的，而非真正的体素；类比于软件测试；以及对其他引擎移植的报告，反映了怀旧与技术兴趣的结合。

**标签**: `#computer-graphics`, `#game-development`, `#voxel-rendering`, `#historical-technology`, `#software-engineering`

---

<a id="item-6"></a>
## [OpenRouter 完成 1.13 亿美元 B 轮融资](https://openrouter.ai/announcements/series-b) ⭐️ 7.0/10

OpenRouter 是一家提供统一 API 以访问多个大型语言模型（LLM）的平台，该公司已完成其 B 轮 1.13 亿美元的融资。 这笔重大融资凸显了简化开发者访问和编排 LLM 的基础设施所起到的关键且日益增长的作用，并验证了中间件在快速发展的 AI 生态系统中的商业潜力。 OpenRouter 作为一个路由层运作，通过单一的 API 密钥和计费系统让开发者访问数百个模型，其功能包括许多独立供应商尚未普遍提供的支出上限。

hackernews · freeCandy · May 30, 17:27

**背景**: 随着来自不同供应商（如 OpenAI、Anthropic、谷歌）的可用大型语言模型数量激增，开发者面临着管理多个 API、密钥和计费系统的复杂性。LLM 编排和路由平台应运而生，通过提供统一接口、智能模型选择和成本管理来解决这一问题，从而构成了 AI 基础设施的关键组成部分。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.codecademy.com/article/what-is-openrouter">What is OpenRouter? A Guide with Practical Examples | Codecademy</a></li>
<li><a href="https://aimultiple.com/llm-orchestration">LLM Orchestration in 2026: Top 22 frameworks and gateways</a></li>
<li><a href="https://www.datacamp.com/tutorial/openrouter">OpenRouter: A Guide With Practical Examples | DataCamp</a></li>

</ul>
</details>

**社区讨论**: 社区讨论围绕 OpenRouter 的价值主张展开；支持者强调其低门槛访问众多模型的便利性和实用的账单控制功能。批评者则指出该平台 5%的费用，质疑其在生产环境中重度使用单一模型的成本效益，并讨论如果 LLM 市场整合为少数主导厂商，其长期效用会如何。

**标签**: `#AI`, `#LLM`, `#startup`, `#funding`, `#developer-tools`

---

<a id="item-7"></a>
## [OpenBSD 团队发布安全增强版 rsync 实现：Openrsync](https://github.com/kristapsdz/openrsync) ⭐️ 7.0/10

OpenBSD 团队开发并发布了 openrsync，这是一个开源、采用 BSD 许可证的广泛使用文件同步工具 rsync 的实现，并重点关注内建的安全功能。 这为传统的 rsync 实现提供了一个安全加固的替代方案，对安全敏感的环境、系统管理员以及寻求健壮且可审计工具的整个生态系统都尤为重要。 该实现大量利用了 OpenBSD 原生的安全机制，如 `pledge(2)` 和 `unveil(2)`，以限制运行中的进程可用的系统调用和文件系统访问，从而大幅减少攻击面。

hackernews · sph · May 30, 10:51

**背景**: rsync 是一个基础工具，用于通过网络高效传输和同步文件，它使用一种算法，仅发送差异部分以最大限度地减少数据传输量。OpenBSD 是一个以安全为中心的开发理念而闻名的操作系统，它在代码审计和集成安全功能方面采取主动的方法。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/kristapsdz/openrsync">GitHub - kristapsdz/openrsync: BSD-licensed implementation of ...</a></li>
<li><a href="https://man.openbsd.org/openrsync">openrsync (1) - OpenBSD manual pages</a></li>
<li><a href="https://www.openrsync.org/">OpenRsync</a></li>

</ul>
</details>

**社区讨论**: 用户报告了对其日益成熟的积极体验，但也指出了在指定远程路径时与 Samba 的 rsync 存在一些行为差异。讨论还强调了其为新 RPKI 验证器开发的背景、存在一个基于 Go 的替代 rsync 实现，并提出了一个关于将其关键安全特性（如 `pledge`）移植到其他 Linux 系统的重要问题。

**标签**: `#openbsd`, `#rsync`, `#security`, `#systems-programming`, `#file-synchronization`

---

<a id="item-8"></a>
## [Pandoc 模板资源与社区讨论](https://pandoc-templates.org/) ⭐️ 7.0/10

一个新的 Pandoc 模板在线资源被分享并在社区中讨论，突显了文档格式化的多种设计和使用案例。 该资源为 Pandoc 用户提供了访问和分享模板的中心枢纽，简化了文档处理工作流程，同时社区见解揭示了实际益处、集成挑战以及像 Quarto 这样的替代工具。 社区反馈表明，Pandoc 模板在学术写作和小说排版等任务中用途广泛，但用户报告了 PDF 生成的问题，如表格布局问题和 Unicode 字体回退限制。

hackernews · ankitg12 · May 30, 09:56

**背景**: Pandoc 是一个通用的文档转换器，使用模板来自定义各种文档类型的输出格式。模板是包含变量的纯文本文件，Pandoc 用生成的内容替换这些变量，从而实现从 Markdown 到 Word、PDF 和其他格式转换时的一致格式化。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://pandoc.org/demo/example33/6.1-template-syntax.html">Template syntax - pandoc.org</a></li>
<li><a href="https://github.com/jgm/pandoc/blob/main/doc/customizing-pandoc.md">pandoc/doc/customizing-pandoc.md at main · jgm/pandoc</a></li>

</ul>
</details>

**社区讨论**: 用户对 Pandoc 的实用性表示赞赏，但强调了 PDF 生成等挑战，并推荐像 Quarto 这样的工具以改进工作流程；一些人还指出对模板资源缺乏了解，并讨论了相关项目如 Metanorma，用于符合标准的输出。

**标签**: `#pandoc`, `#document-processing`, `#templates`, `#software-tools`, `#academic-writing`

---

<a id="item-9"></a>
## [教皇利奥的首份通谕批评技术弥赛亚主义](https://www.economist.com/europe/2026/05/28/leos-first-encyclical-attacks-technological-messianism) ⭐️ 7.0/10

教皇利奥发布了他的首份通谕，直接抨击技术弥赛亚主义的信仰，并警告不要用人工智能取代人类。 这份通谕将一个备受瞩目的道德批评引入人工智能伦理、控制和社会影响的辩论中，可能塑造公众舆论和技术政策讨论。 通谕特别警告不要用人工智能取代人类，但指出教皇本人似乎使用了人工智能，这形成了对技术角色的细致立场。

hackernews · 1vuio0pswjnm7 · May 30, 10:30

**背景**: 技术弥赛亚主义是一种坚信技术总能解决人类问题并推动进步的信仰，常与对创新的世俗信仰相关。AI 对齐是一个研究领域，专注于确保人工智能系统按照人类意图和价值观行动，以防止意外伤害，这是人工智能安全讨论的核心。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.economist.com/europe/2026/05/28/leos-first-encyclical-attacks-technological-messianism">Leo’s first encyclical attacks technological messianism</a></li>
<li><a href="https://en.wikipedia.org/wiki/AI_alignment">AI alignment</a></li>
<li><a href="https://blindsight.substack.com/p/techno-messianism-the-ouroboros-of">Techno-Messianism: The Ouroboros of Western Liberal Democracy Leo’s first encyclical attacks technological messianism Technological Messianism - Crisis Magazine Günther Anders’s “Promethean Shame”: Technological ... The Crossroads of Power: America’s Democratic ... - Medium The illusion of limitlessness: Engaging Cornel du Toit’s ... Technological messianism - Subtle Engine</a></li>

</ul>
</details>

**社区讨论**: 社区讨论包括提及彼得·蒂尔想法的评论，对人工智能领导者如萨姆·奥特曼等人推动准宗教信仰的批评，以及关于谁应该控制技术的辩论，从技术专家到宗教权威。

**标签**: `#artificial intelligence`, `#ethics`, `#technology policy`, `#societal impact`

---

<a id="item-10"></a>
## [Pyodide 与服务工作线程实现浏览器内运行完整 Python ASGI 应用](https://simonwillison.net/2026/May/30/pyodide-asgi-browser/#atom-everything) ⭐️ 7.0/10

Simon Willison 成功地将服务工作线程（Service Worker）与 Pyodide 结合使用，在浏览器中运行像 Datasette 这样的 Python ASGI 应用程序，解决了之前使用 Web Worker 方案时，`<script>` 标签内的 JavaScript 无法执行的问题。 此技术使得功能完整的、原本在服务器端运行的 Python Web 应用程序可以完全在浏览器客户端运行，从而为离线应用、渐进式 Web 应用（PWA）以及利用现代 Web 标准简化部署开辟了新的可能性。 作者通过 Claude Code 使用了 Claude Opus 4.8 来帮助开发服务工作线程的实现。尽管作者仍在分析其确切的工作机制，但已成功创建了用于基本 ASGI 应用程序和 Datasette 1.0a31 的可运行演示。

rss · Simon Willison · May 30, 21:02

**背景**: Pyodide 是一个将 CPython 编译成 WebAssembly 的项目，使得 Python 代码可以在浏览器中原生运行。ASGI（异步服务器网关接口）是 Python 异步 Web 服务器和应用程序的标准，是 WSGI 的异步继承者。服务工作线程（Service Workers）是浏览器脚本，可以拦截和处理网络请求，充当浏览器与网络之间的可编程代理。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/pyodide/pyodide">GitHub - pyodide/pyodide: Pyodide is a Python distribution ...</a></li>
<li><a href="https://asgi.readthedocs.io/">ASGI Documentation — ASGI 3.0 documentation</a></li>

</ul>
</details>

**标签**: `#Python`, `#WebAssembly`, `#ASGI`, `#Service Workers`, `#Browser`

---

<a id="item-11"></a>
## [英伟达、Windows 与 Arm 同步预告 PC 新时代，N1X 笔记本芯片或于 Computex 亮相](https://x.com/nvidia/status/2060390710797328574) ⭐️ 7.0/10

英伟达、微软 Windows 和 Arm 协调发布了内容相同的“PC 新时代”预告，其坐标指向台北 Computex 活动地点，强烈暗示将有重大硬件发布。 三大行业巨头同步进行预告，标志着个人电脑笔记本电脑市场可能发生重大转变，英伟达的入局将挑战高通骁龙芯片在 Windows on ARM 设备上的现有主导地位。 近期的报道和泄露信息显示，此次预告很可能指的是英伟达 N1X Arm SoC。据传该芯片将搭载 RTX 5070 级别的 GPU、拥有 20 个 CPU 核心和 6144 个 CUDA 核心，并将支持英伟达的完整 CUDA 软件栈。

telegram · zaihuapd · May 30, 08:37

**背景**: ARM 架构是一系列基于精简指令集（RISC）的处理器设计，以其高能效比著称，因此在移动设备中广受欢迎，并越来越多地应用于笔记本电脑。Windows on ARM 指的是微软在基于 ARM 处理器的设备上运行的操作系统，此前主要平台一直是高通的骁龙系列。英伟达在独立显卡和高性能计算领域占据主导地位，而这款芯片标志着其首次大举进军集成式 ARM 笔记本处理器市场，将与高通展开直接竞争。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.techtimes.com/articles/317428/20260530/nvidia-arm-laptop-chip-n1x-confirmed-computex-cuda-rtx-5070-gpu-onboard.htm">Nvidia ARM Laptop Chip N1X Confirmed for Computex: CUDA and ...</a></li>
<li><a href="https://tbreak.com/nvidia-n1-n1x-laptop-chips-computex/">NVIDIA N1 N1X laptop chips: Computex reveal 1 June | tbreak</a></li>
<li><a href="https://www.guru3d.com/story/nvidia-n1x-arm-soc-leak-reveals-specs-delayed-launch-to-2027/">NVIDIA N1X Arm SoC Leak Reveals Specs, Delayed Launch to ...</a></li>

</ul>
</details>

**标签**: `#NVIDIA`, `#ARM`, `#Computex`, `#laptop chip`, `#PC hardware`

---

<a id="item-12"></a>
## [研究揭示 FROST 攻击通过 SSD 计时推测用户活动](https://futurism.com/future-society/websites-spying-solid-state-drive) ⭐️ 7.0/10

研究人员披露了一种名为 FROST 的新型基于浏览器的侧信道攻击，它可以通过 OPFS API 测量 SSD 计时的变化来推断用户访问的网站或使用的应用程序，在无需任何用户交互的情况下达到了较高的准确率（网站 88.95%，应用 95.83%）。 此次攻击揭示了在 Web 技术与硬件交界处存在的一种重大且隐蔽的隐私威胁，表明恶意网站可以通过利用基础存储硬件的计时侧信道，悄无声息地跨浏览器分析用户活动。 该攻击需要恶意网站配置特定的 HTTP 头部（COOP 和 COEP）以解锁高分辨率浏览器计时器，实验仅在 Mac 和 Linux 上进行，但研究人员指出 Windows 也并非免疫；一个简单的缓解措施是在访问敏感网站后及时关闭浏览器标签页。

telegram · zaihuapd · May 31, 01:55

**背景**: FROST 利用了源私有文件系统（OPFS），这是一个相对较新的浏览器 API，允许 Web 应用程序在私有、源特定的文件系统中存储二进制数据。该攻击的核心是利用 SSD 争用侧信道：当多个进程或标签页访问同一个 SSD 时，它们的 I/O 操作会相互干扰，产生可测量的计时变化，这些变化可用于推断活动，甚至可以跨不同浏览器进行。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://cyberpress.org/sites-ssd-timing-side-channel-attacks/">Malicious Sites Track Users Through SSD Timing Side-Channel Attacks</a></li>
<li><a href="https://cybersecuritynews.com/malicious-websites-track-ssd-timing/">Malicious Websites Track Visitors by Analyzing their SSD ...</a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system">Origin private file system - Web APIs | MDN</a></li>

</ul>
</details>

**标签**: `#security`, `#privacy`, `#web-exploits`, `#SSD-timing`, `#browser-security`

---