# Ngige Mwaniki - Software Developer Portfolio

A modern, high-performance portfolio website built to showcase my work as a Junior Software Developer specializing in Backend Development (Python/Django) and Full-Stack Engineering.

## ✨ Key Features

- **Interactive Design**: Glassmorphic UI with smooth scroll animations using `framer-motion`.
- **Hero Section**: Responsive split layout featuring a professional profile visual with decorative elements.
- **Infinite Skills Scroller**: Auto-scrolling marquee displaying my technical stack (Python, Java, Spring Boot, PostgreSQL, etc.) with brand colors on hover.
- **Dynamic Projects**: Featured work section with links to GitHub repositories and live deployments.
- **Interactive Cards**: "About Me" and "How I Work" sections feature hover-triggered glow effects and pop-up animations for a premium feel.
- **Downloadable CV**: Direct link to download my resume from the Contact section.
- **Responsive**: Fully optimized for mobile, tablet, and desktop devices.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) (v18)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Gigitogigs/portfolio-react.git
    cd portfolio-react
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173`.

## 📁 Project Structure

```bash
portfolio-react/
├── public/
│   └── resume.pdf         # Downloadable CV file
├── src/
│   ├── assets/            # Images (profile.png, etc.)
│   ├── components/        # React Components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx     # Infinite scroller logic
│   │   ├── Projects.jsx
│   │   ├── HowIWork.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx            # Main Layout
│   ├── main.jsx           # Entry Point
│   └── index.css          # Tailwind Directives & Global Styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🚢 Deployment

This project is optimized for deployment on Vercel, Netlify, or GitHub Pages.

To build for production:

```bash
npm run build
```

The output will be in the `dist/` directory, ready to be served.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
