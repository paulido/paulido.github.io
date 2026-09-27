// Composition root: the only place that knows both the content and the page layout.
import { education, experiences, focusAreas, languages, research, skillGroups } from './domain/profile.js';
import { mount } from './ui/dom.js';
import {
    renderEducation,
    renderExperiences,
    renderFocusAreas,
    renderLanguages,
    renderResearch,
    renderSkills,
} from './ui/sections.js';

mount('focus-list', renderFocusAreas(focusAreas));
mount('research-card', renderResearch(research));
mount('experience-list', renderExperiences(experiences));
mount('skill-list', renderSkills(skillGroups));
mount('education-list', renderEducation(education));
mount('language-list', renderLanguages(languages));
mount('year', String(new Date().getFullYear()));
