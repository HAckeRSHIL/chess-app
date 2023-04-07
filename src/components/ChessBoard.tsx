import { useState } from "react";
import {
  columns,
  intialChessBoard,
  rows,
} from "../constants/chessConfiguration";
import Figure from "../figures";
import { Pawn } from "../svgs";
import Cell from "./Cell";

export default function ChessBoard() {
  const [chessboard, setChessBoard] = useState({ ...intialChessBoard });
  const getPiece = (chessboard, x, y) => {
    return chessboard[x][y] ? <Figure info={chessboard[x][y]} /> : null;
  };
  return (
    <div className="chess-board flex flex-col ">
      {rows.map((row, x) => {
        return (
          <div className="flex flex-grow-1">
            {columns.map((column, y) => {
              return (
                <Cell x={x} y={y}>
                  {getPiece(chessboard, x, y)}
                </Cell>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
