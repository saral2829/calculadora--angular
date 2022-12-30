import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MyfocusDirective } from './myfocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    CalculadoraComponent,
    MyfocusDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
