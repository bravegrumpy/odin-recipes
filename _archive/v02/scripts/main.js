class Footer extends HTMLElement {
    constructor() {
        super();

        const footerParent = this.parentNode;
        let foot = document.createElement('footer');
        foot.innerHTML = `<p>Copyright &copy; 2025 Bravegrumpy</p>`;
        footerParent.appendChild(foot);
    }
}

customElements.define('bravegrumpy-footer', Footer);