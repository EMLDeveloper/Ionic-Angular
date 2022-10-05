import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  styleUrls: ['./sumadora.page.scss'],
})
export class SumadoraPage implements OnInit {

  resultado: string = "-";
  num1:string = "";
  num2:string = "";

  constructor() { }

  sumar() {
    this.resultado = (parseInt(this.num1)+parseInt(this.num2)).toString();
  }

  restar() {
    this.resultado = (parseInt(this.num1)-parseInt(this.num2)).toString();
  }
  
  multiplicar() {
    this.resultado = (parseInt(this.num1)*parseInt(this.num2)).toString();
  }

  dividir() {
    this.resultado = (parseInt(this.num1)/parseInt(this.num2)).toString();
  }

  ngOnInit() {
  }


}
