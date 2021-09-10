import { Injectable, OnInit } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import { ProductReviewsConnector, GlobalMessageService, ProductActions, ErrorModel } from '@spartacus/core';

@Injectable()
export class JerryProductReviewsEffects implements OnInit{
    ngOnInit(): void {
        console.log('JerryProduct Review init');
    }

    constructor(
        private actions$: Actions,
        private productReviewsConnector: ProductReviewsConnector,
        private globalMessageService: GlobalMessageService
      ) {
          console.log('Ethan!!!');
      }

      @Effect()
      loadProductReviews$: Observable<
        | ProductActions.LoadProductReviewsSuccess
        | ProductActions.LoadProductReviewsFail
      > = this.actions$.pipe(
        ofType(ProductActions.LOAD_PRODUCT_REVIEWS),
        map((action: ProductActions.LoadProductReviews) => action.payload),
        mergeMap((productCode) => {
          return this.productReviewsConnector.get(productCode).pipe(
            map((data) => {

              console.log('Ethan!!!!!!!!');
              return new ProductActions.LoadProductReviewsSuccess({
                productCode,
                list: data,
              });
            }),
            catchError((_error) =>
              of(
                new ProductActions.LoadProductReviewsFail({
                  message: productCode,
                } as ErrorModel)
              )
            )
          );
        })
      );
}