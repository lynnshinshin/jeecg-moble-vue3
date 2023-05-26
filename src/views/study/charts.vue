<!--
 * @Author: ZhouKaiBai
 * @Date: 2023-05-26 10:51:36
 * @LastEditTime: 2023-05-26 16:39:26
 * @LastEditors: ZhouKaiBai
 * @Description: 
-->
<template>
  <div ref="chartDom" class="chart_content-bar">
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts/core';
import { onMounted, onUnmounted, ref, watchEffect } from 'vue';
import useGlob from '@/hooks/useGlobal'
const chartDom = ref<HTMLElement | null>(null);
let myChart:echarts.ECharts
const options: EChartsOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
}
function resize() {
  myChart.resize()
}
watchEffect(() => {
  // useGlob().
})
onMounted(() => {
  myChart = echarts.init(chartDom.value as HTMLElement);
  myChart.setOption(options)
  window.addEventListener('resize', resize)
})
onUnmounted(() => {
  window.removeEventListener('resize', resize)
})


// 系列：一组数值以及他们映射成的图。（可以选择组件项数组中的数组索引，也可以自己定义）
//    series.type: 图表类型
//    series.data: 图表数据（也可以从dataset.souece数组中获取，series.encode: {x: 数组索引, y: 数组索引}）
//    series.yAxisIndex: 图表数据（指定它自己使用的是哪个 yAxis）

// 组件：echarts 中各种内容，被抽象为“组件”。
//    xAxis: 直角坐标系 X 轴，是一组单位数组对象 或 一组数据数组组成的数组
//    yAxis: 直角坐标系 Y 轴，是一组单位数组对象 或 一组数据数组组成的数组
//    grid: 直角坐标系底板，对象或对象数组
//    angleAxis: 极坐标系角度轴（角度轴）
//    radiusAxis: 极坐标系半径轴（半径轴）
//    polar: 极坐标系底板（极地）
//    geo: 地理坐标系
//    dataZoom: 数据区缩放组件(zoom 缩放)
//    visualMap: 视觉映射组件（如：将数值的大小映射到明暗度。）
//    tooltip: 提示框组件
//    toolbox: 工具栏组件

// 定位：一般设置在底板上
//    绝对数值（例如 bottom: 54 表示：距离 echarts 容器底边界 54 像素）。
//    基于 echarts 容器高宽的百分比（例如 right: '20%' 表示：距离 echarts 容器右边界的距离是 echarts 容器宽度的 20%）。
</script>

<style scoped>
.chart_content-bar {
  width: 300px;
  height: 300px;
}
</style>