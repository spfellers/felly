import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './features/home/home.module#HomeModule'
  },
  {
    path: 'todo',
    loadChildren: './features/todo/todo.module#TodoModule'
  },
  {
    path: 'tierlist',
    loadChildren: './features/tier-list/tier-list.module#TierListModule'
  },
  {
    path: 'urltester',
    loadChildren: './features/url-regex-tester/url-regex-tester.module#UrlRegexTesterModule'
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
