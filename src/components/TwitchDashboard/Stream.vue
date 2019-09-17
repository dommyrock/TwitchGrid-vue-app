<!--redirected here from "StreamsCard" component (need to pass acc id here)  -->
<template>
  <iframe
    :src="link + currentBroadcasterName"
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
  computed: {
    ...mapState({
      link: state => state.games.streamLink,
      currentBroadcasterName: state => state.games.currentBroadcasterName //fetch name from state for url contatenation
    })
  }
};
</script>

<style scoped>
</style>