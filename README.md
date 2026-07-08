# VeriFact AI — Full-Stack AI Fact-Checking & Credibility SaaS

[![Next.js 15](https://img.shields.io/badge/Next.js%2015-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Python 3.10+](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org/)
[![Docker Compose](https://img.shields.io/badge/Docker_Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

**VeriFact AI** is a modern, enterprise-grade SaaS web application built to combat online misinformation, clickbait, and manipulated content. Using forensic NLP analysis, multi-source credibility cross-referencing, and step-by-step reasoning, VeriFact AI helps researchers, journalists, and everyday users verify news articles, X/Twitter posts, Facebook updates, Instagram captions, and freeform text claims in real-time.

---

## 🌟 Key Features

- **Multi-Platform Input Verification**: Paste content directly from news articles, X/Twitter, Facebook, Instagram, or arbitrary text claims.
- **Forensic Verdict & Confidence Gauge**: Instant classification into `True`, `Likely True`, `Unverified`, `Misleading`, or `False` with step-by-step logical reasoning and highlighted suspicious sentences.
- **Multi-Tier Source Cross-Referencing**: Automatic lookup and ranking across Government agencies, peer-reviewed academic papers, established news organizations (Reuters, AP, WHO, Nature), and official registries.
- **Claim Breakdown Matrix**: Deconstructs complex multi-sentence posts into individual factual sub-claims with independent verdicts.
- **Deep NLP & Bias Diagnostics**:
  - **Clickbait Score** (0–100%)
  - **Emotional Language & Sensationalism Detection**
  - **Political Slant & Framing Analysis**
  - **Source Credibility Index**
- **Evidence Timeline**: Interactive chronological visualization showing how evidence and reporting evolved over time.
- **Print-Ready PDF Export & Sharing**: Export formal verification dossiers as high-fidelity PDF reports or shareable URLs.
- **Dark & Light Mode Support**: Seamless minimalist white & royal blue SaaS aesthetic designed with accessibility and aesthetics in mind.

---

## 🏗️ System Architecture

```
VeriFact-AI/
├── docker-compose.yml       # Production & Local Container Orchestration
├── backend/                 # Python FastAPI AI Verification Service
│   ├── app/
│   │   ├── main.py          # Entrypoint & API documentation (/docs)
│   │   ├── schemas/         # Pydantic v2 data models
│   │   ├── services/        # AI NLP engine, credibility scorer, trusted sources
│   │   └── api/v1/          # REST endpoints (/analyze, /history, /examples)
│   ├── requirements.txt
│   └── Dockerfile
└── frontend/                # Next.js 15 App Router Frontend
    ├── src/
    │   ├── app/             # 8 full SaaS pages (Landing, Dashboard, History, Pricing, etc.)
    │   ├── components/      # Reusable UI/UX & Fact-Checking visual components
    │   └── lib/             # API clients & TypeScript types
    └── Dockerfile
```

---

## 🚀 Quick Start (Locally or with Docker)

### Option A: One-Click Docker Compose (Recommended)
Make sure Docker is running, then run:
```bash
docker-compose up --build
```
- **Frontend App**: http://localhost:3000
- **FastAPI OpenAPI Swagger Docs**: http://localhost:8000/docs

### Option B: Local Development Setup

#### 1. Start Python Backend (Port 8000)
```bash
cd backend
python -m venv venv
# Windows:
venv\Scripts\activate
# Linux/macOS:
# source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

#### 2. Start Next.js Frontend (Port 3000)
```bash
cd frontend
npm install
npm run dev
```

---

## 📚 API Endpoints Overview

- `POST /api/v1/factcheck/analyze` — Run comprehensive forensic analysis on any text or URL claim.
- `GET /api/v1/factcheck/examples` — Retrieve curated sample claims (True, Misleading, False, Unverified) for testing.
- `GET /api/v1/factcheck/history` — List past verified claims and audit logs.
- `GET /api/v1/factcheck/stats` — Global verification metrics and accuracy index.

---

## 📄 License & Terms of Use (Lisensi & Aturan Penggunaan)

This project is licensed under the **VeriFact AI Attribution-NonCommercial License** — see the [LICENSE](LICENSE) file for details.

### ✅ You are FREE to:
- **Use & Study**: Deploy, run, and explore the application for personal, academic, journalism, or research purposes.
- **Modify & Improve**: Fork the repository, add new features, or experiment with custom NLP & RAG pipelines.
- **Share & Distribute**: Share copies or forks publicly **provided that proper credit/attribution is given to the original repository and author ([Arterouss](https://github.com/Arterouss))**.

### 🚫 STRICTLY PROHIBITED:
- **No Commercial Sale or Resale**: You **cannot** sell, repackage, sublicense, or monetize this software (or derivatives) as a paid SaaS product, enterprise tool, or commercial package.
- **No Attribution Removal**: Removing original copyright notices or author attribution is strictly forbidden.

> Built with ❤️ by **[Arterouss](https://github.com/Arterouss)** for open, transparent, and non-commercial truth verification.

