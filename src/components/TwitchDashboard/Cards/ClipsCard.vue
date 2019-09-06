<!--this component should be displayed foreach item in apiResponse []  -->
<template>
  <div>
    <b-card
      :img-src="img"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>{{"Views: "+viewCount}}</b-card-text>
      <b-card-text>{{"Created: " +created}}</b-card-text>
    </b-card>
  </div>
</template>
<script>
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
    created: String
  }
};
</script>
