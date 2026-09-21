export const personalInfo = {
  name: "Sachin Kumar",
  title: "Full-Stack Developer | AI/ML Enthusiast | Generative AI",
  badge: "FULL-STACK DEVELOPER • AI/ML • GENERATIVE AI",
  headline: "Building scalable applications and intelligent AI experiences.",
  subheading:
    "I'm Sachin Kumar, a Computer Science Engineering student and Full-Stack Developer experienced in React, Node.js, Express.js, MongoDB, REST APIs and Generative AI.",
  bio: "Computer Science Engineering student with hands-on experience as a Full-Stack Developer Intern at Pitavya Pvt Ltd, building scalable web applications and RESTful APIs using React.js, Node.js, Express.js, and MongoDB. Skilled in JWT authentication, database design, API testing with Postman and Swagger, and developing secure backend services. Oracle Cloud Infrastructure 2025 Certified Generative AI Professional with a strong foundation in Data Structures, Algorithms, and problem-solving.",
  contact: {
    phone: "+91 6299128582",
    location: "Bhopal, Madhya Pradesh, India",
    email: "krsachin9876@gmail.com",
    github: "https://github.com/sachinhq",
    linkedin: "https://www.linkedin.com/in/sachin-kumar-5440511b8",
    codechef: "https://www.codechef.com/users/sachinnick9876",
    githubUsername: "sachinhq",
    codechefUsername: "sachinnick9876",
  },
  resumeUrl: "/resume/Sachin-CV.pdf",
  profileImage: "/sachin.jpg",
};

export const aboutPillars = [
  {
    title: "Full-Stack Development",
    icon: "Layers",
    description:
      "Architecting end-to-end web applications with modern React frontends, robust Node/Express backends, and responsive UI components.",
    color: "cyan",
  },
  {
    title: "Backend Engineering",
    icon: "Server",
    description:
      "Engineering clean RESTful APIs, securing endpoints with JWT & RBAC, optimizing MongoDB queries, and designing scalable schema architecture.",
    color: "blue",
  },
  {
    title: "Generative AI & LLMs",
    icon: "BrainCircuit",
    description:
      "OCI 2025 Certified Generative AI Professional. Building RAG workflows, prompt pipelines, speech recognition (Whisper) and TTS integrations.",
    color: "purple",
  },
  {
    title: "Problem Solving & DSA",
    icon: "Code2",
    description:
      "Strong algorithmic foundation in Data Structures & Algorithms, practicing competitive programming and performance-critical system design.",
    color: "emerald",
  },
];

export const experience = [
  {
    company: "Pitavya Pvt Ltd",
    role: "Full-Stack Developer Intern",
    period: "September 2025 – Present",
    location: "Remote / Hybrid",
    status: "Present",
    description:
      "Building and maintaining production-grade financial web services, securing endpoints, and optimizing high-volume database queries.",
    achievements: [
      "Developed and maintained 10+ REST APIs using Node.js and Express.js for income, expense, and transaction management.",
      "Implemented JWT authentication and role-based access control securing access for 100+ users.",
      "Designed MongoDB schemas and optimized queries, reducing API response times by approximately 25%.",
      "Used Postman and Swagger to test and document 20+ API endpoints.",
      "Collaborated with an agile team of 4 developers to deliver new expense-tracking features.",
    ],
    metrics: [
      { value: "10+", label: "REST APIs" },
      { value: "100+", label: "Users Secured" },
      { value: "20+", label: "Endpoints Tested" },
      { value: "25%", label: "Response Improvement" },
      { value: "4", label: "Developer Team" },
    ],
    techStack: ["Node.js", "Express.js", "MongoDB", "React.js", "JWT", "REST APIs", "Postman", "Swagger"],
  },
];

