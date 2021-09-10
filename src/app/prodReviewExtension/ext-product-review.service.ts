import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductReviewService, StateWithProduct, Review, ProductActions } from '@spartacus/core';

@Injectable({
  providedIn: 'root',
})
export class CustomProductReviewService extends ProductReviewService {
  constructor(protected store: Store<StateWithProduct>) {
      super(store);
  }

  add(productCode: string, review: Review): void {
    console.log('Jerry action called!');
    this.store.dispatch(
      new ProductActions.PostProductReview({
        productCode: productCode,
        review,
      })
    );
  }
}
