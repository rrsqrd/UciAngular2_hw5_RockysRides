
import { Injectable } 					from "@angular/core";
import { Http, Request, RequestMethod } from "@angular/http";

import { Observable } 					from "rxjs/Observable";
import { Product } 						from "./product.model";
import { Order } 						from "./order.model";
import "rxjs/add/operator/map";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource 
{
    baseUrl: string;    

    constructor(private http: Http) 
	{
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    // 11.26.2017 
    // Wtf, months after course completion, now i'm seeing compilation errors
    // related to the multiple return types from sendRequest(), see further on.
    // Code changes made to resolve those errors:
    // -changed return type to just as Observable<Product[]> or as Observable<Product>
    //      getProducts, saveProduct and updateProduct
    // -changed return type to just as Observable<Order[]> or as Observable<Order>    
    //      getOrders, saveOrder, updateOrder
    // -Added corresponding object type casting to each method returned object.


	//------------------------------------------------------
	// Products
    //------------------------------------------------------
    getProducts(): Observable<Product[]> 
    //getProducts(): Observable<Product | Product[] | Order | Order[]>
    {
        return this.sendRequest(RequestMethod.Get, "products") as Observable<Product[]>;
    }

    saveProduct(product: Product): Observable<Product> 
    //saveProduct(product: Product):  Observable<Product | Product[] | Order | Order[]>
	{
		//console.info("RestDataSource: saveProduct (POST) product: " + JSON.stringify(product));
        return this.sendRequest(RequestMethod.Post, "products", product) as Observable<Product>;
    }

    updateProduct(product): Observable<Product> 
    //updateProduct(product): Observable<Product | Product[] | Order | Order[]>
	{
		//console.info("RestDataSource: updateProduct (PUT) product: " + JSON.stringify(product));
        return this.sendRequest(RequestMethod.Put, `products/${product.id}`, product) as Observable<Product>;
    }

    //deleteProduct(id: number): Observable<Product> 
    deleteProduct(id: number): Observable<Product | Product[] | Order | Order[]>
	{
		//console.info("RestDataSource: deleteProduct (DELETE) product: " + id);
        return this.sendRequest(RequestMethod.Delete, `products/${id}`, null);
    }


    //------------------------------------------------------
	// Orders
    //------------------------------------------------------
    getOrders(): Observable<Order[]> 
    //getOrders(): Observable<Product | Product[] | Order | Order[]>
	{
        return this.sendRequest(RequestMethod.Get,   "orders", null) as Observable<Order[]>;
    }

    //deleteOrder(id: number): 
    deleteOrder(id: number): Observable<Product | Product[] | Order | Order[]>
    {
        return this.sendRequest(RequestMethod.Delete, `orders/${id}`, null);
    }

    updateOrder(order: Order): Observable<Order> 
    //updateOrder(order: Order): Observable<Product | Product[] | Order | Order[]>
    {        
        return this.sendRequest(RequestMethod.Put,   `orders/${order.id}`, order) as Observable<Order>;
    }

    saveOrder(order: Order): Observable<Order> 
    //saveOrder(order: Order): Observable<Product | Product[] | Order | Order[]> 
	{		
		//console.info("RestDataSource: saveOrder (POST)");
        return this.sendRequest(RequestMethod.Post,   "orders", order) as Observable<Order>;
    }

	//---------------------
	// Send request for either Product or Order
	// Return an Observable of type Product, Product array, Order, or Order array
    //
    // Note:  since admin was not indicated/required for assignemnt
    //        tere is no authentication when making REST calls.
	//---------------------
    private sendRequest(verb: RequestMethod,
						url: string, 
						body?: Product | Order)
						: Observable<Product | Product[] | Order | Order[]> 
	{
		console.info("RestDataSource: sendRequest url: " + url + ", RequestMethod: " + verb)

        let request = new Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        });

		console.info("RestDataSource: sendRequest: JSON.stringify request: " + JSON.stringify(request));
				
        return this.http.request(request).map(response => response.json());
    }
}
