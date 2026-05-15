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

## Deploy to a server (Hostinger VPS, with HTTPS)

The `docker-compose.yml` runs **two services**:
- `web` — the nginx container with the site (internal-only, no published ports)
- `caddy` — reverse proxy on `:80` / `:443`, terminates TLS, fetches a real Let's Encrypt cert automatically

The free Hostinger hostname (`srv844822.hstgr.cloud`) already resolves to the VPS IP, so Let's Encrypt issues a real cert with no DNS changes needed.

**Prereqs:**
- Docker + docker compose v2 installed
- TCP **80** and **443** open in the firewall (Hostinger panel → Firewall)

**First deploy:**

```sh
# SSH to the server, then:
git clone git@github.com:Sepnexus/vape-chadha.git
cd vape-chadha
docker compose up --build -d
```

That's it. Visit **https://srv844822.hstgr.cloud** — the cert provisions on the first request (takes ~15s), then it's instant after that.

**Verify:**

```sh
docker compose ps                                     # both services Up
curl -sI https://srv844822.hstgr.cloud/healthz | head -1   # → HTTP/2 200
docker compose logs caddy --tail=30                   # cert acquisition + traffic
```

**Updating the live site:**

```sh
cd vape-chadha
git pull
docker compose up --build -d   # rebuilds web image, restarts container
```

`restart: unless-stopped` + `HEALTHCHECK` mean the container self-heals on crash and on server reboot. Caddy's certs persist in the `caddy_data` named volume, so they survive container rebuilds.

### Bringing your own domain later

When you point `vapeshack.ca` (or whatever) at the server:

```sh
SITE_HOST=vapeshack.ca docker compose up -d
```

Caddy will fetch a fresh cert for the new hostname automatically.

### Bypass Caddy for local debugging

If you want to hit nginx directly on the server (skipping HTTPS), add a port mapping under `web` in `docker-compose.yml`:

```yaml
  web:
    ports:
      - "8080:80"
```

Then `curl http://localhost:8080/healthz` works.

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
