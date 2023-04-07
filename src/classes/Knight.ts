import { Piece } from "./Piece";
import { Position } from "./Position";

export class Knight extends Piece {
  constructor(position: Position, isWhite: boolean) {
    super("Knight", 3, position);
    this.isWhite = isWhite;
  }
}
