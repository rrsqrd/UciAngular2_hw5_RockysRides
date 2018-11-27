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
var product_repository_1 = require("../model/product.repository");
var cart_model_1 = require("../model/cart.model");
var StoreComponent = (function () {
    function StoreComponent(productRepository, cart) {
        this.productRepository = productRepository;
        this.cart = cart;
    }
    Object.defineProperty(StoreComponent.prototype, "products", {
        get: function () {
            return this.productRepository.getProducts();
        },
        enumerable: true,
        configurable: true
    });
    StoreComponent.prototype.addProductToCart = function (product) {
        this.cart.addLine(product);
    };
    StoreComponent = __decorate([
        core_1.Component({
            selector: "store",
            moduleId: module.id,
            templateUrl: "store.component.html" // contains html for Product table and tags for orderTable.
        }), 
        __metadata('design:paramtypes', [product_repository_1.ProductRepository, cart_model_1.Cart])
    ], StoreComponent);
    return StoreComponent;
}());
exports.StoreComponent = StoreComponent;
