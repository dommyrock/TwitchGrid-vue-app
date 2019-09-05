<template>
  <div>
    <h4>Top Game streams by view count:</h4>
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
    {{gamesStreamsData}}
  </div>
</template>

 <script>
import { mapState, mapActions } from "vuex";
import StreamsCard from "./StreamsCard";

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
      gamesStreamsData: state => state.games.gameStreamsResponseData
    })
  },
  methods: {
    ...mapActions({
      getGameStreamsData: "games/getGameStreamsData"
    }),
    async getData() {
      const data = await this.getGameStreamsData("18122"); //switch to TopGameStreams route -component
    }
  }
};
</script>