import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'fel-tier-list',
  templateUrl: './tier-list.component.html',
  styleUrls: ['./tier-list.component.css']
})
export class TierListComponent implements OnInit {

  public ranks = ['S', 'A', 'B', 'C', 'D', 'F'];

  public countries = [ 'australia', 'canada', 'china', 'france', 'germany', 'india', 'italy', 'south-korea', 'united-kingdom', 'united-states' ];

  constructor() { }

  ngOnInit() { }

  public getImage(item: any) {
    return `assets/countries/${item}.svg`
  }

}
