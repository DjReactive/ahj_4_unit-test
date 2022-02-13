export default class Checker {
  static validate(value, callback) {
    if (value.length < 12) return callback({
      error: true, message: 'Недопустимая длина для карты',
    });
    console.log(Checker.validNumber(value))
    if (!Checker.validNumber(value)) return callback({
      error: true, message: 'Номер карты должен состоять только их цифр',
    });
    if (!Checker.validCreditCard(value)) return callback({
      error: true, message: 'Данный номер карты не существует',
    });
    return callback({
      error: false, message: 'Карта действительна'
    });
  }

  static validNumber(value) {
    return /\d{12,19}/.test(value);
  }

  // Luhn algorithm in Javascript. Check valid credit card numbers (NOT EDITED)
  static validCreditCard(value) {
    // Accept only digits, dashes or spaces
  	if (/[^0-9-\s]+/.test(value)) return false;

  	// The Luhn Algorithm. It's so pretty.
  	let nCheck = 0, bEven = false;
  	value = value.replace(/\D/g, "");

  	for (var n = value.length - 1; n >= 0; n--) {
  		var cDigit = value.charAt(n),
  			  nDigit = parseInt(cDigit, 10);

  		if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

  		nCheck += nDigit;
  		bEven = !bEven;
  	}

  	return (nCheck % 10) == 0;
  }
}
