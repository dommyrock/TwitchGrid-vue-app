<!--this component should be displayed foreach item in apiResponse []  -->
<template>
  <div>
    <b-card
      :title="userName"
      :img-src="img"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>{{"Viewers: "+viewCount}}</b-card-text>
      <!-- <bcard-textz>{{title}}</bcard-textz> removed to keep cards smaller-->
      <!-- <b-button href="#" variant="primary">Live channels</b-button> -->
    </b-card>
  </div>
</template>
<script>
export default {
  name: "GameCard",
  props: {
    title: String,
    userName: String,
    viewCount: Number,
    img: {
      type: String,
      required: true
    }
  }
};
</script>
