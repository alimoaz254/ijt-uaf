# IJT-UAF Website - Quick Start Guide

## 🎉 Your Website is Ready!

Congratulations! Your IJT-UAF student organization website has been successfully built and is ready to use.

## 🌐 Live Preview

**Preview URL:** https://3000-iolpegzu4x7k8gy9s5chq.e2b.app

## 📥 Download Your Complete Project

To download the entire project for local development:

1. **Access the project files** from the sandbox environment
2. **Download all files** including:
   - `src/` - All source code
   - `public/` - Static assets
   - Configuration files
   - Documentation

## 🖥️ Running Locally on Windows

### Quick Setup (5 minutes)

```cmd
# 1. Install Node.js from https://nodejs.org/

# 2. Open Command Prompt in project folder
cd path\to\ijt-uaf

# 3. Install dependencies
npm install

# 4. Create .env file
echo DATABASE_URL=postgresql://postgres:password@localhost:5432/ijt_uaf > .env

# 5. Start development server
npm run dev

# 6. Open http://localhost:3000
```

## 📱 Website Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Hero, About, News, Resources |
| About | `/about` | Mission, Vision, Values, Timeline |
| Teams | `/teams` | Leadership hierarchy |
| Gallery | `/gallery` | Event photos |
| Resources | `/resources` | Learning materials |
| News | `/news` | Updates & announcements |
| Contact | `/contact` | Contact form & FAQ |
| Register | `/register` | Student registration |
| Login | `/login` | User authentication |

## 🎨 Color Themes

Click the theme switcher (bottom-right corner) to toggle between:

1. **Navy Classic** - Professional deep blue
2. **Light Fresh** - Bright and airy
3. **Cream Warm** - Warm and inviting
4. **Dark Bold** - Modern dark mode

## ⚙️ Customization Quick Guide

### Change Colors
Edit `src/lib/theme.ts`

### Modify Navigation
Edit `src/components/layout/Header.tsx`

### Update Footer
Edit `src/components/layout/Footer.tsx`

### Add Animations
Use Framer Motion in any component:
```tsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
>
  Content
</motion.div>
```

## 📤 Deploy to cPanel

### Static Export (Recommended)

```bash
# Build for static export
npm run build

# Upload 'out' folder contents to cPanel public_html
```

### Full App Deployment

1. Use cPanel's Node.js setup
2. Set app root to project folder
3. Add environment variables
4. Run `npm install`
5. Start the application

## 📚 Documentation

- **README.md** - Complete project documentation
- **DEPLOYMENT.md** - Detailed deployment guide
- **QUICKSTART.md** - This quick reference

## 🛠️ Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Check code quality
npm run typecheck # Type check
```

## 🎯 Key Features

✅ Fully responsive design
✅ Color theme switcher
✅ Smooth animations
✅ Interactive cards
✅ Contact form
✅ Resource library
✅ Team hierarchy
✅ Photo gallery
✅ News section
✅ User authentication

## 📞 Support

- Email: info@ijtuaf.org
- Check DEPLOYMENT.md for troubleshooting
- Review README.md for detailed documentation

---

**Built with ❤️ for IJT-UAF**

*Next.js 16 | TypeScript | Tailwind CSS | Framer Motion*
