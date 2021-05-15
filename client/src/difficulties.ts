// File to just store difficulty type and array

export const difficulties = ["easy", "medium", "hard", "insane", "diabolical"] as const;
export type Difficulty = typeof difficulties[number];
