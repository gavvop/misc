# nginx

## Serve an Angular SPA

Server block with gzip compression and fallback to `index.html` for client-side routing:
[configs/nginx/angular-spa.conf](../configs/nginx/angular-spa.conf).

Typical use in a Docker image:

```dockerfile
FROM nginx:alpine
COPY angular-spa.conf /etc/nginx/conf.d/default.conf
COPY dist/<project>/ /usr/share/nginx/html/
```
