import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { EffectsModule, Actions } from "@ngrx/effects";
import { StoreModule, Store } from "@ngrx/store";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { ConfigModule, Config,  ActiveCartService, StateWithMultiCart, EventService } from '@spartacus/core';
import { UserAccountModule } from '@spartacus/user';
import { CmsComponentsService, PageEvent } from '@spartacus/storefront';
import { ExtCmsComponentsService } from './serviceExtension/ext.cms-components.service';

import { ExtProductEffectModule } from './productEffect/effect.module';
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
    ExtProductEffectModule
    /*RegisterComponentModule,
    ExtLoginModule,
    ExtRegisterModule*/
  ],
  providers: [{ provide: DebugConfig, useExisting: Config },
              { provide: CmsComponentsService, useClass: ExtCmsComponentsService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private config: DebugConfig,
    private actions$: Actions,
    private cartService: ActiveCartService,
    private store: Store<StateWithMultiCart>,
    private eventService: EventService){
    // console.log('Jerry config: ', this.config);
    /*const action = this.actions$.pipe(
      ofType(CartActions.LOAD_CART),
      map((action: CartActions.LoadCart) => action.payload),
      tap((data) => console.log('Jerry cart: ' , data)));
      
    action.subscribe();
      
    const action2 = this.actions$.pipe(
      ofType(CartActions.LOAD_CART_SUCCESS),
      map((action: CartActions.LoadCartSuccess) => action.payload),
      tap((data) => console.log('Jerry cart SUCCESS: ' , data)));

    action2.subscribe();*/

    /*
    const store$ = this.store.pipe(select(MultiCartSelectors.getMultiCartEntities));

    const action3 = this.actions$.pipe(
      ofType(CartActions.LOAD_CART_SUCCESS),
      map((action: CartActions.LoadCartsSuccess) => action.payload),
      tap((data) => {
        console.log('Jerry cart SUCCESS: ' , data);
        
        store$.subscribe((value) => {
          console.log('Jerry result from selector: ', value);
        });
      }));
    
      action3.subscribe();

    */

    
    const loading$ = this.cartService.getLoading();
    
    loading$.subscribe((data) => console.log('Jerry cart loading? ', data));

    this.eventService.get(PageEvent).subscribe((x) => console.log('Jerry Page Event: ', x)); 
  }
}
