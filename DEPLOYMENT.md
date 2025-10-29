# Netlify Deployment Guide

This guide will help you deploy your Markdown to PDF Converter to Netlify.

## 🚀 Deployment Methods

### Method 1: Deploy via Netlify CLI (Recommended)

#### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

#### Step 2: Build Your Project

```bash
npm run build
```

#### Step 3: Login to Netlify

```bash
netlify login
```

This will open a browser window for authentication.

#### Step 4: Deploy

For a test deployment (draft):
```bash
netlify deploy
```

For production deployment:
```bash
netlify deploy --prod
```

Follow the prompts:
- **Create & configure a new site** - Choose this option
- **Team** - Select your team
- **Site name** - Choose a unique name (e.g., `my-markdown-to-pdf`)
- **Publish directory** - Enter `build`

---

### Method 2: Deploy via Netlify Web Interface

#### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Initialize git in your project (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

#### Step 2: Connect to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** and authorize Netlify
4. Select your repository
5. Configure build settings:
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
6. Click **"Deploy site"**

---

### Method 3: Drag & Drop Deploy

#### Step 1: Build Your Project

```bash
npm run build
```

#### Step 2: Deploy to Netlify

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the `build` folder onto the page
3. Your site will be deployed instantly!

---

## ⚙️ Build Configuration

The project includes a `netlify.toml` file with optimal settings:

```toml
[build]
  publish = "build"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🔧 Environment Variables

This project doesn't require any environment variables. Everything runs client-side!

---

## 🌐 Custom Domain (Optional)

### Add a Custom Domain

1. In your Netlify site dashboard, go to **Domain settings**
2. Click **"Add custom domain"**
3. Enter your domain name
4. Follow the DNS configuration instructions

### Example DNS Settings:

For `www.yourdomain.com`:
```
CNAME  www  your-site-name.netlify.app
```

For apex domain `yourdomain.com`:
```
A      @    75.2.60.5
```

---

## 📊 Deployment Status

After deployment, you'll get:
- **Live URL**: `https://your-site-name.netlify.app`
- **Deploy previews** for pull requests
- **Automatic deployments** when you push to GitHub
- **Free SSL certificate** (HTTPS enabled)

---

## 🐛 Troubleshooting

### Build Failed

**Problem**: Build fails with error

**Solutions**:
1. Ensure all dependencies are in `package.json`:
   ```bash
   npm install
   ```

2. Test build locally:
   ```bash
   npm run build
   ```

3. Check Netlify build logs for specific errors

### 404 Errors on Refresh

**Problem**: Page not found when refreshing on non-root routes

**Solution**: The `netlify.toml` redirect rule should fix this. If not, add `_redirects` file:
```
/*    /index.html   200
```

### Site Looks Different Than Local

**Problem**: Styling issues or missing features

**Solutions**:
1. Clear browser cache
2. Check browser console for errors
3. Verify all assets are in the `build` folder

### Large Build Size Warning

**Problem**: Build size exceeds recommendations

**Solution**: This is normal for React apps with PDF generation libraries. Netlify supports builds up to 200MB.

---

## 🔄 Continuous Deployment

Once connected to GitHub, Netlify will:
- ✅ Automatically deploy when you push to `main`
- ✅ Create deploy previews for pull requests
- ✅ Allow rollback to previous deployments
- ✅ Provide build notifications

---

## 📈 Monitoring & Analytics

### Netlify Analytics (Optional Paid Feature)

Track:
- Page views
- Unique visitors
- Top pages
- Traffic sources

### Free Alternative: Google Analytics

Add to `public/index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🎯 Quick Deployment Checklist

- [ ] Project builds successfully locally (`npm run build`)
- [ ] All dependencies listed in `package.json`
- [ ] `netlify.toml` configuration file present
- [ ] Git repository initialized (if using GitHub method)
- [ ] Netlify account created
- [ ] Build command set to `npm run build`
- [ ] Publish directory set to `build`
- [ ] Deploy and test!

---

## 🌟 Post-Deployment

After successful deployment:

1. **Test all features**:
   - Markdown editing
   - PDF generation
   - Dark mode toggle
   - Templates loading
   - Import/Export functionality

2. **Share your site**:
   - Copy the Netlify URL
   - Share on social media
   - Add to your portfolio

3. **Monitor performance**:
   - Check Netlify dashboard
   - Monitor build times
   - Review deploy logs

---

## 💡 Pro Tips

1. **Custom Subdomain**: Change your site name in Netlify settings for a better URL
2. **Deploy Notifications**: Set up Slack/Discord webhooks for deploy notifications
3. **Branch Deploys**: Create feature branches for testing before merging to main
4. **Environment Context**: Use different settings for production vs preview
5. **Build Plugins**: Explore Netlify plugins for optimization

---

## 📞 Support

- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Netlify Community**: [community.netlify.com](https://community.netlify.com)
- **Status Page**: [netlifystatus.com](https://netlifystatus.com)

---

## 🎉 You're All Set!

Your Markdown to PDF Converter is now live on Netlify!

**Example URL**: `https://markdown-pdf-converter.netlify.app`

Share it with the world! 🌍

---

*Last Updated: October 28, 2025*

