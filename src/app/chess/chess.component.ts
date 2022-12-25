import { Component, OnInit } from '@angular/core';
import { Board } from './classes/board';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})
export class ChessComponent implements OnInit {

  board:Board;
  selected:boolean=false;
  selectedPieceCordinates:[number,number];

  constructor() {
    this.board=new Board();
   }

  ngOnInit(): void {
  }

  playMove(x:number,y:number,z:number,w:number){
    this.board.playMove([x,y],[z,w]);
    this.boardUpdate();
    if(this.board.isGameOver){//hello
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

  selectPiece(x:number,y:number){
    
      if(!this.selected){
        if(this.board.grid[x][y]!==null){
        this.board.grid[x][y]?.selectPiece();
        this.selectedPieceCordinates=[x,y];
        this.selected=true
        }
      }
      else{
        this.selected=!this.selected
        this.board.grid[this.selectedPieceCordinates[0]][this.selectedPieceCordinates[1]]?.selectPiece();
        this.playMove(this.selectedPieceCordinates[0],this.selectedPieceCordinates[1],x,y);
        this.selected=false;
        this.selectedPieceCordinates=[10,10];
      }
  
    console.log('function called on',x,y,this.board.grid[x][y]?.selected);
  }
}
