import { createRouter, createWebHistory } from 'vue-router';
import PuzzleView from "../components/views/PuzzleView.vue";
import GameLobbyView from "../components/views/GameLobbyView.vue"

const routes = [
{
  path: '/puzzle',
  name: 'Puzzle',
  component: PuzzleView
},
{
  path: "/",
  name: "Game Lobby",
  component: GameLobbyView
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
