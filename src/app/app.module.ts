import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MyfocusDirective } from './myfocus.directive';
import { CalculadoraS9Component } from './calculadora-s9/calculadora-s9.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    CalculadoraComponent,
    MyfocusDirective,
    CalculadoraS9Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
