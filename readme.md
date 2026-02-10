# Brøn Studio Portfolio Website

A minimalist split-screen portfolio website for Brøn Studio, featuring vertical image formats, floating navigation, and clean typography.

## 🎨 Design Features

- **Vertical split-screen layout** (40% text / 60% images)
- **Floating navigation** positioned on top of images in white
- **Nimbus Sans Light typography** consistently in black
- **No accent colors** - pure black on white
- **No dividing lines** in text blocks
- **Parallax effects** responding to mouse and scroll
- **Fully responsive** design

## 📁 Project Structure

```
bronstudio-portfolio/
├── index.html          # Main HTML file
├── style.css           # Minimalist stylesheet
├── script.js           # Parallax animations
├── README.md           # This file
└── images/             # Your project photos
    ├── hero.jpg
    ├── het-1.jpg
    ├── hemmesta-1.jpg
    ├── maritime-1.jpg
    ├── astruptunet-1.jpg
    ├── urnes-1.jpg
    ├── gribskov-1.jpg
    ├── sjaellandsgade-1.jpg
    ├── ferraters-1.jpg
    ├── autopoul-1.jpg
    └── dune-1.jpg
```

## 🖼️ Images Needed

Add these 11 images to the `images` folder:

1. **hero.jpg** - Hero section background
2. **het-1.jpg** - HET Energy Accumulator, Malmö
3. **hemmesta-1.jpg** - Hemmesta Water Tower, Värmdö
4. **maritime-1.jpg** - Maritime Boarding School, Helsingør
5. **astruptunet-1.jpg** - Astruptunet Visitor Center, Norway
6. **urnes-1.jpg** - Urnes World Heritage Center, Norway
7. **gribskov-1.jpg** - Gribskov House, Denmark
8. **sjaellandsgade-1.jpg** - Sjællandsgade 21, Copenhagen
9. **ferraters-1.jpg** - Can Ferraters, Spain
10. **autopoul-1.jpg** - Autopoul, Copenhagen
11. **dune-1.jpg** - Dune Chart Pavilion, Copenhagen

**Image Specifications:**
- Format: JPG or PNG
- Orientation: Vertical/portrait preferred (to fill 60% width)
- Minimum size: 1200x1600px (3:4 ratio ideal)
- File size: Under 500KB (compress with tinypng.com)
- Quality: 80-90% compression

## 🚀 Deploy to Netlify (5 Minutes)

### Step 1: Prepare Files
1. Add your 11 images to the `images` folder
2. Ensure all files are in one folder

### Step 2: Deploy
1. Go to [netlify.com](https://netlify.com) and sign up (free)
2. Look for "Want to deploy a new site without connecting to Git?"
3. **Drag your entire folder** into the drop zone
4. Wait 30 seconds - done!

### Step 3: Custom URL
1. Go to Site Settings → Domain Management
2. Click "Edit site name"
3. Change to "bronstudio" → now it's `bronstudio.netlify.app`

### Step 4: Connect bronstudio.net
1. In Domain Management, click "Add custom domain"
2. Enter "bronstudio.net"
3. Follow Netlify's DNS instructions
4. Update DNS at your domain registrar
5. Wait 24-48 hours for DNS propagation

## 🎨 Customization

### Change Layout Proportions
Edit in `style.css` (lines 14-16):
```css
--split-width: 40%;      /* Text panel width */
--image-width: 60%;      /* Image panel width */
```

### Adjust Typography
All text uses Nimbus Sans Light (300 weight). To change size:
```css
h1 { font-size: clamp(2rem, 4vw, 3rem); }
h2 { font-size: clamp(1.5rem, 3vw, 2.25rem); }
p { font-size: clamp(0.9rem, 1.5vw, 1rem); }
```

### Modify Parallax Intensity
In `script.js`:
- Line 15: `const moveX = xPercent * 15;` (mouse movement)
- Line 41: `const speed = 0.3;` (scroll speed)

## 📱 Testing

Test on:
- Desktop browsers (Chrome, Firefox, Safari)
- Mobile devices (vertical images adapt)
- Tablets

Use browser dev tools (F12) to test different screen sizes.

## 🔧 Troubleshooting

**Navigation not visible on images?**
- The nav uses `mix-blend-mode: difference` to stay visible
- Works best on darker images
- If not visible, check image brightness

**Images not showing?**
- Check filenames match exactly (case-sensitive)
- Ensure images are in `images` folder
- Verify image formats (JPG/PNG)

**Layout issues?**
- Check CSS variables for width settings
- Test in different browsers

## 📞 Updates

To update your live site:
1. Make changes locally
2. Drag the entire folder to Netlify again
3. It will replace the old version

Or use GitHub for automatic deployments (I can help with this).

## 📄 License

© 2026 Brøn Studio. All rights reserved.

---

**Minimal. Precise. Architectural.** 🏛️
