const { expect } = require("chai");
const wrap = require("./wrap");

describe("wrap", () => {
  it("Returns empty string if empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });
  it("Returns the original message if message length is less than or equal to column length", () => {
    expect(wrap("hello", 10)).to.equal("hello");
    expect(wrap("hello", 5)).to.equal("hello");
  });
  it("Does not return the original message if the length is greater than the maxLen", () => {
    expect(wrap("hello", 3)).to.not.equal("hello");
  });
  it("Creates a line break if the message length is greater than maxLen", () => {
    expect(wrap("hello there", 7)).to.equal("hello \nthere ");
  });
});
