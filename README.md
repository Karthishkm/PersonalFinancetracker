<div align="center">

# 🌟 FinTrack

<h3 style="color: #7aa2f7; font-family: 'Clash Display', sans-serif;">Your Personal Finance Dashboard</h3>

[![React](https://img.shields.io/badge/React-18.3-61dafb?style=for-the-badge&logo=react&logoColor=white&color=7aa2f7)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178c6?style=for-the-badge&logo=typescript&logoColor=white&color=bb9af7)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-2.x-3ecf8e?style=for-the-badge&logo=supabase&logoColor=white&color=9ece6a)](https://supabase.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38b2ac?style=for-the-badge&logo=tailwind-css&logoColor=white&color=7dcfff)](https://tailwindcss.com/)

</div>

## ✨ Features

- 📊 **Interactive Dashboard**
  - Real-time financial overview
  - Dynamic charts and graphs
  - Budget tracking and alerts

- 💳 **Transaction Management**
  - Easy transaction entry
  - Categorization
  - Search and filtering
  - Export to PDF

- 📈 **Detailed Reports**
  - Income vs. Expenses analysis
  - Category-wise breakdown
  - Custom date ranges
  - Advanced filtering options

- 🔐 **Secure Authentication**
  - Email & password login
  - Password recovery with secret key
  - Profile management
  - Secure session handling

- 🎨 **Modern UI/UX**
  - Dark mode support
  - Responsive design
  - Smooth animations
  - Glass morphism effects

## 🚀 Quick Start

1. **Clone and Install**
   ```bash
   git clone https://github.com/Karthishkm/PersonalFinancetracker.git
   cd fintrack
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3 with TypeScript
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts
- **Backend & Auth**: Supabase
- **Build Tool**: Vite

## 📱 Mobile Support

FinTrack is fully responsive and works seamlessly across:
- 📱 Mobile devices
- 💻 Tablets
- 🖥️ Desktop computers

## 🔒 Security Features

- Secure authentication flow
- Row Level Security (RLS) with Supabase
- Password recovery with secret key verification
- Protected routes and API endpoints

## 🎨 Customization

### Theme Colors

```javascript
// tailwind.config.js
colors: {
  dark: {
    100: '#1a1b26',
    200: '#16161e',
    300: '#1a1b26',
    400: '#24283b',
    500: '#565f89',
    600: '#a9b1d6',
    700: '#c0caf5',
  },
  accent: {
    purple: '#bb9af7',
    blue: '#7aa2f7',
    cyan: '#7dcfff',
    green: '#9ece6a',
    yellow: '#e0af68',
    red: '#f7768e',
  }
}
```

### Fonts

- **Display**: Clash Display
- **Body**: Inter
- **Monospace**: JetBrains Mono

## 📊 Database Schema

```sql
profiles
  - id (uuid, primary key)
  - user_id (uuid, references auth.users)
  - name (text)
  - created_at (timestamp)

transactions
  - id (uuid, primary key)
  - user_id (uuid, references auth.users)
  - amount (numeric)
  - category (text)
  - type (text)
  - date (date)
  - description (text)
  - created_at (timestamp)

budgets
  - id (uuid, primary key)
  - user_id (uuid, references auth.users)
  - category (text)
  - budget_limit (numeric)
  - created_at (timestamp)
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ using [React](https://reactjs.org/) and [Supabase](https://supabase.io/)

</div>
