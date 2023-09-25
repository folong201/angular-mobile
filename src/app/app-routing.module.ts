import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SavePersonalInfoComponent } from './save-personal-info/save-personal-info.component';
import { SaveFoodComponent } from './save-food/save-food.component';
import { ShowfoodhistcalorisComponent } from './showfoodhistcaloris/showfoodhistcaloris.component';
import { CalculatebmiComponent } from './calculatebmi/calculatebmi.component';
import { SnapandsaveComponent } from './snapandsave/snapandsave.component';

const routes: Routes = [
  {path:'',component:SavePersonalInfoComponent},
  {path:'savefood',component:SaveFoodComponent},
  { path: 'showhisto', component: ShowfoodhistcalorisComponent },
  { path: 'calculate', component: CalculatebmiComponent },
  { path: 'snap', component: SnapandsaveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
