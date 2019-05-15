import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { homedir } from 'os';
import { HomeModule } from './features/home/home.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: './features/home/home.module#HomeModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: false }
      )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
