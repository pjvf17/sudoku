export interface Address {
  r: number;
  c: number;
  /* 
  This produced errors:
  r: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  c: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9; 
  */
}

export interface NumberUpdate {
  address: Address;
  number: number | string;
  id: string;
  associatedPencilMarkUpdates?: PencilMarkUpdate[];
}

export interface PencilMarkUpdate {
  address: Address;
  pencilMark?: number | string;
  pencilMarks?: boolean[];
  id: string;
}

export interface Cell {
  number: number | string;
  given: boolean;
  valid: boolean;
  candidates: number[];
  address: Address;
  pencilMarks: boolean[];
  untriedNumbers?: number[];
}



export interface Units {
  [propName: string]: {
    [propName: string]: Cell;
  };
}

export interface Unit {
  [propName: string]: Cell;
}

export interface Move {
  pencilMarkUpdate?: PencilMarkUpdate
  numberUpdate?: NumberUpdate
}

export interface User {
  color: string;
  focus: {
    row: number | null;
    col: number | null;
  };
  id: string;
  moves: Move[];
  ws: any;
}

export interface Users {
  [propName: string]: User;
}

export type Difficulty = "easy" | "medium" | "hard" | "insane" | "diabolical";

export interface Cost {
  // Price for first use
  firstUse: number,
  // Price for subsequent uses
  subUses: number,
  // Current total
  total: number,
  // Difficulty at which to start using it
  difficulty: Difficulty
}


export interface Puzzle {
  [index: string]: Cell;
  r1c1: Cell;
  r1c2: Cell;
  r1c3: Cell;
  r1c4: Cell;
  r1c5: Cell;
  r1c6: Cell;
  r1c7: Cell;
  r1c8: Cell;
  r1c9: Cell;
  r2c1: Cell;
  r2c2: Cell;
  r2c3: Cell;
  r2c4: Cell;
  r2c5: Cell;
  r2c6: Cell;
  r2c7: Cell;
  r2c8: Cell;
  r2c9: Cell;
  r3c1: Cell;
  r3c2: Cell;
  r3c3: Cell;
  r3c4: Cell;
  r3c5: Cell;
  r3c6: Cell;
  r3c7: Cell;
  r3c8: Cell;
  r3c9: Cell;
  r4c1: Cell;
  r4c2: Cell;
  r4c3: Cell;
  r4c4: Cell;
  r4c5: Cell;
  r4c6: Cell;
  r4c7: Cell;
  r4c8: Cell;
  r4c9: Cell;
  r5c1: Cell;
  r5c2: Cell;
  r5c3: Cell;
  r5c4: Cell;
  r5c5: Cell;
  r5c6: Cell;
  r5c7: Cell;
  r5c8: Cell;
  r5c9: Cell;
  r6c1: Cell;
  r6c2: Cell;
  r6c3: Cell;
  r6c4: Cell;
  r6c5: Cell;
  r6c6: Cell;
  r6c7: Cell;
  r6c8: Cell;
  r6c9: Cell;
  r7c1: Cell;
  r7c2: Cell;
  r7c3: Cell;
  r7c4: Cell;
  r7c5: Cell;
  r7c6: Cell;
  r7c7: Cell;
  r7c8: Cell;
  r7c9: Cell;
  r8c1: Cell;
  r8c2: Cell;
  r8c3: Cell;
  r8c4: Cell;
  r8c5: Cell;
  r8c6: Cell;
  r8c7: Cell;
  r8c8: Cell;
  r8c9: Cell;
  r9c1: Cell;
  r9c2: Cell;
  r9c3: Cell;
  r9c4: Cell;
  r9c5: Cell;
  r9c6: Cell;
  r9c7: Cell;
  r9c8: Cell;
  r9c9: Cell;
}
