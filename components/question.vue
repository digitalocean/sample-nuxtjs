<template>
  <h1 class="m-16 text-center tracking-tight font-extrabold text-xl">
    <span class="block xl:inline">
      <h1>{{ question.text }}</h1>
    </span>
  </h1>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  computed: {
    availableQuestions() {
      return this.$store.state.questions.list.filter(item => !item.used);
    },
    question() {
      if (this.availableQuestions.length === 0)
        return "Ik heb geen vragen meer.";
      return this.availableQuestions[
        this.$store.state.questions.activeQuestion
      ];
    }
  }
};
</script>
