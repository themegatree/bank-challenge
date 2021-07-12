const Bank = require('../src/Bank.js');

describe('Does the Bank do it\'s stuff?', () => {
  let bank;
  beforeEach(() => {
    bank = new Bank();
    return bank;
  });

  it('all works', () => {
    // setup
    // execute
    bank.makeDeposit(1000);
    bank.makeDeposit(2000);
    bank.makeWithdrawl(500);

    const result = bank.printStatement();

    // verify
    expect(result).toBe(`
Date || Credit || Debit || Balance
12/07/2021 || || 500.00 || 2500.00
12/07/2021 || 2000.00 || || 3000.00
12/07/2021 || 1000.00 || || 1000.00
`);
  });
});
