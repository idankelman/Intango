# Client


##showing the result: a websocket connection that updates in real time and handles requests from multiple ports 
![image](https://user-images.githubusercontent.com/80175752/153442924-dca4b0f9-ceb6-458e-b34c-550fe1a41f74.png)

## e.g : <Port 4200 > < Port 4201 > 
![image](https://user-images.githubusercontent.com/80175752/153443098-281f57c7-8327-456e-8aae-270b58ef6e6c.png)

## in any case that you wish to open more instances of the same client , you need to add the following lines to <WebSocket.java>: 
'.setAllwedOrigins(http://localhost:<portNum>)'

![image](https://user-images.githubusercontent.com/80175752/153443170-8c5375e1-9b7a-4673-8c89-3a91b1b2b958.png)

## which is located at: 
![image](https://user-images.githubusercontent.com/80175752/153443184-21fcf18e-78bb-4a4d-b896-748fb90728db.png)




This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
