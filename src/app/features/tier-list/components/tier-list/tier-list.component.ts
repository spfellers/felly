import { Component, OnInit, ContentChildren, QueryList, forwardRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'fel-tier-list',
  templateUrl: './tier-list.component.html',
  styleUrls: ['./tier-list.component.css']
})
export class TierListComponent implements OnInit {
  public ranks = ['S', 'A', 'B', 'C', 'D', 'F'];
  public category = 'countries';

  public countries = [ 'australia', 'canada', 'china', 'france', 'germany', 'india', 'italy', 'south-korea', 'united-kingdom', 'united-states' ];
  
  constructor(private router: Router) { }

  public ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
    });
   }

  public getImage(item: any) {
    return `assets/${this.category}/${item}.svg`
  }

  public drop(event: CdkDragDrop<any>): void { }

}
