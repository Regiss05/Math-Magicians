import Operate from '../logic/Operate';

it('Should test Operate Logic (Addition) | Operate(6, 9, +)', () => {
  expect(Operate(6, 9, '+')).toEqual('15');
});

it('Should test Operate Logic (Negation) | Operate(6, 9, -)', () => {
  expect(Operate(6, 9, '-')).toEqual('-3');
});

it('Should test Operate Logic (Division) | Operate(9, 3, ÷)', () => {
  expect(Operate(9, 3, '÷')).toEqual('3');
});

it('Should test Operate Logic (Multiplication) | Operate(7, 3, x)', () => {
  expect(Operate(7, 3, 'x')).toEqual('21');
});

it('Should test Operate Logic (Multiplication) | Operate(7, 3, x)', () => {
  expect(Operate(2, 0, '%')).toEqual('Can\'t find modulo as can\'t divide by 0.');
});
