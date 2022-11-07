import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http'
import { GetCurrencyService } from './services/getCurrency/getCurrency.service';
import { ConverterComponent } from './components/converter/converter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/formConvert/form.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConverterComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GetCurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
