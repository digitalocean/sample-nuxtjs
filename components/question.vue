<template>
  <h1 class="m-16 text-center tracking-tight font-extrabold text-xl">
    <span class="block xl:inline">
      <h1 
        v-if="mediaStatus.id === 1" 
        class="loading" />
      <h1 v-else>{{ question.text }}</h1>
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
    },
    mediaStatus() {
      return this.$store.state.media.status[
        this.$store.state.media.activeStatus
      ];
    }
  }
};
</script>
<style scoped>
.loading {
  font-size: 30px;
}

.loading:after {
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
  -webkit-animation: ellipsis steps(19, end) 900ms infinite;
  animation: ellipsis steps(4, end) 900ms infinite;
  content: "\2026"; /* ascii code for the ellipsis character */
  width: 0px;
}

@keyframes ellipsis {
  to {
    width: 1.25em;
  }
}

@-webkit-keyframes ellipsis {
  to {
    width: 1.25em;
  }
}
</style>
