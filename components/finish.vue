<template>
  <div>
    FINISHED: {{ $store.state.session.items.length }} of
    {{ $store.state.session.maxQuestions }}
    <session v-if="finished" />
    <button @click="sendSession">Verstuur selectie</button>
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
    finished() {
      if (
        this.$store.state.session.items.length >
        this.$store.state.session.maxQuestions
      )
        return true;
      return false;
    }
  },

  methods: {
    ...mapActions({
      sendSession: "session/sendSession"
    })
  }
};
</script>
