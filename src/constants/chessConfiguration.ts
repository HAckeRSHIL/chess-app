import { Pawn } from "../classes/Pawn";
import { Piece } from "../classes/Piece";
import { Position } from "../classes/Position";

export const ROW_LEN = 8;
export const COLUMN_LEN = 8;

export const TEAMS = ["WHITE", "BLACK"];

export const figureColors = {
  dark: "#34364C",
  light: "#F4F7FA",
};

export const rows = Array(ROW_LEN)
  .fill(0)
  .map((element, index) => ROW_LEN - index);

export const columns = Array(COLUMN_LEN)
  .fill(0)
  .map((element, index) => String.fromCharCode(index + 97));

export type ChessSituation = Piece | null;

const cb: ChessSituation[][] = [];

rows.forEach((row, x) => {
  const curRow: ChessSituation[] = [];
  columns.forEach((column, y) => {
    let figure = null;
    if (x === 1) {
      figure = new Pawn(new Position(x, y), false);
    } else if (x === 6) {
      figure = new Pawn(new Position(x, y), true);
    }
    curRow.push(figure);
  });
  cb.push(curRow);
});

export const intialChessBoard = cb;
