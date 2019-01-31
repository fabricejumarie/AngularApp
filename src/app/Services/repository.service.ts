import { Injectable } from '@angular/core';
import { Customer } from '../BusinessModel/customer';
import { Product } from '../BusinessModel/product';

@Injectable()
export class RepositoryService {

   _customerWithDependingData: Customer[];
   _products: Product[];

  constructor() {
  }

  getCustomerWithDependingData(): Customer[] {
    return this._customerWithDependingData;
  }

  getProducts(): Product[] {
    return this._products;
  }

}
