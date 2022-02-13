export default class Checker {
  static validate(value, callback) {
    if (value.length < 12) {
      return callback({
        error: true, message: 'Недопустимая длина для карты',
      });
    }
    if (!Checker.validNumber(value)) {
      return callback({
        error: true, message: 'Номер карты должен состоять только их цифр',
      });
    }
    if (!Checker.validCreditCard(value)) {
      return callback({
        error: true, message: 'Данный номер карты не существует',
      });
    }
    return callback({
      error: false, message: 'Карта действительна',
    });
  }

  static validNumber(value) {
    return /\d{12,19}/.test(value);
  }

  // Luhn algorithm in Javascript. Check valid credit card numbers (NOT EDITED)
  static validCreditCard(value) {
    if (/[^0-9-\s]+/.test(value)) return false;
    let nCheck = 0;
    let bEven = false;
    const nValue = value.replace(/\D/g, '');
    for (let nDigit, cDigit, n = nValue.length - 1; n >= 0; n--) {
      cDigit = nValue.charAt(n);
      nDigit = parseInt(cDigit, 10);
      if (bEven) {
        nDigit *= 2;
        if (nDigit > 9) nDigit -= 9;
      }
      nCheck += nDigit;
      bEven = !bEven;
    }
    return (nCheck % 10) === 0;
  }
}
