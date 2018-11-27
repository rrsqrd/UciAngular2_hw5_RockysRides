import { NgModule } 			from "@angular/core";
import { HttpModule } 			from "@angular/http";

import { ProductRepository } 	from "./product.repository";
import { Cart } 				from "./cart.model";
import { Order } 				from "./order.model";
import { OrderRepository }  	from "./order.repository";
import { RestDataSource } 		from "./rest.datasource";

@NgModule({
    imports: [HttpModule],

    providers: [ProductRepository, 
				Cart, Order, 
				OrderRepository,
				 //-----------------------------
				 // Ch08
				 // -Switch from static dummy data to RestData.				 
				 //  rest.datasource.ts defines the same methods.
				 // -Now when app needs an instance of StaticDataSource
				 //  is uses/substitutes RestDataSource instead.
				 //-----------------------------				 				
				//{ provide: StaticDataSource, useClass: RestDataSource },
			 
				RestDataSource]
})
export class ModelModule { }
