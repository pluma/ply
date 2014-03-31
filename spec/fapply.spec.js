/*global describe, it */
var expect = require('expect.js'),
  fapply = require('../').fapply;

describe('fapply(fn, args)', function() {
  it('is a function', function() {
    expect(fapply).to.be.a('function');
  });
  it('invokes the given function', function() {
    var called = false;
    fapply(function() {
      called = true;
    }, []);
    expect(called).to.equal(true);
  });
  it('passes the external context', function() {
    var self = {};
    fapply.call(self, function() {
      expect(this).to.equal(self);
    }, []);
  });
  it('passes the given arguments', function() {
    var args = ['a', 'b', 'c'];
    fapply(function(x, y, z) {
      expect([x, y, z]).to.eql(args);
    }, args);
  });
  it('returns the function\'s result', function() {
    var res = {};
    expect(fapply(function() {
      return res;
    }, [])).to.equal(res);
  });
});