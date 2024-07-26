const curringExMultiply = (x: number) => (y: number) => (z: number) =>
  x * y * z;

const res = curringExMultiply(2)(2)(2);

console.log('res:', res);

function curry(fn: (...args: any) => any) {
  return fn.length === 0 ? fn() : (x: any) => curry(fn.bind(null, x));
}

function exDivide(x: number, y: number): number {
  return x / y;
}

const f = curry(exDivide);

console.log('f:', f(10)(5));
