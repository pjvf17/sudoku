
### Navigation and Solving

- [x] Undo feature (18/07/2020)
- [ ] Redo Feature
- [ ] Navigate grid with HJKL and WASD and customize others
- [ ] Hint feature
  - [x] Currently the issue is that the server and client don't populate the candidates array, which is what is used by each of the solvers (Solved by creating a parsePencilMarksToCandidates function 28/07/2020)
  - [x] Backend support for finding and returning a hint
  - [x] Request a hint from client for current boardstate
  - [x] Display hint on client
    - [ ] Display prettily
- [ ] Select multiple cells to toggle pencilmarks
- [ ] Select multiple numbers to highlight
- [ ] Select specific cells to highlight
- [ ] Check puzzle
  - [ ] If wrong, option to go back to last valid state
- [ ] Hold (some key) to skip over numbers or loop around to other side
- [ ] Difficulty Selector
  - [ ] Serverside
    - [ ] Including required specific techniques
- [x] Populate all candidates with basic rules (17/07/2020)
  - [ ] Not paying attention to non givens?
  - [ ] Per cell option
  - [x] All cells option (17/07/2020)
  - [ ] Per row/col ?
- [ ] Show moves (toggle)
  - [ ] By person
- [ ] Color numbers by who put them in
- [x] Update peers when number put in (21/07/2020)
  - [x] Update them properly if it's then taken out (28/07/2020)

### Serverside and Stability

- [ ] Numbering of moves
  - [ ] Use the numbering to check for missed moves from/to server
- [ ] Database for puzzles
  - [ ] Keeps track of which you've seen (either through cookies/local storage if you don't have an account, or through the account)
- [x] Send all initial values at once
- [ ] On fill in candidates, send updates in a bundle
  - [ ] pencilMarkUpdate in array form


### Typescript

- [x] Type clientside
- [x] Type generator.ts
- [x] Make class/constructor for puzzle to get around creating an empty object
- [x] Interface server and clientside with
  - [x] Cell
  - [x] Puzzle
  - [x] Updates
- [x] Classify puzzleValidation (26-07-2020)
  
### Customization and UI

- [x] Are you sure? When starting new game when not finished
- [ ] Customization
  - [ ] Colors
  - [ ] Key binds
  - [ ] Number highlighting
  - [ ] row/col highlighting
- [ ] Timer
- [ ] People
  - [ ] Names
    - [ ] Rename yourself
    - [ ] Nickname others
  - [ ] Recolor yourself
- [ ] Indication of loading
- [ ] Indication/celebration of complete

### Finishing touches

- [ ] Make an account
- [ ] Game lobby
- [ ] Walkthrough of features
- [ ] Walkthrough of techniques


## Specific function plans

Part of updateNumber, on both sides, should be calculating peer candidates, getting an array of pencilMarkUpdates, and adding those to an array inside the update