import { Piece } from "./Piece";
import { Position } from "./Position";

export class King extends Piece {
  constructor(position: Position, isWhite: boolean) {
    super("King", Infinity, position);
    this.isWhite = isWhite;
  }
}
