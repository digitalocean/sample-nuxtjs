<template>
  <div class="h-screen flex flex-col justify-center items-center">
    <div 
      v-if="allLanguages" 
      class="pmcp-grid p-8 w-full">
      <!-- <div
        v-for="(i, key) in allLanguages"
        :key="key"> -->
      <button
        v-for="(i, key) in allLanguages"
        :key="key"
        :disabled="!i.active"
        class="border font-extrabold text-xl"
        @click="setLanguage(i)"
      >
        {{ i.lang }}
      </button>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  computed: {
    activeLanguage() {
      return this.$store.state.languages.active;
    },
    allLanguages() {
      return this.$store.state.languages.all;
    }
  },

  methods: {
    setLanguage(i) {
      this.setActiveLanguage(i);
      this.$scrollTo("#welcome");
    },
    ...mapMutations({
      setActiveLanguage: "languages/setActive"
    })
  }
};
</script>

<style scoped>
.pmcp-grid {
  display: grid;
  /* grid-template-columns: repeat(auto-fill, calc(20vw - 2rem)); */
  /* grid-template-columns: repeat(auto-fill, minmax(calc(20% - 2rem), 1fr));
  grid-auto-rows: 1fr; */
  grid-template-columns: repeat(auto-fill, minmax(calc(20% - 2rem), 1fr));
  grid-auto-rows: 1fr;

  /* grid-template-rows: masonry; */
  /* This is better for small screens, once min() is better supported */
  grid-gap: 1rem;
}

@media only screen and (max-width: 850px) {
  .pmcp-grid {
    grid-template-columns: repeat(auto-fill, minmax(calc(8em - 2rem), 1fr));
    grid-gap: 1em;
  }
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

/* .pmcp-grid button {
  height: calc(20% - 2rem);
} */
</style>
