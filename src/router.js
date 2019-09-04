//Dashboard routing
import Vue from "vue";
import Router from "vue-router";

const Games = () => import("./components/TwitchDashboard/Games");
const Streams = () => import("./components/TwitchDashboard/Streams");
const GameStreams = () => import("./components/TwitchDashboard/TopGameStreams")

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Games",
      component: Games
    },
    {
      path: "/top-streams",
      name: "TopStreams",
      component: Streams
    },
    {
      path: "games/:id",
      component: GameStreams
    }

  ],
  mode: "history" //disable # prefix in routes
});
