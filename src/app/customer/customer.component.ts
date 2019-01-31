import { Component, OnInit } from '@angular/core';
import { UserService } from '../appModules/core/user.service';
import { UserServiceConfig } from '../appModules/core/user-service-config';
import { Customer } from '../BusinessModel/customer';
import { RepositoryService } from '../Services/repository.service';
import { Product } from '../BusinessModel/product';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [RepositoryService]
})
export class CustomerComponent implements OnInit {

  customers: Customer[];
  products: Product[];
  private _keyWord: string;

  constructor(private _userServiceConfig: UserServiceConfig,
  private _repositoryService: RepositoryService) {
  }

  ngOnInit() {
    this.customers = this._repositoryService.getCustomerWithDependingData();
    this.products = this._repositoryService.getProducts();
  }

  get userName (): string {
    return this._userServiceConfig.userName;
  }

  get isLoggedIn(): boolean {
    return this._userServiceConfig.isLoggedIn;
  }

  onSelectionChanged(e, dropDownBoxInstance) {
       const keys = e.selectedRowKeys;

       dropDownBoxInstance.option('value', keys.length > 0 ? keys : null);
      }

  onValueChanged(args, setValueMethod) {
    setValueMethod(args.value);
  }

  get keyWord(): string {
    return this._keyWord;
  }

  set keyWord(value: string) {
    this._keyWord = value;
  }

}
