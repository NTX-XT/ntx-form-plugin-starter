/*
    Media Player Plugin
    This PlugIn can be used to show videos on the form plugin
*/

import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';


// define the component
export class MediaPlayerPlugIn extends LitElement {
  
  static properties = {
    videosrc: {type: String}, 
    Platform: {type: String}   
  };
  
  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'Media Player',
      fallbackDisableSubmit: false,
      groupName: 'Media Player',
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
    };
  }


  checkAdress() {
     
     if(this.videosrc) {
         
      
      return html`
                
            <div class="plyr__video-embed" id="player">
            <iframe
                src="${this.videosrc}?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1"
                allowfullscreen
                allowtransparency
                allow="autoplay"
            ></iframe>

      `;
    
    }
    else {      
      return html`
        <p>Bitte geben Sie ein Video ein / Please enter a source </p>  
      `;   
    }
  }     
  

  
  constructor() {
    super();
    this.checkAdress(); 
    
  }


  headerTemplate() {
    return html` <link rel="stylesheet" href="https://cdn.plyr.io/3.7.3/plyr.css">
                  <script src="https://cdn.plyr.io/3.7.3/plyr.js" integrity="sha384-33jVIndfkOX7H37cczCzt4rl3sbeUuYt1Qav5aQhKxf74q6Hz4dot4A/yYXZxF36" crossorigin="anonymous"></script>         
   
                
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
const elementName = 'starter-kit-mediaplayer';
customElements.define(elementName, MediaPlayerPlugIn);