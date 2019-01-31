import { Component, OnInit } from '@angular/core';
import { UserService } from '../appModules/core/user.service';
import { UserServiceConfig } from '../appModules/core/user-service-config';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

_userName: string;
fileValue: any[] = [];
  constructor(private _userServiceConfig: UserServiceConfig) {

  }

  ngOnInit() {
  }

  get userName(): string {
    return this._userServiceConfig.userName;
  }

  set userName(value: string) {
    this._userServiceConfig.userName = value;
  }

  updateClick() {
    console.log(this.fileValue);
  }

}
