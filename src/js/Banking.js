export const banks = {
  ae: 'american_express',
  dc: 'diners_club',
  ds: 'discover',
  jc: 'jcb',
  ms: 'maestro',
  mc: 'mastercard',
  vi: 'visa',
  mi: 'mir',
};

export default class Banking {
  static checkInput(value, callback) {
    const bank = Banking.getBank(value);
    callback(bank);
  }

  static getBank(value) {
    switch (Number(value[0])) {
      case 2:
        return banks.mi;
      case 3:
        switch (Number(value[1])) {
          case 0:
          case 6:
          case 8: return banks.dc;
          case 1:
          case 5: return banks.jc;
          case 4:
          case 7: return banks.ae;
          default: return banks.ae;
        }
      case 4: return banks.vi;
      case 5:
        switch (Number(value[1])) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5: return banks.mc;
          case 0:
          case 6:
          case 7:
          case 8: return banks.ms;
          default: return banks.mc;
        }
      case 6:
        switch (Number(value[1])) {
          // case 2: China UnionPay
          case 0: return banks.mc;
          case 3:
          case 7: return banks.ms;
          default: return banks.ms;
        }
      case 0: return banks.ms;
      default: return '';
    }
  }
}
