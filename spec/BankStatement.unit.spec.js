const BankStatement = require('../src/BankStatement.js');

describe('Bank Statement', () => {
  let bankStatement = new BankStatement

  



it('can print a bank statement', () => {
	
    // setup
    let transactionObject = {
	  entries: [
	    [ '12/07/2021', ' ', ' 500.00 ', '2500.00' ],
	    [ '12/07/2021', ' 2000.00 ', ' ', '3000.00' ],
	    [ '12/07/2021', ' 1000.00 ', ' ', '1000.00' ]
	  ],
	  balance: 2500
	}

    // execute
    const result = bankStatement.printStatement(transactionObject);

    // verify
    expect(result).toBe(`
Date || Credit || Debit || Balance
12/07/2021 || || 500.00 || 2500.00
12/07/2021 || 2000.00 || || 3000.00
12/07/2021 || 1000.00 || || 1000.00
`);
  });
});