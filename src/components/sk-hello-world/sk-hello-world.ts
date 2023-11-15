import { type PluginContract } from '@nintex/form-plugin-contract'
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { config } from './sk-hello-world.config';
import { styles } from './sk-hello-world.styles';

@customElement('plugin-elementname')
export class PageHighlight extends LitElement {
    static getMetaConfig = (): Promise<PluginContract> | PluginContract => config;
    static override styles = styles

    @property({ type: String })
    color!: string

    @property({ type: String })
    message!: string

    override render() {
        return html`
            <div>
                <h1>Hello world</h1>
                <span style='color: ${this.color}'>${this.message}</span>
            </div>
        `
    }
}