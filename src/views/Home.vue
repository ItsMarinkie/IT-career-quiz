<template>
  <div class="home">
    <h1 class="heading">Welcome to the IT Career Path Quiz</h1>
    <router-link to="/quiz">Start Quiz</router-link>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home'
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 60px;
}
.heading {
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
