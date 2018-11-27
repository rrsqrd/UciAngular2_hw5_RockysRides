import { Component } 			from "@angular/core";

import { Product } 				from "../model/product.model";
import { ProductRepository } 	from "../model/product.repository";
import { Cart } 				from "../model/cart.model";

@Component({
    selector: "store",
    moduleId: module.id,
    templateUrl: "store.component.html" // contains html for Product table and tags for orderTable.
})


export class StoreComponent 
{
    constructor(private productRepository: ProductRepository,
				private cart: Cart)
	{
	}

    get products(): Product[] 
	{
		return this.productRepository.getProducts();
    }
	
    addProductToCart(product: Product) 
	{
        this.cart.addLine(product);
    }
}
