<template>
  <div class="paragraphs" v-html="paragraphs"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'News',
  props: {
    paragraphs: {
      type: String,
      default: ''
    }
  }
})
</script>
