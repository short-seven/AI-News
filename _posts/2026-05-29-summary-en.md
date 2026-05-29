---
layout: default
title: "Horizon Summary: 2026-05-29 (EN)"
date: 2026-05-29
lang: en
---

> From 32 items, 13 important content pieces were selected

---

1. [Building Durable Workflows on Postgres](#item-1) ⭐️ 8.0/10
2. [Anthropic Secures $65B in Series H at $965B Valuation](#item-2) ⭐️ 8.0/10
3. [Nvidia CEO Calls Taiwan Center of AI Revolution, Plans $150B Annual Investment](#item-3) ⭐️ 8.0/10
4. [BYD Unveils 'Xuanji A3' 4nm Autonomous Driving Chip](#item-4) ⭐️ 8.0/10
5. [Anthropic Releases Minor Claude Opus 4.8 Update](#item-5) ⭐️ 7.0/10
6. [Technical critique of Unix shell scenes in 'Tron: Legacy'](#item-6) ⭐️ 7.0/10
7. [Game Simulates AI Agent Permission Fatigue in 60 Seconds](#item-7) ⭐️ 7.0/10
8. [GitHub bans security researcher who published Windows zero-day exploits](#item-8) ⭐️ 7.0/10
9. [Identifying Typical Patterns in LLM-Generated Text](#item-9) ⭐️ 7.0/10
10. [Anthropic's run-rate revenue reaches $47 billion](#item-10) ⭐️ 7.0/10
11. [YouTube Adjusts AI Video Labels, Auto-Adds Tags for Undeclared Content](#item-11) ⭐️ 7.0/10
12. [DOMD: Open-source Markdown WYSIWYG Editor with Custom 20KB Rendering Engine](#item-12) ⭐️ 7.0/10
13. [NBA Plans AI System for Automatic Out-of-Bounds Calls](#item-13) ⭐️ 7.0/10

---

<a id="item-1"></a>
## [Building Durable Workflows on Postgres](https://www.dbos.dev/blog/postgres-is-all-you-need-for-durable-execution) ⭐️ 8.0/10

The blog post proposes using PostgreSQL as the core infrastructure to build durable workflows, simplifying reliable execution in distributed systems by leveraging its built-in features like transaction management and queuing. This approach matters because it reduces the need for specialized workflow engines, potentially lowering complexity and costs in distributed system design while leveraging an existing, widely-adopted database. Key technical details include using PostgreSQL's SELECT FOR UPDATE for queue management, with alternatives like pgque employing snapshot and table truncate to minimize bloat, and tools like DBOS and absurd providing additional durable execution layers.

hackernews · KraftyOne · May 28, 18:41

**Background**: Durable workflows are fault-tolerant processes that checkpoint their state to a durable store, enabling recovery from failures in distributed systems. Reliable execution patterns are crucial for handling partial failures, network latency, and maintaining consistency across services. PostgreSQL, a robust relational database, can be extended to support these patterns, as seen with tools like DBOS that integrate durable execution directly into the database layer.

<details><summary>References</summary>
<ul>
<li><a href="https://www.restate.dev/what-is-durable-execution">What is Durable Execution? A Definitive Guide | Restate</a></li>
<li><a href="https://www.dbos.dev/blog/why-postgres-durable-execution">Why You Should Build Durable Workflows With Postgres</a></li>
<li><a href="https://lucumr.pocoo.org/2025/11/3/absurd-workflows/">Absurd Workflows: Durable Execution With Just Postgres | Armin Ronacher's Thoughts and Writings</a></li>

</ul>
</details>

**Discussion**: Community discussion highlights alternative tools like pgque, which uses snapshot and truncate to reduce bloat, and absurd for implementing durable workflows in PostgreSQL. Users share real-world experiences with DBOS, Restate, and Cloudflare workflows, noting trade-offs such as reliability for DBOS, self-hostability for Restate, and cost-effectiveness for Cloudflare, while comparisons to Temporal reveal concerns about payload limits.

**Tags**: `#PostgreSQL`, `#durable workflows`, `#distributed systems`, `#backend engineering`, `#system design`

---

<a id="item-2"></a>
## [Anthropic Secures $65B in Series H at $965B Valuation](https://www.anthropic.com/news/series-h) ⭐️ 8.0/10

Anthropic announced it has raised $65 billion in a Series H funding round, reaching a post-money valuation of $965 billion. The company also disclosed that its annualized revenue had surpassed $47 billion in early May 2026. This massive funding round and near-trillion-dollar valuation solidify Anthropic's position as a dominant force in the AI industry, potentially surpassing its chief rival OpenAI in both revenue and market value. It signals continued massive investor confidence in the long-term growth and commercial viability of leading AI model developers. The funding round included $15 billion from hyperscalers like Amazon, with Anthropic's self-reported annualized revenue jumping from approximately $30 billion to over $47 billion in just a few months. The $965 billion post-money valuation sets a new benchmark for private AI companies.

hackernews · meetpateltech · May 28, 18:09

**Background**: A Series H funding round is a late-stage venture capital financing round typically pursued by mature startups for large-scale growth or preparing for an exit. 'Post-money valuation' refers to a company's worth immediately after receiving a new investment, calculated by adding the investment amount to its pre-investment value. 'Annualized revenue' (or run-rate revenue) is a financial metric that projects current revenue over a full year to estimate annual performance.

<details><summary>References</summary>
<ul>
<li><a href="https://startupheroes.io/startups/glossary/series-h-funding/">What is Series H Funding? - Startup Heroes</a></li>
<li><a href="https://en.cryptonomist.ch/2026/05/28/anthropic-series-h-funding-claude-growth/">Anthropic Series H funding: $65B round for Claude growth</a></li>
<li><a href="https://www.investopedia.com/terms/p/postmoneyvaluation.asp">Understanding Post-Money Valuation: Key Concepts and Examples</a></li>

</ul>
</details>

**Discussion**: Community discussion highlighted Anthropic's rapid revenue growth, with one user noting it had surpassed OpenAI. Others questioned the implications of trillion-dollar private valuations for the stock market and clarified the concept of run-rate revenue for newcomers. A recurring theme was the ultimate financial burden on consumers through subscriptions or pension funds.

**Tags**: `#AI`, `#funding`, `#Anthropic`, `#valuation`, `#tech industry`

---

<a id="item-3"></a>
## [Nvidia CEO Calls Taiwan Center of AI Revolution, Plans $150B Annual Investment](https://arstechnica.com/tech-policy/2026/05/nvidia-ceo-wants-taiwan-to-be-center-of-ai-revolution-not-us/) ⭐️ 8.0/10

Nvidia plans to invest approximately $150 billion annually in Taiwan to position it as the center of the AI revolution, covering AI chip production, system manufacturing, and supply chain partnerships, a significant increase from previous investments of $10-15 billion per year. This massive investment underscores Taiwan's critical role in the global AI supply chain and semiconductor manufacturing, potentially strengthening Nvidia's position in the AI industry and impacting related ecosystems such as chip design and hardware production. Nvidia's new headquarters in Taipei is expected to start construction in 2026 and become operational by 2030, housing 4,000 employees, with key partners including TSMC, Foxconn, Wistron, and Quanta for supply chain collaboration.

telegram · zaihuapd · May 28, 07:33

**Background**: Taiwan is a global hub for semiconductor manufacturing, with companies like TSMC leading in advanced chip production that is vital for AI technologies. Nvidia, a major U.S.-based chip designer, relies on such manufacturing capabilities to produce GPUs and AI systems used in data centers and AI training.

**Tags**: `#AI`, `#Nvidia`, `#Taiwan`, `#semiconductor manufacturing`, `#investment`

---

<a id="item-4"></a>
## [BYD Unveils 'Xuanji A3' 4nm Autonomous Driving Chip](https://finance.sina.com.cn/roll/2026-05-28/doc-inhznenn1371824.shtml) ⭐️ 8.0/10

BYD officially launched its 'Xuanji A3' autonomous driving chip on May 28, which is built on a 4nm process node and has entered mass production, supporting L3 and L4 autonomous driving capabilities with a combined computing power exceeding 2100 TOPS using three chips. This launch represents a major step by a leading Chinese automaker to achieve vertical integration and self-sufficiency in core autonomous driving technology, potentially accelerating the commercial deployment of L3/L4 vehicles and intensifying competition in the automotive AI chip market. The chip utilizes a 4nm semiconductor process, which generally offers improved power efficiency and transistor density over older nodes, and BYD claims a 100% improvement in algorithm utilization efficiency through its proprietary optimizations, maximizing the utility of the high computing power.

telegram · zaihuapd · May 28, 13:01

**Background**: In semiconductor manufacturing, a '4nm process' refers to a leading-edge node that enables smaller, more efficient transistors. The SAE International defines autonomous driving levels where L3 means conditional automation (driver can disengage) and L4 means high automation (system operates within specific domains). TOPS (Tera Operations Per Second) is a standard metric for measuring the raw computational power of AI chips.

<details><summary>References</summary>
<ul>
<li><a href="https://www.diffracty.in/post/understanding-the-4nm-semiconductor-process-and-its-impact-on-modern-technology">Understanding the 4nm Semiconductor Process and Its Impact on Modern Technology</a></li>
<li><a href="https://www.synopsys.com/blogs/chip-design/autonomous-driving-levels.html">The 6 Levels of Vehicle Autonomy Explained | Synopsys Automotive</a></li>
<li><a href="https://www.ernestchiang.com/en/notes/general/tops-comparison-table-by-brand/">Decoding AI TOPS: Essential Metrics for AI Chips and TOPS Comparison Chart | Ernest Chiang</a></li>

</ul>
</details>

**Tags**: `#autonomous driving`, `#AI chips`, `#BYD`, `#semiconductor`, `#L3/L4`

---

<a id="item-5"></a>
## [Anthropic Releases Minor Claude Opus 4.8 Update](https://www.anthropic.com/news/claude-opus-4-8) ⭐️ 7.0/10

Anthropic announced Claude Opus 4.8, a minor update that includes the option to disable the adaptive thinking feature for users who prefer direct responses. This update represents Anthropic's continued iterative refinement of its flagship model, directly responding to user feedback about control over model behavior and maintaining a rapid update cycle. The improvement is described as 'modest but tangible,' and the version number marks the third consecutive minor update to the Opus 4.5 family, following 4.6 and 4.7.

hackernews · craigmart · May 28, 16:49

**Background**: Claude is a series of large language models developed by Anthropic. 'Adaptive thinking' refers to a model's ability to perform intermediate chain-of-thought reasoning before generating an answer. The 'Opus' family represents Anthropic's most capable model tier.

<details><summary>References</summary>
<ul>
<li><a href="https://machinelearning.apple.com/research/adaptive-thinking">Adaptive Thinking: Large Language Models Know When to Think in Latent Space - Apple Machine Learning Research</a></li>
<li><a href="https://en.wikipedia.org/wiki/Claude_(language_model)">Claude (language model) - Wikipedia</a></li>

</ul>
</details>

**Discussion**: The community discussion highlights that this is the first time the Opus series has received three consecutive minor version bumps, with users noting that gains from 4.6 to 4.8 are incremental. Sentiment is largely positive regarding the new option to disable adaptive thinking, as some users found it unreliable, while comments also speculate about a future, more powerful 'Mythos' class model.

**Tags**: `#AI`, `#large language models`, `#Anthropic`, `#model updates`, `#Claude`

---

<a id="item-6"></a>
## [Technical critique of Unix shell scenes in 'Tron: Legacy'](https://www.chiark.greenend.org.uk/~sgtatham/quasiblog/tron-legacy/) ⭐️ 7.0/10

A blog post provides a detailed technical analysis of the accuracy of the Unix shell commands and history mechanism depicted in the 2010 film 'Tron: Legacy', sparking detailed programmer discussion. This analysis highlights how Hollywood depicts technical systems, serving as a case study for programmers and film enthusiasts, and demonstrates the vibrant, precise interests of technical communities when evaluating pop culture. The critique examines specific commands shown in the film's shell interface, questioning their historical accuracy and coherence within Unix tradition, while community comments reveal differing interpretations regarding editor preferences (vi vs. emacs), lore-based explanations, and legal fair use.

hackernews · speckx · May 28, 19:15

**Background**: Unix is a foundational multi-user operating system family originating from Bell Labs in 1969. The shell is its command-line interface where users type text commands, and the history mechanism is a feature that records previously entered commands, allowing users to review or reuse them. Films often depict computer interfaces with varying degrees of technical accuracy to serve the narrative.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Unix">Unix - Wikipedia</a></li>
<li><a href="https://www.geeksforgeeks.org/linux-unix/history-command-in-linux-with-examples/">How to Display Command History in Linux | history ... - GeeksforGeeks</a></li>

</ul>
</details>

**Discussion**: The community discussion is highly engaged, with comments offering alternative lore-based explanations for technical scenes, debating the merits of different text editors (vi vs. emacs), analyzing potential real-world CVEs referenced in the film's login sequence, and appreciating the Daft Punk soundtrack.

**Tags**: `#Unix`, `#Technical Analysis`, `#Pop Culture`, `#Programming`, `#Movies`

---

<a id="item-7"></a>
## [Game Simulates AI Agent Permission Fatigue in 60 Seconds](https://llmgame.scalex.dev/) ⭐️ 7.0/10

A new browser-based game, 'Continue? Y/N,' was launched on Show HN, challenging players to make rapid permission decisions for an AI agent within a 60-second time limit to simulate approval fatigue. This interactive experience effectively highlights a critical and growing security challenge in AI agent design: as agents require more permissions to automate tasks, human operators can become overwhelmed, leading to dangerous auto-approval habits. Players identified that the game can be 'cheated' by rapidly denying all requests to achieve a perfect score, and they criticized specific security assumptions, such as deeming the `cat ~/.zshrc` command inherently unsafe, as misrepresenting real-world security hygiene.

hackernews · Wirbelwind · May 28, 13:02

**Background**: AI agents are autonomous systems designed to perform tasks by interacting with software, files, and services, which requires them to request user permissions. 'Approval fatigue' describes the phenomenon where humans, faced with a high volume of such permission prompts, begin to approve them reflexively without proper scrutiny, increasing security risks. This game simulates that exact pressure.

<details><summary>References</summary>
<ul>
<li><a href="https://www.reddit.com/r/cybersecurity/comments/1qzrase/when_ai_agents_go_rogue_the_approval_fatigue/">When AI Agents Go Rogue: The Approval Fatigue Problem Nobody's Solving - Reddit</a></li>
<li><a href="https://www.linkedin.com/posts/donelmartinez_the-human-in-the-loop-illusion-activity-7452329152528932864-7bk2">AI Agent Permission Prompts Lead to Approval Fatigue | Donel Martinez posted on the topic | LinkedIn</a></li>
<li><a href="https://mitsloan.mit.edu/ideas-made-to-matter/agentic-ai-explained">Agentic AI, explained | MIT Sloan</a></li>

</ul>
</details>

**Discussion**: The community discussion was highly engaged and critical; players found the game fun but pointed out specific flaws, such as the ability to 'win' by denying everything, mischaracterized commands (like `lsof`), and a lack of contextual grouping for permission requests that made scenarios feel unrepresentative. Some argued that many actions flagged as 'bad' in the game are commonly permitted in real-world work environments.

**Tags**: `#AI agents`, `#security`, `#game design`, `#permissions`, `#human-computer interaction`

---

<a id="item-8"></a>
## [GitHub bans security researcher who published Windows zero-day exploits](https://www.tomshardware.com/tech-industry/cyber-security/microsofts-github-bans-security-researcher-who-posted-zero-day-windows-exploits-because-company-ruined-their-life-expert-claims-action-is-vindictive-and-promises-further-retaliation) ⭐️ 7.0/10

GitHub has banned the account of a security researcher who posted proof-of-concept exploits for zero-day vulnerabilities in Windows, with the researcher claiming Microsoft's actions ruined their life. This incident highlights the escalating tensions between independent security researchers and large tech corporations over responsible disclosure, platform governance, and the ethical boundaries of bug hunting. The researcher, who claims to have used AI to help find the zero-days, allegedly acted out of a personal vendetta against Microsoft; the ban raises questions about whether GitHub, owned by Microsoft, now assumes editorial responsibility for removing exploits from its platform.

hackernews · possibilistic · May 28, 21:45

**Background**: A zero-day vulnerability is a software security flaw unknown to its vendor, which can be exploited by attackers before a fix is available. Bug bounty programs are initiatives where companies offer rewards to ethical hackers for responsibly reporting such vulnerabilities to help improve security.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Zero-day_vulnerability">Zero - day vulnerability - Wikipedia</a></li>
<li><a href="https://en.wikipedia.org/wiki/Bug_bounty_program">Bug bounty program - Wikipedia</a></li>

</ul>
</details>

**Discussion**: Community discussions reveal divided opinions: some commenters argue Microsoft is incentivized to pay bounties and the ban may be counterproductive, while others view the researcher's actions as unhinged or vindictive, fearing it could set a precedent where GitHub must police all exploit code.

**Tags**: `#cybersecurity`, `#GitHub`, `#bug-bounty`, `#security-research`, `#AI`

---

<a id="item-9"></a>
## [Identifying Typical Patterns in LLM-Generated Text](https://shvbsle.in/various-llm-smells/) ⭐️ 7.0/10

The article and community discussion provide a detailed catalog of recognizable linguistic patterns, or 'smells', in text generated by large language models, with specific examples and practical advice for identification. It equips users with practical tools to critically assess LLM output and highlights current limitations, helping to distinguish between genuinely useful content and generic AI patterns in professional writing and design. Key indicators include specific opening phrases like 'honest caveat:', the 'It's not X, it's Y' rhetorical structure (contrastive negation), and the overuse of certain terms like 'load bearing' or 'blast radius' outside their typical contexts.

hackernews · speckx · May 28, 19:02

**Background**: AI detection tools typically analyze statistical patterns and repetitive structures in text to identify LLM-generated content. However, these methods are not foolproof, with ongoing challenges in accurately distinguishing human-written text from advanced AI outputs as models evolve.

<details><summary>References</summary>
<ul>
<li><a href="https://www.linkedin.com/posts/rajeevsubramanian_the-new-llm-smell-test-for-content-if-activity-7432137266896031745-9h_j">Detecting AI- generated content with the LLM smell test | LinkedIn</a></li>
<li><a href="https://www.grammarly.com/blog/ai/how-do-ai-detectors-work/">How Do AI Detectors Work? Key Methods and Limitations | Grammarly</a></li>

</ul>
</details>

**Discussion**: Community members contributed specific examples of 'smells' (e.g., 'the smoking gun:') and offered nuanced advice: use LLMs to critique structure and style, but avoid directly copying their word choices to prevent homogenizing your own voice.

**Tags**: `#LLM`, `#AI detection`, `#writing style`, `#Hacker News`

---

<a id="item-10"></a>
## [Anthropic's run-rate revenue reaches $47 billion](https://simonwillison.net/2026/May/29/anthropic/#atom-everything) ⭐️ 7.0/10

In its Series H funding announcement, Anthropic revealed its run-rate revenue has surpassed $47 billion earlier this month, up sharply from $30 billion reported in April 2026. This hyper-growth rate is historically unprecedented for a company at this scale, indicating intense enterprise adoption of AI services and significantly impacting the competitive landscape and future investment in the AI industry. The run-rate revenue is an annualized projection calculated by multiplying the most recent month's revenue by 12, which provides a forward-looking growth indicator rather than a precise annual total. These figures were disclosed in official fundraise announcements to investors, making intentional misrepresentation highly unlikely due to securities regulations.

rss · Simon Willison · May 29, 01:23

**Background**: Run-rate revenue is a financial metric used to project a company's annual performance based on its most recent revenue data. Anthropic is a leading artificial intelligence company known for its Claude series of models and is experiencing explosive growth as enterprises increasingly integrate AI services. The company has been regularly disclosing this metric in its funding announcements to signal its growth trajectory.

<details><summary>References</summary>
<ul>
<li><a href="https://www.wallstreetprep.com/knowledge/run-rate-revenue/">Run Rate Revenue | Formula + Calculator</a></li>
<li><a href="https://www.investopedia.com/terms/r/runrate.asp">investopedia.com/terms/r/runrate.asp</a></li>

</ul>
</details>

**Discussion**: Some skepticism exists regarding the revenue figures, primarily because they are self-reported by Anthropic; however, a counterargument noted that misleading investors during a fundraise would constitute securities fraud. Other discussions highlight anecdotal evidence of massive AI spending, such as a client reportedly spending half a billion dollars in a single month on Claude licenses.

**Tags**: `#AI industry`, `#Business metrics`, `#Anthropic`, `#Revenue growth`

---

<a id="item-11"></a>
## [YouTube Adjusts AI Video Labels, Auto-Adds Tags for Undeclared Content](https://blog.youtube/news-and-events/improving-ai-labels-viewers-creators/) ⭐️ 7.0/10

Starting May 2026, YouTube will make AI labels more prominent for realistic AI-generated videos and automatically add them if creators fail to declare such content. This change enhances transparency for AI-generated content on a major platform and could influence industry standards for content labeling. For less realistic or minimally modified content, labels will remain in the expanded description; creators can correct labels, but those from YouTube AI tools or with C2PA metadata are permanent.

telegram · zaihuapd · May 28, 04:18

**Background**: C2PA is an industry standard for content provenance that provides a technical framework to verify the origin and edits of digital content. YouTube's policy update aims to address the growing need for transparency in AI-generated media.

<details><summary>References</summary>
<ul>
<li><a href="https://c2pa.org/">C 2 PA | Verifying Media Content Sources</a></li>
<li><a href="https://en.wikipedia.org/wiki/Content_Authenticity_Initiative">Content Authenticity Initiative - Wikipedia</a></li>

</ul>
</details>

**Tags**: `#AI-generated content`, `#content labeling`, `#YouTube`, `#digital media`, `#AI policy`

---

<a id="item-12"></a>
## [DOMD: Open-source Markdown WYSIWYG Editor with Custom 20KB Rendering Engine](https://github.com/do-md/domd) ⭐️ 7.0/10

DOMD is released as an open-source, local-first Markdown WYSIWYG editor featuring a custom-built 20KB rendering engine that supports AI integration via tools like domd-cli. This editor is significant because it introduces a novel rendering engine that is lightweight and fast, potentially enhancing developer productivity with its local-first approach and seamless AI capabilities for tasks like streaming text generation. The editor has a 20KB gzip kernel with no runtime dependencies except React, uses a single data source and immutable state for consistent performance across operations, and includes a Tauri-based macOS native version with Quick Look support for previewing files.

telegram · zaihuapd · May 28, 05:48

**Background**: Rich text editors commonly rely on frameworks like ProseMirror, Slate, or Lexical for WYSIWYG functionality, but DOMD builds its own rendering engine from scratch to achieve minimal size. Tauri is an open-source framework for building lightweight, secure desktop applications, and local-first software prioritizes storing data on the user's device for longevity and control, as opposed to cloud-centric models.

<details><summary>References</summary>
<ul>
<li><a href="https://liveblocks.io/blog/which-rich-text-editor-framework-should-you-choose-in-2025">Which rich text editor framework should you choose... | Liveblocks blog</a></li>
<li><a href="https://v1.tauri.app/">Build smaller, faster, and more secure desktop applications ... | Tauri v1</a></li>
<li><a href="https://www.inkandswitch.com/essay/local-first/">Local - first software : You own your data, in spite of the cloud</a></li>

</ul>
</details>

**Tags**: `#Markdown Editor`, `#Open Source`, `#Rendering Engine`, `#Local-First`, `#AI Integration`

---

<a id="item-13"></a>
## [NBA Plans AI System for Automatic Out-of-Bounds Calls](https://cybernews.com/ai-news/nba-ai-camera-out-of-bounds-replay-challenges/) ⭐️ 7.0/10

NBA Commissioner Adam Silver announced that the league will introduce an AI camera system, similar to Hawk-Eye technology, to automatically judge out-of-bounds plays without referee confirmation or coach challenges. This move could significantly improve fairness and efficiency in basketball officiating by reducing human error, and it sets a precedent for AI applications in real-time decision-making across sports and other industries. The system will use field-side cameras for instant ball possession determination, and while the exact implementation timeline is unspecified, Commissioner Silver stated it would be 'quite fast,' with referees shifting focus to subjective calls like fouls.

telegram · zaihuapd · May 28, 10:08

**Background**: Hawk-Eye is a computer vision system widely adopted in sports like tennis and cricket for ball tracking and officiating, enhancing accuracy since 2001. The NBA's plan to adopt similar AI technology represents an expansion into basketball, building on existing advancements in sports technology.

<details><summary>References</summary>
<ul>
<li><a href="https://en.wikipedia.org/wiki/Hawk-Eye">Hawk - Eye - Wikipedia</a></li>
<li><a href="https://www.hawkeyeinnovations.com/">Hawk - Eye | A global leader in the live sports arena</a></li>

</ul>
</details>

**Tags**: `#AI`, `#sports technology`, `#computer vision`, `#officiating`

---