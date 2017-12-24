import * as test from 'tape';

function add(number1: number, number2: number): number {
  return number1 + number2;
}

test('timing test', (t) => {
  t.plan(1);
  t.equal(add(2, 6), 8);
});
