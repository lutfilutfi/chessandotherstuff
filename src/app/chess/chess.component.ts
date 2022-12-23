import { Component, OnInit } from '@angular/core';
import { Board } from './classes/board';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})
export class ChessComponent implements OnInit {

  board:Board;

  constructor() {
    this.board=new Board();
   }

  ngOnInit(): void {
  }

  playMove(x:number,y:number,z:number,w:number){
    this.board.playMove([x,y],[z,w]);
    this.boardUpdate();
    if(this.board.isGameOver){
      this.showGameOver();
    }
  }

  boardUpdate(){
  }

  resetGame(){
    this.board.initialize();
  }

  showGameOver(){
    this.resetGame();
  }

}
