# Bugs and Issues

- [ ] Naked single solver only supports the finding of one pair at a time
- [x] Sync serverside and clientside so that a blank cell is the same in both places
- [ ] Popup for new game shows up even when you finished the game
- [x] Fill in candidates not saving in server
- [x] Fill in candidates being pressed a second time erasing all candidates (07/24/2020)
- [x] Reloading doesn't work (? maybe?)
- [ ] Serverside validation is a bit wonky on reload sometimes
- [ ] Deno needs to be on for server, off for client
  - [ ] Fix by manually installing it? <https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno>
  - [ ] Another fix possible (05-13-2021) <https://deno.land/manual@v1.10.1/typescript/faqs#how-do-i-combine-deno-code-with-non-deno-code-in-my-ide>
  - [x] For now will just enable and disable extension as I switch between server and client (07-24-2020)
- [ ] Error message when server sends defocus for self
- [ ] If there are no hints available, it sends back the entire puzzle obj
- [ ] Naked pair sometimes comes up with a hidden pair
- [ ] SudokuObj possibly undefined PuzzleView.vue
- [x] Currently unable to switch tabs with puzzle open
- [ ] Commenting out code that sets row & col to 5 in handeInput() causes errors, despite it being seemingly useless due to the cursor always starting at 1 (and what does that?)
