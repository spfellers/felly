import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'fel-tier-list',
  templateUrl: './tier-list.component.html',
  styleUrls: ['./tier-list.component.css']
})
export class TierListComponent implements OnInit {

  public ranks = ['S', 'A', 'B', 'C', 'D', 'F'];

  public tierList = {
    S: ['TEST', 'WHALE', 'ASDF'],
    A: ['gfrg', 'WHAdffgLE', 'ASsdDF'],
    B: ['AESF', 'WHALEdfdf', 'ASrDF'],
    C: ['sdf345', 'WHdfwALE', 'ASweDF'],
    D: ['345', 'gfdfgWHALE', 'ASDsdfF'],
    F: ['TE34345ST', 'eggdf', 'AwwerwerSDF'],
  };

  public countries = [ 'australia', 'canada', 'china', 'france', 'germany', 'india', 'italy', 'south-korea', 'united-kingdom', 'united-states' ];

  constructor() { }

  ngOnInit() { }

  public drop(e: CdkDragDrop<string[]>): void {
    moveItemInArray(this.tierList, e.previousIndex, e.currentIndex);
  }

  public getImage(item) {
    return `assets/countries/${item}.svg`
  }

}
