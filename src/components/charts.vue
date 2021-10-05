<template>
  <div id="chart" :style="{ width: '1000px', height: '400px' }"></div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      const chart = this.$echarts.init(document.getElementById('chart'));
      // 绘制图表
      chart.setOption({
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        legend: {
          data: ['访问用户', '下单用户'],
        },
        tooltip: { trigger: 'axis' },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['1/1', '1/1', '1/3', '1/4', '1/5', '1/6'],
          }],
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: '访问用户',
            type: 'line',
            data: [1393, 3530, 2923, 1723, 3792, 4593],
            stack: 'x',
            areaStyle: {},
            smooth: true,
          },
          {
            name: '下单用户',
            data: [1093, 3220, 2628, 1423, 3449, 4293],
            type: 'line',
            stack: 'x',
            areaStyle: {},
            smooth: true,
          },
        ],
      });
    },
  },
};
</script>
