const footerTemplate = document.createElement('template');

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <h2>Let's connect</h2>
                <p>Get in touch for opportunities or just say hi 👋</p>
                <div class="footer-links">
                    <a href="mailto:hi@tillkleinhans.com">
                        <div class="icon-group">
                            <img class="icon" src="./source/icon-email.svg" />
                            hi@tillkleinhans.com
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/till/" target="_blank">
                        <div class="icon-group">
                            <img class="icon" src="./source/icon-linkedin.svg" />
                            LinkedIn
                        </div>
                    </a>
                    <a href="./imprint.html">Imprint</a>
                </div>
            </footer>
        `;
    }
}

window.customElements.define('footer-component', Footer);