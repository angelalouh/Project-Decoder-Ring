// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  it("should return an encoded string when proper inputs are given", () => {
    const actual = caesar("thinkful", 3);
    const expected = "wklqnixo";
    expect(actual).to.equal(expected);
  });
  it("should return a decoded string when given proper inputs", () => {
    const expected = "thinkful";
    const actual = caesar("wklqnixo", 3, false);
    expect(actual).to.equal(expected);
  });
  it("should return false if shift value is not present", () => {
    const actual = caesar("thinkful");
    expect(actual).to.be.false;
  });
  it("should return false if shift value is 0", () => {
    const actual = caesar("thinkful", 0);
    expect(actual).to.be.false;
  });
  it("should return false if shift value is less than -25", () => {
    const actual = caesar("thinkful", -26);
    expect(actual).to.be.false;
  });
  it("should return false if shift is greater than 25", () => {
    const actual = caesar("thinkful", 26);
    expect(actual).to.be.false;
  });
  it("should maintain spaces and other non-alphabetic symbols in the encoded string", () => {
    const expected = "#wklqnixo!";
    const actual = caesar("#thinkful!", 3);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces and other non-alphabetic symbols in the decoded string", () => {
    const expected = "#thinkful!";
    const actual = caesar("#wklqnixo!", 3, false);
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters when encoding or decoding", () => {
    const expectedEncode = "wklqnixo";
    const actualEncode = caesar("Thinkful", 3);
    expect(actualEncode).to.equal(expectedEncode);
    const expectedDecode = "thinkful";
    const actualDecode = caesar("WKLqnIxO", 3, false);
    expect(actualDecode).to.equal(expectedDecode);
  });
  it("should wrap around to the front of the alphabet if a letter shifts 'off' the back", () => {
    const expectedEncode = "bpqa qa i amkzmb umaaiom!";
    const actualEncode = caesar("This is a secret message!", 8);
    expect(actualEncode).to.equal(expectedEncode);
    const expectedDecode = "this is a secret message!";
    const actualDecode = caesar("bpqa qa i amkzmb umaaiom!", 8, false);
    expect(actualDecode).to.equal(expectedDecode);
  });
  it("should wrap around to the back of the alphabet if a letter shifts 'off' the front", () => {
    const expectedEncode = "tsucosjvk!";
    const actualEncode = caesar("Backwards!", -8);
    expect(actualEncode).to.equal(expectedEncode);
    const expectedDecode = "backwards!";
    const actualDecode = caesar("tsucosjvk!", -8, false);
    expect(actualDecode).to.equal(expectedDecode);
  });
});
