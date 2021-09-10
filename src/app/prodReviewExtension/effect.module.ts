import { NgModule } from '@angular/core';
import { JerryProductReviewsEffects } from './cust-product-effect';
import { EffectsModule } from '@ngrx/effects';
import { ProductReviewService } from '@spartacus/core';
import { CustomProductReviewService } from './ext-product-review.service';


const effects: any[] = [ JerryProductReviewsEffects ];

@NgModule({
   imports:[ EffectsModule.forFeature(effects)],
   providers: [{ provide: ProductReviewService, 
               useClass: CustomProductReviewService}]
})
export class CustProductReviewModule {}
