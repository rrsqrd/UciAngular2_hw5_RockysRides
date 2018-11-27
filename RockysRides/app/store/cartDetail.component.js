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
var cart_model_1 = require("../model/cart.model");
var order_repository_1 = require("../model/order.repository");
var order_model_1 = require("../model/order.model");
var CartDetailComponent = (function () {
    function CartDetailComponent(orderRepository, cart, order) {
        this.orderRepository = orderRepository;
        this.cart = cart;
        this.order = order;
        this.orderSent = false;
        this.submitted = false;
    }
    CartDetailComponent.prototype.submitOrder = function () {
        //this.orderTotal =this.order.cart.cartPrice;
        //console.info("CartDetailComponent: submitOrder: orderTotal: " + this.orderTotal);
        var _this = this;
        console.info("CartDetailComponent: submitOrder: orderTotal: " + this.order.cart.cartPrice);
        // need deep copy, otherwise obj2=obj1 is same reference which is cleared
        // Observer onNext handler below so you end up with nada!
        this.submittedOrder = JSON.parse(JSON.stringify(this.order));
        this.submitted = true; // no submit button.
        this.orderRepository.saveOrder(this.order)
            .subscribe(function (order) {
            _this.order.clear();
            _this.orderSent = true;
            _this.submitted = false;
        });
    };
    CartDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "cartDetail.component.html"
        }), 
        __metadata('design:paramtypes', [order_repository_1.OrderRepository, cart_model_1.Cart, order_model_1.Order])
    ], CartDetailComponent);
    return CartDetailComponent;
}());
exports.CartDetailComponent = CartDetailComponent;
