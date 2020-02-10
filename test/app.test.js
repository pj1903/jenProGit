const { describe, it } = require('mocha');
const { expect } = require('chai');

const { startUp } = require('../app');

describe('Test Project', function () {
  it('Test isEven function with even values', function () {
    const n = 86;
    const res = startUp(n);
    expect(res).to.be.equal(true);
  });
  it('Test isEven function with odd values', function () {
    const n = 101;
    const res = startUp(n);
    expect(res).to.be.equal(false);
  });
});
