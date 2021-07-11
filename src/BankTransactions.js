class BankTransactions {
  constructor() {
    this.entries = [];
    this.balance = 0;
  }

  logDeposit(amount) {
    this.balance += amount;
    this.entries.unshift([this.getDate(), ` ${amount.toFixed(2)} `, ' ', this.balance.toFixed(2)]);
  }

  logWithdrawl(amount) {
    this.balance -= amount;
    this.entries.unshift([this.getDate(), ' ', ` ${amount.toFixed(2)} `, this.balance.toFixed(2)]);
  }

  getDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${day}/${month}/${year}`;
  }
}

module.exports = BankTransactions;
