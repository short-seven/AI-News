---
layout: default
title: "Horizon Summary: 2026-05-16 (ZH)"
date: 2026-05-16
lang: zh
---

> From 34 items, 16 important content pieces were selected

---

1. [vLLM v0.21.0 发布，包含重大破坏性变更与性能优化](#item-1) ⭐️ 8.0/10
2. [谷歌 Project Zero 披露 Pixel 10 的零点击漏洞链](#item-2) ⭐️ 8.0/10
3. [Sigmoid 函数无法准确预测人工智能进展](#item-3) ⭐️ 8.0/10
4. [Jason Scott 的 ASCII 网站及其数字保存工作受社区庆祝](#item-4) ⭐️ 8.0/10
5. [arXiv 明确处罚未核查大模型生成内容：禁投一年](#item-5) ⭐️ 8.0/10
6. [苹果与 OpenAI 合作关系紧张，可能引发法律行动](#item-6) ⭐️ 8.0/10
7. [讽刺文章批评 npm 包管理器持续存在的安全漏洞](#item-7) ⭐️ 7.0/10
8. [批判企业将决策外包给 AI 的'AI 精神病'现象](#item-8) ⭐️ 7.0/10
9. [Zulip 转型为非营利基金会，核心团队离职](#item-9) ⭐️ 7.0/10
10. [加州法案要求在线游戏关闭时提供补丁或退款](#item-10) ⭐️ 7.0/10
11. [美国司法部要求苹果和谷歌提供一款汽车改装应用 10 万用户身份信息](#item-11) ⭐️ 7.0/10
12. [探索 OxCaml 在太空应用中的使用](#item-12) ⭐️ 7.0/10
13. [新书探讨乔布斯在 NeXT 的变革岁月](#item-13) ⭐️ 7.0/10
14. [集体诉讼指控 OpenAI 未经同意分享用户数据](#item-14) ⭐️ 7.0/10
15. [AMD 确认 FSR 4.1 对 RX 7000 和 RX 6000 系列显卡的支持时间表](#item-15) ⭐️ 7.0/10
16. [特朗普称与习近平讨论 AI 护栏及英伟达 H200 芯片，称中国选择不买 H200](#item-16) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [vLLM v0.21.0 发布，包含重大破坏性变更与性能优化](https://github.com/vllm-project/vllm/releases/tag/v0.21.0) ⭐️ 8.0/10

vLLM v0.21.0 正式弃用了对 Transformers v4 的支持，并要求使用兼容 C++20 的编译器进行构建，这构成了破坏性变更。该版本还将 KV 缓存卸载子系统与新的混合内存分配器(HMA)集成，并改进了投机解码，使其能够遵守推理模型的思考预算。 这些破坏性变更，特别是对 Transformers v4 的弃用和新的编译器要求，需要用户和开发者立即采取行动以维持兼容性。而针对 KV 内存管理和投机解码的优化，显著提升了大型推理模型的推理性能与效率，推动了大语言模型推理基础设施的发展前沿。 新的 KV 卸载系统现支持调度器端的滑动窗口组以优化内存管理，投机解码功能则可以跟踪并限制推理模型中“思考”token 的生成。此外，还引入了新的 TOKENSPEED_MLA 注意力后端，专门为在 NVIDIA Blackwell GPU 上运行 DeepSeek-R1 等模型的预填充和解码操作进行了优化。

github · khluu · May 15, 08:44

**背景**: vLLM 是一个面向大语言模型的高吞吐、高内存效率的推理引擎。KV 缓存卸载是指将键值缓存从快速但稀缺的 GPU 内存转移到更慢但更充裕的内存（如 CPU DRAM），从而提高整体吞吐量。投机解码是一种优化技术，它使用一个更小、更快的“草稿”模型来猜测 token，然后由主模型在单个批次中验证这些 token，从而加速文本生成。MLA（多头潜在注意力）是 DeepSeek 等一些模型使用的特定注意力机制。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://vllm-project.github.io/2026/01/08/kv-offloading-connector.html">Inside vLLM's New KV Offloading Connector: Smarter Memory Transfer for ...</a></li>
<li><a href="https://iamhemanth.in/blog/speculative-decoding-the-billion-dollar-trick-hiding-in-plain-sight">Speculative Decoding : The Billion-Dollar Trick Hiding in Plain Sight</a></li>
<li><a href="https://sgl-project.github.io/advanced_features/attention_backend.html">Attention Backend — SGLang</a></li>

</ul>
</details>

**标签**: `#LLM`, `#inference-engine`, `#vLLM`, `#release-notes`, `#AI-optimization`

---

<a id="item-2"></a>
## [谷歌 Project Zero 披露 Pixel 10 的零点击漏洞链](https://projectzero.google/2026/05/pixel-10-exploit.html) ⭐️ 8.0/10

谷歌的 Project Zero 团队披露了一个针对谷歌 Pixel 10 的关键零点击漏洞链，攻击者可能无需任何用户交互即可入侵设备。该披露揭示了 Android 的 AI 驱动消息分析功能中的漏洞，这些功能在用户参与之前就预处理媒体。 这很重要，因为它突显了广泛使用的 Android 设备中的严重安全风险，特别是随着 AI 功能扩大攻击面，可能影响数百万用户，并加剧了对生态系统中供应商响应时间的审视。 该漏洞链利用了 AI 驱动消息处理中的漏洞，在用户交互前就解码媒体，增加了零点击攻击面；值得注意的是，谷歌在 90 天内修补了这个 Android 驱动程序错误，这是该供应商首次如此快速地修复此类漏洞。

hackernews · happyhardcore · May 15, 13:39

**背景**: 零点击漏洞是一种无需用户交互即可执行的网络攻击，通常针对设备处理传入数据（如消息或媒体）时的漏洞。漏洞链涉及按顺序使用多个漏洞来提升权限并实现恶意目标，常用于复杂攻击。谷歌 Project Zero 是谷歌雇佣的知名安全团队，专注于发现软件和硬件中的零日漏洞，以提升整体安全性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Exploit_(computer_security)">Exploit (computer security) - Wikipedia</a></li>
<li><a href="https://www.kaspersky.com/resource-center/definitions/what-is-zero-click-malware">Zero-Click Exploits</a></li>
<li><a href="https://en.wikipedia.org/wiki/Project_Zero">Project Zero - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 社区讨论表达了对 AI 功能在未经用户明确同意下扩大攻击面的担忧，一位评论者指出谷歌的快速修补令人放心，但引发了对其他 Android 供应商响应较慢的担忧；其他人辩论漏洞披露频率的增加是由于真实的安全趋势还是网络安全中 AI 的炒作，同时一些人询问最近 iPhone 越狱的缺失。

**标签**: `#security`, `#Android`, `#exploit`, `#vulnerability`, `#mobile`

---

<a id="item-3"></a>
## [Sigmoid 函数无法准确预测人工智能进展](https://www.astralcodexten.com/p/the-sigmoids-wont-save-you) ⭐️ 8.0/10

该文章提出批评，认为 S 型增长函数是预测人工智能发展的误导性模型，因为历史上的技术进步往往是由范式之间的不连续跳跃所驱动，而非平滑、可预测的曲线。 这一点很重要，因为过于简单的增长模型可能导致在人工智能领域的投资、政策和公众预期产生误判；理解突破性进展的不可预测性对于把握这项技术的未来轨迹至关重要。 文章以飞机速度限制的历史为例，说明增长通常是一系列针对不同技术（螺旋桨、喷气式发动机）的“S 型曲线”，每项技术在达到其基本极限后都会被取代。文章指出，在不了解当前人工智能范式基本极限的情况下，Lindy 效应——即一种认为技术未来寿命与其当前年龄成正比的启发式法则——可能比预测连续的 S 型增长是更合理的默认假设。

hackernews · Tomte · May 15, 10:51

**背景**: Sigmoid 函数是一种 S 形数学曲线，在机器学习中常用作激活函数，但有时也被更广泛地用于模拟技术随时间的采纳或进展，其特点是初期增长缓慢、中期加速、最终趋于饱和。“Lindy 效应”或“Lindy 定律”是一种理论，认为非消耗性物品（如技术或思想）的未来预期寿命与其当前年龄成正比，这意味着较老的事物可能具有更长的剩余寿命。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Sigmoid_function">Sigmoid function - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Lindy_effect">Lindy effect - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 讨论呈现出几种关键观点：一位评论者认为文章本身承认了技术范式替换的模式，但随后却忽略了它。另一位则强调准确预测人工智能时间表的根本不可能性，并指出了常见预测模型的缺陷。一些人认为 Lindy 效应是应对不确定性时一个有价值的启发式法则，而另一些人则质疑人工智能当前可衡量的进步是否真正反映了向通用智能的发展。

**标签**: `#AI`, `#Machine Learning`, `#Technology Trends`, `#Lindy's Law`, `#Growth Models`

---

<a id="item-4"></a>
## [Jason Scott 的 ASCII 网站及其数字保存工作受社区庆祝](https://ascii.textfiles.com/) ⭐️ 8.0/10

Hacker News 社区庆祝了 Jason Scott 的 textfiles.com 网站及其广泛的存档工作，具体分享了他大量数字化工作的例子，例如数千盘磁带和手册的收藏。 这次庆祝凸显了敬业个人在保存互联网历史和调制解调器/BBS 时代文化产物方面所发挥的关键作用，这些遗产若不加保存便会失传，从而确保其为后代所访问。 社区成员列举了他长达十年的努力，数字化了超过 1.3 万本手册（平均每天约 3.5 本），以及一个单独项目中他数字化了来自个人收藏的 1300 多盘磁带，所有内容都上传到了互联网档案馆。

hackernews · bookofjoe · May 15, 14:02

**背景**: Jason Scott 是一位著名的数字档案员和历史学家。他的网站 textfiles.com 是一个主要致力于保存公告板系统（BBS）时代文件和文化的大型档案库。ASCII 艺术是一种使用 ASCII 标准中可打印字符进行创作的图形设计技术，在早期在线和 BBS 社区中是一种主要的创意表达形式。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/ASCII_art">ASCII art - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Textfiles.com">textfiles.com - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Archive_Team">Archive Team - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 社区讨论氛围非常积极，用户们赞扬了 Jason Scott 惊人的产出效率和奉献精神。大家分享了具体轶事，例如他数字化了某用户全部的磁性媒体收藏，并对他及 Archive Team 为保持数字历史自由可用所做的工作表示感谢。

**标签**: `#digital preservation`, `#ASCII art`, `#internet history`, `#archival work`, `#Jason Scott`

---

<a id="item-5"></a>
## [arXiv 明确处罚未核查大模型生成内容：禁投一年](https://x.com/tdietterich/status/2055000956144935055) ⭐️ 8.0/10

arXiv 确立了一项明确的处罚措施：如果作者的论文包含未经核查的大语言模型生成内容，该作者将被禁止向 arXiv 投稿一年。禁投期结束后，其后续投稿还需先被一个可信的同行评审会议或期刊接收，方能提交至 arXiv。 该政策直接回应了人工智能研究中日益严重的学术诚信问题，通过要求作者对大模型生成内容负责，为其他学术平台树立了重要先例，推动其执行类似标准，以遏制不可靠的 AI 生成文本在学术作品中的泛滥。 该处罚针对的是作者疏忽的明确证据，例如文中保留了虚构的参考文献、大模型的元注释（如“此处为占位符”），或“此表仅为示例数据”等短语，因为 arXiv 的行为准则规定，作者署名即代表对论文的全部内容负责，无论内容由何种方式生成。

telegram · zaihuapd · May 15, 04:30

**背景**: 大语言模型容易产生“幻觉”，即自信地生成虚假或无意义的信息，包括完全虚构的学术引用。这在研究写作中是一个重大风险，因为不加批判地使用此类内容会传播错误信息。“元注释”指的是人工智能在其输出中可能包含的指令或占位符，用户本应在最终定稿前将其替换为真实内容。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)">Hallucination (artificial intelligence) - Wikipedia</a></li>
<li><a href="https://www.meta.com/help/artificial-intelligence/1783222608822690/">How to identify AI content on Meta products | Meta Help Center | Meta Store</a></li>

</ul>
</details>

**社区讨论**: 该公告由知名人工智能研究员 Thomas G. Dietterich 分享，在技术社区中获得了广泛支持。许多人认为，考虑到大语言模型的广泛普及，这是保护学术文献质量和可信度的必要且早该采取的措施。

**标签**: `#AI`, `#arXiv`, `#LLM`, `#academic ethics`, `#research policy`

---

<a id="item-6"></a>
## [苹果与 OpenAI 合作关系紧张，可能引发法律行动](https://www.bloomberg.com/news/articles/2026-05-14/openai-apple-partnership-frays-setting-up-possible-legal-fight) ⭐️ 8.0/10

OpenAI 正考虑对苹果采取法律行动，指控苹果未能在其平台上充分推广 ChatGPT 集成，导致订阅数量远低于预期。作为回应，苹果计划在即将发布的 iOS 27 中向 Anthropic（Claude）和谷歌（Gemini）等竞争对手的 AI 模型开放 Siri。 这场发生在 AI 与消费科技领域两大巨头之间的公开裂痕，可能会从根本上重塑主要平台整合和货币化第三方 AI 服务的方式，可能打破排他性合作关系，并为消费者提供更多选择。 据报道，OpenAI 已聘请外部律师研究其法律选项，可能包括发出正式的违约通知。苹果对 OpenAI 的隐私标准、其硬件业务野心以及据称挖角苹果工程师的行为感到不满。

telegram · zaihuapd · May 15, 12:59

**背景**: 2024 年，苹果宣布与 OpenAI 合作，将 ChatGPT 集成到 Siri 及其操作系统中，作为其苹果智能（Apple Intelligence）战略的一部分。该集成旨在成为其设备的一个关键卖点。Claude 是 Anthropic 公司开发的一系列大语言模型，该公司专注于 AI 安全；而 Gemini 则是谷歌旗下的多模态 AI 模型家族。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Claude_(language_model)">Claude (language model) - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Google_Gemini">Google Gemini - Wikipedia</a></li>

</ul>
</details>

**标签**: `#AI partnerships`, `#Apple`, `#OpenAI`, `#Legal disputes`, `#iOS AI integration`

---

<a id="item-7"></a>
## [讽刺文章批评 npm 包管理器持续存在的安全漏洞](https://kevinpatel.xyz/posts/no-way-to-prevent-this/) ⭐️ 7.0/10

一篇讽刺性文章套用了反复出现的“无法阻止这种情况”的标题格式来批评 npm，认为其持续存在的安全问题是一种系统性选择，而非不可避免的事实。 这篇评论凸显了开源软件供应链中持续存在的信任与安全危机，特别是针对 npm 的架构，并引发了社区关于包管理器所需系统性变革的辩论。 文章及后续讨论将 npm 的`postinstall`脚本等功能确定为一个关键的攻击面，认为其对新发布的包应被弃用，并比较了 npm、PyPI、Go 和 Rust 等不同生态系统相对的安全态势。

hackernews · alligatorplum · May 16, 00:36

**背景**: 文章标题戏仿了一个常用于评论美国大规模枪击事件的讽刺性新闻标题，这里将其应用于软件供应链攻击。“抢注相似域名”是包管理器中常见的攻击手段，攻击者注册名称与流行包相似的恶意包来欺骗用户。安装脚本（如`postinstall`）的存在是一个重大风险，因为它们可以在开发者仅仅安装一个包时，就在其机器上执行任意代码。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.linkedin.com/pulse/understand-typosquatting-package-names-avoid-supply-sommarström">Understand typosquatting in package names to avoid supply chain...</a></li>
<li><a href="https://nesbitt.io/2025/12/17/typosquatting-in-package-managers.html">Typosquatting in Package Managers | Andrew Nesbitt</a></li>

</ul>
</details>

**社区讨论**: 社区讨论普遍认同 npm 的设计，特别是允许任意`postinstall`脚本，存在缺陷且应加以限制。然而，关于哪个替代包管理器更安全存在争论，一些人认为，由于缺乏完善的锁文件，Python 的 pip 现在比 npm 更危险，这个问题已由`uv`等新工具部分解决。

**标签**: `#package-managers`, `#cybersecurity`, `#npm`, `#open-source-security`

---

<a id="item-8"></a>
## [批判企业将决策外包给 AI 的'AI 精神病'现象](https://twitter.com/mitchellh/status/2055380239711457578) ⭐️ 7.0/10

米切尔·桥本（Mitchell Hashimoto）一篇引发广泛讨论的社交媒体帖子指出，一些公司正遭受'AI 精神病'的困扰，它们将战略决策和批判性思维过度外包给 AI 系统，而非仅将其作为工具使用。 这场讨论凸显了人们对组织在核心业务功能上过度依赖 AI 的日益担忧，这可能导致战略偏离、机构知识流失，以及创建出人类难以管理或修正的复杂且脆弱的系统。 'AI 精神病'一词被隐喻性地用于描述一种对企业 AI 输出盲目信任的心态，其表现包括高管将 ChatGPT 截图作为确凿推理依据发布，以及工程师因认为'AI 代理稍后会修复'而发布有缺陷的软件。一个预测的后果是，'AI 拯救咨询'业务将兴起，以收拾这些不稳定的系统残局。

hackernews · reasonableklout · May 15, 20:26

**背景**: 在人工智能伦理中，'AI 精神病'（或'聊天机器人精神病'）是一个非正式术语，描述用户在与聊天机器人长时间互动后产生偏执或妄想的现象。此次讨论将这一概念从个人延伸至组织，批评了一种公司用 AI 生成决策取代人类判断的趋势。该现象批评了一种根本性的转变：从将 AI 视为生产力工具，到将其当作商业和工程中的自主决策者。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Chatbot_psychosis">Chatbot psychosis - Wikipedia</a></li>
<li><a href="https://www.linkedin.com/pulse/decoding-ai-psychosis-meaning-warning-signs-anoop-kumar-i5u9c">Decoding AI Psychosis : Meaning , Warning Signs, and Implications</a></li>

</ul>
</details>

**社区讨论**: 社区意见存在分歧；一些人认同将批判性思维外包给 AI 是危险的，会导致产生难以理解、不稳定的系统。另一些人则认为该批评混淆了使用 AI 作为工具与盲目接受其输出，认为 AI 在编程或头脑风暴中的恰当使用是有益的。一条幽默但尖锐的评论指出，缓慢、保守的技术采用方式可能讽刺地成为一种竞争优势。

**标签**: `#AI Ethics`, `#Software Engineering`, `#Business Strategy`, `#AI Dependency`

---

<a id="item-9"></a>
## [Zulip 转型为非营利基金会，核心团队离职](https://blog.zulip.com/2026/05/15/announcing-zulip-foundation/) ⭐️ 7.0/10

开源群聊平台 Zulip 宣布通过捐赠公司的方式转型为非营利基金会，其创始人 Tim Abbott 及三名高级团队成员将不再担任全职领导职务，并加入 Anthropic。 此举建立了一种新的治理模式，旨在通过确保项目独立于商业压力来建立长期信任，直接回应了用户对专有替代方案的关键担忧，并为可持续的开源项目树立了先例。 新成立的 Zulip 基金会明确以服务公益为目标，而离职的团队成员将继续以顾问身份为 Zulip 贡献力量，从而保障项目的延续性。

hackernews · boramalper · May 15, 18:37

**背景**: Zulip 是一款开源的、面向团队的群聊应用，以其基于话题的线程模型而闻名，在严肃的专业讨论中常被认为优于 Discord。开源软件基金会是非营利组织，负责管理项目的治理、知识产权和社区支持，使其免受任何单一企业赞助商商业利益的影响，并有助于促进社区驱动的开发。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Free_and_open-source_software">Free and open - source software - Wikipedia</a></li>
<li><a href="https://www.techzine.eu/experts/devops/139288/advancing-europes-public-agenda-through-open-source-software-foundations/">Advancing Europe’s public agenda through Open Source Software ...</a></li>

</ul>
</details>

**社区讨论**: 社区讨论显示，对于基金会增强信任和独立性的潜力，普遍持强烈的积极态度，尽管一些用户质疑公告的时机，并将其与科技行业近期的高调收购事件进行比较。评论还赞扬了 Zulip 相较于 Discord 等平台，其界面更利于结构化讨论。

**标签**: `#open source`, `#nonprofit`, `#software governance`, `#community trust`, `#Zulip`

---

<a id="item-10"></a>
## [加州法案要求在线游戏关闭时提供补丁或退款](https://arstechnica.com/gaming/2026/05/bill-to-keep-online-games-playable-clears-key-hurdle-in-california/) ⭐️ 7.0/10

一项要求游戏公司在关闭在线游戏时提供补丁或退款的加州法案已在州议会通过关键立法障碍。 这项法案之所以重要，是因为它解决了游戏行业中的软件保存和消费者保护问题，可能确保玩家在官方支持结束后仍能访问游戏，并影响行业实践。 该法案可能要求为已停运的游戏开源服务器代码，并排除基于订阅的服务，这可能导致市场扭曲或增加开发者的风险，如社区讨论所强调的。

hackernews · Lihh27 · May 15, 19:48

**背景**: 在线游戏通常依赖公司的持续服务器支持，当服务器关闭时，玩家会完全失去对游戏的访问。软件保存努力，如模拟或发布服务器代码，旨在保持游戏的可玩性，例如 Emupedia 的复古软件项目和 wipEout Rewrite 的技术保存倡议。GOG.com 的无 DRM 分发也支持游戏的长期可访问性。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://emupedia.digital/">Emupedia – Free Retro Software and Classic Operating Systems</a></li>
<li><a href="https://www.gog.com/en/">Welcome to GOG.com | best PC games DRM-free</a></li>
<li><a href="https://sourceforge.net/projects/wipeout-rewrite.mirror/">wipEout Rewrite download | SourceForge.net</a></li>

</ul>
</details>

**社区讨论**: 社区评论显示意见分歧：一些用户支持开源服务器代码和提前通知关闭以协助保存，而另一些人则担心该法案可能增加开发者的财务负担、扭曲市场激励，或导致加速订阅模式等意外后果。

**标签**: `#gaming`, `#legislation`, `#software-preservation`, `#open-source`

---

<a id="item-11"></a>
## [美国司法部要求苹果和谷歌提供一款汽车改装应用 10 万用户身份信息](https://macdailynews.com/2026/05/15/u-s-doj-demands-apple-and-google-unmask-over-100000-users-of-popular-car-tinkering-app-in-emissions-crackdown/) ⭐️ 7.0/10

美国司法部已向苹果和谷歌发出法律要求，命令它们交出一款流行汽车改装应用超过 10 万名用户的身份信息，这是其排放执法行动的一部分。 此举为政府通过集中式应用商店过度侵犯用户隐私树立了一个重要先例，并引发了严重关切，即此类监控权力未来可能被更广泛地用于针对修改自己设备的个人。 据称该应用被用作非法删除或绕过车辆出厂排放控制的工具，这违反了《清洁空气法》，美国司法部表示需要用户数据来为调查识别证人。

hackernews · tencentshill · May 15, 17:28

**背景**: 现代车辆使用控制器局域网（CAN 总线）在各电子控制单元（ECU）之间进行内部通信。“汽车改装”或 ECU 调校应用允许用户修改此软件，这可能包括调整性能，或者更相关地，禁用废气再循环（EGR）等排放控制系统以提高功率或燃油经济性，但通常会以增加污染为代价。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/CAN_bus">CAN bus - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Car_tuning">Car tuning - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 社区讨论存在分歧，一些人同意应追究故意破坏排放控制的用户的责任，而许多其他人则对法律先例深表担忧。评论者担心这种权力可能很快被汽车制造商利用，去针对那些禁用 GPS 跟踪等功能的人，并且他们将此视为反对应用分发过度集中的一个警示案例。

**标签**: `#privacy`, `#legal`, `#app-store-policy`, `#government-surveillance`, `#digital-rights`

---

<a id="item-12"></a>
## [探索 OxCaml 在太空应用中的使用](https://gazagnaire.org/blog/2026-05-14-borealis.html) ⭐️ 7.0/10

这篇博文讨论了 OxCaml 在太空系统中的实际部署，实现了 p99.9 延迟从每包 29 纳秒降至 9 纳秒，并在 2500 万个数据包上消除了垃圾回收压力。 这表明 OxCaml 能够提供适合关键太空应用的性能，可能使垃圾回收语言在需要低延迟的系统编程中更加可行。 OxCaml 使用栈注释来最小化堆分配并控制垃圾回收，显著提高了延迟，但社区评论对重新发明安全协议与使用像 TLS 这样的既有标准提出了担忧。

hackernews · yminsky · May 15, 10:55

**背景**: OxCaml 是 Jane Street 开发的 OCaml 编程语言扩展集，旨在提升系统编程性能。OCaml 是一种静态类型、函数式语言，具有自动垃圾回收功能，这简化了内存管理，但在实时场景中可能引入延迟。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://oxcaml.org/">OxCaml | About</a></li>
<li><a href="https://blog.janestreet.com/introducing-oxcaml/">Jane Street Blog - Introducing OxCaml</a></li>

</ul>
</details>

**社区讨论**: 社区成员分享了在太空使用 OCaml 的早期经验，强调了 OxCaml 的性能优势，并辩论了在卫星系统中自定义实现与使用像 TLS 这样的既有安全标准之间的权衡。

**标签**: `#OCaml`, `#Space Systems`, `#Programming Languages`, `#Performance Optimization`, `#Garbage Collection`

---

<a id="item-13"></a>
## [新书探讨乔布斯在 NeXT 的变革岁月](https://spectrum.ieee.org/steve-jobs-next-computer) ⭐️ 7.0/10

一本新书正引发讨论，该书详细分析了史蒂夫·乔布斯在 NeXT Computer 的时期，并认为这段经历是一次关键性的转变，为他日后成功重返苹果公司奠定了基础。 这段历史分析具有重要意义，因为 NeXT 的技术遗产，特别是其 NeXTSTEP 操作系统，直接为现代的 macOS 和 iOS 奠定了基础，从根本上塑造了苹果当前整个生态系统的软件架构。 NeXTSTEP 是一个先进的面向对象、多任务操作系统，基于 Mach 微内核和衍生自 BSD 的 Unix 构建，采用了 Display PostScript 等创新技术。蒂姆·伯纳斯-李正是在 NeXT 工作站上创造了第一个网页浏览器。

hackernews · rbanffy · May 15, 10:34

**背景**: 1985 年，史蒂夫·乔布斯离开苹果后创立了 NeXT 公司，旨在为高等教育市场开发高端工作站。尽管 NeXT 的硬件因定价过高在商业上并不成功，但其先进的 NeXTSTEP 软件却极具影响力。1996 年，苹果公司收购了 NeXT，这不仅让乔布斯回归，也将 NeXTSTEP 确立为其下一代操作系统 Mac OS X 的基础。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/NeXT_Computer">NeXT Computer</a></li>
<li><a href="https://en.wikipedia.org/wiki/NeXTSTEP_(operating_system)">NeXTSTEP (operating system)</a></li>
<li><a href="https://en.wikipedia.org/wiki/NeXT">NeXT - Wikipedia</a></li>

</ul>
</details>

**社区讨论**: 社区讨论集中于 NeXT 的持久影响，许多人认同现代苹果在很大程度上建立在 NeXT 的基础之上，并且这代表了商业史上最伟大的东山再起之一。评论者们争论乔布斯在此期间个人成长的深度，也有人对苹果近期的产品（如 Vision Pro）感到失望，认为它们缺乏 NeXT 时代那种激进的软件愿景。

**标签**: `#Steve Jobs`, `#NeXT Computer`, `#Apple`, `#tech history`, `#biography`

---

<a id="item-14"></a>
## [集体诉讼指控 OpenAI 未经同意分享用户数据](https://futurism.com/artificial-intelligence/openai-personal-information-meta-google) ⭐️ 7.0/10

在加州提起的一起集体诉讼指控 OpenAI 在未获得适当同意的情况下，将用户的聊天查询以及邮箱、用户 ID 等个人信息分享给了 Meta 和 Google。 这起诉讼针对一家领先的 AI 公司的数据隐私问题，而这是 AI 伦理中一个关键且充满争议的领域，其结果可能影响未来有关用户数据处理的法规和行业惯例。 诉状声称数据是通过 Meta Pixel 和 Google Analytics 这两种常见的网站分析和广告追踪工具进行传输的，这可能违反了加州的隐私法律。

telegram · zaihuapd · May 15, 03:45

**背景**: Meta Pixel 和 Google Analytics 是广泛使用的网站追踪和广告工具。Meta Pixel 用于追踪用户活动以衡量广告效果和定位受众，而 Google Analytics 则收集网站流量和用户行为数据。它们的使用受到隐私法规的约束，这些法规要求获得用户同意，并对数据收集和共享实践保持透明。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://byrajab.com/pixel-tracking-and-seo-in-action-how-meta-tracking-and-ads-work/">Pixel Tracking and SEO in Action, How Meta Tracking and ads work</a></li>
<li><a href="https://www.linkedin.com/pulse/ad-techs-meta-pixels-rapacious-reach-curious-case-new-sanjana-2tnfc">Ad tech 's and Meta Pixel 's rapacious reach: The curious case of New...</a></li>
<li><a href="https://ppc.land/ga4-now-collects-user-provided-data-without-a-user-id/">GA4 now collects user -provided data without a user ID</a></li>
<li><a href="https://www.analyticsmania.com/post/non-personalized-ads-in-google-analytics-4/">non_personalized_ads=0 in Google Analytics 4 explained</a></li>

</ul>
</details>

**标签**: `#privacy`, `#AI ethics`, `#OpenAI`, `#lawsuit`, `#data security`

---

<a id="item-15"></a>
## [AMD 确认 FSR 4.1 对 RX 7000 和 RX 6000 系列显卡的支持时间表](https://videocardz.com/newz/amd-fsr-upscaling-4-1-officially-coming-to-radeon-rx-7000-gpus-in-july-rx-6000-in-2027) ⭐️ 7.0/10

AMD 正式宣布，其基于机器学习的 FSR 4.1 超分辨率技术将于 2024 年 7 月向 Radeon RX 7000 系列（RDNA 3）显卡开放，而较早的 Radeon RX 6000 系列（RDNA 2）计划在 2027 年初获得支持。 此次宣布将 AMD 的 AI 增强超分技术推广到更广泛的旧款硬件上，提升了更多用户的游戏性能和画质，并加剧了与 NVIDIA DLSS 的竞争。 FSR 4.1 是针对第一代 AI 加速器使用 INT8 指令开发的，发布时将支持超过 300 款游戏；与 FSR 4.0 相比，它在锐度方面有所改进，并对超级性能和动态分辨率缩放（DRS）模式进行了优化。

telegram · zaihuapd · May 15, 04:57

**背景**: AMD FidelityFX Super Resolution（FSR）是一种开源的超分辨率技术，旨在通过以较低分辨率渲染游戏再智能放大来提升帧率。FSR 4.1 通过引入机器学习标志着一个重大转变，更接近 NVIDIA 专有的 DLSS 技术所采用的方法，后者传统上需要特定的张量核心硬件。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://www.xda-developers.com/amd-fsr-41-ai-upscaling-finally-coming-to-older-radeon-rx-gpus/">AMD's FSR 4.1 AI upscaling is finally coming to older Radeon RX GPUs</a></li>
<li><a href="https://www.guru3d.com/story/amd-expands-fsr-41-upscaling-support-to-radeon-rx-7000-gpus/">AMD Expands FSR 4.1 Upscaling Support to Radeon RX 7000 GPUs</a></li>

</ul>
</details>

**标签**: `#AMD`, `#FSR`, `#GPU`, `#Upscaling`, `#Machine Learning`

---

<a id="item-16"></a>
## [特朗普称与习近平讨论 AI 护栏及英伟达 H200 芯片，称中国选择不买 H200](https://www.bloomberg.com/news/articles/2026-05-15/trump-says-he-discussed-ai-guardrails-nvidia-s-chips-with-xi) ⭐️ 7.0/10

特朗普访华期间与习近平讨论了人工智能护栏和英伟达 H200 芯片出口问题，美国已允许英伟达向中国供应 H200，但中国选择不购买，并致力于自主研发芯片。 这凸显了中美在 AI 政策和技术贸易方面的地缘政治紧张，可能加速中国实现半导体自给自足的努力，并影响全球供应链。 美国已为英伟达 H200 芯片对华出口发放许可，但北京尚未批准采购，导致零交付；此前中国曾拒绝性能较低的 H20 芯片。

telegram · zaihuapd · May 15, 15:13

**背景**: AI 护栏指的是人工智能开发的安全框架和指南，例如与 Anthropic 的 Mythos 模型相关的讨论。英伟达 H200 是用于高性能计算的先进 AI 芯片。中美技术关系涉及出口管制，旨在限制中国获取尖端技术，尤其是在 AI 和半导体领域。

<details><summary>参考链接</summary>
<ul>
<li><a href="https://grokipedia.com/page/2026_Chinese_restrictions_on_Nvidia_H200_chips">2026 Chinese restrictions on Nvidia H200 chips</a></li>

</ul>
</details>

**标签**: `#AI policy`, `#chip exports`, `#US-China relations`, `#Nvidia`, `#technology trade`

---