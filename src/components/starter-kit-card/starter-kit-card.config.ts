import { type PluginContract } from '@nintex/form-plugin-contract'

export const config: PluginContract = {
	controlName: 'starter-kit-card',
	fallbackDisableSubmit: false,
	description: 'Example of a visual card',
	groupName: 'Starter Kit',
	version: '1.0',
	properties: {
		cardTitle: {
			type: 'string',
			title: 'Title'
		},
		cardText: {
			type: 'string',
			title: 'Text'
		},
		imageUrl: {
			type: 'string',
			title: 'Image URL'
		},
		link: {
			type: 'string',
			title: 'Link URL'
		},
		darkMode: {
			type: 'boolean',
			title: 'Dark mode'
		},
		centerText: {
			type: 'boolean',
			title: 'Center text'
		}
	},
	standardProperties: {
		fieldLabel: false,
		description: false,
		defaultValue: false,
		readOnly: false
	},
}
