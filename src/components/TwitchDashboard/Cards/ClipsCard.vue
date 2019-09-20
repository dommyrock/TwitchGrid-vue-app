<!--StreamsCard ->TopBroadcasterClips->ClipsCard->Clip  -->
<template>
  <div>
    <b-card
      :img-src="img"
      :embed_url="embed_url"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-button href="#" @click="handleClipEmbed(broadcaster)" variant="outline-info">View clip</b-button>
      <b-card-text>{{"Views: "+viewCount}}</b-card-text>
      <b-card-text>{{"Created: " +created}}</b-card-text>
    </b-card>
  </div>
</template>
<script>
import router from "../../../router";
export default {
  name: "GameCard",
  props: {
    title: String,
    broadcaster: String,
    viewCount: Number,
    cardId: String,
    img: {
      type: String,
      required: true
    },
    created: String,
    embed_url: String
  },
  methods: {
    handleClipEmbed(broadcaster) {
      //push to clip component
      router.push({
        name: "EmbeddedClip",
        params: { broadcasterName: broadcaster }
      });
    }
  }
};
</script>
