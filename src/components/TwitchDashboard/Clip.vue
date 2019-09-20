<!--redirected here from "StreamsCard" component (need to pass acc id here)  -->
<template>
  <iframe
    src="https://clips.twitch.tv/embed?clip=VainEnticingOtterPMSTwin"
    height="720"
    width="1080"
    frameborder="0"
    scrolling="no"
    allowfullscreen="true"
  ></iframe>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    //pass prop from clips card --> "embed_url"

    embed_url: String
  },
  methods: {
    ...mapState({
      url: state => state.games.gameClipsResponseData ///TODO fetch url from store for [clicked ClipsCardId] on this dataset ....
      //brodcasterClipsResponseData !!!! also exists ... fetched from Streams--->
    })
  }
};
</script>

<style scoped>
</style>