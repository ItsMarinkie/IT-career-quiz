<template>
  <div>
    <h1>Career Quiz</h1>
    <QuestionOptions
        v-for="(question, index) in questions"
        :key="index"
        :question="question"
        @answer="handleAnswer"
    />
    <button @click="submitQuizAction">Submit</button>
    <button @click="goBack">Back</button>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import QuestionOptions from "@/components/QuestionOptions.vue";
import { useRouter } from 'vue-router';


export default {
  components: {QuestionOptions },
  setup() {
    const router = useRouter();
    const goBack = () => {
      router.back(); // Navigate back to the previous page
    };

    return { goBack };
  },

  computed: {
    ...mapState(['questions']),
  },
  methods: {
    ...mapActions(['answerQuestion', 'submitQuiz']),
    handleAnswer(payload) {
      this.answerQuestion(payload);
    },
    submitQuizAction() {
      this.submitQuiz(); // Call the Vuex action
      this.$router.push('/result'); // Navigate to the result page
    },
  },
};
</script>
