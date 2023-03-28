

export const config = {
    controlName: 'Maps Canvas',
      fallbackDisableSubmit: false,
      groupName: 'Starter Kit',
      version: '1.2',
      pluginAuthor: 'Sven Berling',
      properties: {
        apiKey: {
          type: 'string',
          title: 'API Key',
          description: 'Please enter your Google API Key'
        },
        
        FormattedAdress: {
          type: 'string',
          title: 'Formatted Adress',
          description: 'Please add from Adress Control the formatted Adress'
        },
        maptype: {
          title: 'Map Type',
          type: 'string',
        	enum: ['roadmap', 'satellite'],
          showAsRadio: false,
          verticalLayout: true,
          defaultValue: 'roadmap',
          description: 'Choose your Map Type: roadmap and satellite'
        },
        zoom: {
          title: 'Zoom',
          type: 'string',
        	enum: ['1', '2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','21'],
          showAsRadio: false,
          verticalLayout: true,
          defaultValue: '11',
          description: 'Values from 0 (the whole world) to 21 (individual buildings). The upper limit may vary depending on the map data for the selected location.'
        }   
        
      }
}