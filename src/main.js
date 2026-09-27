// Composition root: the only place that knows both the data and the page layout.
import { loadPortfolio } from './data/loader.js';
import { el, mount } from './ui/dom.js';
import {
    renderContact,
    renderEducation,
    renderFocusAreas,
    renderGlance,
    renderHero,
    renderLanguages,
    renderResearch,
    renderSkills,
    renderWork,
} from './ui/sections.js';

function render({ resume, site }) {
    const theses = (resume.projects ?? []).filter((project) => project.type === 'thesis');

    mount('hero', renderHero(resume.basics, site.hero));
    mount('glance-list', renderGlance(site.glance));
    mount('expertise-intro', site.intros.expertise);
    mount('focus-list', renderFocusAreas(site.focusAreas));
    mount('research-intro', site.intros.research);
    mount('research-list', renderResearch(theses));
    mount('experience-list', renderWork(resume.work));
    mount('skill-list', renderSkills(resume.skills));
    mount('education-list', renderEducation(resume.education));
    mount('language-list', renderLanguages(resume.languages));
    mount('contact-intro', site.intros.contact);
    mount('contact-links', renderContact(resume.basics));
    mount('year', String(new Date().getFullYear()));
}

try {
    render(await loadPortfolio());
} catch (error) {
    console.error(error);
    mount('hero', el('div', 'alert alert-warning', 'The portfolio content could not be loaded. Please try again later.'));
}
