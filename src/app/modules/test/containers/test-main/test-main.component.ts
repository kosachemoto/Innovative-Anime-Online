import { Component, OnInit, NgModule } from '@angular/core';
import { PlayerListItem } from '../../../shared/models/player-list-item.model';

@Component({
  selector: 'app-test-main',
  templateUrl: './test-main.component.html',
  styleUrls: ['./test-main.component.css']
})

export class TestMainComponent implements OnInit {

  playerList: PlayerListItem[] = [
    {
      "TitleID": 1,
      "Name": "Name-1",
      "Img": "Img-1",
      "Description": "Description-1"
    },
    {
      "TitleID": 2,
      "Name": "Name-2",
      "Img": "Img-2",
      "Description": "Description-2"
    },
    {
      "TitleID": 3,
      "Name": "Name-3",
      "Img": "Img-3",
      "Description": "Description-3"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
