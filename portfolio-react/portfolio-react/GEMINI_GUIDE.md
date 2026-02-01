# Quick Start Guide - Using Gemini Agent in VS Code

## Initial Setup

### 1. Open the Project in VS Code
```bash
cd portfolio-react
code .
```

### 2. Install Dependencies
Open the integrated terminal (Ctrl+` or Cmd+`) and run:
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

Your site will be at `http://localhost:5173`

---

## Working with Gemini Agent in VS Code

### Using Gemini for Component Edits

**Example prompts you can use:**

1. **Customize Hero Section:**
   ```
   Update the Hero component (src/components/Hero.jsx) to use my actual name: 
   [Your Name] and change the subtitle to [Your Custom Subtitle]
   ```

2. **Add New Projects:**
   ```
   In src/components/Projects.jsx, replace the placeholder projects with these:
   
   Project 1:
   - Title: [Your Project]
   - Type: Backend API
   - Description: [Your description]
   - Tech: Python, Django, PostgreSQL
   - GitHub: [Your GitHub URL]
   ```

3. **Change Color Scheme:**
   ```
   Update tailwind.config.js to use a blue/teal color scheme instead of 
   the current dark theme. Make the accent color #00d9ff
   ```

4. **Add a New Section:**
   ```
   Create a new component called Experience.jsx that shows my work experience 
   in a timeline format. Add it between Skills and Projects sections.
   ```

5. **Modify Animations:**
   ```
   In Hero.jsx, make the fade-in animation slower and add a slight scale 
   effect to the heading
   ```

---

## File Structure Reference

### Most Important Files to Edit:

**Personal Info:**
- `src/components/Navbar.jsx` - Your name in nav
- `src/components/Hero.jsx` - Main headline and intro
- `src/components/Contact.jsx` - Email, GitHub, LinkedIn links

**Content:**
- `src/components/About.jsx` - Your story
- `src/components/Skills.jsx` - Your tech stack
- `src/components/Projects.jsx` - Your projects
- `src/components/HowIWork.jsx` - Your principles

**Styling:**
- `tailwind.config.js` - Colors and theme
- `src/index.css` - Global styles

---

## Common Gemini Prompts for Portfolio Development

### Adding Features

**Add a resume download button:**
```
Add a "Download Resume" button to the Hero section that links to 
/resume.pdf. Style it to match the existing buttons.
```

**Add smooth scroll behavior:**
```
Ensure all navigation links scroll smoothly to their sections. 
Add an active state to nav links based on scroll position.
```

**Add a blog section:**
```
Create a new Blog component that displays blog post cards. Each card 
should show title, date, excerpt, and a "Read More" link. Add it 
before the Contact section.
```

### Styling Changes

**Make it lighter:**
```
Change the entire color scheme from dark to light mode. Update all 
background and text colors in tailwind.config.js
```

**Add glassmorphism effect:**
```
Update the Navbar to have a glassmorphism effect with backdrop blur 
and subtle transparency
```

**Change typography:**
```
Update the font family to use 'Space Grotesk' from Google Fonts for 
headings and 'Inter' for body text
```

### Animation Tweaks

**Add hover effects:**
```
Add a hover effect to project cards that shows a subtle glow and 
increases the scale slightly
```

**Stagger animations:**
```
Make the skill category cards animate in with a stagger effect when 
scrolling into view
```

---

## Testing Your Changes

### Hot Reload
When you make changes, the browser automatically refreshes. If it doesn't:
1. Check the terminal for errors
2. Try stopping the server (Ctrl+C) and running `npm run dev` again

### Check Responsiveness
Use browser dev tools (F12) and toggle device toolbar to test mobile views.

### Build for Production
```bash
npm run build
npm run preview
```

This shows how it will look when deployed.

---

## Deployment with Gemini's Help

**Deploy to Vercel:**
```
Help me deploy this portfolio to Vercel. What commands do I need to run 
and what configuration is needed?
```

**Deploy to Netlify:**
```
I want to deploy to Netlify. Create the necessary netlify.toml 
configuration file and tell me the deployment steps.
```

---

## Troubleshooting with Gemini

If you encounter errors, you can ask:

```
I'm getting this error: [paste error message]. How do I fix it?
```

```
The animations aren't working smoothly on mobile. How can I optimize them?
```

```
My project cards aren't aligning correctly on tablet screens. 
Can you fix the responsive grid in Projects.jsx?
```

---

## Pro Tips

1. **Keep dev server running** - Changes appear instantly
2. **Use Gemini for refactoring** - "Refactor the Projects component to use a separate ProjectCard component"
3. **Ask for best practices** - "Is this the best way to structure this component?"
4. **Request accessibility improvements** - "Add ARIA labels and improve keyboard navigation"
5. **Optimize performance** - "How can I make this component load faster?"

---

## Next Steps After Setup

1. ✅ Replace all placeholder content with your real information
2. ✅ Add your actual projects with descriptions
3. ✅ Update contact links
4. ✅ Customize colors to match your preference
5. ✅ Add your resume/CV download link
6. ✅ Test on different devices
7. ✅ Deploy to production

Happy coding! 🚀
