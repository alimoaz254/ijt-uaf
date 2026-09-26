# IJT-UAF Website - Deployment Guide

## Table of Contents
1. [Local Development Setup (Windows)](#local-development-setup-windows)
2. [cPanel Deployment](#cpanel-deployment)
3. [Color Palette Customization](#color-palette-customization)
4. [Card Design Customization](#card-design-customization)
5. [Animation & Effects](#animation--effects)
6. [Troubleshooting](#troubleshooting)

---

## Local Development Setup (Windows)

### Step 1: Install Prerequisites

1. **Install Node.js**
   - Download from: https://nodejs.org/
   - Choose the LTS (Long Term Support) version
   - Run the installer and follow the prompts
   - Verify installation:
     ```cmd
     node --version
     npm --version
     ```

2. **Install PostgreSQL** (for database)
   - Download from: https://www.postgresql.org/download/windows/
   - During installation, set a password for the `postgres` user
   - Remember the port (default: 5432)

### Step 2: Set Up the Project

1. **Open Command Prompt or PowerShell**
   ```cmd
   # Navigate to where you want to store the project
   cd C:\Users\YourName\Projects
   ```

2. **Create Project Folder**
   ```cmd
   mkdir ijt-uaf
   cd ijt-uaf
   ```

3. **Copy All Project Files**
   - Copy all files from the downloaded project into this folder

4. **Install Dependencies**
   ```cmd
   npm install
   ```

### Step 3: Configure Database

1. **Create PostgreSQL Database**
   ```cmd
   # Open pgAdmin or use psql command line
   # Create a new database named "ijt_uaf"
   ```

2. **Set Up Environment Variables**
   Create a `.env` file in the project root:
   ```env
   DATABASE_URL=postgresql://postgres:your_password@localhost:5432/ijt_uaf
   ```

3. **Run Database Migrations**
   ```cmd
   npx drizzle-kit push
   ```

### Step 4: Run the Development Server

```cmd
npm run dev
```

The website will be available at: http://localhost:3000

---

## cPanel Deployment

### Option A: Static Export (Simplest)

1. **Build for Static Export**
   
   Edit `next.config.ts`:
   ```typescript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   ```

2. **Build the Project**
   ```bash
   npm run build
   ```

3. **Upload to cPanel**
   - Login to cPanel
   - Go to File Manager
   - Navigate to `public_html`
   - Upload all contents from the `out` folder
   - Your site will be live at your domain

### Option B: Full Next.js App (With Database)

1. **Prepare Your Project**
   ```bash
   npm run build
   ```

2. **cPanel Node.js Setup**
   - Login to cPanel
   - Go to "Setup Node.js App"
   - Create a new application
   - Set Node.js version to 18 or higher
   - Set application root to your project folder
   - Set application startup file to `server.js`

3. **Environment Variables**
   - In cPanel, go to "Environment Variables"
   - Add `DATABASE_URL` with your PostgreSQL connection string

4. **Install Dependencies**
   - Click "Run NPM Install" in the Node.js app interface

5. **Start the Application**
   - Click "Start" to run your application

---

## Color Palette Customization

### Quick Theme Switching

Use the theme switcher at the bottom-right corner of the screen to toggle between 4 pre-built themes:
- Navy Classic (default)
- Light Fresh
- Cream Warm
- Dark Bold

### Creating Custom Themes

1. **Edit `src/lib/theme.ts`**

   Add your custom palette:
   ```typescript
   export const colorPalettes: Record<string, ColorPalette> = {
     myCustomTheme: {
       id: 'myCustomTheme',
       name: 'My Custom Theme',
       primary: '#YOUR_COLOR_1',    // 60% - Main color
       secondary: '#YOUR_COLOR_2',  // 30% - Secondary color
       accent: '#YOUR_COLOR_3',     // 10% - Accent color
       background: '#BG_COLOR',
       backgroundAlt: '#BG_ALT_COLOR',
       text: '#TEXT_COLOR',
       textMuted: '#MUTED_TEXT_COLOR',
       border: '#BORDER_COLOR',
       gradient: 'linear-gradient(135deg, #COLOR1 0%, #COLOR2 100%)',
       gradientAlt: 'linear-gradient(135deg, #COLOR3 0%, #COLOR4 100%)',
     },
   };
   ```

2. **Apply the 60-30-10 Rule**
   - **60% Primary**: Main background, large sections
   - **30% Secondary**: Headers, navigation, accents
   - **10% Accent**: Buttons, CTAs, highlights

### Example Color Combinations

**Professional Blue:**
```typescript
primary: '#003366',    // Deep blue
secondary: '#6699CC',  // Light blue
accent: '#FF9900',     // Orange accent
```

**Nature Green:**
```typescript
primary: '#2D5016',    // Dark green
secondary: '#7FA96E',  // Light green
accent: '#F4A460',     // Sandy brown
```

**Royal Purple:**
```typescript
primary: '#4B0082',    // Indigo
secondary: '#9370DB',  // Medium purple
accent: '#FFD700',     // Gold
```

---

## Card Design Customization

### Available Card Variants

1. **default** - Clean white card with border
2. **gradient** - Gradient background
3. **glass** - Frosted glass effect
4. **floating** - Elevated with shadows

### Modifying Card Styles

Edit `src/components/ui/CustomCard.tsx`:

```typescript
const variantStyles = {
  floating: "bg-white rounded-[3rem] shadow-2xl border border-[var(--color-border)]/50",
  // Modify these CSS classes to change card appearance
};
```

### Custom Card Examples

**Rounded Corners:**
```tsx
<CustomCard variant="floating" className="rounded-2xl">
  {/* Content */}
</CustomCard>
```

**Custom Padding:**
```tsx
<CustomCard variant="floating" className="p-12">
  {/* Content */}
</CustomCard>
```

**Disable Hover Effect:**
```tsx
<CustomCard variant="floating" hoverEffect={false}>
  {/* Content */}
</CustomCard>
```

---

## Animation & Effects

### Scroll Animations

Elements automatically animate when scrolling into view:

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Hover Effects

```tsx
<motion.div
  whileHover={{ scale: 1.05, rotate: 5 }}
  whileTap={{ scale: 0.95 }}
>
  Interactive Element
</motion.div>
```

### Page Transitions

```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3 }}
>
  Page Content
</motion.div>
```

### Custom Animations

Add to `src/app/globals.css`:

```css
@keyframes customAnimation {
  0% { transform: translateX(0); }
  50% { transform: translateX(20px); }
  100% { transform: translateX(0); }
}

.custom-element {
  animation: customAnimation 3s ease-in-out infinite;
}
```

---

## Troubleshooting

### Build Errors

**Error: "useTheme must be used within a ThemeProvider"**
- Ensure all pages are wrapped in ThemeProvider in `layout.tsx`

**Error: "DATABASE_URL is required"**
- Create a `.env` file with your database connection string

**Error: TypeScript errors**
- Run `npm run typecheck` to see detailed errors
- Ensure all imports are correct

### Database Issues

**Cannot connect to PostgreSQL**
- Verify PostgreSQL is running
- Check DATABASE_URL format
- Ensure database exists

**Migration fails**
- Run `npx drizzle-kit push` from project root
- Check database user permissions

### Display Issues

**Colors not changing**
- Clear browser cache
- Check if ThemeProvider is properly wrapping content
- Verify CSS variables are set

**Animations not working**
- Ensure Framer Motion is installed
- Check browser compatibility
- Verify motion components are properly imported

### Performance Issues

**Slow page load**
- Optimize images (use WebP format)
- Enable compression in Next.js config
- Use static generation where possible

**Large bundle size**
- Check for unused dependencies
- Use dynamic imports for heavy components
- Optimize images and assets

---

## Support

For additional help:
- Email: info@ijtuaf.org
- Documentation: See README.md
- Issues: Open an issue in the repository

---

**Last Updated:** January 2025
