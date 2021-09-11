import { Injectable, OnInit } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { ProductReviewsConnector } from '@spartacus/core';
import { CustProductActions } from './action';

@Injectable()
export class JerryProductReviewsEffects implements OnInit {
  ngOnInit(): void {
    console.log('JerryProduct Review init');
  }

  constructor(
    private actions$: Actions,
    private productReviewsConnector: ProductReviewsConnector
  ) {
    console.log('Ethan!!!');
  }

  @Effect()
  postProductReview: Observable <CustProductActions.CustPostProductReviewSuccess |
    CustProductActions.CustPostProductReviewFail >
    = this.actions$.pipe(
      ofType(CustProductActions.CUST_POST_PRODUCT_REVIEW),
      map((action: CustProductActions.CustPostProductReview) => action.payload),
      mergeMap((payload) => {
        return this.productReviewsConnector
          .add(payload.productCode, payload.review)
          .pipe(
            map((reviewResponse) => {
              return new CustProductActions.CustPostProductReviewSuccess(reviewResponse);
            }),
            catchError((_error) =>
              of (new CustProductActions.CustPostProductReviewFail(payload.productCode))
            )
          );
      })
    );

  @Effect({dispatch: false})
  showGlobalMessageOnPostProductReviewSuccess$ = this.actions$.pipe(
    ofType(CustProductActions.CUST_POST_PRODUCT_REVIEW_SUCCESS),
    tap(() => { 
      console.log("Jerry product review posts successfully!")})
    );
}