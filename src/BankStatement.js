class BankStatement {
  printStatement(transactionObject) {
    const { entries } = transactionObject;
    entries.unshift(['Date', ' Credit ', ' Debit ', 'Balance']);

    let statement = '\n';
    entries.forEach(
      (entry) => statement += `${entry[0]} ||${entry[1]}||${entry[2]}|| ${entry[3]}\n`,
    );
    return statement;
  }
}

module.exports = BankStatement;

// This code formats the statement to be nicely spaced so that the column seperaters all line up
// I coded this before i learned that there was no need to do this :(
// I'm keeping it because it took ages to make

// findColumnWidths() {

// 	let columnWidths = []
// 	for(let i = 0; i < this.transactions[0].length; i++) {
// 		let textLengths = []
// 		for (let j = 0; j < this.transactions.length; j++) {
// 			textLengths.push(this.transactions[j][i].length)
// 		}
// 		columnWidths.push(textLengths.reduce((a,b) => Math.max(a,b)))
// 	}
// 	console.log(columnWidths)
// 	return columnWidths
// }

// formatStatement(columnWidths) {
// 	let statementArray = []

// 	for(let i = 0; i < this.transactions.length; i++) {
// 		statementArray.push([])
// 		for (let j = 0; j < this.transactions[i].length; j++) {
// 			statementArray[i].push(this.transactions[i][j].padEnd(columnWidths[j]))
// 		}
// 	}
// 	console.log(statementArray)
// 	return statementArray

// }
