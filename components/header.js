const headerTemplate = document.createElement('template');

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `  
            <header>
                <div class="section-content">
                    <a href="http://tillkleinhans.com/">Till Kleinhans – Product Designer</a>
                </div>
            </header>
        `;
    }
}

window.customElements.define('header-component', Header);