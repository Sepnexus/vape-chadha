# Vape Shack Victoria

Single-page marketing site for **Vape Shack** — 207 Menzies Street, Victoria BC.

Static HTML/CSS/JS (no build step). Served by nginx in a container.

---

## Stack

- Plain HTML + inline CSS / JS — no bundler, no framework
- Google Fonts (loaded over CDN)
- nginx 1.27-alpine (production server)
- Docker / docker-compose for deploy

## Run locally

Open `index.html` directly in a browser, **or** with Docker:

```sh
docker compose up --build
# → http://localhost:8080
```

Change the host port via `HOST_PORT` env var:

```sh
HOST_PORT=3000 docker compose up --build -d
```

## Project layout

```
.
├── index.html          # the entire site (inline CSS + JS)
├── Dockerfile          # nginx:alpine image
├── nginx.conf          # gzip, caching, security headers, /healthz
├── docker-compose.yml  # single-service compose file
├── .dockerignore
├── .gitignore
└── README.md
```

## Deploy to a server

Anywhere with Docker + docker compose v2.

```sh
# On the server:
git clone git@github.com:Sepnexus/vape-chadha.git
cd vape-chadha
docker compose up --build -d

# Health check
curl http://localhost:8080/healthz   # → "ok"
```

Put it behind nginx / Caddy / Cloudflare on port 80/443 and forward to `localhost:8080`. Example Caddy config:

```
vapeshack.example.com {
  reverse_proxy localhost:8080
}
```

### Updating the live site

```sh
git pull
docker compose up --build -d
```

The container has a `HEALTHCHECK` and `restart: unless-stopped`, so it self-heals on crash and on reboot.

## Editing content

Everything is in `index.html`. Key spots:

| Section          | What to edit                                          |
|------------------|-------------------------------------------------------|
| Store info       | Address / hours / phone — search for `207 Menzies`    |
| Instagram        | Search for `vapeshack.victoria`                       |
| WhatsApp / phone | Search for `17789310879`                              |
| Map embed        | `<iframe>` inside `.locations` section                |
| Reviews          | `.reviews-track` — static array of `<div class="review">` cards. Replace with a Google Places API feed when ready (see below). |

## TODO

- **Google reviews integration** — currently static. Wire up Google Places "Place Details" API via a small serverless function and replace the `.reviews-track` markup with a fetch on load. Cache 12h.
- **Contact form backend** — submit currently opens a pre-filled WhatsApp chat. Wire to Formspree / a mail-relay endpoint when needed.
- **Favicon / OG image** — add `/favicon.ico` and `og:image` meta.
