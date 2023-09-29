const realData = require("../data/data.json");
/**
 * Return an array of all customer emails.
 * @param {Object[]} data - an array of customer objects
 * @return {String[]} an array of strings, where each string is an email
 */
function getAllCustomerEmails(data) {
  return data;
}

// console.log(getAllCustomerEmails(realData));

/**
 * Return an array of all customer names.
 * @param {Object[]} data - an array of customer objects
 * @return {String[]} an array of strings, where each string is a full name
 */
function getAllCustomerFullNames(data) {}

/**
 * Return a count of all transactions.
 * @param {Object[]} data - an array of customer objects
 * @return {integer} a count of all transactions in the data set
 */
function getCountOfAllCustomerTransactions(data) {}

/**
 * Return a unique list of all states that each customer comes from.
 * @param {Object[]} data - an array of customer objects
 * @return {String[]} an array of strings, where each string is a state
 */
function getUniqueListOfAllCustomerStates(data) {}

/**
 * Return a count of all products purchased across all transactions
 * @param {Object[]} data - an array of customer objects
 * @return {integer} a count of all products purchased
 */
function getCountOfAllProductsPurchased(data) {}

/**
 * Return an integer representing the total worth of all purchased products. The final amount should be in cents.
 * @param {Object[]} data - an array of customer objects
 * @return {integer} an amount
 */
function getTotalRevenueOfAllProductsSold(data) {}

/**
 * Return a unique list of all locations (i.e., city and state) where associates in the data set work.
 * @param {Object[]} data - an array of customer objects
 * @return {String[]} an array of strings, where each string is a location
 */
function getUniqueListOfAllAssociateStoreLocations(data) {}

/**
 * Return the single most expensive product object.
 * @param {Object[]} data - an array of customer objects
 * @return {Object} the product
 */
function getMostExpensiveTreasureBox(data) {}

// Do not change or edit the code below.
module.exports = {
  getAllCustomerEmails,
  getAllCustomerFullNames,
  getCountOfAllCustomerTransactions,
  getUniqueListOfAllCustomerStates,
  getCountOfAllProductsPurchased,
  getTotalRevenueOfAllProductsSold,
  getUniqueListOfAllAssociateStoreLocations,
  getMostExpensiveTreasureBox,
};
