// Vape Shack — store directory
// Coordinates are approximate (good enough for nearest-store calc within BC).
// Hours / phone / WhatsApp / Instagram default to the Victoria values
// until per-store contact details are provided.

window.STORES = [
  {
    id: 'victoria',
    name: 'Vape Shack Victoria',
    brand: 'Vape Shack',
    city: 'Victoria',
    region: 'BC',
    addressLine: '207 Menzies Street',
    address: '207 Menzies Street, Victoria, BC V8V 2G6',
    postal: 'V8V 2G6',
    lat: 48.4170,
    lng: -123.3661,
    phone: '+1 (778) 931-0879',
    phoneHref: 'tel:+17789310879',
    whatsapp: '17789310879',
    instagram: 'vapeshack.victoria',
    mapsUrl: 'https://maps.app.goo.gl/HVYNX5N6TFkRgdw97',
    embedQ: '207%20Menzies%20Street%2C%20Victoria%2C%20BC%20V8V%202G6',
    hours: [
      ['Sunday',    '8:00 AM – 11:00 PM'],
      ['Monday',    '8:00 AM – 11:00 PM'],
      ['Tuesday',   '8:00 AM – 11:00 PM'],
      ['Wednesday', '8:00 AM – 11:00 PM'],
      ['Thursday',  '8:00 AM – 11:00 PM'],
      ['Friday',    '8:00 AM – 12:00 AM'],
      ['Saturday',  '8:00 AM – 12:00 AM'],
    ],
    status: 'open',
    tagline: 'Our flagship — open late, downtown.',
  },
  {
    id: 'osoyoos',
    name: 'Vape Shack Osoyoos',
    brand: 'Vape Shack',
    city: 'Osoyoos',
    region: 'BC',
    addressLine: '8141 Main Street',
    address: '8141 Main Street, Osoyoos, BC V0H 1V0',
    postal: 'V0H 1V0',
    lat: 49.0327,
    lng: -119.4682,
    phone: '+1 (778) 931-0879',
    phoneHref: 'tel:+17789310879',
    whatsapp: '17789310879',
    instagram: 'vapeshack.victoria',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=8141+Main+Street+Osoyoos+BC+V0H+1V0',
    embedQ: '8141%20Main%20Street%2C%20Osoyoos%2C%20BC%20V0H%201V0',
    hours: [
      ['Sunday',    '8:00 AM – 11:00 PM'],
      ['Monday',    '8:00 AM – 11:00 PM'],
      ['Tuesday',   '8:00 AM – 11:00 PM'],
      ['Wednesday', '8:00 AM – 11:00 PM'],
      ['Thursday',  '8:00 AM – 11:00 PM'],
      ['Friday',    '8:00 AM – 12:00 AM'],
      ['Saturday',  '8:00 AM – 12:00 AM'],
    ],
    status: 'open',
    tagline: 'Right on Main Street in the heart of the South Okanagan.',
  },
  {
    id: 'princeton',
    name: 'Vape Hub Princeton',
    brand: 'Vape Hub',
    city: 'Princeton',
    region: 'BC',
    addressLine: '133 Vermilion Ave',
    address: '133 Vermilion Ave, Princeton, BC V0X 1W0',
    postal: 'V0X 1W0',
    lat: 49.4607,
    lng: -120.5085,
    phone: '+1 (778) 931-0879',
    phoneHref: 'tel:+17789310879',
    whatsapp: '17789310879',
    instagram: 'vapeshack.victoria',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=133+Vermilion+Ave+Princeton+BC+V0X+1W0',
    embedQ: '133%20Vermilion%20Ave%2C%20Princeton%2C%20BC%20V0X%201W0',
    hours: [
      ['Sunday',    '8:00 AM – 11:00 PM'],
      ['Monday',    '8:00 AM – 11:00 PM'],
      ['Tuesday',   '8:00 AM – 11:00 PM'],
      ['Wednesday', '8:00 AM – 11:00 PM'],
      ['Thursday',  '8:00 AM – 11:00 PM'],
      ['Friday',    '8:00 AM – 12:00 AM'],
      ['Saturday',  '8:00 AM – 12:00 AM'],
    ],
    status: 'open',
    tagline: 'A short walk off the highway — your Similkameen stop.',
  },
  {
    id: 'peachland',
    name: 'Peachland Vape',
    brand: 'Peachland Vape',
    city: 'Peachland',
    region: 'BC',
    addressLine: '5500 Clement Crescent, Unit 10',
    address: '5500 Clement Crescent, Unit 10, Peachland, BC V0H 1X5',
    postal: 'V0H 1X5',
    lat: 49.7795,
    lng: -119.7286,
    phone: '+1 (778) 931-0879',
    phoneHref: 'tel:+17789310879',
    whatsapp: '17789310879',
    instagram: 'vapeshack.victoria',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=5500+Clement+Crescent+Unit+10+Peachland+BC+V0H+1X5',
    embedQ: '5500%20Clement%20Crescent%20Unit%2010%2C%20Peachland%2C%20BC%20V0H%201X5',
    hours: [
      ['Sunday',    '8:00 AM – 11:00 PM'],
      ['Monday',    '8:00 AM – 11:00 PM'],
      ['Tuesday',   '8:00 AM – 11:00 PM'],
      ['Wednesday', '8:00 AM – 11:00 PM'],
      ['Thursday',  '8:00 AM – 11:00 PM'],
      ['Friday',    '8:00 AM – 12:00 AM'],
      ['Saturday',  '8:00 AM – 12:00 AM'],
    ],
    status: 'open',
    tagline: 'Lakeside, easy parking, friendly staff.',
  },
  {
    id: 'sidney',
    name: 'Sidney Vape',
    brand: 'Sidney Vape',
    city: 'Sidney',
    region: 'BC',
    addressLine: '2310 Beacon Ave',
    address: '2310 Beacon Ave, Sidney, BC V8L 1X2',
    postal: 'V8L 1X2',
    lat: 48.6510,
    lng: -123.3987,
    phone: '+1 (778) 931-0879',
    phoneHref: 'tel:+17789310879',
    whatsapp: '17789310879',
    instagram: 'vapeshack.victoria',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=2310+Beacon+Ave+Sidney+BC+V8L+1X2',
    embedQ: '2310%20Beacon%20Ave%2C%20Sidney%2C%20BC%20V8L%201X2',
    hours: [
      ['Sunday',    '8:00 AM – 11:00 PM'],
      ['Monday',    '8:00 AM – 11:00 PM'],
      ['Tuesday',   '8:00 AM – 11:00 PM'],
      ['Wednesday', '8:00 AM – 11:00 PM'],
      ['Thursday',  '8:00 AM – 11:00 PM'],
      ['Friday',    '8:00 AM – 12:00 AM'],
      ['Saturday',  '8:00 AM – 12:00 AM'],
    ],
    status: 'coming-soon',
    tagline: 'Opening soon on Beacon Ave.',
  },
];

