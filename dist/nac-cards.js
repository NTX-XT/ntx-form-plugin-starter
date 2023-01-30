var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let NACCard = class NACCard extends LitElement {
    static getMetaConfig() {
        return import('./nac-cards.config');
    }
    render() {
        return html `
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
        this.title = "This is a card";
        this.subtitle = "It looks cool :)";
        this.text = "Use plugins to refine and create your unique UX";
        this.imageUrl = "image";
        this.link = "https://";
    }
};
__decorate([
    property({ type: String })
], NACCard.prototype, "title", void 0);
__decorate([
    property({ type: String })
], NACCard.prototype, "subtitle", void 0);
__decorate([
    property({ type: String })
], NACCard.prototype, "text", void 0);
__decorate([
    property({ type: String })
], NACCard.prototype, "imageUrl", void 0);
__decorate([
    property({ type: String })
], NACCard.prototype, "link", void 0);
NACCard = __decorate([
    customElement('nac-card')
], NACCard);
export default NACCard;
const elementName = 'nac-card';
customElements.define(elementName, NACCard);
