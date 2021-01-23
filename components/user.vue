<template>
  <div class="h-screen flex flex-col content-center justify-center">
    <div class="flex space-x-4">
      <div class="mb-8 flex-grow pr-1">
        <label 
          for="first_name" 
          class="block font-bold">Voornaam</label>
        <div class="mt-1">
          <input
            id="first_name"
            :value="first"
            type="text"
            name="first_name"
            autocomplete="given-name"
            class="py-3 px-4 block w-full border"
            @input="setFirstName"
          >
        </div>
      </div>
      <div class="mb-8 flex-grow pl-1">
        <label 
          for="last_name" 
          class="bloc font-bold"> Achternaam </label>
        <div class="mt-1">
          <input
            id="last_name"
            :value="last"
            type="text"
            name="last_name"
            autocomplete="family-name"
            class="py-3 px-4 block w-full border"
            @input="setLastName"
          >
          <div class="flex justify-center mt-2">
            <button
              v-scroll-to="'#question'"
              class="bg-black text-white px-8 py-4 w-full font-bold"
            >
              Stel mij een vraag
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  computed: {
    first() {
      return this.$store.state.session.user.first;
    },
    last() {
      return this.$store.state.session.user.last;
    }
  },

  methods: {
    ...mapMutations({
      setFirstName: "session/setFirstName",
      setLastName: "session/setLastName"
    })
  }
};
</script>
k
