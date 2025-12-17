# Deployment Guide for Vercel

This dashboard is ready to deploy on Vercel with minimal configuration.

## Quick Deploy Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Food Waste Dashboard"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"

That's it! Your dashboard will be live in minutes.

## Configuration

The dashboard is already configured with:
- ✅ `next.config.js` - Next.js configuration
- ✅ `vercel.json` - Vercel-specific settings
- ✅ `package.json` - All dependencies
- ✅ Client-side simulation (no backend needed)

## Environment Variables

No environment variables are required. The simulation runs entirely in the browser.

## Build Settings

Vercel will automatically:
- Install dependencies: `npm install`
- Build the project: `npm run build`
- Start the server: `npm start`

## Custom Domain

After deployment, you can add a custom domain in the Vercel dashboard under Project Settings → Domains.

## Troubleshooting

If you encounter issues:

1. **Build fails**: Check that all dependencies are in `package.json`
2. **Runtime errors**: Check browser console for client-side errors
3. **CSV upload issues**: Ensure CSV files match the expected format

## File Structure for Vercel

Vercel expects:
- `package.json` in the root
- Next.js app in `app/` directory (or `pages/`)
- All dependencies listed in `package.json`

All of these are already set up correctly!

