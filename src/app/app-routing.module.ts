import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ProdsPageComponent } from './page/prods-page/prods-page.component';
import { GestionPageComponent } from './page/gestion-page/gestion-page.component';

const routes: Routes = [
    {path: 'home', component: HomePageComponent},
    {path: 'prods', component: ProdsPageComponent},
    {path: 'gestion', component: GestionPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
