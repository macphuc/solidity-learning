const { expect } = require("chai");

describe("SimpleStorage", function () {
  let SimpleStorage, simpleStorage, owner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    SimpleStorage = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await SimpleStorage.deploy();
    await simpleStorage.deployed();
  });

  it("Should start with storedValue 0", async function () {
    expect(await simpleStorage.get()).to.equal(0);
  });

  it("Should update and retrieve the stored value", async function () {
    await simpleStorage.set(42);
    expect(await simpleStorage.get()).to.equal(42);
  });

  it("Should emit ValueChanged event on set", async function () {
    await expect(simpleStorage.set(100))
      .to.emit(simpleStorage, "ValueChanged")
      .withArgs(100);
  });
});
