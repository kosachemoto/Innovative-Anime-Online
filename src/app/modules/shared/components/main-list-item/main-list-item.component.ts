import { Component, OnInit, Input } from '@angular/core';

import { PlayerListItem } from './../../models/player-list-item.model';

@Component({
  selector: 'app-main-list-item',
  templateUrl: './main-list-item.component.html',
  styleUrls: ['./main-list-item.component.css']
})
export class MainListItemComponent implements OnInit {

  @Input() playerListItem: PlayerListItem;

  constructor() { }

  ngOnInit() {
  }

}
