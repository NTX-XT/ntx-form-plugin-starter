/*
    Google Maps Canvas  
    This PlugIn can be used to show the location on a map on the form
*/


import { html,LitElement,css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
import {config} from './starter-kit-maps.config';


// define the component
export class MapsPlugin extends LitElement {
  
  static properties = {
    apiKey: {type: String}, 
    FormattedAdress: {type: String},
    maptype: {type: String},
    long: {type: String}, 
    zoom: {type: String}
    
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
  static getMetaConfig = () => config;
    
  checkAdress() {
    if(this.FormattedAdress) {
      console.log(this.FormattedAdress);       
      
      return html`
       
       <div id="map-container-google-2" class="z-depth-1-half map-container" style="height: 500px">       
       <iframe src="https://www.google.com/maps/embed/v1/place?key=${this.apiKey}&q=${this.FormattedAdress}&maptype=${this.maptype}&zoom=${this.zoom}" frameborder="0" style="border:0" allowfullscreen>dd</iframe>       

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

    
    //this.calc = this.calculateValues();   
    
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
const elementName = 'starter-kit-maps';
customElements.define(elementName, MapsPlugin);