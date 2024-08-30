import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import QuestionView from '../views/QuestionView.vue';
import QuizView from '../views/QuizView.vue';
import ResultView from "@/views/ResultView.vue";

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/question', name: 'QuestionOptions', component: QuestionView },
    { path: '/quiz', name: 'QuizList', component: QuizView },
    { path: '/result', name: 'ResultComponent', component: ResultView },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
