<template>
  <div>
    <h4>Top Game streams by view count:</h4>
    {{gamesStreamsData}}
    <b-container fluid>
      <b-row align-h="center">
        <streams-card
          v-for="item in gamesStreamsData"
          :img="item.thumbnail_url"
          :title="item.title"
          :userName="item.user_name"
          :viewCount="item.viewer_count"
          :key="item.id"
        />
      </b-row>
    </b-container>
  </div>
</template>

 <script>
import router from "../../router";
import { mapState, mapActions } from "vuex";
import StreamsCard from "./StreamsCard";

export default {
  name: "TopGameStreams",
  components: { StreamsCard },
  data() {
    return {};
  },
  mounted() {
    this.getGameStreamsData();
  },
  computed: {
    ...mapState({
      gamesStreamsData: state => state.games.gameStreamsResponseData
    })
  },
  methods: {
    ...mapActions({
      getGameStreamsData: "games/getGameStreamsData"
    }),

    async getGameStreamsData(gameId) {
      // router.push({ name: "TopGameStreams", params: { gameId: { gameId } } });
      const data = await this.getGameStreamsData(gameId); //switch to TopGameStreams route -component
    }
  }
};
</script>