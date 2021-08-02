<template>
  <canvas ref="sizeproRef" canvas-id="sizepro" type="2d" class="canvas"> </canvas>
</template>
<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue'

defineProps({
  sizepro: {
    type: Object,
    default: () => ({})
  }
})
const defaultOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(220, 220, 220, 0.8)'
      }
    }
  ]
}

const sizeproRef = ref()
onMounted(() => {
  console.log(sizeproRef.value)
  sizeproRef.value.refresh(defaultOption)
})
</script>
<style>
.canvas {
  width: 500px;
  height: 500px;
}
</style>
