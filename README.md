# Synopsis

**ply** is a collection of wrappers around `Function.prototype.apply`.

[![stability 5 - locked](http://b.repl.ca/v1/stability-5_--_locked-blue.png)
](http://nodejs.org/api/documentation.html#documentation_stability_index) [![license - Unlicense](http://b.repl.ca/v1/license-Unlicense-lightgrey.png)](http://unlicense.org/) [![Flattr this](https://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=pluma&url=https://github.com/pluma/ply)

[![browser support](https://ci.testling.com/pluma/ply.png)](https://ci.testling.com/pluma/ply)

[![Build Status](https://travis-ci.org/pluma/ply.png?branch=master)](https://travis-ci.org/pluma/ply) [![Coverage Status](https://coveralls.io/repos/pluma/ply/badge.png?branch=master)](https://coveralls.io/r/pluma/ply?branch=master) [![Dependencies](https://david-dm.org/pluma/ply.png?theme=shields.io)](https://david-dm.org/pluma/ply)

# Why?

It's trivial to implement, but in order to keep code DRY (and avoid silly mistakes) it makes sense to define this function only once per project. This library is the logical consequence of that.

# Install

## Node.js

### With NPM

```sh
npm install ply
```

### From source

```sh
git clone https://github.com/pluma/ply.git
cd ply
npm install
make
```

## Browser

### With component

```sh
component install pluma/ply
```

[Learn more about component](https://github.com/component/component).

### With bower

```sh
bower install ply
```

[Learn more about bower](https://github.com/twitter/bower).

### With a CommonJS module loader

Download the [latest minified CommonJS release](https://raw.github.com/pluma/ply/master/dist/ply.min.js) and add it to your project.

[Learn more about CommonJS modules](http://wiki.commonjs.org/wiki/Modules/1.1).

### With an AMD module loader

Download the [latest minified AMD release](https://raw.github.com/pluma/ply/master/dist/ply.amd.min.js) and add it to your project.

[Learn more about AMD modules](http://requirejs.org/docs/whyamd.html).

### As a standalone library

Download the [latest minified standalone release](https://raw.github.com/pluma/ply/master/dist/ply.globals.min.js) and add it to your project.

```html
<script src="/your/js/path/ply.globals.min.js"></script>
```

This makes the `ply` module available in the global namespace.

# Basic usage example

```javascript
var mcall = require('ply').mcall;

mcall(console, 'log', 'Hello', 'World'); // 'Hello' 'World'
```

# API

## apply(fn:Function, self:Object, args:Array)

Equivalent to the following:

```javascript
fn.apply(self, args);
```

## call(fn:Function, self:Object, args...)

Equivalent to the following:

```javascript
fn.call(self, args...);
```

## fapply(fn:Function, args:Array)

Equivalent to the following:

```javascript
fn.apply(this, args);
```

## fcall(fn:Function, args...)

Equivalent to the following:

```javascript
fn.call(this, args...);
```

## mapply(obj:Object, name:String, args:Array)

Equivalent to the following:

```javascript
obj[name].apply(obj, args);
```

## mcall(obj:Object, name:String, args...)

Equivalent to the following:

```javascript
obj[name].call(obj, args...);
```

# Unlicense

This is free and unencumbered public domain software. For more information, see http://unlicense.org/ or the accompanying [UNLICENSE](https://github.com/pluma/ply/blob/master/UNLICENSE) file.
