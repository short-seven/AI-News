---
layout: default
title: "Horizon Summary: 2026-05-13 (ZH)"
date: 2026-05-13
lang: zh
---

> From 37 items, 18 important content pieces were selected

---

1. [CERT 公布 dnsmasq 中的六个严重 CVE 漏洞](#item-1) ⭐️ 8.0/10
2. [DuckDB 推出 Quack 协议，支持远程访问与水平扩展](#item-2) ⭐️ 8.0/10
3. [加拿大 C-22 法案重温引发争议的监控法规](#item-3) ⭐️ 8.0/10
4. [Google 将推出“Googlebook”取代 Chromebook，深度整合 Gemini AI](#item-4) ⭐️ 8.0/10
5. [三星工会抗议导致芯片产出骤降，威胁全球供应链](#item-5) ⭐️ 8.0/10
6. [Needle：面向高效设备端工具调用的 2600 万参数模型](#item-6) ⭐️ 7.0/10
7. [呼吁主要新闻机构维持 Wayback Machine 访问权限](#item-7) ⭐️ 7.0/10
8. [使用图形编程渲染天空、日落和行星](#item-8) ⭐️ 7.0/10
9. [Obsidian 推出新插件生态系统及自动化审查系统](#item-9) ⭐️ 7.0/10
10. [Bambu Lab 被批评违背开源社会契约](#item-10) ⭐️ 7.0/10
11. [llm 0.32a2 Alpha 支持 OpenAI 响应式推理 API](#item-11) ⭐️ 7.0/10
12. [韩国提议从 AI 与半导体利润中设立全民分红](#item-12) ⭐️ 7.0/10
13. [Canvas LMS 遭黑客入侵，冲击美国学校期末周](#item-13) ⭐️ 7.0/10
14. [市场监管总局附条件批准腾讯收购喜马拉雅股权案](#item-14) ⭐️ 7.0/10
15. [Anthropic 拒绝中国智库接触其最新 AI 模型](#item-15) ⭐️ 7.0/10
16. [美国商务部网站删除 AI 安全测试协议细节](#item-16) ⭐️ 7.0/10
17. [SpaceX 与谷歌磋商发射轨道数据中心](#item-17) ⭐️ 7.0/10
18. [Google 发布 Gemini Intelligence AI 功能，登陆 Pixel 和三星最新设备](#item-18) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [CERT 公布 dnsmasq 中的六个严重 CVE 漏洞](https://lists.thekelleys.org.uk/pipermail/dnsmasq-discuss/2026q2/018471.html) ⭐️ 8.0/10

CERT 协调中心公布了针对 dnsmasq 的六个严重通用漏洞披露（CVE），这是一个广泛使用的 DNS 和 DHCP 服务器，详细描述了严重的安全缺陷。 这些漏洞对依赖 dnsmasq 提供关键服务的网络构成重大风险，并引发了社区关于采用内存安全编程语言以提高软件安全性的讨论。 漏洞包括通过 DNS 查询导致的堆越界写入、造成服务中断的无限循环，以及 DHCP 请求中的缓冲区溢出，这些在社区讨论中被提及。

hackernews · chizhik-pyzhik · May 12, 18:12

**背景**: Dnsmasq 是一个轻量级的网络服务工具，为小型网络提供 DNS、DHCP 等功能，如其官方网站所述。内存安全编程语言如 Rust 和 Go 旨在防止内存相关的安全漏洞，这些漏洞在 C 和 C++等语言中很常见。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://thekelleys.org.uk/dnsmasq/doc.html">Dnsmasq - network services for small networks.</a></li>
<li><a href="https://www.analyticsinsight.net/latest-news/memory-safe-programming-languages-what-you-need-to-know">Memory - Safe Programming Languages: What You Need to Know</a></li>

</ul>
</details>

**社区讨论**: 社区成员对这些漏洞表示紧急担忧，一些人主张转向 Rust 或 Go 等内存安全语言，而另一些人则批评 Debian 等 Linux 发行版只回移补丁而不更新到新版本，用户还询问了 OpenWRT 等项目的更新情况，并提到了 MaraDNS 等替代方案。

**标签**: `#security`, `#CVE`, `#dnsmasq`, `#memory-safety`, `#Linux-distributions`

---

<a id="item-2"></a>
## [DuckDB 推出 Quack 协议，支持远程访问与水平扩展](https://duckdb.org/2026/05/12/quack-remote-protocol) ⭐️ 8.0/10

DuckDB 于 2026 年 5 月 12 日正式发布了其原生客户端-服务器协议 Quack。该协议支持对 DuckDB 实例进行远程连接，并允许多个并发写入者，这是实现水平扩展的关键一步。 这解决了 DuckDB 此前只能作为嵌入式库访问的主要实际限制。它将 DuckDB 从一个纯粹的本地分析引擎转变为可在团队和应用程序间共享的引擎，扩大了其在内部平台和协作数据工作中的应用范围。 该协议设计简单，易于部署，并基于 HTTP 构建，符合 DuckDB 的一贯理念。其对速度的专注旨在支持从交互式查询到批量数据操作的广泛工作负载。

hackernews · aduffy · May 12, 17:54

**背景**: DuckDB 是一个开源、进程内的列式数据库管理系统，专为在线分析处理（OLAP）优化。由于其嵌入式特性和对复杂分析查询的高性能，它常被比作“分析领域的 SQLite”。与传统的客户端-服务器数据库不同，它最初被设计为在宿主进程（如 Python 或 Node.js 应用程序）内运行。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://duckdb.org/2026/05/12/quack-remote-protocol">Quack: The DuckDB Client-Server Protocol – DuckDB</a></li>
<li><a href="https://en.wikipedia.org/wiki/DuckDB">DuckDB</a></li>

</ul>
</details>

**社区讨论**: 社区反响普遍积极，用户认为 Quack 是缺失的一环，完善了 DuckDB 成为嵌入式分析标准（类似 SQLite 的角色）的愿景。具体评论强调了其即时实用性，例如解决内部应用程序的水平扩展问题，以及实现对本地运行的数据库实例的远程 UI 访问。

**标签**: `#database`, `#analytics`, `#protocol`, `#DuckDB`, `#client-server`

---

<a id="item-3"></a>
## [加拿大 C-22 法案重温引发争议的监控法规](https://www.eff.org/deeplinks/2026/05/canadas-bill-c-22-repackaged-version-last-years-surveillance-nightmare) ⭐️ 8.0/10

加拿大提出了 C-22 法案，该法案恢复了先前备受争议的监控措施，包括强制性数据留存要求以及在数字服务中设置加密后门的可能性。 如果该法案得以颁布，它可能会迫使 Signal 和 WhatsApp 等主要加密消息平台在加拿大停止服务，从而严重影响用户隐私以及个人和企业安全通信的可用性。 争论的一个关键点是法案对“系统性漏洞”的定义；一条潜在的“逃生通道”条款暗示，如果实施后门会损害安全，公司可能无需遵守，尽管法律专家和技术社区对该条款的解释存在很大分歧。

hackernews · Brajeshwar · May 12, 17:35

**背景**: 加密后门是一种故意设置在系统中的弱点，旨在允许第三方（通常是执法机构）访问，专家认为这从根本上破坏了整体安全性。强制性数据留存法要求电信和互联网服务提供商在规定期限内存储用户的通信元数据，这种做法引发了重大的隐私担忧。类似的立法尝试，例如欧盟的“聊天控制”提案以及美国过去的“加密战争”辩论，都曾遭到安全研究人员和公民自由团体的强烈反对。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.internetsociety.org/blog/2025/05/what-is-an-encryption-backdoor/">What Is an Encryption Backdoor ? - Internet Society</a></li>

</ul>
</details>

**社区讨论**: 在线讨论显示出极大的担忧，用户预测主要的加密服务将屏蔽加拿大用户，并敦促公民联系其代表。一些评论者将反复的立法尝试视为一种坚持的策略，而另一些人则争论法律细节，特别是质疑该法案的“系统性漏洞”条款是否能有效否定后门要求。

**标签**: `#privacy`, `#surveillance`, `#encryption`, `#legislation`, `#Canada`

---

<a id="item-4"></a>
## [Google 将推出“Googlebook”取代 Chromebook，深度整合 Gemini AI](https://www.techpowerup.com/348969/google-prepares-googlebook-as-a-chromebook-successor-powered-by-gemini) ⭐️ 8.0/10

Google plans to launch Googlebook devices, deeply integrating Gemini AI, to replace Chromebooks, featuring new hardware, AI-powered functions, and a potential Aluminium OS.

telegram · zaihuapd · May 13, 00:02

**标签**: `#Google`, `#Chromebook`, `#Gemini AI`, `#Operating Systems`, `#AI Hardware`

---

<a id="item-5"></a>
## [三星工会抗议导致芯片产出骤降，威胁全球供应链](https://t.me/zaihuapd/41355) ⭐️ 8.0/10

三星电子最大工会称，因大批员工参加加薪抗议集会，周四晚 10 点至周五凌晨 6 点的夜班期间，代工芯片产出下降 58%，存储芯片产出下降 18%。 此次劳资冲突可能严重扰乱全球半导体供应链，影响依赖三星芯片生产的关键行业，如人工智能、机器学习和消费电子。 抗议焦点在于要求取消奖金上限并实质性上调基本工资，工会威胁称，若资方不妥协，将从 5 月 21 日起启动为期 18 天的罢工，这可能进一步加剧供应链问题。

telegram · zaihuapd · May 13, 01:11

**背景**: 半导体代工厂是根据其他公司设计制造芯片的制造设施，如台积电或三星。存储芯片，包括 DRAM 和 NAND，是电子设备中数据存储的关键组件，三星在代工和存储领域都是主要生产商。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://anysilicon.com/semiconductor-foundry/">Semiconductor Foundry - AnySilicon</a></li>
<li><a href="https://en.wikipedia.org/wiki/Flash_memory">Flash memory - Wikipedia</a></li>

</ul>
</details>

**标签**: `#Samsung Electronics`, `#semiconductor supply chain`, `#labor protest`, `#chip production`

---

<a id="item-6"></a>
## [Needle：面向高效设备端工具调用的 2600 万参数模型](https://github.com/cactus-compute/needle) ⭐️ 7.0/10

Cactus 公司开源了 Needle 模型，这是一个从 Gemini 蒸馏而来的 2600 万参数模型，专门针对消费设备上的高速工具调用进行了优化，并采用了一种新颖的纯注意力架构，移除了所有前馈网络（FFN）层。 这项研究表明，像工具调用这样复杂的代理功能可以通过极小的高效模型实现，从而使先进的 AI 功能能够在低端手机、可穿戴设备和边缘设备上运行，而无需依赖云 API。 该模型在消费级硬件上实现了每秒 6000 个 token 的预填充和每秒 1200 个 token 的解码速度。它基于 2000 亿个 token 进行预训练，然后在 20 亿个 token 的合成函数调用数据上进行了微调，这些数据涵盖了 15 个工具类别。

hackernews · HenryNdubuaku · May 12, 18:03

**背景**: 工具调用允许语言模型调用外部函数或 API 来执行如查询天气或发送消息等操作，是构建“代理式人工智能”的核心基础。传统的 Transformer 模型由交替的注意力层和前馈网络（FFN）层构成。模型蒸馏是一种将知识从强大但庞大的模型（如 Gemini）转移到更小、更高效模型的技术。这项工作针对特定任务重新思考了标准架构。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Transformer_(deep_learning)">Transformer (deep learning) - Wikipedia</a></li>
<li><a href="https://www.theregister.com/2024/08/26/ai_llm_tool_calling/">A quick guide to tool - calling in LLMs • The Register</a></li>

</ul>
</details>

**社区讨论**: 社区表现出浓厚兴趣，有用户建议将其嵌入命令行界面等实际应用，以支持自然语言参数输入。部分讨论关注模型处理超越简单查询的复杂、模糊工具选择的能力，并有一项受欢迎的建议是发布一个在线演示游乐场来展示其能力。一位评论者幽默地指出了模型尺寸描述的微妙区别，建议使用'0.026B'而非'26M'。

**标签**: `#model-distillation`, `#tool-calling`, `#edge-ai`, `#efficiency`, `#open-source`

---

<a id="item-7"></a>
## [呼吁主要新闻机构维持 Wayback Machine 访问权限](https://www.savethearchive.com/newsleaders/) ⭐️ 7.0/10

一份请愿书正在流传，敦促《纽约时报》、《大西洋月刊》和《今日美国》等主要新闻机构不要阻止互联网档案馆的 Wayback Machine 对其网站进行爬取和存档。 主要新闻机构封锁 Wayback Machine 会在数字历史记录中造成重大空白，影响研究、问责制以及公众获取过往信息的能力。此案例凸显了商业网络实践与数字保存使命之间日益增长的紧张关系。 核心的技术与伦理问题是，互联网档案馆（archive.org）传统上遵守 robots.txt 协议——一个指示爬虫应避开网站哪些部分的文件，而一些营利性实体可能会为了自己的存档而无视这些指令。

hackernews · doener · May 12, 23:11

**背景**: Wayback Machine 由互联网档案馆运营，是一个庞大的数字图书馆，它定期对公共网站进行快照，以创建可浏览的历史档案。robots.txt 文件是网站管理员用来与网络爬虫通信的标准，用于指定网站的哪些部分不应被访问或索引。像 Wayback Machine 这样的网络档案通常使用 WARC（Web ARChive）文件格式（一个 ISO 标准）来存储这些采集到的网页。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/WARC_(file_format)">WARC (file format) - Wikipedia</a></li>
<li><a href="https://visualping.io/blog/how-to-archive-website">How to Archive a Website : Simple Steps for Digital Preservation</a></li>

</ul>
</details>

**社区讨论**: 社区讨论表达了对互联网档案馆因遵守伦理行为（尊重 robots.txt）而受到惩罚，而他人可能通过无视它而获利的挫败感。评论者提出了技术和政策解决方案，例如实施加密可验证的档案系统，或建立一种“托管”模式，即内容被存储但在延迟一段时间（如一年或 30 天）后才发布。

**标签**: `#web archiving`, `#digital preservation`, `#internet ethics`, `#Wayback Machine`, `#Hacker News`

---

<a id="item-8"></a>
## [使用图形编程渲染天空、日落和行星](https://blog.maximeheckel.com/posts/on-rendering-the-sky-sunsets-and-planets/) ⭐️ 7.0/10

Maxime Heckel 发布了一篇详细的博客文章，解释了如何使用大气散射和体积效果在图形编程中渲染逼真的天空、日落和行星。 这篇文章对图形程序员很重要，因为它提供了创建逼真大气效果的实际技术，这对游戏和模拟中的沉浸式视觉体验至关重要。 博客专注于大气散射和体积渲染，社区反馈包括对日落模型的修正，指出由于大气中持续的光线散射，太阳落山后天空不应立即变暗。

hackernews · ibobev · May 12, 13:26

**背景**: 大气散射是光与大气中的粒子相互作用的过程，通过波长依赖的散射导致天空变蓝和日落变红等现象。体积渲染技术用于显示云和雾等三维数据，通常涉及光线行进或基于纹理采样等方法。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://developer.nvidia.com/gpugems/gpugems2/part-ii-shading-lighting-and-shadows/chapter-16-accurate-atmospheric-scattering">Chapter 16. Accurate Atmospheric Scattering | NVIDIA Developer</a></li>
<li><a href="https://developer.nvidia.com/gpugems/gpugems/part-vi-beyond-triangles/chapter-39-volume-rendering-techniques">Chapter 39. Volume Rendering Techniques | NVIDIA Developer</a></li>

</ul>
</details>

**社区讨论**: 社区讨论热情高涨，用户分享了 Sebastian Lague 关于大气渲染的相关视频等资源，并提出了技术修正，例如需要模拟日落后的暮光。一些人还提到将大气散射与体积云结合以获得更佳效果，并引用了历史研究论文。

**标签**: `#graphics-programming`, `#rendering`, `#atmospheric-scattering`, `#computer-graphics`, `#tutorials`

---

<a id="item-9"></a>
## [Obsidian 推出新插件生态系统及自动化审查系统](https://obsidian.md/blog/future-of-plugins/) ⭐️ 7.0/10

Obsidian 推出了新的社区网站和自动化审查系统，该系统会扫描每个插件版本的安全性和代码质量，取代了之前的人工审查流程，以解决扩展瓶颈问题。 这一发展通过简化提交流程、减轻团队负担和加强安全监督，解决了插件生态系统中的关键扩展问题，对 Obsidian 社区驱动平台的健康发展至关重要。 自动化审查系统会检查每个插件更新的漏洞和代码质量，但没有实现沙盒或权限系统，插件仍具有完全的磁盘和网络访问权限，一些人认为这存在持续的安全风险。

hackernews · xz18r · May 12, 15:45

**背景**: Obsidian 是一款笔记应用程序，支持丰富的插件生态系统以扩展功能。之前，所有插件提交都需要小型团队进行人工审查，由于扩展挑战导致严重延迟和开发者的不满。Obsidian 中的插件具有完全系统访问权限，如果引入恶意代码会引发安全担忧。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://obsidian.md/blog/future-of-plugins/">The future of Obsidian plugins - Obsidian</a></li>
<li><a href="https://www.obsidianstats.com/">Explore & Discover Obsidian Plugins and Themes</a></li>

</ul>
</details>

**社区讨论**: 社区反应包括 Obsidian CEO 和开发者的支持，他们赞扬了扩展改进，但也有人提出安全担忧，部分用户认为自动化检查可能无法可靠检测恶意插件，并呼吁建立适当的沙盒系统。

**标签**: `#obsidian`, `#plugin-ecosystem`, `#software-scaling`, `#security`, `#community-management`

---

<a id="item-10"></a>
## [Bambu Lab 被批评违背开源社会契约](https://www.jeffgeerling.com/blog/2026/bambu-lab-abusing-open-source-social-contract/) ⭐️ 7.0/10

Bambu Lab 正在对 OrcaSlicer 等第三方客户端的开发者采取法律行动，理由是其对网络安全和稳定性构成威胁。该公司实施了新限制，强制设备必须连接其云服务器，并将未经授权的客户端使用定义为安全漏洞。 这场争议触及了 3D 打印社区开源精神的核心，可能开创一个先例，即公司利用法律威胁来控制其硬件周围的生态系统。它有可能侵蚀推动桌面 3D 打印领域创新和用户赋权的协作精神。 批评者认为 Bambu Lab 的安全理由站不住脚，因为通过“用户代理字符串”限制访问并非强效认证，其基础设施问题不应通过将用户拒之门外来解决。此举被视为 Bambu Lab 从早期更开放的态度转向封闭、限制性生态系统的倒退。

hackernews · rubenbe · May 12, 14:54

**背景**: 在开源哲学中，“社会契约”指的是项目与其社区之间维持透明、协作和用户自由原则的隐含协议。Bambu Lab 是一家受欢迎的 3D 打印机制造商，最初部分得益于其使用开源软件组件而获得支持，但后来逐步实施了更严格的控制，导致其被指控滥用社区信任。这场争论反映了专有“围墙花园”模式与开源生态系统之间更广泛的行业紧张关系。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.jeffgeerling.com/blog/2026/bambu-lab-abusing-open-source-social-contract/">Bambu Lab is abusing the open source social contract - Jeff Geerling</a></li>
<li><a href="https://en.wikipedia.org/wiki/Open_source">Open source - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 社区讨论对 Bambu Lab 的行为持高度批评态度，许多用户为开源开发者辩护，并质疑该公司的技术和安全理由。一些评论员指出，Bambu Lab 在面临类似公众反对后曾撤销过限制性政策，表明用户压力可以有效影响公司方向。少数声音引入了关于公司服务器及乌克兰冲突的更推测性的地缘政治视角。

**标签**: `#open source`, `#3D printing`, `#ethics`, `#community debate`

---

<a id="item-11"></a>
## [llm 0.32a2 Alpha 支持 OpenAI 响应式推理 API](https://simonwillison.net/2026/May/12/llm/#atom-everything) ⭐️ 7.0/10

llm 工具的 Alpha 版本 0.32a2 现已支持 OpenAI 新的 /v1/responses 端点，以取代旧版推理模型所用的 /v1/chat/completions 端点。此更新允许在终端输出中显示总结的推理 token，用户可以使用 -R 标志将其隐藏。 此次更新意义重大，因为它利用了 OpenAI 的新 API，为 GPT-5 类模型启用了“交错推理”功能，使得 AI 能在工具调用之间进行推理，从而可以创建更复杂、更可靠的智能体工作流。它使 llm 工具与 OpenAI 平台的最新进展保持一致，有利于构建复杂 AI 驱动应用的开发者。 新的 /v1/responses 端点的一个关键技术特性是支持有状态的交互，可以将先前响应的 ID 作为输入传递，从而维护对话上下文，而无需手动管理消息历史。需要注意的是，这是一个 Alpha 版本（0.32a2），可能仍存在缺陷或会经历进一步的变更。

rss · Simon Willison · May 12, 17:45

**背景**: llm 工具是由 Simon Willison 创建的一个流行命令行实用程序，用于与各大供应商的大语言模型进行交互。OpenAI 聊天模型的传统 API 是 `/v1/chat/completions` 端点。更新的 `/v1/responses` 端点专为更高级的智能体工作流设计，支持有状态交互和集成推理等功能。“交错推理”指的是模型在接收工具调用结果后、决定下一步操作之前，能够执行思考或分析步骤的能力，这改善了多步骤任务中的决策过程。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://platform.openai.com/docs/api-reference/responses">platform. openai .com/docs/api-reference/ responses</a></li>
<li><a href="https://lmstudio.ai/blog/lmstudio-v0.3.29">Use OpenAI 's Responses API with local models | LM Studio</a></li>
<li><a href="https://docs.vllm.ai/en/latest/features/interleaved_thinking/">Interleaved Thinking - vLLM</a></li>

</ul>
</details>

**标签**: `#llm`, `#OpenAI`, `#reasoning`, `#tool-calls`, `#AI-tools`

---

<a id="item-12"></a>
## [韩国提议从 AI 与半导体利润中设立全民分红](https://en.sedaily.com/politics/2026/05/12/kim-yong-beom-calls-for-national-dividend-on-ai-excess) ⭐️ 7.0/10

韩国高官金容范提议设立全民分红制度，主张借鉴挪威石油基金模式，将 AI 半导体领域的结构性超额利润回馈国民。 此项提议凸显了关于如何重新分配科技进步带来的财富以防止不平等的日益加剧的辩论，并可能为其他技术先进的国家树立先例。 该提议引发韩国股市恐慌，KOSPI 指数盘中一度暴跌 5.1%，随后澄清其本意是统筹超额税收收入而非对企业利润强征暴利税。

telegram · zaihuapd · May 12, 04:42

**背景**: 挪威石油基金模式（正式名称为政府养老基金全球）是一个主权财富基金，旨在为当代和后代利益管理该国的石油和天然气收入。该提议假设 AI 和半导体行业正在产生结构性超额利润，而这些利润部分建立在国家产业基础之上。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.nbim.no/">The fund | Norges Bank Investment Management</a></li>

</ul>
</details>

**标签**: `#AI policy`, `#semiconductors`, `#economic redistribution`, `#South Korea`, `#market impact`

---

<a id="item-13"></a>
## [Canvas LMS 遭黑客入侵，冲击美国学校期末周](https://t.me/zaihuapd/41342) ⭐️ 7.0/10

黑客组织 ShinyHunters 入侵了 Canvas 学习管理系统，在美国多所大学和学区的期末关键周部署勒索信息并导致服务中断。此次攻击还泄露了包含用户名、邮箱地址和学生 ID 号在内的数据。 此事件极为重要，因为它在一个关键的学术时期中断了数百万用户使用的核心教育平台，直接影响了学生获取学习材料和参加考试的能力。这也凸显了广泛采用的教育科技基础设施中严重的网络安全漏洞。 黑客组织 ShinyHunters 声称对本月针对 Instructure（Canvas 母公司）的两起独立事件负责，其中 5 月 1 日的早期事件涉及确认的数据泄露。服务中断迫使詹姆斯麦迪逊大学等机构将原定于周五的期末考试延期并重新安排。

telegram · zaihuapd · May 12, 09:16

**背景**: Canvas 是由 Instructure 公司开发的一款主流云端学习管理系统（LMS），被 K-12 学校、大学和企业广泛用于课程管理、内容传递和测验管理。ShinyHunters 是一个臭名昭著的网络犯罪组织，以针对不同行业组织的数据泄露和勒索软件攻击而闻名。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Canvas_LMS">Canvas LMS</a></li>
<li><a href="https://www.instructure.com/canvas">Canvas by Instructure: World Leading LMS for Teaching & Learning</a></li>

</ul>
</details>

**标签**: `#cybersecurity`, `#education technology`, `#data breach`, `#Canvas`, `#hacking`

---

<a id="item-14"></a>
## [市场监管总局附条件批准腾讯收购喜马拉雅股权案](https://www.samr.gov.cn/xw/zj/art/2026/art_c1b14339020e464fb46aa655a720ba48.html) ⭐️ 7.0/10

国家市场监督管理总局于 5 月 11 日附加限制性条件批准了腾讯收购喜马拉雅的股权案，要求履行五项承诺以防止反竞争行为并确保市场公平。 此决定保护了中国在线音频流媒体市场的竞争，维护了消费者、内容创作者和汽车合作伙伴的利益，并为未来科技并购树立了监管先例。 五项条件包括禁止提高价格、减少免费内容、维持独家版权协议、与汽车厂商捆绑销售平台，以及限制创作者在多平台分发内容。

telegram · zaihuapd · May 12, 09:55

**背景**: 中国国家市场监督管理总局负责监督并购案以确保公平竞争。有条件批准在反垄断案件中很常见，如国际上的陶氏-杜邦和拜耳-孟山都并购案所示，这些案例通过附加条件来缓解市场担忧。此批准反映了中国对科技行业整合的监管方式。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://uk.investing.com/news/stock-market-news/dow,-dupont-merger-wins-antitrust-approval-with-conditions-180344">Dow, DuPont merger wins U.S. antitrust approval with conditions By...</a></li>
<li><a href="https://www.mondaq.com/china/antitrust-eu-competition/802206/china39s-conditional-approval-of-bayer39s-acquisition-of-monsanto-lessons-for-future-merger-cases-in-china">China's Conditional Approval Of Bayer's Acquisition Of Monsanto...</a></li>

</ul>
</details>

**标签**: `#antitrust`, `#tech acquisition`, `#China regulation`, `#audio streaming`, `#competition policy`

---

<a id="item-15"></a>
## [Anthropic 拒绝中国智库接触其最新 AI 模型](https://www.nytimes.com/2026/05/12/us/politics/china-ai-anthropic-openai-mythos-chatgpt.html) ⭐️ 7.0/10

在新加坡举行的卡内基国际和平基金会会议上，Anthropic 拒绝了中国智库访问其最新 AI 模型的请求。 这一事件凸显了人工智能发展和访问中的地缘政治紧张局势，美国官员认为这可能带来安全风险，影响全球人工智能竞争。 这一请求并非中国政府的正式要求，但已引起美国国家安全委员会的警惕，表明了对人工智能安全措施的高度关注。

telegram · zaihuapd · May 12, 12:57

**背景**: 大型语言模型（LLM）是基于海量数据训练的先进人工智能系统，能生成类似人类的文本，Anthropic 和 OpenAI 是美国在该领域的领先开发者。人工智能安全和对齐是关键关注点，因为模型可能表现出缺陷或行为影响可信度。美国和中国在人工智能主导地位上存在竞争，促使政府监控访问以防止滥用和保护国家安全。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Large_language_model">Large language model - Wikipedia</a></li>

</ul>
</details>

**标签**: `#AI policy`, `#geopolitics`, `#Anthropic`, `#China-US relations`, `#AI security`

---

<a id="item-16"></a>
## [美国商务部网站删除 AI 安全测试协议细节](https://www.reuters.com/legal/litigation/microsoft-google-xai-security-test-details-deleted-us-government-website-2026-05-11/) ⭐️ 7.0/10

美国商务部网站悄然删除了与谷歌、xAI 和微软达成的一项协议细节，该协议涉及在新 AI 模型公开部署前由政府科学家进行安全漏洞测试。原公告页面已无法访问，现跳转至人工智能标准与创新中心（CAISI）网站，但官方未解释删除原因。 此举引发了对人工智能治理透明度和问责制的担忧，因为它涉及主要科技公司的关键部署前安全测试协议。删除原因不明可能表明政策重点正在转移、内部存在混乱，或是撤回了此前在人工智能安全政策活跃制定时期作出的承诺。 被删除的协议内容涉及允许政府科学家在 AI 新模型向公众发布前，对其安全漏洞进行测试。这一行动发生在特朗普政府执政期间，且美国商务部和白宫发言人均未立即对此事作出回应。

telegram · zaihuapd · May 12, 13:38

**背景**: 部署前安全测试是人工智能治理框架的关键组成部分，旨在让独立专家在模型公开发布前评估其安全与保障性。2023 年，美国成立了自己的人工智能安全研究所，并在 2025 年更名为人工智能标准与创新中心（CAISI）。人们日益担忧 AI 模型可能会在安全评估中“作弊”或“博弈”，这使得透明且稳健的测试协议成为国际讨论的焦点。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Center_for_AI_Standards_and_Innovation">Center for AI Standards and Innovation</a></li>
<li><a href="https://en.wikipedia.org/wiki/XAI_(company)">XAI (company)</a></li>
<li><a href="https://futureoflife.org/wp-content/uploads/2025/07/FLI-AI-Safety-Index-Report-Summer-2025.pdf">AI Safety</a></li>

</ul>
</details>

**标签**: `#AI safety`, `#government policy`, `#tech companies`, `#Reuters news`, `#AI governance`

---

<a id="item-17"></a>
## [SpaceX 与谷歌磋商发射轨道数据中心](https://www.wsj.com/tech/spacex-google-in-talks-to-explore-data-centers-in-orbit-7b7799e2) ⭐️ 7.0/10

谷歌正与 SpaceX 就火箭发射协议进行谈判，以推进其轨道数据中心项目“Project Suncatcher”，目标是在 2027 年前发射原型卫星；同时，SpaceX 计划向 Anthropic 提供大规模计算资源，作为其 IPO 战略的一部分。 这一合作标志着向部署太空 AI 基础设施迈出了重要一步，它可能通过提供更可持续、太阳能供电的替代方案来颠覆云计算行业，以应对地面数据中心不断升级的能源需求。 Project Suncatcher 设想通过自由空间光学链路连接一个由太阳能卫星组成的分布式网络，但它面临重大的工程挑战；该项目正与 Planet Labs 合作进行卫星开发，而 SpaceX 与 Anthropic 的平行协议涉及在 5 月底前提供超过 220,000 块 Nvidia GPU。

telegram · zaihuapd · May 12, 16:28

**背景**: 全球 AI 数据中心的能耗预计到 2030 年将增长五倍，这使得轨道太阳能等可持续替代方案日益具有吸引力。“Project Suncatcher”是谷歌一项雄心勃勃的计划，旨在将 AI 计算基础设施部署到太空，利用持续的太阳能和太空真空环境进行冷却，这一概念通常被称为“太空云计算”。Planet Labs 是一家商业地球成像公司，运营着庞大的小卫星星座，在卫星部署方面拥有相关专业知识。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arstechnica.com/google/2025/11/meet-project-suncatcher-googles-plan-to-put-ai-data-centers-in-space/">Meet Project Suncatcher , Google ’s plan to put AI data centers in...</a></li>
<li><a href="https://www.theintelbriefing.com/p/the-8x-power-advantage-why-googles">The 8X Power Advantage: Why Google ’s Orbital Data Centers Are Its...</a></li>

</ul>
</details>

**标签**: `#SpaceX`, `#Google`, `#Orbital Data Centers`, `#AI Infrastructure`, `#Space Technology`

---

<a id="item-18"></a>
## [Google 发布 Gemini Intelligence AI 功能，登陆 Pixel 和三星最新设备](https://9to5google.com/2026/05/12/gemini-intelligence-announcement/) ⭐️ 7.0/10

Google 宣布推出 Gemini Intelligence，这是一系列面向高端 Android 设备的 AI 功能，将于今年夏天首先推送到最新的 Pixel 和三星 Galaxy 手机上，并计划在年内扩展到手表、汽车、眼镜和笔记本电脑。 此次发布标志着将先进的、具备上下文感知能力的 AI 深度集成到核心移动体验中的重要一步，可能为高端智能手机以及更广泛的 Android 生态系统中的任务自动化和交互设定新标准。 主要功能包括基于屏幕上下文的任务自动化、为 Gboard 提供的 AI 支持的“Rambler”语音输入（可将杂乱的口语想法提炼成简洁文本），以及通过描述生成自定义小部件的“创建我的小部件”功能；该语音输入功能强调隐私保护，不会存储音频录音。

telegram · zaihuapd · May 13, 00:32

**背景**: Material Design 是 Google 用于创建用户界面的设计语言，Material 3（Material You）是其专注于个性化的最新版本。Gemini 是 Google 的大型 AI 模型家族，此次公告展示了这些模型如何被打包成面向消费者的实用设备端功能。Gboard 是 Google 为 Android 平台广泛使用的虚拟键盘应用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Material_Design">Material Design - Wikipedia</a></li>
<li><a href="https://gadgets.beebom.com/news/gemini-intelligence-gboard-rambler-feature-turns-messy-thoughts-into-clear-texts">Gemini Intelligence's New ' Rambler ' Feature Turns... | Beebom Gad...</a></li>
<li><a href="https://techcrunch.com/2026/05/12/google-adds-gemini-powered-dictation-to-gboard-which-could-be-bad-news-for-dictation-startups/">Google adds Gemini-powered dictation to Gboard , which... | TechCrunch</a></li>

</ul>
</details>

**标签**: `#AI`, `#Android`, `#Google`, `#Mobile AI`, `#Software Updates`

---