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
    email: 'hello@vapeshacks.com',
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
    photo: 'assets/photos/victoria.jpg',
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
    phone: '+1 (866) 827-0939',
    phoneHref: 'tel:+18668270939',
    whatsapp: '18668270939',
    instagram: 'vapeshack_osoyoos',
    email: 'vapeshackosoyoos@gmail.com',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=8141+Main+Street+Osoyoos+BC+V0H+1V0',
    embedQ: '8141%20Main%20Street%2C%20Osoyoos%2C%20BC%20V0H%201V0',
    hours: [
      ['Sunday',    '8:00 AM – 9:00 PM'],
      ['Monday',    '8:00 AM – 9:00 PM'],
      ['Tuesday',   '8:00 AM – 9:00 PM'],
      ['Wednesday', '8:00 AM – 9:00 PM'],
      ['Thursday',  '8:00 AM – 9:00 PM'],
      ['Friday',    '8:00 AM – 10:00 PM'],
      ['Saturday',  '8:00 AM – 9:00 PM'],
    ],
    status: 'open',
    tagline: 'Right on Main Street in the heart of the South Okanagan.',
    photo: 'assets/photos/osoyoos.jpg',
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
    phone: '+1 (877) 290-3308',
    phoneHref: 'tel:+18772903308',
    whatsapp: '18772903308',
    instagram: null,
    email: 'vapehubprinceton@gmail.com',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=133+Vermilion+Ave+Princeton+BC+V0X+1W0',
    embedQ: '133%20Vermilion%20Ave%2C%20Princeton%2C%20BC%20V0X%201W0',
    hours: [
      ['Sunday',    '8:00 AM – 9:00 PM'],
      ['Monday',    '8:00 AM – 9:00 PM'],
      ['Tuesday',   '8:00 AM – 9:00 PM'],
      ['Wednesday', '8:00 AM – 9:00 PM'],
      ['Thursday',  '8:00 AM – 9:00 PM'],
      ['Friday',    '8:00 AM – 9:00 PM'],
      ['Saturday',  '8:00 AM – 9:00 PM'],
    ],
    status: 'open',
    tagline: 'Your one-stop shop in the Similkameen — devices, e-juice and more.',
    photo: 'assets/photos/princeton.jpg',
  },
  {
    id: 'peachland',
    name: 'Peachland Vape',
    brand: 'Peachland Vape',
    city: 'Peachland',
    region: 'BC',
    addressLine: '5500 Clements Cres, Unit 10',
    address: '5500 Clements Cres, Unit 10, Peachland, BC V0H 1X5',
    postal: 'V0H 1X5',
    lat: 49.7795,
    lng: -119.7286,
    phone: '+1 (250) 767-2760',
    phoneHref: 'tel:+12507672760',
    whatsapp: '12507672760',
    instagram: 'peachland_vape',
    email: 'peachlandvape@gmail.com',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=5500+Clements+Cres+Unit+10+Peachland+BC+V0H+1X5',
    embedQ: '5500%20Clements%20Cres%20Unit%2010%2C%20Peachland%2C%20BC%20V0H%201X5',
    hours: [
      ['Sunday',    '9:00 AM – 8:00 PM'],
      ['Monday',    '7:00 AM – 8:00 PM'],
      ['Tuesday',   '7:00 AM – 8:00 PM'],
      ['Wednesday', '7:00 AM – 8:00 PM'],
      ['Thursday',  '7:00 AM – 8:00 PM'],
      ['Friday',    '7:00 AM – 8:00 PM'],
      ['Saturday',  '9:00 AM – 8:00 PM'],
    ],
    status: 'open',
    tagline: 'Lakeside, easy parking, friendly staff.',
    photo: null,
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
    instagram: null,
    email: 'sidneyvapes00@gmail.com',
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
    photo: null,
  },
];

window.getStoreById = function (id) {
  return window.STORES.find(s => s.id === id);
};

// ============ LIVE OPEN / CLOSED STATUS ============
// All stores are in BC (Pacific Time). We evaluate "open right now"
// in America/Vancouver so the result is correct regardless of where
// the visitor is browsing from.
const DAY_NAMES = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function parseClock(str) {
  // "8:00 AM" / "12:00 AM" / "11:00 PM" -> minutes since midnight
  const m = String(str).trim().match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (!m) return null;
  let h = parseInt(m[1], 10) % 12;
  if (/PM/i.test(m[3])) h += 12;
  return h * 60 + parseInt(m[2], 10);
}

window.getStoreStatus = function (store) {
  if (store.status === 'coming-soon') {
    return { state: 'soon', label: 'Coming Soon', detail: 'Opening soon' };
  }
  let dayIdx, nowMin;
  try {
    const parts = {};
    new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Vancouver', hour12: false,
      weekday: 'long', hour: '2-digit', minute: '2-digit'
    }).formatToParts(new Date()).forEach(p => { parts[p.type] = p.value; });
    dayIdx = DAY_NAMES.indexOf(parts.weekday);
    let hr = parseInt(parts.hour, 10);
    if (hr === 24) hr = 0;
    nowMin = hr * 60 + parseInt(parts.minute, 10);
  } catch (e) {
    return { state: 'unknown', label: '', detail: '' };
  }
  if (dayIdx < 0 || !store.hours || !store.hours[dayIdx]) {
    return { state: 'unknown', label: '', detail: '' };
  }

  const todayRange = store.hours[dayIdx][1];
  const seg = todayRange.split(/[–-]/);
  let openMin = parseClock(seg[0]);
  let closeMin = parseClock(seg[1]);
  if (openMin == null || closeMin == null) {
    return { state: 'unknown', label: '', detail: '' };
  }
  if (closeMin === 0) closeMin = 1440;            // "12:00 AM" close = midnight
  if (closeMin <= openMin) closeMin += 1440;       // crosses midnight

  const tidy = (t) => t.trim().replace(':00', '').replace(/\s/g, ' ');

  if (nowMin >= openMin && nowMin < closeMin) {
    return { state: 'open', label: 'Open now', detail: 'Closes ' + tidy(seg[1]) };
  }
  // Closed — find the next opening
  if (nowMin < openMin) {
    return { state: 'closed', label: 'Closed', detail: 'Opens ' + tidy(seg[0]) + ' today' };
  }
  // After close — next day that has hours
  for (let i = 1; i <= 7; i++) {
    const d = (dayIdx + i) % 7;
    if (store.hours[d]) {
      const nextOpen = tidy(store.hours[d][1].split(/[–-]/)[0]);
      const when = i === 1 ? 'tomorrow' : store.hours[d][0];
      return { state: 'closed', label: 'Closed', detail: 'Opens ' + nextOpen + ' ' + when };
    }
  }
  return { state: 'closed', label: 'Closed', detail: '' };
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
