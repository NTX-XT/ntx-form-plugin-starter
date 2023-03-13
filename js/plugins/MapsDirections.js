/*
    Google Maps Directory Service 
    This PlugIn is used to calc Direction between 2 places using the Maps API
*/

import { html,LitElement,css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';


// define the component
export class DirectionsPlugin extends LitElement {
  
  static properties = {
    apiKey: {type: String}, 
    origin: {type: String},
    destination: {type: String},
    maptype: {type: String},
    long: {type: String}, 
    zoom: {type: String},
    avoid: {type: String},
    mode: {type: String}
    
  }; 

  static styles = css`

  .map-container {
      overflow:hidden;
      padding-bottom:56.25%;
      position:relative;
      height:0;
  }
  .map-container iframe{
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
  }

  `;
 
  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'Maps Directions',
      fallbackDisableSubmit: false,
      groupName: 'Google Maps',
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
    };
  }


  checkAdress() {
    if(this.origin) {
      console.log(this.origin);       
      
      return html`
       
       <div id="map-container-google-2" class="z-depth-1-half map-container" style="height: 500px">       
       <iframe src="https://www.google.com/maps/embed/v1/directions?key=${this.apiKey}&origin=${this.origin}&destination=${this.destination}&maptype=${this.maptype}&zoom=${this.zoom}" frameborder="0" style="border:0" allowfullscreen>dd</iframe>       

      `;
    
    }
    else {      
      return html`
        <p>Bitte geben Sie eine Adresse ein / Please enter an address  </p>  
      `;   
    }
  }     
  
  constructor() {
    super();
    this.checkAdress();
  }


  headerTemplate() {
    return html` <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>       
                `;
  }

  footerTemplate() {
    return html` </div> `;
  }
  
  render() {        

    return html`       
        
           ${this.headerTemplate()}
           ${this.checkAdress()} 
           ${this.footerTemplate()}
          
      
    `;     

  }
  
}

// registering the web component
const elementName = 'directions-plugin';
customElements.define(elementName, DirectionsPlugin);