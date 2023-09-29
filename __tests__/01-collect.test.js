const fs = require("fs");
const {
  getAllCustomerEmails,
  getAllCustomerFullNames,
  getCountOfAllCustomerTransactions,
  getUniqueListOfAllCustomerStates,
  getCountOfAllProductsPurchased,
  getTotalRevenueOfAllProductsSold,
  getUniqueListOfAllAssociateStoreLocations,
  getMostExpensiveTreasureBox,
} = require("../src/01-collect");

const json = fs.readFileSync("./data/data.json", "utf-8");
const data = JSON.parse(json);
const sampleData = require("../fixtures/sample-data");

describe("01 Search", () => {
  describe("getAllCustomerEmails()", () => {
    it("should return an array of all customer emails", () => {
      // Data from `data/` directory
        expect(getAllCustomerEmails(data)).toEqual([
        "lucille_bradshaw@bittor.com",
        "gpate@pursuit.org",
        "zwilkins@pursuit.org",
        "lhoward@pursuit.org",
        "bmullins@pursuit.org",
        "maggie_nguyen@skyplex.edu",
        "bertie_mejia@canopoly.com",
        "sashley@pursuit.org",
        "mcote@pursuit.org",
        "sellis@pursuit.org",
      ]);

      // Data from `sample-data.js` file
      expect(getAllCustomerEmails(sampleData)).toEqual([
        "kstein@pursuit.org",
        "thubbard@pursuit.org",
        "mcain@pursuit.org",
        "holman_jenkins@delphide.edu",
        "lalston@pursuit.org",
        "jbarnes@pursuit.org",
        "lauri_castaneda@fuelton.com",
        "jo_klein@eargo.com",
        "nmurray@pursuit.org",
        "wmcmillan@pursuit.org",
      ]);
    });
  });

  describe("getAllCustomerFullNames()", () => {
    it("should return an array of the full names for each customer", () => {
      // Data from `data/` directory
      expect(getAllCustomerFullNames(data)).toEqual([
        "Lucille Bradshaw",
        "Gary Pate",
        "Zelma Wilkins",
        "Lola Howard",
        "Brandy Mullins",
        "Maggie Nguyen",
        "Bertie Mejia",
        "Ashley Silvia",
        "Melba Cote",
        "Sawyer Ellis",
      ]);

      // Data from `sample-data.js` file
      expect(getAllCustomerFullNames(sampleData)).toEqual([
        "Kelley Stein",
        "Tricia Hubbard",
        "Mona Cain",
        "Holman Jenkins",
        "Lottie Alston",
        "Jill Barnes",
        "Lauri Castaneda",
        "Jo Klein",
        "Nola Murray",
        "Welch Mcmillan",
      ]);
    });
  });

  describe("getCountOfAllCustomerTransactions()", () => {
    it("should return an integer representing the total number of transactions completed by all customers in the data set", () => {
      // Data from `data/` directory
      expect(getCountOfAllCustomerTransactions(data)).toEqual(26);

      // Data from `sample-data.js` file
      expect(getCountOfAllCustomerTransactions(sampleData)).toEqual(26);
    });
  });

  describe("getUniqueListOfAllCustomerStates()", () => {
    it("should return an array of all states where customers are located", () => {
      // Data from `data/` directory
      expect(getUniqueListOfAllCustomerStates(data)).toEqual([
        "Ohio",
        "New Hampshire",
        "Colorado",
        "Georgia",
        "District Of Columbia",
        "New York",
        "Virginia",
      ]);

      // Data from `sample-data.js` file
      expect(getUniqueListOfAllCustomerStates(sampleData)).toEqual([
        "Texas",
        "Louisiana",
        "Missouri",
        "California",
        "Georgia",
        "Maryland",
        "Florida",
        "Northern Mariana Islands",
        "Wyoming",
      ]);
    });
  });

  describe("getCountOfAllProductsPurchased()", () => {
    it("should return an integer representing the total number of products sold in all transactions completed by all customers in the data set", () => {
      // Data from `data/` directory
      expect(getCountOfAllProductsPurchased(data)).toEqual(51);

      // Data from `sample-data.js` file
      expect(getCountOfAllProductsPurchased(sampleData)).toEqual(54);
    });
  });

  describe("getTotalRevenueOfAllProductsSold()", () => {
    it("should return an integer that represents adding the `priceInCents` of all products sold", () => {
      // Data from `data/` directory
      expect(getTotalRevenueOfAllProductsSold(data)).toEqual(319949);

      // Data from `sample-data.js` file
      expect(getTotalRevenueOfAllProductsSold(sampleData)).toEqual(347846);
    });
  });

  describe("getUniqueListOfAllAssociateStoreLocations()", () => {
    it("should return an array of all locations (city and state) where associates are located", () => {
      // Data from `data/` directory
      expect(getUniqueListOfAllAssociateStoreLocations(data)).toEqual([
        "Roanoke, VA",
        "Woodstock, NY",
        "Boulder, CO",
      ]);

      // Data from `sample-data.js` file
      expect(getUniqueListOfAllAssociateStoreLocations(sampleData)).toEqual([
        "Woodstock, NY",
        "Boulder, CO",
        "Roanoke, VA",
      ]);
    });
  });

  describe("getMostExpensiveTreasureBox()", () => {
    it("should return the object that represents the most expensive treasure box product that has been purchased in the data set", () => {
      // Data from `data/` directory
      expect(getMostExpensiveTreasureBox(data)).toEqual({
        id: "64121406c33b81ffbebfddf9",
        priceInCents: 7799,
        productName: "Deluxe Custom",
      });

      // Data from `sample-data.js` file
      expect(getMostExpensiveTreasureBox(sampleData)).toEqual({
        id: "64121406c33b81ffbebfddf9",
        priceInCents: 7899,
        productName: "Deluxe Custom",
      });
    });
  });
});
