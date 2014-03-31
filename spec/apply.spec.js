/*global describe, it */
var expect = require('expect.js'),
  apply = require('../').apply;

describe('apply(fn, self, args)', function() {
  it('is a function', function() {
    expect(apply).to.be.a('function');
  });
  it('invokes the given function', function() {
    var called = false;
    apply(function() {
      called = true;
    }, null, []);
    expect(called).to.equal(true);
  });
  it('passes the given context', function() {
    var self = {};
    apply(function() {
      expect(this).to.equal(self);
    }, self, []);
  });
  it('passes the given arguments', function() {
    var args = ['a', 'b', 'c'];
    apply(function(x, y, z) {
      expect([x, y, z]).to.eql(args);
    }, null, args);
  });
  it('returns the function\'s result', function() {
    var res = {};
    expect(apply(function() {
      return res;
    }, null, [])).to.equal(res);
  });
});