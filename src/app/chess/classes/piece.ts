import { stringify } from "querystring";

export class Piece{
    color:string;
    strength:number;
    name:string;
    constructor(name:string,colour:string){
        switch(name){
            case 'pawn':
                this.strength=1;
                this.color=colour;
                break
            case 'rook':
                this.strength=5;
                this.color=colour;
                break
            case 'queen':
                this.strength=9;
                this.color=colour;
                break
            case 'king':
                    this.strength=1000;
                    this.color=colour;
                    break
            case 'knight':
                this.strength=3;
                this.color=colour;
                break
            case 'bishop':
                this.strength=3;
                this.color=colour;
                break
            default:break
        }
    }
    checkValidMove([a,b]:[number,number]):boolean{
        return true;
    }
}
