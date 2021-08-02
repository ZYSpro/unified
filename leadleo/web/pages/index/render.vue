<template>
  <ul class="report-content-box">
    <template v-for="item in outlineIndex" :key="item.id">
      <template v-if="(item.wbs && item.wbs.split('.').length <= 3) || !item.wbs">
        <li class="outline-box">
          <div v-if="item.wbs && item.wbs.split('.').length <= 3">
            <a
              class="outline-item flex-between-center"
              data-id="item._id"
              :is-glossary="item.isGlossary === true"
              :class="item.wbs.split('.').length"
            >
              2 ? 'open-point' : ''>
              <p class="outline-name one-ellipsis">{{ item.wbs }} {{ item.name }}</p>
              <div class="open-outline">
                <span>展开</span>
                <img class="open-outline-icon" src="/mobile/images/open.svg" />
              </div>
            </a>
          </div>
          <div v-else-if="!item.wbs">
            <div class="section-item">
              {{ item.text }}
            </div>
          </div>
        </li>
      </template>
    </template>
  </ul>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const outlineIndex = reactive([
      {
        text: '中国分时租赁行业尚处于发展初期，行业的重资产属性决定了企业的盈利回报周期较长。中国分时租赁行业的成本支出较高，导致大多数企业尚未实现真正的盈利。分时租赁行业的成本支出主要由固定成本、运营成本和使用成本三部分构成。',
        outline: '5cbed8f6e95dad4bc7e73bb2',
        brief: '5cbed82de95dad4bc7e73b3b',
        attachment: [],
        id: '5cbeeebdbaf27c50e4ea9e06'
      },
      {
        text: '（1）固定成本',
        outline: '5cbed8f6e95dad4bc7e73bb2',
        brief: '5cbed82de95dad4bc7e73b3b',
        attachment: [],
        id: '5cbeeec4baf27c50e4ea9e08'
      },
      {
        text: '汽车租赁行业的固定成本主要包括车辆购买成本与车险成本两部分。在新能源汽车发展前期，购买新能源车辆企业受惠于国家、地方、厂家的三重补贴，车辆购置成本远低于燃传统能源汽车。伴随新能源汽车行业逐渐发展成熟，政策补贴红利逐渐消失，企业将承担的车辆购置成本将逐渐提高。车辆的规模化购置和铺设，以及车险的固定支出使企业或运营平台承担较大的资金压力。',
        outline: '5cbed8f6e95dad4bc7e73bb2',
        brief: '5cbed82de95dad4bc7e73b3b',
        attachment: [],
        id: '5cbeeeccbaf27c50e4ea9e09'
      },
      {
        text: '（2）运营成本',
        outline: '5cbed8f6e95dad4bc7e73bb2',
        brief: '5cbed82de95dad4bc7e73b3b',
        attachment: [],
        id: '5cbeeed9baf27c50e4ea9e0a'
      },
      {
        text: '汽车分时租赁企业的运营成本主要包括车辆调度、车辆折旧、车辆维修保养以及其他的人力及技术成本。目前，中国分时租赁企业的订单规模不足，车辆租赁频次较低，但分时租赁企业运营成本较高，企业及平台的资金压力较大。',
        outline: '5cbed8f6e95dad4bc7e73bb2',
        brief: '5cbed82de95dad4bc7e73b3b',
        attachment: [],
        id: '5cbeeee1baf27c50e4ea9e0b'
      },
      {
        text: '汽车分时租赁行业停车成本较高，尤其在停车资源相对紧缺的一二线城市核心地段，较高的租金为企业带来较大的运营压力。同时由于汽车分时租赁行业停车资源的短缺限制了共享汽车的网点设置，网点设置过于分散增加了企业的车辆调度成本。因汽车分时租赁网点设置的不合理性及车辆使用便捷性限制等因素的影响，汽车分时租赁行业订单数较少，车辆使用频率不高。部分企业会在发展初期以低价吸引消费者，但较低的客单价和使用频率导致了企业整体收入偏低。较高的运营成本为企业带来较大的资金压力，部分规模较小实力欠缺的企业将面临退出市场的窘境。',
        outline: '5cbed8f6e95dad4bc7e73bb2',
        brief: '5cbed82de95dad4bc7e73b3b',
        attachment: [],
        id: '5cbeeeeabaf27c50e4ea9e0c'
      },
      {
        text: '（3）使用成本',
        outline: '5cbed8f6e95dad4bc7e73bb2',
        brief: '5cbed82de95dad4bc7e73b3b',
        attachment: [],
        id: '5cbeeefbbaf27c50e4ea9e0d'
      },
      {
        text: '受限于共享车辆配套设施的短缺，汽车分时租赁企业需承担较高的停车和续能成本。因公共停车资源的短缺，企业需承担较高的公共车位使用成本。同时分散的网点设置将提高企业的蓄能成本。蓄能成本主要包括新能源车辆的充电成本及传统能源车辆的加油成本，有限的充电桩数量将降低共享车辆的使用效率，部分企业选择自建充电基础设施，企业需承担较高的建设成本和较大的技术压力。',
        outline: '5cbed8f6e95dad4bc7e73bb2',
        brief: '5cbed82de95dad4bc7e73b3b',
        attachment: [],
        id: '5cbeef02baf27c50e4ea9e0e'
      }
    ])
    const store = useStore()
    const report = computed(() => {
      return store.state.indexStore.report
    })
    return { outlineIndex, report }
  }
})
</script>
<style>
.report-content {
  padding: 1.87rem 0.35rem 1.07rem;
}

.report-info .report-info-title {
  font-size: 0.7rem;
}

.outline-item {
  border-bottom: 1px solid #f0f0f0;
  font-size: 1em;
  padding: 0.21rem;
}

.report-info-subtitle {
  font-size: 1em;
  padding-bottom: 0.27rem;
  border-bottom: 1px solid #f0f0f0;
}

.outline-box .outline-name {
  width: calc(100% - 45px);
  color: #333;
}

.outline-box .open-outline {
  width: 1.07rem;
  font-size: 0.81em;
  color: #9e9e9e;
  position: relative;
}

.outline-box .open-outline .open-outline-icon {
  width: 0.27rem;
  height: 0.13rem;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.sub-outline-name {
  font-size: 0.89em;
  color: #000;
  line-height: 0.62rem;
  display: block;
  padding: 0.11rem 0 0 0.21rem;
}

.section-item {
  font-size: 0.15em;
  color: #000;
  text-indent: 0.3rem;
  line-height: 0.24rem;
  padding: 0.11rem 0 0 0.21rem;
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
  font-size: 0.37rem;
  margin: 0.27rem 0;
  padding-bottom: 0.27rem;
  border-bottom: 1px solid #dedede;
}

.report-info-base .report-info-industry {
  margin-bottom: 0.23rem;
}

.report-info-label {
  display: flex;
  flex-wrap: wrap;
}

.report-info-label .report-tag-item {
  font-size: 0.37rem;
  margin-right: 0.27rem;
  margin-bottom: 0.1rem;
  padding: 0 0.07rem;
  color: #999999;
  position: relative;
}

.report-info-label .report-tag-item::after {
  content: '';
  position: absolute;
  height: 0.35rem;
  width: 0.01rem;
  right: -0.13rem;
  top: 50%;
  transform: translateY(-50%);
  background-color: #999;
}

.report-info-label .report-tag-item:last-child::after {
  width: 0;
}

.report-content-box {
  margin-bottom: 0.4rem;
}

.selecter-box .label-text {
  font-size: 0.35rem;
}

.table-content {
  overflow-y: auto !important;
  overflow: auto;
}
</style>
