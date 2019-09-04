<template>
  <div>
    <h4>Top Game streams by view count:</h4>
    <b-container fluid>
      <b-row align-h="center">
        <stream-card
          v-for="item in streamsData"
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
import { mapState, mapActions, mapMutations } from "vuex";
import StreamCard from "./StreamsCard";
export default {
  name: "Streams",
  components: { StreamCard },
  data() {
    return {};
  },
  mounted() {},
  computed: {
    ...mapState({
      streamsData: state => state.games.streamsResponseData
    })
  },
  methods: {
    ...mapMutations({ setStreamsData: "games/SET_STREAMS_DATA" }),
    ...mapActions({ getStreamsData: "games/getStreamsData" }),
    //pass gameId on click all the way to api fetch method "getStreamsData"
    handleClick(gameId) {
      this.getData(gameId);
    },
    async getData(gameId) {
      const data = await this.getStreamsData(gameId);
    }
  }
};
</script>