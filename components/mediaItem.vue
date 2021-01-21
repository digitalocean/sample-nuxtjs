<template>
  <div>
    <div v-if="item">
      {{ imageUrl }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageUrl() {
      // if (!this.item) return
      // if (this.item.mime.includes('image'))
      return require(`~/static/${this.item.url}`)
    }
  }
}
</script>

<style scoped>
</style>
