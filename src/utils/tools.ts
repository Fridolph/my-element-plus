export function testFn(number: number, callback: Function) {
  if (number > 10) {
    callback(number)
  }
}