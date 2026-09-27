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

export function mount(id, nodes) {
    const target = document.getElementById(id);
    if (!target) return;

    target.replaceChildren(...[].concat(nodes));
}
