import { NgModule } 		from "@angular/core";
import { BrowserModule }  	from "@angular/platform-browser";
import { FormsModule }    	from "@angular/forms";
import { RouterModule } 	from "@angular/router";

import { ModelModule } 	  		from "../model/model.module";
import { StoreComponent } 		from "./store.component";
import { CartDetailComponent }  from "./cartDetail.component";
import { OrderTableComponent }  from "./orderTable.component";

@NgModule({

    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],

	//------------------------	
	// declarations make directives (including components and pipes) from the current module 
	// available to other directives in the current module. Selectors of directives, components 
	// or pipes are only matched against the HTML if they are declared or imported.
	//------------------------
    declarations: [StoreComponent, CartDetailComponent, OrderTableComponent], 
				   
	//------------------------				   
	//exports make components, directives, and pipes available in modules that add this module to imports.
	//------------------------	
    exports: [StoreComponent, CartDetailComponent, OrderTableComponent]
})

export class StoreModule { }
