import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SavePersonalInfoComponent } from './save-personal-info/save-personal-info.component';
import { SaveFoodComponent } from './save-food/save-food.component';
import { ShowfoodhistcalorisComponent } from './showfoodhistcaloris/showfoodhistcaloris.component';
import { CalculatebmiComponent } from './calculatebmi/calculatebmi.component';
import { SnapandsaveComponent } from './snapandsave/snapandsave.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
//alors ?
@NgModule({
  declarations: [
    AppComponent,
    SavePersonalInfoComponent,
    SaveFoodComponent,
    ShowfoodhistcalorisComponent,
    CalculatebmiComponent,
    SnapandsaveComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
