import Chart from 'chart.js/auto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showfoodhistcaloris',
  templateUrl: './showfoodhistcaloris.component.html',
  styleUrls: ['./showfoodhistcaloris.component.css']
})
export class ShowfoodhistcalorisComponent implements OnInit {
  foodList:Food[]=[]
  ngOnInit(): void {
    this.printChart()
    this.setFoodList()
  }

  printChart(){
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    const myChart = new Chart(ctx!, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
          label: 'Sales',
          data: [12, 19, 3, 5, 2, 5, 59, 80, 81, 56, 55, 40, 28, 48, 40, 19, 86, 27, 90],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  setFoodList(){
    this.foodList = JSON.parse(localStorage.getItem("foodList")!) || []
    console.log(this.foodList || "rien ne s'est passer");

  }
}
class Food {
  name!: string
  calorie!: string
  constructor(name: string,
    calorie: string) {
    this.name = name
    this.calorie = calorie
  }
}
