install:
  npm install
  npx simple-git-hooks

update:
  npx npm-check@latest -u
  npm update

dev *args:
  npm run dev {{args}}

build:
  npm run build

preview: build
  npm run preview

check:
  npm run check

fmt:
  npm run format

