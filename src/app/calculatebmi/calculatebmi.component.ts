import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatebmi',
  templateUrl: './calculatebmi.component.html',
  styleUrls: ['./calculatebmi.component.css']
})
export class CalculatebmiComponent {
  poids!:number
  taille!:number
  imc!:number
  calculate(){
    this.imc = (this.poids * this.taille)
  }
}
