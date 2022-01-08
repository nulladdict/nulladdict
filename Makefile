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

.PHONY: build
build:
	npm run build

.PHONY: preview
preview: build
	npm run preview

.PHONY: check
check:
	npm run check

.PHONY: fmt
fmt:
	npm run format

