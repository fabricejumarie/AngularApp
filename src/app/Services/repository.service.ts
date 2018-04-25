import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Customer } from "../BusinessModel/customer";
import { Product } from "../BusinessModel/product";

@Injectable()
export class RepositoryService {

   _customerWithDependingData: Customer[];
   _products: Product[];

  constructor() {
    this._customerWithDependingData = [
      {
        customerId: 'c01',
        lastName: 'Fabrice',
        firstName: 'J',
        email: 'fabricej@live.fr',
        productIds: ['p01','p02'],
        orders: [{
          orderId: 'o01',
          customerId: 'c01',
          productId: 'p01',
          product:  {
              productId: 'p01',
              productName: 'XBoxOne',
              referencePrice: 299,
              referencePriceCurrency: 'EUR'
            }
        },
        {
          orderId: 'o02',
          customerId: 'c01',
          productId: 'p02',
          product: {
              productId: 'p02',
              productName: 'PS4',
              referencePrice: 399,
              referencePriceCurrency: 'EUR'
            }
        }
        ]
      },

      {
        customerId: 'c02',
        lastName: 'Mr XXX',
        firstName: 'Do',
        email: 'xxx.do@gmail.com',
        productIds: ['p01'],
        orders: [{
          orderId: 'o03',
          customerId: 'c02',
          productId: 'p01',
          product:  {
              productId: 'p01',
              productName: 'XBoxOne',
              referencePrice: 299,
              referencePriceCurrency: 'EUR'
            }
        }
        ]
      }
    ];

    this._products = [
      {
        productId: 'p01',
        productName: 'XBoxOne',
        referencePrice: 299,
        referencePriceCurrency: 'EUR'
      },
      {
        productId: 'p02',
        productName: 'PS4',
        referencePrice: 399,
        referencePriceCurrency: 'EUR'
      },
      {
        productId: 'p03',
        productName: 'Nintendo Switch',
        referencePrice: 259,
        referencePriceCurrency: 'EUR'
      },
      {
        productId: 'p04',
        productName: 'Sega',
        referencePrice: 1,
        referencePriceCurrency: 'EUR'
      }
    ]
  }

  getCustomerWithDependingData(): Customer[]
  {
    return this._customerWithDependingData;
  }

  getProducts(): Product[] {
    return this._products;
  }

}
