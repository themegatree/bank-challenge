const Bank = require('../src/Bank.js');

describe('Does the Bank do it\'s stuff?', () => {
  const todaysDate = '11/07/2021';

  let bank;
  beforeEach(() => {
    bank = new Bank();
    return bank;
  });

  it('lets you make a deposit and adjusts the balance acordingly', () => {
    // setup
    // execute
    bank.makeDeposit(100);
    bank.makeDeposit(50);
    // verify
    expect(bank.bankTransactions.balance).toBe(150);
  });

  it('lets you make a withdrawl and adjusts the balance acordingly', () => {
    // setup
    // execute
    bank.makeDeposit(100);
    bank.makeWithdrawl(80);
    // verify
    expect(bank.bankTransactions.balance).toBe(20);
  });

  it('prevents withdrawls that reduce the balance below 0', () => {
    // setup
    // execute
    bank.makeDeposit(100);
    bank.makeWithdrawl(120);
    // verify
    expect(bank.bankTransactions.balance).toBe(100);
  });

  it('saves a record of all your transactions', () => {
    // setup
    // execute
    bank.makeDeposit(1000);
    bank.makeDeposit(100);
    bank.makeDeposit(10);
    bank.makeDeposit(1);

    // verify
    expect(bank.bankTransactions.entries.length).toBe(4);
  });

  it('records withdrawls in index 2 of the transaction array', () => {
    // setup
    // execute
    bank.makeDeposit(1000);
    bank.makeWithdrawl(100);
    // verify
    expect(bank.bankTransactions.entries[0][2]).toBe(' 100.00 ');
  });

  it('stores each transaction with a date in index 0 of the transaction array', () => {
    // setup
    // execute
    bank.makeDeposit(1000);
    bank.makeWithdrawl(100);

    // verify
    expect(bank.bankTransactions.entries[0][0]).toBe(todaysDate);
  });

  it('can print a bank statement', () => {
    // setup
    // execute
    bank.makeDeposit(1000);
    bank.makeDeposit(2000);
    bank.makeWithdrawl(500);

    const result = bank.printStatement();

    // verify
    expect(result).toBe(`
Date || Credit || Debit || Balance
11/07/2021 || || 500.00 || 2500.00
11/07/2021 || 2000.00 || || 3000.00
11/07/2021 || 1000.00 || || 1000.00
`);
  });
});
