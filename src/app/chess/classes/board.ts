import {Piece} from './piece'
export class Board{

    grid:(Piece | null) [][];
    isGameOver:boolean;

    constructor(){
        this.initialize();
    }
    initialize():void{
        this.grid=
        [
            [new Piece('rook','white'),new Piece('knight','white'),new Piece('bishop','white'),new Piece('queen','white'),new Piece('king','white'),new Piece('bishop','white'),new Piece('knight','white'),new Piece('rook','white')],
            [new Piece('pawn','white'),new Piece('pawn','white'),new Piece('pawn','white'),new Piece('pawn','white'),new Piece('pawn','white'),new Piece('pawn','white'),new Piece('pawn','white'),new Piece('pawn','white')],
            [null,null,null,null,null,null,null,null,],
            [null,null,null,null,null,null,null,null,],
            [null,null,null,null,null,null,null,null,],
            [null,null,null,null,null,null,null,null,],
            [new Piece('rook','black'),new Piece('knight','black'),new Piece('bishop','black'),new Piece('queen','black'),new Piece('king','black'),new Piece('bishop','black'),new Piece('knight','black'),new Piece('rook','black')],
            [new Piece('pawn','black'),new Piece('pawn','black'),new Piece('pawn','black'),new Piece('pawn','black'),new Piece('pawn','black'),new Piece('pawn','black'),new Piece('pawn','black'),new Piece('pawn','black')],
        ]
    }
    playMove([a,b]:[number,number],[c,d]:[number,number]){
        if(this.checkValidMove(a,b,c,d)){
            this.grid[c][d]=this.grid[a][b];
            this.grid[a][b]=null;
        }
    }
    checkValidMove(a:number,b:number,c:number,d:number):boolean{
        switch(this.grid[a][b]?.name){
            case 'pawn':
                break;
            case 'rook':
                break;
            case 'queen':
                break;
            case 'king':
                break
            case 'bishop':
                break;
            default:break;
        }
        if(this.isInCheck(this.grid[a][b]?.color)){
            return false;
        }
        return true;
    }
    isInCheck(x:string | undefined):boolean{
        return false;
    }
}