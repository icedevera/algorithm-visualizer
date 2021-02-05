import { BestFirstSearch } from "./BestFirstSearch";

type coordinates = {
  x: number;
  y: number;
};

export const aStarIsBorn = (
  startNode: coordinates,
  endNode: coordinates,
  barriers: string[],
  totalColumns: number,
  totalRows: number,
  type: "astar"
) => {
  return BestFirstSearch(startNode, endNode, barriers, totalColumns, totalRows, type);
};