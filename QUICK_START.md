# Quick Start Guide

Get your Markdown to PDF Converter up and running in 3 simple steps!

## 🚀 Installation (2 minutes)

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including:
- React and React DOM
- Markdown parsing libraries
- PDF generation tools
- UI icons

### Step 2: Start the Application

```bash
npm start
```

The application will automatically open in your browser at `http://localhost:3000`

### Step 3: Start Creating!

You're all set! The application will load with a welcome template to help you get started.

---

## 📝 First Document in 30 Seconds

### Method 1: Use a Template

1. Click the **"Templates"** button in the toolbar
2. Choose from:
   - Welcome Guide
   - Project Documentation
   - Meeting Notes
   - Resume/CV
   - Blog Post
3. Click on any template to load it
4. Edit as needed
5. Click **"Generate PDF"** to download

### Method 2: Start from Scratch

1. Click the **"Clear"** button to start fresh
2. Type your markdown in the left editor:
   ```markdown
   # My First Document
   
   This is **bold** and this is *italic*.
   
   - Item 1
   - Item 2
   - Item 3
   ```
3. Watch the live preview on the right
4. Click **"Generate PDF"** when ready

---

## 🎯 Essential Features

### Dark Mode
Click the 🌙/☀️ icon in the top-right corner to toggle dark mode.

### PDF Options
1. Click the **"Options"** button
2. Customize:
   - **Page Size**: A4, Letter, or Legal
   - **Orientation**: Portrait or Landscape
   - **Margins**: Adjust in millimeters
3. Click **"Save Options"**

### Import Existing Files
1. Click **"Import"**
2. Select a `.md` or `.txt` file
3. Content loads automatically

### Export Your Work
- Click **"Export"** to save as a Markdown file
- Your work is also auto-saved to your browser's local storage

---

## 💡 Pro Tips

### Tip 1: Character Count
Keep an eye on the character count in the editor header to gauge document length.

### Tip 2: Auto-Save
Your work is automatically saved every few seconds. Close and reopen the browser - your content will still be there!

### Tip 3: Markdown Cheat Sheet

**Text Formatting:**
- `**bold**` → **bold**
- `*italic*` → *italic*
- `~~strikethrough~~` → ~~strikethrough~~

**Headings:**
```markdown
# Heading 1
## Heading 2
### Heading 3
```

**Lists:**
```markdown
- Unordered item
- Another item

1. Ordered item
2. Second item
```

**Links and Images:**
```markdown
[Link text](https://example.com)
![Image alt text](image-url.jpg)
```

**Code:**
```markdown
Inline `code` uses backticks

```javascript
// Code blocks use triple backticks
function hello() {
  console.log("Hello!");
}
```
```

**Blockquotes:**
```markdown
> This is a quote
```

**Tables:**
```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

---

## 🐛 Common Issues

### Issue: Port 3000 Already in Use
**Solution:** Kill the process using port 3000 or specify a different port:
```bash
PORT=3001 npm start
```

### Issue: PDF Generation Fails
**Solution:** 
1. Ensure the preview pane has fully loaded
2. Check browser console for errors
3. Try with simpler content first

### Issue: Content Not Auto-Saving
**Solution:**
1. Check if local storage is enabled in your browser
2. Ensure you're not in private/incognito mode

---

## 📚 Next Steps

1. **Customize Your Experience**
   - Edit `src/utils/templates.js` to add your own templates
   - Modify colors in `src/index.css`

2. **Learn More**
   - Check the full `README.md` for detailed documentation
   - Explore the component files in `src/components/`

3. **Build for Production**
   ```bash
   npm run build
   ```
   Deploy the `build/` folder to your hosting service

---

## ❓ Need Help?

- 📖 Read the full [README.md](README.md)
- 🐛 Report issues on GitHub
- 💬 Check browser console for error messages

---

**Happy writing! ✨**

