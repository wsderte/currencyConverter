import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
import { GetCurrencyService } from './services/getCurrency/getCurrency.service';
import { ConverterComponent } from './components/converter/converter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/formConvert/form.component';
import {MatButtonModule} from '@angular/material/button'; 
// import {MatIconModule} from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material';

@NgModule({ 
    declarations: [
        AppComponent,
        HeaderComponent,
        ConverterComponent,
        FormComponent,
    ],
    exports: [
        MatIconModule,
        MatButtonModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatDialogModule,
        MatToolbarModule,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatSlideToggleModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatDialogModule,
        MatToolbarModule
    ],
    providers: [GetCurrencyService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
