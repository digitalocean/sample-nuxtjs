<template>
  <div class="container">
    <div class="fun-form-btn">
      <button @click="setRandomStory">
        Tell a story
      </button>
    </div>
    <div class="some-story" v-if="!isLoading">
      <div class="title">{{randomTitle.toUpperCase() || 'CLICK'}}</div>
      <div class="story">{{randomStory || 'Click for a story'}}</div>
    </div>
    <div v-else class="load">
      Loading ....
    </div>
  </div>
</template>

<script>
const BASE_URL = 'https://sample-nodejs-4u8rr.ondigitalocean.app/';

export default {
  name: 'digitalOceanApp',
  data() {
    return {
      allParagraphs: [],
      randomTitle: '',
      randomStory: '',
      isLoading: false,
    };
  },
  methods: {
    async setRandomStory() {
      debugger;
      try {
        this.isLoading = true;
        const result = await (await fetch(BASE_URL)).json();
        this.randomTitle = result.title;
        this.randomStory = result.paragraphs.join('\n');
        this.isLoading = false;
      } catch (er) {
        this.isLoading = false;
        alert('Something wrong with the application');
        console.error(JSON.stringify(er));
      }
    },
  },
};
</script>

<style>
 .container .fun-form-btn {
   margin-top: 20px;
   display: flex;
   justify-content: center;
 }

.container .fun-form-btn button {
  background: linear-gradient(#4CB8C4, #3CD3AD);
  padding: 15px;
  width: 150px;
  font-size: 20px;
  color: white;
  cursor: pointer;
  border-radius: 5px;

}

.container .load {
  margin-top: 25px;
  font-size: 20px;
  display:flex;
  justify-content: center;
}

.container .some-story {
  margin: 20px;
  font-size: 20px;
  border: 2px dotted white;
  color: white;
}

.container .title {
  text-decoration: underline;
  margin-top: 20px;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
}

.container .story {
  margin-top: 10px;
  font-size: 14px;
  padding: 15px
}
</style>
