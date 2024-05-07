export interface Coordinates {
  row: number;
  col: number;
}

export interface CandidatesProps {
  action: "up" | "down" | "left" | "right";
  coordinates: Coordinates;
}

export function generateCandidates(
  state: Coordinates,
  width: number,
  height: number
): CandidatesProps[] {
  const { row, col } = state;

  const candidates: CandidatesProps[] = [
    {
      action: "up",
      coordinates: {
        row: row - 1,
        col,
      },
    },
    {
      action: "down",
      coordinates: {
        row: row + 1,
        col,
      },
    },
    {
      action: "left",
      coordinates: {
        row,
        col: col - 1,
      },
    },
    {
      action: "right",
      coordinates: {
        row,
        col: col + 1,
      },
    },
  ];

  return candidates.filter(
    (candidate) =>
      candidate.coordinates.row >= 0 &&
      candidate.coordinates.col >= 0 &&
      candidate.coordinates.row <= height - 1 &&
      candidate.coordinates.col <= width - 1
  );
}
