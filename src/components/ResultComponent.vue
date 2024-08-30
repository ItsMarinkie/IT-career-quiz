<template>
  <div>
    <h1>Your Career Path</h1>
    <p>{{ result }}</p>
    <button @click="startOver">Start Over</button> <!-- Button to restart the quiz -->

  </div>
</template>

<script>
import { mapState } from 'vuex';
import { useRouter } from 'vue-router';


export default {
  setup() {
    const router = useRouter();

    const startOver = () => {
      router.push('/'); // Navigate to the quiz start page
    };

    return { startOver };
  },
  computed: {
    ...mapState(['result']),
  },
};
</script>
