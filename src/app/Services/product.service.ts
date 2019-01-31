import { Injectable } from '@angular/core';
import { Product } from '../BusinessModel/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  products: any[];
  private url: string;
  private httpheaders: HttpHeaders;

  constructor(private _http: HttpClient) {
    this.url = 'http://localhost:15956/api/products';
    this.httpheaders = new HttpHeaders().set('Content-Type', 'application/json');

    this.products = [
      {
        productId : '1',
        productName: 'Microsoft Surface',
        referencePrice: 1299,
        referencePriceCurrency: 'EUR'},
      {
        productId : '2',
        productName: 'iPad Pro',
        referencePrice: 1399,
        referencePriceCurrency: 'EUR'},
      {
        productId : '3',
        productName: 'Samsung Galaxy S10',
        referencePrice: 899,
        referencePriceCurrency: 'EUR'},
      {
        productId : '4',
        productName: 'Playstation 4',
        referencePrice: 299,
        referencePriceCurrency: 'EUR'}
      ];
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  async getAllProductsFromWebApi(): Promise<Product[]>  {
     return this._http.get<Product[]>(this.url, {headers: this.httpheaders, withCredentials: true}).toPromise();
  }

}
