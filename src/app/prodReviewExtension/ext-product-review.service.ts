import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductReviewService, StateWithProduct, Review} from '@spartacus/core';
import { CustProductActions } from './action';

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
      new CustProductActions.CustPostProductReview({
        productCode: productCode,
        review,
      })
    );
  }
}
