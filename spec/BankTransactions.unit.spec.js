const BankTransactions = require('../src/BankTransactions.js');

describe('Bank Transactions', () => {
  const todaysDate = '12/07/2021';

  let bank;
  beforeEach(() => {
    bankTransactions = new BankTransactions();
    return bankTransactions;
  });


  it('lets you make a deposit and adjusts the balance acordingly', () => {
    // setup
    // execute
    bankTransactions.logDeposit(100);
    bankTransactions.logDeposit(50);
    // verify
    expect(bankTransactions.balance).toBe(150);
  });

  it('lets you make a withdrawl and adjusts the balance acordingly', () => {
    // setup
    // execute
    bankTransactions.logDeposit(100);
    bankTransactions.logWithdrawl(80);
    // verify
    expect(bankTransactions.balance).toBe(20);
  });

  it('prevents withdrawls that reduce the balance below 0', () => {
    // setup
    // execute
    bankTransactions.logDeposit(100);
    bankTransactions.logWithdrawl(120);
    // verify
    expect(bankTransactions.balance).toBe(100);
  });

  it('saves a record of all your transactions', () => {
    // setup
    // execute
    bankTransactions.logDeposit(1000);
    bankTransactions.logDeposit(100);
    bankTransactions.logDeposit(10);
    bankTransactions.logDeposit(1);

    // verify
    expect(bankTransactions.entries.length).toBe(4);
  });

  it('records withdrawls in index 2 of the transaction array', () => {
    // setup
    // execute
    bankTransactions.logDeposit(1000);
    bankTransactions.logWithdrawl(100);
    // verify
    expect(bankTransactions.entries[0][2]).toBe(' 100.00 ');
  });

  it('stores each transaction with a date in index 0 of the transaction array', () => {
    // setup
    // execute
    bankTransactions.logDeposit(1000);
    bankTransactions.logWithdrawl(100);

    // verify
    expect(bankTransactions.entries[0][0]).toBe(todaysDate);

  });

})