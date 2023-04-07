import { Piece } from "../classes/Piece";
import { PawnFigure } from "../svgs";

interface Props {
  info: Piece;
}

export default function Figure({ info }: Props) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    ></svg>
  );
}
