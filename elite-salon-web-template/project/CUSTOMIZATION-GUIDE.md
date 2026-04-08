# 🎨 Elite Salon Website - Customization Guide

## Quick Start Customizations (5 Minutes)

### 1. Update Your Business Information

**Contact Details:**
- Open `src/components/Contact.tsx`
- Replace phone: `(555) 123-4567` with your number
- Replace email: `info@elitecuts.com` with your email
- Replace address with your salon location

**Footer Information:**
- Open `src/components/Footer.tsx` 
- Update business name, address, phone, email
- Update social media links

### 2. Change Your Salon Name & Branding

**Header/Navigation:**
- Open `src/components/Header.tsx`
- Replace "Elite Salon" with your salon name

**Hero Section:**
- Open `src/components/Hero.tsx`
- Replace "Elite Studio" with your salon name
- Update tagline and description

### 3. Replace Images with Your Own

**Find and Replace These Image URLs:**
- Hero background: `https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg`
- About section: `https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg`
- Gallery images: All Pexels URLs in `src/components/Gallery.tsx`
- Team photos: All Pexels URLs in `src/components/Team.tsx`

**How to Replace:**
1. Upload your images to a hosting service (Cloudinary, your website, etc.)
2. Copy the new image URLs
3. Replace the Pexels URLs in the component files
4. Update alt text to describe your images

### 4. Customize Your Services

**Update Services:**
- Open `src/components/Services.tsx`
- Modify the `services` array
- Change service names, descriptions, and prices
- Update icons if needed (from Lucide React)

**Example Service Update:**
```javascript
{
  icon: Scissors,
  title: 'Your Service Name',
  description: 'Your service description',
  price: '$75',
  duration: '60 min',
  features: ['Feature 1', 'Feature 2', 'Feature 3'],
}
```

### 5. Update Your Team

**Team Members:**
- Open `src/components/Team.tsx`
- Replace team member information in the `team` array
- Update names, roles, images, experience, specialties
- Modify bio text and achievements

### 6. Change Colors to Match Your Brand

**Primary Colors (Amber/Gold):**
- Open `tailwind.config.js`
- Replace amber colors with your brand colors
- Or use find/replace in your editor:
  - Find: `amber-` Replace: `blue-` (or your color)
  - Find: `bg-amber-` Replace: `bg-blue-`
  - Find: `text-amber-` Replace: `text-blue-`

**Available Tailwind Colors:**
- `red`, `blue`, `green`, `purple`, `pink`, `indigo`, `teal`, `orange`

## Advanced Customizations

### 7. Add New Sections

**Add a Pricing Section:**
1. Create `src/components/Pricing.tsx`
2. Import and add to `src/App.tsx`
3. Add navigation link in `src/components/Header.tsx`

**Add a Blog Section:**
1. Create blog components
2. Add routing if needed
3. Update navigation

### 8. Modify Animations

**Intersection Observer Animations:**
- All components use `useEffect` with `IntersectionObserver`
- Modify `duration-1000` classes to change animation speed
- Change `translate-y-10` to adjust animation distance

### 9. Update SEO Information

**Meta Tags:**
- Open `index.html`
- Update title, description, keywords
- Replace business information in schema markup
- Update Open Graph tags

### 10. Email Setup (Required for Forms)

**Follow SETUP-GUIDE.md:**
1. Create EmailJS account
2. Set up Gmail service
3. Create email templates
4. Update `src/config/email.ts` with your credentials

## Color Scheme Variations

### Option 1: Blue Professional
```css
/* Replace amber with blue */
bg-blue-600, text-blue-600, border-blue-500
```

### Option 2: Purple Luxury  
```css
/* Replace amber with purple */
bg-purple-600, text-purple-600, border-purple-500
```

### Option 3: Green Natural
```css
/* Replace amber with green */
bg-green-600, text-green-600, border-green-500
```

### Option 4: Pink Modern
```css
/* Replace amber with pink */
bg-pink-600, text-pink-600, border-pink-500
```

### Option 5: Teal Spa-like
```css
/* Replace amber with teal */
bg-teal-600, text-teal-600, border-teal-500
```

## Typography Customization

### Change Fonts:
1. Add Google Fonts to `index.html`
2. Update `tailwind.config.js` font family
3. Apply new font classes in components

### Example Font Integration:
```html
<!-- In index.html -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
```

```javascript
// In tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
      }
    }
  }
}
```

## Mobile Responsiveness

All components are mobile-first responsive. Key breakpoints:
- `sm:` - 640px and up
- `md:` - 768px and up  
- `lg:` - 1024px and up
- `xl:` - 1280px and up

## Performance Optimization

### Image Optimization:
- Use WebP format when possible
- Compress images before uploading
- Use appropriate sizes for different screen sizes
- Consider lazy loading for gallery images

### Code Optimization:
- Remove unused components
- Optimize bundle size with `npm run build`
- Use production build for deployment

## Troubleshooting

### Common Issues:

**Images not loading:**
- Check image URLs are accessible
- Verify HTTPS URLs for production
- Update alt text for accessibility

**Colors not changing:**
- Clear browser cache
- Restart development server
- Check Tailwind class names are correct

**Forms not working:**
- Verify EmailJS credentials in `src/config/email.ts`
- Check EmailJS dashboard for errors
- Test with valid email addresses

**Build errors:**
- Run `npm install` to ensure dependencies
- Check for TypeScript errors
- Verify all imports are correct

## Support

Need help with customization?
- Check the main README.md for detailed setup
- Follow SETUP-GUIDE.md for email configuration
- Review component files for examples
- Contact support if you get stuck

---

**🎉 Your salon website will be uniquely yours with these customizations!**

Remember: Start with basic customizations (business info, images, colors) then move to advanced features as needed.