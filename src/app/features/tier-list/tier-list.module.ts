import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { TierListRoutingModule } from './tier-list-routing.module';
import { TierListComponent } from './components/tier-list/tier-list.component';

@NgModule({
  declarations: [TierListComponent],
  imports: [
    CommonModule,
    DragDropModule,
    TierListRoutingModule
  ]
})
export class TierListModule { }
