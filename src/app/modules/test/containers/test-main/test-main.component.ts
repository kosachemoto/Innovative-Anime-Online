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
      "Name": "Anime Girl",
      "Img": "http://papers.co/wallpaper/papers.co-be23-girl-face-anime-art-illustration-29-wallpaper.jpg",
      "Description": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"
    },
    {
      "TitleID": 2,
      "Name": "Red-Haired Girl",
      "Img": "https://i.imgur.com/BJE0tn4.jpg",
      "Description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga"
    },
    {
      "TitleID": 3,
      "Name": "Stranger Girl",
      "Img": "https://i.ytimg.com/vi/FB2LHmy3Cd8/maxresdefault.jpg",
      "Description": "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