export const technicalSkills = [
  {
    category: "PROGRAMMING",
    icon: "Terminal",
    skills: [
      { name: "JavaScript (ES6+)", level: 90, tag: "Primary" },
      { name: "Python", level: 85, tag: "AI/Data" },
      { name: "Java", level: 80, tag: "OOP/DSA" },
      { name: "C++", level: 75, tag: "Algorithms" },
    ],
  },
  {
    category: "FRONTEND",
    icon: "Layout",
    skills: [
      { name: "React.js", level: 90, tag: "Framework" },
      { name: "HTML5 & Semantic Web", level: 95, tag: "Core" },
      { name: "CSS3 & Modern Layouts", level: 90, tag: "Styling" },
      { name: "Tailwind CSS", level: 90, tag: "Utility-First" },
    ],
  },
  {
    category: "BACKEND",
    icon: "Server",
    skills: [
      { name: "Node.js", level: 88, tag: "Runtime" },
      { name: "Express.js", level: 88, tag: "Framework" },
      { name: "REST API Development", level: 92, tag: "Architecture" },
      { name: "JWT & RBAC Auth", level: 90, tag: "Security" },
    ],
  },
  {
    category: "DATABASES",
    icon: "Database",
    skills: [
      { name: "MongoDB & Mongoose", level: 88, tag: "NoSQL" },
      { name: "SQL & Relational Design", level: 80, tag: "RDBMS" },
      { name: "Database Schema Optimization", level: 85, tag: "Performance" },
      { name: "Aggregation Pipelines", level: 82, tag: "Analytics" },
    ],
  },
  {
    category: "DEVELOPER TOOLS",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", level: 88, tag: "VCS" },
      { name: "Postman", level: 92, tag: "Student Expert" },
      { name: "Swagger / OpenAPI", level: 85, tag: "Documentation" },
      { name: "MongoDB Compass", level: 85, tag: "DB Client" },
    ],
  },
  {
    category: "AI & NLP",
    icon: "Brain",
    skills: [
      { name: "LLMs (GPT-based systems)", level: 86, tag: "Generative AI" },
      { name: "RAG (Retrieval-Augmented)", level: 84, tag: "Context" },
      { name: "Whisper (Speech-to-Text)", level: 80, tag: "Audio AI" },
      { name: "Microsoft TTS", level: 80, tag: "Synthesis" },
    ],
  },
];

export const aiPipelineSteps = [
  {
    id: "user",
    title: "1. User Query",
    short: "USER",
    desc: "Natural language input query or audio prompt received from client application.",
    badge: "Client Layer",
  },
  {
    id: "prompt",
    title: "2. Prompt Engineering",
    short: "PROMPT",
    desc: "System instruction framing, few-shot conditioning, and guardrail validation.",
    badge: "Instruction Tuning",
  },
  {
    id: "llm",
    title: "3. LLM Reasoning",
    short: "LLM",
    desc: "Generative transformer processing, semantic attention, and token probability sampling.",
    badge: "Foundation Model",
  },
  {
    id: "rag",
    title: "4. RAG & Context",
    short: "RAG / CONTEXT",
    desc: "Vector embeddings retrieval from knowledge stores to prevent hallucinations.",
    badge: "Semantic Search",
  },
  {
    id: "response",
    title: "5. Structured Response",
    short: "RESPONSE",
    desc: "Post-processed markdown, JSON schema adherence, and streaming output.",
    badge: "Synthesis",
  },
  {
    id: "tts",
    title: "6. TTS & Multimodal Output",
    short: "TTS / APPLICATION",
    desc: "Acoustic synthesis via Microsoft TTS / Whisper integration for voice feedback.",
    badge: "Multimodal Voice",
  },
];

