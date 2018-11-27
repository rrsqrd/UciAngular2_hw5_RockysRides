
import { Injectable }       from "@angular/core";
import { Product }          from "./product.model";
import { RestDataSource }   from "./rest.datasource";

@Injectable()
export class ProductRepository 
{
    private products: Product[] = [];
    private categories: string[] = [];

	// ProductRepository service communicates with RestDataSource service
    constructor(private dataSource: RestDataSource) 
	{
		//ProductRepository subscribes to the dataSource
        dataSource.getProducts().subscribe(data => {
            //11.26.2018 code change: added 'as Product' casting
            this.products = data as Product[];  

            //this.categories = data.map(p => p.category)
            //                      .filter((c, index, array) => array.indexOf(c) == index).sort();

            // 11.26.2018 code change:  using 'this.products' instead argument 'data'
            // resolved error TS2339: 
            // Property 'map' does not exist on type 'Product | Order | Product[] | Order[]'.
            this.categories = this.products.map(p => p.category)
                                .filter((c, index, array) => array.indexOf(c) == index).sort();
        });		
    }

    getProducts(category: string = null): Product[] {
        return this.products
            .filter(p => category == null || category == p.category);
    }

    getProduct(id: number): Product {
        return this.products.find(p => p.id == id);
    }

    getCategories(): string[] {
        return this.categories;
    }

    saveProduct(product: Product) {
        if (product.id == null || product.id == 0) {
            this.dataSource.saveProduct(product)
                            // 11.26.2018 code change: added 'as Product' casting
							.subscribe(p => this.products.push(p as Product));
        } else 
		{
            this.dataSource.updateProduct(product)
                .subscribe(p => {
                    this.products.splice(this.products.
                        findIndex(p => p.id == product.id), 1, product);
                });
        }
    }

    deleteProduct(id: number) 
	{
        this.dataSource.deleteProduct(id).subscribe(p => {
            this.products.splice(this.products.
                findIndex(p => p.id == id), 1);
        })
    }
}
