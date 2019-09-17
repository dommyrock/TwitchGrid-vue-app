//Dashboard routing
import Vue from "vue";
import Router from "vue-router";

const Games = () => import("./components/TwitchDashboard/Games");
const Streams = () => import("./components/TwitchDashboard/Streams");
const TopGameStreams = () => import("./components/TwitchDashboard/TopGameStreams")
const TopGameClips = () => import("./components/TwitchDashboard/TopGameClips")
const TopBroadcasterClips = () => import("./components/TwitchDashboard/TopBroadcasterClips")
const EmbeddedStream = () => import("./components/TwitchDashboard/Stream")

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
      path: "/game/:gameId",
      name: "TopGameStreams",
      component: TopGameStreams
    },
    {
      path: "/game/clips/:gameId",
      name: "TopGameClips",
      component: TopGameClips
    },
    {
      path: "/broadcaster/clips/:broadcasterId",
      name: "TopBroadcasterClips",
      component: TopBroadcasterClips
    },
    {
      path: "/broadcaster/stream/:broadcasterId",
      name: "Stream",
      component: EmbeddedStream
    }

  ],
  mode: "history" //disable # prefix in routes
});
