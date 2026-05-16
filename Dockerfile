FROM nginx:1.27-alpine

LABEL org.opencontainers.image.title="Vape Shack Victoria"
LABEL org.opencontainers.image.source="https://github.com/Sepnexus/vape-chadha"

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html
COPY store.html /usr/share/nginx/html/store.html
COPY assets /usr/share/nginx/html/assets

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
