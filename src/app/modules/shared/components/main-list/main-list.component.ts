import { Component, OnInit, Input } from '@angular/core';

import { PlayerListItem } from './../../models/player-list-item.model';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css'],
  host: {
    'class': 'main-list'
  }
})

export class MainListComponent implements OnInit {

  @Input() playerList: PlayerListItem[];

  constructor() { }

  ngOnInit() {
  }

}
