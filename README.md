This project is built in Angular 9. There are two component one is 'order-list' and another is 'order-detail'.

Order list take the info from a constant exportable json array and display info like Customer Name, No. of Items ordered, Total Amount of the Order, Status of the Order and 
state changing button. 
This button change the status to 'Preparing' and 'Ready to serve' based on previous state. This functionality is done using switch case. Another thing is that when the status is 'Ready to serve' then we have nothing to change so I have disabled to button using ngClass.

Another part is when you click on any oder the respective order details will open in 'order-detail' component. This is done using query params, route and activate route. This 'order-detail' component displays Items Name, Price, Total Price, Customer Name and Delivery Address.

# PizzaTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
