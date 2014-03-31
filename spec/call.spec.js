/*global describe, it */
var expect = require('expect.js'),
  call = require('../').call;

describe('call(fn, self, args...)', function() {
  it('is a function', function() {
    expect(call).to.be.a('function');
  });
  it('invokes the given function', function() {
    var called = false;
    call(function() {
      called = true;
    }, null);
    expect(called).to.equal(true);
  });
  it('passes the given context', function() {
    var self = {};
    call(function() {
      expect(this).to.equal(self);
    }, self);
  });
  it('passes the given arguments', function() {
    var args = ['a', 'b', 'c'];
    call(function(x, y, z) {
      expect([x, y, z]).to.eql(args);
    }, null, args[0], args[1], args[2]);
  });
  it('returns the function\'s result', function() {
    var res = {};
    expect(call(function() {
      return res;
    }, null)).to.equal(res);
  });
});