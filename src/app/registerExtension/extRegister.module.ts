import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  CmsConfig,
  I18nModule,
  NotAuthGuard,
  provideDefaultConfig,
  UrlModule,
} from '@spartacus/core';
import { FormErrorsModule, SpinnerModule } from '@spartacus/storefront';
import { ExtRegisterComponent } from './extRegister.component';

@NgModule({
  imports: [CommonModule, RouterModule, UrlModule, I18nModule],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        RegisterCustomerComponent: {
          component: ExtRegisterComponent,
        },
      },
    }),
  ],
  declarations: [ExtRegisterComponent],
})
export class ExtRegisterModule {}
