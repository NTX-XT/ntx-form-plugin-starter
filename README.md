# NAC Plugin Starter Kit

The NAC Plugin Starter Kit is a template repository used to develop NAC Form Plugins using Lit. The kit contains:

- a server to locally host your plugins
- a javascript sample project
- a typescript sample project

## Get Started

Install dependencies:
    
    ts\npm i 
    js\npm i
    lecaldev\npm i

Run either the typescript or the javascript server:

    ts\npm start
    js\npm start

The above are also available as a VS Code Task - `Serve (JS)` and `Serve (TS)`.

Register the plugin in your NAC tenant

## Updating and testing changes

Any update to the js files will be automatically reflected in NAC.

For Typescript plugins, runing `npm run build` in the `ts` project folder will refresh the generated javascript files. This is also provided as the Default Build Task for VS Code - *Terminal > Run Build Task...*







