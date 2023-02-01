import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { config } from './nac-card.config'

@customElement('custom-card2')
export default class CustomCard extends LitElement {
    @property({ type: String })
    name = "This is a card";

    @property({ type: String })
    cardtext = "Use plugins to refine and create your unique UX";

    @property({ type: String })
    imageUrl = "image";

    @property({ type: String })
    link = "https://";

    static getMetaConfig() {
        return config;
    }

    render() {
        return html`
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
            <div class="card" style="width: 18rem;">
                <img src="${this.imageUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <p class="card-text">${this.cardtext}</p>
                <a href="${this.link}" class="btn btn-primary">Link</a>
            </div>`;
    }

    constructor() {
        super();
    }
}