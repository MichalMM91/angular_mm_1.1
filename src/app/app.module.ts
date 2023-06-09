import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMaterialModule } from './mymaterial.module';
import { MainComponent } from './MyComponents/main/main.component';
import { WeatherinfoComponent } from './MyComponents/main/weatherinfo/weatherinfo.component';
import { HomeComponent } from './MyComponents/main/home/home.component';
import { DiscoverComponent } from './MyComponents/main/discover/discover.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    WeatherinfoComponent,
    HomeComponent,
    DiscoverComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
