# My Portfolio

A simple portfolio made of three files (HTML, CSS, JavaScript) and an images folder.

## Structure

```
portfolio/
├── index.html      → main page (content structure)
├── style.css       → stylesheet (appearance and responsiveness)
├── script.js       → interactions (mobile menu, projects, form)
├── images/         → put your images here (photos, project previews)
└── README.md       → this file
```

## How to use it

1. **Customize the content**
   - Replace the `[Your Name]` placeholders in `index.html`.
   - Add your projects to the `projects` array in `script.js`.

2. **Add images**
   - Drop your images into the `images/` folder.
   - Update the paths in `script.js`
     (example: `images/project-showcase.jpg`).
   - The hero does not use an image: its color comes from the CSS.

3. **Open the site**
   - Simply open `index.html` in a browser.
   - No server or dependencies are required.

## Features

- Smooth navigation and a responsive menu (mobile / tablet / desktop)
- Project grid generated dynamically by `script.js`
- Demo contact form (messages are not actually sent)
- Automatic year in the footer

## Customizing colors

All colors are defined in the CSS variables at the top of `style.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e293b;
    --background: #f8fafc;
    --text: #334155;
}
```

Change these values to update the whole theme at once.
