<!--display grid of card components  -->

<template>
  <div>
    <h1>Top Games</h1>
    <!-- <button @click="getData">Print current State</button> -->
    <!-- {{gamesData}} -->
    <b-container fluid>
      <b-row align-h="center">
        <game-cards
          v-for="item in gamesData"
          :img="item.box_art_url"
          :imgId="item.id"
          :title="item.name"
          :key="item.id"
          @clicked="handleChildClick"
        />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
// import { createNamespacedHelpers } from "vuex";
// const { mapState, mapActions, mapMutations } = createNamespacedHelpers("games");  Do this for shorten named spaces assign!
import GameCards from "./GameCards";

//differrence between computed prop. and methods is in CACHE !!(so computed props. are usually preffered)

//vue auto caches computed props. (only time it re-runs func. that alters computed prop is when dependencies change!!!! )

//if we would use mathod -->every time we would need to render output of method ....We would run method again ...even if props havent changed!!!

export default {
  name: "Games",
  components: { GameCards },
  data() {
    return {};
  },
  mounted() {
    this.getData();
  },
  computed: {
    ...mapState({
      testData: state => state.games.test,
      gamesData: state => state.games.gamesResponseData
    })
  },
  methods: {
    // ...mapMutations({ setGamesData: "games/SET_GAMES_DATA" }), called in games/actions to mutate state
    ...mapActions({
      getGamesData: "games/getGamesData",
      getGameStreamsData: "games/getGameStreamsData"
    }),

    async getData() {
      const data = await this.getGamesData();
    },
    handleChildClick(value) {
      console.log("From the child:" + value);
      this.getGameStreamsData();
    },
    async getGameStreamsData(gameId) {
      const data = await this.getGameStreamsData(gameId);
    }
  }

  //mutations == ALWAYS SYNCHRONOUS

  //Actions == CAN BE ASYNC OR SYNC

  //in vue we can call more event handlers at same time like this
  // <button @click="handleClick(); handleStateChange();">Print current State</button>
};
</script>

  <style scoped>
</style>

