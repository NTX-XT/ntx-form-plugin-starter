

export const config = {
  controlName: 'Maps Directions',
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
    origin: {
      title: 'Orgin',
      type: 'string',          
      description: 'Defines the starting point from which to display directions.'
    },
    destination: {
      title: 'destination',
        type: 'string',           
        description: 'Defines the end point of the directions.'
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
    avoid: {
        title: 'Avoid on Route',
        type: 'string',
          enum: ['tolls', 'ferries','highways'],
        showAsRadio: false,
        verticalLayout: true,
        defaultValue: 'tolls',
        description: 'Specifies features to avoid in directions. Note that this doesnt preclude routes that include the restricted feature(s); it biases the result to more favorable routes.'
      },
      mode: {
        title: 'Defines the method of travel',
        type: 'string',
          enum: ['driving', 'walking','bicycling','transit','flying'],
        showAsRadio: false,
        verticalLayout: true,
        defaultValue: 'driving',
        description: 'Defines the method of travel. If no mode is specified the Maps Embed API will show one or more of the most relevant modes for the specified route.'
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