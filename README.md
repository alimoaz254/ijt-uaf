# IJT-UAF - Islamic Student Organization Website

A comprehensive, professional website for IJT-UAF student organization built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

![IJT-UAF Website](https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=400&fit=crop)

## 🌟 Features

- **Modern Design**: Professional, responsive design with custom animated cards
- **Color Palette Switcher**: Toggle between 4 different color themes
- **Multiple Pages**: Home, About, Teams, Gallery, Resources, News, Contact, Login, Register
- **Interactive Animations**: Smooth scroll animations, hover effects, and transitions
- **Responsive**: Fully responsive across all devices
- **SEO Optimized**: Meta tags, Open Graph support, and semantic HTML
- **Database Ready**: PostgreSQL with Drizzle ORM schema prepared

## 📁 Project Structure

```
ijt-uaf/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── gallery/
│   │   │   └── page.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── news/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   ├── resources/
│   │   │   └── page.tsx
│   │   ├── teams/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── home/
│   │   │   ├── AboutSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── NewsSection.tsx
│   │   │   └── ResourcesSection.tsx
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   └── Header.tsx
│   │   ├── theme/
│   │   │   ├── ThemeProvider.tsx
│   │   │   └── ThemeSwitcher.tsx
│   │   └── ui/
│   │       └── CustomCard.tsx
│   ├── db/
│   │   ├── index.ts
│   │   └── schema.ts
│   └── lib/
│       └── theme.ts
├── public/
├── .env
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git (for cloning)

### Installation on Windows

1. **Clone or Download the Project**
   ```bash
   # If using Git
   git clone <repository-url>
   cd ijt-uaf

   # Or download and extract the ZIP file, then open in terminal
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=postgresql://postgres:password@localhost:5432/ijt_uaf
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Set Up PostgreSQL Database**
   - Install PostgreSQL from https://www.postgresql.org/download/windows/
   - Create a database named `ijt_uaf`
   - Update the `DATABASE_URL` in `.env` with your credentials

5. **Run Database Migrations**
   ```bash
   npx drizzle-kit push
   ```

6. **Start Development Server**
   ```bash
   npm run dev
   ```

7. **Open in Browser**
   Navigate to http://localhost:3000

## 🎨 Color Palette Switching

The website includes a built-in theme switcher located at the bottom-right corner of the screen. Four color palettes are available:

### Available Palettes

1. **Navy Classic** (Default)
   - Primary: `#162660` (60%)
   - Secondary: `#D0E6FD` (30%)
   - Accent: `#F1E4D1` (10%)

2. **Light Fresh**
   - Primary: `#D0E6FD` (60%)
   - Secondary: `#162660` (30%)
   - Accent: `#F1E4D1` (10%)

3. **Cream Warm**
   - Primary: `#F1E4D1` (60%)
   - Secondary: `#162660` (30%)
   - Accent: `#D0E6FD` (10%)

4. **Dark Bold**
   - Primary: `#162660` (60%)
   - Secondary: `#F1E4D1` (30%)
   - Accent: `#D0E6FD` (10%)

### How to Switch Themes

Simply click on the theme switcher button at the bottom-right corner of the screen to cycle through the available palettes. Your selection is saved in localStorage.

### Customizing Color Palettes

To add or modify color palettes, edit `src/lib/theme.ts`:

```typescript
export const colorPalettes: Record<string, ColorPalette> = {
  yourPalette: {
    id: 'yourPalette',
    name: 'Your Palette Name',
    primary: '#HEXCODE',    // 60%
    secondary: '#HEXCODE',  // 30%
    accent: '#HEXCODE',     // 10%
    background: '#HEXCODE',
    backgroundAlt: '#HEXCODE',
    text: '#HEXCODE',
    textMuted: '#HEXCODE',
    border: '#HEXCODE',
    gradient: 'linear-gradient(...)',
    gradientAlt: 'linear-gradient(...)',
  },
};
```

## 🎭 Customizing Card Designs

The custom card components are located in `src/components/ui/CustomCard.tsx`. Four card variants are available:

1. **default**: Clean white card with border
2. **gradient**: Gradient background card
3. **glass**: Frosted glass effect card
4. **floating**: Elevated card with shadows

### Usage Example

```tsx
<CustomCard variant="floating" hoverEffect={true} className="p-6">
  <h3>Card Title</h3>
  <p>Card content here...</p>
</CustomCard>
```

### Customizing Card Styles

Edit the `variantStyles` object in `CustomCard.tsx` to modify card appearances:

```typescript
const variantStyles = {
  floating:
    "bg-white rounded-[3rem] shadow-2xl border border-[var(--color-border)]/50",
  // Modify these values to customize
};
```

## 🎬 Animations

The website uses Framer Motion for animations. Key animation features:

- **Scroll Reveals**: Elements fade in as you scroll
- **Hover Effects**: Cards lift and scale on hover
- **Page Transitions**: Smooth transitions between pages
- **Interactive Buttons**: Scale and color changes on interaction

### Adding New Animations

```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Your content
</motion.div>
```

## 📤 Deploying to cPanel

### Option 1: Static Export (Recommended for cPanel)

1. **Build for Static Export**
   ```bash
   npm run build
   ```

2. **Export Static Files**
   ```bash
   # Add to next.config.ts
   output: 'export'
   ```

3. **Upload to cPanel**
   - Upload the `out` folder contents to `public_html` in cPanel File Manager

### Option 2: Full Next.js Deployment

1. **Build the Application**
   ```bash
   npm run build
   ```

2. **Start Production Server**
   ```bash
   npm start
   ```

3. **Configure cPanel**
   - Use cPanel's Node.js selector
   - Point to your app directory
   - Set startup file to `server.js` or use Passenger

### Database Setup on cPanel

1. Create PostgreSQL database in cPanel
2. Update `DATABASE_URL` in environment variables
3. Run migrations: `npx drizzle-kit push`

## 🔧 Configuration

### Typography

The website uses the Inter font family. To change fonts, edit `src/app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({
  subsets: ["latin"],
  variable: "--font-yourfont",
});
```

### Navigation Links

Edit navigation in `src/components/layout/Header.tsx`:

```typescript
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  // Add or modify links here
];
```

### Footer Content

Edit footer content in `src/components/layout/Footer.tsx`:

```typescript
const footerLinks = {
  quickLinks: [
    { href: "/about", label: "About Us" },
    // Add or modify links here
  ],
};
```

## 📱 Pages Overview

| Page | Description |
|------|-------------|
| Home | Hero, About, News, Resources, CTA sections |
| About | Mission, Vision, Values, Timeline |
| Teams | Executive Committee, Department Heads, Advisory Board |
| Gallery | Filterable photo gallery with lightbox |
| Resources | Categorized learning materials with search |
| News | Blog-style news with categories and newsletter |
| Contact | Contact form, info cards, FAQ |
| Register | Student registration form |
| Login | User authentication |

## 🛠️ Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run typecheck # Run TypeScript check
```

## 📦 Dependencies

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **Drizzle ORM** - Database ORM
- **PostgreSQL** - Database

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, email info@ijtuaf.org or open an issue in the repository.

---

**Built with ❤️ for IJT-UAF Student Organization**
