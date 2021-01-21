<template>
  <div>
    <div 
      v-if="items" 
      class="pmcp-grid">
      <div 
        v-for="(i, key) in items" 
        :key="key">
        <!-- {{ i.filename }} -->
        <button 
          :disabled="mediaStatus.id === 1" 
          @click="next(i)">
          <img :src="i.url" >
        </button>
      </div>
    </div>
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
    activeTemplate() {
      return this.$store.state.templates.active;
    },
    activeImagePath() {
      return this.$store.state.media.activePath;
    },
    media() {
      return this.$store.state.media.all;
    },
    mediaStatus() {
      return this.$store.state.media.status[
        this.$store.state.media.activeStatus
      ];
    },
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
  },
  methods: {
    next(item) {
      this.saveItemToSession({
        filename: item.filename,
        question: this.question.text
      });
      this.nextQuestion();
      this.setRandomTemplate();
    },

    ...mapActions({
      getFolders: "media/getFolders",
      setRandomTemplate: "templates/setRandomTemplate"
    }),
    nextQuestion() {
      if (this.availableQuestions.length === 0) return;
      const activeQuestion = this.$store.state.questions.activeQuestion;
      this.setUsedQuestion(activeQuestion);
      this.setNextQuestion(this.availableQuestions.length - 1);
    },
    ...mapMutations({
      getRandomMedia: "media/getMedia",
      setUsedQuestion: "questions/setUsed",
      setNextQuestion: "questions/setNextQuestion",
      saveItemToSession: "session/saveItemToSession"
    })
    // ...mapMutations({
    //   getRandomMedia: 'media/getRandom'
    // })
  }
};
</script>

<style scoped>
.pmcp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  /* This is better for small screens, once min() is better supported */
  /* grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr)); */
  grid-gap: 1rem;
  /* This is the standardized property now, but has slightly less support */
  /* gap: 1rem */
}
</style>
