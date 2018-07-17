const chai = require('chai');
const expect = chai.expect;
let KaprekarsConstant = require('../rec');

describe('Testing KaprekarsConstant', () => {
  it('Number 2111 should output 5', () => {
    expect(KaprekarsConstant(2111)).to.equal(5);
  });
  it('Number 6174 should output 0', () => {
    expect(KaprekarsConstant(6174)).to.equal(0);
  });
  it('Number 830 should throw err', () => {
    expect(function () { KaprekarsConstant(830); })
    .to.throw();
  });
  it('String input should throw err', () => {
    expect(function () { KaprekarsConstant("str"); })
    .to.throw();
  });
  it('Array input should throw err', () => {
    expect(function () { KaprekarsConstant([1234]); })
    .to.throw();
  });
  it('Float input should throw err', () => {
    expect(function () { KaprekarsConstant(12.34); })
    .to.throw();
  });
});
