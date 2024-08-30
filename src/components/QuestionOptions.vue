<template>
  <div>
    <h2>{{ question.text }}</h2>
    <div v-for="(option, index) in question.options" :key="index">
      <label>
        <input
            type="radio"
            :name="question.id"
            :value="option"
            @change="selectOption"
        />
        {{ option }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: ['question'],
  methods: {
    selectOption(event) {
      this.$emit('answer', { questionId: this.question.id, answer: event.target.value });
    },
  },
};
</script>
