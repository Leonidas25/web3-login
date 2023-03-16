const { expect } = require("chai");

describe("Voting", function () {
  let Voting, voting, candidateNames;

  beforeEach(async () => {
    Voting = await ethers.getContractFactory("Voting");
    candidateNames = ["Alice", "Bob", "Charlie"];
    voting = await Voting.deploy(candidateNames);
    await voting.deployed();
  });

  it("Should initialize candidates correctly", async function () {
    for (let i = 0; i < candidateNames.length; i++) {
      const candidate = await voting.candidates(i + 1);
      expect(candidate.name).to.equal(candidateNames[i]);
      expect(candidate.voteCount).to.equal(0);
    }
  });

  it("Should allow voting and emit event", async function () {
    const voteTx = await voting.vote(1);
    await expect(voteTx).to.emit(voting, "votedEvent").withArgs(1);

    const candidate = await voting.candidates(1);
    expect(candidate.voteCount).to.equal(
