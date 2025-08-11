# Sharon Webster - UX Research Portfolio

A clean, professional portfolio website showcasing UX research expertise and case studies.

## 🚀 Quick Start

1. **Update Content**: Edit `content.js` to modify all website text, images, and links
2. **Add Images**: Place images in the `images/` folder
3. **Add Case Studies**: Create new HTML files in the `case-studies/` folder
4. **Deploy**: Push to GitHub and enable GitHub Pages

## 📁 Project Structure

```
sharon-webster.work/
├── index.html              # Main homepage
├── content.js             # All website content (EDIT THIS)
├── css/
│   └── style.css          # All styling
├── js/
│   └── script.js          # Interactive functionality
├── images/               # Image files
├── case-studies/         # Individual case study pages
└── README.md            # This file
```

## ✏️ How to Edit Content

### Main Content
All website text, links, and metadata can be updated in `content.js`. This file contains:

- **Site metadata** (title, description)
- **Hero section** (title, subtitle, description, CTAs)
- **About section** (bio, skills, stats)
- **Work section** (case study previews)
- **Contact information**

### Adding Images
1. Add your images to the `images/` folder
2. Update the image paths in `content.js`
3. Use these recommended image sizes:
   - Profile photo: 400x400px (square)
   - Case study images: 600x400px (landscape)

### Adding New Case Studies
1. Create a new HTML file in `case-studies/` (e.g., `new-project.html`)
2. Copy the structure from existing case studies
3. Add the new case study to the `work.caseStudies` array in `content.js`

### Example Case Study Entry in content.js:
```javascript
{
    title: "Your Project Title",
    description: "Brief description of the project and impact...",
    image: {
        src: "images/your-project-image.jpg",
        alt: "Your Project Description"
    },
    tags: ["Research Method", "Key Skill", "Outcome Type"],
    link: "case-studies/your-project.html"
}
```

## 🎨 Customizing Design

### Colors
Update the CSS custom properties in `css/style.css` (lines 11-23):
```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --text-dark: #1e293b;          /* Dark text */
    --text-medium: #475569;        /* Medium text */
    /* ... more colors */
}
```

### Typography
The site uses Inter font by default. To change:
1. Update the Google Fonts link in `index.html`
2. Update `--font-family` in `css/style.css`

## 📱 Responsive Design

The site is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Adding New Sections

To add a new section to the homepage:

1. **Add HTML structure** in `index.html`:
```html
<section class="new-section" id="new-section">
    <div class="container">
        <!-- Your content here -->
    </div>
</section>
```

2. **Add navigation link**:
```html
<li class="nav-item">
    <a href="#new-section" class="nav-link">New Section</a>
</li>
```

3. **Add CSS styling** in `css/style.css`

4. **Update content.js** if the section needs editable content

## 🚀 Deployment with GitHub Pages

1. **Push to GitHub**:
```bash
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from branch: main"
   - Your site will be available at: `https://davidcognite.github.io/sharon-webster.work/`

## 🔄 Regular Updates

### Adding New Work
1. Create the case study HTML file
2. Add images to `images/` folder
3. Update `content.js` with new case study info
4. Commit and push changes

### Updating Contact Info
1. Edit the `contact` section in `content.js`
2. Commit and push changes

### Performance Tips
- Optimize images (use WebP format when possible)
- Keep image files under 500KB
- Test on mobile devices regularly

## 🎯 SEO Optimization

The site includes:
- Semantic HTML structure
- Meta descriptions
- Alt text for images
- Clean URLs for case studies
- Fast loading times
- Mobile-first responsive design

## 📞 Support

For questions about updating content or technical issues, refer to this README or check the comments in `content.js` and CSS files.

---

**Remember**: Always test your changes locally before deploying, and keep image files optimized for web use!