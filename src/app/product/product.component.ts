import { Component, OnInit } from '@angular/core';
import notify from 'devextreme/ui/notify';

// import {GrammarGraph } from 'grammar-graph';
import * as GrammarGraph from 'grammar-graph';
import { Product } from '../BusinessModel/product';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  graph: GrammarGraph;
  productList: Product[];
  selectedProduct: Product;
  buttonOptions: any = {
    text: 'Register',
    type: 'success',
    useSubmitBehavior: true
  };

  constructor(private _productService: ProductService) {
    }

  ngOnInit() {
    this._productService.getAllProductsFromWebApi()
    .then(res => this.productList = res);
  }

  onSelectionChanged(e) {
    this.selectedProduct = e.selectedItem;
  }

  onFormSubmit = function(e) {
    notify({
        message: 'You have submitted the form',
        position: {
            my: 'center top',
            at: 'center top'
        }
    }, 'success', 3000);

    e.preventDefault();
  };
}
