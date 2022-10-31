
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPageComponent } from './core/header-page/header-page.component';
import { FooterPageComponent } from './core/footer-page/footer-page.component';
import { ListComponent } from './shared/components/list/list.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ProdsPageComponent } from './page/prods-page/prods-page.component';
import { GestionPageComponent } from './page/gestion-page/gestion-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RatingModule} from 'primeng/rating';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPageComponent,
    FooterPageComponent,
    ListComponent,
    HomePageComponent,
    ProdsPageComponent,
    GestionPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
