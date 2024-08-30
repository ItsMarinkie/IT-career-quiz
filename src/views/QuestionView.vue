<template>
  <div class="question-view">
    <QuestionOptions :question="currentQuestion" @answered="handleAnswer" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { questions } from '@/data/data';
import QuestionOptions from "@/components/QuestionOptions.vue";

export default {
  components: {QuestionOptions},
  data() {
    return {
      questions,
      currentQuestionIndex: 0
    };
  },
  computed: {
    ...mapState(['answers']),
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
  },
  methods: {
    ...mapMutations(['addAnswer']),
    handleAnswer(answer) {
      this.addAnswer(answer);
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      } else {
        this.$router.push('/quiz');
      }
    }
  }
};
</script>

<style scoped>
.question-view {
  margin: 20px;
}
</style>
