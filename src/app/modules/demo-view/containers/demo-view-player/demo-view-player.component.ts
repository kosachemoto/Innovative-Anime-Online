import { Component, OnInit } from '@angular/core';

const videojs = require("video.js").default;

@Component({
  selector: 'app-demo-view-player',
  templateUrl: './demo-view-player.component.html',
  styleUrls: ['./demo-view-player.component.css']
})
export class DemoViewPlayerComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {
    this.playerInit();
  }

  playerInit() {
    videojs('.demo-player');
  }
}
