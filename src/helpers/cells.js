import { v4 as uuid } from 'uuid';
import lodash from 'lodash';

export const grid_width = 600;

export const grid_height = 400;

export const resolution = 13;

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

export const createBlinker = () => {
  const cells = reset();

  cells[14][23].alive = true;
  cells[15][23].alive = true;
  cells[16][23].alive = true;

  return cells;
};

export const createBeacon = () => {
  const cells = reset();

  cells[13][22].alive = true;
  cells[13][23].alive = true;
  cells[14][22].alive = true;
  cells[14][23].alive = true;
  cells[15][24].alive = true;
  cells[15][25].alive = true;
  cells[16][24].alive = true;
  cells[16][25].alive = true;
  
  return cells;
}

export const createPulsar = () => {
  const cells = reset();

  for ( let y = 9; y < 22; y++ ) {
    for ( let x = 17; x < 30; x++ ) {

      if ( ( y == 9 || y == 14  || y == 16 || y == 21 ) &&
         ( ( x > 18 && x < 22 ) || ( x > 24 && x < 28 ) ) ) {
            cells[y][x].alive = true;
      }

      if ( ( ( y > 10 && y < 14) || ( y > 16 && y < 20) ) &&
         ( x == 17 || x == 22 || x == 24 || x == 29 ) ) {
            cells[y][x].alive = true;
      }
    }
  }
  
  return cells;
}

export const creatGosperGun = () => {
  const cells = reset();

  cells[1][25].alive = true;
  cells[2][23].alive = true;
  cells[2][25].alive = true;

  let y = 3;
  for ( let x = 13; x < 37; x++ ) {
    if ( x == 13 || x == 14 || x == 21 || x == 22 || x == 35 || x == 36 ) {
      cells[y][x].alive = true;
    }
  }

  y = 4;
  for ( let x = 12; x < 37; x++ ) {
    if ( x == 12 || x == 16 || x == 21 || x == 22 || x == 35 || x == 36 ) {
      cells[y][x].alive = true;
    }
  }

  y = 5;
  for ( let x = 1; x < 23; x++ ) {
    if ( x == 1 || x == 2 || x == 11 || x == 17 || x == 21 || x == 22 ) {
      cells[y][x].alive = true;
    }
  }

  y = 6;
  for ( let x = 1; x < 26; x++ ) {
    if ( x == 1 || x == 2 || x == 11 || x == 15 || x == 17 || x == 18 || x == 23 || x == 25 ) {
      cells[y][x].alive = true;
    }
  }

  cells[7][11].alive = true;
  cells[7][17].alive = true;
  cells[7][25].alive = true;
  cells[8][12].alive = true;
  cells[8][16].alive = true;
  cells[9][13].alive = true;
  cells[9][14].alive = true;

  return cells;
}
