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
    if (amount > this.bankTransactions.balance) {
      return console.log(`You do not have ${amount} in your bank account.`);
    }
    this.bankTransactions.logWithdrawl(amount);
  }

  printStatement() {
    // console.log(this.bankTransactions)
    return this.bankStatement.printStatement(this.bankTransactions);
  }
}

module.exports = Bank;
