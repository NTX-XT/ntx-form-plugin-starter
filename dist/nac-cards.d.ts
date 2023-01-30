import { LitElement } from 'lit';
export default class NACCard extends LitElement {
    title: string;
    subtitle: string;
    text: string;
    imageUrl: string;
    link: string;
    static getMetaConfig(): import("./nintex-plugin").NintexPlugin;
    render(): import("lit-html").TemplateResult<1>;
    constructor();
}
