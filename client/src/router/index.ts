import { createRouter, createWebHistory } from 'vue-router';
import PuzzleView from "../components/views/PuzzleView.vue";

const routes = [
{
  path: '/',
  name: 'Puzzle',
  component: PuzzleView
},
]
console.log(PuzzleView);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