export const projects = [
  {
    id: "kamai-kharcha",
    name: "Kamai-Kharcha",
    subtitle: "Expense Management System",
    category: "Full-Stack Application",
    badge: "Flagship Production System",
    isConcept: false,
    description:
      "A full-stack financial tracking application with secure authentication and group-based expense workflows designed for scalable, multi-user budgeting.",
    problem:
      "Traditional personal finance tracking is fragmented: users lack intuitive group-split workflows, face insecure session handling, and experience lagging aggregation queries when calculating high-volume monthly balances.",
    solution:
      "Engineered an end-to-end MERN architecture integrating role-based JWT authentication, modular REST endpoints for income/expenses, and optimized MongoDB aggregation pipelines with automated sub-second reconciliations.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST APIs",
      "Tailwind CSS",
    ],
    features: [
      "Expense tracking with dynamic categorization and monthly spend breakdowns",
      "Income & recurring cash-flow management with real-time balance calculations",
      "Transaction history with fast multi-attribute filtering and pagination",
      "Group-based expense workflows for shared household/team budgets",
      "Secure JWT authentication with HttpOnly cookies & role-based access control",
      "Optimized MongoDB indexing resulting in fast API response times",
      "Fully responsive, mobile-first dashboard with reactive data visualization",
    ],
    architecture: {
      frontend: "React 18 Dashboard & Dynamic State Management",
      gateway: "Express.js RESTful API Routing & Rate Limiting",
      auth: "JWT Middleware & Role-Based Access Control (RBAC)",
      database: "MongoDB with Mongoose Schemas & Aggregation Pipelines",
      testing: "Postman Automated Test Suites & Swagger OpenAPI 3.0",
    },
    github: "https://github.com/sachinhq",
    demo: null,
  },
  {
    id: "ai-doc-assistant",
    name: "AI Document Assistant",
    subtitle: "Retrieval-Augmented Generation Knowledge Base",
    category: "AI & Generative AI",
    badge: "AI/LLM Project Concept",
    isConcept: true,
    conceptLabel: "AI/LLM Project Concept",
    description:
      "A retrieval-augmented AI assistant designed to retrieve relevant information from dense technical documents and generate contextual, grounded responses.",
    problem:
      "Engineering teams and analysts waste hours reading multi-page technical manuals, specifications, and reports to answer precise domain questions, while basic LLMs hallucinate without grounded context.",
    solution:
      "Designed a vector retrieval architecture combining PDF chunking, embedding generation, top-k semantic similarity search, and citation-backed LLM prompt synthesis.",
    technologies: [
      "Python",
      "LLM",
      "RAG",
      "Vector Search",
      "Embeddings",
      "Prompt Engineering",
    ],
    features: [
      "Semantic document chunking with configurable overlap thresholds",
      "Vector similarity search for sub-second relevant context retrieval",
      "Hallucination mitigation via strict source citation requirements",
      "Interactive multi-turn conversation memory with document grounding",
      "Designed for enterprise compliance and verifiable output validation",
    ],
    architecture: {
      frontend: "Chat Interface with Inline Document Citations",
      retrieval: "Vector Database Semantic Search & Reranking",
      llm: "Prompt Augmented Context Assembly & Generation Pipeline",
      documents: "PDF/Doc Chunking & Embedding Generator",
    },
    github: "https://github.com/sachinhq",
    demo: null,
  },
  {
    id: "ai-voice-assistant",
    name: "AI Voice Assistant",
    subtitle: "Multimodal Speech-to-Speech Intelligent Agent",
    category: "AI & Generative AI",
    badge: "Concept / Prototype",
    isConcept: true,
    conceptLabel: "Concept / Prototype",
    description:
      "Voice-based AI interaction pipeline combining speech recognition, LLM-based response generation and realistic text-to-speech synthesis.",
    problem:
      "Voice interfaces often feel robotic and disjointed due to latency in the transcription-inference-synthesis cascade and poor conversational context retention.",
    solution:
      "Conceived an integrated voice loop pairing OpenAI Whisper for resilient acoustic transcription, low-latency LLM stream processing, and Microsoft TTS for emotive acoustic synthesis.",
    technologies: [
      "LLM",
      "Whisper (STT)",
      "Microsoft TTS",
      "Python",
      "Audio Streaming",
      "REST APIs",
    ],
    features: [
      "Acoustic noise-resistant speech recognition via Whisper models",
      "Low-latency streaming token generation from LLM backend",
      "Natural vocal synthesis utilizing Microsoft Cognitive Speech TTS",
      "Contextual dialogue state manager preserving multi-turn conversational intent",
      "Modular pipeline adaptable to customer support and accessibility tools",
    ],
    architecture: {
      audioInput: "Microphone Audio Buffer & Noise Gate",
      transcription: "Whisper STT Acoustic Model",
      reasoning: "LLM Contextual Dialogue Engine",
      synthesis: "Microsoft TTS Voice Synthesis Pipeline",
    },
    github: "https://github.com/sachinhq",
    demo: null,
  },
  {
    id: "rest-auth-platform",
    name: "REST API & Auth Platform",
    subtitle: "Production Security & API Microservice",
    category: "Backend Engineering",
    badge: "Backend Architecture",
    isConcept: false,
    description:
      "A robust, scalable backend service architecture demonstrating production-grade JWT authentication, RBAC authorization, MongoDB query optimization, and Swagger API documentation.",
    problem:
      "Building backend services without strict schema validation, standardized error handling, and robust token invalidation invites security vulnerabilities and scaling bottlenecks.",
    solution:
      "Implemented a hardened Node.js/Express boilerplate featuring JWT access/refresh token patterns, role-based route guards, automated schema sanitation, and comprehensive OpenAPI specs.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Swagger",
      "Postman",
    ],
    features: [
      "Stateless JWT authentication with cryptographic signature verification",
      "Fine-grained Role-Based Access Control (RBAC) middleware",
      "Interactive Swagger OpenAPI 3.0 documentation suite",
      "20+ tested REST endpoints with Postman automation collections",
      "Input validation, sanitization, and structured HTTP error responses",
      "MongoDB index design achieving high throughput and low query latency",
    ],
    architecture: {
      gateway: "Express Middleware Chain (CORS, Rate Limit, Helmet)",
      security: "JWT Verification, Password Hashing (bcrypt), RBAC Guard",
      dataAccess: "Mongoose ODM with Query Indexes & Projections",
      documentation: "Swagger UI & Postman Collection Runner",
    },
    github: "https://github.com/sachinhq",
    demo: null,
  },
];

