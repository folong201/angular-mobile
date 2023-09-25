// import Chart from 'chart.js/auto';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showfoodhistcaloris',
  templateUrl: './showfoodhistcaloris.component.html',
  styleUrls: ['./showfoodhistcaloris.component.css']
})
export class ShowfoodhistcalorisComponent {
  // Définir les données du diagramme
  public chartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Série A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Série B' }
  ];

  // Définir les libellés du diagramme
  public chartLabels = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'];

  // Définir le type de diagramme
  public chartType = 'line';

  // Définir les options du diagramme
  public chartOptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  // Définir si la légende doit être affichée ou non
  public chartLegend = true;

  // Fonction de rappel pour la survol du diagramme
  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  // Fonction de rappel pour le clic sur le diagramme
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