window.getStoreById = function (id) {
  return window.STORES.find(s => s.id === id);
};

window.haversineKm = function (lat1, lng1, lat2, lng2) {
  const R = 6371;
  const toRad = d => d * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2
          + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
};

window.findNearestStore = function (lat, lng) {
  const candidates = window.STORES.filter(s => s.status === 'open');
  if (candidates.length === 0) return window.STORES[0];
  if (lat == null || lng == null) return candidates[0];
  let best = candidates[0];
  let bestD = Infinity;
  for (const s of candidates) {
    const d = window.haversineKm(lat, lng, s.lat, s.lng);
    if (d < bestD) { bestD = d; best = s; }
  }
  best._distanceKm = bestD;
  return best;
};

// IP geolocation with timeout + sessionStorage caching.
// Resolves with { lat, lng, city } or null on failure.
window.detectLocation = async function () {
  const CACHE_KEY = 'vs_geo_v1';
  try {
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (parsed && parsed.lat) return parsed;
    }
  } catch {}

  try {
    const ctrl = new AbortController();
    const timeoutId = setTimeout(() => ctrl.abort(), 3500);
    const res = await fetch('https://ipapi.co/json/', { signal: ctrl.signal });
    clearTimeout(timeoutId);
    if (!res.ok) throw new Error('ipapi http ' + res.status);
    const data = await res.json();
    if (data && data.latitude != null && data.longitude != null) {
      const out = { lat: data.latitude, lng: data.longitude, city: data.city || null, region: data.region || null };
      try { sessionStorage.setItem(CACHE_KEY, JSON.stringify(out)); } catch {}
      return out;
    }
  } catch (e) {
    // network / abort / rate-limited — fall through
  }
  return null;
};
