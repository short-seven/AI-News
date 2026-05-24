---
layout: default
title: "Horizon Summary: 2026-05-24 (EN)"
date: 2026-05-24
lang: en
---

> From 20 items, 8 important content pieces were selected

---

1. [80386 Microcode Disassembled from Die Images](#item-1) ⭐️ 8.0/10
2. [Exploring Deep Learning Performance Optimization from First Principles](#item-2) ⭐️ 8.0/10
3. [Anthropic's AI Model Finds Over 10,000 Critical Vulnerabilities in Major Software](#item-3) ⭐️ 8.0/10
4. [Apple Open-Sources corecrypto with Formal Proofs for Quantum-Safe Algorithms](#item-4) ⭐️ 8.0/10
5. [China's Daily AI Token Usage Surpasses 140 Trillion, Growth Over 1000x in Two Years](#item-5) ⭐️ 8.0/10
6. [Building a Distraction-Free Writerdeck with Customized Linux and Vim](#item-6) ⭐️ 7.0/10
7. [Microsoft internally promotes Anthropic's Claude Code to engineers and non-technical staff.](#item-7) ⭐️ 7.0/10
8. [Microsoft's financial report discloses OpenAI's $11.5 billion quarterly loss](#item-8) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [80386 Microcode Disassembled from Die Images](https://www.reenigne.org/blog/80386-microcode-disassembled/) ⭐️ 8.0/10

The microcode of the Intel 80386 processor was extracted and disassembled from die images using image processing, AI, and human-assisted automation, with the resulting binary blob cross-checked for accuracy. This work provides valuable insights into vintage x86 computer architecture and advances reverse engineering techniques, supporting historical preservation and research in computer science. The extraction process relied on AI to identify transistors and circuits from die images, and disassembling the microcode was a significant challenge; knowing the specific revision of the 80386 chip is crucial as it underwent multiple changes during its 22-year production run.

hackernews · nand2mario · May 23, 12:11

**Background**: Microcode is the fundamental firmware in processors that controls low-level operations by translating complex instructions into hardware actions. The Intel 80386, released in 1985, is a seminal x86 CPU that shaped modern computing. Reverse engineering microcode from die images involves analyzing physical chip structures using microscopy and computational methods to reconstruct internal logic.

<details><summary>References</summary>
<ul>
<li><a href="https://www.reenigne.org/blog/80386-microcode-disassembled/">80386 microcode disassembled « Reenigne blog</a></li>
<li><a href="https://www.reenigne.org/blog/8086-microcode-disassembled/">8086 microcode disassembled « Reenigne blog</a></li>
<li><a href="https://happytrees.org/dieshots/Main_Page">CPU Graveyard - Die shots - happytrees.org</a></li>

</ul>
</details>

**Discussion**: Commenters highlight the importance of identifying the exact 80386 revision due to production variations, and express curiosity about how microcode is reconstructed from die images, with references to related projects like z386 and educational resources on microprogramming.

**Tags**: `#microcode`, `#reverse-engineering`, `#x86`, `#computer-architecture`, `#80386`

---

<a id="item-2"></a>
## [Exploring Deep Learning Performance Optimization from First Principles](https://horace.io/brrr_intro.html) ⭐️ 8.0/10

The blog post provides a comprehensive first-principles analysis of deep learning performance optimization, breaking down how hardware-software interactions, specifically NVIDIA's CUDA ecosystem, dictate speed. Understanding performance from the ground up is crucial for ML engineers to effectively optimize models, navigate the fragmented hardware landscape, and make informed decisions about deployment and infrastructure. A key technical insight is that NVIDIA's sustained exponential growth in TFLOPS, bandwidth, and interconnect technology has maintained its ecosystem's dominance, making portability across different runtimes (like ONNX Runtime with CUDA EP vs. TensorRT EP) a significant and complex challenge.

hackernews · tosh · May 23, 11:50

**Background**: Deep learning models run on specialized hardware like NVIDIA GPUs, which are programmed via parallel computing platforms such as CUDA and accelerated by libraries like cuDNN. Optimizing performance involves leveraging these tools to maximize hardware utilization, often through techniques like kernel fusion and autotuning.

<details><summary>References</summary>
<ul>
<li><a href="https://developer.nvidia.com/cuda/toolkit">CUDA Toolkit - Free Tools and Training | NVIDIA Developer</a></li>
<li><a href="https://docs.nvidia.com/deeplearning/cudnn/frontend/latest/developer/overview.html">Overview — NVIDIA cuDNN Frontend</a></li>
<li><a href="https://medium.com/@linghuang_76674/tensorrt-and-onnx-inference-optimization-in-practice-10-engineering-techniques-to-reduce-latency-afab92cf9484">TensorRT and ONNX Inference Optimization in Practice... | Medium</a></li>

</ul>
</details>

**Discussion**: Community members hailed the post as a classic and highlighted NVIDIA's remarkable, sustained leadership in a high-growth field. A major discussion point was the immense complexity of model portability, noting that the same model behaves differently across various runtimes (e.g., ONNX, TensorRT) and target hardware, calling it a 'humongous mess'.

**Tags**: `#deep-learning`, `#performance-optimization`, `#hardware-acceleration`, `#machine-learning-systems`, `#python`

---

<a id="item-3"></a>
## [Anthropic's AI Model Finds Over 10,000 Critical Vulnerabilities in Major Software](https://www.anthropic.com/research/glasswing-initial-update) ⭐️ 8.0/10

Anthropic's Project Glasswing utilized the Claude Mythos Preview AI model to identify over 10,000 high-risk or critical vulnerabilities across critical software within a month, with a verified 90.6% true positive rate. The discovery demonstrates a massive leap in AI-powered vulnerability detection speed, shifting the critical bottleneck from discovery to verification and patching, which pressures the open-source ecosystem and necessitates faster industry patch cycles. Partners like Cloudflare reported a tenfold increase in discovery rates, while the flood of reports overwhelmed open-source maintainers, prompting requests to slow down; Anthropic is collaborating with the Open Source Security Foundation to aid remediation.

telegram · zaihuapd · May 23, 03:16

**Background**: Project Glasswing leverages advanced AI, specifically Anthropic's frontier model Claude Mythos Preview, to proactively scan software for 'zero-day' vulnerabilities—security flaws unknown to developers. This initiative reflects a growing trend of using AI to strengthen cybersecurity defenses, though it also highlights the arms race between defensive and offensive uses of such technology.

<details><summary>References</summary>
<ul>
<li><a href="https://www.anthropic.com/glasswing">Project Glasswing: Securing critical software for the AI era</a></li>
<li><a href="https://www.picussecurity.com/resource/blog/anthropics-project-glasswing-paradox">What Is Project Glasswing? Anthropic's AI Misuse Research Initiative Explained</a></li>
<li><a href="https://interestingengineering.com/ai-robotics/anthropic-project-glasswing-10000-software-vulnerabilities">Project Glasswing: Anthropic says Claude found 10,000 critical software flaws in a month</a></li>

</ul>
</details>

**Tags**: `#AI`, `#cybersecurity`, `#vulnerability detection`, `#open source security`, `#Anthropic`

---

<a id="item-4"></a>
## [Apple Open-Sources corecrypto with Formal Proofs for Quantum-Safe Algorithms](https://security.apple.com/blog/formal-verification-corecrypto/) ⭐️ 8.0/10

On May 22, Apple released the corecrypto source code, including formal verification proofs that ensure the C code and ARM64 assembly for ML-KEM and ML-DSA algorithms strictly align with NIST standards. This enhances security for over 2.5 billion active devices by advancing cryptographic assurance and supporting quantum-safe encryption in critical applications like iMessage and VPN, accelerating industry readiness for post-quantum threats. The formal verification proofs cover both C code and hand-optimized ARM64 assembly, and Apple has open-sourced custom verification tools and Isabelle theory libraries for independent expert evaluation to drive progress in software assurance.

telegram · zaihuapd · May 23, 04:49

**Background**: ML-KEM and ML-DSA are NIST-standardized post-quantum cryptographic algorithms designed to resist attacks from quantum computers, with ML-KEM for key encapsulation and ML-DSA for digital signatures. Formal verification uses mathematical proofs to guarantee the correctness of software implementations, reducing the risk of security flaws in critical code.

<details><summary>References</summary>
<ul>
<li><a href="https://ncse.info/post-quantum-cryptography/">Post - Quantum Cryptography: ML - KEM Implementation Guide</a></li>
<li><a href="https://www.digicert.com/insights/post-quantum-cryptography/mldsa">ML-DSA | Post-Quantum Cryptography | DigiCert Insights</a></li>
<li><a href="https://en.wikipedia.org/wiki/Formal_verification">Formal verification - Wikipedia</a></li>

</ul>
</details>

**Tags**: `#cryptography`, `#quantum-safe-cryptography`, `#formal-verification`, `#open-source`, `#apple-security`

---

<a id="item-5"></a>
## [China's Daily AI Token Usage Surpasses 140 Trillion, Growth Over 1000x in Two Years](https://t.me/zaihuapd/41542) ⭐️ 8.0/10

China's National Data Bureau announced that the country's daily AI token (词元) call volume exceeded 140 trillion in March 2025, a more than thousandfold increase from 100 billion at the start of 2024. This explosive growth signifies rapid AI commercialization and indicates that a new value system centered on tokens—being measurable, pricable, and tradeable—is accelerating in formation, becoming a key path for the AI industry's business models. The report highlights that tokens are the smallest units of information processed by large models, and the surge in their usage reflects the formation of a high-quality data supply system for AI as China's reform for market-based allocation of data elements advances.

telegram · zaihuapd · May 23, 14:36

**Background**: A token is a fundamental unit of data used by Large Language Models (LLMs) to process information, often representing a part of a word or a whole word. The API usage of most LLM services is priced based on the number of tokens processed, making it a key metric for the commercial AI ecosystem. The National Data Bureau, established to manage China's data element marketization strategy, released policies like the "Data Element X" plan to foster data trading and utilization.

<details><summary>References</summary>
<ul>
<li><a href="https://blogs.nvidia.com/blog/ai-tokens-explained/">What Are AI Tokens ? The Language and Currency... | NVIDIA Blog</a></li>
<li><a href="https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them">What are tokens and how to count them? | OpenAI Help Center</a></li>

</ul>
</details>

**Tags**: `#AI`, `#data economy`, `#China`, `#large language models`, `#commercialization`

---

<a id="item-6"></a>
## [Building a Distraction-Free Writerdeck with Customized Linux and Vim](https://veronicaexplains.net/my-first-writerdeck/) ⭐️ 7.0/10

Veronica detailed her experience building her first writerdeck, a distraction-free writing device using a customized Linux setup and the Vim editor, which sparked significant community debate. This reflects a growing trend in personal productivity optimization, where individuals create tailored environments to minimize distractions and enhance focus, particularly in writing and software engineering workflows. The setup involves extensive Linux customization, such as swapping networking stacks and tweaking Vim configurations, but critics argue that the process itself can become a distraction from actual writing.

hackernews · hggh · May 23, 18:45

**Background**: A writerdeck is a device dedicated solely to writing, often a computerized word processor like the Freewrite or Alphasmart, designed to eliminate distractions. Linux customization allows users to tailor their operating system for specific tasks, and Vim is a highly configurable text editor favored by programmers for its efficiency.

<details><summary>References</summary>
<ul>
<li><a href="https://www.writerdeck.org/">writerDeck .org | writerDeck</a></li>
<li><a href="https://github.com/brsloan/writerDeck/blob/main/README.md">writerDeck /README.md at main · brsloan/ writerDeck · GitHub</a></li>
<li><a href="https://www.makeuseof.com/best-distraction-free-writing-apps-linux/">The 9 Best Distraction-Free Writing Apps for Linux to Help You Focus - MUO</a></li>

</ul>
</details>

**Discussion**: The community expressed mixed sentiments, with some praising the technical effort and clarity of the blog post, while others highlighted the irony that setting up a distraction-free device could itself be a distracting activity, akin to procrastination or misdirected focus.

**Tags**: `#writing-tools`, `#productivity`, `#linux-customization`, `#vim`, `#personal-projects`

---

<a id="item-7"></a>
## [Microsoft internally promotes Anthropic's Claude Code to engineers and non-technical staff.](https://t.me/zaihuapd/41535) ⭐️ 7.0/10

Microsoft is widely promoting Anthropic's Claude Code across its key engineering teams, including CoreAI and the Windows/Microsoft 365 group, and encouraging even employees without programming experience to use it for prototyping. This move indicates a significant trend where a major technology company promotes a direct competitor's AI tool internally, highlighting intense competitive dynamics in the AI coding assistant market and a corporate shift toward democratizing software development across all roles. Microsoft software engineers are now required to use both Claude Code and GitHub Copilot and provide comparative feedback, despite Microsoft selling its own Copilot product to customers.

telegram · zaihuapd · May 23, 06:05

**Background**: Claude Code is an AI-powered agentic coding tool developed by Anthropic that lives in the terminal, understands a codebase, and helps developers by editing files, running commands, and automating tasks via natural language. The broader industry trend is seeing AI-assisted programming expand beyond professional developers, with new tools and training emerging to enable non-technical employees to collaborate effectively with AI for application development.

<details><summary>References</summary>
<ul>
<li><a href="https://claude.com/product/claude-code">Claude Code by Anthropic | AI Coding Agent, Terminal, IDE</a></li>
<li><a href="https://code.claude.com/docs/en/overview">Overview - Claude Code Docs</a></li>
<li><a href="https://resources.rework.com/guides/ai-team-readiness/ai-tools-training-non-technical-teams">"AI Tools Training Playbook for Non-Technical Teams: What ...</a></li>

</ul>
</details>

**Tags**: `#AI`, `#software-engineering`, `#enterprise-adoption`, `#Microsoft`, `#Claude-Code`

---

<a id="item-8"></a>
## [Microsoft's financial report discloses OpenAI's $11.5 billion quarterly loss](https://t.me/zaihuapd/41537) ⭐️ 7.0/10

Microsoft's latest quarterly financial report reveals that OpenAI incurred a net loss of approximately $11.5 billion in a single quarter, based on Microsoft's equity method investment, reducing Microsoft's net profit by $3.1 billion. This disclosure highlights the immense financial demands of AI development and could impact investment trends in the AI industry, as OpenAI is a key player and its losses indicate high costs for cutting-edge technology. The loss is nearly three times OpenAI's revenue of $4.3 billion in the first half of the year, and Microsoft has already invested $11.6 billion of its $13 billion commitment, with calculations based on Microsoft's 27% to 32.5% stake in OpenAI.

telegram · zaihuapd · May 23, 07:40

**Background**: The equity method is an accounting approach where an investor records its share of the investee's profits or losses based on ownership percentage. OpenAI is a leading artificial intelligence research organization, and Microsoft's significant stake reflects their strategic partnership in advancing AI technologies.

**Tags**: `#AI`, `#OpenAI`, `#Microsoft`, `#financial-disclosure`, `#AI-industry`

---