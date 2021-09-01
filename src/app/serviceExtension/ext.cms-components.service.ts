import { Injectable } from '@angular/core';
import { CmsComponentsService } from '@spartacus/storefront';

@Injectable({
    providedIn: 'root',
  })
export class ExtCmsComponentsService extends CmsComponentsService
{
    shouldRender(componentType: string): boolean {
        if( componentType === 'SimpleResponsiveBannerComponent'){
            console.log('Jerry should NOT render:', componentType);
            return false;
        }
        return super.shouldRender(componentType);
    }
}