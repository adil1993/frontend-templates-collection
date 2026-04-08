# 🚀 Deployment Guide - Get Your Salon Website Live

## Quick Deployment Options

### Option 1: Netlify (Recommended - Free & Easy)

**Step 1: Build Your Site**
```bash
npm run build
```

**Step 2: Deploy to Netlify**
1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag and drop your `dist` folder to Netlify
3. Your site is live instantly!
4. Get a free subdomain like `yoursite.netlify.app`

**Step 3: Custom Domain (Optional)**
1. Buy domain from Namecheap, GoDaddy, etc.
2. In Netlify: Settings → Domain Management
3. Add your custom domain
4. Follow DNS setup instructions

### Option 2: Vercel (Also Free & Fast)

**Step 1: Install Vercel CLI**
```bash
npm install -g vercel
```

**Step 2: Deploy**
```bash
npm run build
vercel --prod
```

**Step 3: Follow Prompts**
- Link to your account
- Choose project settings
- Get instant live URL

### Option 3: GitHub Pages (Free)

**Step 1: Push to GitHub**
1. Create GitHub repository
2. Push your code to GitHub
3. Go to repository Settings

**Step 2: Enable Pages**
1. Settings → Pages
2. Source: GitHub Actions
3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '18'
    - run: npm install
    - run: npm run build
    - uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

### Option 4: Traditional Web Hosting

**Works with any hosting provider:**

**Step 1: Build Your Site**
```bash
npm run build
```

**Step 2: Upload Files**
1. Open your hosting control panel (cPanel, etc.)
2. Navigate to public_html or www folder
3. Upload ALL contents of the `dist` folder
4. Your site is live at your domain!

**Popular Hosting Providers:**
- Bluehost, SiteGround, HostGator
- GoDaddy, Namecheap hosting
- A2 Hosting, InMotion

## Domain Setup

### Buy a Domain
**Recommended registrars:**
- Namecheap (best prices)
- Google Domains (easy management)
- GoDaddy (popular choice)

**Good domain ideas:**
- `yoursalonname.com`
- `yoursaloncuts.com`
- `yoursalonstudio.com`
- `yournamehair.com`

### Connect Domain to Hosting

**For Netlify:**
1. Netlify Dashboard → Domain Settings
2. Add custom domain
3. Update DNS at your registrar
4. Wait 24-48 hours for propagation

**For Traditional Hosting:**
1. Point domain nameservers to your host
2. Add domain in hosting control panel
3. Upload files to domain folder

## SSL Certificate (HTTPS)

### Automatic SSL (Recommended)
- **Netlify/Vercel:** Automatic free SSL
- **Cloudflare:** Free SSL + CDN
- **Most hosts:** Free Let's Encrypt SSL

### Manual SSL Setup
1. Get SSL certificate from your host
2. Install in hosting control panel
3. Force HTTPS redirects

## Performance Optimization

### Before Deployment

**Optimize Images:**
```bash
# Install image optimization tools
npm install -g imagemin-cli
imagemin src/assets/*.jpg --out-dir=src/assets/optimized
```

**Check Bundle Size:**
```bash
npm run build
# Check dist folder size - should be under 10MB
```

### After Deployment

**Enable Compression:**
- Gzip compression (most hosts enable automatically)
- Brotli compression for better performance

**CDN Setup:**
- Cloudflare (free CDN)
- AWS CloudFront
- Built-in CDN with Netlify/Vercel

## SEO Setup After Deployment

### Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your website
3. Verify ownership
4. Submit sitemap: `yoursite.com/sitemap.xml`

### Google Analytics
1. Create Google Analytics account
2. Add tracking code to `index.html`
3. Monitor website traffic

### Local SEO (Important for Salons)
1. Create Google My Business listing
2. Add your website URL
3. Encourage customer reviews
4. Add location schema markup

## Email Setup (Critical)

### EmailJS Configuration
**Must complete for contact forms to work:**
1. Follow SETUP-GUIDE.md exactly
2. Test forms after deployment
3. Verify emails are being received

### Custom Email (Professional)
- Get email hosting: `info@yoursalon.com`
- Popular providers: Google Workspace, Microsoft 365
- Update EmailJS with your business email

## Backup & Updates

### Regular Backups
- **Netlify/Vercel:** Automatic backups
- **Traditional hosting:** Manual backups recommended
- Keep local copy of all files

### Future Updates
1. Make changes locally
2. Test with `npm run dev`
3. Build with `npm run build`
4. Deploy updated files

## Troubleshooting Deployment

### Common Issues

**Build Fails:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Images Not Loading:**
- Check image URLs are absolute
- Verify images are in public folder
- Test image links directly

**Forms Not Working:**
- Verify EmailJS credentials
- Check browser console for errors
- Test on different devices

**Site Not Loading:**
- Check DNS propagation: whatsmydns.net
- Verify files uploaded correctly
- Check hosting account status

### Performance Issues

**Slow Loading:**
- Optimize images (compress, resize)
- Enable compression on server
- Use CDN for faster delivery

**Mobile Issues:**
- Test on real devices
- Check responsive design
- Verify touch interactions work

## Launch Checklist

### Pre-Launch
- [ ] All business information updated
- [ ] Images replaced with your own
- [ ] EmailJS configured and tested
- [ ] Contact forms working
- [ ] Mobile responsive tested
- [ ] All links working
- [ ] SEO meta tags updated

### Launch Day
- [ ] Domain connected
- [ ] SSL certificate active
- [ ] Site loads correctly
- [ ] Forms send emails
- [ ] Google Analytics installed
- [ ] Google My Business updated

### Post-Launch
- [ ] Submit to Google Search Console
- [ ] Share on social media
- [ ] Update business cards/marketing
- [ ] Monitor for any issues
- [ ] Collect customer feedback

## Maintenance

### Monthly Tasks
- Check for broken links
- Update business information
- Review Google Analytics
- Backup website files
- Test contact forms

### Quarterly Tasks
- Update dependencies: `npm update`
- Review and optimize images
- Check site speed
- Update content as needed

## Cost Breakdown

### Free Options
- **Netlify/Vercel:** Free hosting + domain
- **GitHub Pages:** Free hosting
- **EmailJS:** 200 emails/month free

### Paid Options
- **Custom domain:** $10-15/year
- **Premium hosting:** $5-20/month
- **Professional email:** $6/month
- **Premium EmailJS:** $15/month for more emails

## Support

### Getting Help
- Check documentation first
- Test on different browsers
- Use browser developer tools
- Contact hosting support if needed

### Professional Help
If you need assistance:
- Hire a developer for customizations
- Use Fiverr/Upwork for quick fixes
- Contact your hosting provider for server issues

---

**🎉 Your professional salon website is ready to go live!**

Choose the deployment option that works best for you, and your salon will have a stunning online presence in minutes!