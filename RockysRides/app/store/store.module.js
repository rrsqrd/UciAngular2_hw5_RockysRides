"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var model_module_1 = require("../model/model.module");
var store_component_1 = require("./store.component");
var cartDetail_component_1 = require("./cartDetail.component");
var orderTable_component_1 = require("./orderTable.component");
var StoreModule = (function () {
    function StoreModule() {
    }
    StoreModule = __decorate([
        core_1.NgModule({
            imports: [model_module_1.ModelModule, platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule],
            //------------------------	
            // declarations make directives (including components and pipes) from the current module 
            // available to other directives in the current module. Selectors of directives, components 
            // or pipes are only matched against the HTML if they are declared or imported.
            //------------------------
            declarations: [store_component_1.StoreComponent, cartDetail_component_1.CartDetailComponent, orderTable_component_1.OrderTableComponent],
            //------------------------				   
            //exports make components, directives, and pipes available in modules that add this module to imports.
            //------------------------	
            exports: [store_component_1.StoreComponent, cartDetail_component_1.CartDetailComponent, orderTable_component_1.OrderTableComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], StoreModule);
    return StoreModule;
}());
exports.StoreModule = StoreModule;
