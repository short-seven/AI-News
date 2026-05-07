---
layout: default
title: "Horizon Summary: 2026-05-07 (EN)"
date: 2026-05-07
lang: en
---

> From 29 items, 16 important content pieces were selected

---

1. [SQLite Endorsed by Library of Congress for Long-Term Data Preservation](#item-1) ⭐️ 8.0/10
2. [EU Proposes Mandatory Removal of Huawei, ZTE Equipment from Telecom Networks](#item-2) ⭐️ 8.0/10
3. [NVIDIA, OpenAI, Microsoft Release Open-Source MRC Protocol for AI Clusters](#item-3) ⭐️ 8.0/10
4. [Apple's R&D Spending Surpasses 10% of Revenue, Focusing on AI to Reshape Hardware](#item-4) ⭐️ 8.0/10
5. [Anthropic partners with SpaceX for compute, doubles Claude Code limits](#item-5) ⭐️ 8.0/10
6. [Xiaomi Open-Sources OmniVoice: A Minimalist TTS Model for 646 Languages](#item-6) ⭐️ 8.0/10
7. [Valve releases Steam Controller CAD files under Creative Commons license](#item-7) ⭐️ 7.0/10
8. [The Illusion of Productivity in Modern Workplaces](#item-8) ⭐️ 7.0/10
9. [AI Coding Practices Blur: Vibe Coding Meets Agentic Engineering](#item-9) ⭐️ 7.0/10
10. [Google Cloud Launches Fraud Defense as Next-Gen reCAPTCHA](#item-10) ⭐️ 7.0/10
11. [Developer Migrates from Supabase & Clerk to Better Auth, Citing Time Savings](#item-11) ⭐️ 7.0/10
12. [Hallucinopedia: A Website Showcasing AI Hallucinations](#item-12) ⭐️ 7.0/10
13. [Anthropic hosts 'Code w/ Claude 2026' developer event, live-blogged by Simon Willison](#item-13) ⭐️ 7.0/10
14. [Google Chrome Accused of Silently Downloading 4GB AI Model](#item-14) ⭐️ 7.0/10
15. [Apple's Display Supply Chain: BOE Gets iPhone 17 Pro Order, Samsung Exclusive for Foldable OLED](#item-15) ⭐️ 7.0/10
16. [Tencent's Hy3 Preview Model Sees 10x More Usage Than Hy2 in Two Weeks, Tops OpenRouter Charts](#item-16) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [SQLite Endorsed by Library of Congress for Long-Term Data Preservation](https://sqlite.org/locrsf.html) ⭐️ 8.0/10

The Library of Congress has officially added SQLite to its Recommended Formats Statement (RFS) as a recommended storage format for digital preservation. This endorsement underscores SQLite's reliability and long-term viability, making it a trusted standard for preserving critical data and influencing digital archiving practices. The Library of Congress updates its RFS annually to identify formats that maximize preservation and accessibility, and SQLite's inclusion is based on its proven robustness and suitability for embedded databases.

hackernews · whatisabcdefgh · May 6, 21:58

**Background**: The Library of Congress Recommended Formats Statement (RFS) is a guide that identifies analog and digital formats suitable for long-term preservation of creative content, aiming to ensure accessibility into the future. SQLite is a lightweight, serverless database engine known for its portability, reliability, and use in applications where embedded databases are needed, such as mobile apps and desktop software.

<details><summary>References</summary>
<ul>
<li><a href="https://www.loc.gov/preservation/resources/rfs/index.html">Recommended Formats Statement - Library of Congress</a></li>
<li><a href="https://thecodersblog.com/sqlite-as-recommended-storage-format-2026/">SQLite: Library of Congress Recommended for Digital Preservation</a></li>

</ul>
</details>

**Discussion**: The community discussion shows a mix of admiration for SQLite's reliability and ease of use, with users sharing positive experiences in applications, while also raising concerns about its potential misuse in enterprise settings for handling sensitive data like PII, and noting the news's age.

**Tags**: `#SQLite`, `#data storage`, `#Library of Congress`, `#databases`, `#software engineering`

---

<a id="item-2"></a>
## [EU Proposes Mandatory Removal of Huawei, ZTE Equipment from Telecom Networks](https://t.me/zaihuapd/41247) ⭐️ 8.0/10

The European Commission is considering new regulations that would make it mandatory for all EU member states to completely phase out equipment from Huawei and ZTE in their telecom and broadband infrastructure, upgrading its previous non-binding 2020 recommendation into a legally enforceable rule. This move would significantly impact global telecom infrastructure, potentially accelerating the technological decoupling between the EU and China, and could set a precedent for other regions, while imposing substantial costs and operational challenges on member states and affecting the market position of the named Chinese companies. Under the proposed rules, member states that fail to remove the equipment by a set deadline would face infringement investigations and financial penalties; additionally, the EU plans to tighten its external infrastructure funding pool by stopping project loans to non-EU countries that use Huawei equipment.

telegram · zaihuapd · May 6, 14:00

**Background**: In 2020, the EU issued a non-binding 'toolbox' of recommendations urging member states to restrict 'high-risk vendors' like Huawei and ZTE in 5G networks due to security concerns. The assessment of such vendors typically considers factors like a supplier's country of origin, its legal and governance framework, and potential for state interference. Securing the telecom supply chain is a growing global priority, as vulnerabilities can be exploited for espionage or disruption.

<details><summary>References</summary>
<ul>
<li><a href="https://www.thefinance360.com/eu-plans-to-phase-out-of-high-risk-tech-suppliers-in-critical-sectors-under-revised-cybersecurity-act/">EU Plans To Phase-Out of High - Risk Tech Suppliers In Critical...</a></li>
<li><a href="https://www.cisa.gov/topics/information-communications-technology-supply-chain-security">Information and Communications Technology Supply Chain Security | Cybersecurity and Infrastructure Security Agency CISA</a></li>

</ul>
</details>

**Tags**: `#telecommunications`, `#cybersecurity`, `#EU policy`, `#Huawei`, `#regulation`

---

<a id="item-3"></a>
## [NVIDIA, OpenAI, Microsoft Release Open-Source MRC Protocol for AI Clusters](https://blogs.nvidia.com/blog/spectrum-x-ethernet-mrc/) ⭐️ 8.0/10

NVIDIA, OpenAI, and Microsoft jointly released and open-sourced the Multipath Reliable Connection (MRC) protocol, a new RDMA transport protocol that uses packet spraying to enable concurrent data transmission across multiple network paths and features microsecond-level failure rerouting. This protocol directly addresses critical network congestion and GPU idle time issues in large-scale AI training clusters, potentially increasing throughput and stability for next-generation AI infrastructure like the Stargate project. The MRC protocol is already deployed on NVIDIA's Spectrum-X platform and Blackwell architecture, supporting clusters such as Microsoft's Fairwater and Oracle's OCI Abilene for training models like GPT-5.5. It is released as an Open Compute Project (OCP) specification to reduce industry fragmentation.

telegram · zaihuapd · May 6, 14:39

**Background**: Remote Direct Memory Access (RDMA) is a technology that allows computers in a network to exchange data directly from memory without involving the operating system, which is crucial for high-performance computing. In massive AI training clusters with tens of thousands of GPUs, traditional single-path networking can become a bottleneck, causing congestion and idle time. Packet spraying is a load-balancing technique that distributes data packets across multiple available network paths to better utilize total bandwidth.

<details><summary>References</summary>
<ul>
<li><a href="https://news.google.com/stories/CAAqNggKIjBDQklTSGpvSmMzUnZjbmt0TXpZd1NoRUtEd2lOaEpHS0VSRTJ6Q0tCTlRzd3J5Z0FQAQ?hl=en-NG&gl=NG&ceid=NG:en">Google News - OpenAI and partners unveil MRC protocol for AI...</a></li>
<li><a href="https://axbrief.com/blog/openai-bcrce">OpenAI's MRC Protocol : The Architecture Linking 131,000... - AX BRIEF</a></li>
<li><a href="https://en.wikipedia.org/wiki/Remote_direct_memory_access">Remote direct memory access - Wikipedia</a></li>

</ul>
</details>

**Tags**: `#AI infrastructure`, `#networking`, `#RDMA`, `#supercomputing`, `#open-source`

---

<a id="item-4"></a>
## [Apple's R&D Spending Surpasses 10% of Revenue, Focusing on AI to Reshape Hardware](https://www.cnbc.com/2026/05/06/apples-rd-spending-climbs-to-10percent-of-revenue-on-ai-investments.html) ⭐️ 8.0/10

Apple's R&D spending as a percentage of revenue reached 10.3% in its March 2026 quarter, the first time it has surpassed 10% in 30 years, with R&D spending growth (34%) significantly outpacing revenue growth (17%). This substantial increase signals a major strategic pivot for Apple, positioning the company for a platform-reshaping era centered on artificial intelligence, which could significantly influence the future integration of AI across consumer hardware and the broader tech ecosystem. Apple's current AI investments are focused on on-device AI, custom silicon design, and private cloud computing, with reported projects including an upgraded Siri, a foldable iPhone, AI-powered glasses, and AirPods with cameras.

telegram · zaihuapd · May 7, 01:00

**Background**: On-device AI refers to running artificial intelligence models directly on a user's device (like a smartphone) rather than in the cloud, which enhances privacy and reduces latency. Apple has a long history of designing its own custom silicon chips (Apple Silicon) for its devices, a strategy that gives it tight control over hardware and software integration. Private cloud computing for AI involves using dedicated, secure cloud infrastructure to handle AI workloads, balancing the need for powerful processing with data privacy concerns.

<details><summary>References</summary>
<ul>
<li><a href="https://medium.com/@sahin.samia/on-device-ai-what-it-is-and-how-it-works-89721ee68792">On Device AI: What It Is and How It Works? | by Sahin Ahmed(Data Scientist/MLE) | Medium</a></li>
<li><a href="https://en.wikipedia.org/wiki/Apple_silicon">Apple silicon - Wikipedia</a></li>
<li><a href="https://www.fierce-network.com/cloud/genai-driving-private-cloud-demand-could-stall-public-cloud-growth">GenAI is driving private cloud demand that could stall public cloud ...</a></li>

</ul>
</details>

**Tags**: `#Apple`, `#AI`, `#R&D`, `#hardware`, `#business strategy`

---

<a id="item-5"></a>
## [Anthropic partners with SpaceX for compute, doubles Claude Code limits](https://t.me/zaihuapd/41259) ⭐️ 8.0/10

Anthropic has partnered with SpaceX to utilize the full compute capacity of its Colossus 1 data center, gaining over 300 megawatts of new capacity with more than 220,000 NVIDIA GPUs within a month. Consequently, Claude Code's 5-hour rate limits for all paid plans have been doubled, peak-hour restrictions for Pro/Max users have been removed, and Claude Opus API rate limits have been significantly increased. This partnership provides Anthropic with a massive, immediate boost in computing resources to meet growing demand for its AI services, directly enhancing the user experience for developers and API consumers. It highlights the intense competition for AI infrastructure and the strategic alliances forming between leading AI labs and companies with large-scale data center assets. The deal grants Anthropic access to the entire capacity of the Colossus 1 facility, which is associated with SpaceX and xAI, involving over 300MW of power and a fleet of over 220,000 NVIDIA GPUs. The immediate user-facing impact includes doubled usage limits for Claude Code and the removal of peak-hour restrictions for its higher-tier subscribers.

telegram · zaihuapd · May 7, 08:19

**Background**: Claude Code is an AI-powered coding assistant developed by Anthropic that operates as a terminal-based agent or a VS Code extension, helping developers with code generation, editing, and understanding. The Colossus 1 data center is a large-scale AI compute facility associated with Elon Musk's ventures, SpaceX and xAI, designed to house massive clusters of GPUs for training and running AI models.

<details><summary>References</summary>
<ul>
<li><a href="https://www.datacenterdynamics.com/en/news/anthropic-to-use-all-of-spacex-xais-colossus-1-data-center-compute/">Anthropic to use all of SpaceX -xAI's Colossus 1 data center compute</a></li>
<li><a href="https://www.aol.com/articles/anthropic-rent-ai-capacity-spacexs-180327894.html">Anthropic to rent all AI capacity at SpaceX 's Colossus data center</a></li>
<li><a href="https://claude.com/product/claude-code">Claude Code by Anthropic | AI Coding Agent, Terminal, IDE</a></li>

</ul>
</details>

**Tags**: `#AI infrastructure`, `#Anthropic`, `#SpaceX`, `#computing partnership`, `#API limits`

---

<a id="item-6"></a>
## [Xiaomi Open-Sources OmniVoice: A Minimalist TTS Model for 646 Languages](https://mp.weixin.qq.com/s/TCS_Sd10g_rvf1cszw673A) ⭐️ 8.0/10

Xiaomi has open-sourced OmniVoice, a text-to-speech model that uses a minimalist bidirectional Transformer architecture to perform zero-shot voice cloning across 646 languages. The model claims superior training speed (100,000 hours per day) and inference efficiency (40x real-time on PyTorch) while outperforming commercial systems in quality tests. This open-source release provides a highly efficient and scalable solution for multilingual speech synthesis, significantly lowering the barrier for research and application in low-resource languages. Its performance claims, if validated, could challenge existing commercial TTS systems and advance the state-of-the-art in omnilingual AI. The model's efficiency stems from two key innovations: a full-codebook random masking strategy for training and initialization from a pre-trained large language model (LLM) to ensure intelligibility. It was trained on a massive 580,000-hour dataset spanning 646 languages, and its code, training scripts, and model weights are all publicly available.

telegram · zaihuapd · May 7, 10:06

**Background**: Text-to-Speech (TTS) technology converts written text into audible speech. Multilingual and zero-shot TTS, which can clone a voice from a short sample to speak new languages, is a major research challenge due to data scarcity and model complexity. Traditional autoregressive models generate speech sequentially, while bidirectional models like OmniVoice can process the entire sequence at once, potentially improving speed and coherence.

<details><summary>References</summary>
<ul>
<li><a href="https://www.alphaxiv.org/audio/2604.00688v3">OmniVoice: Towards Omnilingual Zero-Shot Text-to-Speech with ...</a></li>
<li><a href="https://en.wikipedia.org/wiki/BERT_(language_model)">BERT (language model) - Wikipedia</a></li>
<li><a href="https://www.emergentmind.com/topics/llm-initialization-for-nar-speech-generation">LLM Initialization for NAR Speech Generation</a></li>

</ul>
</details>

**Tags**: `#TTS`, `#speech-synthesis`, `#open-source`, `#multilingual`, `#AI`

---

<a id="item-7"></a>
## [Valve releases Steam Controller CAD files under Creative Commons license](https://www.digitalfoundry.net/news/2026/05/valve-releases-steam-controller-cad-files-under-creative-commons-license) ⭐️ 7.0/10

Valve has publicly released the CAD files for the external shell of the Steam Controller and its Puck under a Creative Commons license, providing STP and STL models along with engineering drawings. This move is significant for the open hardware and accessibility communities, as it empowers users and makers to create custom modifications, 3D-print replacement parts, and design adaptive controllers for players with disabilities. The released files include the surface topology models (STP and STL formats) and engineering drawings that specify critical features and keep-out zones for both the controller and the puck.

hackernews · haunter · May 6, 15:44

**Background**: CAD (Computer-Aided Design) files are digital blueprints used to define the geometry of physical objects for manufacturing or 3D printing. A Creative Commons license is a type of public copyright license that enables the free distribution of an otherwise copyrighted work, often requiring attribution to the original creator. The open-source hardware movement encourages sharing hardware designs to foster innovation and accessibility.

<details><summary>References</summary>
<ul>
<li><a href="https://ospo.library.jhu.edu/learn-grow/licensing-overview/open-source-hardware/">Open Source Hardware – Open Source Programs Office</a></li>
<li><a href="https://michaelweinberg.org/blog/2025/10/05/leading-licenses/">The Most Popular Open Source Hardware Licenses (2016-2025)</a></li>
<li><a href="https://en.wikipedia.org/wiki/List_of_open-source_hardware_projects">List of open - source hardware projects - Wikipedia</a></li>

</ul>
</details>

**Discussion**: The community response is largely positive, with many users highlighting the major benefit for disabled gamers who can now affordably 3D print custom, adaptive controller shells. However, some discussion points out concerns about the controller's software dependency on Steam, viewing it as a step towards a walled garden ecosystem.

**Tags**: `#open-source hardware`, `#3D printing`, `#accessibility`, `#gaming`

---

<a id="item-8"></a>
## [The Illusion of Productivity in Modern Workplaces](https://nooneshappy.com/article/appearing-productive-in-the-workplace/) ⭐️ 7.0/10

The article critiques how modern workplace practices have led to unnecessarily elongated artifacts and superficial productivity, with AI tools like LLMs automating aspects of management. This is significant because it exposes inefficiencies in tech workplaces that can waste resources and distort job markets, as AI changes how productivity is perceived and measured. Key details include the use of LLMs to automate management tasks like documentation, which can lead to over-engineering and superficial work, as highlighted in community comments about elongated artifacts.

hackernews · diebillionaires · May 6, 16:18

**Background**: Large Language Models (LLMs) are AI systems trained on vast text data to generate and understand language, commonly used in automation tasks. In workplaces, productivity is often measured by output volume rather than quality, leading to elongated documents and superficial efficiency.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Large_language_model">Large language model - Wikipedia</a></li>
<li><a href="https://www.ibm.com/think/topics/large-language-models">What Are Large Language Models (LLMs)? | IBM</a></li>
<li><a href="https://aws.amazon.com/what-is/large-language-model/">What is LLM? - Large Language Models Explained - AWS</a></li>

</ul>
</details>

**Discussion**: Community discussion shows strong agreement with the article's critique, with users sharing personal experiences of elongated workplace artifacts and debating the impact of AI on tech job markets and engineering culture.

**Tags**: `#workplace productivity`, `#AI impact`, `#software engineering`, `#job market`, `#tech culture`

---

<a id="item-9"></a>
## [AI Coding Practices Blur: Vibe Coding Meets Agentic Engineering](https://simonwillison.net/2026/May/6/vibe-coding-and-agentic-engineering/#atom-everything) ⭐️ 7.0/10

In a podcast discussion, respected developer Simon Willison shared his personal realization that the practices of 'vibe coding' and 'agentic engineering' have started to converge in his own work, a development he finds 'quite upsetting'. This convergence challenges the previously held distinction between casual, unchecked AI code generation and professional, supervised AI-assisted engineering, raising important questions about software quality, responsibility, and the evolving role of the developer. Willison, a veteran engineer, notes that as AI coding agents become more reliable, he finds himself reviewing less generated code even for production systems, which creates a sense of guilt about professional responsibility.

rss · Simon Willison · May 6, 14:24

**Background**: Vibe coding is a practice where a developer describes a task in natural language to an AI, which generates the code, often without the developer deeply reviewing or understanding the output. Agentic engineering, in contrast, is a more disciplined approach where a professional engineer uses AI agents as tools under strict oversight to build high-quality, production-ready systems.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Vibe_coding">Vibe coding - Wikipedia</a></li>
<li><a href="https://www.ibm.com/think/topics/agentic-engineering">What is agentic engineering? - IBM</a></li>
<li><a href="https://www.glideapps.com/blog/what-is-agentic-engineering">What is agentic engineering? How AI engineering has evolved ...</a></li>

</ul>
</details>

**Discussion**: Community comments reflect diverse views: some argue that vibe coding merely exposes pre-existing lax engineering standards, while others question the reliability of AI-generated code, noting that errors can be subtle and hard to detect. A viewpoint also suggests that vibe coding has valid use cases for personal, low-stakes projects.

**Tags**: `#AI coding`, `#vibe coding`, `#agentic engineering`, `#software engineering`, `#developer tools`

---

<a id="item-10"></a>
## [Google Cloud Launches Fraud Defense as Next-Gen reCAPTCHA](https://cloud.google.com/blog/products/identity-security/introducing-google-cloud-fraud-defense-the-next-evolution-of-recaptcha/) ⭐️ 7.0/10

Google Cloud has introduced Fraud Defense, positioning it as the next evolution of its reCAPTCHA service, with a new focus on detecting account takeover and payment fraud through advanced risk scoring and device attestation. This marks a significant shift from traditional CAPTCHA puzzles towards a more complex, device-centric fraud detection model, which could fundamentally change how websites verify users and impact web accessibility and privacy norms. The service requires users to have a modern Android device with Google Play Services or an iOS device for verification, and it claims to be 400% more effective at detecting account takeover attempts than standard bot scores.

hackernews · unforgivenpasta · May 6, 17:59

**Background**: reCAPTCHA is a widely used service from Google that helps protect websites from spam and abuse by distinguishing human users from bots. reCAPTCHA Enterprise is its commercial, more advanced version. Device attestation is a security process where a device cryptographically proves its authenticity and integrity to a service.

<details><summary>References</summary>
<ul>
<li><a href="https://cloud.google.com/security/products/fraud-defense">Fraud Defense | Google Cloud</a></li>
<li><a href="https://cloud.google.com/security/products/recaptcha">reCAPTCHA website security and fraud protection | Google Cloud</a></li>

</ul>
</details>

**Discussion**: Community discussion is highly critical, with major concerns that the device requirements will lock out users without specific smartphones, create a de-facto mandate for Google or Apple devices, and raise serious privacy issues by potentially using device identifiers for de-anonymization. Many also question the security of using QR codes for authentication and see anti-competitive implications.

**Tags**: `#reCAPTCHA`, `#fraud detection`, `#web security`, `#privacy`, `#Google Cloud`

---

<a id="item-11"></a>
## [Developer Migrates from Supabase & Clerk to Better Auth, Citing Time Savings](https://blog.val.town/better-auth) ⭐️ 7.0/10

A developer shared their experience migrating their authentication system from Supabase and Clerk to a newer tool called Better Auth, which they found to be a significant time saver for their projects. This migration highlights ongoing developer concerns about the cost and vendor lock-in of established authentication providers, and introduces Better Auth as a compelling, open-source alternative that could influence how developers approach auth infrastructure. Better Auth is a framework-agnostic authentication and authorization framework for TypeScript that offers a comprehensive feature set and a plugin ecosystem, aiming to simplify adding advanced functionalities.

hackernews · stevekrouse · May 6, 17:19

**Background**: Supabase and Clerk are popular third-party authentication service providers that handle user management, sessions, and security for web applications. Supabase integrates auth with its database, while Clerk offers hosted UI components and session lifecycle management. Better Auth positions itself as an open-source, self-hostable framework that gives developers more control over their auth stack.

<details><summary>References</summary>
<ul>
<li><a href="https://supabase.com/docs/guides/auth">Use Supabase to Authenticate and Authorize your users.</a></li>
<li><a href="https://clerk.com/user-authentication">User Authentication</a></li>
<li><a href="https://github.com/better-auth/better-auth">GitHub - better-auth/better-auth: The most comprehensive authentication framework · GitHub</a></li>

</ul>
</details>

**Discussion**: The community discussion is highly engaged, with users praising Better Auth for cost savings on side projects and debating the merits of self-hosting auth versus using third-party services. A key point of contention is the complexity of building auth from scratch, with some arguing it's manageable and others highlighting the risks. The founder of Better Auth also participated, expressing joy at the tool's positive impact and openness to feedback.

**Tags**: `#authentication`, `#web-development`, `#software-engineering`, `#developer-tools`

---

<a id="item-12"></a>
## [Hallucinopedia: A Website Showcasing AI Hallucinations](http://halupedia.com/) ⭐️ 7.0/10

A new web application called Hallucinopedia has been launched, which uses AI to generate fake, Wikipedia-style articles on demand based on any user-provided URL slug, vividly demonstrating the phenomenon of AI hallucinations. This project serves as a creative and accessible public demonstration of a major limitation in large language models, helping to educate users about the risks of trusting AI-generated information without verification. The website allows users to generate a new hallucinated article by simply navigating to any arbitrary URL path, and the content is regenerated fresh each time, though this open design has already led to instances of the site being defaced with hateful content.

hackernews · bstrama · May 6, 16:37

**Background**: Hallucination in large language models refers to the tendency of AI systems to generate text that is fluent and plausible but factually incorrect, logically inconsistent, or entirely fabricated. This is a well-documented challenge in AI research, as models generate responses based on statistical patterns in training data rather than verified knowledge. Projects like Hallucinopedia make this abstract technical problem tangible for a general audience.

<details><summary>References</summary>
<ul>
<li><a href="https://arxiv.org/abs/2311.05232">A Survey on Hallucination in Large Language Models ...</a></li>
<li><a href="https://ideaverse.ai/blog/hallucinopedia-a-fake-encyclopedia-that-materializes-new-pages-moumyws6">Hallucinopedia: A Fake Encyclopedia That Materializes New ...</a></li>
<li><a href="https://news.ycombinator.com/item?id=48038257">Show HN: Hallucinopedia | Hacker News</a></li>

</ul>
</details>

**Discussion**: The Hacker News discussion highlights a mix of fascination and concern; users found the project fantastic for demonstrating AI quirks, but many were alarmed by the ease with which the site was defaced with hateful and antisemitic content, raising ethical questions about such open-ended AI demonstrations.

**Tags**: `#AI`, `#LLMs`, `#hallucinations`, `#web-app`, `#hacker-news`

---

<a id="item-13"></a>
## [Anthropic hosts 'Code w/ Claude 2026' developer event, live-blogged by Simon Willison](https://simonwillison.net/2026/May/6/code-w-claude-2026/#atom-everything) ⭐️ 7.0/10

Anthropic held its 'Code w/ Claude 2026' event, where the morning keynote sessions were live-blogged by developer Simon Willison, focusing on the company's AI-powered coding tool, Claude Code. This event signals Anthropic's dedicated push into the AI-assisted software development market, showcasing how their Claude models are being integrated into practical developer workflows to potentially transform coding productivity. The event is centered on Claude Code, Anthropic's agentic coding tool that operates in the terminal, understands codebases, and can execute tasks, edit files, and manage git workflows via natural language commands.

rss · Simon Willison · May 6, 15:58

**Background**: Claude Code is an AI-powered coding assistant from Anthropic designed to act as an 'agentic' tool for developers. Unlike simple code completion, it can understand a project's context, perform multi-step engineering tasks, and interact with the development environment directly. The 'Code w/ Claude' event is a dedicated conference for developers to learn about and build with these AI coding capabilities.

<details><summary>References</summary>
<ul>
<li><a href="https://claude.com/product/claude-code">Claude Code by Anthropic | AI Coding Agent, Terminal, IDE</a></li>
<li><a href="https://github.com/anthropics/claude-code/releases">Releases · anthropics/ claude - code</a></li>
<li><a href="https://www.youtube.com/watch?v=AJpK3YTTKZ4">Introducing Claude Code - YouTube</a></li>

</ul>
</details>

**Tags**: `#ai`, `#generative-ai`, `#anthropic`, `#claude-code`, `#live-blogging`

---

<a id="item-14"></a>
## [Google Chrome Accused of Silently Downloading 4GB AI Model](https://www.tomshardware.com/tech-industry/cyber-security/google-chrome-silently-downloads-4gb-ai-model-to-your-device-without-permission-report-claims-researcher-says-practice-may-violate-eu-law-waste-thousands-of-kilowatts-of-energy) ⭐️ 7.0/10

Google Chrome has been accused of silently downloading a 4GB Gemini Nano AI model file to eligible devices without user consent, with the browser automatically re-downloading it even if manually deleted. This practice raises significant concerns about user privacy, potential violations of GDPR, and the environmental impact of large-scale data distribution. Researcher Alexander Hanff estimates that distributing the model to 1 billion users could generate approximately 60,000 tons of carbon emissions, and the 4GB download imposes financial costs on users with metered internet.

telegram · zaihuapd · May 6, 11:15

**Background**: Gemini Nano is a smaller AI model from Google designed for on-device tasks, enabling generative AI experiences without cloud connectivity. Silent downloading refers to a browser automatically downloading files in the background without explicit user approval.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Gemini_(language_model)">Gemini (language model) - Wikipedia</a></li>
<li><a href="https://developer.android.com/ai/gemini-nano">Gemini Nano | AI | Android Developers</a></li>
<li><a href="https://www.linkedin.com/pulse/chrome-just-put-4-gb-ai-model-your-device-without-asking-james-w-ymcxc/">Chrome Just Put a 4 GB AI Model on Your Device ... - LinkedIn</a></li>

</ul>
</details>

**Tags**: `#privacy`, `#AI deployment`, `#Google Chrome`, `#GDPR`, `#environmental impact`

---

<a id="item-15"></a>
## [Apple's Display Supply Chain: BOE Gets iPhone 17 Pro Order, Samsung Exclusive for Foldable OLED](https://t.me/zaihuapd/41254) ⭐️ 7.0/10

Apple has approved BOE to mass-produce OLED screens for the iPhone 17 Pro, initially for the Chinese market only, marking BOE's entry into the high-end iPhone supply chain. Separately, Samsung Display has initiated a dedicated production line for Apple's foldable OLED panels, with a monthly capacity of 35,000 sixth-generation glass substrates. These developments significantly alter the competitive landscape for smartphone displays, with BOE breaking Samsung and LG's dominance in Apple's premium models and Samsung securing a key role in Apple's anticipated entry into the foldable phone market. This could influence pricing, innovation, and supply chain resilience across the entire smartphone industry. BOE's qualification for iPhone 17 Pro display module production is expected to be approved by July 2025. Samsung's foldable OLED line is designed to produce approximately 15 million 7-inch panels annually, aligning with Apple's rumored 2026 launch of an inward-folding iPhone with a first-year target of 60 million units.

telegram · zaihuapd · May 7, 02:33

**Background**: OLED (Organic Light-Emitting Diode) is a display technology where each pixel emits its own light, enabling thinner, more flexible screens with better contrast. A sixth-generation (G6) glass substrate is a large-format sheet used in display manufacturing that can be efficiently cut into multiple panels for devices like smartphones and tablets. An inward-folding design, as opposed to an outward-folding one, protects the main display by folding the screen inward like a book.

<details><summary>References</summary>
<ul>
<li><a href="https://global.samsungdisplay.com/31384?type=main">Samsung Display’s Foldable OLED Panel Proves Exceptional ...</a></li>
<li><a href="https://www.tomshardware.com/tech-industry/semiconductors/china-moves-into-semiconductor-glass-substrates-as-packaging-competition-intensifies">China moves into manufacturing disruptive new semiconductor glass substrates as processor packaging competition intensifies | Tom's Hardware</a></li>
<li><a href="https://www.yugatech.com/mobile/tecno-phantom-ultimate-g-fold-worlds-first-inward-folding-tri-fold-announced/">TECNO PHANTOM Ultimate G Fold: world’s first inward - folding ...</a></li>

</ul>
</details>

**Tags**: `#Apple`, `#supply chain`, `#display panels`, `#foldable phones`, `#BOE`

---

<a id="item-16"></a>
## [Tencent's Hy3 Preview Model Sees 10x More Usage Than Hy2 in Two Weeks, Tops OpenRouter Charts](https://finance.sina.com.cn/tech/shenji/2026-05-07/doc-inhwzrtp8521239.shtml) ⭐️ 7.0/10

Tencent's Hy3 preview model has achieved ten times the total token call volume of its predecessor, Hy2, within just two weeks of its launch. According to OpenRouter's data for the past week, the model ranked first in both the platform's overall weekly chart and market share, and also topped the charts for coding and tool-calling scenarios. The rapid adoption of Hy3 preview, especially in coding and agent-based applications, signals strong market demand for high-performance, cost-effective models tailored for agentic workflows. This success could accelerate the development and deployment of AI agents in production environments and solidify Tencent's position in the competitive AI model landscape. Hy3 preview is a 295-billion-parameter Mixture-of-Experts (MoE) model with 21 billion active parameters, designed for efficiency in agentic and production use cases. The model is currently offered for free on OpenRouter, which likely contributed to the initial surge in usage as developers tested it in real-world scenarios.

telegram · zaihuapd · May 7, 05:34

**Background**: A Mixture-of-Experts (MoE) model is an architecture where only a subset of the model's parameters (the 'experts') is activated for any given input, which improves computational efficiency. OpenRouter is a platform that provides a unified API to access and compare various large language models (LLMs) from different providers. 'Tool calling' or 'function calling' is a key capability for AI agents, allowing them to interact with external software, APIs, and services to perform complex tasks beyond simple text generation.

<details><summary>References</summary>
<ul>
<li><a href="https://huggingface.co/tencent/Hy3-preview">tencent / Hy 3 - preview · Hugging Face</a></li>
<li><a href="https://openrouter.ai/tencent/hy3-preview:free">Hy 3 preview (free) - API Pricing & Providers | OpenRouter</a></li>
<li><a href="https://openrouter.ai/">OpenRouter</a></li>

</ul>
</details>

**Tags**: `#AI`, `#Tencent`, `#OpenRouter`, `#Coding`, `#Agent`

---