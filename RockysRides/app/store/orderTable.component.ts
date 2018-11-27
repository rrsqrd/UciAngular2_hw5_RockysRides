import { Component } from '@angular/core';

import { Order } 			from "../model/order.model";
import { OrderRepository }  from "../model/order.repository";

@Component({    
	selector: 		"paOrderTable",  	// element tag to dispaly orderTable, used in store.component.html
    moduleId: 		module.id,
    templateUrl: 	"orderTable.component.html"  
})

export class OrderTableComponent 
{
    private orders: Order[] = [];

	constructor(private orderRepository: OrderRepository)
	{		
	}

    getOrders(): Order[] 
	{      
        this.orders = this.orderRepository.getOrders();
        //if(this.orders.length > 0)
        //    console.info("OrderTableComponent: getOrders (GET) orders: " + JSON.stringify(this.orders));
        return this.orders;             
    }	
	
    deleteOrder(id: number) 
	{
        this.orderRepository.deleteOrder(id);
    }
	
	deleteOrderHistory()
	{
		let orders = this.orderRepository.getOrders();
		for(var i=0; i < orders.length; i++)
		{
			let order = orders[i];
			this.deleteOrder(order.id);
		}
	}  
}
