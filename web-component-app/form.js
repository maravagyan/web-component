
class AppDrawer extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            'mode': 'open'
        });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
window.customElements.define('custom-tag2', AppDrawer);