function beforeEach (to, from, next) {
  console.log(to.path, from.path);
  next()
}
export default beforeEach