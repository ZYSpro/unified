<template>
  <details-layout>
    <template #details>
      <policy :content="tableDetails.html"></policy>
    </template>
    <template #relative>
      <div>我是相关推荐</div>
    </template>
  </details-layout>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import DetailsLayout from '@/layouts/details/index.vue'
import { Policy } from 'leadleo-ui'
const store = useStore()

const tableDetails = computed(() => {
  return store.state.detailStore.table
})
</script>

<style></style>
