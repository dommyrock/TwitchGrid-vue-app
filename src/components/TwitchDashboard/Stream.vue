<!--redirected here from "StreamsCard" component (need to pass acc id here)  -->
<template>
  <div class="back">
    <iframe
      :src="link + currentBroadcasterName"
      height="720"
      width="1080"
      frameborder="0"
      scrolling="no"
      allowfullscreen="true"
    ></iframe>
  </div>
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
.back {
  background-color: #6b6b6b;
}
</style>