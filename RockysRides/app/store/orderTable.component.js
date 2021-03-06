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
var core_1 = require('@angular/core');
var order_repository_1 = require("../model/order.repository");
var OrderTableComponent = (function () {
    function OrderTableComponent(orderRepository) {
        this.orderRepository = orderRepository;
        this.orders = [];
    }
    OrderTableComponent.prototype.getOrders = function () {
        this.orders = this.orderRepository.getOrders();
        //if(this.orders.length > 0)
        //    console.info("OrderTableComponent: getOrders (GET) orders: " + JSON.stringify(this.orders));
        return this.orders;
    };
    OrderTableComponent.prototype.deleteOrder = function (id) {
        this.orderRepository.deleteOrder(id);
    };
    OrderTableComponent.prototype.deleteOrderHistory = function () {
        var orders = this.orderRepository.getOrders();
        for (var i = 0; i < orders.length; i++) {
            var order = orders[i];
            this.deleteOrder(order.id);
        }
    };
    OrderTableComponent = __decorate([
        core_1.Component({
            selector: "paOrderTable",
            moduleId: module.id,
            templateUrl: "orderTable.component.html"
        }), 
        __metadata('design:paramtypes', [order_repository_1.OrderRepository])
    ], OrderTableComponent);
    return OrderTableComponent;
}());
exports.OrderTableComponent = OrderTableComponent;
