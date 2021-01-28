<template>
  <div>
    <pre 
      class="text-xl font-bold" 
      style="white-space: pre-wrap">
      <span style="background-color:red;">{{ session }}</span>
    </pre>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  props: {
    items: {
      type: Array,
      default: null
    }
  },
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
    },
    session() {
      let currentPath = "...waiting for input";
      if (this.$store.state.media.activePath != null) {
        currentPath = this.$store.state.media.activePath;
      }
      return [
        ...this.$store.state.session.items,
        {
          answer: currentPath,
          question: this.question.text
        }
      ].reverse();
    }
  },
  methods: {}
};
</script>
