<template>
  <div>
    <h4>Top --{{game}}-- streams by view count:</h4>
    <b-container fluid>
      <b-row align-h="center">
        <streams-card
          v-for="item in gamesStreamsData"
          :img="item.thumbnail_url"
          :title="item.title"
          :userName="item.user_name"
          :viewCount="item.viewer_count"
          :key="item.id"
          :user_id="item.user_id"
        />
      </b-row>
    </b-container>
  </div>
</template>

 <script>
import { mapState, mapActions } from "vuex";
import StreamsCard from "./Cards/StreamsCard";
import { stat } from "fs";

export default {
  name: "TopGameStreams",
  components: { StreamsCard },
  data() {
    return {};
  },
  mounted() {
    this.getData();
  },
  computed: {
    ...mapState({
      gamesStreamsData: state => state.games.gameStreamsResponseData,
      gameId: state => state.games.currentGameId,
      game: state => state.games.currentGame
    })
  },
  methods: {
    ...mapActions({
      getGameStreamsData: "games/getGameStreamsData"
    }),
    async getData() {
      //Fetch "currentGameId" state
      const game_id = this.gameId;
      const data = await this.getGameStreamsData(game_id); //switch to TopGameStreams route -component
    }
  }
};
</script>