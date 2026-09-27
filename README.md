# Paul IDO - Portfolio

Personal portfolio of Paul IDO, software and cybersecurity engineer.
Static site built with Bootstrap 5.3 and native ES modules. No build step, no dependencies to install.

## Run locally

ES modules are blocked on `file://`, so serve the folder over HTTP:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Architecture

The code follows a layered structure inspired by Clean Architecture: dependencies point inward, and the content never depends on the presentation.

```
portfolio/
├── index.html              Page layout and static sections (hero, contact)
├── assets/css/theme.css    Brand palette mapped onto Bootstrap variables
└── src/
    ├── domain/profile.js   Content: expertise, research, experience, skills...
    ├── ui/dom.js           Safe DOM helpers (textContent only, no innerHTML)
    ├── ui/sections.js      Pure renderers: data in, DOM nodes out
    └── main.js             Composition root: wires content to the page
```

- **Update content**: edit `src/domain/profile.js` only.
- **Change the look**: edit the renderers in `src/ui/sections.js` or the markup in `index.html`.
- **Change colors**: edit `assets/css/theme.css`.

## Security

- Strict Content Security Policy (no inline scripts or styles, `default-src 'none'`).
- Subresource Integrity on the Bootstrap CDN files.
- Content is rendered with `textContent`, so it can never be interpreted as HTML.
- External links use `rel="noopener noreferrer"`.
