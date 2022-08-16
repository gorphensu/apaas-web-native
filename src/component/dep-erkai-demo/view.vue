<template>
  <div class="erkai-dep-erkai-demo">
    <header class="stop-row-check">
      <span style="color: blue">{{ $t('二开例子使用配置第三方库例子') }}：</span>
      <button @click="(e) => handleClicked(e)">渲染一个图表</button>
    </header>
    <section ref="ref-chart" style="width: 400px;height: 400px;">
    </section>
  </div>
</template>

<script>
import XtWeb from 'xtion-web'

// 内部调试时引入格式
// import PackageCommon from '@/lib/index'
// const { qs } = PackageCommon
// import PackageEcharts from '@/lib/index2'
// const { echarts } = PackageEcharts

// 上传包后，引入第三方包规则
const { qs } = XtWeb.Dynamic.getLib('package-common')
const { echarts } = XtWeb.Dynamic.getLib('package-echarts')

export default {
  name: 'view',
  props: {
    ctrl: Object
  },
  created () {
    // eslint-disable-next-line no-eval
    console.log('qs', qs.parse('http://localhost:9800/#/page?pagecode=1550417445091676252'))
  },
  methods: {
    handleClicked () {
      console.log('echarts', echarts)

      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(this.$refs['ref-chart'])

      // 指定图表的配置项和数据
      let option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>
