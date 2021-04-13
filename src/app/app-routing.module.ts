import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    {
        path: "",
        loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule),
        data: { animation: "HomePage" }
    },
    {
        path: "todo",
        loadChildren: () => import('./features/todo/todo.module').then(m => m.TodoModule),
        data: { animation: "TodoPage" }
    },
    {
        path: "tierlist",
        loadChildren: () => import('./features/tier-list/tier-list.module').then(m => m.TierListModule)
    },
    {
        path: "urltester",
        loadChildren:
            () => import('./features/url-regex-tester/url-regex-tester.module').then(m => m.UrlRegexTesterModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
