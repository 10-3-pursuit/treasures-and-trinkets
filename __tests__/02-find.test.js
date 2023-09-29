const fs = require("fs");

const {
  findCustomerById,
  findCustomerByFullName,
  findAssociateById,
  findAllCustomersByState,
  findAllCustomersHelpedByAssociate,
  findAllCustomersWhoBoughtSpecificBox,
} = require("../src/02-find");

const json = fs.readFileSync("./data/data.json", "utf-8");
const data = JSON.parse(json);
const sampleData = require("../fixtures/sample-data");

describe("02 Find", () => {
  describe("findCustomerById()", () => {
    it("should return the entire customer object of the given ID", () => {
      // Data from `data/` directory
      const zelmaId = "64136852c6a50cfb165ffc09";
      const zelma = findCustomerById(data, zelmaId);
      expect(zelma.id).toEqual(zelmaId);
      expect(zelma.username).toEqual("wilkins86");

      const maggieId = "64136852d2562cc987e0608c";
      const maggie = findCustomerById(data, maggieId);
      expect(maggie.id).toEqual(maggieId);
      expect(maggie.email).toEqual("maggie_nguyen@skyplex.edu");

      // Data from `sample-data.js` file
      const kelleyId = "64136ea9a82d5ad053f1e927";
      const kelley = findCustomerById(sampleData, kelleyId);
      expect(kelley.id).toEqual(kelleyId);
      expect(kelley.username).toEqual("stein00");

      const welchId = "64136ea92636042d86939e2e";
      const welch = findCustomerById(sampleData, welchId);
      expect(welch.id).toEqual(welchId);
      expect(welch.email).toEqual("wmcmillan@pursuit.org");
    });

    it("should return `null` if no customer matches the ID", () => {
      // Data from `data/` directory
      expect(findCustomerById(data, "incorrect-id")).toEqual(null);

      // Data from `sample-data.js` file
      expect(findCustomerById(sampleData, "incorrect-id")).toEqual(null);
    });
  });

  describe("findCustomerByFullName()", () => {
    it("should return the entire customer object of the given ID", () => {
      // Data from `data/` directory
      const zelmaName = "Zelma Wilkins";
      const zelma = findCustomerByFullName(data, zelmaName);
      expect(zelma.id).toEqual("64136852c6a50cfb165ffc09");
      expect(zelma.username).toEqual("wilkins86");

      const maggieName = "Maggie Nguyen";
      const maggie = findCustomerByFullName(data, maggieName);
      expect(maggie.id).toEqual("64136852d2562cc987e0608c");
      expect(maggie.email).toEqual("maggie_nguyen@skyplex.edu");

      // Data from `sample-data.js` file
      const kellyName = "Kelley Stein";
      const kelley = findCustomerByFullName(sampleData, kellyName);
      expect(kelley.id).toEqual("64136ea9a82d5ad053f1e927");
      expect(kelley.username).toEqual("stein00");

      const welchName = "Welch Mcmillan";
      const welch = findCustomerByFullName(sampleData, welchName);
      expect(welch.id).toEqual("64136ea92636042d86939e2e");
      expect(welch.email).toEqual("wmcmillan@pursuit.org");
    });

    it("should return `null` if no customer matches the full name", () => {
      // Data from `data/` directory
      expect(findCustomerByFullName(data, "incorrect name")).toEqual(null);

      // Data from `sample-data.js` file
      expect(findCustomerByFullName(sampleData, "incorrect name")).toEqual(
        null
      );
    });

    it("should be case insensitive", () => {
      // Data from `data/` directory
      const zelmaName = "ZELMA WILKINS";
      const zelma = findCustomerByFullName(data, zelmaName);
      expect(zelma.id).toEqual("64136852c6a50cfb165ffc09");
      expect(zelma.username).toEqual("wilkins86");

      const maggieName = "maggie nguyen";
      const maggie = findCustomerByFullName(data, maggieName);
      expect(maggie.id).toEqual("64136852d2562cc987e0608c");
      expect(maggie.email).toEqual("maggie_nguyen@skyplex.edu");

      // Data from `sample-data.js` file
      const kellyName = "KeLLeY StEiN";
      const kelley = findCustomerByFullName(sampleData, kellyName);
      expect(kelley.id).toEqual("64136ea9a82d5ad053f1e927");
      expect(kelley.username).toEqual("stein00");

      const welchName = "WELCH mcmillan";
      const welch = findCustomerByFullName(sampleData, welchName);
      expect(welch.id).toEqual("64136ea92636042d86939e2e");
      expect(welch.email).toEqual("wmcmillan@pursuit.org");
    });
  });

  describe("findAssociateById()", () => {
    it("should return the associate object of the given ID", () => {
      // Data from `data/` directory
      const zelmaAssociateId = "6413682d51868a0070651889";
      const zelmaAssociate = findAssociateById(data, zelmaAssociateId);
      expect(zelmaAssociate.id).toEqual(zelmaAssociateId);
      expect(zelmaAssociate.email).toEqual("rhonda_sheppard80@example.com");

      const maggieAssociateId = "6413682dff3ee3911e3d01c0";
      const maggieAssociate = findAssociateById(data, maggieAssociateId);
      expect(maggieAssociate.id).toEqual(maggieAssociateId);
      expect(maggieAssociate.email).toEqual("olsen_morton00@example.com");

      // Data from `sample-data.js` file
      const kelleyAssociateId = "6413682d3baea7ee39e1b3b4";
      const kelleyAssociate = findAssociateById(sampleData, kelleyAssociateId);
      expect(kelleyAssociate.id).toEqual(kelleyAssociateId);
      expect(kelleyAssociate.email).toEqual("alexis_shields98@example.com");

      const welchAssociateId = "6413682de2c453467090f9ff";
      const welch = findAssociateById(sampleData, welchAssociateId);
      expect(welch.id).toEqual(welchAssociateId);
      expect(welch.email).toEqual("lucy_giles01@example.com");
    });

    it("should return `null` if no associate matches the ID", () => {
      // Data from `data/` directory
      expect(findAssociateById(data, "incorrect-associate-id")).toEqual(null);

      // Data from `sample-data.js` file
      expect(findAssociateById(sampleData, "incorrect-associate-id")).toEqual(
        null
      );
    });
  });

  describe("findAllCustomersByState()", () => {
    it("should return all customers objects that have an address in the given state", () => {
      // Data from `data/` directory
      const colorado = "Colorado";
      const coloradoCustomers = findAllCustomersByState(data, colorado);
      expect(coloradoCustomers[0].profile.address.state).toEqual(colorado);
      expect(coloradoCustomers[1].profile.address.state).toEqual(colorado);
      expect(coloradoCustomers[2].profile.address.state).toEqual(colorado);
      expect(coloradoCustomers[3].profile.address.state).toEqual(colorado);
      expect(coloradoCustomers[4]).toEqual(undefined);

      // Data from `sample-data.js` file
      const california = "California";
      const californiaCustomers = findAllCustomersByState(
        sampleData,
        california
      );
      expect(californiaCustomers[0].profile.address.state).toEqual(california);
      expect(californiaCustomers[1].profile.address.state).toEqual(california);
      expect(californiaCustomers[2]).toEqual(undefined);
    });

    it("should return an empty array if no customer lives in the given state", () => {
      // Data from `data/` directory
      expect(findAllCustomersByState(data, "incorrect-state")).toEqual([]);

      // Data from `sample-data.js` file
      expect(findAllCustomersByState(sampleData, "incorrect-state")).toEqual(
        []
      );
    });
  });

  describe("findAllCustomersHelpedByAssociate()", () => {
    it("should return all customer objects that have had a transaction helped by an associate with the given ID (customers do not need to be unique)", () => {
      // Data from `data/` directory
      const rhondaId = "6413682d51868a0070651889";
      const rhondaCustomers = findAllCustomersHelpedByAssociate(data, rhondaId);
      expect(rhondaCustomers[0].profile.name.last).toEqual("Wilkins");
      expect(rhondaCustomers[1].profile.name.last).toEqual("Cote");
      expect(rhondaCustomers[2].profile.name.last).toEqual("Cote");
      expect(rhondaCustomers[3]).toEqual(undefined);

      // Data from `sample-data.js` file
      const lucyId = "6413682de2c453467090f9ff";
      const lucyCustomers = findAllCustomersHelpedByAssociate(
        sampleData,
        lucyId
      );
      expect(lucyCustomers[0].profile.name.last).toEqual("Castaneda");
      expect(lucyCustomers[1].profile.name.last).toEqual("Murray");
      expect(lucyCustomers[2].profile.name.last).toEqual("Mcmillan");
      expect(lucyCustomers[3]).toEqual(undefined);
    });

    it("should return an empty array if no customer has been helped by the associate", () => {
      // Data from `data/` directory
      expect(
        findAllCustomersHelpedByAssociate(data, "incorrect-associate-id")
      ).toEqual([]);

      // Data from `sample-data.js` file
      expect(
        findAllCustomersHelpedByAssociate(sampleData, "incorrect-associate-id")
      ).toEqual([]);
    });
  });

  describe("findAllCustomersWhoBoughtSpecificBox()", () => {
    it("should return all customer objects that have purchased a specific box (customers do not need to be unique)", () => {
      // Data from `data/` directory
      const customBox = "Custom";
      const customCustomers = findAllCustomersWhoBoughtSpecificBox(
        data,
        customBox
      );
      expect(customCustomers[0].profile.name.last).toEqual("Wilkins");
      expect(customCustomers[1].profile.name.last).toEqual("Mullins");
      expect(customCustomers[2].profile.name.last).toEqual("Mullins");
      expect(customCustomers[3].profile.name.last).toEqual("Mejia");
      expect(customCustomers[4].profile.name.last).toEqual("Silvia");
      expect(customCustomers[5]).toEqual(undefined);

      // Data from `sample-data.js` file
      const sportsBox = "Go Sports Go!";
      const sportsCustomers = findAllCustomersWhoBoughtSpecificBox(
        sampleData,
        sportsBox
      );
      expect(sportsCustomers[0].profile.name.last).toEqual("Barnes");
      expect(sportsCustomers[1].profile.name.last).toEqual("Barnes");
      expect(sportsCustomers[2].profile.name.last).toEqual("Klein");
      expect(sportsCustomers[3].profile.name.last).toEqual("Mcmillan");
      expect(sportsCustomers[4]).toEqual(undefined);
    });

    it("should return an empty array if no customer has been helped by the associate", () => {
      // Data from `data/` directory
      expect(
        findAllCustomersWhoBoughtSpecificBox(data, "incorrect-box-id")
      ).toEqual([]);

      // Data from `sample-data.js` file
      expect(
        findAllCustomersWhoBoughtSpecificBox(sampleData, "incorrect-box-id")
      ).toEqual([]);
    });
  });
});
