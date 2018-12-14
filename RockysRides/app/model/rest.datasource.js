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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var PROTOCOL = "http";
var PORT = 3500;
var RestDataSource = (function () {
    function RestDataSource(http) {
        this.http = http;
        this.baseUrl = PROTOCOL + "://" + location.hostname + ":" + PORT + "/";
    }
    // Code changes made to resolve compilation errors:
    // -changed return type to just as Observable<Product[]> or as Observable<Product>
    //      getProducts, saveProduct and updateProduct
    // -changed return type to just as Observable<Order[]> or as Observable<Order>    
    //      getOrders, saveOrder, updateOrder
    // -Added corresponding object type casting to each method returned object.
    //------------------------------------------------------
    // Products
    //------------------------------------------------------
    RestDataSource.prototype.getProducts = function () {
        return this.sendRequest(http_1.RequestMethod.Get, "products");
    };
    RestDataSource.prototype.saveProduct = function (product) {
        //console.info("RestDataSource: saveProduct (POST) product: " + JSON.stringify(product));
        return this.sendRequest(http_1.RequestMethod.Post, "products", product);
    };
    RestDataSource.prototype.updateProduct = function (product) {
        //console.info("RestDataSource: updateProduct (PUT) product: " + JSON.stringify(product));
        return this.sendRequest(http_1.RequestMethod.Put, "products/" + product.id, product);
    };
    //deleteProduct(id: number): Observable<Product> 
    RestDataSource.prototype.deleteProduct = function (id) {
        //console.info("RestDataSource: deleteProduct (DELETE) product: " + id);
        return this.sendRequest(http_1.RequestMethod.Delete, "products/" + id, null);
    };
    //------------------------------------------------------
    // Orders
    //------------------------------------------------------
    RestDataSource.prototype.getOrders = function () {
        return this.sendRequest(http_1.RequestMethod.Get, "orders", null);
    };
    //deleteOrder(id: number): 
    RestDataSource.prototype.deleteOrder = function (id) {
        return this.sendRequest(http_1.RequestMethod.Delete, "orders/" + id, null);
    };
    RestDataSource.prototype.updateOrder = function (order) {
        return this.sendRequest(http_1.RequestMethod.Put, "orders/" + order.id, order);
    };
    RestDataSource.prototype.saveOrder = function (order) {
        //console.info("RestDataSource: saveOrder (POST)");
        return this.sendRequest(http_1.RequestMethod.Post, "orders", order);
    };
    //---------------------
    // Send request for either Product or Order
    // Return an Observable of type Product, Product array, Order, or Order array
    //
    // Note:  since admin was not indicated/required for assignemnt
    //        tere is no authentication when making REST calls.
    //---------------------
    RestDataSource.prototype.sendRequest = function (verb, url, body) {
        console.info("RestDataSource: sendRequest url: " + url + ", RequestMethod: " + verb);
        var request = new http_1.Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        });
        console.info("RestDataSource: sendRequest: JSON.stringify request: " + JSON.stringify(request));
        return this.http.request(request).map(function (response) { return response.json(); });
    };
    RestDataSource = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RestDataSource);
    return RestDataSource;
}());
exports.RestDataSource = RestDataSource;
