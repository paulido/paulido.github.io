// Single source of truth for the portfolio content. Pure data: no DOM access,
// so the content can change without touching the presentation layer.

export const focusAreas = Object.freeze([
    {
        title: 'Software Engineering',
        description:
            'Maintainable back-end and front-end applications built on Clean Architecture principles: clear boundaries, testable business rules and framework-independent core logic.',
        tags: ['Clean Architecture', 'Laravel', 'Angular', 'Vue.js'],
    },
    {
        title: 'Cybersecurity',
        description:
            'Application security audits, infrastructure hardening and security modules integrated from the design phase rather than added afterwards.',
        tags: ['OWASP', 'Pentesting', 'Audit', 'Hardening'],
    },
    {
        title: 'Data Science & AI',
        description:
            'Applying machine learning and deep learning to security problems, from feature extraction to model evaluation.',
        tags: ['Deep Learning', 'Python', 'Malware Detection'],
    },
]);

export const research = Object.freeze({
    label: "Master's thesis",
    title: 'Android malware detection using artificial intelligence',
    summary:
        'Design and evaluation of a deep learning model that classifies Android applications as benign or malicious, reaching 97% accuracy.',
    highlights: [
        { value: '97%', label: 'Accuracy' },
        { value: 'Deep Learning', label: 'Approach' },
        { value: 'Android', label: 'Target platform' },
    ],
});

export const experiences = Object.freeze([
    {
        organization: 'Ministry of Commerce',
        role: 'Head of Networks & Systems Department',
        period: '2023 – Present',
        note: 'Head of department since 2024',
        achievements: [
            'Administer the ministry systems and network infrastructure.',
            'Deploy containerized applications with Docker.',
            'Develop the eSIAO platform (Laravel, Angular).',
            'Design an event management application.',
            'Implement application audit and security modules.',
        ],
    },
    {
        organization: '2MF Consulting',
        role: 'Web Developer (Freelance)',
        period: '2022 – 2025',
        achievements: [
            'Built the ABNORM web portal (WordPress): content management and customization.',
            'Developed CMS-based web platforms with interactive mapping.',
            'Set up monitoring and evaluation systems (Google Sheets, web).',
        ],
    },
]);

export const skillGroups = Object.freeze([
    { name: 'Backend', items: ['Laravel', 'PHP', 'Python'] },
    { name: 'Frontend', items: ['Angular', 'Vue.js', 'JavaScript'] },
    { name: 'Security', items: ['OWASP ZAP', 'Burp Suite', 'Nmap'] },
    { name: 'DevOps', items: ['Docker', 'Git'] },
    { name: 'Systems', items: ['Linux', 'Networking'] },
    { name: 'CMS', items: ['WordPress (themes, plugins, administration)'] },
]);

export const education = Object.freeze([
    {
        degree: "Master's degree in Cybersecurity",
        school: 'Joseph KI-ZERBO University',
        period: '2019 – 2022',
    },
    {
        degree: "Bachelor's degree in Information Systems & Networks",
        school: 'Joseph KI-ZERBO University',
        period: '2014 – 2017',
    },
]);

export const languages = Object.freeze([
    { name: 'French', level: 'Fluent' },
    { name: 'English', level: 'Professional' },
    { name: 'Moore' },
    { name: 'Dioula' },
    { name: 'Gurunsi' },
]);
