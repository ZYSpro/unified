<template>
  <div class="report-content" style="font-size: 16px">
    <div class="report-info">
      <h1 class="report-info-title">
        {{ briefInfo.title }}
      </h1>
      <div class="report-info-base">
        <div class="report-info-industry">
          <template v-for="item in briefInfo.industry" :key="item">
            <p class="report-tag-item">
              {{ item }}
            </p>
          </template>
        </div>
        <div class="report-info-label">
          <template v-for="item in briefInfo.labels" :key="item">
            <p class="report-tag-item">
              {{ item }}
            </p>
          </template>
        </div>
      </div>
      <div class="report-info-subtitle text-indent">
        {{ briefInfo.subTitle }}
      </div>
    </div>
    <ul class="report-content-box">
      <template v-for="item in outlineIndex" :key="item._id">
        <template v-if="(item.wbs && item.wbs.split('.').length <= 3) || !item.wbs">
          <li class="outline-box">
            <a
              v-if="item.wbs && item.wbs.split('.').length <= 3"
              class="outline-item flex-between-center"
              :is-glossary="item.isGlossary === true"
              :class="item.wbs.split('.').length > 2 ? 'open-point' : ''"
              @click="handleOpenOutline(item)"
            >
              <div class="outline-name one-ellipsis">{{ item.wbs }} {{ item.name }}</div>
              <div v-if="item.wbs.split('.').length > 2" class="open-outline">
                <span>展开</span>
                <img class="open-outline-icon" src="/assets/images/open.svg" />
              </div>
            </a>
            <div v-else-if="!item.wbs">
              <div class="section-item">
                {{ item.text }}
              </div>
            </div>
          </li>
        </template>
      </template>
    </ul>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()

    const outlineIndex = computed(() => {
      return store.state.indexStore?.report.outlineIndex
    })

    const briefInfo = computed(() => {
      return store.state.indexStore?.report.briefInfo
    })

    const handleOpenOutline = async outline => {
      const subContent = await (await window.fetch('/api/sub-content?id=' + outline.id)).json()
      console.log(outline)
      store.commit('indexStore/setSection', { outlineId: outline.id, sections: subContent })
    }

    return { handleOpenOutline, outlineIndex, briefInfo }
  }
})
</script>

<style>
.report-content {
  padding: 140px 26px 80px;
}

.report-info .report-info-title {
  font-size: 48px;
}

.outline-item {
  border-bottom: 1px solid #f0f0f0;
  font-size: 32px;
  padding: 16px;
}

.report-info-subtitle {
  font-size: 1em;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
}

.outline-box .outline-name {
  width: calc(100% - 45px);
  color: #333;
}

.outline-box .open-outline {
  width: 80px;
  font-size: 0.81em;
  color: #9e9e9e;
  position: relative;
}

.outline-box .open-outline .open-outline-icon {
  width: 16px;
  height: 16px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.sub-outline-name {
  font-size: 0.89em;
  color: #000;
  line-height: 40px;
  display: block;
  padding: 12px 0 0 16px;
}

.section-item {
  font-size: 0.89em;
  color: #000;
  text-indent: 60px;
  line-height: 48px;
  padding: 16px 0 0 16px;
  white-space: normal;
  word-break: break-all;
}

.outline-item + .section-item,
.outline-item + .sub-outline-name {
  margin-top: 12px;
}

.hidden-header {
  height: 0 !important;
}

.report-read-process {
  width: 4px;
  height: calc(100vh - 1.87rem);
  position: fixed;
  right: 0;
  top: 1.87rem;
  border-bottom: 5px solid #fff;
  background-color: #dedede;
  border-radius: 2px;
}

.report-read-process .process {
  background-color: red;
  border-radius: 2px;
}

.report-info-base {
  font-size: 30px;
  margin: 24px 0;
  padding-bottom: 24px;
  border-bottom: 1px solid #dedede;
}

.report-info-base .report-info-industry {
  margin-bottom: 16px;
}

.report-info-label {
  display: flex;
  flex-wrap: wrap;
}

.report-info-label .report-tag-item {
  font-size: 30px;
  margin-right: 24px;
  margin-bottom: 6px;
  padding: 0 2px;
  color: #999999;
  position: relative;
}

.report-info-label .report-tag-item::after {
  content: '';
  position: absolute;
  height: 30px;
  width: 0.01rem;
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #999;
}

.report-info-label .report-tag-item:last-child::after {
  width: 0;
}

.report-content-box {
  margin-bottom: 30px;
}

.selecter-box .label-text {
  font-size: 24px;
}

.table-content {
  overflow-y: auto !important;
  overflow: auto;
}
</style>
