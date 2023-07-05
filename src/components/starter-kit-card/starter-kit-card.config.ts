import { type PluginContract } from '@nintex/form-plugin-contract'

export const config: PluginContract = {
	controlName: 'starter-kit-card',
	fallbackDisableSubmit: false,
	description: 'A configurable card, based on bootstrap 5',
	groupName: 'Starter Kit',
	version: '1.0',
	properties: {
		cardTitle: {
			type: 'string',
			title: 'Title',
		},
		cardText: {
			type: 'string',
			title: 'Text',
		},
		darkMode: {
			type: 'boolean',
			title: 'Dark mode',
		},
		centerText: {
			type: 'boolean',
			title: 'Center text',
		},
	},
	standardProperties: {
		fieldLabel: false,
		description: false,
		defaultValue: false,
		readOnly: false,
	},
}
