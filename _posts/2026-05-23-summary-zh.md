---
layout: default
title: "Horizon Summary: 2026-05-23 (ZH)"
date: 2026-05-23
lang: zh
---

> From 26 items, 12 important content pieces were selected

---

1. [字节跳动开源 Lance 统一多模态模型，可处理图像视频理解与生成](#item-1) ⭐️ 8.0/10
2. [探析日本企业多元化经营的文化与制度根源](#item-2) ⭐️ 7.0/10
3. [Anthropic 的“玻璃翼”项目报告初步成果，引发业界反响不一](#item-3) ⭐️ 7.0/10
4. [Deno 2.8 发布，带来增量更新](#item-4) ⭐️ 7.0/10
5. [Antigravity 2.0 领跑 OpenSCAD 建筑 3D LLM 基准测试](#item-5) ⭐️ 7.0/10
6. [yt-dlp 限制并弃用 Bun 运行时支持](#item-6) ⭐️ 7.0/10
7. [Anna's Archive 幽默呼吁大型语言模型为训练数据捐款](#item-7) ⭐️ 7.0/10
8. [美国出台新发表限制令国际研究人员陷入困惑](#item-8) ⭐️ 7.0/10
9. [AI HBM 需求导致内存短缺，消费电子产品重新定价](#item-9) ⭐️ 7.0/10
10. [FTC 要求近 100 万美元和解因欺骗性 AI 营销服务](#item-10) ⭐️ 7.0/10
11. [八部门联合整治非法跨境证券经营，老虎证券、富途、长桥被立案调查](#item-11) ⭐️ 7.0/10
12. [Cloudflare 发布故障报告：全球网络中断 25 分钟，影响 28%的 HTTP 流量](#item-12) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [字节跳动开源 Lance 统一多模态模型，可处理图像视频理解与生成](https://mp.weixin.qq.com/s/Xbfq72cr1796RZxJIs3L1A) ⭐️ 8.0/10

字节跳动发布了开源模型 Lance，其激活参数量仅为 30 亿，却原生统一了图像理解、视频理解、图像生成、视频生成和跨模态编辑，可同时输出文本、图像和视频。 在宽松的开源许可下发布一个高性能、轻量级的统一模型，降低了研究和应用开发的门槛，推动了多模态人工智能中传统上由不同系统处理的理解与生成任务的融合。 Lance 采用了共享上下文与双流专家架构，分别由 Qwen2.5-VL 和 Wan2.2 编码器处理理解与生成任务，并通过模态感知位置编码解决序列边界混淆问题；模型权重已在 Hugging Face 上以 Apache 2.0 许可开放。

telegram · zaihuapd · May 22, 06:40

**背景**: 多模态人工智能模型旨在处理并关联来自文本、图像和视频等不同数据类型的信息。“统一”模型旨在一个架构内同时处理“理解”（例如，描述图像）和“生成”（例如，根据文本创建图像），这具有挑战性。像用于图像生成的 GenEval 和用于视频生成的 VBench 等基准测试，是评估和比较此类模型性能的标准。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://arxiv.org/html/2510.27607">Dual-Stream Diffusion for World-Model Augmented Vision-Language-Action Model</a></li>
<li><a href="https://www.reddit.com/r/LocalLLaMA/comments/184i83s/new_approach_for_positional_encoding_contextaware/">New approach for positional encoding - context-aware methods - Reddit</a></li>
<li><a href="https://arxiv.org/html/2512.16853v1">GenEval 2: Addressing Benchmark Drift in Text-to-Image Evaluation</a></li>

</ul>
</details>

**标签**: `#multimodal AI`, `#computer vision`, `#video generation`, `#open source`

---

<a id="item-2"></a>
## [探析日本企业多元化经营的文化与制度根源](https://davidoks.blog/p/why-japanese-companies-do-so-many) ⭐️ 7.0/10

一篇分析文章指出，日本企业普遍倾向于跨行业进行多元化经营，这与西方企业专注核心业务的趋势形成鲜明对比，并将这一现象主要归因于日本独特的终身雇佣制及相关文化因素。 该分析提供了一个理解文化与劳动力制度如何从根本上塑造企业战略和组织结构的框架，并与西方主导的股东至上模式形成鲜明对比。 分析认为，这一制度之所以可行，是因为员工发展出不易转移的公司专用技能，且企业能免受外部市场压力的影响。文章将这类企业描述为主要为员工利益而非股东利益而存续的实体。

hackernews · d0ks · May 22, 15:22

**背景**: 终身雇佣制（終身雇用）是日本战后企业文化的重要基石，传统上大型企业招聘应届毕业生并隐含承诺其可工作至退休。这一制度促进了稳定与忠诚，但也限制了劳动力市场的流动性。在此背景下的企业多元化，意味着单一的财阀（keiretsu）集团同时在电子、保险、化工等截然不同的行业中运营。

**社区讨论**: 社区讨论增加了批判性的深度：一位评论者提醒不要过度浪漫化，并指出该制度与微妙的阶层结构及有限的劳动力市场流动性相关。其他人认同关于终身雇佣制的核心分析，但指出西方企业在股东利益最大化主导之前历史上也存在更多元化的经营。一个关键的反驳点则强调了该制度对错过初次招聘窗口期的求职者的不利影响。

**标签**: `#business-diversification`, `#corporate-culture`, `#systems-thinking`, `#japan`, `#organizational-behavior`

---

<a id="item-3"></a>
## [Anthropic 的“玻璃翼”项目报告初步成果，引发业界反响不一](https://www.anthropic.com/research/glasswing-initial-update) ⭐️ 7.0/10

Anthropic 发布了“玻璃翼”（Project Glasswing）项目的首次更新，透露其用于网络安全的 AI 工具在关键软件中识别出超过 1750 个高危或严重级别的漏洞，经独立验证，其中 90.6%为真实漏洞。 此次更新为 AI 驱动的漏洞检测提供了具体的大规模数据，显示了其在增强关键基础设施网络安全方面的巨大潜力，但社区反应不一，凸显了关于此类工具与现有方法相比的实际效果和必要性的持续争论。 一个关键细节是，报告称高危/严重漏洞经独立评估后真阳性率达到 90.6%，表明这些 AI 工具能够发现可操作的漏洞；然而，仍需要高成本的外部验证，以及社区对相比传统静态分析工具是否具有比较优势的怀疑，这些都是重要的警示。

hackernews · louiereederson · May 22, 19:31

**背景**: “玻璃翼”项目是 Anthropic 发起的一项倡议，旨在评估用于关键软件防御性网络安全的下一代 AI 工具。AI 代码分析工具利用大语言模型扫描源代码以寻找潜在安全漏洞，作为传统静态应用安全测试工具（如自动检查已知模式和错误的代码检查器）之上的高级层。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.anthropic.com/research/glasswing-initial-update">Project Glasswing: An initial update - Anthropic</a></li>
<li><a href="https://news.ycombinator.com/item?id=48240419">Project Glasswing: An Initial Update | Hacker News</a></li>

</ul>
</details>

**社区讨论**: 社区讨论观点尖锐对立：一些用户报告 AI 工具在生产环境中带来了变革性益处，准确率高（例如约 90%）；而另一些人则引用专家批评（如 curl 维护者的观点），质疑这些模型是否比现有工具有显著飞跃；务实主义者则质疑，在尚未使用基本静态分析的情况下进行此类投资的必要性。

**标签**: `#AI Security`, `#Code Analysis`, `#Vulnerability Detection`, `#Software Engineering`, `#Anthropic`

---

<a id="item-4"></a>
## [Deno 2.8 发布，带来增量更新](https://deno.com/blog/v2.8) ⭐️ 7.0/10

Deno 2.8 运行时已发布，引入了 'deno pack' 命令，用于项目安全且简单的打包。 此次发布巩固了 Deno 作为安全、现代 Node.js 替代方案的地位，为开发者提供了更多内置工具和选择。 虽然 Bun 强调速度和一体化方案，但 Deno 通过其基于 Rust 的架构和权限模型优先考虑安全性；此版本为增量更新而非重大突破。

hackernews · roflcopter69 · May 22, 11:23

**背景**: Deno 是一个安全的 JavaScript 和 TypeScript 运行时，由 Node.js 的原始设计者创建，旨在解决其前身的设计缺陷，内置 TypeScript 支持和基于权限的安全模型。Bun 是一个更新的高性能替代方案，旨在成为 Node.js 的直接替代品，并包含一个包管理器。两者都与成熟的 Node.js 生态系统竞争。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://deno.com/">Deno , the next-generation JavaScript runtime</a></li>
<li><a href="https://www.linode.com/docs/guides/how-to-install-and-use-deno/">Install and Use the Deno JavaScript Runtime (Node.js...) | Linode Docs</a></li>
<li><a href="https://en.wikipedia.org/wiki/Bun_(software)">Bun (software) - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 社区讨论强调了 Deno 在安全性和 TypeScript 支持方面的优势，同时质疑了 Bun 的快速崛起并与稳定的 Node.js 进行了比较。一些用户赞扬 Deno 的质量和理念，但对其长期资金模式表示担忧。

**标签**: `#javascript-runtime`, `#typescript`, `#deno`, `#web-development`, `#node-alternative`

---

<a id="item-5"></a>
## [Antigravity 2.0 领跑 OpenSCAD 建筑 3D LLM 基准测试](https://modelrift.com/blog/openscad-llm-benchmark/) ⭐️ 7.0/10

Antigravity 2.0 在 OpenSCAD 建筑 3D LLM 基准测试中排名第一，超越了 Codex 5.5 High 和 Claude Sonnet 等模型，在为 Pantheon 模型生成详细 CAD 脚本方面表现出色。 这一基准测试结果展示了 AI 在自动化 CAD 建模方面的进步，可能加速建筑设计流程，并为依赖精确 3D 模型的 3D 打印和工程等行业带来益处。 该基准测试专门评估了 AI 模型重建 Pantheon 的能力，Antigravity 2.0 独特地实现了复杂的内部细节如天花板方格，但社区批评指出其可用性问题，如强制升级和在不同模型类型上性能不一致。

hackernews · jetter · May 22, 10:38

**背景**: OpenSCAD 是一种基于脚本的 3D CAD 建模工具，常用于建筑和工程设计中的实体对象创建。LLM（大型语言模型）是从自然语言提示生成代码的 AI 系统，而此类基准测试评估它们将描述转化为精确 OpenSCAD 脚本以用于 3D 建模的能力。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://modelrift.com/blog/openscad-llm-benchmark/">OpenSCAD LLM Benchmark: Building the Pantheon | ModelRift Blog</a></li>
<li><a href="https://www.squaredtech.co/openscad-llm-benchmark-antigravity-20-takes-the-top-spot">OpenSCAD LLM Benchmark: Best AI Model Revealed</a></li>

</ul>
</details>

**社区讨论**: 社区讨论显示反馈复杂，用户如 [jhot] 分享了 AI 生成的 OpenSCAD 模型在 3D 打印中的成功实际应用，而其他人如 [mellosouls] 和 [ponyous] 批评基准测试范围狭窄和 Antigravity 2.0 的实际局限性，如可用性问题和模型性能不一致。

**标签**: `#LLM`, `#OpenSCAD`, `#3D_modeling`, `#benchmarks`, `#AI_design`

---

<a id="item-6"></a>
## [yt-dlp 限制并弃用 Bun 运行时支持](https://github.com/yt-dlp/yt-dlp/issues/16766) ⭐️ 7.0/10

命令行视频下载工具 yt-dlp 正式限制并弃用了对 Bun JavaScript 运行时的支持，原因是 Bun 进行的大规模代码库重写带来了可预见的兼容性和安全问题。 这一决定凸显了开源软件维护中的一个重要矛盾：下游项目可能难以支持那些经历了大规模、难以验证重写的上游依赖，这可能会导致生态系统碎片化，并影响依赖这些组合的用户。 被引用的核心问题是 Bun 对其约一百万行代码库的重写，yt-dlp 的维护者认为不可能对其进行全面的兼容性和安全审查，该弃用决定是通过一个 GitHub issue 宣布的，并引发了社区的广泛讨论。

hackernews · tamnd · May 22, 17:24

**背景**: yt-dlp 是一款流行且功能丰富的命令行工具，用于从各种网站下载音频和视频，它是 youtube-dl 的一个分支。Bun 是一个相对较新的高性能一体化 JavaScript 运行时和工具包，与 Node.js 竞争，以其集成了打包器和包管理器等众多功能而闻名。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://bun.sh/">Bun — A fast all-in-one JavaScript runtime</a></li>
<li><a href="https://www.linkedin.com/pulse/ai-generated-code-security-implications-developers-balavenugopal-v-g4ltc">AI - Generated Code : Security Implications for Developers</a></li>

</ul>
</details>

**社区讨论**: 社区讨论存在分歧：一些用户支持 yt-dlp 的决定，认为维护者有权选择其支持范围，不能期望他们与一个快速变化、受 AI 影响的代码库（常被称为 'vibe coding'）保持兼容。另一些人则批评此举是基于开发工具而非实际软件功能的歧视，并对 Bun 被收购后的发展方向表示遗憾。

**标签**: `#software maintenance`, `#Bun`, `#yt-dlp`, `#code quality`, `#AI-generated code`

---

<a id="item-7"></a>
## [Anna's Archive 幽默呼吁大型语言模型为训练数据捐款](https://annas-archive.gl/blog/llms-txt.html) ⭐️ 7.0/10

大型影子图书馆 Anna's Archive 发表了一篇博客文章，以幽默的口吻直接向大型语言模型 (LLM) 发话，暗示它们应该进行捐款，因为其训练数据很可能使用了该网站的藏书。 这一事件凸显了围绕使用海量在线数据（包括来自影子图书馆的版权材料）进行商业 AI 训练而无需补偿或同意的伦理和法律问题的持续激烈争论。 文章明确指出，大型语言模型很可能使用了其数据，并将捐款描述为资助保存更多人类作品以用于未来训练的一种方式，将讽刺与对数据来源的尖锐评论融为一体。

hackernews · janandonly · May 22, 11:28

**背景**: Anna's Archive 是一个元搜索引擎，聚合了来自 Library Genesis (LibGen) 和 Z-Library 等主要影子图书馆的书籍、论文及其他内容的链接。这些图书馆因在未获出版商许可的情况下托管大量版权材料而备受争议。对于 AI 开发者而言，这些来源构成了一个用于训练模型的海量且易于获取的文本语料库，但正如持续的诉讼和政策辩论所揭示的，使用此类数据引发了严重的版权侵权问题。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Anna's_Archive">Anna's Archive - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Artificial_intelligence_and_copyright">Artificial intelligence and copyright - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: Hacker News 上的讨论混合了幽默与严肃辩论；一些用户觉得帖子很有趣，并认同该网站保存知识的使命，而另一些人则指出，Anna's Archive 本身据报道曾向 AI 公司收取费用以提供其数据的优先访问权，这为情况增添了讽刺意味和伦理复杂性。

**标签**: `#AI ethics`, `#copyright`, `#LLMs`, `#data sourcing`, `#Hacker News community`

---

<a id="item-8"></a>
## [美国出台新发表限制令国际研究人员陷入困惑](https://www.science.org/content/article/u-s-researchers-face-new-restrictions-publishing-foreign-collaborators) ⭐️ 7.0/10

美国国立卫生研究院（NIH）和美国航空航天局（NASA）等资助机构正在对研究人员与外国合著者发表论文施加新限制，它们通过私下通知受资助者的方式执行，而未发布任何公开的正式指导，这引发了广泛的困惑和担忧。 这些不清晰的限制有可能阻碍国际科学合作，而这种合作对于 AI/ML 等领域的进步至关重要，可能导致美国研究人员被孤立，并减缓创新速度。 核心问题在于新规的应用范围模糊不清，尤其是对“外国组成部分”的定义，据报道，各机构是在发布个性化的指导，而非清晰、一致的政策。

hackernews · ceejayoz · May 22, 16:23

**背景**: 长期以来，美国联邦研究机构一直要求在资助申请中披露外国资金和合作，以管理安全和知识产权方面的担忧。新举措似乎是对现有“外国组成部分”规则的一种更严格、更具限制性的解释或执行，特别针对论文合著关系。

**社区讨论**: 社区讨论强调了透明度的缺失和官僚效率的低下，评论者批评没有公开、正式的规则。一些人指出与像中国这样的国家在合作政策上早已存在不对称性，而另一些人则指出，根据现有规则对外国合著者进行审查或许早该进行了。

**标签**: `#research policy`, `#international collaboration`, `#U.S. science funding`, `#academic publishing`

---

<a id="item-9"></a>
## [AI HBM 需求导致内存短缺，消费电子产品重新定价](https://simonwillison.net/2026/May/22/memory-shortage/#atom-everything) ⭐️ 7.0/10

内存制造商正将半导体晶圆产能从消费设备内存(DDR 和 LPDDR)重新分配给用于 AI 的高带宽内存(HBM)，预计到 2026 年底，HBM 的分配比例将从 2%增加到 20%，从而减少了其他内存类型的产能。 这种转变推高了消费电子产品的成本，尤其影响了对非洲和南亚等新兴市场至关重要的廉价智能手机，因为晶圆产能限制制约了内存供应。 每 GB HBM 所需的晶圆产能是 DDR 或 LPDDR 的三倍以上，内存公司基于过去的行业教训采取产能不足配置，进一步收紧供应并导致价格上涨。

rss · Simon Willison · May 22, 22:01

**背景**: 高带宽内存(HBM)是一种针对 AI 数据中心 GPU 优化的 DRAM，而 DDR 和 LPDDR 分别用于桌面电脑、服务器和移动设备。半导体制造商的晶圆处理能力是固定的，这些内存类型之间的分配是一场零和游戏，正如行业分析所指出的。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/High_Bandwidth_Memory">High Bandwidth Memory - Wikipedia</a></li>
<li><a href="https://semiwiki.com/wikis/semiconductor-ip-wikis/ddr-vs-lpddr-vs-hbm-wiki/">DDR vs . LPDDR vs . HBM Wiki - SemiWiki</a></li>
<li><a href="https://www.idc.com/resource-center/blog/global-memory-shortage-crisis-market-analysis-and-the-potential-impact-on-the-smartphone-and-pc-markets-in-2026/">Global Memory Shortage Crisis: Market Analysis and the Potential ... - IDC</a></li>

</ul>
</details>

**标签**: `#memory shortage`, `#AI impact`, `#HBM`, `#consumer electronics`, `#supply chain`

---

<a id="item-10"></a>
## [FTC 要求近 100 万美元和解因欺骗性 AI 营销服务](https://simonwillison.net/2026/May/22/ftc-active-listening/#atom-everything) ⭐️ 7.0/10

联邦贸易委员会强制 Cox 媒体集团及其他两家公司支付近 100 万美元和解，因为他们虚假声称其‘主动监听’AI 服务使用智能设备监听消费者对话以进行定向广告，但实际上该服务只是转售电子邮件列表。 此次和解突显了监管机构打击 AI 在数字营销中滥用的努力，强调了透明度和真正同意的重要性，这可能塑造未来的行业标准并加强消费者隐私保护。 联邦贸易委员会澄清，在服务条款中隐藏同意不构成充分同意，且如果服务按广告所述运作，将因未经授权使用语音数据而违反 FTC 法案第 5 条。

rss · Simon Willison · May 22, 04:48

**背景**: “主动监听”营销服务被宣传为使用 AI 通过智能设备监控对话以进行广告定向，但这一概念与关于手机监视用户的流行阴谋论相符，该阴谋论常被驳斥。营销中的 AI 通常涉及分析行为数据而非实时语音监控，像 FTC 这样的监管机构会监督欺骗性行为以保护消费者。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://skeptics.stackexchange.com/questions/56711/are-phones-listening-to-our-conversations-for-ad-targeting">Are phones listening to our conversations for ad targeting?</a></li>
<li><a href="https://www.reddit.com/r/technology/comments/18ipc6f/marketing_company_claims_that_it_actually_is/">Marketing Company Claims That It Actually Is Listening to Your Phone ...</a></li>

</ul>
</details>

**标签**: `#AI ethics`, `#privacy`, `#FTC regulation`, `#digital marketing`, `#consumer protection`

---

<a id="item-11"></a>
## [八部门联合整治非法跨境证券经营，老虎证券、富途、长桥被立案调查](https://mp.weixin.qq.com/s?__biz=MzA4NzAzMDgwMw==&amp;mid=2651090403&amp;idx=3&amp;sn=bca72a940ac72bef356f29b5b9576ac1&amp;chksm=8a1670281e2bc67d2df3608a313ba9fdaf0fcd2f43ce44475c6bf273b386af2e4f9d8e8e2e2b&amp;scene=0&amp;xtrack=1) ⭐️ 7.0/10

中国证监会等八部门联合印发整治方案，明确将清理非法跨境证券、期货、基金经营业务，设定两年集中整治期，期间仅允许存量投资者单向卖出并转出资金。同时，证监会已对老虎证券、富途、长桥等境内外相关主体涉嫌非法跨境展业的行为立案调查。 此次整治行动显著收紧了对跨境资金流动和交易活动的监管，直接冲击了为境内投资者提供海外证券交易服务的主要互联网券商平台，并引导投资者转向港股通、QDII 等官方认可的合法投资渠道。 为期两年的整治方案要求在期满后全面关停相关境内网站、交易软件和配套服务器，监管部门拟没收被调查公司的全部违法所得并予以严厉处罚。

telegram · zaihuapd · May 22, 08:26

**背景**: 沪港通和深港通是连接内地与香港股票市场的互联互通机制，允许两地投资者通过本地券商交易对方市场的股票。合格境内机构投资者（QDII）计划允许获批准的国内金融机构投资境外证券市场。老虎证券、富途、长桥等是知名的互联网券商，它们为内地投资者提供美股和港股交易服务，但在跨境展业许可方面一直处于监管灰色地带。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Shanghai-Hong_Kong_Stock_Connect">Shanghai-Hong Kong Stock Connect - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Qualified_Domestic_Institutional_Investor">Qualified Domestic Institutional Investor - Wikipedia</a></li>
<li><a href="https://english.sse.com.cn/access/stockconnect/introduction/">Shanghai-Hong Kong Stock Connect – Introduction</a></li>

</ul>
</details>

**标签**: `#financial regulation`, `#fintech`, `#cross-border trading`, `#recruitment technology`, `#business failure`

---

<a id="item-12"></a>
## [Cloudflare 发布故障报告：全球网络中断 25 分钟，影响 28%的 HTTP 流量](https://t.me/zaihuapd/41527) ⭐️ 7.0/10

12 月 5 日，Cloudflare 全球网络发生重大故障，持续约 25 分钟，导致 28%的 HTTP 流量中断。此次故障源于一次旨在修复 Next.js 关键漏洞的 WAF 规则更新出现错误。 此事件凸显了关键互联网基础设施提供商在快速部署安全补丁与维持系统稳定之间需保持的微妙平衡，其影响波及全球众多网站和终端用户。 故障专门影响了使用旧版 FL1 代理并启用了 Cloudflare 托管规则集的客户，根本原因被确认为 WAF 规则更新流程中的一个错误，该错误导致系统崩溃。

telegram · zaihuapd · May 22, 16:15

**背景**: Web 应用防火墙（WAF）是一个安全层，用于过滤和监控 Web 应用与互联网之间的 HTTP 流量，以阻止常见攻击。本次旨在修复的安全漏洞 CVE-2025-55182，是 React Server Components 中一个关键（CVSS 10.0）的预认证远程代码执行漏洞，影响 Next.js 等框架。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.cloudflare.com/learning/ddos/glossary/web-application-firewall-waf/">What is a WAF ? | Web Application Firewall explained</a></li>
<li><a href="https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components">Critical Security Vulnerability in React Server Components – React</a></li>
<li><a href="https://www.microsoft.com/en-us/security/blog/2025/12/15/defending-against-the-cve-2025-55182-react2shell-vulnerability-in-react-server-components/">Defending against the CVE-2025-55182 (React2Shell) vulnerability in React Server Components | Microsoft Security Blog</a></li>

</ul>
</details>

**标签**: `#cloudflare`, `#network-outage`, `#incident-report`, `#web-security`, `#infrastructure`

---