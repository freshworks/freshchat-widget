# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Installation

* npm install `freshchat-widget`
* npm install `angular-freschat-widget`

## Steps For Widget Initilization

1. Import the module in `app.module.ts`

```
import { FreshchatModule } from 'angular-freshchat-widget';

imports: [
    BrowserModule,
    **FreshchatModule.forRoot()**
  ],

```

2. Import the service in consuming component

```
import { Subscription } from 'rxjs';
import { FreshchatService } from 'angular-freshchat-widget';

```

3. Consume service in the component constructor

```
constructor(private widgetService: FreshchatService) {

}    
```

4. General steps for using service logic were given in the `app.component.ts` file


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

