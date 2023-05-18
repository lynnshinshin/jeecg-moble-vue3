<!--
 * @Author: ZhouKaiBai
 * @Date: 2023-05-16 18:40:33
 * @LastEditTime: 2023-05-17 18:43:27
 * @LastEditors: ZhouKaiBai
 * @Description: 
-->
<template>
  <div></div>
</template>

<script setup lang="ts">
// 认识类的基本概念
class Person {
  // 构造函数，对象创建时调用
  constructor(name: string) {
    this.name = name
    // 在实例方法中，this就表示当前的实例,可以通过this向新建的对象中添加属性。
  }
  // 实例属性
  name: string = '孙悟空'
  // 类属性(静态属性)
  static age: number = 18
  // 只读属性
  readonly name2 = '李小龙'
  static readonly name3 = '花无缺'
  // 实例方法(原型上)
  sayHello() {
    // this可以表示当前调用方法的对象
    return 'Hello'
  }
  // 类方法(静态方法)
  static sayHello2() {
    return 'Hello2'
  }
}
const per = new Person('小叮当')
console.log(per.name, Person.age, per.name2, Person.name3, per.sayHello(), Person.sayHello2());

// 抽象父类，abstract抽象类不能用来创建对象，只能被继承
abstract class Animal {
  name: string
  public gender: string = ''
  private _name2: string = '内部属性'
  protected name3:string = '' // 受保护属性，只能在当前类和当前类的子类访问(不能实例访问)
  private sex2: string = '555' // 私有属性只能在当前类的内部访问,别的地方不能读也不能写
  constructor(name: string, public age: number) { // 修饰符写在形参上，赋值自动完成
    this.name = name
  }
  get name2() {
    return this._name2
  }
  set name2(name) {
    this._name2 = name
  }
  sayHello() {
    console.log('动物在叫')
  }
  // 抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
  abstract sayHello2():void
}

// 继承：子类将会拥有父类所有的方法和属性
class Dog extends Animal {
  sayHello2() {
    console.log('汪汪汪'); // 方法的重写
  }
}
const dog = new Dog('旺财', 5)
dog.sayHello()
console.log(dog.name2);

// 重写
class Cat extends Animal {
  sex:string
  // 如果在子类中写了构造函数，就会覆盖父类的构造函数，此时必须对父类构造函数手动调用
  constructor(name: string, age: number, sex: string) {
    super(name, age)
    this.sex = sex
  }
  sayHello() {
    // 在类的方法中super就表示父类
    super.sayHello()
  }
  sayHello2() {
    console.log('喵喵喵'); // 方法的重写
  }
}
const cat = new Cat('阿🐱', 2, '女')
cat.sayHello()
</script>

<style scoped>

</style>