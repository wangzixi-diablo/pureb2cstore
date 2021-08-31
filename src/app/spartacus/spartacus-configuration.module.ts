import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";

const result = provideConfig(layoutConfig);

// console.log('Jerry: ', result);

//result.useValue.layoutSlots.header.lg.slots = [];

function getConfigu(){
  // console.log('Ethan2');
  return 'cms/pages';
}
@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
    backend: {
      occ: {
        baseUrl: 'https://spartacus-demo.eastus.cloudapp.azure.com:8443/',
        endpoints: {
          component: 'cms/components/${id}',
          components: 'cms/components',
          pages: getConfigu(),
          page: 'cms/pages/${id}',
        },
      }
    },
  }), provideConfig(<SiteContextConfig>{
    context: {
      currency: ['USD'],
      language: ['en'],
      baseSite: ['electronics-spa']
    },
  }), provideConfig(<I18nConfig>{
    i18n: {
      resources: translations,
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }), provideConfig(<FeaturesConfig>{
    features: {
      level: '3.3'
    }
  })]
})
export class SpartacusConfigurationModule { }
