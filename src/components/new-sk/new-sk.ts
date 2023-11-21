import { type PluginContract } from '@nintex/form-plugin-contract';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { config } from './new-sk.config';
import { styles } from './new-sk.styles';

@customElement('plugin-elementname')
export class NewSK extends LitElement {
	static getMetaConfig = (): Promise<PluginContract> | PluginContract => config;

	static override styles = styles;

	@property({ type: String })
	declare sampleProperty: string;

	constructor() {
		super();
		this.sampleProperty = '';
	}

	override render() {
		return html`<div><h1>${this.sampleProperty}</h1></div>`;
	}
}
