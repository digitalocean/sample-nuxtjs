<template>
  <div 
    v-if="media" 
    class="pmcp-grid">
    <div 
      v-for="(i, key) in media" 
      :key="key">
      <button 
        :disabled="mediaStatus.id === 1" 
        @click="next(i)">
        <img :src="i.url" >
      </button>
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
    availableQuestions() {
      return this.$store.state.questions.list.filter(item => !item.used);
    },
    // TODO: SHOULD BE A GETTER (ALSO USED IN QUESTION.JS)// TODO: SHOULD BE A GETTER (ALSO USED IN QUESTION.JS). THEN I CAN REMOVE AVAILABLEQUESTIONS ALSO
    question() {
      if (this.availableQuestions.length === 0)
        return "Ik heb geen vragen meer.";
      return this.availableQuestions[
        this.$store.state.questions.activeQuestion
      ];
    },
    media() {
      return this.$store.state.media.all;
    },
    mediaStatus() {
      return this.$store.state.media.status[
        this.$store.state.media.activeStatus
      ];
    }
  },

  methods: {
    next(item) {
      this.saveItemToSession({
        answer: item.filename,
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
/* .pmcp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(25% - 1rem), 1fr));
  grid-template-rows: masonry;
  grid-gap: 1rem;
} */

.pmcp-grid {
  display: grid;
  /* grid-template-columns: repeat(auto-fill, calc(20vw - 2rem)); */
  /* grid-template-columns: repeat(auto-fill, minmax(calc(20% - 2rem), 1fr));
  grid-auto-rows: 1fr; */
  grid-template-columns: repeat(auto-fill, minmax(calc(25% - 2rem), 1fr));
  grid-auto-rows: 1fr;

  /* grid-template-rows: masonry; */
  /* This is better for small screens, once min() is better supported */
  grid-gap: 1rem;
}

.pmcp-grid::before {
  content: "";
  width: 0;
  padding-bottom: 100%;
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}

.pmcp-grid > *:first-child {
  grid-row: 1 / 1;
  grid-column: 1 / 1;
}
</style>
