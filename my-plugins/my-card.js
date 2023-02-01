import { html, LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export default class MyCard extends LitElement {
    static properties = {
        cardTitle: { type: String },
        cardText: { type: String },
        imageUrl: { type: String },
        link: { type: String },
        darkMode: { type: Boolean },
        centerText: { type: Boolean }
    };

    static getMetaConfig() {
        return {
            controlName: 'my-card',
            fallbackDisableSubmit: false,
            description: 'Example of a visual card',
            groupName: 'My Plugins',
            version: '1.0',
            properties: {
                cardTitle: {
                    type: 'string',
                    title: 'Title'
                },
                cardText: {
                    type: 'string',
                    title: 'Text'
                },
                imageUrl: {
                    type: 'string',
                    title: 'Image URL',
                },
                link: {
                    type: 'string',
                    title: 'Link URL',
                },
                darkMode: {
                    type: 'boolean',
                    title: 'Dark mode'
                },
                centerText: {
                    type: 'boolean',
                    title: 'Center text'
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
        let cardStyle = this.darkMode ? "text-white bg-dark" : "";
        return html`
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
            <div class="card text-center ${cardStyle} mb-3" style="max-width: 18rem;">
                <h5 class="card-header">${this.cardTitle}</h5>
                <img src="${this.imageUrl}" class="card-img-top p-3" alt=""/>
                <div class="card-body">
                    <p class="card-text">${this.cardText}</p>
                    <a href="${this.link}" class="btn btn-primary">Go!</a>
                </div>
            </div>`;
    }

    constructor() {
        super();
        this.cardText = "This is a card";
        this.cardTitle = "My Card plugin";
        this.imageUrl = "https://www.nintex.com/wp-content/themes/portent_nintex/ui/images/nintex_logo.svgDa";
        this.link = "https://www.nintex.com/"
        this.darkMode = false;
    }
}

const elementName = 'my-card';
customElements.define(elementName, MyCard);