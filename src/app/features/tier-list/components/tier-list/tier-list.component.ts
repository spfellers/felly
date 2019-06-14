import { Component, OnInit, ContentChildren, QueryList, forwardRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { readlinkSync } from 'fs';

@Component({
  selector: 'fel-tier-list',
  templateUrl: './tier-list.component.html',
  styleUrls: ['./tier-list.component.css']
})
export class TierListComponent implements OnInit {
  public free = false;
  public ranks = ['S', 'A', 'B', 'C', 'D', 'F'];

  public countries = [ 'australia', 'canada', 'china', 'france', 'germany', 'india', 'italy', 'south-korea', 'united-kingdom', 'united-states' ];
  public tierLists = {
    pergatory: [ 'australia', 'canada', 'china', 'france', 'germany', 'india', 'italy', 'south-korea', 'united-kingdom', 'united-states' ],
    S: [],
    A: [],
    B: [],
    C: [],
    D: [],
    F: []
  };
  
  constructor() { }

  ngOnInit() {
   }

  public getImage(item: any) {
    return `assets/countries/${item}.svg`
  }

  public drop(event: CdkDragDrop<any>): void {
    console.log(event);
    console.log(this.tierLists[event.container.id]);
    if (event.previousContainer === event.container) {
      moveItemInArray(this.tierLists[event.container.id], event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(this.tierLists[event.previousContainer.id], this.tierLists[event.container.id],
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
