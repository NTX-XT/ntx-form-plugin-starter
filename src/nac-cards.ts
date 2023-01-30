import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';


@customElement('nintex-sample-grid-js')
export default class Card extends LitElement {
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

    static getMetaConfig() {
        return import('./nac-cards.config');
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
}