<!--
 * @Author: ZhouKaiBai
 * @Date: 2023-05-30 10:17:31
 * @LastEditTime: 2023-05-30 11:02:34
 * @LastEditors: ZhouKaiBai
 * @Description: 
-->
<template>
  <div>
    <zkb-comp></zkb-comp>
    666
  </div>
</template>

<script setup lang="ts">
// 创建一个HTMLElement类作为自定义元素
class MyComponent extends HTMLElement {
  constructor() {
    super()
    console.log('初始化元素');
    // 创建影子 DOM（Shadow DOM）,是一种隔离和封装组件样式和内容的机制。
    // 影子根（Shadow Root）是影子 DOM 的根节点，用于承载影子 DOM 结构，作为影子 DOM 的入口点，它提供了一个隔离的作用域。
    const shadowRoot = this.attachShadow({ mode: 'open'}) // mode: open|close 是否允许外部访问和修改
    // 在影子根中添加组件的样式和内容
    // shadowRoot.innerHTML = `
    //   <style>
    //     div {
    //       color: red;
    //     }
    //   </style>
    //   <div>
    //     默认内容
    //   <div>
    // `
    // 使用 HTML 模板（HTML Templates）：将组件的结构定义为一个 HTML 模板，并在组件中使用。
    const template = document.createElement('template')
    template.innerHTML = `
      <style>
        div {
          color: red;
        }
      </style>
      <div>
        默认内容
      <div>
    `
    shadowRoot.appendChild(template.content.cloneNode(true))
  }
  connectedCallback() {
    console.log('元素被插入文档了')
  }
  disconnectedCallback() {
    console.log('元素从文档中移除了')
  }
  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    // 监听属性变化的逻辑
    console.log('元素属性变化', name, oldValue, newValue)
  }
}
customElements.define('zkb-comp', MyComponent);
</script>

<style scoped>

</style>