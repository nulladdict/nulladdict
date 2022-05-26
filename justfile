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
  npx wrangler pages dev .svelte-kit/cloudflare

check:
  npm run check

fmt:
  npm run format

