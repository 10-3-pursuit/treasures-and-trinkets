/**
 * Transforms the data set into an object where the keys are associate IDs and the values are integers representing the total amount sold in transactions helped by that associate.
 * 
 * @param {Object[]} data - an array of customer objects
 * @return {Object} associate ids and sale totals
 * 
 * EXAMPLE:
 * transformToAssociateByIdAndSaleTotal(data);
 * //> { 
 *        "6413682d3baea7ee39e1b3b4": 9398,
          "6413682d3ca4a3050260a618": 58990,
          ...
        }
 */
function transformToAssociateByIdAndSaleTotal(data) {}

/**
 * Transforms the data set into an object where the keys are associate IDs and the values are arrays. Inside each array is a series of strings, which represent the transaction IDs associated with that associate.
 * 
 * @param {Object[]} data - an array of customer objects
 * @return {Object} associate ids and associated transactions
 * 
 * EXAMPLE:
 * transformToAssociateByIdWithTransactionIds(data);
 * //> { 
 *         "6413682d51868a0070651889": [
              "64136852c24913e1c51848b2",
              "64136852ad715e7e53772589",
              "6413685294462658aac4fa3e",
            ],
            "6413682d7c14216d22d1350e": [
              "64136852e1b876ec4d599fcc",
              "641368523cb48597aadb6e14",
            ],
          ...
        }
 */
function transformToAssociateByIdWithTransactionIds(data) {}

/**
 * Transforms the data set into an object where the keys are associate IDs and the values are objects. Each object is a "mini-profile" of a customer that associate has helped, which includes their full name, full address, and id.
 * 
 * NOTE: You will end up with duplicate mini-profiles for customers. That is to be expected.
 * 
 * @param {Object[]} data - an array of customer objects
 * @return {Object} associate ids and an array of customer mini-profiles.
 * 
 * EXAMPLE:
 * transformToAssociateByIdAndCustomerMiniProfile(data);
 * //> { 
 *         "6413682d7c14216d22d1350e": [
              {
                address: "91 Juliana Place, Apt 226, Homeworth, Ohio",
                id: "6413685258e40a979c5859b8",
                name: "Lucille Bradshaw",
              },
              {
                address: "78 Hoyt Street, Lithium, Georgia",
                id: "64136852d2562cc987e0608c",
                name: "Maggie Nguyen",
              },
            ],
          ...
        }
 */
function transformToAssociateByIdAndCustomerMiniProfile(data) {}

/**
 * Transforms the data set into an object where the keys are product names and the values are objects. Each object is a "mini-profile" of a customer that has bought that product, which includes their full name, full address, and id.
 * 
 * NOTE: You will end up with duplicate mini-profiles for customers. That is to be expected.
 * 
 * @param {Object[]} data - an array of customer objects
 * @return {Object} product names and arrays of mini-profiles
 * 
 * EXAMPLE:
 * transformToProductByNameAndCustomerMiniProfile(data);
 * //> { 
*         "Happy Birthday #1": [
            {
              id: "6413685258e40a979c5859b8",
              name: "Lucille Bradshaw",
              address: "91 Juliana Place, Apt 226, Homeworth, Ohio",
            },
            {
              id: "64136852925c7617fff6091e",
              name: "Gary Pate",
              address: "70 Pulaski Street, Apt 655, Faywood, New Hampshire",
            },
            {
              id: "64136852d2562cc987e0608c",
              name: "Maggie Nguyen",
              address: "78 Hoyt Street, Lithium, Georgia",
            },
          ],
          ...
        }
 */
function transformToProductByNameAndCustomerMiniProfile(data) {}

module.exports = {
  transformToAssociateByIdAndSaleTotal,
  transformToAssociateByIdWithTransactionIds,
  transformToAssociateByIdAndCustomerMiniProfile,
  transformToProductByNameAndCustomerMiniProfile,
};
