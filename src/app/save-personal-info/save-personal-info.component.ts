import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-personal-info',
  templateUrl: './save-personal-info.component.html',
  styleUrls: ['./save-personal-info.component.css']
})
export class SavePersonalInfoComponent implements OnInit {
  ngOnInit() {
    this.getinfo()
  }
  name!: string
  sexe!: any
  activite!: string
  poids!: number
  datenais!: string
  saveInfo() {
    var user = {
      name: this.name,
      sexe: this.sexe, activite:
        this.activite, poids: this.poids,
      datenais: this.datenais
    }
    console.log(user);
    console.log("info enregitrer");


    localStorage.setItem('user', JSON.stringify(user))
  }

  getinfo() {
    var user = JSON.parse(localStorage.getItem('user')!)
    this.name = user.name
    this.sexe = user.sexe
    this.activite = user.activite
    this.poids = user.poids
    this.datenais = user.datenais
  }
}
