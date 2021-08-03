<template>
  <div class="details-page">
    <header class="details-header"></header>
    <section class="details-section">
      <article class="details-content-main">
        <slot name="details"></slot>
      </article>
    </section>
  </div>
</template>
<script setup lang="ts"></script>
<style>
.details-header {
  height: 44px;
  background-color: skyblue;
  box-shadow: 0px 2px 12px 0px rgb(0 0 0 / 7%);
}

.details-content-main {
  padding: 14px 15px 0;
}
</style>
