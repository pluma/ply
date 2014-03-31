LICENSE_COMMENT="/*! ply 0.1.0 Original author Alan Plum <me@pluma.io>. Released into the Public Domain under the UNLICENSE. @preserve */"

cover: lint dist
	@./node_modules/.bin/istanbul cover -x "**/spec/**" \
		./node_modules/mocha/bin/_mocha --report lcov spec/ -- -R spec

coveralls:
	@rm -rf ./coverage
	@./node_modules/.bin/istanbul cover -x "**/spec/**" \
		./node_modules/mocha/bin/_mocha --report lcovonly spec/ -- -R spec && \
		cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js
	@rm -rf ./coverage

test: lint dist
	@./node_modules/.bin/mocha \
		--growl \
		--reporter spec \
		spec/*.spec.js

clean:
	@rm -f 	dist/*

dist/ply.js:
	@echo $(LICENSE_COMMENT) > dist/ply.js
	@cat src/ply.js >> dist/ply.js

dist/ply.globals.js:
	@echo $(LICENSE_COMMENT) > dist/ply.globals.js
	@echo "(function(root){\
	var require=function(key){return root[key];},\
	module={};" >> dist/ply.globals.js
	@cat src/ply.js >> dist/ply.globals.js
	@echo "root.ply = module.exports;\
	}(this));" >> dist/ply.globals.js

dist/ply.amd.js:
	@echo $(LICENSE_COMMENT) > dist/ply.amd.js
	@echo "define(function(require, exports, module) {" >> dist/ply.amd.js
	@cat src/ply.js >> dist/ply.amd.js
	@echo "return module.exports;});" >> dist/ply.amd.js

dist/ply.min.js: dist/ply.js
	@./node_modules/.bin/uglifyjs dist/ply.js --comments -m > dist/ply.min.js

dist/ply.globals.min.js: dist/ply.globals.js
	@./node_modules/.bin/uglifyjs dist/ply.globals.js --comments -m > dist/ply.globals.min.js

dist/ply.amd.min.js: dist/ply.amd.js
	@./node_modules/.bin/uglifyjs dist/ply.amd.js --comments > dist/ply.amd.min.js

dist: clean dist/ply.min.js dist/ply.globals.min.js dist/ply.amd.min.js

lint:
	@./node_modules/.bin/jshint src/ply.js spec
