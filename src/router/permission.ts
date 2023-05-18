function beforeEach (to: Object, from: Object, next: Function) {
  console.log(`路由从${from.path}跳转到${to.path}`);
  next()
}
export default beforeEach