import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { CoreModule } from "./appModules/core/core.module";
import { UserComponent } from './user/user.component';
import { UserServiceConfig } from "./appModules/core/user-service-config";

import {DxDataGridModule, DxDropDownBoxModule} from "devextreme-angular";
import { HighlightKeyWordPipe } from './pipe/highlight-key-word.pipe';


const appRoutes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'user', component: UserComponent },
  { path: '', redirectTo: '/product',  pathMatch: 'full'  },
  { path: '**', component: ProductComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CustomerComponent,
    UserComponent,
    HighlightKeyWordPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DxDataGridModule,
    DxDropDownBoxModule,
     CoreModule.forRoot(new UserServiceConfig()),
     RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
