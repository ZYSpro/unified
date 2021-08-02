<template>
  <canvas ref="sizeproRef" class="canvas"> </canvas>
</template>
<script setup lang="ts">
import { defineProps, onMounted, ref } from 'vue'
import { drawChart } from '../../utils/drawCharts.js'
import '../../utils/Chart.js'
const props = defineProps({
  sizepro: {
    type: Object,
    default: () => ({})
  }
})

const sizeproRef = ref()

onMounted(() => {
  console.log(JSON.stringify(props.sizepro))
  drawChart(sizeproRef.value, props.sizepro)
})
</script>
<style></style>
