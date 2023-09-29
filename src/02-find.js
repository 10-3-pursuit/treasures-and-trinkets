/**
 * Return the entire customer object by the given ID. If the ID does not match an existing customer, return `null`.
 * @param {Object[]} data - an array of customer objects
 * @param {String} customerId - the customer's unique identification
 * @return {Object} the specified customer object.
 */
function findCustomerById(data, customerId) {}

/**
 * Return the entire customer object by their full name. If the full name does not match an existing customer, return `null`.
 *
 * NOTE: In this case, all customers in the data set will have a unique name.
 *
 * @param {Object[]} data - an array of customer objects
 * @param {String} fullName - the customer's full name (which is unique)
 * @return {Object} the specified customer object.
 */
function findCustomerByFullName(data, fullName) {}

/**
 * Return the associate object by the given ID. If the ID does not match an existing associate, return `null`.
 * @param {Object[]} data - an array of customer objects
 * @param {String} associateId - the associate's unique identification
 * @return {Object} the specified associate object.
 */
function findAssociateById(data, associateId) {}

/**
 * Return an array of all customer objects which have an address in the given state. If there are no customers in that given state, return an empty array.
 * @param {Object[]} data - an array of customer objects
 * @param {String} stateName - the name of a state
 * @return {Object[]} all customers from that state
 */
function findAllCustomersByState(data, stateName) {}

/**
 * Return an array of all customer objects who have been helped by a specific associate. If no customers were helped by that associate, return an empty array.
 * @param {Object[]} data - an array of customer objects
 * @param {String} associateId - an associate's unique identifier
 * @return {Object[]} all customers who were helped by that associate
 */
function findAllCustomersHelpedByAssociate(data, associateId) {}

/**
 * Return an array of all customer objects who have purchased a specific product. If no customers bought that box, return an empty array.
 * @param {Object[]} data - an array of customer objects
 * @param {String} boxName - the name of a treasure box product
 * @return {Object[]} all customers who bought that product
 */
function findAllCustomersWhoBoughtSpecificBox(data, boxName) {}

module.exports = {
  findCustomerById,
  findCustomerByFullName,
  findAssociateById,
  findAllCustomersByState,
  findAllCustomersHelpedByAssociate,
  findAllCustomersWhoBoughtSpecificBox,
};
