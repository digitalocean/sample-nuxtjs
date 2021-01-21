<template>
  <div>
    <div class="mondrian">
      <div
        v-for="(block, key) in blocks"
        :key="key"
        :data-row-span="block.rowSpan"
        :data-col-span="block.colSpan"
        :data-color-index="block.colorIndex"
        class="mondrian__block"
      />
    </div>
    <button
      class="generate-button"
      @on:click="regenerate">Regenerate
    </button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      blocks: []
    }
  },
  mounted: function() {
    this.generateBlocks()
  },
  methods: {
    generateBlocks: function() {
      for (let i = 0; i < 8; i++) {
        this.blocks.push({
          colSpan: Math.floor(Math.random() * 3 + 1),
          rowSpan: Math.floor(Math.random() * 3 + 1),
          colorIndex: Math.floor(Math.random() * 6 + 1)
        })
      }
    },
    regenerate: function() {
      this.blocks = []
      setTimeout(() => this.generateBlocks(), 0)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Lato:300,900');
* {
  box-sizing: border-box;
  -webkit-animation: fadeIn 0.5s;
  animation: fadeIn 0.5s;
}
body,
html {
  background-color: #fff;
  display: grid;
  align-items: center;
  justify-content: center;
  font-family: 'Lato', sans-serif;
  text-align: center;
  padding: 20px;
  min-height: 100vh;
  width: 100vw;
}
.mondrian {
  background-color: #070908;
  border: 10px solid #070908;
  box-shadow: 5px 10px 10px #aaa;
  display: grid;
  grid-auto-columns: 50px;
  grid-auto-flow: dense;
  grid-auto-rows: 50px;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, 50px);
  grid-template-rows: repeat(auto-fit, 50px);
  height: 300px;
  overflow: hidden;
  width: 250px;
}
.mondrian__block {
  -webkit-animation: scaleIn 0.25s ease 0s;
  animation: scaleIn 0.25s ease 0s;
  background-color: #f2f5f1;
}
.mondrian__block:nth-child(1) {
  -webkit-animation-delay: 0.15s;
  animation-delay: 0.15s;
  background-color: red;
  transform: scale(0);
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.mondrian__block:nth-child(2) {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
  background-color: red;
  transform: scale(0);
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.mondrian__block:nth-child(3) {
  -webkit-animation-delay: 0.45s;
  animation-delay: 0.45s;
  background-color: red;
  transform: scale(0);
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.mondrian__block:nth-child(4) {
  -webkit-animation-delay: 0.6s;
  animation-delay: 0.6s;
  background-color: red;
  transform: scale(0);
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.mondrian__block:nth-child(5) {
  -webkit-animation-delay: 0.75s;
  animation-delay: 0.75s;
  background-color: red;
  transform: scale(0);
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.mondrian__block:nth-child(6) {
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
  background-color: red;
  transform: scale(0);
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.mondrian__block:nth-child(7) {
  -webkit-animation-delay: 1.05s;
  animation-delay: 1.05s;
  background-color: red;
  transform: scale(0);
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.mondrian__block:nth-child(8) {
  -webkit-animation-delay: 1.2s;
  animation-delay: 1.2s;
  background-color: red;
  transform: scale(0);
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.mondrian__block:nth-child(9) {
  -webkit-animation-delay: 1.35s;
  animation-delay: 1.35s;
  background-color: red;
  transform: scale(0);
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.mondrian__block:nth-child(10) {
  -webkit-animation-delay: 1.5s;
  animation-delay: 1.5s;
  background-color: red;
  transform: scale(0);
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.mondrian__block[data-row-span='1'] {
  grid-row: span 1;
}
.mondrian__block[data-col-span='1'] {
  grid-column: span 1;
}
.mondrian__block[data-row-span='2'] {
  grid-row: span 2;
}
.mondrian__block[data-col-span='2'] {
  grid-column: span 2;
}
.mondrian__block[data-row-span='3'] {
  grid-row: span 3;
}
.mondrian__block[data-col-span='3'] {
  grid-column: span 3;
}
.mondrian__block[data-color-index='1'] {
  background-color: #f2f5f1;
}
.mondrian__block[data-color-index='2'] {
  background-color: #f8d92d;
}
.mondrian__block[data-color-index='3'] {
  background-color: #f2f5f1;
}
.mondrian__block[data-color-index='4'] {
  background-color: #0b54a4;
}
.mondrian__block[data-color-index='5'] {
  background-color: #f2f5f1;
}
.mondrian__block[data-color-index='6'] {
  background-color: #d60014;
}
.generate-button {
  cursor: pointer;
  padding: 4px 12px;
  border-radius: 4px;
  font-family: 'Lato', sans-serif;
  margin-top: 30px;
  background-color: #fff;
}
.generate-button:hover {
  background-color: #e6e6e6;
}
.generate-button:active {
  background-color: #ccc;
}
@-webkit-keyframes scaleIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
@keyframes scaleIn {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
