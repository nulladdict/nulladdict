.PHONY: install
install:
	npm install
	npx simple-git-hooks

.PHONY: update
update:
	npx npm-check@latest -u

.PHONY: dev
dev:
	npm run dev

.PHONY: preview
preview:
	npm run build
	npm run preview

.PHONY: fmt
fmt:
	npm run format

