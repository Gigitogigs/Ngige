# Portfolio Website

A clean, professional portfolio for a junior backend developer built with React, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Clone or download this project**

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio-react/
├── src/
│   ├── components/         # React components
│   │   ├── Navbar.jsx     # Navigation bar
│   │   ├── Hero.jsx       # Hero section
│   │   ├── About.jsx      # About section
│   │   ├── Skills.jsx     # Skills section
│   │   ├── Projects.jsx   # Projects section
│   │   ├── HowIWork.jsx   # How I Work section
│   │   ├── Contact.jsx    # Contact section
│   │   └── Footer.jsx     # Footer
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── vite.config.js         # Vite configuration
```

## 🎨 Customization Guide

### 1. Personal Information

**Navbar & Hero** (`src/components/Navbar.jsx` & `src/components/Hero.jsx`):
- Replace "Your Name" with your actual name
- Update the hero description

**Contact Links** (`src/components/Contact.jsx`):
```javascript
const contactLinks = [
  {
    icon: '📧',
    label: 'Email',
    href: 'mailto:YOUR_EMAIL@example.com'  // ← Update this
  },
  {
    icon: '💻',
    label: 'GitHub',
    href: 'https://github.com/YOUR_USERNAME'  // ← Update this
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/YOUR_PROFILE'  // ← Update this
  }
]
```

### 2. Projects

Edit `src/components/Projects.jsx`:

```javascript
const projects = [
  {
    type: 'Backend API',
    title: 'Your Project Name',
    description: 'Your project description...',
    tech: ['Python', 'Django', 'REST API', 'PostgreSQL'],
    github: 'https://github.com/you/project',
    live: 'https://your-project.com'  // Optional
  },
  // Add more projects...
]
```

### 3. Skills

Edit `src/components/Skills.jsx` to match your actual skills:

```javascript
const skillCategories = [
  {
    title: 'Backend & APIs',
    skills: ['Python', 'Django', 'REST APIs', 'Java']
  },
  // Modify or add categories...
]
```

### 4. Colors & Theme

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  'bg-primary': '#0a0a0a',      // Main background
  'bg-secondary': '#111111',    // Secondary background
  'bg-card': '#141414',         // Card background
  'text-primary': '#e8e8e8',    // Main text
  'text-secondary': '#a0a0a0',  // Secondary text
  'accent': '#4a9eff',          // Accent color (links, buttons)
  'accent-hover': '#6bb1ff',    // Accent hover state
  'border': '#222222',          // Border color
}
```

### 5. About Section

Edit `src/components/About.jsx` to tell your story.

### 6. How I Work Section

Edit `src/components/HowIWork.jsx` to share your work philosophy.

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Tailwind CSS 3** - Utility-first CSS
- **Framer Motion** - Smooth animations
- **Vite** - Fast build tool

## 📝 Tips for Development

### Hot Reload
Changes automatically reload in the browser while `npm run dev` is running.

### Component Structure
Each section is a separate component for easy maintenance and reusability.

### Animations
Framer Motion provides smooth scroll animations. Adjust timing in component files:

```javascript
transition={{ delay: 0.1 }}  // Adjust delay
viewport={{ once: true }}     // Animate only once
```

### Responsive Design
Tailwind's responsive prefixes (`md:`, `lg:`) handle different screen sizes:

```javascript
className="text-2xl md:text-4xl lg:text-5xl"
// Mobile: 2xl, Tablet: 4xl, Desktop: 5xl
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Vite and deploys

### Deploy to Netlify

1. Run `npm run build`
2. Drag the `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages

Install gh-pages:
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"scripts": {
  "deploy": "vite build && gh-pages -d dist"
}
```

Deploy:
```bash
npm run deploy
```

## 📧 Support

If you need help customizing or have questions, feel free to reach out!

## 📄 License

Free to use for your personal portfolio.
