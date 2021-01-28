<!-- 1. Get template at random -->
<!-- 2. Get images with max items from template -->
<!-- 3. Get Question -->
<template>
  <div class="w-full p-4 bg-back font-white">
    {{ activeImagePath }}
  </div>
</template>

<script>
export default {
  computed: {
    activeImagePath() {
      return this.$store.state.media.activePath;
    }
  }
};
</script>
