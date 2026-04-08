# ☕ Brew Haven - Modern Coffee Shop Website Template

A beautiful, responsive website template designed specifically for coffee shops, cafes, and small food businesses. Built with modern web technologies and featuring a warm, inviting design that converts visitors into customers.

![Coffee Shop Website Preview](https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600)

## ✨ Features

### 🎨 Design & User Experience
- **Modern, responsive design** that looks great on all devices
- **Warm color palette** with browns, creams, and greens
- **Smooth animations** and micro-interactions
- **Professional typography** using system fonts
- **Intuitive navigation** with smooth scrolling
- **Mobile-first approach** for optimal mobile experience

### 📱 Sections Included
- **Hero Section** - Eye-catching banner with call-to-action buttons
- **Coffee Gallery** - Showcase your best drinks with hover effects
- **Featured Products** - Highlight your premium coffee beans and merchandise
- **Menu Section** - Complete menu with categories and pricing
- **About Us** - Tell your story with team photos and company values
- **Contact Page** - Contact form, location, hours, and map placeholder
- **Footer** - Social links, quick navigation, and business info

### 🛠 Technical Features
- **React 18** with TypeScript for type safety
- **Tailwind CSS** for easy customization
- **Vite** for fast development and building
- **Lucide React** icons for consistent iconography
- **Responsive grid system** that adapts to any screen size
- **SEO-friendly** structure and semantic HTML
- **Fast loading** with optimized images and code

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Download and extract** the template files to your desired folder

2. **Open terminal/command prompt** and navigate to the project folder:
   ```bash
   cd your-project-folder
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and visit `http://localhost:5173`

That's it! Your coffee shop website is now running locally.

## 📁 Project Structure

```
brew-haven/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Homepage hero section
│   │   ├── Gallery.tsx     # Coffee drinks gallery
│   │   ├── FeaturedProducts.tsx # Product showcase
│   │   ├── Menu.tsx        # Menu section
│   │   ├── About.tsx       # About us section
│   │   ├── Contact.tsx     # Contact form & info
│   │   └── Footer.tsx      # Site footer
│   ├── App.tsx             # Main app component
│   ├── main.tsx           # App entry point
│   └── index.css          # Global styles
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.ts         # Vite configuration
└── README.md             # This file
```

## 🎨 Customization Guide

### Changing Colors
The template uses Tailwind CSS classes. To change the color scheme:

1. **Primary colors** (browns): Look for `amber-` classes
2. **Secondary colors** (greens): Look for `green-` classes
3. **Neutral colors**: `gray-`, `white`, `black` classes

Example color changes:
```tsx
// Change from amber to blue
className="bg-amber-700" → className="bg-blue-700"
className="text-amber-900" → className="text-blue-900"
```

### Updating Content

#### Business Information
Edit these files to update your business details:
- `src/components/Header.tsx` - Business name and navigation
- `src/components/Hero.tsx` - Main headline and tagline
- `src/components/Contact.tsx` - Address, phone, email, hours
- `src/components/Footer.tsx` - Footer information

#### Menu Items
Update your menu in `src/components/Menu.tsx`:
```tsx
const menuCategories = [
  {
    title: 'Hot Coffee',
    items: [
      { name: 'Your Drink', price: '$X.XX', description: 'Your description' },
      // Add more items...
    ]
  }
];
```

#### Featured Products
Modify products in `src/components/FeaturedProducts.tsx`:
```tsx
const products = [
  {
    name: 'Your Product',
    price: '$XX.XX',
    image: 'your-image-url.jpg',
    description: 'Product description',
    badge: 'New'
  }
];
```

### Adding Your Images
Replace the Pexels stock images with your own:

1. Add your images to the `public/` folder
2. Update image URLs in components:
   ```tsx
   // Change from:
   src="https://images.pexels.com/..."
   // To:
   src="/your-image.jpg"
   ```

### Customizing Fonts
To use custom fonts:

1. Add font imports to `src/index.css`:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap');
   ```

2. Update Tailwind config in `tailwind.config.js`:
   ```js
   theme: {
     extend: {
       fontFamily: {
         'custom': ['YourFont', 'sans-serif'],
       }
     }
   }
   ```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```
This creates a `dist/` folder with optimized files ready for deployment.

### Deployment Options

#### Free Hosting
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Push to GitHub and enable Pages

#### Paid Hosting
- **Traditional hosting**: Upload `dist` folder contents via FTP
- **Cloud platforms**: AWS S3, Google Cloud, etc.

### Domain Setup
1. Purchase a domain from providers like Namecheap, GoDaddy, etc.
2. Point your domain to your hosting provider
3. Update DNS settings as required by your host

## 📱 Mobile Optimization

The template is fully responsive and includes:
- **Mobile-first design** approach
- **Touch-friendly** buttons and navigation
- **Optimized images** for different screen sizes
- **Fast loading** on mobile networks
- **Accessible** navigation and forms

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Check code quality

## 🎯 SEO Optimization

### Built-in SEO Features
- Semantic HTML structure
- Proper heading hierarchy (H1, H2, H3)
- Alt text for images
- Meta tags ready for customization

### Recommended SEO Improvements
1. **Update page title** in `index.html`
2. **Add meta descriptions** for each section
3. **Optimize images** with descriptive alt text
4. **Add structured data** for local business
5. **Create sitemap.xml** after deployment

## 🛡 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Support & Customization

### Need Help?
- Check the code comments for guidance
- Tailwind CSS documentation: https://tailwindcss.com/docs
- React documentation: https://react.dev

### Custom Development
Need additional features or custom modifications? Consider hiring a developer for:
- Online ordering system
- Payment integration
- Inventory management
- Customer loyalty program
- Advanced animations
- Custom integrations

## 📄 License

This template is provided for commercial and personal use. You can:
- ✅ Use for client projects
- ✅ Modify and customize
- ✅ Use for commercial purposes
- ❌ Resell as-is without modifications
- ❌ Claim original authorship

## 🙏 Credits

- **Icons**: Lucide React (https://lucide.dev)
- **Images**: Pexels (https://pexels.com) - Replace with your own
- **Fonts**: System fonts for optimal performance
- **Framework**: React + Vite + Tailwind CSS

---

## 🚀 Ready to Launch?

Your coffee shop website is ready to go! Follow these final steps:

1. ✅ Customize colors and content
2. ✅ Add your own images and logo
3. ✅ Update business information
4. ✅ Test on mobile devices
5. ✅ Build for production
6. ✅ Deploy to your hosting provider
7. ✅ Set up your custom domain

**Happy brewing! ☕**

---

*Made with ❤️ for coffee lovers everywhere*