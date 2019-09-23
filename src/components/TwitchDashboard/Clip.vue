<!--redirected here from "StreamsCard" component (need to pass acc id here)  -->
<template>
  <iframe
    :src="embed_url"
    height="720"
    width="1080"
    frameborder="0"
    scrolling="no"
    allowfullscreen="true"
  ></iframe>
</template>

<script>
export default {
  props: {
    embed_url: String //prop passed as param from ClipsCard
  }
};
</script>

<style scoped>
</style>