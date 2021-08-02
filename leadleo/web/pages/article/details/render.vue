<template>
  <details-layout>
    <template #details>
      <news :paragraphs="articleDetails.paragraphs"></news>
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
import { News } from 'leadleo-ui'

const store = useStore()

const articleDetails = computed(() => {
  return store.state.detailStore.article
})
</script>
