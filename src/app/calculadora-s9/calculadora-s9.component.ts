import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-s9',
  templateUrl: './calculadora-s9.component.html',
  styleUrls: ['./calculadora-s9.component.css']
})
export class CalculadoraS9Component  {

  num1:number=0;
  num2:number=0;
  operaciones:string='defecto';
  resultado:number=0;
  

  onSumar():number {
    return this.resultado=this.num1+this.num2;
  }

  onResta():number{
    return this.resultado=this.num1-this.num2;
  }
    onMulti():number{
  return this.resultado=this.num1 * this.num2;
  }

  onDivi():number{
  return this.resultado=this.num1/this.num2;
  }

  calcular():number {
    if(this.operaciones==='suma'){
      return this.onSumar();
     

    }
    else if(this.operaciones==='resta'){
   return this.onResta();
   
 
    }else if(this.operaciones==='multi'){
      return this.onMulti();
     
    }else if(this.operaciones==='divi'){
     return this.onDivi();
    
   }
    return 0;
 
 }
}



