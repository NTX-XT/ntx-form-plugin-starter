export const config = {
    controlName: 'Media Player',
      fallbackDisableSubmit: false,
      groupName: 'Starter Kit',
      version: '1.2',
      properties: {
        videosrc: {
          type: 'string',
          title: 'Media Source',
          description: 'Importend Youtube embeded link is needed (e.g https://www.youtube.com/embed/vpKcM4MxPzc)'
        },       
        Platform: {
          title: 'Platform',
          type: 'string',
        	enum: ['YouTube', 'Vimeo'],
          showAsRadio: false,
          verticalLayout: true,
          defaultValue: 'YouTube',
          description: 'Choose your Platform (YouTube is supported)'
        }         
        
      }

}