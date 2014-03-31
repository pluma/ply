/*global describe, it */
var expect = require('expect.js'),
  fcall = require('../').fcall;

describe('fcall(fn, args...)', function() {
  it('is a function', function() {
    expect(fcall).to.be.a('function');
  });
  it('invokes the given function', function() {
    var called = false;
    fcall(function() {
      called = true;
    });
    expect(called).to.equal(true);
  });
  it('passes the external context', function() {
    var self = {};
    fcall.call(self, function() {
      expect(this).to.equal(self);
    });
  });
  it('passes the given arguments', function() {
    var args = ['a', 'b', 'c'];
    fcall(function(x, y, z) {
      expect([x, y, z]).to.eql(args);
    }, args[0], args[1], args[2]);
  });
  it('returns the function\'s result', function() {
    var res = {};
    expect(fcall(function() {
      return res;
    })).to.equal(res);
  });
});