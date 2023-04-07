import { Piece } from "./Piece";
import { Position } from "./Position";

export class Pawn extends Piece {
  constructor(position: Position, isWhite: boolean) {
    super("PAWN", 1, position);
    this.isWhite = isWhite;
  }
}
