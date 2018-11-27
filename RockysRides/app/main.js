"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
/*
    Angular 2 apps will have one main, top-level Component. U
    We kick-off the application by importing the AppModule
    and bootstrapping it as the main component
*/
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
