<template>
  <div>
    <pre>
      {{ session }}
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
    session() {
      return this.$store.state.session.items;
    }
  },
  methods: {}
};
</script>
