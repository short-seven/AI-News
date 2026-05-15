---
layout: default
title: "Horizon Summary: 2026-05-15 (EN)"
date: 2026-05-15
lang: en
---

> From 31 items, 13 important content pieces were selected

---

1. [First public kernel exploit on Apple M5 hardware bypasses MIE with AI help](#item-1) ⭐️ 9.0/10
2. [Bun JavaScript Runtime Fully Rewritten in Rust and Merged](#item-2) ⭐️ 9.0/10
3. [vLLM v0.21.0 introduces breaking changes and performance enhancements](#item-3) ⭐️ 8.0/10
4. [RTX 5090 eGPU Successfully Paired with MacBook Air M4 for Gaming and AI](#item-4) ⭐️ 8.0/10
5. [New Nginx Buffer Overflow Exploit with ASLR Bypass Claims](#item-5) ⭐️ 8.0/10
6. [arXiv imposes 1-year ban for submissions with hallucinated references](#item-6) ⭐️ 8.0/10
7. [MIT President's Message on Academia's Funding and Talent Pipeline Issues](#item-7) ⭐️ 8.0/10
8. [Removing Modem and GPS from 2024 RAV4 for Privacy](#item-8) ⭐️ 7.0/10
9. [Antirez Releases DwarfStar4, a Dedicated Runtime for Local DeepSeek 4 Inference](#item-9) ⭐️ 7.0/10
10. [OpenAI Codex integrated into ChatGPT mobile app for on-the-go coding](#item-10) ⭐️ 7.0/10
11. [US Approves Nvidia H200 Chip Sales to Around 10 Chinese Companies](#item-11) ⭐️ 7.0/10
12. [DeepSeek Dialogue System Vulnerability May Expose Other Users' Data](#item-12) ⭐️ 7.0/10
13. [JD.com Launches Self-Operated AI Hardware Zone with Sanctioned NVIDIA GPUs](#item-13) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [First public kernel exploit on Apple M5 hardware bypasses MIE with AI help](https://blog.calif.io/p/first-public-kernel-memory-corruption) ⭐️ 9.0/10

Security researchers from Calif, in collaboration with the AI system Mythos Preview, developed the first publicly documented kernel memory corruption exploit for macOS on Apple M5 hardware, bypassing Apple's MIE (Memory Integrity Enforcement) hardware protection. This breakthrough demonstrates that Apple's five-year effort to build hardware-enforced memory security (MIE) can be circumvented, highlighting that AI-assisted research is rapidly shifting the balance in offensive security. The exploit chain required two vulnerabilities and successfully escalated privileges from a non-privileged user to a root shell using only standard system calls, completely evading MIE and its underlying ARM Memory Tagging Extension (MTE).

hackernews · quadrige · May 14, 18:25

**Background**: Apple's MIE is a hardware-level security feature introduced in Apple Silicon chips to detect and prevent memory corruption attacks by tagging memory allocations. ARM's Memory Tagging Extension (MTE) is a broader architectural feature upon which such protections are built, designed to make memory safety bugs more difficult to exploit. The development of exploit chains for modern, hardware-hardened systems is typically complex and time-consuming.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/ARM_architecture_family">ARM architecture family - Wikipedia</a></li>
<li><a href="https://cloud.google.com/blog/topics/threat-intelligence/ai-vulnerability-exploitation-initial-access">Adversaries Leverage AI for Vulnerability Exploitation, Augmented Operations, and Initial Access | Google Cloud Blog</a></li>
<li><a href="https://cybernews.com/security/attackers-bypassing-arm-memory-corruption-protection/">Attackers can bypass ARM security feature protecting from memory corruption | Cybernews</a></li>

</ul>
</details>

**Discussion**: The community is abuzz with a mix of awe and concern about the implications of AI on security, with some praising the technical achievement and others worrying about the readiness for such advanced attack tools. Several commenters questioned the technical depth of the initial announcement and discussed its potential valuation within Apple's bug bounty program.

**Tags**: `#security`, `#kernel exploit`, `#Apple M5`, `#AI-assisted security`, `#hardware security`

---

<a id="item-2"></a>
## [Bun JavaScript Runtime Fully Rewritten in Rust and Merged](https://github.com/oven-sh/bun/pull/30412) ⭐️ 9.0/10

The Bun JavaScript runtime has been entirely rewritten from Zig to Rust, and this major change has been merged into the main repository. This rewrite represents a significant technical shift for Bun, potentially improving memory safety and performance due to Rust's features, and it highlights a growing trend of using Rust in systems programming for JavaScript runtimes. The rewrite resulted in over one million lines of Rust code, with a substantial number of unsafe blocks, but it aims to reduce memory-related bugs like use-after-free and double-free by leveraging Rust's compile-time checks and automatic cleanup.

hackernews · Chaoses · May 14, 08:15

**Background**: Bun is a fast all-in-one JavaScript runtime designed as a drop-in replacement for Node.js, using Safari's JavaScriptCore engine for high performance. Rust is a systems programming language that emphasizes memory safety and concurrency without a garbage collector, relying on a borrow checker for compile-time guarantees. This rewrite from Zig to Rust underscores Bun's commitment to modern language features for enhanced code reliability and developer productivity.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Bun_(software)">Bun (software) - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Rust_(programming_language)">Rust (programming language)</a></li>

</ul>
</details>

**Discussion**: Community discussions express concerns about the codebase's large size and complexity, noting over one million lines of Rust code and significant unsafe usage, with comments highlighting the irony in the project lead's earlier skepticism. There are also debates on Rust's effectiveness in catching memory bugs, with some pointing out that it won't resolve all issues like reference leaks or JS boundary re-entries.

**Tags**: `#Bun`, `#Rust`, `#JavaScript runtime`, `#systems programming`, `#software complexity`

---

<a id="item-3"></a>
## [vLLM v0.21.0 introduces breaking changes and performance enhancements](https://github.com/vllm-project/vllm/releases/tag/v0.21.0) ⭐️ 8.0/10

vLLM v0.21.0 formally deprecates `transformers` v4 support and requires a C++20-compatible compiler, introducing breaking changes. This release also integrates KV offloading with a Hybrid Memory Allocator (HMA) and enhances speculative decoding for reasoning models. These changes require users of the widely-used LLM inference engine to update their dependencies and build environments, while the performance improvements in memory management and speculative decoding can significantly boost inference speed, especially for complex reasoning models. The breaking changes mandate migration to `transformers` v5 and a C++20 compiler, which could disrupt existing workflows. New technical features include a `TOKENSPEED_MLA` backend optimized for NVIDIA Blackwell GPUs and speculative decoding that now respects reasoning budgets.

github · khluu · May 14, 23:15

**Background**: vLLM is a popular high-performance library for serving Large Language Models (LLMs), focusing on efficient inference through techniques like PagedAttention. KV offloading is a strategy to manage the Key-Value cache by moving parts of it to external memory (like CPU or disk) to free up GPU VRAM. Speculative decoding accelerates inference by using a smaller, faster 'draft' model to generate candidate tokens that a larger 'target' model then verifies in parallel.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/vllm-project/vllm/issues/22292">Make KVConnector Compatible with HMA · Issue #22292 · vllm-project ...</a></li>
<li><a href="https://github.com/vllm-project/vllm/issues/34122">[Feature]: Add MLA attention backend for Turing · Issue #34122 · vllm-project/vllm</a></li>
<li><a href="https://iamhemanth.in/blog/speculative-decoding-the-billion-dollar-trick-hiding-in-plain-sight">Speculative Decoding : The Billion-Dollar Trick Hiding in Plain Sight</a></li>

</ul>
</details>

**Tags**: `#LLM inference`, `#vLLM`, `#deep learning`, `#systems optimization`, `#release notes`

---

<a id="item-4"></a>
## [RTX 5090 eGPU Successfully Paired with MacBook Air M4 for Gaming and AI](https://scottjg.com/posts/2026-05-05-egpu-mac-gaming/) ⭐️ 8.0/10

A technical demonstration successfully used an NVIDIA RTX 5090 external GPU (eGPU) connected via Thunderbolt to a MacBook Air M4, enabling gaming and local large language model (LLM) inference that was previously considered impossible on Apple Silicon Macs. This breakthrough challenges the long-standing official and community assumption that Apple Silicon Macs are incompatible with eGPUs, potentially opening a new pathway for Mac users to achieve high-performance gaming and accelerate local AI workloads using powerful discrete GPUs. The setup relies on custom drivers and workarounds, as Apple officially states eGPUs require an Intel-based Mac; furthermore, the memory window for the eGPU is limited to 1.5GB, which presents a bottleneck for larger AI models despite the powerful hardware.

hackernews · allenleee · May 14, 15:47

**Background**: An eGPU allows a laptop to use a more powerful desktop graphics card connected via a high-speed port like Thunderbolt for tasks like gaming or rendering. Apple officially deprecated eGPU support starting with its transition to Apple Silicon (M-series chips), stating only Intel Macs were compatible, and the officially supported cards were all from AMD, not NVIDIA. Local LLM inference involves running large AI models directly on a device's hardware, which benefits greatly from the parallel processing power of high-end GPUs.

<details><summary>References</summary>
<ul>
<li><a href="https://discussions.apple.com/thread/255953878">Apple Silicon (M1/M2/M3/M4) and eGPU supp… - Apple Community</a></li>
<li><a href="https://support.apple.com/en-us/102363">Use an external graphics processor with your Mac - Apple Support</a></li>
<li><a href="https://github.com/albertstarfield/apple-slick-rtx">GitHub - albertstarfield/apple-slick-rtx: eGPU on Apple Silicon, Trail for Fun! We're doing this for fun and just for taking challenge · GitHub</a></li>

</ul>
</details>

**Discussion**: The community discussion highlighted excitement about the practical implications, especially for local AI performance. One commenter noted the significant improvement in LLM prompt processing speed compared to Mac's integrated GPU. Others expressed interest in the technical implementation, discussed the potential of VM GPU passthrough, and some remained skeptical about the long-term viability and Apple's potential response to such hacks.

**Tags**: `#eGPU`, `#Apple Silicon`, `#Gaming`, `#Machine Learning`, `#Hardware Hacking`

---

<a id="item-5"></a>
## [New Nginx Buffer Overflow Exploit with ASLR Bypass Claims](https://github.com/DepthFirstDisclosures/Nginx-Rift) ⭐️ 8.0/10

A buffer overflow vulnerability in Nginx's rewrite directive has been publicly disclosed, accompanied by a proof-of-concept exploit that claims to bypass ASLR, targeting configurations with specific syntax. Nginx powers a large portion of web servers globally, so this vulnerability could lead to widespread security risks, especially if the ASLR bypass is viable, potentially enabling remote code execution attacks. The exploit requires specific preconditions, including the use of a rewrite directive with a question mark in the replacement string and a subsequent set directive referencing a regex capture group, while the published proof-of-concept assumes ASLR is disabled.

hackernews · hetsaraiya · May 14, 17:17

**Background**: Nginx is a popular high-performance web server used for handling web traffic, and ASLR (Address Space Layout Randomization) is a security mechanism that randomizes memory addresses to hinder exploitation of memory corruption vulnerabilities. Rewrite directives in Nginx are configuration commands used to modify URLs during request processing, often for redirection or path manipulation.

<details><summary>References</summary>
<ul>
<li><a href="https://medium.com/@wam0x0x0/stack-overflow-protection-and-bypass-techniques-rop-aslr-canaries-and-more-f5d992c3ab79">Stack Overflow Protection and Bypass Techniques — ROP, ASLR ...</a></li>
<li><a href="https://docs.nginx.com/nginx/admin-guide/web-server/web-server/">Configuring NGINX and NGINX Plus as a Web Server</a></li>

</ul>
</details>

**Discussion**: Community discussions focus on the credibility of ASLR bypass claims, with experts noting that ASLR is a defense-in-depth technique and bypasses are often achievable with effort, while also highlighting the exploit's specific preconditions and referencing official patches from F5 for affected versions.

**Tags**: `#security`, `#nginx`, `#vulnerability`, `#exploit`, `#ASLR`

---

<a id="item-6"></a>
## [arXiv imposes 1-year ban for submissions with hallucinated references](https://twitter.com/tdietterich/status/2055000956144935055) ⭐️ 8.0/10

The preprint server arXiv announced a new policy that penalizes authors who submit papers containing fabricated references generated by large language models (LLMs) with a one-year ban, followed by a requirement that future submissions first be accepted by a reputable peer-reviewed journal. This policy directly confronts the growing threat of AI-generated 'hallucinated' citations to scientific integrity and trust in the literature. It establishes a significant deterrent and underscores the responsibility of researchers to verify AI-assisted work, which could influence other academic publishers to adopt similar measures. The ban is notably severe, especially given arXiv's status as a free, open-access platform, highlighting the seriousness with which the problem is viewed. However, the specific enforcement mechanisms and the timeline for its implementation were not immediately clear from the initial announcement discussed online.

hackernews · gjuggler · May 14, 20:39

**Background**: arXiv is a widely used online repository for preprints—drafts of scientific papers shared before peer review. 'Hallucination' in the context of large language models refers to the phenomenon where the AI confidently generates false or nonsensical information, including fake academic citations that do not correspond to real papers. The rise of generative AI tools has made it trivially easy for authors to produce papers with such fabricated references, polluting the scientific record.

<details><summary>References</summary>
<ul>
<li><a href="https://www.nature.com/articles/d41586-026-00969-z">Hallucinated citations are polluting the scientific literature. What can be done?</a></li>
<li><a href="https://arxiv.org/abs/2601.18724">[2601.18724] HalluCitation Matters: Revealing the Impact of Hallucinated References with 300 Hallucinated Papers in ACL Conferences</a></li>
<li><a href="https://wacclearinghouse.org/repository/collections/continuing-experiments/august-2025/ai-literacy/understanding-avoiding-hallucinated-references/">Understanding and Avoiding Hallucinated References - The WAC Clearinghouse</a></li>

</ul>
</details>

**Discussion**: The community largely welcomed the policy, agreeing it is 'incredibly good for science' and a necessary deterrent. However, comments also highlighted practical concerns, including the difficulty of creating perfectly accurate citations even without AI, and the need for careful vetting to avoid unfairly penalizing innocent mistakes.

**Tags**: `#arXiv`, `#AI ethics`, `#academic publishing`, `#hallucinated references`, `#policy`

---

<a id="item-7"></a>
## [MIT President's Message on Academia's Funding and Talent Pipeline Issues](https://president.mit.edu/writing-speeches/video-transcript-message-president-kornbluth-about-funding-and-talent-pipeline) ⭐️ 8.0/10

MIT President Kornbluth delivered a message addressing critical funding shortages and talent pipeline challenges in academia, sparking widespread debate about the state of research and higher education. This message highlights systemic problems that could undermine academic careers, research innovation, and the stability of higher education institutions, affecting students, faculty, and the broader scientific community. The discussion reveals that many PhD graduates are leaving academia due to poor job prospects and low pay, with median PhD durations now around six years, alongside concerns over declining grants and financial policy issues.

hackernews · dmayo · May 14, 14:51

**Background**: Academia has traditionally been a hub for research and education, but recent years have seen reduced government funding, rising tuition costs, and a competitive job market for PhD holders, leading to challenges in sustaining talent pipelines. These issues are compounded by global economic pressures and shifting policy priorities, prompting calls for systemic reform in higher education.

**Discussion**: The community expresses widespread disillusionment with academia, citing low pay, lengthy PhD programs, and bleak job prospects as key reasons many PhDs are leaving the field. Comments also touch on systemic issues like financial policy challenges, with some foreseeing a generational reset in higher education and comparisons to alternative education models such as those in China.

**Tags**: `#academia`, `#funding`, `#talent-pipeline`, `#research`, `#higher-education`

---

<a id="item-8"></a>
## [Removing Modem and GPS from 2024 RAV4 for Privacy](https://arkadiyt.com/2026/05/13/removing-the-modem-and-gps-from-my-rav4/) ⭐️ 7.0/10

A detailed guide has been published on physically removing the modem and GPS module from a 2024 Toyota RAV4 hybrid to prevent data collection by Toyota, including step-by-step instructions and technical challenges encountered. This highlights growing consumer concerns over vehicle data telemetry and privacy, as individuals take drastic measures to regain control over their personal information in connected cars, which could influence automakers to offer more transparent opt-out options. The removal process involves disassembling interior components to access the telematics unit, and users have noted that even after hardware removal, using Bluetooth for phone connectivity might still allow data transmission back to Toyota via a connected smartphone.

hackernews · arkadiyt · May 14, 17:08

**Background**: Modern vehicles often include a Telematics Control Unit (TCU), an embedded system that connects to the internet for services like remote diagnostics and software updates, enabling data collection known as telemetry. The CAN bus protocol is a standard communication system used in vehicles to facilitate internal data exchange between electronic control units, which is integral to functions like engine management and infotainment systems.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Telematic_control_unit">Telematic control unit</a></li>
<li><a href="https://en.wikipedia.org/wiki/CAN_bus">CAN bus - Wikipedia</a></li>

</ul>
</details>

**Discussion**: The discussion reveals concerns about privacy loopholes, with some users pointing out that Bluetooth phone connections may still transmit telemetry data even after hardware removal, while others suggest workarounds like using wired USB connections or removing specific fuses in other vehicle models such as the Ford Maverick.

**Tags**: `#privacy`, `#automotive`, `#hardware-hacking`, `#IoT`, `#data-telemetry`

---

<a id="item-9"></a>
## [Antirez Releases DwarfStar4, a Dedicated Runtime for Local DeepSeek 4 Inference](https://antirez.com/news/165) ⭐️ 7.0/10

Renowned developer antirez announced DwarfStar4 (DS4), a small and focused native inference engine designed specifically to run the DeepSeek V4 Flash model locally, with an initial requirement of 96GB of VRAM. The project demonstrates the growing trend of powerful, specialized tools for running large language models on local hardware, potentially reducing reliance on cloud APIs and giving advanced users more control, though the high VRAM requirement currently limits it to high-end setups. DS4 intentionally supports only the DeepSeek V4 Flash model and prioritizes Apple's Metal backend for high-end Macs with 96GB of RAM, with community-supported NVIDIA CUDA and experimental AMD ROCm branches.

hackernews · caust1c · May 14, 22:29

**Background**: An LLM inference runtime is software that loads and runs a pre-trained language model, translating it into output text. DeepSeek V4 Flash is a recent, efficient Mixture-of-Experts (MoE) model from DeepSeek AI with 284B total parameters but only 13B activated per inference. Projects like DS4 build upon foundational libraries such as llama.cpp and GGML.

<details><summary>References</summary>
<ul>
<li><a href="https://github.com/antirez/ds4">GitHub - antirez/ds4: DeepSeek 4 Flash local inference engine for...</a></li>
<li><a href="https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro">deepseek-ai/DeepSeek-V4-Pro · Hugging Face</a></li>

</ul>
</details>

**Discussion**: The community discussion focuses on the practical implications of the high VRAM requirement and speculates on the future trajectory of local model performance, with some users noting that DS4's output quality feels surprisingly close to cloud models like Claude, raising questions about the sustainability of current subscription-based AI services as local capabilities advance.

**Tags**: `#AI`, `#LLM`, `#inference`, `#local-models`, `#hardware`

---

<a id="item-10"></a>
## [OpenAI Codex integrated into ChatGPT mobile app for on-the-go coding](https://openai.com/index/work-with-codex-from-anywhere/) ⭐️ 7.0/10

OpenAI has officially integrated its Codex coding assistant into the ChatGPT mobile application, enabling developers to perform AI-powered software engineering tasks directly from their smartphones or tablets. This update significantly expands the accessibility of AI-assisted coding tools, potentially streamlining developers' workflows by allowing them to handle coding tasks from any location, which aligns with the broader trend of mobile-first and flexible development environments. The service is reportedly available for free within the ChatGPT app, though user interactions may be used for model training; early user feedback suggests mobile usage, due to screen size and input constraints, may produce different results compared to desktop use.

hackernews · mikeevans · May 14, 20:06

**Background**: OpenAI Codex is a suite of AI-driven coding agents designed to automate software engineering tasks, such as writing, refactoring, and debugging code. AI coding assistants, like Codex and others, integrate with development environments to help programmers explore codebases, generate code, and accelerate feature development.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/OpenAI_Codex">OpenAI Codex - Wikipedia</a></li>
<li><a href="https://grokipedia.com/page/OpenAI_Codex">OpenAI Codex</a></li>

</ul>
</details>

**Discussion**: Community sentiment is mixed; some users express excitement about the convenience of free mobile access, while others humorously note it may lead to constant work rather than automation. Practical concerns are raised about the limitations of mobile interfaces for detailed coding work, and questions exist regarding how to use it effectively with local projects.

**Tags**: `#AI`, `#coding`, `#mobile apps`, `#OpenAI`, `#developer tools`

---

<a id="item-11"></a>
## [US Approves Nvidia H200 Chip Sales to Around 10 Chinese Companies](https://www.reuters.com/business/retail-consumer/us-clears-h200-chip-sales-10-china-firms-nvidia-ceo-looks-breakthrough-2026-05-14/) ⭐️ 7.0/10

The US Department of Commerce has approved the sale of Nvidia H200 chips to approximately 10 Chinese companies, including Alibaba and Tencent, though no deliveries have been completed yet. This development is significant as it highlights the ongoing US-China tech rivalry and could impact China's AI development by providing access to advanced chips while balancing domestic innovation strategies. Each customer is limited to purchasing up to 75,000 H200 chips, and some Chinese firms are proceeding cautiously under guidance from Beijing, with Nvidia's CEO visiting China to facilitate deals.

telegram · zaihuapd · May 14, 08:57

**Background**: Nvidia's H200 is a high-performance GPU based on the Hopper architecture, designed for data center AI workloads. AI chips like GPUs are essential for training and running large-scale AI models due to their parallel processing capabilities, which make them critical for modern AI development. The H200 represents an upgrade with faster memory and improved performance for AI tasks compared to previous models.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Nvidia_H200">Nvidia H200</a></li>
<li><a href="https://www.reddit.com/r/singularity/comments/1pmldz9/nvidia_h200_is_officially_legacy_tech_us_lifts/">Nvidia H200 is officially 'legacy' tech: US lifts export ban to China ... - Reddit</a></li>

</ul>
</details>

**Discussion**: Community discussions, such as on Reddit, indicate that the H200 chip is now considered legacy technology, with the US lifting export bans as newer models like Blackwell become available, suggesting a strategic shift in Western tech priorities.

**Tags**: `#AI chips`, `#US-China trade`, `#Nvidia`, `#semiconductor`, `#geopolitics`

---

<a id="item-12"></a>
## [DeepSeek Dialogue System Vulnerability May Expose Other Users' Data](https://github.com/deepseek-ai/DeepSeek-R1/issues/840) ⭐️ 7.0/10

A report on May 11, 2026, disclosed a session isolation flaw in DeepSeek's Web and API models, where sending an unclosed '<think' string in an empty conversation could cause the model to return fragments of other users' chat history. This is a significant security vulnerability that directly risks user privacy and data confidentiality, potentially exposing sensitive information like code and API keys, and it undermines trust in the platform's isolation guarantees. The vulnerability was responsibly disclosed by the reporter 'cancat2024', but community skepticism exists, with some arguing it might be a 'hallucination' specific to certain third-party deployments rather than a core issue, which introduces uncertainty about its actual scope.

telegram · zaihuapd · May 14, 13:15

**Background**: In AI dialogue systems, the '<think' tag or similar constructs are often used internally by models to organize or enclose their reasoning process before generating a final response. Session isolation is a fundamental security principle designed to ensure that one user's data and context are completely separate from another's within the same service.

<details><summary>References</summary>
<ul>
<li><a href="https://www.augmentcode.com/guides/prompt-injection-vulnerabilities-threatening-ai-development">Prompt Injection Vulnerabilities Threatening AI Development</a></li>
<li><a href="https://en.wikipedia.org/wiki/Prompt_injection">Prompt injection - Wikipedia</a></li>
<li><a href="https://github.com/vllm-project/vllm/discussions/12708">Nested `` and `` tag in deepseek -...</a></li>

</ul>
</details>

**Discussion**: The community discussion includes skepticism, with one commenter suggesting that the issue might also appear in third-party deployments and could be an instance of model 'hallucination' rather than a true data leak, introducing debate about the vulnerability's root cause and severity.

**Tags**: `#security vulnerability`, `#AI systems`, `#data privacy`, `#DeepSeek`, `#session isolation`

---

<a id="item-13"></a>
## [JD.com Launches Self-Operated AI Hardware Zone with Sanctioned NVIDIA GPUs](https://t.me/zaihuapd/41386) ⭐️ 7.0/10

JD.com has launched a new 'AI Hardware Self-Operated Zone' on its e-commerce platform, listing previously sanctioned high-end NVIDIA GPUs like the RTX 5090, RTX PRO 6000, and H100 for purchase in China. This development could provide Chinese AI developers and researchers with a compliant channel to access advanced AI training and inference hardware, potentially alleviating supply constraints affecting the industry. The listed RTX 5090 is described as the full, unaltered global specification, while the H100 is a data center GPU previously subject to export bans; the RTX PRO 6000 targets professional rendering and data center applications.

telegram · zaihuapd · May 14, 16:22

**Background**: NVIDIA's H100 Tensor Core GPU is a high-performance chip designed for data centers and AI workloads, while the newer RTX PRO 6000 is part of the Blackwell architecture. Due to U.S. export controls, the sale of such advanced semiconductors to China has been tightly restricted. JD.com is a major Chinese e-commerce company whose self-operated business model typically involves direct sales and logistics management.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/NVIDIA_H100_Tensor_Core_GPUs">NVIDIA H100 Tensor Core GPUs</a></li>
<li><a href="https://www.nvidia.com/en-us/data-center/h100/">H 100 GPU | NVIDIA</a></li>
<li><a href="https://www.nvidia.com/en-us/data-center/technologies/blackwell-architecture/">The Engine Behind AI Factories | NVIDIA Blackwell Architecture</a></li>

</ul>
</details>

**Tags**: `#AI hardware`, `#NVIDIA`, `#sanctions`, `#China`, `#retail`

---