import { NintexPlugin } from './nintex-plugin';

export const config: NintexPlugin = export const config = {
    controlName: 'custom-card2',
    fallbackDisableSubmit: false,
    description: 'Example of a card with dynamic data',
    groupName: 'Visual',
    version: '1.0',
    properties: {
        name: {
            type: 'string',
            title: 'The card title'
        },
        cardtext: {
            type: 'string',
            title: 'Any text for the body of the card'
        },
        imageUrl: {
            type: 'string',
            title: 'the Url to an image',
        },
        link: {
            type: 'string',
            title: 'link url',
        }
    },
    standardProperties: {
        fieldLabel: true,
        description: true,
        defaultValue: false,
        readOnly: false,
    },
};