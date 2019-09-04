<template>
  <div>
    <h2>The count Is: {{count}}</h2>
    <p>
      <button @click="count += 100500600">Increment</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return { count: 0 };
  }
};
</script>