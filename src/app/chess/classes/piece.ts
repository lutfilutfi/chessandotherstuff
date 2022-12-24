import { stringify } from "querystring";

export class Piece{
    color:string;
    strength:number;
    name:string;
    icon:string;
    selected:boolean=false;
    constructor(name:string,colour:string){
        switch(name){
            case 'pawn':
                this.strength=1;
                this.color=colour;
                if(this.color==='white') 
                    this.icon='♙'
                else
                    this.icon='♟'
                break
            case 'rook':
                this.strength=5;
                this.color=colour;
                if(this.color==='white') 
                    this.icon='♖'
                else
                    this.icon='♜'
                break
            case 'queen':
                this.strength=9;
                this.color=colour;
                if(this.color==='white') 
                    this.icon='♕'
                else
                    this.icon='♛'
                break
            case 'king':
                    this.strength=1000;
                    this.color=colour;
                    if(this.color==='white') 
                        this.icon='♔'
                    else
                        this.icon='♚'
                    break
            case 'knight':
                this.strength=3;
                this.color=colour;
                if(this.color==='white') 
                    this.icon='♘'
                else
                    this.icon='♞'
                break
            case 'bishop':
                this.strength=3;
                this.color=colour;
                if(this.color==='white') 
                    this.icon='♗'
                else
                   this.icon='♝'
                break
            default:break
        }
    }
    selectPiece(){
        this.selected=!this.selected
    }
    checkValidMove([a,b]:[number,number]):boolean{
        return true;
    }
}
