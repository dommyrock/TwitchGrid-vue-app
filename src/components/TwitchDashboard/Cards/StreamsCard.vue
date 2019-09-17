<!--this component should be displayed foreach item in apiResponse []  -->
<template>
  <div>
    <b-card
      :title="userName"
      :img-src="img"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>{{"Viewers: "+viewCount}}</b-card-text>
      <b-button href="#" @click="handleLiveStream(userName)" variant="outline-danger">Live</b-button>
      <b-button
        href="#"
        @click="handleBroadcasterId(user_id,userName)"
        variant="outline-info"
      >Top broadcaster Clips</b-button>
    </b-card>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import router from "../../../router";

export default {
  name: "GameCard",
  props: {
    title: String,
    user_id: String,
    userName: String,
    viewCount: Number,
    cardId: String,
    img: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      broadcasterId: state => state.games.currentBroadcasterId
    })
  },
  methods: {
    ...mapMutations({
      setBroadcasterId: "games/SET_BROADCASTER_ID",
      setBroadcasterName: "games/SET_BROADCASTER_NAME"
    }),

    handleBroadcasterId(user_id, userName) {
      this.setBroadcasterId(user_id); //update currentBroadcasterId state
      this.setBroadcasterName(userName); //update currentBroadcasterName state
      router.push({
        name: "TopBroadcasterClips",
        params: { broadcasterId: userName }
      });
    },
    handleLiveStream(userName) {
      //TODO handle live click and reddirect to Stream Component
    }
  }
};
</script>



<!--TODODOOD HANDLER FOR BUTTON CLICK THAT REDIRECTS TO BRODCASTER ID CLIPS -->
