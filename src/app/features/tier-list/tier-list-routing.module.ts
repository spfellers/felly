import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TierListComponent } from "./components/tier-list/tier-list.component";

const routes: Routes = [
    {
        path: "",
        component: TierListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TierListRoutingModule {}
