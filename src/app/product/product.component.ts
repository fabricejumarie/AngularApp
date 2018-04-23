import { Component, OnInit } from '@angular/core';
import { UserService } from "../appModules/core/user.service";
import { UserServiceConfig } from "../appModules/core/user-service-config";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private _userServiceConfig: UserServiceConfig) {
  }

  ngOnInit() {
  }

  get userName (): string {
    return this._userServiceConfig.userName;
  }

  get isLoggedIn(): boolean {
    return this._userServiceConfig.isLoggedIn;
  }

}
