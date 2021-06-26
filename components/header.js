const headerTemplate = document.createElement('template'); //TODO: remove if unnecessary

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `  
            <header>
                <div class="section-content">
                    <a class="title" href="./index.html">
                        <span class="text-block">Till Kleinhans – </span>
                        <span class="text-block">Product Designer</span>
                    </a>
                </div>
            </header>
        `;
    }
}

window.customElements.define('header-component', Header);