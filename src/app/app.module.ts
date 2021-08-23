import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { ConfigModule, Config } from '@spartacus/core';
import { UserAccountModule } from '@spartacus/user';
import { ExtLoginModule } from './loginExtension/extLogin.module';
import { RegisterComponentModule } from '@spartacus/storefront';
import { ExtRegisterModule } from './registerExtension/extRegister.module';
export abstract class DebugConfig {
  logConfig: boolean;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    BrowserTransferStateModule,
    ConfigModule.withConfig({
      logConfig: true
    } as DebugConfig
    ),
    UserAccountModule,
    /*RegisterComponentModule,
    ExtLoginModule,
    ExtRegisterModule*/
  ],
  providers: [{ provide: DebugConfig, useExisting: Config }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private config: DebugConfig){
    console.log('Jerry config: ', this.config);
  }

}
