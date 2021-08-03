<template>
  <div style={{ margin: '20px' }}>
    <div style={{ fontSize: '30px', margin: '10px 0' }}>Kraken 入门教程</div>
    <div style={{ fontSize: '14px', color: '#666' }}>2021-1-1</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
// import { News } from 'leadleo-ui'
// import 'leadleo-ui/lib/styles/news/news-mobile.css'
import News from './components/News'

export default defineComponent({
  // components: { News },
  setup() {
    const paragraphs = `<p class="ql-align-right">全文字数：2324字，精读时间：4分钟</p><p class="ql-align-justify">本文援引于报告《2021中国医疗消费系列： 从消费需求出发，寻找植发机构盈利点》，首发于头豹科技创新网（www.leadleo.com）。</p><p class="ql-align-justify">头豹科技创新网内容覆盖全行业、深入垂直领域，行业报告每日更新；政策图录、数据工具助您轻松了解市场动态；智能关键词轻松搜索，直奔行业热点内容。</p><p class="ql-align-justify">&nbsp;</p><p class="ql-align-justify">诚挚欢迎各界精英交流合作，头豹承接行业研究、市场调研、产业规划、企业研究、商业计划、战略规划等业务，您可发送邮件或来电咨询。</p><p class="ql-align-justify">&nbsp;</p><p class="ql-align-justify">客服邮箱：CS@leadleo.com&nbsp;咨询热线：400-072-5588</p><p class="ql-align-justify">&nbsp;</p><p class="ql-align-justify"><strong style="color: rgb(192, 0, 0);">脱发病因及植发操作原理</strong></p><p class="ql-align-justify"><img src="http://vestleo.oss-cn-shanghai.aliyuncs.com/2021/06/24/dRfQJDrxd7WCjKYByiNSqx.png"></p><p class="ql-align-justify">毛囊是由皮脂腺、毛乳头等组成，毛乳头是毛发的根部。在植发手术中，一般会将皮脂腺清理掉，所以很多植发后的患者会感觉到植发区的毛囊出油减少。</p><p class="ql-align-justify">雄性激素是造成脱发的主要原因：头皮中的毛囊、皮脂腺是雄性激素的靶向器官，雄性激素在5α-还原酶的促进下，转化成双氢睾酮，导致毛囊坏死。头顶、发际线部位的5ɑ-还原酶的活性和双氢睾酮高于其他部位，更容易脱发。</p><p class="ql-align-justify">植发，又称毛发移植手术，手术过程包括将头部后方的毛囊用毛囊提取器取出，再将头部无毛或毛发稀少区域的皮脂腺清理，取出的毛囊移植到空出的皮脂腺区域。脱发根据不同的脱落程度分为7个级别，一般1级和7级是不能够种植的，1级不需要进行植发，7级一般自身毛囊不充足。毛囊检测与血液检测是植术前必要的检测，其中毛囊检测判定患者脱落的程度，达到稳定程度可以进行种植；血液检测可以判定患者是否有血液传染疾病。植发结束后由于后枕部毛囊不受激素的影响，植发把后枕部毛囊移植到前面的脱发区域，新长出的毛发将不会因为激素原因再次脱落</p><p class="ql-align-justify">&nbsp;</p><p class="ql-align-justify"><strong style="color: rgb(192, 0, 0);">消费者是驱动植发行业发展的重要因素</strong></p><p class="ql-align-justify">植发是医疗美容行业的细分行业，消费者是驱动行业发展的重要因素，推动植发机构盈利的重要因素。</p><p class="ql-align-justify">从消费者意愿来看，植发作为消费者脱发治疗的最终选择，植发机构的专业程度和术后效果是影响消费者选择的最主要因素，其中术后效果直观表现为毛囊成活率、美观程度及消费者预期等，消费者可以从植发机构过往案例及医疗美容中介平台获取相关信息。</p><p class="ql-align-justify">医生资质与消费者关注的术后效果、机构专业度直接相关，所以植发机构应该着重宣传医生资质。医生资质是衡量植发机构是否值得投资的重要因素。植发机构在医美平台或社交媒体大量投放术后反馈以及成功案例，加强消费者选择植发的意愿。</p><p class="ql-align-justify">从群体需求来看，植发消费者群体具有明显的性别及年龄特征。数据显示，中国国男性的脱发患病率约为21.3% ，女性患病率约为6.0%，男性消费者植发需求高于女性。男性消费者是植发消费主力，市场占比80%，大多属于80后与90后，年龄在25-35岁之间，多从事于IT、金融等行业，多选择头发顶部加密及发际线调整两种手术。</p><p class="ql-align-justify"><img src="http://vestleo.oss-cn-shanghai.aliyuncs.com/2021/06/24/jaWsguYaz3k5NV4gWh3ZWS.png"></p><p class="ql-align-justify">根据调查显示，工作强度与脱发问题直接相关。工作强度影响消费者作息时间，作息紊乱影响消费者激素水平，导致消费者脱发。消费者群体A与B属于有加班情况的人群，所以会发生发际线逐渐后移和顶部脱发的状况。</p><p class="ql-align-justify">消费习惯决定消费者的植发意愿：消费者群体A与B经济水平较好，可以负担植发费用。同时年龄在35岁左右，根据消费习惯，这类人群对于生活品质与外貌有较高要求，所以属于潜在的植发消费群体。</p><p class="ql-align-justify">针对A类消费者，选择在微博、QQ空间、快手、凤凰新闻投放连锁植发机构的广告，同时可以投放术后维护类产品的广告。</p><p class="ql-align-justify">针对B类消费者，可以选择在演出场地周边设置咨询站点，或植发机构广告投放在演出场地必经道路。针对C类消费者，选择在京东淘宝以及腾讯新闻投放打折促销植发机构的广告，同时可以投放防脱类药物洗发水产品的广告。</p><p class="ql-align-justify">&nbsp;</p><p><strong style="color: rgb(192, 0, 0);">消费需求拉动中国植发行业市场规模快速增长</strong></p><p><img src="http://vestleo.oss-cn-shanghai.aliyuncs.com/2021/06/24/htczuXFW42HAztXzGEdrau.png"></p><p class="ql-align-justify">按销售额统计，2020年正规植发市场终端销售额达到201.9亿元， 2016-2020年复合增长率是32.8%，处在高速增长阶段。2016年植发渗透率较低，仅有0.2%。2016年植发刚进入大众视线，技术还未获得认可。随着植发机构营销力度加大以及植发技术不断完善，市场认可度提高，渗透率以每年0.1%的速度逐步提高，预计在2025年渗透率达到1.1%。</p><p class="ql-align-justify">&nbsp;</p><p class="ql-align-justify"><strong style="color: rgb(192, 0, 0);">中国植发行业营销状况</strong></p><p class="ql-align-justify"><img src="http://vestleo.oss-cn-shanghai.aliyuncs.com/2021/06/24/us9DDG1Vpy1tjbz4xgxVQG.png">&nbsp;</p><p class="ql-align-justify"><strong>植发行业营销成本占比30%，是所有成本中花费最高，所以营销成本越高的机构毛利率越低。</strong>由于营销费用支出过多，连锁植发机构的毛利率低于医美机构植发科室和公立医院植发科室。公立医院由于政策限制不能进行营销，所以节省了极大的营销成本，毛利率得以提升，达到50%-70%。</p><p class="ql-align-justify"><strong>线上营销的成功率在70%，线下营销的成功率在30%。</strong>由于消费者专注于短视频的时间大约是130亿小时/年，各项软件中排名第一，短视频平台更适合进行植发营销。受益于大数据技术发展，植发相关短视频的用户停留在植发短视频时间更长，被系统认定为更关注植发领域的用户，因此线上营销成功率更高。</p><p class="ql-align-justify">植发机构可以通过网红效应，扩大客源。碧莲盛给网红提供较低折扣的植发手术，通过网红发布反馈引发羊群效应，促进粉丝消费。</p><p class="ql-align-justify">&nbsp;</p><p class="ql-align-justify"><strong style="color: rgb(192, 0, 0);">深度见解：“植发+养发”的业务模式为植发机构带来持续性收益</strong></p><p class="ql-align-justify"><strong>养发服务的价格根据项目和时间周期有波动。</strong>若以一年为单位，平均每个月养发服务价格是一个月养发服务的八折。拉长时间周期的商业模式较大程度上提高了客户粘性，提升机构利润。</p><p class="ql-align-justify">植<strong>发按照一个毛囊的价格收费，
一个毛囊单价10-60元不等，价格与操作医生密切相关。</strong>由于每个人毛囊状况不一致，医生提取毛囊会影响到毛囊的完整性，如果提取的毛囊不够完整，将会导致毛囊的死亡，从而植发手术失败。操作医生将毛囊种植到毛发稀少区域时，毛囊分布均匀程度也会成为手术难点之一，所以专家操作植发手术时，收费远高于普通医生。</p><p class="ql-align-justify"><strong>&nbsp;</strong></p><p class="ql-align-justify"><strong style="color: rgb(192, 0, 0);">重点关注企业</strong></p><p class="ql-align-justify">通过深度研究中国植发行业内优质企业，头豹建议重点关注雍和、新生、碧莲盛</p><p class="ql-align-right"><br></p>`
    // onMounted(() => {
    //   console.log('执行了')
    //   const newsBox = document.getElementById('news-box')
    //   console.log('执行了', newsBox)
    //   newsBox.innerHTML = paragraphs
    // })
    return { paragraphs }
  }
})
</script>
