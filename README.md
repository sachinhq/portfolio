# Sachin Kumar — Full-Stack Developer & Generative AI Portfolio

[![React](https://img.shields.io/badge/React-19-61dafb.svg?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff.svg?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8.svg?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff0055.svg?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![OCI Certified](https://img.shields.io/badge/Oracle_Cloud-2025_GenAI_Professional-F80000.svg?style=flat-square&logo=oracle)](https://www.oracle.com/cloud/)
[![Postman Expert](https://img.shields.io/badge/Postman-API_Student_Expert-FF6C37.svg?style=flat-square&logo=postman)](https://www.postman.com/)

A modern, production-grade personal portfolio website showcasing **Full-Stack Engineering**, **Backend Systems**, **REST API Architecture**, and **Generative AI / LLM Workflows**.

---

## 🌟 Highlights

- **Live Interactive Developer Terminal**: Sequential typing bash CLI supporting tabs (`bash` & `profile.json`), copy-to-clipboard, and developer status indicator.
- **Flagship Showcase (Kamai-Kharcha)**: Comprehensive architectural breakdown illustrating React client state, REST routing, JWT & RBAC security, and MongoDB aggregations.
- **Interactive Generative AI Pipeline**: Step-by-step simulator tracing queries across `USER` ➔ `PROMPT` ➔ `LLM` ➔ `RAG / CONTEXT` ➔ `RESPONSE` ➔ `TTS / APPLICATION` with live console telemetry.
- **Interactive AI Skill Map**: Clickable end-to-end pipeline (`LLM` ➔ `RAG` ➔ `NLP` ➔ `STT` ➔ `TTS`) with technical node inspection.
- **Verified Experience Metrics**: Documented achievements from internship at **Pitavya Pvt Ltd** (`10+` REST APIs, `100+` Users Secured, `20+` Endpoints Tested, `~25%` Query Optimization).
- **Executive Dark & Light Mode**: Default dark theme (`#07090e`) with high-contrast executive light mode, persisted via `localStorage`.
- **Dynamic Neural Background**: Lightweight canvas particle connections with interactive mouse spotlight and `prefers-reduced-motion` compliance.
- **Fully Responsive & Accessible**: Flawless layout scaling across mobile (320px), tablet (768px), and 4K desktop displays with ARIA standards and keyboard navigation.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend** | React 19, HTML5, CSS3, Tailwind CSS, Lucide React, Framer Motion |
| **Backend** | Node.js, Express.js, REST API Development, JWT Authentication, RBAC |
| **Databases** | MongoDB, Mongoose, SQL, Aggregation Pipelines |
| **AI & NLP** | LLMs (GPT-based), RAG, OpenAI Whisper (STT), Microsoft TTS, Prompt Engineering |
| **Developer Tools** | Git, GitHub, Postman, Swagger / OpenAPI, MongoDB Compass, Vite |

---

## 📁 Directory Architecture

```
Portfolio/
├── public/
│   ├── sachin.jpg                 # Profile image
│   ├── resume/
│   │   └── Sachin-CV.pdf          # Resume document
│   └── favicon.svg
├── src/
│   ├── assets/                    # Static assets
│   ├── components/
│   │   ├── ArchitectureDiagram.jsx# MERN + JWT RBAC pipeline diagram
│   │   ├── BrandIcons.jsx         # Custom SVG brand icons (GitHub, LinkedIn, CodeChef)
│   │   ├── Footer.jsx             # Recruiter-friendly footer
│   │   ├── InteractiveTerminal.jsx# Live simulated developer CLI
│   │   ├── Navbar.jsx             # Floating glassmorphism navbar & mobile drawer
│   │   ├── NetworkBackground.jsx  # Interactive neural canvas backdrop
│   │   ├── ProjectModal.jsx       # Deep architecture breakdown modal
│   │   └── ThemeToggle.jsx        # Dark/Light mode switcher
│   ├── data/
│   │   └── portfolioData.js       # Central data store for verified portfolio achievements
│   ├── hooks/
│   │   └── useTheme.js            # Theme management hook with persistence
│   ├── sections/
│   │   ├── About.jsx              # Academic milestones & engineering pillars
│   │   ├── AiShowcase.jsx         # "Exploring the Future of AI" simulator
│   │   ├── Certifications.jsx     # OCI GenAI 2025 & Postman Expert credentials
│   │   ├── Contact.jsx            # Quick-copy tools & contact form
│   │   ├── Education.jsx          # B.Tech CSE timeline & coursework
│   │   ├── Experience.jsx         # Pitavya Pvt Ltd internship & verified metrics
│   │   ├── GithubSection.jsx      # Public GitHub profile & contribution rhythm
│   │   ├── Hero.jsx               # Headline, badge, CTAs & terminal visual
│   │   ├── ProblemSolving.jsx     # DSA foundations & CodeChef profile
│   │   └── Skills.jsx             # Categorized skills matrix & AI pipeline map
│   ├── App.jsx                    # Root layout
│   ├── index.css                  # Custom Tailwind styles & glassmorphism
│   └── main.jsx                   # React entrypoint
├── index.html                     # SEO metadata, Open Graph, Twitter cards
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended, tested on v25)
- npm or yarn

### Installation & Local Run

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sachinhq/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The optimized static build will be generated in `dist/`.

---

## 📄 Adding Your Resume

Place your official resume PDF named `Sachin-CV.pdf` inside:
```
public/resume/Sachin-CV.pdf
```
It will automatically be downloadable when clicking **"Download Resume"** on the hero banner.

---

## 📬 Contact & Socials

- **Developer**: Sachin Kumar
- **Role**: Full-Stack Developer | AI/ML Enthusiast | Generative AI
- **Location**: Bhopal, Madhya Pradesh, India
- **Email**: [krsachin9876@gmail.com](mailto:krsachin9876@gmail.com)
- **GitHub**: [@sachinhq](https://github.com/sachinhq)
- **LinkedIn**: [Sachin Kumar](https://www.linkedin.com/in/sachin-kumar-5440511b8)
- **CodeChef**: [@sachinnick9876](https://www.codechef.com/users/sachinnick9876)

---

## 📝 License

This project is open-source under the [MIT License](LICENSE).
