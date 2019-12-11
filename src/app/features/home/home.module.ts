import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { ProjectListComponent } from "./components/project-list/project-list.component";
import { ProjectTileComponent } from "./components/project-tile/project-tile.component";

@NgModule({
    declarations: [ProjectListComponent, ProjectTileComponent],
    imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
