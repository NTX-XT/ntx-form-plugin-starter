# Form Plugins Starter Kit

The Form Plugins Starter Kit is a template repository used to develop Nintex Form Plugins using Lit. The kit contains:

- a server to locally host your plugins
- both javascript and typesctipt plugin samples

## Get Started

Install dependencies:
    
    npm i 
    packages\localdev\npm i

Run the server:

    npm start

The above are also available as a VS Code Task - `Serve`.

Register the plugin in your NAC tenant using the url of the plugin file - `https://127.0.0.1:8080/sample-card-ts.js`

## Updating and testing changes

Use the VS Code tasks to run the server of your preference as a background task.

Javascript plugins are just copied to the target folder - `./dist`. For Typescript plugins, runing `npm run build` in the `ts` project folder will refresh the generated javascript files. Alternatively, you can run the Default Build Task for VS Code - *Terminal > Run Build Task...*







