export function drawChart(ele, size, show = true, isShowTitl = true, showX = true) {
  if (size.products[0].kind === 0) {
    drawPie(ele, size, show, isShowTitl)
  } else {
    drawBar(ele, size, show, isShowTitl, showX)
  }
}
/**
 * 郭世凯  2021-02-07
 * 饼图的绘制
 * @param {String} ele html元素
 * @param {Object} data sizePro的数据
 * @param {Boolean} show 是否展示全，大图小图
 * @param {Boolean} isShowTitl 是否显示图表标题
 */
function drawPie(ele, data, show = false, isShowTitl = false) {
  const legendData = []
  const pieData = []
  for (const i of data.products) {
    legendData.push(i.productName)
    if (i.series && i.series.length > 0) {
      const pieObj = {
        name: i.productName,
        value: 0
      }
      for (const j of i.series) {
        pieObj.value += j.size
      }
      pieData.push(pieObj)
    }
  }
  let showData = pieData.map(v => v.value)
  let option = {
    type: 'pie',
    data: {
      labels: legendData,
      datasets: [{ data: showData, backgroundColor: getColor('echarts') }]
    },
    options: {
      responsive: false,
      interaction: {
        mode: show ? 'index' : 'none',
        intersect: show
      },
      plugins: {
        // 是否显示标题
        title: {
          display: true,
          text: isShowTitl ? data.title : ''
        },
        legend: {
          labels: {
            usePointStyle: true,
            boxWidth: 7
          }
        },
        datalabels: {
          display: function (context) {
            return Math.abs(context.dataset.data[context.dataIndex]) > 0 && show
          },
          // backgroundColor: function (context) {
          //   return context.dataset.backgroundColor
          // },
          color: '#fff',
          font: {
            weight: 'bold'
          },
          formatter: Math.round,
          padding: 6
        }
      }
    }
  }

  var ctx = ele.getContext('2d')
  console.log('ctx-----------: ', ctx)
  new Chart(ctx, option)
}
/**
 * 郭世凯  2021-02-07
 * 条形图折线图绘制
 * @param {String} ele html元素标签的Id
 * @param {Object} data sizePro的数据
 * @param {Boolean} show 是否展示全，大图小图
 * @param {Boolean} isShowTitl 是否展示title
 * @param {Boolean} showX 是否展示x轴
 */
