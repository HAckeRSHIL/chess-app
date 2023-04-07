import { Position } from "./Position";

export class Piece {
  isWhite: boolean = true;
  type: string;
  value: number;
  position: Position;
  constructor(type: string, value: number, position: Position) {
    this.type = type;
    this.value = value;
    this.position = position;
  }
  calculatePossibleMoves = () => {};
}
