import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage implements OnInit {

  constructor() { }

  public numero: number 

  public tabla = [];

  generar (){
    if(this.numero > 0){
      this.tabla = []
      for(let i = 1; i<=13; i++){
        this.tabla.push(i);
      }
      
    }

  }

  ngOnInit() {
  }

}
