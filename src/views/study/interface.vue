<!--
 * @Author: ZhouKaiBai
 * @Date: 2023-05-17 14:12:25
 * @LastEditTime: 2023-05-17 17:49:09
 * @LastEditors: ZhouKaiBai
 * @Description: 
-->
<template>
  <div></div>
</template>

<script setup lang="ts">
// 传统描述对象类型的方式：类型别名
type myType = {
  name: string
  age: number
}
// 接口用来定义一个类(对象)的结构，可以当成类型声明使用。
interface myInterface {
  name: string,
  age: number
}
// 可以重复定义，最终是会结合到一起
interface myInterface {
  gender: string
}
// 接口可以定义类的时候去限制类的结构,接口中所有的属性都不能有实际的值，所有的方法都是抽象方法
interface myInter {
  name: string
  sayHello():void
}
// 定义类是可以使类去（实现一个接口）,使类满足接口的要求
class myClass implements myInter {
  name: string
  constructor(name: string) {
    this.name = name
  }
  sayHello(){
    console.log('大家好');
  }
}
// 接口就是一个规范、限制
</script>

<style scoped>

</style>