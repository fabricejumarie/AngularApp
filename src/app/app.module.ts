import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { CoreModule } from './appModules/core/core.module';
import { UserComponent } from './user/user.component';
import { UserServiceConfig } from './appModules/core/user-service-config';

import {DxDataGridModule, DxDropDownBoxModule, DxTextAreaModule, DxFileUploaderModule, DxButtonModule, DxSelectBoxModule,
  DxTemplateModule, DxFormModule} from 'devextreme-angular';
import { HighlightKeyWordPipe } from './pipe/highlight-key-word.pipe';
import { GridWithComplexeDataTypeComponent } from './grid-with-complexe-data-type/grid-with-complexe-data-type.component';
import { AutoCompletionTextAreaComponent } from './auto-completion-text-area/auto-completion-text-area.component';


const appRoutes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'user', component: UserComponent },
  { path: 'superGrid', component: GridWithComplexeDataTypeComponent },
  { path: 'autoCompletionTextBox', component: AutoCompletionTextAreaComponent},
  { path: '', redirectTo: '/product',  pathMatch: 'full'  },
  { path: '**', component: ProductComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CustomerComponent,
    UserComponent,
    HighlightKeyWordPipe,
    GridWithComplexeDataTypeComponent,
    AutoCompletionTextAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DxDataGridModule,
    DxDropDownBoxModule,
    DxTextAreaModule,
    DxFileUploaderModule,
    DxButtonModule,
    DxSelectBoxModule,
    DxTemplateModule,
    DxFormModule,
    HttpClientModule,
     CoreModule.forRoot(new UserServiceConfig()),
     RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
