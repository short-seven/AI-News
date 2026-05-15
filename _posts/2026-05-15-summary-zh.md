---
layout: default
title: "Horizon Summary: 2026-05-15 (ZH)"
date: 2026-05-15
lang: zh
---

> From 31 items, 13 important content pieces were selected

---

1. [首个公开针对 Apple M5 硬件的内核漏洞利用，借助 AI 绕过 MIE 保护](#item-1) ⭐️ 9.0/10
2. [Bun JavaScript 运行时完全用 Rust 重写并已合并](#item-2) ⭐️ 9.0/10
3. [vLLM v0.21.0 引入重大变更与性能增强](#item-3) ⭐️ 8.0/10
4. [RTX 5090 外置显卡成功与 MacBook Air M4 配对，用于游戏和人工智能](#item-4) ⭐️ 8.0/10
5. [新 Nginx 缓冲区溢出漏洞利用，声称可绕过 ASLR](#item-5) ⭐️ 8.0/10
6. [arXiv 对提交含引用幻觉的稿件实行一年禁令](#item-6) ⭐️ 8.0/10
7. [麻省理工校长关于学术界资金和人才管道问题的声明](#item-7) ⭐️ 8.0/10
8. [从 2024 RAV4 中移除调制解调器和 GPS 以保护隐私](#item-8) ⭐️ 7.0/10
9. [Antirez 发布 DwarfStar4：用于本地运行 DeepSeek 4 模型的专用推理引擎](#item-9) ⭐️ 7.0/10
10. [OpenAI Codex 集成至 ChatGPT 移动应用，实现随时随地编程](#item-10) ⭐️ 7.0/10
11. [美国批准约 10 家中国公司购买英伟达 H200 芯片](#item-11) ⭐️ 7.0/10
12. [DeepSeek 对话系统漏洞可能泄露其他用户数据](#item-12) ⭐️ 7.0/10
13. [京东上线 AI 硬件自营专区，供应曾受制裁的 NVIDIA 显卡](#item-13) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [首个公开针对 Apple M5 硬件的内核漏洞利用，借助 AI 绕过 MIE 保护](https://blog.calif.io/p/first-public-kernel-memory-corruption) ⭐️ 9.0/10

安全研究团队 Calif 与 AI 系统 Mythos Preview 合作，开发出首个公开记录的、针对 Apple M5 硬件上 macOS 的内核内存破坏漏洞利用，绕过了苹果的 MIE（内存完整性强制）硬件保护。 这一突破表明，苹果为构建硬件强制内存安全（MIE）所做的五年努力可能被绕过，凸显了 AI 辅助研究正在快速改变攻防安全的平衡。 该漏洞利用链涉及两个漏洞，并成功地仅通过标准系统调用，将权限从非特权用户提升至 root shell，完全规避了 MIE 及其底层的 ARM 内存标记扩展（MTE）保护。

hackernews · quadrige · May 14, 18:25

**背景**: 苹果的 MIE 是 Apple Silicon 芯片中引入的一种硬件级安全功能，通过标记内存分配来检测和防止内存损坏攻击。ARM 的内存标记扩展（MTE）是构建此类保护机制的更广泛架构特性，旨在使内存安全漏洞更难被利用。针对现代硬件加固系统开发漏洞利用链通常是复杂且耗时的。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/ARM_architecture_family">ARM architecture family - Wikipedia</a></li>
<li><a href="https://cloud.google.com/blog/topics/threat-intelligence/ai-vulnerability-exploitation-initial-access">Adversaries Leverage AI for Vulnerability Exploitation, Augmented Operations, and Initial Access | Google Cloud Blog</a></li>
<li><a href="https://cybernews.com/security/attackers-bypassing-arm-memory-corruption-protection/">Attackers can bypass ARM security feature protecting from memory corruption | Cybernews</a></li>

</ul>
</details>

**社区讨论**: 社区对 AI 对安全领域的影响感到震惊与担忧，一些人称赞这一技术成就，另一些人则担心应对此类先进攻击工具的准备不足。多位评论者质疑初步公告的技术深度，并讨论了该漏洞在苹果漏洞赏金计划中的潜在估值。

**标签**: `#security`, `#kernel exploit`, `#Apple M5`, `#AI-assisted security`, `#hardware security`

---

<a id="item-2"></a>
## [Bun JavaScript 运行时完全用 Rust 重写并已合并](https://github.com/oven-sh/bun/pull/30412) ⭐️ 9.0/10

Bun JavaScript 运行时已从 Zig 完全重写为 Rust，并且这一重大更改已合并到主存储库中。 这次重写代表了 Bun 的重大技术转变，由于 Rust 的特性，可能提高内存安全和性能，并突显了在 JavaScript 运行时系统编程中使用 Rust 的增长趋势。 重写产生了超过一百万行 Rust 代码，其中包含大量 unsafe 块，但旨在通过利用 Rust 的编译时检查和自动清理来减少内存相关错误，如 use-after-free 和 double-free。

hackernews · Chaoses · May 14, 08:15

**背景**: Bun 是一个快速的全能 JavaScript 运行时，旨在作为 Node.js 的直接替代品，使用 Safari 的 JavaScriptCore 引擎以实现高性能。Rust 是一种系统编程语言，强调内存安全和并发性，无需垃圾回收器，依赖借用检查器提供编译时保证。从 Zig 到 Rust 的重写突显了 Bun 致力于利用现代语言特性来提高代码可靠性和开发效率。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Bun_(software)">Bun (software) - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Rust_(programming_language)">Rust (programming language)</a></li>

</ul>
</details>

**社区讨论**: 社区讨论表达了对代码库庞大尺寸和复杂性的担忧，指出 Rust 代码超过一百万行且有大量 unsafe 使用，评论强调了项目负责人早先怀疑态度的讽刺性。还有关于 Rust 在捕获内存错误方面有效性的争论，一些人指出它无法解决所有问题，如引用泄漏或跨 JS 边界重入。

**标签**: `#Bun`, `#Rust`, `#JavaScript runtime`, `#systems programming`, `#software complexity`

---

<a id="item-3"></a>
## [vLLM v0.21.0 引入重大变更与性能增强](https://github.com/vllm-project/vllm/releases/tag/v0.21.0) ⭐️ 8.0/10

vLLM v0.21.0 正式弃用了对 `transformers` v4 的支持，并要求使用兼容 C++20 的编译器，这引入了破坏性变更。此版本还将 KV 卸载与混合内存分配器（HMA）集成，并增强了针对推理模型的投机解码功能。 这些变更要求这一广泛使用的 LLM 推理引擎的用户更新其依赖和构建环境，而内存管理和投机解码方面的性能改进可以显著提升推理速度，尤其对复杂推理模型而言。 这些破坏性变更要求用户迁移至 `transformers` v5 并使用 C++20 编译器，这可能会干扰现有的工作流程。新的技术特性包括一个为 NVIDIA Blackwell GPU 优化的 `TOKENSPEED_MLA` 后端，以及现在能遵循推理预算的投机解码。

github · khluu · May 14, 23:15

**背景**: vLLM 是一个用于服务大语言模型（LLM）的流行高性能库，通过分页注意力（PagedAttention）等技术专注于高效推理。KV 卸载是一种管理键值缓存（Key-Value cache）的策略，通过将其部分移动到外部内存（如 CPU 或磁盘）来释放 GPU 显存。投机解码（Speculative decoding）通过使用一个更小、更快的‘草稿’模型生成候选词元，然后由一个更大的‘目标’模型并行验证，从而加速推理过程。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/vllm-project/vllm/issues/22292">Make KVConnector Compatible with HMA · Issue #22292 · vllm-project ...</a></li>
<li><a href="https://github.com/vllm-project/vllm/issues/34122">[Feature]: Add MLA attention backend for Turing · Issue #34122 · vllm-project/vllm</a></li>
<li><a href="https://iamhemanth.in/blog/speculative-decoding-the-billion-dollar-trick-hiding-in-plain-sight">Speculative Decoding : The Billion-Dollar Trick Hiding in Plain Sight</a></li>

</ul>
</details>

**标签**: `#LLM inference`, `#vLLM`, `#deep learning`, `#systems optimization`, `#release notes`

---

<a id="item-4"></a>
## [RTX 5090 外置显卡成功与 MacBook Air M4 配对，用于游戏和人工智能](https://scottjg.com/posts/2026-05-05-egpu-mac-gaming/) ⭐️ 8.0/10

一项技术演示成功地将一块英伟达 RTX 5090 外置显卡通过雷雳接口连接到 MacBook Air M4 上，实现了在此前被认为无法在苹果芯片 Mac 上运行的游戏和本地大语言模型推理。 这一突破挑战了长期以来官方和社区普遍认为的苹果芯片 Mac 与外置显卡不兼容的假设，可能为 Mac 用户开辟一条新途径，使其能够使用强大的独立显卡实现高性能游戏并加速本地人工智能工作负载。 该配置依赖自定义驱动和变通方法，因为苹果官方声明外置显卡需要基于英特尔处理器的 Mac；此外，外置显卡的内存窗口被限制在 1.5GB，这尽管硬件强大，但仍对运行更大的人工智能模型构成了瓶颈。

hackernews · allenleee · May 14, 15:47

**背景**: 外置显卡允许笔记本电脑通过雷雳等高速端口连接更强大的台式机显卡，以处理游戏或渲染等任务。苹果公司在转向苹果芯片（M 系列芯片）后，官方已弃用外置显卡支持，声明只有英特尔 Mac 兼容，且官方支持的显卡全部来自 AMD 而非英伟达。本地大语言模型推理是指直接在设备硬件上运行大型人工智能模型，这极大地受益于高端显卡的并行处理能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://discussions.apple.com/thread/255953878">Apple Silicon (M1/M2/M3/M4) and eGPU supp… - Apple Community</a></li>
<li><a href="https://support.apple.com/en-us/102363">Use an external graphics processor with your Mac - Apple Support</a></li>
<li><a href="https://github.com/albertstarfield/apple-slick-rtx">GitHub - albertstarfield/apple-slick-rtx: eGPU on Apple Silicon, Trail for Fun! We're doing this for fun and just for taking challenge · GitHub</a></li>

</ul>
</details>

**社区讨论**: 社区讨论强调了对此事的实际应用前景感到兴奋，特别是对本地人工智能性能的提升。一位评论者指出，与 Mac 的集成显卡相比，大语言模型的提示词处理速度有了显著提升。其他人则对技术实现表示兴趣，讨论了虚拟机 GPU 直通的可能性，也有一些人对这种破解方法的长期可行性以及苹果公司可能对此做出的反应持怀疑态度。

**标签**: `#eGPU`, `#Apple Silicon`, `#Gaming`, `#Machine Learning`, `#Hardware Hacking`

---

<a id="item-5"></a>
## [新 Nginx 缓冲区溢出漏洞利用，声称可绕过 ASLR](https://github.com/DepthFirstDisclosures/Nginx-Rift) ⭐️ 8.0/10

Nginx 的 rewrite 指令中存在一个缓冲区溢出漏洞已被公开披露，附带的概念验证利用声称可以绕过 ASLR，针对使用特定语法的配置。 Nginx 支撑着全球大量网络服务器，因此此漏洞可能导致广泛的安全风险，尤其是如果 ASLR 绕过可行，可能使远程代码执行攻击成为可能。 此漏洞利用需要特定的前提条件，包括在 rewrite 指令的替换字符串中使用问号，以及后续的 set 指令引用正则表达式捕获组，而发布的概念验证假设 ASLR 已禁用。

hackernews · hetsaraiya · May 14, 17:17

**背景**: Nginx 是一个流行的高性能网络服务器，用于处理网络流量，ASLR（地址空间布局随机化）是一种安全机制，通过随机化内存地址来阻碍内存损坏漏洞的利用。Nginx 中的 rewrite 指令是配置命令，用于在请求处理期间修改 URL，通常用于重定向或路径操作。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://medium.com/@wam0x0x0/stack-overflow-protection-and-bypass-techniques-rop-aslr-canaries-and-more-f5d992c3ab79">Stack Overflow Protection and Bypass Techniques — ROP, ASLR ...</a></li>
<li><a href="https://docs.nginx.com/nginx/admin-guide/web-server/web-server/">Configuring NGINX and NGINX Plus as a Web Server</a></li>

</ul>
</details>

**社区讨论**: 社区讨论集中于 ASLR 绕过声明的可信度，专家指出 ASLR 是一种纵深防御技术，绕过通常只是时间问题，同时强调漏洞利用所需的具体前提条件，并提到了 F5 针对受影响版本的官方补丁。

**标签**: `#security`, `#nginx`, `#vulnerability`, `#exploit`, `#ASLR`

---

<a id="item-6"></a>
## [arXiv 对提交含引用幻觉的稿件实行一年禁令](https://twitter.com/tdietterich/status/2055000956144935055) ⭐️ 8.0/10

预印本服务器 arXiv 宣布了一项新政策，对提交包含由大语言模型（LLM）生成的虚构引用的论文作者处以一年禁令，此后其提交的稿件必须先被信誉良好的同行评审期刊接受。 这项政策直接应对了由人工智能生成的“幻觉”引用对科学诚信和文献可信度日益增长的威胁。它建立了一种重要的威慑，并强调了研究人员在利用 AI 辅助工作时进行验证的责任，这可能影响其他学术出版商采取类似措施。 鉴于 arXiv 是一个免费开放的平台，这一禁令相当严厉，凸显了该问题被视为的严重性。然而，从最初在线讨论的公告来看，具体的执行机制和实施时间表尚不明确。

hackernews · gjuggler · May 14, 20:39

**背景**: arXiv 是一个广泛使用的预印本在线存储库，即在同行评审前分享的科学论文草稿。大语言模型语境下的“幻觉”是指 AI 自信地生成虚假或无意义信息的现象，包括不存在于真实论文中的伪造学术引用。生成式 AI 工具的兴起使得作者可以轻而易举地生成带有此类虚构引用的论文，从而污染科学记录。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.nature.com/articles/d41586-026-00969-z">Hallucinated citations are polluting the scientific literature. What can be done?</a></li>
<li><a href="https://arxiv.org/abs/2601.18724">[2601.18724] HalluCitation Matters: Revealing the Impact of Hallucinated References with 300 Hallucinated Papers in ACL Conferences</a></li>
<li><a href="https://wacclearinghouse.org/repository/collections/continuing-experiments/august-2025/ai-literacy/understanding-avoiding-hallucinated-references/">Understanding and Avoiding Hallucinated References - The WAC Clearinghouse</a></li>

</ul>
</details>

**社区讨论**: 社区普遍欢迎这一政策，认为它“对科学极其有益”，是一种必要的威慑。然而，评论也指出了实际问题，包括即使在没有 AI 的情况下创建完全准确的引用也并非易事，以及需要仔细审查以避免不公平地惩罚无心的错误。

**标签**: `#arXiv`, `#AI ethics`, `#academic publishing`, `#hallucinated references`, `#policy`

---

<a id="item-7"></a>
## [麻省理工校长关于学术界资金和人才管道问题的声明](https://president.mit.edu/writing-speeches/video-transcript-message-president-kornbluth-about-funding-and-talent-pipeline) ⭐️ 8.0/10

麻省理工校长科恩布鲁斯发表讲话，谈到了学术界在资金短缺和人才管道方面面临的严峻问题，引发了关于研究和高等教育现状的广泛辩论。 这次讲话突显了可能破坏学术职业、研究创新和高等教育机构稳定性的系统性问题，影响学生、教职员工以及更广泛的科学界。 讨论显示，许多博士毕业生因就业前景不佳和薪酬低而离开学术界，目前博士学位的中位完成时间约为六年，同时还引发了对资助减少和财政政策问题的担忧。

hackernews · dmayo · May 14, 14:51

**背景**: 学术界传统上是研究和教育的中心，但近年来政府资金减少、学费上涨以及博士毕业生就业市场竞争激烈，导致人才管道的维持面临挑战。这些问题因全球经济压力和政策重点变化而加剧，促使高等教育系统改革的呼声日益高涨。

**社区讨论**: 社区普遍对学术界感到失望，指出薪酬低、博士项目时间长和就业前景暗淡是许多博士生离开该领域的主要原因。评论还涉及系统性问题，如财政政策挑战，一些人预见高等教育将经历世代重置，并与中国的替代教育模式进行比较。

**标签**: `#academia`, `#funding`, `#talent-pipeline`, `#research`, `#higher-education`

---

<a id="item-8"></a>
## [从 2024 RAV4 中移除调制解调器和 GPS 以保护隐私](https://arkadiyt.com/2026/05/13/removing-the-modem-and-gps-from-my-rav4/) ⭐️ 7.0/10

一份详细的指南已发布，介绍了如何物理移除 2024 Toyota RAV4 混合动力车的调制解调器和 GPS 模块，以防止丰田收集数据，包括分步说明和遇到的技术挑战。 这突显了消费者对车辆数据遥测和隐私日益增长的关注，个人采取极端措施以重新掌控其在联网汽车中的个人信息，这可能促使汽车制造商提供更透明的选择退出选项。 移除过程涉及拆卸内饰部件以访问远程信息处理单元，用户指出即使硬件被移除，使用蓝牙进行手机连接可能仍然允许数据通过连接的智能手机传回丰田。

hackernews · arkadiyt · May 14, 17:08

**背景**: 现代汽车通常包括远程信息处理控制单元（TCU），这是一种嵌入式系统，用于连接互联网以提供远程诊断和软件更新等服务，从而实现称为遥测的数据收集。CAN 总线协议是车辆中使用的标准通信系统，用于促进电子控制单元之间的内部数据交换，这对发动机管理和信息娱乐系统等功能至关重要。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Telematic_control_unit">Telematic control unit</a></li>
<li><a href="https://en.wikipedia.org/wiki/CAN_bus">CAN bus - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 讨论揭示了隐私漏洞的担忧，一些用户指出蓝牙手机连接即使在硬件移除后仍可能传输遥测数据，而其他人建议了变通方法，如使用有线 USB 连接或在其他车型（如 Ford Maverick）中移除特定保险丝。

**标签**: `#privacy`, `#automotive`, `#hardware-hacking`, `#IoT`, `#data-telemetry`

---

<a id="item-9"></a>
## [Antirez 发布 DwarfStar4：用于本地运行 DeepSeek 4 模型的专用推理引擎](https://antirez.com/news/165) ⭐️ 7.0/10

知名开发者 antirez 发布了 DwarfStar4（DS4），这是一个专为本地运行 DeepSeek V4 Flash 模型而设计的轻量级、专注的原生推理引擎，初期运行需要 96GB 的显存（VRAM）。 该项目展示了强大的专用工具在本地硬件上运行大型语言模型的趋势，可能减少对云 API 的依赖并赋予高级用户更多控制权，尽管目前的高显存要求将其限制在高端配置上。 DS4 特意只支持 DeepSeek V4 Flash 模型，并优先针对配备 96GB 内存的高端 Mac 优化 Apple 的 Metal 后端，另有社区支持的 NVIDIA CUDA 和实验性的 AMD ROCm 分支。

hackernews · caust1c · May 14, 22:29

**背景**: LLM 推理运行时是加载并运行预训练语言模型、将其转化为输出文本的软件。DeepSeek V4 Flash 是深度求索（DeepSeek AI）近期发布的一款高效的混合专家模型，总参数为 2840 亿，但每次推理仅激活 130 亿参数。像 DS4 这样的项目建立在 llama.cpp 和 GGML 等基础库之上。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://github.com/antirez/ds4">GitHub - antirez/ds4: DeepSeek 4 Flash local inference engine for...</a></li>
<li><a href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro">deepseek-ai/DeepSeek-V4-Pro · Hugging Face</a></li>

</ul>
</details>

**社区讨论**: 社区讨论集中于高显存需求的实际影响，并推测本地模型性能的未来轨迹。一些用户指出 DS4 的输出质量惊人地接近 Claude 等云端模型，这引发了关于随着本地能力提升，当前订阅制 AI 服务可持续性的疑问。

**标签**: `#AI`, `#LLM`, `#inference`, `#local-models`, `#hardware`

---

<a id="item-10"></a>
## [OpenAI Codex 集成至 ChatGPT 移动应用，实现随时随地编程](https://openai.com/index/work-with-codex-from-anywhere/) ⭐️ 7.0/10

OpenAI 已正式将 Codex 编程助手集成到 ChatGPT 移动应用中，使开发者能够直接从智能手机或平板电脑执行由人工智能驱动的软件工程任务。 此次更新极大地提升了 AI 辅助编程工具的可及性，使开发者能够在任何地点处理编程任务，从而可能简化其工作流程，这符合移动优先和灵活开发环境的大趋势。 该服务据称在 ChatGPT 应用中可免费使用，但用户的互动数据可能会被用于模型训练；早期用户反馈表明，由于屏幕尺寸和输入限制，移动端的使用效果可能与桌面端有所不同。

hackernews · mikeevans · May 14, 20:06

**背景**: OpenAI Codex 是一套由人工智能驱动的编程代理，旨在自动化软件工程任务，例如编写、重构和调试代码。像 Codex 这样的 AI 编程助手可以集成到开发环境中，帮助程序员探索代码库、生成代码并加速功能开发。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/OpenAI_Codex">OpenAI Codex - Wikipedia</a></li>
<li><a href="https://grokipedia.com/page/OpenAI_Codex">OpenAI Codex</a></li>

</ul>
</details>

**社区讨论**: 社区反应不一；一些用户对能够免费在移动端使用的便利性感到兴奋，而另一些人则幽默地指出，这可能导致工作无处不在而非被自动化。实际使用中，用户对移动界面在细致编程工作中的局限性表示了担忧，并且存在关于如何将其有效用于本地项目的问题。

**标签**: `#AI`, `#coding`, `#mobile apps`, `#OpenAI`, `#developer tools`

---

<a id="item-11"></a>
## [美国批准约 10 家中国公司购买英伟达 H200 芯片](https://www.reuters.com/business/retail-consumer/us-clears-h200-chip-sales-10-china-firms-nvidia-ceo-looks-breakthrough-2026-05-14/) ⭐️ 7.0/10

美国商务部已批准约 10 家中国公司购买英伟达 H200 芯片，包括阿里巴巴和腾讯，但尚未完成任何交付。 这一进展意义重大，因为它突显了持续的美中科技竞争，可能通过提供先进芯片来影响中国人工智能发展，同时平衡国产创新战略。 每家客户最多可购买 7.5 万颗 H200 芯片，部分中国公司在北京指导下谨慎行事，英伟达 CEO 访华推动交易落地。

telegram · zaihuapd · May 14, 08:57

**背景**: 英伟达的 H200 是基于 Hopper 架构的高性能 GPU，专为数据中心人工智能工作负载设计。像 GPU 这样的人工智能芯片因其并行处理能力，对于训练和运行大规模人工智能模型至关重要，是现代人工智能发展的关键。与先前型号相比，H200 代表了升级版，具有更快的内存和针对人工智能任务的改进性能。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Nvidia_H200">Nvidia H200</a></li>
<li><a href="https://www.reddit.com/r/singularity/comments/1pmldz9/nvidia_h200_is_officially_legacy_tech_us_lifts/">Nvidia H200 is officially 'legacy' tech: US lifts export ban to China ... - Reddit</a></li>

</ul>
</details>

**社区讨论**: 社区讨论，如 Reddit 上的帖子，指出 H200 芯片现被视为传统技术，随着 Blackwell 等新型号的出现，美国解除了出口禁令，表明西方技术优先事项发生了战略转变。

**标签**: `#AI chips`, `#US-China trade`, `#Nvidia`, `#semiconductor`, `#geopolitics`

---

<a id="item-12"></a>
## [DeepSeek 对话系统漏洞可能泄露其他用户数据](https://github.com/deepseek-ai/DeepSeek-R1/issues/840) ⭐️ 7.0/10

2026 年 5 月 11 日的一份报告披露了 DeepSeek 网页和 API 模型中的会话隔离缺陷，在全新空对话中仅发送未闭合的‘<think’字符串，可能导致模型返回其他用户的对话历史片段。 这是一个重大的安全漏洞，直接威胁用户隐私和数据机密性，可能导致代码和 API 密钥等敏感信息泄露，并破坏了用户对平台隔离性保证的信任。 该漏洞由报告者‘cancat2024’负责任地披露，但社区中存在质疑，有人认为这可能是特定第三方部署中出现的‘幻觉’，而非核心问题，这为漏洞的实际范围带来了不确定性。

telegram · zaihuapd · May 14, 13:15

**背景**: 在 AI 对话系统中，'<think'标签或类似结构常被模型在内部用于组织或封装其推理过程，然后才生成最终回复。会话隔离是一项基本的安全原则，旨在确保在同一服务内，一个用户的数据和上下文与另一个用户完全分离。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.augmentcode.com/guides/prompt-injection-vulnerabilities-threatening-ai-development">Prompt Injection Vulnerabilities Threatening AI Development</a></li>
<li><a href="https://en.wikipedia.org/wiki/Prompt_injection">Prompt injection - Wikipedia</a></li>
<li><a href="https://github.com/vllm-project/vllm/discussions/12708">Nested `` and `` tag in deepseek -...</a></li>

</ul>
</details>

**社区讨论**: 社区讨论中存在质疑声音，有评论者指出该问题可能也出现在第三方部署中，并可能是模型‘幻觉’而非真正的数据泄露，这引发了关于漏洞根本原因和严重程度的争论。

**标签**: `#security vulnerability`, `#AI systems`, `#data privacy`, `#DeepSeek`, `#session isolation`

---

<a id="item-13"></a>
## [京东上线 AI 硬件自营专区，供应曾受制裁的 NVIDIA 显卡](https://t.me/zaihuapd/41386) ⭐️ 7.0/10

京东电商平台开设了全新的“AI 硬件京东自营专区”，首批上架了此前受制裁的 NVIDIA 高端 GPU，如 RTX 5090、RTX PRO 6000 及 H100，现在可以在国内购买。 这一进展为中国 AI 开发者和研究者提供了一个获取先进 AI 训练与推理硬件的合规渠道，可能缓解影响该行业的供应限制。 上架的 RTX 5090 为无阉割的全球统一规格版本，H100 则是此前因出口禁令而受限的数据中心 GPU；RTX PRO 6000 面向专业渲染和数据中心应用。

telegram · zaihuapd · May 14, 16:22

**背景**: NVIDIA H100 Tensor Core GPU 是一款专为数据中心和 AI 工作负载设计的高性能芯片，而较新的 RTX PRO 6000 则属于 Blackwell 架构。由于美国的出口管制，此类先进半导体对中国的销售一直受到严格限制。京东是中国主要的电商平台，其自营业务模式通常涉及直接销售和物流管理。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/NVIDIA_H100_Tensor_Core_GPUs">NVIDIA H100 Tensor Core GPUs</a></li>
<li><a href="https://www.nvidia.com/en-us/data-center/h100/">H 100 GPU | NVIDIA</a></li>
<li><a href="https://www.nvidia.com/en-us/data-center/technologies/blackwell-architecture/">The Engine Behind AI Factories | NVIDIA Blackwell Architecture</a></li>

</ul>
</details>

**标签**: `#AI hardware`, `#NVIDIA`, `#sanctions`, `#China`, `#retail`

---