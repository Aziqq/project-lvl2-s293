install:
	npm install

publish:
	npm publish

lint:
	npm run eslint .

test:
	npm test

watch:
	npm test -- --watch