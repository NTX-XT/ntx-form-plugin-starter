var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { config } from './nac-card.config';
let CustomCard = class CustomCard extends LitElement {
    static getMetaConfig() {
        return config;
    }
    render() {
        return html `
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
        this.name = "This is a card";
        this.cardtext = "Use plugins to refine and create your unique UX";
        this.imageUrl = "image";
        this.link = "https://";
    }
};
__decorate([
    property({ type: String })
], CustomCard.prototype, "name", void 0);
__decorate([
    property({ type: String })
], CustomCard.prototype, "cardtext", void 0);
__decorate([
    property({ type: String })
], CustomCard.prototype, "imageUrl", void 0);
__decorate([
    property({ type: String })
], CustomCard.prototype, "link", void 0);
CustomCard = __decorate([
    customElement('custom-card2')
], CustomCard);
export default CustomCard;
