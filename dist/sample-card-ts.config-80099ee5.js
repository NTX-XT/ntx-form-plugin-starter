var config = {
  controlName: 'sample-card-ts',
  fallbackDisableSubmit: false,
  description: 'Example of a visual card',
  groupName: 'Samples',
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
//# sourceMappingURL=sample-card-ts.config-80099ee5.js.map
