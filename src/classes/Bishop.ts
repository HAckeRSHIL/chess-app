import { Piece } from "./Piece";
import { Position } from "./Position";

export class Bishop extends Piece {
  constructor(position: Position, isWhite: boolean) {
    super("Bishop", 3, position);
    this.isWhite = isWhite;
  }
}
