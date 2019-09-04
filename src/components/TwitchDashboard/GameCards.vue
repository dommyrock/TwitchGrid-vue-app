<!--on "Live channels" click , pass gameId to Parent ...and re-render live channels for "gameId"  -->
<template>
  <div>
    <b-card
      :title="title"
      :img-src="img"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-button href="#" @click="handleGameId(cardId)" variant="primary">Live channels</b-button>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "GameCard",
  props: {
    title: String,
    cardId: String,
    img: {
      type: String,
      required: true
    }
  },
  methods: {
    handleGameId(cardId) {
      this.$emit("clicked", cardId);
    }
  }
};
</script>
