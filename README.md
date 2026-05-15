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

## Deploy to the Hostinger VPS (Traefik + vapeshacks.com)

The VPS already runs `root-traefik-1` (the reverse proxy) on the `root_default` Docker network, with other apps like `n8n.srv844822.hstgr.cloud` already routed through it. This compose file plugs in alongside them — no ports published, no other containers restart, Traefik provisions a Let's Encrypt cert automatically.

**Domain:** `https://vapeshacks.com` (and `www.` redirects to it)

### Step 1 — point DNS at the VPS

Find the VPS public IP:

```sh
curl -s ifconfig.me        # run on the VPS
```

At the registrar where `vapeshacks.com` was bought, add:

| Type | Name | Value |
|------|------|-------|
| A    | `@`  | `<VPS_IP>` |
| A    | `www`| `<VPS_IP>` |

DNS propagation usually takes a few minutes to a couple of hours. Check with:

```sh
dig vapeshacks.com +short      # should return <VPS_IP>
dig www.vapeshacks.com +short  # should return <VPS_IP>
```

### Step 2 — deploy

```sh
# SSH to the VPS, then:
git clone git@github.com:Sepnexus/vape-chadha.git
cd vape-chadha
docker compose up --build -d
```

Once DNS resolves, Traefik fetches the cert on the first request (~15s). Then:

```sh
curl -I https://vapeshacks.com/healthz   # → HTTP/2 200
```

Open `https://vapeshacks.com` in a browser.

### Updating

```sh
cd vape-chadha
git pull
docker compose up --build -d
```

`--build` is required for HTML/CSS/JS changes — they're baked into the image. Traefik keeps routing during the brief container restart.

### Rollback

```sh
cd vape-chadha
docker compose down
```

Stops only the `vape-shack` container — Traefik, Postgres, n8n, webhook-buffer all keep running.

### Troubleshooting

**`network root_default not found`**
The Traefik network is named differently on the host. Run `docker network ls` and edit `docker-compose.yml` to use the actual name.

**Traefik returns 404**
The container needs to be on the network Traefik watches:
```sh
docker inspect vape-shack --format '{{range $k,$v := .NetworkSettings.Networks}}{{$k}} {{end}}'
# → root_default
```

**SSL cert never appears (`curl` cert error)**
Traefik gets certs via TLS challenge from Let's Encrypt. Confirm the DNS:
```sh
dig vape.srv844822.hstgr.cloud +short
```
should return the VPS public IP. First-time issuance can take up to 60s.

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
