/*global describe, it */
var expect = require('expect.js'),
  rewire = require('rewire'),
  slice = rewire('../').__get__('slice'),
  asArgs = function() {return arguments;};

describe('slice(arr, i)', function() {
  it('is a function', function() {
    expect(slice).to.be.a('function');
  });
  it('applies Array.prototype.slice on the object', function() {
    var arr = [0, 1, 2, 3, 4];
    expect(slice(arr, 0)).to.eql(arr.slice(0));
    expect(slice(arr, 2)).to.eql(arr.slice(2));
    expect(slice(arr)).to.eql(arr.slice());
    var args = asArgs(0, 1, 2, 3, 4);
    expect(slice(args, 0)).to.eql(arr.slice(0));
    expect(slice(args, 2)).to.eql(arr.slice(2));
    expect(slice(args)).to.eql(arr.slice());
  });
});