<template>
  <view class="reference-box">
    <view class="reference-title">
      引用授权说明：
    </view>
    <view class="reference-content">
      <view>
        本报告或文章可用于微博、微信公众号、新闻网站等一般性转载，或用于企业的公开市场宣传，或用于企业投融资咨询、上市咨询等用途。这些引用可能是免费的，也可能产生额外的授权费用，头豹将根据您的引用需求向报告或文章发布者取得相应授权，并派专人与您进一步联系。
      </view>
      <view>
        请务必如实填写引用需求并按授权范围使用本报告或文章，如头豹发现您最终的引用目的超出所引用需求相应的授权范围，头豹有权要求您停止引用并就头豹因此遭受的损失追究您相应的法律责任。
      </view>
    </view>
    <button class="reference-button fr">
      我已知晓并同意
    </button>
  </view>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: ['visible']
})
</script>

<style>
.fr {
  float: right;
}
.reference-box {
  width: 500px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.reference-container .reference-box .reference-title {
  font-size: 15px;
  font-weight: 700;
  line-height: 45px;
  padding-left: 5px;
  letter-spacing: 3px;
}

.reference-box .reference-content {
  font-size: 12px;
  line-height: 20px;
  text-indent: 2rem;
}

.reference-box .reference-button {
  padding: 6px;
  background-color: #e8392a;
  color: #fff;
  border-radius: 6px;
  margin-top: 30px;
}

@media screen and (max-width: 375px) {
  .reference-box {
    width: 80vw;
  }
}
</style>
