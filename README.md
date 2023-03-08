# NAC Plugin Starter Kit

The NAC Plugin Starter Kit is a template repository used to develop NAC Form Plugins using Lit. The kit contains:

- a server to locally host your plugins
- a javascript sample project
- a typescript sample project

## Get Started

Install dependencies:
    
    ts\npm i 
    js\npm i
    localdev\npm i

Run either the typescript or the javascript server:

    ts\npm start
    js\npm start

The above are also available as a VS Code Task - `Serve (JS)` and `Serve (TS)`.

Register the plugin in your NAC tenant using the url of the plugin file - `https://127.0.0.1:8081/sample-card-js.js` or `https://127.0.0.1:8080/sample-card-ts.js`

## Updating and testing changes

Use the VS Code tasks to run the server of your preference as a background task.

For Javascript plugins, you can update the files and refersh the form in NAC.

For Typescript plugins, runing `npm run build` in the `ts` project folder will refresh the generated javascript files. ThiCosmes is also provided as the Default Build Task for VS Code - *Terminal > Run Build Task...







