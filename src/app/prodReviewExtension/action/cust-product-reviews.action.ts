import { Action } from '@ngrx/store';
import { Review } from '@spartacus/core';

export const CUST_POST_PRODUCT_REVIEW = '[Cust Product] Post Product Review';
export const CUST_POST_PRODUCT_REVIEW_FAIL = '[Cust Product] Post Product Review Fail';
export const CUST_POST_PRODUCT_REVIEW_SUCCESS =
  '[Cust Product] Post Product Review Success';

export class CustPostProductReview implements Action {
  readonly type = CUST_POST_PRODUCT_REVIEW;
  constructor(public payload: { productCode: string; review: Review }) {}
}

export class CustPostProductReviewFail implements Action {
  readonly type = CUST_POST_PRODUCT_REVIEW_FAIL;
  constructor(public payload: string) {}
}

export class CustPostProductReviewSuccess implements Action {
  readonly type = CUST_POST_PRODUCT_REVIEW_SUCCESS;
  constructor(public payload: Review) {}
}

// action types
export type ProductReviewsAction =

  | CustPostProductReview
  | CustPostProductReviewFail
  | CustPostProductReviewSuccess;
