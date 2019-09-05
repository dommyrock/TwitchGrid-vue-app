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
//cardId == game_id (prop name from API)
import router from "../../router";
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
      // call this method on click & emit "cardId"value to Parent (so it knows what endpoint to request)
      this.$emit("clickedCard", cardId);
      router.push({ name: "TopGameStreams", params: { gameId: { cardId } } });
    }
    //or : <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
  }
};
</script>
<!--redirect to topgamestreams compoenent ...import streamcard there and pass game id to it  -->
