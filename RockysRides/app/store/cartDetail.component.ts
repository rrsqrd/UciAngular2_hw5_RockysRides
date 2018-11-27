
import { Component } 			from "@angular/core";
import { Cart } 				from "../model/cart.model";
import { OrderRepository } 		from "../model/order.repository";
import { Order } 				from "../model/order.model";


@Component({
    moduleId: 		module.id,
    templateUrl: 	"cartDetail.component.html"
})

export class CartDetailComponent
{	
	orderSent: boolean = false;
    submitted: boolean = false;
    submittedOrder : Order;
    
    constructor(public  orderRepository: OrderRepository,
                public  cart:   Cart,
				public  order:  Order)
	{ }
    
    submitOrder() 
	{		
        //this.orderTotal =this.order.cart.cartPrice;
        //console.info("CartDetailComponent: submitOrder: orderTotal: " + this.orderTotal);
        
        console.info("CartDetailComponent: submitOrder: orderTotal: " + this.order.cart.cartPrice);
                
        // need deep copy, otherwise obj2=obj1 is same reference which is cleared
        // Observer onNext handler below so you end up with nada!
        this.submittedOrder = JSON.parse(JSON.stringify(this.order));
       
        this.submitted = true;  // no submit button.
        this.orderRepository.saveOrder(this.order)
			.subscribe(order => 
		{
                this.order.clear();
                this.orderSent = true;
                this.submitted = false;				
         });		 	
    }
}
