import { Piece } from "./Piece";
import { Position } from "./Position";

export class Queen extends Piece {
  constructor(position: Position, isWhite: boolean) {
    super("Queen", 9, position);
    this.isWhite = isWhite;
  }
}
