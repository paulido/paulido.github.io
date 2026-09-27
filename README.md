# Paul IDO - Portfolio

Personal portfolio of Paul IDO, software and cybersecurity engineer, published at https://paulido.github.io.
Static site built with Bootstrap 5.3 and native ES modules. No build step, no runtime dependencies.

## Run locally

ES modules and `fetch` are blocked on `file://`, so serve the folder over HTTP:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Architecture

Content lives in JSON files, separate from the code. Dependencies point one way: the data knows nothing about the UI, the UI knows nothing about where the data comes from, and only `main.js` connects them.

```
portfolio/
├── index.html                  Layout skeleton: sections and mount points, no content
├── assets/css/theme.css        Brand palette mapped onto Bootstrap variables
├── data/
│   ├── resume.json             Profile in the JSON Resume standard (portable)
│   └── site.json               Site-only content: hero, intros, focus areas
├── src/
│   ├── data/loader.js          Fetches the JSON files and checks required fields
│   ├── ui/dom.js               Safe DOM helpers (textContent only, URL allow-list)
│   ├── ui/sections.js          Pure renderers: data in, DOM nodes out
│   └── main.js                 Composition root
└── .github/workflows/
    └── validate-data.yml       Validates the data files on every push
```

### Where to change what

| Change | File |
| --- | --- |
| Experience, skills, education, languages, contact links, thesis | `data/resume.json` |
| Hero tagline, "At a glance", section intros, expertise cards | `data/site.json` |
| Section order or layout | `index.html` |
| How an item is displayed | `src/ui/sections.js` |
| Colors | `assets/css/theme.css` |

### Why JSON Resume

`data/resume.json` follows the [JSON Resume schema](https://jsonresume.org/schema), so the same file can be reused outside this site, for example to generate a PDF CV with any JSON Resume theme. Projects with `"type": "thesis"` are shown in the Research section.

Validate it locally with the same command as CI:

```bash
npm install --no-save --no-package-lock @jsonresume/schema@1.3.1 ajv-cli@5 ajv-formats@2
npx ajv validate --spec=draft7 -c ajv-formats -s node_modules/@jsonresume/schema/schema.json -d data/resume.json
```

## Security

- Strict Content Security Policy (`default-src 'none'`, no inline scripts or styles).
- Subresource Integrity on the Bootstrap CDN files.
- Content is rendered with `textContent`, never `innerHTML`.
- Links from data files are restricted to `https:` and `mailto:`.
- `resume.json` is public: do not add private data such as a phone number or address.
