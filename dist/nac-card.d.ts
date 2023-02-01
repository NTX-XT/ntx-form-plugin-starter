import { LitElement } from 'lit';
export default class CustomCard extends LitElement {
    name: string;
    cardtext: string;
    imageUrl: string;
    link: string;
    static getMetaConfig(): import("./nintex-plugin").NintexPlugin;
    render(): import("lit-html").TemplateResult<1>;
    constructor();
}
