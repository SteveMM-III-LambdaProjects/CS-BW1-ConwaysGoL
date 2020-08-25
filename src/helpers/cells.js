import { v4 as uuid } from 'uuid';
import lodash from 'lodash';

export const grid_width = 600;

export const grid_height = 400;

export const resolution = 12;

export const cell_size = resolution - 2;

export const rows = Math.floor( grid_height / resolution );

export const cols = Math.floor( grid_width / resolution );

const make2DArray = () => {
  const arr = new Array( rows );
  for ( let i = 0; i < arr.length; i++ ) {
    arr[i] = new Array( cols );
  }
  return arr;
};

export const updateCells = ( x, y, grid ) => {
  const newGrid = lodash.cloneDeep( grid );
  newGrid[y][x].alive = !newGrid[y][x].alive;
  return newGrid;
}

const neighbors = [
  [ 0,  1],
  [ 0, -1],
  [ 1, -1],
  [ 1,  0],
  [ 1,  1],
  [-1, -1],
  [-1,  0],
  [-1,  1]
]

const countNeighbors = ( i, j, grid ) => {
  let total = 0;

  neighbors.forEach( ([x, y]) => {
    const row = i + x;
    const col = j + y;
    if ( row >= 0 && row < rows && col >= 0 && col < cols ) {
      if( grid[row][col].alive ){ total++ }
    }
  } )

  return total;
}

export const reset = () => {
  let cells = make2DArray();

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      cells[y][x] = { key: uuid(), type: 'Cell', x: x, y: y, alive: false };
    }
  }
  return cells;
};

export const random = () => {
  let cells = make2DArray();

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (Math.random() < 0.3) {
        cells[y][x] = { key: uuid(), type: 'Cell', x: x, y: y, alive: true };
      } else {
        cells[y][x] = { key: uuid(), type: 'Cell', x: x, y: y, alive: false };
      }
    }
  }
  return cells;
};

export const next = prev => {
  let next = lodash.cloneDeep( prev );

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {

      const living = countNeighbors( y, x, prev );

      if ( next[y][x].alive ) {
        if ( living < 2 || living > 3 ){
          next[y][x].alive = false;
        }
      } else {
        if ( living === 3 ) {
          next[y][x].alive = true;
        }
      }
    }
  }
  return next;
};