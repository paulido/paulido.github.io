import { el, link } from './dom.js';

const OUTLINE_BUTTON = 'btn btn-outline-secondary btn-lg px-4';

function badge(text, variant = 'neutral') {
    const classes = {
        neutral: 'badge rounded-pill bg-light text-dark border fw-normal',
        brand: 'badge rounded-pill bg-primary bg-opacity-10 text-primary fw-medium',
    };

    return el('span', classes[variant], text);
}

function period(item) {
    return `${item.startDate} – ${item.endDate ?? 'Present'}`;
}

function profileLinks(profiles = []) {
    return profiles.map((profile) => link(profile.url, OUTLINE_BUTTON, profile.network));
}

function avatar(basics) {
    if (!basics.image) return [];

    const image = el('img', 'rounded-circle border border-4 border-light shadow-sm mb-4');
    image.src = basics.image;
    image.alt = `Portrait of ${basics.name}`;
    image.width = 120;
    image.height = 120;

    return [image];
}

export function renderHero(basics, hero) {
    const contactButton = el('a', 'btn btn-primary btn-lg px-4', 'Get in touch');
    contactButton.href = '#contact';

    return [
        ...avatar(basics),
        el('div', '', el('span', 'badge rounded-pill bg-primary bg-opacity-10 text-primary px-3 py-2 mb-4', hero.eyebrow)),
        el('h1', 'display-4 fw-bold mb-3', basics.name),
        el('p', 'fs-4 text-secondary mb-4', hero.tagline),
        el('p', 'text-secondary mb-5', basics.summary),
        el('div', 'd-flex flex-wrap gap-3', [contactButton, ...profileLinks(basics.profiles)]),
    ];
}

export function renderGlance(entries = []) {
    return entries.flatMap((entry) => [
        el('dt', 'col-5 fw-semibold', entry.label),
        el('dd', 'col-7 text-secondary mb-0', entry.value),
    ]);
}

export function renderFocusAreas(areas) {
    return areas.map((area, index) =>
        el('div', 'col-md-4', [
            el('article', 'card h-100 border-0 shadow-sm rounded-3', [
                el('div', 'card-body p-4', [
                    el('span', 'd-block small fw-semibold text-primary mb-3', String(index + 1).padStart(2, '0')),
                    el('h3', 'h5 card-title mb-3', area.title),
                    el('p', 'card-text text-secondary mb-4', area.description),
                    el('div', 'd-flex flex-wrap gap-2', area.tags.map((tag) => badge(tag, 'brand'))),
                ]),
            ]),
        ]),
    );
}

export function renderResearch(projects = []) {
    return projects.map((project) =>
        el('article', 'p-4 p-lg-5 rounded-3 bg-tertiary bg-opacity-10 border-start border-4 border-tertiary', [
            el('span', 'badge bg-white text-tertiary border border-tertiary mb-3', project.entity),
            el('h3', 'h4 mb-3', project.name),
            el('p', 'lead text-body-secondary mb-4', project.description),
            el(
                'div',
                'd-flex flex-wrap gap-4 mb-3',
                (project.highlights ?? []).map((text) => el('p', 'fs-4 fw-bold text-tertiary mb-0', text)),
            ),
            el('div', 'd-flex flex-wrap gap-2', (project.keywords ?? []).map((keyword) => badge(keyword))),
        ]),
    );
}

export function renderWork(work = []) {
    return work.map((job) => {
        const header = el('div', 'd-flex flex-column flex-md-row justify-content-between gap-2 mb-2', [
            el('div', '', [
                el('h3', 'h5 mb-1', job.position),
                el('p', 'fw-semibold text-primary mb-0', job.name),
            ]),
            el('div', '', [badge(period(job))]),
        ]);

        const children = [header];
        if (job.summary) children.push(el('p', 'small text-secondary fst-italic mb-2', job.summary));
        children.push(el('ul', 'text-secondary mb-0 ps-3', (job.highlights ?? []).map((text) => el('li', 'mb-1', text))));

        return el('li', 'position-relative border-start border-2 ps-4 pb-5', children);
    });
}

export function renderSkills(skills = []) {
    return skills.map((group) =>
        el('div', 'col-sm-6 col-lg-4', [
            el('div', 'h-100 p-4 bg-white border rounded-3', [
                el('h3', 'h6 text-uppercase text-secondary mb-3', group.name),
                el('div', 'd-flex flex-wrap gap-2', (group.keywords ?? []).map((keyword) => badge(keyword))),
            ]),
        ]),
    );
}

export function renderEducation(education = []) {
    return education.map((degree) =>
        el('li', 'list-group-item bg-transparent px-0 py-3 d-flex flex-column flex-sm-row justify-content-between gap-2', [
            el('div', '', [
                el('h3', 'h6 mb-1', `${degree.studyType} in ${degree.area}`),
                el('p', 'small text-secondary mb-0', degree.institution),
            ]),
            el('span', 'small text-secondary text-nowrap', period(degree)),
        ]),
    );
}

// JSON Resume dates may be partial ("2024", "2024-10"); UTC avoids an
// off-by-one month when the visitor is west of Greenwich.
function formatDate(iso) {
    const [year, month] = iso.split('-').map(Number);
    if (!month) return String(year);

    return new Date(Date.UTC(year, month - 1)).toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC',
    });
}

export function renderCertificates(certificates = []) {
    return certificates.map((certificate) => {
        const title = certificate.url
            ? link(certificate.url, 'link-underline-opacity-0 link-underline-opacity-100-hover', certificate.name)
            : certificate.name;

        return el('li', 'list-group-item bg-transparent px-0 py-3 d-flex flex-column flex-sm-row justify-content-between gap-2', [
            el('div', '', [
                el('h3', 'h6 mb-1', title),
                el('p', 'small text-secondary mb-0', certificate.issuer),
            ]),
            el('span', 'small text-secondary text-nowrap', formatDate(certificate.date)),
        ]);
    });
}

export function renderLanguages(languages = []) {
    return languages.map((item) => badge(item.fluency ? `${item.language} · ${item.fluency}` : item.language));
}

export function renderContact(basics) {
    return [link(`mailto:${basics.email}`, 'btn btn-primary btn-lg px-4', basics.email), ...profileLinks(basics.profiles)];
}
