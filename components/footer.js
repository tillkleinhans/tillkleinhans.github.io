const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
    <style>
        footer {
            text-align: center;
            margin-bottom: 70px;
        }

        footer a {
            padding: 0px 20px;
            text-decoration: none;
            color: #212121;
        }

        .footer-links {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }

        .icon-group {
            display: flex;
        }

        .icon {
            width: 25px;
            height: 25px;
            margin-right: 5px;
        }

        @media only screen and (max-width: 600px) {
            
        }
    </style>


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