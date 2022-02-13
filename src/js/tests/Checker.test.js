import Checker from '../Checker';

function testCallback(obj) {
  return obj;
}

test('Checking card (valid)', () => {
  const card = '4929489226791627';
  expect(Checker.validate(card, testCallback)).toEqual({
    error: false,
    message: 'Карта действительна',
  });
});

test('Checking card (invalid)', () => {
  const card = '4929489ABCF$EF#$';
  expect(Checker.validate(card, testCallback)).toEqual({
    error: true,
    message: 'Номер карты должен состоять только их цифр',
  });
});
