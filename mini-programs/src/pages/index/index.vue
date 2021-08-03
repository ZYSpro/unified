<template>
  <details-layout>
    <template #details>
      <news :paragraphs="article.paragraphs"></news>
    </template>
  </details-layout>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

import DetailsLayout from '../../layouts/mobile/index.vue'
import { News } from 'leadleo-ui'
import 'leadleo-ui/lib/styles/news/news-mobile.css'

import { Get } from '../../utils/core'

const article = reactive({})

Get('http://test.vestleader.com:81/article/details?id=60d4aae4b5090b1ed0dacb53').then(res => {
  console.log(res)
  Object.assign(article, res.data)
})
</script>

<style>
</style>
