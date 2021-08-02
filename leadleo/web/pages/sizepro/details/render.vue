<template>
  <sizepro :sizepro="sizeproDetails"></sizepro>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

import Sizepro from '@/components/sizepro/index.vue'

const store = useStore()

const sizeproDetails = computed(() => {
  return store.state.detailStore.sizepro
})
</script>
<style></style>
