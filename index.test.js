const { sequelize } = require("./db");
const { Band, Musician } = require("./index");

describe("Band and Musician Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a Band", async () => {
    const testBand = await Band.create({ name: "UB40", Genre: "Rock" });
    expect(testBand.name).toBe("UB40");
  });

  test("can create a Musician", async () => {
    const testMusician = await Musician.create({
      name: "Jack Michaelson",
      instrument: "Guitar",
    });
    expect(testMusician.name).toBe("Jack Michaelson");
  });
});
