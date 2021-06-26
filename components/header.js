class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `  
            <header>
                <div class="section-content">
                    <a class="title" href="./index.html">
                        <span class="text-block">Till Kleinhans <div class="desktop-only">– </div></span>
                        <span class="text-block desktop-only">Product Designer</span>
                    </a>
                </div>
            </header>
        `;
    }
}

window.customElements.define('header-component', Header);