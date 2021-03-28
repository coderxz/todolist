function main() {
  console.log('main');
} //  console.log('main');

Function.prototype.before = function (fn) {
  const timer = setTimeout(() => {
    main();
    clearTimeout(timer);
  }, 0)

  Promise.resolve().then(() => {
    fn();
  })

  return function () {
  }

}

Function.prototype.after = function (fn) {
  fn();
}

main.before(function () {
  console.log('before')
}).after(function () {
  console.log('after');
})