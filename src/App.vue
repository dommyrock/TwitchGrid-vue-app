<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <Message>Hello from component</Message>
    <Counter />
    <hr />
    <Header />
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import Message from "./components/TestComponents/Message";
import Counter from "./components/TestComponents/Counter";
import Header from "./components/TwitchDashboard/Header";

export default {
  name: "app",
  components: {
    Message,
    Counter,
    Header
  },
  data() {
    return {};
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
