---
layout: default
title: "Horizon Summary: 2026-05-18 (EN)"
date: 2026-05-18
lang: en
---

> From 19 items, 8 important content pieces were selected

---

1. [Semble: Code search tool for AI agents uses 98% fewer tokens than grep](#item-1) ⭐️ 8.0/10
2. [Mozilla urges UK regulators to recognize VPNs as essential privacy and security tools.](#item-2) ⭐️ 8.0/10
3. [$80 Android Tablet Repurposed as a Debian Linux Workstation](#item-3) ⭐️ 7.0/10
4. [AI May Not Accelerate Software Development Processes](#item-4) ⭐️ 7.0/10
5. [Choosing native APIs for text rendering, until it becomes complex](#item-5) ⭐️ 7.0/10
6. [GDS Advocates 'Keep Open by Default' in Response to NHS's Open Source Retreat](#item-6) ⭐️ 7.0/10
7. [OpenClaw Developer's AI Automation Test Costs $1.3M in One Month](#item-7) ⭐️ 7.0/10
8. [EU DMA Boosts Firefox Users by Over 6 Million in Europe](#item-8) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [Semble: Code search tool for AI agents uses 98% fewer tokens than grep](https://github.com/MinishLab/semble) ⭐️ 8.0/10

MinishLab has open-sourced Semble, a code search tool designed for AI agents that claims to reduce token usage by 98% compared to traditional grep-based search by combining static embeddings with BM25 ranking. This tool directly addresses a critical inefficiency in AI coding agents, where excessive token consumption from searching large codebases significantly increases operational costs and limits scalability, potentially making agents faster and cheaper to run. Semble uses a custom 16M-parameter static model (potion-code-16M) for embeddings and fuses its results with BM25 using Reciprocal Rank Fusion (RRF); it runs entirely on CPU with no need for GPUs or external API keys, achieving 0.854 NDCG@10 accuracy on its benchmark.

hackernews · Bibabomas · May 17, 15:37

**Background**: AI coding agents like Claude Code often rely on tools like `grep` to search codebases, which involves reading full files and consumes many tokens, the metered units for LLM processing. Model2Vec is a technique to create small, fast static embedding models from larger transformers, while BM25 is a classic information retrieval algorithm that ranks documents based on keyword relevance. Reciprocal Rank Fusion (RRF) is a method to combine rankings from multiple search models into a single, unified result.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/MinishLab/model2vec">GitHub - MinishLab/model2vec: Fast State-of-the-Art Static Embeddings · GitHub</a></li>
<li><a href="https://en.wikipedia.org/wiki/Okapi_BM25">Okapi BM25 - Wikipedia</a></li>
<li><a href="https://www.elastic.co/docs/reference/elasticsearch/rest-apis/reciprocal-rank-fusion">Reciprocal rank fusion | Elasticsearch Reference</a></li>

</ul>
</details>

**Discussion**: The discussion highlights practical concerns, such as whether the AI agent will trust the non-grep search results from Semble, given that models are heavily trained on grep-like patterns, and requests for real-world agent benchmarks replacing grep with Semble. Other points include the inefficiency of agents searching small codebases instead of loading them entirely, and questions about the tool's language support breadth.

**Tags**: `#code-search`, `#AI-agents`, `#token-optimization`, `#open-source-tools`, `#embeddings`

---

<a id="item-2"></a>
## [Mozilla urges UK regulators to recognize VPNs as essential privacy and security tools.](https://blog.mozilla.org/netpolicy/2026/05/15/mozilla-to-uk-regulators-vpns-are-essential-privacy-and-security-tools-and-should-not-be-undermined/) ⭐️ 8.0/10

In response to a UK government consultation on online safety, Mozilla has formally advocated for VPNs (Virtual Private Networks) to be recognized as essential tools for privacy and security, arguing they should not be undermined by age-gating or other restrictions. This intervention highlights a significant policy debate between enhancing online safety for children and preserving digital privacy rights for all users, with potential regulatory implications that could affect the availability and design of security tools in the UK. Mozilla's statement was submitted to a specific UK government consultation titled 'Growing up in the online world,' which contained a question buried deep within the document about implementing age verification for VPNs and similar technologies.

hackernews · WithinReason · May 17, 06:17

**Background**: The UK's Online Safety Act is a major piece of legislation aimed at making the internet safer, particularly for children, by placing new duties on online platforms. Mozilla is a well-known non-profit organization behind the Firefox browser, which also offers a paid VPN service. VPNs are tools that encrypt internet traffic and mask a user's IP address, commonly used to enhance privacy and security on public networks and to bypass geographical restrictions.

**Discussion**: Community discussions noted that the Australian government surprisingly recommends and guides citizens on VPN usage, providing a contrasting international example. Users urged non-UK residents to also respond to the consultation, emphasizing its global relevance, while one user pointedly suggested that Mozilla should disclose its commercial interest as a VPN reseller alongside its advocacy.

**Tags**: `#privacy`, `#vpn`, `#UK regulation`, `#digital rights`, `#Mozilla`

---

<a id="item-3"></a>
## [$80 Android Tablet Repurposed as a Debian Linux Workstation](https://github.com/tech4bot/rk3562deb) ⭐️ 7.0/10

A developer has successfully converted a cheap Android tablet based on the Rockchip RK3562 SoC into a functional Debian Linux workstation, with most hardware components working. The project's full implementation details and guides are shared on GitHub. This project demonstrates the potential for repurposing low-cost, commodity Android hardware into capable Linux machines, which is valuable for education, embedded systems development, and creating affordable workstations. It also provides a practical case study for the Linux community on porting the OS to non-mainstream ARM devices. The core hardware is the Rockchip RK3562 SoC, a mid-range quad-core Cortex-A53 processor. While functional, the tablet's 4 GB of RAM is a notable constraint, making it more suitable for lightweight desktop environments or terminal-based workflows rather than heavy multitasking.

hackernews · tech4bot · May 17, 13:16

**Background**: The Rockchip RK3562 is a system-on-chip (SoC) commonly used in budget tablets and other consumer electronics. Rockchip processors are popular in the embedded Linux community because their documentation and bootloader sources are relatively accessible, making them targets for community-driven porting projects like this one.

<details><summary>References</summary>
<ul>
<li><a href="https://www.aiwedo.com/blog/feature/rockchip-rk3562-soc-feature-specifications/">ROCKCHIP RK3562: High-Performance SOC for Consumer and Industrial Computing Applications - AIWEDO.COM</a></li>
<li><a href="https://opensource.rock-chips.com/wiki_Fastboot">Fastboot - Rockchip open source Document</a></li>

</ul>
</details>

**Discussion**: The community discussion is positive and practical, focusing on real-world usability and extensions. Key points include debates on what software runs well on 4 GB of RAM, questions about the virtual keyboard's suitability for programming tasks, and interest in using AI tools to assist with reverse engineering for such porting projects.

**Tags**: `#Linux`, `#Embedded Systems`, `#ARM`, `#DIY`, `#Reverse Engineering`

---

<a id="item-4"></a>
## [AI May Not Accelerate Software Development Processes](https://frederickvanbrabant.com/blog/2026-05-15-i-dont-think-ai-will-make-your-processes-go-faster/) ⭐️ 7.0/10

A 2026 blog post argues that AI, particularly large language models (LLMs), may not significantly speed up the overall software development lifecycle, citing persistent bottlenecks in requirements engineering as a key reason. This challenges the prevailing narrative that AI tools will universally boost developer productivity, urging teams to critically examine where AI fits within their specific workflows rather than expecting it to solve all process inefficiencies. The article's core argument is that the initial phases of software development, especially translating vague ideas into precise, actionable specifications (requirements engineering), remain time-consuming human-intensive tasks that current AI cannot reliably automate or significantly accelerate.

hackernews · TheEdonian · May 17, 12:13

**Background**: Requirements engineering is a fundamental phase in software development that involves defining, documenting, and maintaining the requirements for a system. Large language models (LLMs) are AI systems trained on vast text data to understand and generate human-like language, commonly used in chatbots and coding assistants. The discussion revolves around whether these AI tools can overcome the inherent difficulty and subjectivity in gathering and refining project requirements.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Large_language_model">Large language model - Wikipedia</a></li>
<li><a href="https://www.ibm.com/think/topics/large-language-models">What Are Large Language Models (LLMs)? | IBM</a></li>
<li><a href="https://en.wikipedia.org/wiki/Requirements_engineering">Requirements engineering - Wikipedia</a></li>

</ul>
</details>

**Discussion**: The community largely agrees that vague requirements are a fundamental bottleneck, with some users sharing experiences of receiving poorly defined tasks. However, others argue the article underestimates AI's impact beyond coding, noting its potential to aid in ideation, documentation, and deployment phases.

**Tags**: `#AI`, `#software engineering`, `#productivity`, `#LLMs`, `#requirements engineering`

---

<a id="item-5"></a>
## [Choosing native APIs for text rendering, until it becomes complex](https://justsitandgrin.im/posts/native-all-the-way-until-you-need-text/) ⭐️ 7.0/10

A technical blog post sparked a detailed community discussion (with 265 comments) comparing the complexities and trade-offs of using native platform APIs versus embedded web views (like WebKit) specifically for text rendering in software. This debate highlights a critical decision point for developers building apps with rich text, where the choice between native and web technologies significantly impacts performance, development complexity, and access to features. Proponents of native APIs, like TextKit 2 on iOS, cite superior performance with benchmarks showing sub-8ms restyling per keystroke, while advocates for web views argue that modern browser engines (e.g., WebKit) are mature, GPU-accelerated, and can be a native OS component itself on macOS.

hackernews · dive · May 17, 11:49

**Background**: In native software development, 'native APIs' refer to platform-specific frameworks (like TextKit for Apple, DirectWrite for Windows) provided by the operating system for low-level control and performance. A 'web view' is a component that embeds a web browser engine (such as WebKit, Blink, or Gecko) to render HTML/CSS/JavaScript within a native app. Text rendering, especially for complex scripts or rich formatting, involves sophisticated processes like text shaping (handled by engines like HarfBuzz) and layout, where developers must choose their underlying technology.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/HarfBuzz">HarfBuzz - Wikipedia</a></li>
<li><a href="https://daringfireball.net/2025/04/webkit_textwrap_pretty">Daring Fireball: WebKit Adds Support for ‘text-wrap: pretty’, Now Shipping in Safari Technology Preview</a></li>

</ul>
</details>

**Discussion**: The discussion featured strong, opposing viewpoints: some developers shared successful high-performance native implementations, while others questioned the premise, arguing modern web engines are now performant enough and that the complexity of advanced native APIs (like SwiftUI) can outweigh their benefits.

**Tags**: `#native development`, `#text rendering`, `#performance optimization`, `#web technologies`, `#software engineering`

---

<a id="item-6"></a>
## [GDS Advocates 'Keep Open by Default' in Response to NHS's Open Source Retreat](https://simonwillison.net/2026/May/17/gds-weighs-in/#atom-everything) ⭐️ 7.0/10

The UK Government Digital Service (GDS) published guidance on May 14th, 2026, explicitly recommending that public sector bodies should 'keep open by default' and only use closure sparingly, in direct response to the NHS's decision to make its repositories private. This represents a significant public policy statement from a central government digital agency, potentially setting a precedent and influencing the tech strategy of other public sector bodies in the UK regarding open source and security. While the GDS guidance does not mention the NHS by name, observers interpret it as a major escalation and a public rebuke of the NHS's decision, which was made in response to vulnerabilities discovered through Project Glasswing.

rss · Simon Willison · May 17, 15:59

**Background**: The UK Government Digital Service (GDS) is the government's central digital and technology office. The NHS recently decided to make its open source code repositories private after security vulnerabilities were reported via Project Glasswing, an industry-wide cybersecurity initiative. This move sparked debate about balancing open source collaboration with security.

<details><summary>References</summary>
<ul>
<li><a href="https://www.anthropic.com/glasswing">Project Glasswing: Securing critical software for the AI era</a></li>

</ul>
</details>

**Tags**: `#open source`, `#government policy`, `#NHS`, `#vulnerability management`, `#public sector`

---

<a id="item-7"></a>
## [OpenClaw Developer's AI Automation Test Costs $1.3M in One Month](https://www.tomshardware.com/tech-industry/artificial-intelligence/openclaw-creator-burns-through-1-3-million-in-openai-api-tokens-in-a-single-month) ⭐️ 7.0/10

Peter Steinberger, the developer of OpenClaw, revealed his team spent $1.3 million on OpenAI API tokens over 30 days for stress-testing autonomous AI agents, involving 603 billion tokens and 7.6 million requests. This incident highlights the extreme operational costs and scalability challenges of building large-scale, autonomous AI systems using commercial APIs, providing a concrete data point for AI economics and infrastructure planning. The high cost was significantly driven by the use of Codex's 'fast mode' billing, and the model used was listed as GPT-5.5 (April 23, 2026 version). With fast mode disabled, the raw API cost would have been approximately $300,000.

telegram · zaihuapd · May 17, 13:38

**Background**: OpenClaw is an open-source autonomous AI agent designed to execute tasks via large language models through messaging platforms. GPT-5.5 is a subsequent model from OpenAI, noted for improved capabilities in complex tasks like coding. Codex is OpenAI's coding-focused tool, and its 'fast mode' offers quicker response times at a higher credit consumption rate.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/OpenClaw">OpenClaw - Wikipedia</a></li>
<li><a href="https://developers.openai.com/codex/pricing">Pricing – Codex | OpenAI Developers</a></li>
<li><a href="https://openai.com/index/introducing-gpt-5-5/">Introducing GPT - 5 . 5 | OpenAI</a></li>

</ul>
</details>

**Tags**: `#AI costs`, `#OpenAI API`, `#AI automation`, `#Codex`, `#GPT-5.5`

---

<a id="item-8"></a>
## [EU DMA Boosts Firefox Users by Over 6 Million in Europe](http://news.zol.com.cn/1182/11821187.html) ⭐️ 7.0/10

Following the EU's Digital Markets Act implementation, which mandates browser choice screens on mobile devices, Firefox gained over 6 million users in Europe, with an average of one new default setting every 10 seconds. Third-party analysis shows daily active users on iOS increased by 113% and on Android by 12% compared to pre-policy forecasts. This demonstrates the tangible impact of regulatory intervention on market competition, challenging the default dominance of browsers like Safari and Chrome and potentially inspiring similar regulations globally. Mozilla's advocacy to extend these rules to personal computers indicates broader implications for digital market fairness. The user growth was particularly pronounced on iOS devices, with a 113% increase in daily active users, while Android saw a more modest 12% rise, based on third-party analysis. Mozilla has called for the DMA's browser choice obligations to be extended to desktop operating systems like Windows and macOS.

telegram · zaihuapd · May 18, 02:32

**Background**: The EU Digital Markets Act (DMA) is a regulation aimed at making digital markets fairer and more contestable by imposing rules on large 'gatekeeper' companies. It requires platforms like Apple and Google to offer users a choice of default browsers on mobile devices, rather than imposing their own browsers. The DMA entered into force in November 2022 and became applicable in May 2023, targeting services like app stores and browsers.

<details><summary>References</summary>
<ul>
<li><a href="https://blog.mozilla.org/netpolicy/2026/05/11/six-million-selections-later-how-the-dma-is-giving-people-browser-choice/">Six Million Selections Later: How the DMA Is Giving People Browser ...</a></li>
<li><a href="https://digital-markets-act.ec.europa.eu/index_en">Digital Markets Act</a></li>

</ul>
</details>

**Tags**: `#EU DMA`, `#Firefox`, `#browser competition`, `#tech regulation`, `#user growth`

---