export const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional (OCP)",
    issuer: "Oracle University",
    date: "October 2025",
    badgeId: "OCI-GENAI-2025",
    icon: "ShieldCheck",
    color: "amber",
    description:
      "Demonstrates expertise in Large Language Models (LLMs), prompt engineering, fine-tuning, RAG architecture, and deploying enterprise generative AI solutions on Oracle Cloud Infrastructure.",
    skillsCovered: [
      "Generative AI Architecture",
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "OCI AI Services",
    ],
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "November 2024",
    badgeId: "POSTMAN-EXPERT-2024",
    icon: "CheckCircle2",
    color: "orange",
    description:
      "Certified mastery in REST API fundamentals, executing HTTP requests, scripting automated Postman tests, mocking APIs, and documenting collections.",
    skillsCovered: [
      "REST API Design & Testing",
      "Automated Test Scripts",
      "Postman Collections",
      "API Documentation",
      "Variables & Environments",
    ],
  },
];

export const education = {
  degree: "B.Tech — Computer Science Engineering",
  institution: "Technocrats Institute of Technology, Bhopal",
  period: "2023 – 2027",
  cgpa: "7.2",
  location: "Bhopal, Madhya Pradesh",
  details: [
    "Core Focus: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Operating Systems.",
    "Active participant in technical workshops, hackathons, and backend engineering cohorts.",
  ],
  secondaryEducation: [
    { level: "12th Standard (CBSE)", score: "76%" },
    { level: "10th Standard (CBSE)", score: "93.2%" },
  ],
  languages: [
    { name: "English", fluency: "Fluent (Professional Working)" },
    { name: "Hindi", fluency: "Fluent (Native)" },
  ],
};

export const problemSolving = {
  headline: "Algorithmic Precision & Clean Architecture",
  summary:
    "Strong technical intuition developed through disciplined practice in Data Structures, Algorithms, and high-performance backend design.",
  codechefUrl: "https://www.codechef.com/users/sachinnick9876",
  codechefUser: "sachinnick9876",
  pillars: [
    {
      title: "Data Structures & Algorithms",
      desc: "Arrays, Linked Lists, Trees, Graphs, Dynamic Programming, and Sorting/Searching optimization in C++ and Java.",
    },
    {
      title: "Backend System Architecture",
      desc: "Designing resilient REST APIs, decoupled service boundaries, and idempotent route handlers in Node.js.",
    },
    {
      title: "Database Design & Optimization",
      desc: "Schema normalization, compound indexing, query optimization, and aggregation pipelines in MongoDB & SQL.",
    },
    {
      title: "API Design & Security",
      desc: "JWT authentication, token expiration strategies, RBAC authorization, and input sanitization.",
    },
  ],
};
