import { Component, OnInit } from '@angular/core';
import { GameofthroneService } from '../services/gameofthrone.service';

@Component({
  selector: 'app-gameofthrone',
  templateUrl: './gameofthrone.component.html',
  styleUrls: ['./gameofthrone.component.css'],
})
export class GameofthroneComponent implements OnInit {
  game: any;

  constructor(private gameOfThroneService: GameofthroneService) {}

  ngOnInit(): void {
    this.getGame();
  }

  getGame() {
    this.gameOfThroneService.getCharacter().subscribe((resp) => {
      console.log(resp);
      this.game = resp;
    });
  }
}
