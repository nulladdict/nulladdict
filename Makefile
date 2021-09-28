.PHONY: dev, install, update, preview

dev:
	npm run dev

install:
	npm install
	npx simple-git-hooks

update:
	npx npm-check@latest -u

preview:
	npm run build
	npm run preview

