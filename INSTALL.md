# 🚀 INSTALLATION GUIDE

## Quick Start

### Step 1: Extract the Project
```bash
unzip 5rings-connect-jsx.zip
cd 5rings-connect-jsx
```

### Step 2: Install Dependencies
```bash
npm install --legacy-peer-deps
```

**⚠️ IMPORTANT:** You MUST use the `--legacy-peer-deps` flag!

### Step 3: Run the Development Server
```bash
npm run dev
```

### Step 4: Open Your Browser
Navigate to: **http://localhost:8080**

---

## Why `--legacy-peer-deps`?

This project uses several UI libraries that have peer dependency requirements. The `--legacy-peer-deps` flag tells npm to ignore peer dependency conflicts and install the packages anyway.

This is a **safe and common practice** for React projects with multiple UI libraries.

---

## Alternative: Using Yarn

If you prefer Yarn:

```bash
yarn install
yarn dev
```

Yarn handles peer dependencies more gracefully and doesn't require special flags.

---

## Alternative: Using pnpm

If you prefer pnpm:

```bash
pnpm install
pnpm dev
```

---

## Troubleshooting

### Problem: "ERESOLVE could not resolve"

**Solution:**
```bash
npm install --legacy-peer-deps
```

### Problem: "Port 8080 already in use"

**Solution 1:** Kill the process using port 8080
```bash
# On Windows:
netstat -ano | findstr :8080
taskkill /PID <PID> /F

# On Mac/Linux:
lsof -ti:8080 | xargs kill
```

**Solution 2:** Change the port in `vite.config.js`:
```javascript
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 3000,  // Change to any available port
  },
  // ...
}));
```

### Problem: Installation is slow

**Solution:** Use a faster package manager
```bash
# Install pnpm globally
npm install -g pnpm

# Install project dependencies
pnpm install
pnpm dev
```

### Problem: "Cannot find module" errors

**Solution:** Clear cache and reinstall
```bash
# Delete existing installations
rm -rf node_modules package-lock.json

# Reinstall
npm install --legacy-peer-deps
```

---

## Verification

After installation, verify everything works:

```bash
# Run development server
npm run dev

# In another terminal, run tests
npm run test

# Build for production
npm run build
```

If all commands work without errors, you're good to go! ✅

---

## Production Build

When ready to deploy:

```bash
# Build for production
npm run build --legacy-peer-deps

# The build output will be in the 'dist' folder
# You can deploy this folder to any static hosting service
```

---

## Need Help?

If you're still having issues:

1. Make sure you're using Node.js 18 or higher:
   ```bash
   node --version
   ```

2. Clear npm cache:
   ```bash
   npm cache clean --force
   ```

3. Try the installation again:
   ```bash
   npm install --legacy-peer-deps
   ```

---

**That's it!** You should now have the project running successfully. 🎉
