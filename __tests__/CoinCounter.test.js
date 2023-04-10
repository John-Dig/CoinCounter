
import Object from './../src/index.js';
describe('coinCounter', () => {
});
test('returns correct amount for $0.01', () => {
  const result = coinCounter(0.01);
  expect(result).toEqual(.01);
});