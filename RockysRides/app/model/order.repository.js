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
var rest_datasource_1 = require("./rest.datasource");
var OrderRepository = (function () {
    function OrderRepository(dataSource) {
        this.dataSource = dataSource;
        this.orders = [];
        this.loaded = false;
    }
    //------------------------
    // Ch09 indicated loadOrders was used to ensure that 'the request'
    // was not sent to RESTful web service until authentication has been performed.
    // Loaded is a local flag variable.
    // I don't see the connection with this local variable and web services..
    //------------------------
    OrderRepository.prototype.loadOrders = function () {
        var _this = this;
        this.loaded = true;
        //11.26.2018 code change: added 'as Order[]' casting to orders
        this.dataSource.getOrders()
            .subscribe(function (orders) { return _this.orders = orders; });
    };
    OrderRepository.prototype.getOrders = function () {
        // flag prevents continuous return of orders 
        if (!this.loaded) {
            this.loadOrders();
        }
        return this.orders;
    };
    OrderRepository.prototype.saveOrder = function (order) {
        //-------------------------------------
        // -At the last minute and several attempts to  understand and resolve why the 
        //  browser needed refresh multiple times to show results of checked out orders,
        //  I added clearing of the loaded flag to this method.
        // -This 'seems' to have resolved failures to load the order table subsequent to checkout.
        //  Hope this wasn't a ruse...
        //-------------------------------------
        this.loaded = false;
        return this.dataSource.saveOrder(order);
    };
    OrderRepository.prototype.updateOrder = function (order) {
        var _this = this;
        this.dataSource.updateOrder(order)
            .subscribe(function (order) {
            _this.orders.splice(_this.orders.findIndex(function (o) { return o.id == order.id; }), 1, order);
        });
    };
    OrderRepository.prototype.deleteOrder = function (id) {
        var _this = this;
        this.dataSource.deleteOrder(id)
            .subscribe(function (order) {
            _this.orders.splice(_this.orders.findIndex(function (o) { return id == o.id; }));
        });
    };
    OrderRepository = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [rest_datasource_1.RestDataSource])
    ], OrderRepository);
    return OrderRepository;
}());
exports.OrderRepository = OrderRepository;
