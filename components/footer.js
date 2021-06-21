const footerTemplate = document.createElement('template'); //TODO: remove if unnecessary

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <h2>Get in touch</h2>
                <!--<h2>Let's connect</h2>
                <p>Get in touch for opportunities or just say hi 👋</p>-->
                <div class="footer-links">
                    <a class="footer-link" href="mailto:hi@tillkleinhans.com">hi@tillkleinhans.com</a>
                    <a class="footer-link" href="https://www.linkedin.com/in/till/" target="_blank">LinkedIn</a>
                    <a class="footer-link" href="./imprint.html">Imprint</a>
                </div>
            </footer>
        `;
    }
}

window.customElements.define('footer-component', Footer);