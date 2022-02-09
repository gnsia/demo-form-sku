import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormSkuComponent } from './form-sku/form-sku.component';
import { FormSkuWithBuilderComponent } from './form-sku-with-builder/form-sku-with-builder.component';
import { FormWithValidationsExplicitComponent } from './form-with-validations-explicit/form-with-validations-explicit.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSkuComponent,
    FormSkuWithBuilderComponent,
    FormWithValidationsExplicitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
