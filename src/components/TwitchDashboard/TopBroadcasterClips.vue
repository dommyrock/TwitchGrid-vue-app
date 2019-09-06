<template>
  <div>
    <h4>Top Clips by: {{broadcasterName}}</h4>
    <b-container fluid>
      <b-row align-h="center">
        <clips-card
          v-for="item in brodcasterClipsResponseData"
          :img="item.thumbnail_url"
          :title="item.title"
          :broadcaster="item.broadcaster_name"
          :viewCount="item.view_count"
          :key="item.id"
          :created="item.created_at"
          :user_id="item.user_id"
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
      brodcasterClipsResponseData: state =>
        state.games.brodcasterClipsResponseData,
      // gameId: state => state.games.currentGameId,
      broadcasterId: state => state.games.currentBroadcasterId, //fetch id from store
      broadcasterName: state => state.games.currentBroadcasterName
    })
  },
  methods: {
    ...mapActions({
      getBroadcasterClipsData: "games/getBroadcasterClipsData"
    }),
    async getData() {
      const user_id = this.broadcasterId;
      const data = await this.getBroadcasterClipsData(user_id); //switch to TopGameStreams route -component
    }
  }
};
</script>
<style lang="stylus" scoped></style>