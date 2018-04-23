import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from "./user.service";
import { UserServiceConfig } from "./user-service-config";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

   static forRoot(config: UserServiceConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
      {provide: UserServiceConfig, useValue: config }
      ]
    };
  }

}
