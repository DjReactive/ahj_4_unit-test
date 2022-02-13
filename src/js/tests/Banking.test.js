import Banking, { banks } from '../Banking';

test('Checking card (MIR)', () => {
  const card = '249596753984860';
  expect(Banking.getBank(card)).toEqual(banks.mi);
});

test('Checking card (VISA)', () => {
  const card = '4720260471970802218';
  expect(Banking.getBank(card)).toEqual(banks.vi);
});

test('Checking card (Diners Club)', () => {
  const card = '30104218660102';
  expect(Banking.getBank(card)).toEqual(banks.dc);
});

test('Checking card (Maestro)', () => {
  const card = '0604252093582291';
  expect(Banking.getBank(card)).toEqual(banks.ms);
});

test('Checking card (MasterCard)', () => {
  const card = '5408462910218253';
  expect(Banking.getBank(card)).toEqual(banks.mc);
});
