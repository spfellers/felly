import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UrlRegexTesterComponent } from "./components/url-regex-tester/url-regex-tester.component";

const routes: Routes = [
    {
        path: "",
        component: UrlRegexTesterComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UrlRegexTesterRoutingModule {}
