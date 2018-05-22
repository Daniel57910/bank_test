**Bank Tech Test**

In the bank tech test a user is able to deposit and withdraw money. The date of the transaction is shown and formatted to reflect whether a deposit or withdrawal has occured. The "edge case" of a user trying to withdraw greater funds than the balance has also been covered.

The user is able to print their transactions, and will see them in reverse chronological order in a similar format to below:

date || credit || debit || balance\
14/01/2012 || || 500.00 || 2500.00\
13/01/2012 || 2000.00 || || 3000.00\
10/01/2012 || 1000.00 || || 1000.00

**User Stories Covered In Tech Test**

As a user I want to be able to deposit money into my bank account.\
As a user i want to be able to withdraw money from my bank account.\
As a user I want to see the date of my deposit or withdrawal.\
As a user I want to see all deposits and withdrawals in reverse chronological order.\
As a user I want to see my deposits and withdrawals pretty printed.\

**Approach To The Project**

There are 4 classes.\
An **account class** acts a driver class which can initiate deposits and withdrawals. When this happens the balance is updated.\
The balance and deposit/withdrawal amount are then passed into a **transaction class**, which then passes in the information + the date of the transaction to a **formatter class**.\
The formatter class then returns the formatted transaction to the transaction class as a last transaction. The last transaction is then shovelled into an array of transactions.\
When the user wants to view their transaction history the **printer class** is called, and prints the transactions in reverse chronological order. 

**Technology Covered In Tech Test**

The application is wrote using Node.JS and can be executed from the command line. To execute a production version of the application ensure you have Node.JS installed. Then from within the application forder, you can begin the application by writing the following commands.

npm install
node\
let acc = require("./src/account.js")\
acc = new acc.bankAccount()\
acc.deposit(1000)\
acc.deposit(699)\
acc.withdraw(500)\
acc.withdraw(200)\
acc.deposit(800)\
acc.totalMoney\
acc.history\
acc.printTransactions()

The first line will install all the dependencies for running the application both development and test environments. To run the application tests, from the root of the project run npm run test.

**Example Application**
![Sample Application](./example_bank_test.png?raw=true "Title")

