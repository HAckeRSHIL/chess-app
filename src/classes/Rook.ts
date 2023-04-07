import { Piece } from "./Piece";
import { Position } from "./Position";

export class Rook extends Piece {
  constructor(position: Position, isWhite: boolean) {
    super("Rook", 5, position);
    this.isWhite = isWhite;
  }
}
