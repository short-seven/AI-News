---
layout: default
title: "Horizon Summary: 2026-05-24 (ZH)"
date: 2026-05-24
lang: zh
---

> From 20 items, 8 important content pieces were selected

---

1. [80386 微码从芯片图像中成功反汇编](#item-1) ⭐️ 8.0/10
2. [从第一性原理出发，探索深度学习性能优化](#item-2) ⭐️ 8.0/10
3. [Anthropic 的 AI 模型在主要软件中发现逾万个关键漏洞](#item-3) ⭐️ 8.0/10
4. [苹果开源 corecrypto 密码库，附形式化验证证明量子安全算法正确性](#item-4) ⭐️ 8.0/10
5. [我国日均 AI 词元调用量突破 140 万亿，两年增长超千倍](#item-5) ⭐️ 8.0/10
6. [使用定制 Linux 和 Vim 构建无干扰写作设备](#item-6) ⭐️ 7.0/10
7. [微软在内部向工程师及非技术员工推广 Anthropic 的 Claude Code。](#item-7) ⭐️ 7.0/10
8. [微软财报披露 OpenAI 单季度亏损 115 亿美元](#item-8) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [80386 微码从芯片图像中成功反汇编](https://www.reenigne.org/blog/80386-microcode-disassembled/) ⭐️ 8.0/10

通过图像处理、人工智能和人工辅助自动化，从芯片图像中提取并反汇编了英特尔 80386 处理器的微码，且二进制数据块已通过交叉验证。 这项工作为理解古老的 x86 计算机架构提供了宝贵见解，并推动了逆向工程技术的发展，有助于历史保存和计算机科学研究。 提取过程依赖人工智能从芯片图像中识别晶体管和电路，反汇编微码是一个重大挑战；由于 80386 芯片在 22 年的生产周期中经历了多次改动，必须确定其具体修订版本。

hackernews · nand2mario · May 23, 12:11

**背景**: 微码是处理器中的基础固件，通过将复杂指令转化为硬件操作来控制低级操作。英特尔 80386 于 1985 年发布，是影响现代计算的开创性 x86 CPU。从芯片图像逆向工程微码需要使用显微镜和计算方法分析物理芯片结构，以重构内部逻辑。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.reenigne.org/blog/80386-microcode-disassembled/">80386 microcode disassembled « Reenigne blog</a></li>
<li><a href="https://www.reenigne.org/blog/8086-microcode-disassembled/">8086 microcode disassembled « Reenigne blog</a></li>
<li><a href="https://happytrees.org/dieshots/Main_Page">CPU Graveyard - Die shots - happytrees.org</a></li>

</ul>
</details>

**社区讨论**: 评论者强调了确定 80386 具体修订版本的重要性，因为生产存在变异，并对从芯片图像重构微码的技术过程表示好奇，同时提到了 z386 等相关项目和微编程教育资源。

**标签**: `#microcode`, `#reverse-engineering`, `#x86`, `#computer-architecture`, `#80386`

---

<a id="item-2"></a>
## [从第一性原理出发，探索深度学习性能优化](https://horace.io/brrr_intro.html) ⭐️ 8.0/10

该博文从第一性原理出发，全面分析了深度学习性能优化，解析了硬件与软件的交互如何（特别是 NVIDIA 的 CUDA 生态系统）决定了运行速度。 从底层理解性能对于机器学习工程师至关重要，这能帮助他们有效优化模型、应对碎片化的硬件环境，并就部署和基础设施做出明智的决策。 一个关键的技术见解是，NVIDIA 在 TFLOPS、带宽和互连技术方面持续的指数级增长维持了其生态系统的主导地位，这使得在不同运行时（如使用 CUDA EP 的 ONNX Runtime 与 TensorRT EP）之间的可移植性成为一个重要且复杂的挑战。

hackernews · tosh · May 23, 11:50

**背景**: 深度学习模型运行在像 NVIDIA GPU 这样的专用硬件上，这些硬件通过 CUDA 等并行计算平台进行编程，并由 cuDNN 等库进行加速。优化性能涉及利用这些工具最大化硬件利用率，通常通过内核融合和自动调优等技术来实现。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://developer.nvidia.com/cuda/toolkit">CUDA Toolkit - Free Tools and Training | NVIDIA Developer</a></li>
<li><a href="https://docs.nvidia.com/deeplearning/cudnn/frontend/latest/developer/overview.html">Overview — NVIDIA cuDNN Frontend</a></li>
<li><a href="https://medium.com/@linghuang_76674/tensorrt-and-onnx-inference-optimization-in-practice-10-engineering-techniques-to-reduce-latency-afab92cf9484">TensorRT and ONNX Inference Optimization in Practice... | Medium</a></li>

</ul>
</details>

**社区讨论**: 社区成员称赞这篇文章是经典之作，并强调了 NVIDIA 在高速发展中保持的显著且持久的领导地位。一个主要的讨论点是模型可移植性的巨大复杂性，指出同一个模型在各种运行时（例如 ONNX、TensorRT）和目标硬件上表现不同，称之为一个‘巨大的混乱’。

**标签**: `#deep-learning`, `#performance-optimization`, `#hardware-acceleration`, `#machine-learning-systems`, `#python`

---

<a id="item-3"></a>
## [Anthropic 的 AI 模型在主要软件中发现逾万个关键漏洞](https://www.anthropic.com/research/glasswing-initial-update) ⭐️ 8.0/10

Anthropic 的‘玻璃翼计划’利用 Claude Mythos Preview AI 模型，在一个月内于关键软件中发现逾万个高危或严重漏洞，经审查的漏洞中真阳性率达 90.6%。 这展示了 AI 驱动漏洞检测速度的巨大飞跃，将关键瓶颈从发现转移到验证与修补，给开源生态系统带来压力，并迫使行业缩短补丁周期。 合作伙伴如 Cloudflare 等报告漏洞发现速率提高十倍以上，但漏洞报告的洪流使开源维护者不堪重负，甚至请求放缓报告速度；Anthropic 正与开源安全基金会合作以协助修复。

telegram · zaihuapd · May 23, 03:16

**背景**: ‘玻璃翼计划’利用先进的 AI，特别是 Anthropic 的前沿模型 Claude Mythos Preview，主动扫描软件以发现开发者未知的‘零日’漏洞。这一举措反映了利用 AI 加强网络安全防御的趋势，同时也凸显了此类技术在防御与攻击用途之间的军备竞赛。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.anthropic.com/glasswing">Project Glasswing: Securing critical software for the AI era</a></li>
<li><a href="https://www.picussecurity.com/resource/blog/anthropics-project-glasswing-paradox">What Is Project Glasswing? Anthropic's AI Misuse Research Initiative Explained</a></li>
<li><a href="https://interestingengineering.com/ai-robotics/anthropic-project-glasswing-10000-software-vulnerabilities">Project Glasswing: Anthropic says Claude found 10,000 critical software flaws in a month</a></li>

</ul>
</details>

**标签**: `#AI`, `#cybersecurity`, `#vulnerability detection`, `#open source security`, `#Anthropic`

---

<a id="item-4"></a>
## [苹果开源 corecrypto 密码库，附形式化验证证明量子安全算法正确性](https://security.apple.com/blog/formal-verification-corecrypto/) ⭐️ 8.0/10

苹果在 5 月 22 日发布了 corecrypto 源代码，并提供了形式化验证证明，确保 ML-KEM 和 ML-DSA 算法的 C 代码和 ARM64 汇编与 NIST 标准严格一致。 此举通过提升密码学保证并支持在 iMessage 和 VPN 等关键应用中部署量子安全加密，增强了超过 25 亿台活跃设备的安全性，加速了行业对后量子威胁的准备。 形式化验证证明涵盖了 C 代码和手动优化的 ARM64 汇编，苹果还公开了定制验证工具和 Isabelle 理论库，供独立专家评估，以推动软件保证技术的进步。

telegram · zaihuapd · May 23, 04:49

**背景**: ML-KEM 和 ML-DSA 是 NIST 标准化的后量子密码学算法，旨在抵抗量子计算机的攻击，其中 ML-KEM 用于密钥封装，ML-DSA 用于数字签名。形式化验证使用数学证明来保证软件实现的正确性，从而降低关键代码中安全漏洞的风险。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://ncse.info/post-quantum-cryptography/">Post - Quantum Cryptography: ML - KEM Implementation Guide</a></li>
<li><a href="https://www.digicert.com/insights/post-quantum-cryptography/mldsa">ML-DSA | Post-Quantum Cryptography | DigiCert Insights</a></li>
<li><a href="https://en.wikipedia.org/wiki/Formal_verification">Formal verification - Wikipedia</a></li>

</ul>
</details>

**标签**: `#cryptography`, `#quantum-safe-cryptography`, `#formal-verification`, `#open-source`, `#apple-security`

---

<a id="item-5"></a>
## [我国日均 AI 词元调用量突破 140 万亿，两年增长超千倍](https://t.me/zaihuapd/41542) ⭐️ 8.0/10

国家数据局披露，我国日均词元（Token）调用量在 2025 年 3 月突破 140 万亿，较 2024 年初的 1000 亿增长超过 1000 倍。 这一爆发式增长意味着 AI 正在快速商业化，表明围绕词元这一可计量、可定价、可交易的单位，新的价值体系正在加速形成，并成为人工智能产业商业化的重要路径。 报告指出，词元是大模型处理信息的最小信息单元，其调用量的激增反映了随着我国数据要素市场化配置改革的推进，人工智能高质量数据供给体系正在形成。

telegram · zaihuapd · May 23, 14:36

**背景**: 词元是大语言模型（LLM）处理信息的基本数据单位，通常代表一个单词的一部分或整个单词。大多数大语言模型服务的 API 使用量基于处理的词元数量定价，使其成为商业 AI 生态系统的关键指标。负责管理中国数据要素市场化战略的国家数据局，发布了《“数据要素×”三年行动计划》等政策以推动数据的交易和利用。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://blogs.nvidia.com/blog/ai-tokens-explained/">What Are AI Tokens ? The Language and Currency... | NVIDIA Blog</a></li>
<li><a href="https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them">What are tokens and how to count them? | OpenAI Help Center</a></li>

</ul>
</details>

**标签**: `#AI`, `#data economy`, `#China`, `#large language models`, `#commercialization`

---

<a id="item-6"></a>
## [使用定制 Linux 和 Vim 构建无干扰写作设备](https://veronicaexplains.net/my-first-writerdeck/) ⭐️ 7.0/10

维罗妮卡详细介绍了她构建第一个 writerdeck 的经验，这是一个使用定制 Linux 系统和 Vim 编辑器的无干扰写作设备，引发了社区的广泛讨论。 这反映了个人生产力优化的日益增长趋势，人们通过创建定制环境来最小化干扰并增强专注力，特别是在写作和软件工程工作流中。 该设置涉及对 Linux 的深度定制，例如更换网络协议栈和调整 Vim 配置，但批评者认为这个过程本身可能成为实际写作的干扰。

hackernews · hggh · May 23, 18:45

**背景**: Writerdeck 是一种专门用于写作的设备，通常是像 Freewrite 或 Alphasmart 这样的计算机化文字处理器，旨在消除干扰。Linux 定制允许用户根据特定任务调整操作系统，而 Vim 是一种高度可配置的文本编辑器，因其高效而深受程序员喜爱。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.writerdeck.org/">writerDeck .org | writerDeck</a></li>
<li><a href="https://github.com/brsloan/writerDeck/blob/main/README.md">writerDeck /README.md at main · brsloan/ writerDeck · GitHub</a></li>
<li><a href="https://www.makeuseof.com/best-distraction-free-writing-apps-linux/">The 9 Best Distraction-Free Writing Apps for Linux to Help You Focus - MUO</a></li>

</ul>
</details>

**社区讨论**: 社区表达了不同的看法，一些人赞扬了技术努力和博客的清晰度，另一些人则指出，设置一个无干扰设备本身可能是一种分散注意力的活动，类似于拖延或注意力错配。

**标签**: `#writing-tools`, `#productivity`, `#linux-customization`, `#vim`, `#personal-projects`

---

<a id="item-7"></a>
## [微软在内部向工程师及非技术员工推广 Anthropic 的 Claude Code。](https://t.me/zaihuapd/41535) ⭐️ 7.0/10

微软正在其关键工程团队（包括 CoreAI 团队以及负责 Windows、Microsoft 365 等产品的部门）中广泛推广 Anthropic 的 Claude Code，甚至鼓励没有编程经验的员工使用它进行原型设计。 此举表明一个重要趋势：一家大型科技公司正在内部推广直接竞争对手的 AI 工具，凸显了 AI 编程助手市场竞争的激烈态势，以及企业正朝着让所有岗位参与软件开发（民主化）的方向转变。 微软的软件工程师现在被要求同时使用 Claude Code 和 GitHub Copilot，并提供对比反馈，尽管微软自身向客户销售其 Copilot 产品。

telegram · zaihuapd · May 23, 06:05

**背景**: Claude Code 是 Anthropic 开发的一款 AI 驱动的、智能体式的编程工具，它集成在终端中，能够理解代码库，并通过自然语言命令帮助开发者编辑文件、运行命令和自动化任务。更广泛的行业趋势显示，AI 辅助编程正在超越专业开发者的范畴，新的工具和培训不断涌现，旨在让非技术员工也能有效地与 AI 协作进行应用开发。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://claude.com/product/claude-code">Claude Code by Anthropic | AI Coding Agent, Terminal, IDE</a></li>
<li><a href="https://code.claude.com/docs/en/overview">Overview - Claude Code Docs</a></li>
<li><a href="https://resources.rework.com/guides/ai-team-readiness/ai-tools-training-non-technical-teams">"AI Tools Training Playbook for Non-Technical Teams: What ...</a></li>

</ul>
</details>

**标签**: `#AI`, `#software-engineering`, `#enterprise-adoption`, `#Microsoft`, `#Claude-Code`

---

<a id="item-8"></a>
## [微软财报披露 OpenAI 单季度亏损 115 亿美元](https://t.me/zaihuapd/41537) ⭐️ 7.0/10

微软最新季度财报显示，基于权益法投资，OpenAI 在该季度净亏损约 115 亿美元，导致微软单季度净利润减少 31 亿美元。 这一披露凸显了人工智能开发的巨大资金需求，可能影响 AI 行业的投资趋势，因为 OpenAI 是关键参与者，其亏损表明尖端技术的高昂成本。 这一亏损是 OpenAI 今年上半年 43 亿美元营收的近三倍，微软已投入其 130 亿美元承诺中的 116 亿美元，计算基于微软持有 OpenAI 约 27% 至 32.5% 的股权。

telegram · zaihuapd · May 23, 07:40

**背景**: 权益法是一种会计方法，投资者根据所有权比例记录其应占被投资公司的利润或亏损。OpenAI 是领先的人工智能研究机构，微软的重要股份反映了他们在推进 AI 技术方面的战略伙伴关系。

**标签**: `#AI`, `#OpenAI`, `#Microsoft`, `#financial-disclosure`, `#AI-industry`

---