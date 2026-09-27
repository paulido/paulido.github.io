import { el } from './dom.js';

function badge(text, variant = 'neutral') {
    const classes = {
        neutral: 'badge rounded-pill bg-light text-dark border fw-normal',
        brand: 'badge rounded-pill bg-primary bg-opacity-10 text-primary fw-medium',
    };

    return el('span', classes[variant], text);
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

export function renderResearch(item) {
    const stats = item.highlights.map((stat) =>
        el('div', 'col-sm-4', [
            el('p', 'fs-4 fw-bold text-tertiary mb-0', stat.value),
            el('p', 'small text-secondary mb-0', stat.label),
        ]),
    );

    return el('article', 'p-4 p-lg-5 rounded-3 bg-tertiary bg-opacity-10 border-start border-4 border-tertiary', [
        el('span', 'badge bg-white text-tertiary border border-tertiary mb-3', item.label),
        el('h3', 'h4 mb-3', item.title),
        el('p', 'lead text-body-secondary mb-4', item.summary),
        el('div', 'row g-3', stats),
    ]);
}

export function renderExperiences(experiences) {
    return experiences.map((job) => {
        const header = el('div', 'd-flex flex-column flex-md-row justify-content-between gap-2 mb-2', [
            el('div', '', [
                el('h3', 'h5 mb-1', job.role),
                el('p', 'fw-semibold text-primary mb-0', job.organization),
            ]),
            el('div', '', [badge(job.period)]),
        ]);

        const children = [header];
        if (job.note) children.push(el('p', 'small text-secondary fst-italic mb-2', job.note));
        children.push(el('ul', 'text-secondary mb-0 ps-3', job.achievements.map((text) => el('li', 'mb-1', text))));

        return el('li', 'position-relative border-start border-2 ps-4 pb-5', children);
    });
}

export function renderSkills(groups) {
    return groups.map((group) =>
        el('div', 'col-sm-6 col-lg-4', [
            el('div', 'h-100 p-4 bg-white border rounded-3', [
                el('h3', 'h6 text-uppercase text-secondary mb-3', group.name),
                el('div', 'd-flex flex-wrap gap-2', group.items.map((item) => badge(item))),
            ]),
        ]),
    );
}

export function renderEducation(degrees) {
    return degrees.map((degree) =>
        el('li', 'list-group-item bg-transparent px-0 py-3 d-flex flex-column flex-sm-row justify-content-between gap-2', [
            el('div', '', [
                el('h3', 'h6 mb-1', degree.degree),
                el('p', 'small text-secondary mb-0', degree.school),
            ]),
            el('span', 'small text-secondary text-nowrap', degree.period),
        ]),
    );
}

export function renderLanguages(languages) {
    return languages.map((language) =>
        badge(language.level ? `${language.name} · ${language.level}` : language.name),
    );
}
