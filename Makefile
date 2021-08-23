.PHONY: install, update, dev, preview

install:
	npm install
	npx simple-git-hooks

update:
	npx npm-check@latest -u

dev:
	npm run dev

preview:
	npm run build
	npm run preview

