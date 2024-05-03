import Maze from "@/solvers/maze";
import { CellProps, Coordinates } from "@/utils";

export default function recursiveDivisionMaze(
  board: CellProps[][],
  rowStart: number,
  rowEnd: number,
  colStart: number,
  colEnd: number,
  orientation = "horizontal",
  surroundingWalls: boolean,
  type = "walls",
  wallsCoord: Coordinates[]
): Coordinates[] {
  if (rowEnd < rowStart || colEnd < colStart) {
    return [];
  }
  const maze = {
    height: board.length,
    width: board[0].length,
  };
  if (!surroundingWalls) {
    let relevantIds = new Array();
    board.forEach((cellsRow, row) =>
      cellsRow.forEach((node, col) => {
        if (!relevantIds.includes({ row, col })) {
          if (
            row === 0 ||
            col === 0 ||
            row === maze.height - 1 ||
            col === maze.width - 1
          ) {
            wallsCoord.push({ row, col });
          }
        }
      })
    );
    surroundingWalls = true;
  }
  if (orientation === "horizontal") {
    let possibleRows = [];
    for (let number = rowStart; number <= rowEnd; number += 2) {
      possibleRows.push(number);
    }
    let possibleCols = [];
    for (let number = colStart - 1; number <= colEnd + 1; number += 2) {
      possibleCols.push(number);
    }
    let randomRowIndex = Math.floor(Math.random() * possibleRows.length);
    let randomColIndex = Math.floor(Math.random() * possibleCols.length);
    let currentRow = possibleRows[randomRowIndex];
    let colRandom = possibleCols[randomColIndex];
    board.forEach((cellsRow, row) =>
      cellsRow.forEach((node, col) => {
        if (
          row === currentRow &&
          col !== colRandom &&
          col >= colStart - 1 &&
          col <= colEnd + 1
        ) {
          wallsCoord.push({ row, col });
        }
      })
    );
    if (currentRow - 2 - rowStart > colEnd - colStart) {
      recursiveDivisionMaze(
        board,
        rowStart,
        currentRow - 2,
        colStart,
        colEnd,
        orientation,
        surroundingWalls,
        type,
        wallsCoord
      );
    } else {
      recursiveDivisionMaze(
        board,
        rowStart,
        currentRow - 2,
        colStart,
        colEnd,
        "vertical",
        surroundingWalls,
        type,
        wallsCoord
      );
    }
    if (rowEnd - (currentRow + 2) > colEnd - colStart) {
      recursiveDivisionMaze(
        board,
        currentRow + 2,
        rowEnd,
        colStart,
        colEnd,
        orientation,
        surroundingWalls,
        type,
        wallsCoord
      );
    } else {
      recursiveDivisionMaze(
        board,
        currentRow + 2,
        rowEnd,
        colStart,
        colEnd,
        "vertical",
        surroundingWalls,
        type,
        wallsCoord
      );
    }
  } else {
    let possibleCols = [];
    for (let number = colStart; number <= colEnd; number += 2) {
      possibleCols.push(number);
    }
    let possibleRows = [];
    for (let number = rowStart - 1; number <= rowEnd + 1; number += 2) {
      possibleRows.push(number);
    }
    let randomColIndex = Math.floor(Math.random() * possibleCols.length);
    let randomRowIndex = Math.floor(Math.random() * possibleRows.length);
    let currentCol = possibleCols[randomColIndex];
    let rowRandom = possibleRows[randomRowIndex];
    board.forEach((cellsRow, row) =>
      cellsRow.forEach((node, col) => {
        if (
          col === currentCol &&
          row !== rowRandom &&
          row >= rowStart - 1 &&
          row <= rowEnd + 1
        ) {
          wallsCoord.push({ row, col });
        }
      })
    );

    if (rowEnd - rowStart > currentCol - 2 - colStart) {
      recursiveDivisionMaze(
        board,
        rowStart,
        rowEnd,
        colStart,
        currentCol - 2,
        "horizontal",
        surroundingWalls,
        type,
        wallsCoord
      );
    } else {
      recursiveDivisionMaze(
        board,
        rowStart,
        rowEnd,
        colStart,
        currentCol - 2,
        orientation,
        surroundingWalls,
        type,
        wallsCoord
      );
    }
    if (rowEnd - rowStart > colEnd - (currentCol + 2)) {
      recursiveDivisionMaze(
        board,
        rowStart,
        rowEnd,
        currentCol + 2,
        colEnd,
        "horizontal",
        surroundingWalls,
        type,
        wallsCoord
      );
    } else {
      recursiveDivisionMaze(
        board,
        rowStart,
        rowEnd,
        currentCol + 2,
        colEnd,
        orientation,
        surroundingWalls,
        type,
        wallsCoord
      );
    }
  }

  return wallsCoord;
}
