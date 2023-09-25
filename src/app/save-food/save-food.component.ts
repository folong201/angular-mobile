import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-food',
  templateUrl: './save-food.component.html',
  styleUrls: ['./save-food.component.css']
})
export class SaveFoodComponent  implements OnInit{
  ngOnInit(): void {
    this.setFoodList()
  }
  food:Food = new Food('','');
  foodList:Food[] = []

  savefood(){
    this.foodList.push(this.food)
    this.updateFoodList()
    console.log(this.foodList);

  }
  updateFoodList(){
    localStorage.setItem('foodList', JSON.stringify(this.foodList))
  }
  setFoodList(){
    this.foodList = JSON.parse(localStorage.getItem('foodList')!) || []
  }
  deleteAllFood(){
    this.foodList = []
    this.updateFoodList()
  }
}

class Food {
  name!: string
  calorie!: string
  constructor(name: string,
    calorie: string) {
    this.name = name
   this.calorie= calorie
  }
}
