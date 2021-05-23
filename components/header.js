const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
    <style>
        header {
            margin: 48px 0px;
        }

        a {
            color: #212121;
            text-decoration: none;
        }

        @media only screen and (max-width: 600px) {
            header {
                margin: 30px 0px;
            }
        }
    </style>


    <header>
        <a href="http://tillkleinhans.com/">Till Kleinhans – Product Designer</a>
    </header>
`;

class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.appendChild(headerTemplate.content);
    }
}

window.customElements.define('header-component', Header);