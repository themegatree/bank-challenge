const BankStatement = require('./BankStatement');
const BankTransactions = require('./BankTransactions');

class Bank {
  constructor() {
    this.bankTransactions = new BankTransactions();
    this.bankStatement = new BankStatement();
  }

  makeDeposit(amount) {
    this.bankTransactions.logDeposit(amount);
  }

  makeWithdrawl(amount) {
    this.bankTransactions.logWithdrawl(amount);
  }

  printStatement() {
    // console.log(this.bankTransactions)
    return this.bankStatement.printStatement(this.bankTransactions);
  }
}

module.exports = Bank;
