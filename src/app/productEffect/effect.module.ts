import { NgModule } from '@angular/core';
import { JerryProductReviewsEffects } from './ext-product-effect';
import { EffectsModule } from '@ngrx/effects';


const effects: any[] = [ JerryProductReviewsEffects ];

@NgModule({
   imports:[ EffectsModule.forFeature(effects)]
  
})
export class ExtProductEffectModule {}
