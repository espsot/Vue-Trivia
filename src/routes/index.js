import VueRouter from "vue-router";
import HomeComponent from "../components/HomeComponent.vue";
import GamePlayComponent from "../components/GamePlayComponent.vue";

const routes = [
    { path: "/", component: HomeComponent },
    { path: "/quiz", component: GamePlayComponent }
];

const router = new VueRouter({ routes });

export default router;
