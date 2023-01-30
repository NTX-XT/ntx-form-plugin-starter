export const config = {
    controlName: 'Card',
    fallbackDisableSubmit: false,
    description: 'Example of a card with dynamic data',
    groupName: 'Visual',
    version: '1.0',
    properties: {
        title: {
            type: 'string',
            title: 'The card title',
            required: true
        },
        subtitle: {
            type: 'string',
            title: 'The card subtitle',
            required: false
        },
        text: {
            type: 'string',
            title: 'Any text for the body of the card',
            required: false
        },
        imageUrl: {
            type: 'string',
            title: 'the Url to an image',
            required: false
        }
    },
    standardProperties: {
        fieldLabel: true,
        description: true,
        defaultValue: false,
        readOnly: false,
    },
};
