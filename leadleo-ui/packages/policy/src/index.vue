<template>
  <div class="table-wrap" v-html="content"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Policy',
  props: {
    content: {
      type: String,
      default: ''
    }
  }
})
</script>
