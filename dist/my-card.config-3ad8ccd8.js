var config = {
  controlName: 'my-card',
  fallbackDisableSubmit: false,
  description: 'Example of a visual card',
  groupName: 'My Plugins',
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
  }
};

export { config };
//# sourceMappingURL=my-card.config-3ad8ccd8.js.map
