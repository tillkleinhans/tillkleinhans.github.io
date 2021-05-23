const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
    <style>
        footer {
            text-align: center;
        }

        @media only screen and (max-width: 600px) {
            
        }
    </style>


    <footer>
        <h2>Let's connect</h2>
        <p>Get in touch for opportunities or just say hi 👋</p>
        <a href="https://www.linkedin.com/in/till/" target="_blank">My LinkedIn profile</a>
    </footer>
`;

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(footerTemplate.content);
    }
}

window.customElements.define('footer-component', Footer);