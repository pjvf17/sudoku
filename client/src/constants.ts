// File to store types or constants that are used

import { Scores } from "./types.d.ts";

export const scores: Scores = {
  hiddenSingle: {
    firstUse: 100,
    subUses: 100,
    total: 0,
    difficulty: "easy",
  },
  nakedSingle: {
    firstUse: 100,
    subUses: 100,
    total: 0,
    difficulty: "easy",
  },
  nakedPair: {
    firstUse: 750,
    subUses: 500,
    total: 0,
    difficulty: "medium",
  },
  hiddenPair: {
    firstUse: 1500,
    subUses: 1200,
    total: 0,
    difficulty: "medium",
  },
  nakedTriple: {
    firstUse: 2000,
    subUses: 1400,
    total: 0,
    difficulty: "medium",
  },
  hiddenTriple: {
    firstUse: 2400,
    subUses: 1600,
    total: 0,
    difficulty: "medium",
  },
  nakedQuad: {
    firstUse: 5000,
    subUses: 4000,
    total: 0,
    difficulty: "hard",
  },
  hiddenQuad: {
    firstUse: 7000,
    subUses: 5000,
    total: 0,
    difficulty: "hard",
  },
  pointing: {
    firstUse: 350,
    subUses: 200,
    total: 0,
    difficulty: "medium",
  },
  claiming: {
    firstUse: 400,
    subUses: 250,
    total: 0,
    difficulty: "medium",
  },
  xwing: {
    firstUse: 2800,
    subUses: 1600,
    total: 0,
    difficulty: "hard",
  },
} as const;

export const difficulties = [
  "easy",
  "medium",
  "hard",
  "insane",
  "diabolical",
] as const;
export type Difficulty = typeof difficulties[number];
