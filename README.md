# Deepali Motwani — Personal Portfolio Website

Modern, high-performance personal portfolio website for **Deepali Motwani** — AI & Cloud Infrastructure Engineer, DevOps & Web Developer, and Business Professional.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**, designed specifically to highlight cloud observability, agentic AI systems, and business management credentials.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom Navy/Blue Brand Glassmorphism Palette
- **Icons**: Lucide React (`lucide-react`)
- **Deployment Target**: Vercel (Free Tier)

---

## 🚀 Local Development Setup

1. **Navigate to project folder**:
   ```bash
   cd deepali-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your web browser to view the live site.

4. **Test production static build locally**:
   ```bash
   npm run build
   ```

---

## 🖼️ Brand Assets & Customization

- **Monogram Logo**: Located at `public/logo.svg`. Sized at `w-10 h-10` (40px x 40px) in the sticky navigation bar.
- **Profile Photo**: Located at `public/profile-photo.jpg`. Rendered in the Hero Section with explicit dimensions (`w-48 h-48 sm:w-56 sm:h-56 rounded-2xl object-cover`).
- **Resume File**: Located at `public/resume.pdf`. Replace this placeholder with your official updated PDF resume file.

---

## ☁️ Deployment Instructions (Vercel Free Tier)

> [!IMPORTANT]
> **Domain Note**: Do **NOT** configure or connect the custom domain (`deepalimotwani.com`) yet. Follow steps 1 and 2 below to deploy to a free Vercel preview URL (`*.vercel.app`) for initial design and content review.

### Step 1: Push Project to GitHub

1. Create a new repository on [GitHub](https://github.com/new) named `deepali-portfolio`.
2. Initialize git and push the codebase:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Deepali Motwani portfolio website"
   git branch -M main
   git remote add origin https://github.com/deep-dev-12489/deepali-portfolio.git
   git push -u origin main
   ```

### Step 2: Import & Deploy on Vercel

1. Log in to [vercel.com](https://vercel.com) using your GitHub account.
2. Click **"Add New..."** -> **"Project"**.
3. Select the `deepali-portfolio` repository from your GitHub list.
4. Keep all default settings (Framework Preset: **Next.js**, Root Directory: `./`).
5. Click **"Deploy"**.
6. Within ~1 minute, Vercel will generate your live preview URL (e.g., `deepali-portfolio.vercel.app`).

---

*(Custom domain connection to `deepalimotwani.com` will be handled as a separate final step after live preview approval).*
