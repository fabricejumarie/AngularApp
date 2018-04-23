import { Injectable, Optional } from '@angular/core';
import { UserServiceConfig } from "./user-service-config";

@Injectable()
export class UserService {

  _userName: string;
  _isLoggedIn: boolean;
  
  constructor(@Optional() userServiceConfig: UserServiceConfig) {
    userServiceConfig.userName = "Initialization";
    // this._userName = userServiceConfig.userName;
    this._isLoggedIn = userServiceConfig.isLoggedIn;
  }

}
