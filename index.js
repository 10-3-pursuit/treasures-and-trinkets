/*
  This file is a place where you can test out your code without running the tests. To run this file, go to a "Console" in Replit and then type the following command exactly:

  node index.js

  You should copy over any function you wish to test. You will also need to copy over the data from `data/data.json`, assign that data to a variable, and pass that variable into the function you are testing with the appropriate parameters.
*/

// For finding and transforming you may need to loop twice or even three times to grab the appropriate data
// Once over the array of objects
// Once over each object's transactions
// Once over the products in each transaction

// Importing the data
const data = require('./data/data.json')
// console.log(data)

// Looping over the data w for-of
// for(let customer of data){
//   // console.log(customer.transactions)
//   for(let trans of customer.transactions){
//     console.log(trans.products)
//   }
// }

// Getting the first object
const firstObject = data[0]
// console.log(firstObject.profile.address)
console.log(firstObject.transactions[0].associate.email)

// Getting Lucille
// console.log(firstObject.profile.name.first)




