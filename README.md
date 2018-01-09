# BookmarkManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Project task

Create a CRUD application that allows the user to manage online bookmarks. They should be able to enter a link, a description, tags separated by a comma and a visibility flag. The bookmarks should be displayed as a default page, from the newest entries to the oldest ones. Users should be also able to filter bookmarks based on tags. Make an admin page where all bookmarks are displayed no matter of their visibility status, as opposed to the others. The data should be stored into local storage initially, but then create a new service to interact with a real server via HTTP (resp. locally served JSON file). Make sure you write tests for the components && services used.

Bonus points: use a Redux-like library to apply a unidirectional dataflow to the application.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
