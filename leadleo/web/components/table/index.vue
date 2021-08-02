<template>
  <div class="table-wrap" v-html="content"></div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import './css/pc.css'
defineProps({
  content: {
    type: String,
    default: ''
  }
})
</script>

<style>
@import './css/base.css';
@import './css/pc.css';
</style>
