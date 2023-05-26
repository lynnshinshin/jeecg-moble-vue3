import * as echarts from 'echarts/core' // 【核心】引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import { CanvasRenderer } from 'echarts/renderers' // 【渲染器】引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
// 【图表】引入柱状图图表，图表后缀都为 Chart
import {
    BarChart, LineChart
} from 'echarts/charts'
// 【图表系列类型】// 系列类型的定义后缀都为 SeriesOption
import type { 
  BarSeriesOption, LineSeriesOption
} from 'echarts/charts'
// 【组件】引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
    TitleComponent,
    TooltipComponent,
    GridComponent
} from 'echarts/components'
// 【组件类型】后缀都为 ComponentOption
import type { 
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption
} from 'echarts/components'
// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type EChartsOption = echarts.ComposeOption<
  BarSeriesOption | LineSeriesOption
>
// 注册必须的组件
echarts.use(
    [TitleComponent, TooltipComponent, GridComponent, BarChart, LineChart, CanvasRenderer]
);