<template>
  <details-layout>
    <template #details>
      <news :paragraphs="articleDetails.paragraphs"></news>
    </template>
  </details-layout>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import DetailsLayout from '@/layouts/mobile/details/index.vue'
import { News } from 'leadleo-ui'
import 'leadleo-ui/lib/styles/news/news-mobile.css'

const store = useStore()

const articleDetails = computed(() => {
  return store.state.detailStore.article
})
</script>