function drawBar(ele, data, show = false, isShowTitl = false, showX = false) {
  const xAxisArr = [] // 取出所有的x轴
  const seriesData = []
  const predictive = [] // 用来存放预测时间
  if (!Array.isArray(data.products) || data.products.length === 0) {
    return false
  }
  for (const i of data.products) {
    if (i.series && i.series.length > 0) {
      for (const j of i.series) {
        xAxisArr.push(j.year)
        if (j.predictive === true || j.predictive === 1) {
          predictive.push(j.year + (data.XunitName || ''))
        }
      }
    }
  }
  // 获取完整的x轴年份从小到大排序
  let xAxisData = [...new Set(xAxisArr)]

  // 获取series数据
  const yAxisData = [] // y轴设置
  let yAxisIndex = '0'
  for (let i = 0; i < data.products.length; i++) {
    const xAxisObj = xAxisData.map(item => {
      return { year: item, value: 0 }
    })
    let seriess = []
    const position = data.products[i].yAxis === 0 ? 'left' : 'right'
    if (yAxisData.findIndex(v => v.id === data.products[i].yAxis.toString()) < 0) {
      yAxisIndex = data.products[i].yAxis.toString()
      const yObj = {
        type: 'linear',
        position: position,
        ticks: {
          fontSize: 10
        },
        display: show,
        offset: false,
        grid: {
          drawOnChartArea: true // 背景栅格
        },
        title: {
          display: true,
          text: showX
            ? `${getUnit(data.products[i].unit) ? getUnit(data.products[i].unit) + ' / ' : ''}${
                data.products[i].unitName
              }`
            : '',
          font: {
            size: 10,
            style: 'normal'
          }
          // padding: { top: 30, left: 0, right: 0, bottom: 0 }
        },
        stacked: data.barType === 1 && getLabel(data.products[i].kind) === 'bar',
        id: yAxisIndex
      }
      yAxisData.push(yObj)
    }
    if (data.products[i].series && data.products[i].series.length > 0) {
      for (const yearData of xAxisObj) {
        for (const j of data.products[i].series) {
          if (yearData.year === j.year) {
            yearData.value = j.size
          }
        }
      }
    }
    seriess = xAxisObj.map(item => {
      return item.value
    })
    const obj = {
      type: getLabel(data.products[i].kind),
      label: data.products[i].productName,
      data: seriess,
      backgroundColor: getColor('echarts', i),
      borderColor: getColor('echarts', i),
      fill: false,
      yAxisID: yAxisIndex,
      borderWidth: 2,
      pointRadius: 2,
      pointStyle: 'circle',
      xAxisID: 'x'
    }
    if (data.barType === 1 && obj.type === 'bar') {
      obj.stack = 'stack'
    }
    if (getLabel(data.products[i].kind) === 'line') {
      seriesData.unshift(obj)
    } else {
      seriesData.push(obj)
    }
  }
  // 处理x轴的中预测的值
  xAxisData = xAxisData.map(item => {
    return item + (data.XunitName || '')
  })
  // .map(item => {
  //   return predictive.indexOf(item) === -1 ? item : `${item}预`
  // })
  // 在produces为空的情况下
  if (yAxisData.length === 0) {
    yAxisData.push({})
  }
  let delayed
  let config = {
    type: 'bar',
    data: {
      labels: xAxisData,
      datasets: seriesData
    },
    options: {
      animation: {
        onComplete: () => {
          delayed = true
        },
        delay: context => {
          let delay = 0
          if (context.type === 'data' && context.mode === 'default' && !delayed) {
            delay = context.dataIndex * 200 + context.datasetIndex * 50
          }
          return delay
        }
      },
      responsive: false,

      interaction: {
        mode: show ? 'index' : 'none',
        intersect: show
      },
      scales: {
        x: {
          display: showX,
          ticks: {
            major: {
              enabled: true
            },
            callback: function (val, index, values) {
              return predictive.indexOf(this.getLabelForValue(val)) === -1
                ? this.getLabelForValue(val)
                : this.getLabelForValue(val) + '预'
            },
            color: function (context) {
              return predictive.indexOf(xAxisData[context.index]) === -1 ? null : 'red'
            }
          },
          grid: {
            drawOnChartArea: false // 背景栅格
          }
        }
      },
      plugins: {
        // 是否显示标题
        title: {
          // display: true,
          // text: isShowTitl ? data.title : ''
        },
        legend: {
          labels: {
            usePointStyle: true,
            boxWidth: 7
          }
        },
        datalabels: {
          display: function (context) {
            return Math.abs(context.dataset.data[context.dataIndex]) > 0 && show
          },
          align: function (context) {
            if (context.dataset.type === 'line') {
              return 'right'
            } else {
              return 'middle'
            }
          },
          color: function (context) {
            if (context.dataset.type === 'line') {
              return context.dataset.backgroundColor
            } else {
              return '#fff'
            }
          },
          font: {
            weight: 'bold',
            size: 10
          },
          offset: function (context) {
            if (context.dataset.type === 'line') {
              return 8
            } else {
              return 0
            }
          }
        }
      }
    }
  }
  yAxisData.map(item => {
    config.options.scales[item.id] = item
  })
  // console.log('option:', option)
  var ctx = ele.getContext('2d')
  new Chart(ctx, config)
}

function getColor(type, index) {
  const THEME_COLORS = [
    {
      type: 'echarts',
      color: [
        '#c23531',
        '#2f4554',
        '#61a0a8',
        '#d48265',
        '#91c7ae',
        '#749f83',
        '#ca8622',
        '#bda29a',
        '#6e7074',
        '#546570',
        '#c4ccd3'
      ]
    }
  ]
  if (index || index === 0) {
    return THEME_COLORS.find(v => v.type === type).color[index]
  } else {
    return THEME_COLORS.find(v => v.type === type).color
  }
}

function getLabel(kind) {
  switch (kind) {
    case 0:
      return 'pie'
    case 1:
      return 'bar'
    case 2:
      return 'line'
  }
}

function getUnit(value) {
  const UNITS = [
    {
      value: 1,
      label: ''
    },
    {
      value: Math.pow(10, 3),
      label: '千'
    },
    {
      value: Math.pow(10, 4),
      label: '万'
    },
    {
      value: Math.pow(10, 5),
      label: '十万'
    },
    {
      value: Math.pow(10, 6),
      label: '百万'
    },
    {
      value: Math.pow(10, 7),
      label: '千万'
    },
    {
      value: Math.pow(10, 8),
      label: '亿'
    },
    {
      value: Math.pow(10, 9),
      label: '十亿'
    },
    {
      value: Math.pow(10, 10),
      label: '百亿'
    },
    {
      value: Math.pow(10, 11),
      label: '千亿'
    },
    {
      value: Math.pow(10, 12),
      label: '万亿'
    }
  ]
  for (let i of UNITS) {
    if (i.value === value) {
      return i.label
    }
  }
}
