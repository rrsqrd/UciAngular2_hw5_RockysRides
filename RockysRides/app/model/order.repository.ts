
import { Injectable }       from "@angular/core";
import { Observable } 		from "rxjs/Observable";
import { Order } 			from "./order.model";
import { RestDataSource } 	from "./rest.datasource";

@Injectable()
export class OrderRepository {
    private orders: Order[] = [];
    private loaded: boolean = false;

    constructor(private dataSource: RestDataSource) { }

    //------------------------
    // Ch09 indicated loadOrders was used to ensure that 'the request'
    // was not sent to RESTful web service until authentication has been performed.
    // Loaded is a local flag variable.
    // I don't see the connection with this local variable and web services..
    //------------------------
    loadOrders() {
        this.loaded = true;

        //11.26.2018 code change: added 'as Order[]' casting to orders
        this.dataSource.getOrders()
            .subscribe(orders => this.orders = orders as Order[]);
    }

    getOrders(): Order[] {
        // flag prevents continuous return of orders 
        if (!this.loaded) {
            this.loadOrders();
        }
        return this.orders;
    }

    saveOrder(order: Order): Observable<Order> 
	{		
        //-------------------------------------
        // -At the last minute and several attempts to  understand and resolve why the 
        //  browser needed refresh multiple times to show results of checked out orders,
        //  I added clearing of the loaded flag to this method.
        // -This 'seems' to have resolved failures to load the order table subsequent to checkout.
        //  Hope this wasn't a ruse...
        //-------------------------------------
        this.loaded = false;
        return this.dataSource.saveOrder(order); 
    }
	
    updateOrder(order: Order) {
        this.dataSource.updateOrder(order)
			.subscribe(order => {
				this.orders.splice(this.orders.findIndex(o => o.id == order.id), 1, order);
			});
    }

    deleteOrder(id: number) {
			this.dataSource.deleteOrder(id)
			.subscribe(order => 
			{
				this.orders.splice(this.orders.findIndex(o => id == o.id));
			});
    }
}
