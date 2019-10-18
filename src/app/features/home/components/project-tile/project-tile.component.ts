import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fel-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.css']
})
export class ProjectTileComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Input() link: string;
  
  constructor() { }

  public ngOnInit() { }

}
