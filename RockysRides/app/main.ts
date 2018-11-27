import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";

/*
    Angular 2 apps will have one main, top-level Component. U
    We kick-off the application by importing the AppModule 
    and bootstrapping it as the main component 
*/
platformBrowserDynamic().bootstrapModule(AppModule);
