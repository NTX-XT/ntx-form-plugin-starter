import { LitElement } from 'lit';
export default class NACCard extends LitElement {
    title: string;
    subtitle: string;
    text: string;
    imageUrl: string;
    link: string;
    static getMetaConfig(): Promise<typeof import("./nac-cards.config")>;
    render(): import("lit-html").TemplateResult<1>;
    constructor();
}
