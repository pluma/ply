function slice(arr, i) {
  return Array.prototype.slice.call(arr, i);
}

exports.apply = apply;
exports.call = call;
exports.fapply = fapply;
exports.fcall = fcall;
exports.mapply = mapply;
exports.mcall = mcall;

function apply(fn, self, args) {
  return fn.apply(self, args);
}

function call(fn, self) {
  return apply(fn, self, slice(arguments, 2));
}

function fapply(fn, args) {
  return apply(fn, this, args);
}

function fcall(fn) {
  return apply(fn, this, slice(arguments, 1));
}

function mapply(obj, name, args) {
  return apply(obj[name], obj, args);
}

function mcall(obj, name) {
  return mapply(obj, name, slice(arguments, 2));
}