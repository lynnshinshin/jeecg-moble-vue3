<!--
 * @Author: ZhouKaiBai
 * @Date: 2023-05-17 18:51:01
 * @LastEditTime: 2023-05-18 14:44:30
 * @LastEditors: ZhouKaiBai
 * @Description: 
-->
<template>
</template>

<script setup lang="ts">
// 在定义函数或是类时，遇到类型不明确就用泛型
function fn<T>(a: T): T {
  return a
}
fn(10) // 利用了类型的自动推断
fn<string>('10') // 手动指定泛型

// 多个泛型
function fn2<T, K>(a: T, b: K): T {
  return a
}
fn2(10, 2)
fn2<number, string>(10, '10')

// 限制泛型
interface Inter {
  length: number
}
// 表示T必须是Inter的实现
function fn3<T extends Inter>(a: T): number {
  return a.length
}
fn3({ length: 10 })

// 泛型在类中的使用
class MyClass<T> {
  name: T
  constructor(name: T) {
    this.name = name
  }
}

const mc = new MyClass<string>('孙悟空')
console.log(mc.name)

</script>

<style scoped>

</style>