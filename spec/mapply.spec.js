/*global describe, it */
var expect = require('expect.js'),
  mapply = require('../').mapply;

describe('mapply(obj, name, args)', function() {
  it('is a function', function() {
    expect(mapply).to.be.a('function');
  });
  it('invokes the given method', function() {
    var called = false;
    mapply({
      foo: function() {
        called = true;
      }
    }, 'foo', []);
    expect(called).to.equal(true);
  });
  it('passes the given context', function() {
    var self = {
      foo: function() {
        expect(this).to.equal(self);
      }
    };
    mapply(self, 'foo', []);
  });
  it('passes the given arguments', function() {
    var args = ['a', 'b', 'c'];
    mapply({
      foo: function(x, y, z) {
        expect([x, y, z]).to.eql(args);
      }
    }, 'foo', args);
  });
  it('returns the function\'s result', function() {
    var res = {};
    expect(mapply({
      foo: function() {
        return res;
      }
    }, 'foo', [])).to.equal(res);
  });
});