<template>
  <div>
    <h4>Top {{game}} Clips</h4>
    <b-container fluid>
      <b-row align-h="center">
        <clips-card
          v-for="item in gameClipsResponseData"
          :img="item.thumbnail_url"
          :title="item.title"
          :broadcaster="item.broadcaster_name"
          :viewCount="item.view_count"
          :key="item.id"
          :created="item.created_at"
          :embed_url="item.embed_url"
        />
      </b-row>
    </b-container>
  </div>
</template>

 <script>
import { mapState, mapActions } from "vuex";
// import StreamsCard from "./Cards/StreamsCard";
import ClipsCard from "./Cards/ClipsCard";

export default {
  name: "TopGameClips",
  components: { ClipsCard },
  data() {
    return {};
  },
  mounted() {
    this.getData();
  },
  computed: {
    ...mapState({
      gameClipsResponseData: state => state.games.gameClipsResponseData,
      gameId: state => state.games.currentGameId,
      game: state => state.games.currentGame
    })
  },
  methods: {
    ...mapActions({
      getGameClipsData: "games/getGameClipsData"
    }),
    async getData() {
      //Fetch "currentGameId" state
      const game_id = this.gameId;
      const data = await this.getGameClipsData(game_id); //switch to TopGameStreams route -component
    }
  }
};
</script>