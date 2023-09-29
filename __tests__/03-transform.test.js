const fs = require("fs");

const {
  transformToAssociateByIdAndSaleTotal,
  transformToAssociateByIdWithTransactionIds,
  transformToAssociateByIdAndCustomerMiniProfile,
  transformToProductByNameAndCustomerMiniProfile,
} = require("../src/03-transform");

const json = fs.readFileSync("./data/data.json", "utf-8");
const data = JSON.parse(json);
const sampleData = require("../fixtures/sample-data");

describe("03 Transform", () => {
  describe("transformToAssociateByIdAndSaleTotal()", () => {
    it("should transform the data into an object where the keys are associate IDs and the values are the amount of money (in cents) that associate helped to sell", () => {
      // Data from `data/` directory
      expect(transformToAssociateByIdAndSaleTotal(data)).toEqual({
        "6413682d3baea7ee39e1b3b4": 9398,
        "6413682d3ca4a3050260a618": 58990,
        "6413682d51868a0070651889": 46193,
        "6413682d7c14216d22d1350e": 24196,
        "6413682d995ef96c745a8c82": 14398,
        "6413682dc1eb4d6e0567d817": 37694,
        "6413682dc61987ff9c6419dc": 54792,
        "6413682de2c453467090f9ff": 21797,
        "6413682dff3ee3911e3d01c0": 52491,
      });

      // Data from `sample-data.js` file
      expect(transformToAssociateByIdAndSaleTotal(sampleData)).toEqual({
        "6413682d3baea7ee39e1b3b4": 19797,
        "6413682d3ca4a3050260a618": 35994,
        "6413682d51868a0070651889": 92986,
        "6413682d7c14216d22d1350e": 46993,
        "6413682d995ef96c745a8c82": 46593,
        "6413682d9b4340ec80224108": 6399,
        "6413682dc61987ff9c6419dc": 17997,
        "6413682de2c453467090f9ff": 46593,
        "6413682dff3ee3911e3d01c0": 34494,
      });
    });
  });

  describe("transformToAssociateByIdWithTransactionIds()", () => {
    it("should transform the data into an object where the keys are associate IDs and the values are arrays of transaction IDs related to that associate", () => {
      // Data from `data/` directory
      expect(transformToAssociateByIdWithTransactionIds(data)).toEqual({
        "6413682d3baea7ee39e1b3b4": ["64136852f93cab052b7dfba2"],
        "6413682d3ca4a3050260a618": [
          "64136852cc56e6a908b7c0c9",
          "641368529520edfc0709633e",
          "641368528bcde5b0e3adc97e",
          "641368520531affb1388667d",
          "64136852cc7cca358b17f1a5",
          "64136852c9e35503150f17b9",
        ],
        "6413682d51868a0070651889": [
          "64136852c24913e1c51848b2",
          "64136852ad715e7e53772589",
          "6413685294462658aac4fa3e",
        ],
        "6413682d7c14216d22d1350e": [
          "64136852e1b876ec4d599fcc",
          "641368523cb48597aadb6e14",
        ],
        "6413682d995ef96c745a8c82": [
          "641368525edd9bf33dbb19f7",
          "641368524b94e75b34d17c32",
        ],
        "6413682dc1eb4d6e0567d817": [
          "64136852e8999b7e85298226",
          "64136852630994602ae19ad2",
          "64136852a87a5373ee47142c",
        ],
        "6413682dc61987ff9c6419dc": [
          "641368524edb366b9badedc2",
          "6413685276c3308f072f7c5a",
          "64136852ff110d63ef503f10",
          "64136852e4a61a6332ce1d01",
        ],
        "6413682de2c453467090f9ff": ["641368524a6b3015289591f7"],
        "6413682dff3ee3911e3d01c0": [
          "641368527bc5d303fd0f18bc",
          "64136852300decc015801c03",
          "641368524d8d13bccee09f54",
          "641368520c08800afb2510b9",
        ],
      });

      // Data from `sample-data.js` file
      expect(transformToAssociateByIdWithTransactionIds(sampleData)).toEqual({
        "6413682d3baea7ee39e1b3b4": [
          "64136ea93741af9c22cd5abc",
          "64136ea952db3617e83ce490",
        ],
        "6413682d3ca4a3050260a618": [
          "64136ea9288c14ff2b37616d",
          "64136ea96a553c094c40b183",
        ],
        "6413682d51868a0070651889": [
          "64136ea9c666d06d324e1905",
          "64136ea99ac1b4cede3c64f1",
          "64136ea9c2538b96c35d5df1",
          "64136ea948cded130974cfba",
          "64136ea96d6c49898ba0466e",
          "64136ea9937dd6be5498f47d",
        ],
        "6413682d7c14216d22d1350e": [
          "64136ea9934e5a60ec4527e0",
          "64136ea9c99518fce4f2bd8e",
          "64136ea9a1e432f003dd5a6e",
          "64136ea9866a335cbae3c374",
        ],
        "6413682d995ef96c745a8c82": [
          "64136ea9bdf1d1ca4a99f5eb",
          "64136ea9e50c4cb8e561e40f",
          "64136ea9bb62ccef26852ed3",
          "64136ea9a80d7601d1fd0655",
        ],
        "6413682d9b4340ec80224108": ["64136ea93eb78c118de3159d"],
        "6413682dc61987ff9c6419dc": ["64136ea9cd1fb5bdf50d9cac"],
        "6413682de2c453467090f9ff": [
          "64136ea990a6aeacc6c33c8a",
          "64136ea9c57e70f7ae8470da",
          "64136ea946a72a8d037db117",
        ],
        "6413682dff3ee3911e3d01c0": [
          "64136ea916ea3b8837607eae",
          "64136ea99773ae01421b446e",
          "64136ea9b80cff6fccf80230",
        ],
      });
    });
  });

  describe("transformToAssociateByIdAndCustomerMiniProfile()", () => {
    it("should transform the data into an object where the keys are associate IDs and the value is an array of mini-profiles of customers who worked with that associate", () => {
      // Data from `data/` directory
      expect(transformToAssociateByIdAndCustomerMiniProfile(data)).toEqual({
        "6413682d3baea7ee39e1b3b4": [
          {
            address: "68 Norfolk Street, Roy, New York",
            id: "64136852581fde581d2cca4e",
            name: "Ashley Silvia",
          },
        ],
        "6413682d3ca4a3050260a618": [
          {
            address: "91 Juliana Place, Apt 226, Homeworth, Ohio",
            id: "6413685258e40a979c5859b8",
            name: "Lucille Bradshaw",
          },
          {
            address: "70 Pulaski Street, Apt 655, Faywood, New Hampshire",
            id: "64136852925c7617fff6091e",
            name: "Gary Pate",
          },
          {
            address: "53 Celeste Court, Apt 294, Conway, Colorado",
            id: "6413685253228979f5b0d0c1",
            name: "Lola Howard",
          },
          {
            address: "20 Ainslie Street, Apt 268, Cresaptown, Colorado",
            id: "641368520e9dc9ea95e02bfc",
            name: "Brandy Mullins",
          },
          {
            address: "68 Norfolk Street, Roy, New York",
            id: "64136852581fde581d2cca4e",
            name: "Ashley Silvia",
          },
          {
            address: "20 Lancaster Avenue, Nicholson, Colorado",
            id: "641368522e172999c9665e1e",
            name: "Melba Cote",
          },
        ],
        "6413682d51868a0070651889": [
          {
            address: "76 Crooke Avenue, Gerton, Colorado",
            id: "64136852c6a50cfb165ffc09",
            name: "Zelma Wilkins",
          },
          {
            address: "20 Lancaster Avenue, Nicholson, Colorado",
            id: "641368522e172999c9665e1e",
            name: "Melba Cote",
          },
          {
            address: "20 Lancaster Avenue, Nicholson, Colorado",
            id: "641368522e172999c9665e1e",
            name: "Melba Cote",
          },
        ],
        "6413682d7c14216d22d1350e": [
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
        "6413682d995ef96c745a8c82": [
          {
            address: "90 Sackett Street, Norris, District Of Columbia",
            id: "641368524070286376a2df60",
            name: "Bertie Mejia",
          },
          {
            address: "68 Norfolk Street, Roy, New York",
            id: "64136852581fde581d2cca4e",
            name: "Ashley Silvia",
          },
        ],
        "6413682dc1eb4d6e0567d817": [
          {
            address: "91 Juliana Place, Apt 226, Homeworth, Ohio",
            id: "6413685258e40a979c5859b8",
            name: "Lucille Bradshaw",
          },
          {
            address: "20 Ainslie Street, Apt 268, Cresaptown, Colorado",
            id: "641368520e9dc9ea95e02bfc",
            name: "Brandy Mullins",
          },
          {
            address: "78 Hoyt Street, Lithium, Georgia",
            id: "64136852d2562cc987e0608c",
            name: "Maggie Nguyen",
          },
        ],
        "6413682dc61987ff9c6419dc": [
          {
            address: "91 Juliana Place, Apt 226, Homeworth, Ohio",
            id: "6413685258e40a979c5859b8",
            name: "Lucille Bradshaw",
          },
          {
            address: "91 Juliana Place, Apt 226, Homeworth, Ohio",
            id: "6413685258e40a979c5859b8",
            name: "Lucille Bradshaw",
          },
          {
            address: "70 Pulaski Street, Apt 655, Faywood, New Hampshire",
            id: "64136852925c7617fff6091e",
            name: "Gary Pate",
          },
          {
            address: "20 Ainslie Street, Apt 268, Cresaptown, Colorado",
            id: "641368520e9dc9ea95e02bfc",
            name: "Brandy Mullins",
          },
        ],
        "6413682de2c453467090f9ff": [
          {
            address: "23 Railroad Avenue, Apt 642, Muse, Virginia",
            id: "641368521074494622cc9e4b",
            name: "Sawyer Ellis",
          },
        ],
        "6413682dff3ee3911e3d01c0": [
          {
            address: "53 Celeste Court, Apt 294, Conway, Colorado",
            id: "6413685253228979f5b0d0c1",
            name: "Lola Howard",
          },
          {
            address: "20 Ainslie Street, Apt 268, Cresaptown, Colorado",
            id: "641368520e9dc9ea95e02bfc",
            name: "Brandy Mullins",
          },
          {
            address: "78 Hoyt Street, Lithium, Georgia",
            id: "64136852d2562cc987e0608c",
            name: "Maggie Nguyen",
          },
          {
            address: "90 Sackett Street, Norris, District Of Columbia",
            id: "641368524070286376a2df60",
            name: "Bertie Mejia",
          },
        ],
      });

      // Data from `sample-data.js` file
      expect(
        transformToAssociateByIdAndCustomerMiniProfile(sampleData)
      ).toEqual({
        "6413682d3baea7ee39e1b3b4": [
          {
            address: "58 Schroeders Avenue, Unit 7, Dexter, Texas",
            id: "64136ea9a82d5ad053f1e927",
            name: "Kelley Stein",
          },
          {
            address: "81 Hicks Street, Rockbridge, Georgia",
            id: "64136ea9575a28f547a0c436",
            name: "Lottie Alston",
          },
        ],
        "6413682d3ca4a3050260a618": [
          {
            address: "44 Imlay Street, Santel, Maryland",
            id: "64136ea988b9660157e5397c",
            name: "Jill Barnes",
          },
          {
            address: "12 Crown Street, Apt 190, Umapine, Florida",
            id: "64136ea9e14a1a7666b76d58",
            name: "Lauri Castaneda",
          },
        ],
        "6413682d51868a0070651889": [
          {
            address: "58 Schroeders Avenue, Unit 7, Dexter, Texas",
            id: "64136ea9a82d5ad053f1e927",
            name: "Kelley Stein",
          },
          {
            address: "58 Schroeders Avenue, Unit 7, Dexter, Texas",
            id: "64136ea9a82d5ad053f1e927",
            name: "Kelley Stein",
          },
          {
            address: "53 Bliss Terrace, Unit 12, Richmond, California",
            id: "64136ea9fc4be8ca04086c1d",
            name: "Holman Jenkins",
          },
          {
            address: "44 Imlay Street, Santel, Maryland",
            id: "64136ea988b9660157e5397c",
            name: "Jill Barnes",
          },
          {
            address:
              "54 Veronica Place, Unit 4, Tonopah, Northern Mariana Islands",
            id: "64136ea948226979e556a49e",
            name: "Jo Klein",
          },
          {
            address: "91 Crystal Street, Unit 20, Ezel, Wyoming",
            id: "64136ea92bf0deb7c20942cb",
            name: "Nola Murray",
          },
        ],
        "6413682d7c14216d22d1350e": [
          {
            address: "92 India Street, Wauhillau, Louisiana",
            id: "64136ea9f7416c0fac692aab",
            name: "Tricia Hubbard",
          },
          {
            address: "6 Beach Place, Apt 265, Eastmont, Missouri",
            id: "64136ea94984400d304c18fc",
            name: "Mona Cain",
          },
          {
            address: "81 Hicks Street, Rockbridge, Georgia",
            id: "64136ea9575a28f547a0c436",
            name: "Lottie Alston",
          },
          {
            address: "20 Monitor Street, Unit 21, Wheaton, California",
            id: "64136ea92636042d86939e2e",
            name: "Welch Mcmillan",
          },
        ],
        "6413682d995ef96c745a8c82": [
          {
            address: "81 Hicks Street, Rockbridge, Georgia",
            id: "64136ea9575a28f547a0c436",
            name: "Lottie Alston",
          },
          {
            address: "81 Hicks Street, Rockbridge, Georgia",
            id: "64136ea9575a28f547a0c436",
            name: "Lottie Alston",
          },
          {
            address: "44 Imlay Street, Santel, Maryland",
            id: "64136ea988b9660157e5397c",
            name: "Jill Barnes",
          },
          {
            address: "91 Crystal Street, Unit 20, Ezel, Wyoming",
            id: "64136ea92bf0deb7c20942cb",
            name: "Nola Murray",
          },
        ],
        "6413682d9b4340ec80224108": [
          {
            address:
              "54 Veronica Place, Unit 4, Tonopah, Northern Mariana Islands",
            id: "64136ea948226979e556a49e",
            name: "Jo Klein",
          },
        ],
        "6413682dc61987ff9c6419dc": [
          {
            address: "58 Schroeders Avenue, Unit 7, Dexter, Texas",
            id: "64136ea9a82d5ad053f1e927",
            name: "Kelley Stein",
          },
        ],
        "6413682de2c453467090f9ff": [
          {
            address: "12 Crown Street, Apt 190, Umapine, Florida",
            id: "64136ea9e14a1a7666b76d58",
            name: "Lauri Castaneda",
          },
          {
            address: "91 Crystal Street, Unit 20, Ezel, Wyoming",
            id: "64136ea92bf0deb7c20942cb",
            name: "Nola Murray",
          },
          {
            address: "20 Monitor Street, Unit 21, Wheaton, California",
            id: "64136ea92636042d86939e2e",
            name: "Welch Mcmillan",
          },
        ],
        "6413682dff3ee3911e3d01c0": [
          {
            address: "81 Hicks Street, Rockbridge, Georgia",
            id: "64136ea9575a28f547a0c436",
            name: "Lottie Alston",
          },
          {
            address: "44 Imlay Street, Santel, Maryland",
            id: "64136ea988b9660157e5397c",
            name: "Jill Barnes",
          },
          {
            address: "12 Crown Street, Apt 190, Umapine, Florida",
            id: "64136ea9e14a1a7666b76d58",
            name: "Lauri Castaneda",
          },
        ],
      });
    });
  });

  describe("transformToProductByNameAndCustomerMiniProfile()", () => {
    it("should transform the data into an object where the keys are product names and the value is an array of mini-profiles of customers who bought that product", () => {
      // Data from `data/` directory
      expect(transformToProductByNameAndCustomerMiniProfile(data)).toEqual({
        "New Child": [
          {
            id: "6413685258e40a979c5859b8",
            name: "Lucille Bradshaw",
            address: "91 Juliana Place, Apt 226, Homeworth, Ohio",
          },
          {
            id: "641368520e9dc9ea95e02bfc",
            name: "Brandy Mullins",
            address: "20 Ainslie Street, Apt 268, Cresaptown, Colorado",
          },
          {
            id: "641368521074494622cc9e4b",
            name: "Sawyer Ellis",
            address: "23 Railroad Avenue, Apt 642, Muse, Virginia",
          },
        ],
        "Deluxe Custom": [
          {
            id: "6413685258e40a979c5859b8",
            name: "Lucille Bradshaw",
            address: "91 Juliana Place, Apt 226, Homeworth, Ohio",
          },
          {
            id: "64136852d2562cc987e0608c",
            name: "Maggie Nguyen",
            address: "78 Hoyt Street, Lithium, Georgia",
          },
          {
            id: "641368522e172999c9665e1e",
            name: "Melba Cote",
            address: "20 Lancaster Avenue, Nicholson, Colorado",
          },
        ],
        "Deluxe Grill Chef": [
          {
            id: "6413685258e40a979c5859b8",
            name: "Lucille Bradshaw",
            address: "91 Juliana Place, Apt 226, Homeworth, Ohio",
          },
          {
            id: "6413685258e40a979c5859b8",
            name: "Lucille Bradshaw",
            address: "91 Juliana Place, Apt 226, Homeworth, Ohio",
          },
          {
            id: "64136852c6a50cfb165ffc09",
            name: "Zelma Wilkins",
            address: "76 Crooke Avenue, Gerton, Colorado",
          },
          {
            id: "6413685253228979f5b0d0c1",
            name: "Lola Howard",
            address: "53 Celeste Court, Apt 294, Conway, Colorado",
          },
          {
            id: "641368520e9dc9ea95e02bfc",
            name: "Brandy Mullins",
            address: "20 Ainslie Street, Apt 268, Cresaptown, Colorado",
          },
          {
            id: "641368524070286376a2df60",
            name: "Bertie Mejia",
            address: "90 Sackett Street, Norris, District Of Columbia",
          },
        ],
        Travel: [
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
            id: "6413685253228979f5b0d0c1",
            name: "Lola Howard",
            address: "53 Celeste Court, Apt 294, Conway, Colorado",
          },
          {
            id: "641368520e9dc9ea95e02bfc",
            name: "Brandy Mullins",
            address: "20 Ainslie Street, Apt 268, Cresaptown, Colorado",
          },
          {
            id: "64136852581fde581d2cca4e",
            name: "Ashley Silvia",
            address: "68 Norfolk Street, Roy, New York",
          },
        ],
        "Vacation at Home": [
          {
            id: "6413685258e40a979c5859b8",
            name: "Lucille Bradshaw",
            address: "91 Juliana Place, Apt 226, Homeworth, Ohio",
          },
          {
            id: "64136852d2562cc987e0608c",
            name: "Maggie Nguyen",
            address: "78 Hoyt Street, Lithium, Georgia",
          },
        ],
        "Huckleberry Lover": [
          {
            id: "6413685258e40a979c5859b8",
            name: "Lucille Bradshaw",
            address: "91 Juliana Place, Apt 226, Homeworth, Ohio",
          },
          {
            id: "641368520e9dc9ea95e02bfc",
            name: "Brandy Mullins",
            address: "20 Ainslie Street, Apt 268, Cresaptown, Colorado",
          },
          {
            id: "64136852d2562cc987e0608c",
            name: "Maggie Nguyen",
            address: "78 Hoyt Street, Lithium, Georgia",
          },
          {
            id: "64136852d2562cc987e0608c",
            name: "Maggie Nguyen",
            address: "78 Hoyt Street, Lithium, Georgia",
          },
          {
            id: "641368524070286376a2df60",
            name: "Bertie Mejia",
            address: "90 Sackett Street, Norris, District Of Columbia",
          },
          {
            id: "64136852581fde581d2cca4e",
            name: "Ashley Silvia",
            address: "68 Norfolk Street, Roy, New York",
          },
        ],
        "Happy Birthday #1": [
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
        "Spring Cleaning": [
          {
            id: "64136852925c7617fff6091e",
            name: "Gary Pate",
            address: "70 Pulaski Street, Apt 655, Faywood, New Hampshire",
          },
          {
            id: "64136852c6a50cfb165ffc09",
            name: "Zelma Wilkins",
            address: "76 Crooke Avenue, Gerton, Colorado",
          },
          {
            id: "6413685253228979f5b0d0c1",
            name: "Lola Howard",
            address: "53 Celeste Court, Apt 294, Conway, Colorado",
          },
          {
            id: "6413685253228979f5b0d0c1",
            name: "Lola Howard",
            address: "53 Celeste Court, Apt 294, Conway, Colorado",
          },
          {
            id: "64136852581fde581d2cca4e",
            name: "Ashley Silvia",
            address: "68 Norfolk Street, Roy, New York",
          },
          {
            id: "641368521074494622cc9e4b",
            name: "Sawyer Ellis",
            address: "23 Railroad Avenue, Apt 642, Muse, Virginia",
          },
        ],
        "Happy Birthday #2": [
          {
            id: "64136852925c7617fff6091e",
            name: "Gary Pate",
            address: "70 Pulaski Street, Apt 655, Faywood, New Hampshire",
          },
        ],
        Custom: [
          {
            id: "64136852c6a50cfb165ffc09",
            name: "Zelma Wilkins",
            address: "76 Crooke Avenue, Gerton, Colorado",
          },
          {
            id: "641368520e9dc9ea95e02bfc",
            name: "Brandy Mullins",
            address: "20 Ainslie Street, Apt 268, Cresaptown, Colorado",
          },
          {
            id: "641368520e9dc9ea95e02bfc",
            name: "Brandy Mullins",
            address: "20 Ainslie Street, Apt 268, Cresaptown, Colorado",
          },
          {
            id: "641368524070286376a2df60",
            name: "Bertie Mejia",
            address: "90 Sackett Street, Norris, District Of Columbia",
          },
          {
            id: "64136852581fde581d2cca4e",
            name: "Ashley Silvia",
            address: "68 Norfolk Street, Roy, New York",
          },
        ],
        "Museum Lover": [
          {
            id: "6413685253228979f5b0d0c1",
            name: "Lola Howard",
            address: "53 Celeste Court, Apt 294, Conway, Colorado",
          },
          {
            id: "64136852d2562cc987e0608c",
            name: "Maggie Nguyen",
            address: "78 Hoyt Street, Lithium, Georgia",
          },
          {
            id: "641368522e172999c9665e1e",
            name: "Melba Cote",
            address: "20 Lancaster Avenue, Nicholson, Colorado",
          },
          {
            id: "641368522e172999c9665e1e",
            name: "Melba Cote",
            address: "20 Lancaster Avenue, Nicholson, Colorado",
          },
        ],
        "Go Sports Go!": [
          {
            id: "641368520e9dc9ea95e02bfc",
            name: "Brandy Mullins",
            address: "20 Ainslie Street, Apt 268, Cresaptown, Colorado",
          },
        ],
        "Best Friend": [
          {
            id: "64136852d2562cc987e0608c",
            name: "Maggie Nguyen",
            address: "78 Hoyt Street, Lithium, Georgia",
          },
          {
            id: "641368522e172999c9665e1e",
            name: "Melba Cote",
            address: "20 Lancaster Avenue, Nicholson, Colorado",
          },
          {
            id: "641368522e172999c9665e1e",
            name: "Melba Cote",
            address: "20 Lancaster Avenue, Nicholson, Colorado",
          },
        ],
        "Dog Fur Baby": [
          {
            id: "641368524070286376a2df60",
            name: "Bertie Mejia",
            address: "90 Sackett Street, Norris, District Of Columbia",
          },
          {
            id: "641368522e172999c9665e1e",
            name: "Melba Cote",
            address: "20 Lancaster Avenue, Nicholson, Colorado",
          },
          {
            id: "641368521074494622cc9e4b",
            name: "Sawyer Ellis",
            address: "23 Railroad Avenue, Apt 642, Muse, Virginia",
          },
        ],
      });

      // Data from `sample-data.js` file
      expect(
        transformToProductByNameAndCustomerMiniProfile(sampleData)
      ).toEqual({
        "Happy Birthday #2": [
          {
            id: "64136ea9a82d5ad053f1e927",
            name: "Kelley Stein",
            address: "58 Schroeders Avenue, Unit 7, Dexter, Texas",
          },
          {
            id: "64136ea94984400d304c18fc",
            name: "Mona Cain",
            address: "6 Beach Place, Apt 265, Eastmont, Missouri",
          },
          {
            id: "64136ea9e14a1a7666b76d58",
            name: "Lauri Castaneda",
            address: "12 Crown Street, Apt 190, Umapine, Florida",
          },
          {
            id: "64136ea948226979e556a49e",
            name: "Jo Klein",
            address:
              "54 Veronica Place, Unit 4, Tonopah, Northern Mariana Islands",
          },
        ],
        "Museum Lover": [
          {
            id: "64136ea9a82d5ad053f1e927",
            name: "Kelley Stein",
            address: "58 Schroeders Avenue, Unit 7, Dexter, Texas",
          },
          {
            id: "64136ea9fc4be8ca04086c1d",
            name: "Holman Jenkins",
            address: "53 Bliss Terrace, Unit 12, Richmond, California",
          },
          {
            id: "64136ea9575a28f547a0c436",
            name: "Lottie Alston",
            address: "81 Hicks Street, Rockbridge, Georgia",
          },
          {
            id: "64136ea9575a28f547a0c436",
            name: "Lottie Alston",
            address: "81 Hicks Street, Rockbridge, Georgia",
          },
          {
            id: "64136ea9575a28f547a0c436",
            name: "Lottie Alston",
            address: "81 Hicks Street, Rockbridge, Georgia",
          },
          {
            id: "64136ea988b9660157e5397c",
            name: "Jill Barnes",
            address: "44 Imlay Street, Santel, Maryland",
          },
        ],
        "Deluxe Grill Chef": [
          {
            id: "64136ea9a82d5ad053f1e927",
            name: "Kelley Stein",
            address: "58 Schroeders Avenue, Unit 7, Dexter, Texas",
          },
          {
            id: "64136ea94984400d304c18fc",
            name: "Mona Cain",
            address: "6 Beach Place, Apt 265, Eastmont, Missouri",
          },
          {
            id: "64136ea988b9660157e5397c",
            name: "Jill Barnes",
            address: "44 Imlay Street, Santel, Maryland",
          },
          {
            id: "64136ea988b9660157e5397c",
            name: "Jill Barnes",
            address: "44 Imlay Street, Santel, Maryland",
          },
          {
            id: "64136ea948226979e556a49e",
            name: "Jo Klein",
            address:
              "54 Veronica Place, Unit 4, Tonopah, Northern Mariana Islands",
          },
          {
            id: "64136ea92bf0deb7c20942cb",
            name: "Nola Murray",
            address: "91 Crystal Street, Unit 20, Ezel, Wyoming",
          },
        ],
        Travel: [
          {
            id: "64136ea9a82d5ad053f1e927",
            name: "Kelley Stein",
            address: "58 Schroeders Avenue, Unit 7, Dexter, Texas",
          },
          {
            id: "64136ea9a82d5ad053f1e927",
            name: "Kelley Stein",
            address: "58 Schroeders Avenue, Unit 7, Dexter, Texas",
          },
          {
            id: "64136ea9a82d5ad053f1e927",
            name: "Kelley Stein",
            address: "58 Schroeders Avenue, Unit 7, Dexter, Texas",
          },
          {
            id: "64136ea988b9660157e5397c",
            name: "Jill Barnes",
            address: "44 Imlay Street, Santel, Maryland",
          },
        ],
        "Dog Fur Baby": [
          {
            id: "64136ea9a82d5ad053f1e927",
            name: "Kelley Stein",
            address: "58 Schroeders Avenue, Unit 7, Dexter, Texas",
          },
          {
            id: "64136ea988b9660157e5397c",
            name: "Jill Barnes",
            address: "44 Imlay Street, Santel, Maryland",
          },
          {
            id: "64136ea92bf0deb7c20942cb",
            name: "Nola Murray",
            address: "91 Crystal Street, Unit 20, Ezel, Wyoming",
          },
          {
            id: "64136ea92bf0deb7c20942cb",
            name: "Nola Murray",
            address: "91 Crystal Street, Unit 20, Ezel, Wyoming",
          },
          {
            id: "64136ea92636042d86939e2e",
            name: "Welch Mcmillan",
            address: "20 Monitor Street, Unit 21, Wheaton, California",
          },
          {
            id: "64136ea92636042d86939e2e",
            name: "Welch Mcmillan",
            address: "20 Monitor Street, Unit 21, Wheaton, California",
          },
        ],
        "Vacation at Home": [
          {
            id: "64136ea9a82d5ad053f1e927",
            name: "Kelley Stein",
            address: "58 Schroeders Avenue, Unit 7, Dexter, Texas",
          },
          {
            id: "64136ea92bf0deb7c20942cb",
            name: "Nola Murray",
            address: "91 Crystal Street, Unit 20, Ezel, Wyoming",
          },
        ],
        Custom: [
          {
            id: "64136ea9a82d5ad053f1e927",
            name: "Kelley Stein",
            address: "58 Schroeders Avenue, Unit 7, Dexter, Texas",
          },
          {
            id: "64136ea9575a28f547a0c436",
            name: "Lottie Alston",
            address: "81 Hicks Street, Rockbridge, Georgia",
          },
          {
            id: "64136ea9e14a1a7666b76d58",
            name: "Lauri Castaneda",
            address: "12 Crown Street, Apt 190, Umapine, Florida",
          },
          {
            id: "64136ea92636042d86939e2e",
            name: "Welch Mcmillan",
            address: "20 Monitor Street, Unit 21, Wheaton, California",
          },
        ],
        "Best Friend": [
          {
            id: "64136ea9a82d5ad053f1e927",
            name: "Kelley Stein",
            address: "58 Schroeders Avenue, Unit 7, Dexter, Texas",
          },
          {
            id: "64136ea988b9660157e5397c",
            name: "Jill Barnes",
            address: "44 Imlay Street, Santel, Maryland",
          },
          {
            id: "64136ea988b9660157e5397c",
            name: "Jill Barnes",
            address: "44 Imlay Street, Santel, Maryland",
          },
          {
            id: "64136ea988b9660157e5397c",
            name: "Jill Barnes",
            address: "44 Imlay Street, Santel, Maryland",
          },
          {
            id: "64136ea92bf0deb7c20942cb",
            name: "Nola Murray",
            address: "91 Crystal Street, Unit 20, Ezel, Wyoming",
          },
          {
            id: "64136ea92bf0deb7c20942cb",
            name: "Nola Murray",
            address: "91 Crystal Street, Unit 20, Ezel, Wyoming",
          },
        ],
        "New Child": [
          {
            id: "64136ea9f7416c0fac692aab",
            name: "Tricia Hubbard",
            address: "92 India Street, Wauhillau, Louisiana",
          },
          {
            id: "64136ea94984400d304c18fc",
            name: "Mona Cain",
            address: "6 Beach Place, Apt 265, Eastmont, Missouri",
          },
          {
            id: "64136ea9e14a1a7666b76d58",
            name: "Lauri Castaneda",
            address: "12 Crown Street, Apt 190, Umapine, Florida",
          },
        ],
        "Huckleberry Lover": [
          {
            id: "64136ea9575a28f547a0c436",
            name: "Lottie Alston",
            address: "81 Hicks Street, Rockbridge, Georgia",
          },
          {
            id: "64136ea9575a28f547a0c436",
            name: "Lottie Alston",
            address: "81 Hicks Street, Rockbridge, Georgia",
          },
          {
            id: "64136ea9575a28f547a0c436",
            name: "Lottie Alston",
            address: "81 Hicks Street, Rockbridge, Georgia",
          },
        ],
        "Spring Cleaning": [
          {
            id: "64136ea9575a28f547a0c436",
            name: "Lottie Alston",
            address: "81 Hicks Street, Rockbridge, Georgia",
          },
          {
            id: "64136ea9e14a1a7666b76d58",
            name: "Lauri Castaneda",
            address: "12 Crown Street, Apt 190, Umapine, Florida",
          },
        ],
        "Deluxe Custom": [
          {
            id: "64136ea9575a28f547a0c436",
            name: "Lottie Alston",
            address: "81 Hicks Street, Rockbridge, Georgia",
          },
        ],
        "Go Sports Go!": [
          {
            id: "64136ea988b9660157e5397c",
            name: "Jill Barnes",
            address: "44 Imlay Street, Santel, Maryland",
          },
          {
            id: "64136ea988b9660157e5397c",
            name: "Jill Barnes",
            address: "44 Imlay Street, Santel, Maryland",
          },
          {
            id: "64136ea948226979e556a49e",
            name: "Jo Klein",
            address:
              "54 Veronica Place, Unit 4, Tonopah, Northern Mariana Islands",
          },
          {
            id: "64136ea92636042d86939e2e",
            name: "Welch Mcmillan",
            address: "20 Monitor Street, Unit 21, Wheaton, California",
          },
        ],
        "Happy Birthday #1": [
          {
            id: "64136ea9e14a1a7666b76d58",
            name: "Lauri Castaneda",
            address: "12 Crown Street, Apt 190, Umapine, Florida",
          },
          {
            id: "64136ea9e14a1a7666b76d58",
            name: "Lauri Castaneda",
            address: "12 Crown Street, Apt 190, Umapine, Florida",
          },
          {
            id: "64136ea92bf0deb7c20942cb",
            name: "Nola Murray",
            address: "91 Crystal Street, Unit 20, Ezel, Wyoming",
          },
        ],
      });
    });
  });
});
