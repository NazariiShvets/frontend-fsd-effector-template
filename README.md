### Deploy Note

Set env according to .env.example

```
yarn

yarn build
```

Host static from /build folder. All GET requests for html resulted as 404 should be redirected to index.html since it's SPA.
