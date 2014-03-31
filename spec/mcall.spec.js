/*global describe, it */
var expect = require('expect.js'),
  mcall = require('../').mcall;

describe('mcall(obj, name, args...)', function() {
  it('is a function', function() {
    expect(mcall).to.be.a('function');
  });
  it('invokes the given method', function() {
    var called = false;
    mcall({
      foo: function() {
        called = true;
      }
    }, 'foo');
    expect(called).to.equal(true);
  });
  it('passes the given context', function() {
    var self = {
      foo: function() {
        expect(this).to.equal(self);
      }
    };
    mcall(self, 'foo');
  });
  it('passes the given arguments', function() {
    var args = ['a', 'b', 'c'];
    mcall({
      foo: function(x, y, z) {
        expect([x, y, z]).to.eql(args);
      }
    }, 'foo', args[0], args[1], args[2]);
  });
  it('returns the function\'s result', function() {
    var res = {};
    expect(mcall({
      foo: function() {
        return res;
      }
    }, 'foo')).to.equal(res);
  });
});