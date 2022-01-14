# Collaborative sudoku

This is a work-in-progess project for generating sudokus and solving them collaboratively online with friends. It uses Vue 3, MongoDB WebSockets, Typescript, and Deno. I haven't worked on it in a bit but I intend to come back and finish it one day

## Structure

The main generator logic is in three files in the Generator folder

- recursiveGenerator.ts, which generates a random fully filled in sudoku grid
- solvers.ts, which houses human solving techniques
- creator.ts, which combines these two to create a sudoku at a specific skill level

main.ts has the main websocket logic, though I haven't touched this in a while due to concentrating on the sudoku generation
