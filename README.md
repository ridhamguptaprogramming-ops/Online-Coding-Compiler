# ⚡ CodeArena — Premium Online Compiler & Visualizer

CodeArena is a high-performance, aesthetically premium online code compiler and execution visualizer built for the modern developer. It provides a zero-setup, enterprise-grade sandbox environment right in your browser, featuring a Vercel-inspired UI with sophisticated glassmorphism and real-time execution tracing.

![CodeArena Banner](https://img.shields.io/badge/CodeArena-Premium--v2.0-0070f3?style=for-the-badge&logo=codeforces)
![SolidJS](https://img.shields.io/badge/Built%20with-SolidJS-2c4f7c?style=for-the-badge&logo=solid)
![TailwindCSS](https://img.shields.io/badge/Styled%20with-Tailwind-38bdf8?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/Language-TypeScript-3178c6?style=for-the-badge&logo=typescript)

## ✨ Core Features

### 🚀 High-Performance Editor
- **Monaco Engine**: Powered by the same engine behind VS Code for professional-grade IntelliSense, code folding, and bracket matching.
- **Multi-Language Support**: Write and execute code in **Java, Python 3, C++, and C**.
- **Workspace Persistence**: Your files, themes, and font preferences are automatically synced to local storage.
- **Tabbed Interface**: Manage multiple files simultaneously with an intuitive sidebar explorer.

### 🧭 Execution Visualizer
- **Step-by-Step Tracing**: Don't just run code—watch it happen. Trace memory, variables, and stack frames dynamically.
- **Timeline Control**: Move forward and backward through your algorithm's execution flow.
- **Stack Registry**: Real-time visualization of function calls and recursion depths.

### 🌗 Adaptive Theming
- **Global Sync**: Toggle between **Light** and **Dark** modes across the entire platform with one click.
- **Vercel Aesthetics**: Sophisticated Slate/Dark palette with mesh gradients and soft-glow bento grids.
- **Monaco Themes**: Specifically matched editor themes (`vs-dark` and `github-light`) for maximum readability.

## 🛠️ Technology Stack

- **Frontend**: [SolidJS](https://www.solidjs.com/) (Reactive & Lightweight)
- **Editor**: [Monaco Editor](https://microsoft.github.io/monaco-editor/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Icons**: [Lucide Solid](https://lucide.dev/guide/packages/lucide-solid)
- **Animations**: [Solid MotionOne](https://motion.dev/solid/quick-start)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the Repo**
   ```bash
   git clone https://github.com/CodeNinja-194/CodeArena.git
   cd CodeArena
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Launch the Engine**
   ```bash
   npm run dev
   ```

## 📂 Project Structure

- `/src/pages`: Main application views (Landing, Editor, About, Visualizer).
- `/src/editor`: Monaco wrapper and toolbar logic.
- `/src/visualization`: Logic for tracing and rendering the execution stack.
- `/src/services`: Abstraction for code execution and local storage management.
- `/src/ui`: High-level UI components (Navbar, Button, Panels).

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Designed with ❤️ for the global community by **CodeNinja-194**.
All Systems Operational 🟢
