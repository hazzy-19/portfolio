# Peter Anyona — Portfolio

Personal portfolio website for **Peter Anyona**, a website designer and developer based in Nakuru, Kenya. Built with React + Vite + Tailwind CSS.

## 🔗 Live Site

[peteranyona.co.ke](https://peteranyona.co.ke) <!-- update when deployed -->

## 🧱 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Sticky nav with mobile menu
│   ├── Hero.jsx            # Landing section with ThinkingOrb graphic
│   ├── About.jsx           # Bio and profile photo
│   ├── Projects.jsx        # Project showcase cards
│   ├── Skills.jsx          # Tech stack icon grid
│   ├── Contact.jsx         # Contact form (Web3Forms) + info
│   ├── Footer.jsx          # Social links + copyright
│   └── FloatingButtons.jsx # Fixed WhatsApp & phone buttons
├── App.jsx                 # Root composition
├── main.jsx                # React DOM entry point
└── index.css               # Global styles + Tailwind
```

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repo
git clone https://github.com/hazzy-19/portfolio.git
cd portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Then fill in your Web3Forms key in .env
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

## ⚙️ Environment Variables

Create a `.env` file in the project root (see `.env.example`):

| Variable | Description |
|---|---|
| `VITE_WEB3FORMS_KEY` | Your [Web3Forms](https://web3forms.com) access key for the contact form |

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev) | UI framework |
| [Vite 8](https://vitejs.dev) | Build tool & dev server |
| [Tailwind CSS 4](https://tailwindcss.com) | Utility-first styling |
| [react-icons](https://react-icons.github.io/react-icons/) | Icon library |
| [thinking-orbs](https://www.npmjs.com/package/thinking-orbs) | Animated hero graphic |
| [Web3Forms](https://web3forms.com) | Contact form backend |

## 📦 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run oxlint |

## 📄 License

© 2025 Peter Anyona (Lovely Design). All rights reserved.
