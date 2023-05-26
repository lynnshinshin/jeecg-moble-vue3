/*
 * @Author: ZhouKaiBai
 * @Date: 2023-05-26 16:46:15
 * @LastEditTime: 2023-05-26 17:31:28
 * @LastEditors: ZhouKaiBai
 * @Description: 全局类型
 */
import type { EChartsOption } from '@/utils/installEcharts';
import { Theme } from './system'
declare global {
  type EChartsOption = EChartsOption
}