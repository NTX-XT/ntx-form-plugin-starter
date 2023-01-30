import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('nac-card')
export class NACCard extends LitElement {
    @property({ type: String })
    title = "This is a card";

    @property({ type: String })
    subtitle = "It looks cool :)";

    @property({ type: String })
    text = "Use plugins to refine and create your unique UX";

    @property({ type: String })
    imageUrl = "image";

    @property({ type: String })
    link = "https://";

    static getMetaConfig(): Promise<NintexPlugin> | NintexPlugin {
        return {
            controlName: 'Card',
            fallbackDisableSubmit: false,
            description: 'Example of a card with dynamic data',
            groupName: 'Visual',
            version: '1.0',
            properties: {
                title: {
                    type: 'string',
                    title: 'The card title',
                    required: true
                },
                subtitle: {
                    type: 'string',
                    title: 'The card subtitle',
                    required: false
                },
                text: {
                    type: 'string',
                    title: 'Any text for the body of the card',
                    required: false
                },
                imageUrl: {
                    type: 'string',
                    title: 'the Url to an image',
                    required: false
                }
            },
            standardProperties: {
                fieldLabel: true,
                description: true,
                defaultValue: false,
                readOnly: false,
            },
        };
    }

    render() {
        return html`
            <div class="card" style="width: 18rem;">
                <img src="${this.imageUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">${this.text}</p>
                <a href="${this.link}" class="btn btn-primary">Link</a>
            </div>`;
    }

    constructor() {
        super();
    }
}