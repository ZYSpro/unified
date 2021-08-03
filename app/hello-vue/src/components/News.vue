<template>
  <div class="paragraphs">{{ paragraphs }}</div>
</template>

<script lang="ts">
export default {
  props: {
    paragraphs: {
      type: String,
      default: ''
    }
  }
}
</script>
