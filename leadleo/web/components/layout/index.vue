<template>
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <title>头豹科技创新网</title>
      <slot name="viteClient" />
      <slot name="customeHeadScript" />
      <slot name="cssInject" />
      <link rel="stylesheet" href="/assets/styles/base.scss" />
    </head>
    <body>
      <div id="app">
        <slot name="children" />
      </div>
      <slot name="initialData" />
      <slot name="jsInject" />
    </body>
  </html>
</template>

<style lang="less">
@import './normalize.css';
</style>
