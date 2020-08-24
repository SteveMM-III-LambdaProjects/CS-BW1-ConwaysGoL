import { v4 as uuid } from 'uuid';
import { chunk } from 'lodash'

export const rows = 34;

const cols = 50;

const reset_cells = () => {
  const w = 50;
  let cells = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      cells.push({ name: 'cell', key: uuid(), type: 'Cell', x: j, y: i, alive: false })
    }
  }
  cells = chunk( cells, cols );
  return cells;
}

export const reset = reset_cells();


const test_cells = () => {
  const w = 50;
  let cells = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      cells.push({ name: 'cell', key: uuid(), type: 'Cell', x: j, y: i, alive: true })
    }
  }
  cells = chunk( cells, cols );
  return cells;
}

export const test = test_cells();