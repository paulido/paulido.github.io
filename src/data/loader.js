async function fetchJson(path) {
    const response = await fetch(path, { headers: { Accept: 'application/json' } });
    if (!response.ok) {
        throw new Error(`Failed to load ${path}: HTTP ${response.status}`);
    }

    return response.json();
}

// Full schema validation runs in CI; this only guards the fields the page
// cannot render without, so a broken file fails loudly instead of silently.
function assertShape(resume, site) {
    if (typeof resume?.basics?.name !== 'string') {
        throw new Error('resume.json: "basics.name" is required.');
    }
    for (const key of ['hero', 'intros']) {
        if (typeof site?.[key] !== 'object' || site[key] === null) {
            throw new Error(`site.json: "${key}" must be an object.`);
        }
    }
    if (!Array.isArray(site.focusAreas)) {
        throw new Error('site.json: "focusAreas" must be an array.');
    }
}

export async function loadPortfolio() {
    const [resume, site] = await Promise.all([fetchJson('data/resume.json'), fetchJson('data/site.json')]);
    assertShape(resume, site);

    return { resume, site };
}
