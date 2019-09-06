<template>
  <div>
    <h4>Top streams by view count:</h4>
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
import StreamCard from "./Cards/StreamsCard";
export default {
  name: "Streams",
  components: { StreamCard },
  data() {
    return {};
  },
  mounted() {
    this.getData();
  },
  computed: {
    ...mapState({
      streamsData: state => state.games.streamsResponseData //state.games -->because it's in games module
    })
  },
  methods: {
    ...mapMutations({ setStreamsData: "games/SET_STREAMS_DATA" }),
    ...mapActions({ getStreamsData: "games/getStreamsData" }),

    async getData() {
      const data = await this.getStreamsData();
    }
  }
};
</script>