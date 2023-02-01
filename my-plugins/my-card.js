import { html, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export default class MyCard extends LitElement {
    static properties = {
        title: { type: String } = "My Card",
        text: { type: String } = "This is teh cards text",
        imageUrl: { type: String } = "https://www.nintex.com/wp-content/uploads/2018/05/logo-nintex-full.svg",
        link: { type: String } = "https://www.nintex.com",
    };

    static getMetaConfig() {
        return {
            controlName: 'my-card',
            fallbackDisableSubmit: false,
            description: 'Example of a card with dynamic data',
            groupName: 'Visual',
            version: '1.0',
            properties: {
                title: {
                    type: 'string',
                    title: 'The card title'
                },
                text: {
                    type: 'string',
                    title: 'Any text for the body of the card'
                },
                imageUrl: {
                    type: 'string',
                    title: 'the Url to an image',
                },
                link: {
                    type: 'string',
                    title: 'link url',
                }
            },
            standardProperties: {
                fieldLabel: false,
                description: false,
                defaultValue: false,
                readOnly: false,
            },
        };
    }

    render() {
        return html`
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
            <div class="card text-white bg-dark mb-3">
                <div class="header">${this.title}</div>
                <img src="${this.imageUrl}" class="card-img-top" alt="Plugin!"/>
                <div class="card-body">
                    <p class="card-text">${this.text}</p>
                    <a href="${this.link}" class="btn btn-primary">Link</a>
                </div>
            </div>`;
    }

    constructor() {
        super();
    }
}

const elementName = 'my-card';
customElements.define(elementName, MyCard);