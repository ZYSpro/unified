<template>
  <div class="details-page">
    <div class="page-header">
      <div class="page-edition-center">
        <header class="details-header"></header>
      </div>
    </div>
    <div class="page-edition-center">
      <section class="details-section">
        <article class="details-content">
          <slot name="details"></slot>
        </article>
        <aside>
          <slot name="relative"></slot>
        </aside>
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({
  name: 'DetailsLayout'
})
</script>
<style>
.page-header {
  width: 100%;
  height: 148px;
  background-color: skyblue;
}
.page-edition-center {
  width: 1200px;
  margin: 0 auto;
  background-color: pink;
}

.details-header {
  height: 148px;
}

.details-section {
  display: flex;
}

.details-content {
  width: 877px;
}
</style>
