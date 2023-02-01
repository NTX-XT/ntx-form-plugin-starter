import { html, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export default class MyCard extends LitElement {
    static properties = {
        cardTitle: { type: String },
        cardText: { type: String },
        imageUrl: { type: String },
        link: { type: String },
    };

    static getMetaConfig() {
        return {
            controlName: 'my-card',
            fallbackDisableSubmit: false,
            description: 'Example of a card with dynamic data',
            groupName: 'Visual',
            version: '1.0',
            properties: {
                cardTitle: {
                    type: 'string',
                    title: 'The card title'
                },
                cardText: {
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
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
            <div class="card text-white bg-dark mb-3" style="width: 18rem;">
                <div class="card-header">${this.cardTitle}</div>
                <img src="${this.imageUrl}" class="card-img-top" alt="Plugin!"/>
                <div class="card-body">
                    <p class="card-text">${this.cardText}</p>
                    <a href="${this.link}" class="btn btn-primary">Go!</a>
                </div>
            </div>`;
    }

    constructor() {
        super();
    }
}

const elementName = 'my-card';
customElements.define(elementName, MyCard);