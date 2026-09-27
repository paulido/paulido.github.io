// Builds elements with textContent only, never innerHTML, so content can never
// be interpreted as markup (XSS-safe by construction).
export function el(tag, className = '', children = []) {
    const node = document.createElement(tag);
    if (className) node.className = className;

    for (const child of [].concat(children)) {
        node.append(typeof child === 'string' ? document.createTextNode(child) : child);
    }

    return node;
}

const SAFE_PROTOCOLS = new Set(['https:', 'mailto:']);

// URLs come from data files: reject anything that is not https or mailto
// (e.g. "javascript:") so a bad entry cannot become an injection vector.
export function link(href, className, text) {
    const url = new URL(href, window.location.href);
    if (!SAFE_PROTOCOLS.has(url.protocol)) {
        throw new Error(`Unsafe URL rejected: ${href}`);
    }

    const anchor = el('a', className, text);
    anchor.href = url.href;
    if (url.protocol === 'https:') {
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
    }

    return anchor;
}

export function mount(id, nodes) {
    const target = document.getElementById(id);
    if (!target) return;

    target.replaceChildren(...[].concat(nodes));
}
