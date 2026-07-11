(function () {
  const cv = document.querySelector('[data-petals]');
  if (!cv) return;
  const ctx = cv.getContext('2d');
  let w, h, dpr;
  const resize = () => { dpr = Math.min(devicePixelRatio || 1, 2); w = cv.width = innerWidth * dpr; h = cv.height = innerHeight * dpr; };
  resize(); addEventListener('resize', resize);
  const mouse = { x: -9999, y: -9999, t: -9999, vx: 0, vy: 0 };
  addEventListener('pointermove', e => {
    const rawX = e.clientX * dpr, rawY = e.clientY * dpr;
    const dx = rawX - mouse.x, dy = rawY - mouse.y;
    mouse.vx = mouse.vx * 0.7 + dx * 0.3; mouse.vy = mouse.vy * 0.7 + dy * 0.3;
    mouse.x = rawX; mouse.y = rawY; mouse.t = performance.now();
  });
  const N = 20, P = [];
  for (let i = 0; i < N; i++) P.push({
    x: Math.random() * w * 0.6, y: Math.random() * h * 1.5 - h * 0.5,
    s: 14 + Math.random() * 13, vx: 0.15 + Math.random() * 0.25, vy: 0.3 + Math.random() * 0.3,
    rot: Math.random() * 6.28, spin: (Math.random() - .5) * 0.007,
    flut: Math.random() * 6.28, flutSpd: 0.012 + Math.random() * 0.018, phase: Math.random() * 6.28,
    tint: Math.random() * 0.12,
    kind: Math.random() < 0.78 ? 'petal' : 'stem', curl: Math.random() < 0.5 ? -1 : 1,
    dark: 0, darkRate: 0.02 + Math.random() * 0.035,
    len: 0.85 + Math.random() * 0.45, bend: 0.55 + Math.random() * 1.15, wid: 0.55 + Math.random() * 0.35,
    waveAmp: 0.55 + Math.random() * 1.1, waveFreq: 4 + Math.floor(Math.random() * 4), tipCurl: Math.pow(Math.random(), 1.5) * 1.15
  });
  const petal = (ctx, s, tint, dark, kind, curl, shp) => {
    shp = shp || { len: 1, bend: 1, wid: 1, waveAmp: 1, waveFreq: 6, tipCurl: 0 };
    const g = ctx.createLinearGradient(0, -s, 0, s * 0.4);
    let stroke, fillDim;
    if (dark) {
      g.addColorStop(0, 'rgba(6,6,8,0.92)'); g.addColorStop(0.55, 'rgba(22,20,26,0.95)'); g.addColorStop(1, 'rgba(2,2,4,0.5)');
      stroke = 'rgba(255,255,255,0.22)'; fillDim = 'rgba(15,14,17,0.9)';
    } else {
      g.addColorStop(0, 'rgba(255,' + (255 - tint * 40) + ',' + (255 - tint * 30) + ',0.92)');
      g.addColorStop(0.55, 'rgba(255,' + (252 - tint * 30) + ',' + (253 - tint * 20) + ',0.97)');
      g.addColorStop(1, 'rgba(240,' + (232 - tint * 30) + ',' + (240 - tint * 20) + ',0.45)');
      stroke = 'rgba(210,190,215,0.45)'; fillDim = 'rgba(255,255,255,0.85)';
    }
    if (kind === 'stem') {
      const { len, bend, waveAmp } = shp, baseL = s * 0.95 * len;
      const p0 = [0, baseL], p1 = [curl * s * 0.25 * bend, s * 0.2], p2 = [curl * s * 0.6 * bend, -s * 0.5 * len], p3 = [curl * s * 0.4 * bend, -s * 1.15 * len];
      const bez = (a, b, c, d, tt) => { const m = 1 - tt, x = m * m * m, y = 3 * m * m * tt, z = 3 * m * tt * tt, q = tt * tt * tt; return [x * a[0] + y * b[0] + z * c[0] + q * d[0], x * a[1] + y * b[1] + z * c[1] + q * d[1]]; };
      const Ns = 20, spinePts = [];
      for (let i = 0; i <= Ns; i++) {
        const tt = i / Ns, [bx, by] = bez(p0, p1, p2, p3, tt); let nx = 1, ny = 0;
        if (tt > 0.01 && tt < 0.99) { const prev = bez(p0, p1, p2, p3, tt - 0.01), dx = bx - prev[0], dy = by - prev[1], dl = Math.hypot(dx, dy) || 1; nx = -(dy / dl); ny = dx / dl; }
        const env = Math.sin(tt * Math.PI), ripple = Math.sin(tt * Math.PI * 2.5) * s * 0.015 * waveAmp * env;
        spinePts.push([bx + nx * ripple, by + ny * ripple]);
      }
      ctx.strokeStyle = fillDim; ctx.lineWidth = Math.max(0.5, s * 0.03); ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(spinePts[0][0], spinePts[0][1]); for (let i = 1; i <= Ns; i++) ctx.lineTo(spinePts[i][0], spinePts[i][1]); ctx.stroke();
      ctx.strokeStyle = stroke; ctx.lineWidth = Math.max(0.2, s * 0.01); ctx.beginPath(); ctx.moveTo(spinePts[0][0], spinePts[0][1]); for (let i = 1; i <= Ns; i++) ctx.lineTo(spinePts[i][0], spinePts[i][1]); ctx.stroke();
      const lp = spinePts[Ns], pp = spinePts[Ns - 1], angle = Math.atan2(lp[1] - pp[1], lp[0] - pp[0]) + Math.PI / 2;
      ctx.fillStyle = g; ctx.beginPath(); ctx.save(); ctx.translate(lp[0], lp[1]); ctx.rotate(angle); ctx.ellipse(0, -s * 0.03, s * 0.05, s * 0.09, 0, 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = stroke; ctx.lineWidth = 0.5; ctx.stroke(); ctx.restore();
      return;
    }
    const { len, bend, wid, waveAmp, waveFreq, tipCurl = 0 } = shp;
    const bez = (a, b, c, d, tt) => { const m = 1 - tt, x = m * m * m, y = 3 * m * m * tt, z = 3 * m * tt * tt, q = tt * tt * tt; return [x * a[0] + y * b[0] + z * c[0] + q * d[0], x * a[1] + y * b[1] + z * c[1] + q * d[1]]; };
    const p0 = [0, s * len], p1 = [curl * s * 0.28 * bend, s * len * 0.35], p2 = [curl * s * 0.5 * bend, -s * len * 0.5], p3 = [curl * s * 0.22 * bend, -s * len * 1.08];
    const NpC = 28, SP = [], base = []; for (let i = 0; i <= NpC; i++) base.push(bez(p0, p1, p2, p3, i / NpC)); SP.push(base[0].slice()); let ang = 0;
    for (let i = 1; i <= NpC; i++) { const tt = i / NpC, dx = base[i][0] - base[i - 1][0], dy = base[i][1] - base[i - 1][1], tipT = Math.max(0, (tt - 0.5) / 0.5); ang += -curl * Math.pow(tipT, 1.7) * tipCurl * 0.55; const ca = Math.cos(ang), sa = Math.sin(ang); SP.push([SP[i - 1][0] + dx * ca - dy * sa, SP[i - 1][1] + dx * sa + dy * ca]); }
    const spine = tt => { const f = Math.min(Math.max(tt, 0), 1) * NpC, i = Math.floor(f), fr = f - i; if (i >= NpC) return SP[NpC]; const a = SP[i], b = SP[i + 1]; return [a[0] + (b[0] - a[0]) * fr, a[1] + (b[1] - a[1]) * fr]; };
    const hwMax = s * 0.3 * wid, halfW = tt => { let hv = hwMax * Math.pow(Math.sin(Math.PI * Math.min(Math.max(tt, 0.02), 0.99)), 0.62); if (tt > 0.82) hv *= 1 - ((tt - 0.82) / 0.18) * 0.85; if (tt < 0.12) hv *= 0.55 + (tt / 0.12) * 0.45; return Math.max(hv, s * 0.012); };
    const Np = 26, pts = [];
    for (let i = 0; i <= Np; i++) { const tt = i / Np, [x, y] = spine(tt), [xa, ya] = spine(Math.max(0, tt - 0.01)), [xb, yb] = spine(Math.min(1, tt + 0.01)); let nx = -(yb - ya), ny = xb - xa; const nl = Math.hypot(nx, ny) || 1; nx /= nl; ny /= nl; const env = Math.sin(tt * Math.PI), ripple = Math.sin(tt * waveFreq * Math.PI * 2) * hwMax * 0.14 * waveAmp * env; pts.push([x, y, nx, ny, halfW(tt) + ripple]); }
    ctx.fillStyle = g; ctx.beginPath(); for (let i = 0; i <= Np; i++) { const [x, y, nx, ny, hw] = pts[i], px = x + nx * hw, py = y + ny * hw; if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py); } for (let i = Np; i >= 0; i--) { const [x, y, nx, ny, hw] = pts[i]; ctx.lineTo(x - nx * hw, y - ny * hw); } ctx.closePath(); ctx.fill(); ctx.strokeStyle = stroke; ctx.lineWidth = 0.6; ctx.stroke();
    ctx.save(); ctx.globalCompositeOperation = 'overlay'; ctx.beginPath(); for (let i = 1; i < Np; i++) { const [x, y] = pts[i]; if (i === 1) ctx.moveTo(x, y); else ctx.lineTo(x, y); } ctx.strokeStyle = 'rgba(255,255,255,0.4)'; ctx.lineWidth = Math.max(1, s * 0.14 * wid); ctx.lineCap = 'round'; ctx.stroke(); ctx.restore();
  };
  let ctaTarget = null, lightRects = [], darkRects = [];
  const rescan = () => {
    const btns = [...document.querySelectorAll('.hg-cta')]; let best = null, bestD = Infinity, cx = w / (2 * dpr), cy = h / (2 * dpr);
    for (const b of btns) { const r = b.getBoundingClientRect(); if (r.bottom < 0 || r.top > innerHeight || r.width === 0) continue; const bx = r.left + r.width / 2, by = r.top + r.height / 2, d = Math.hypot(bx - cx, by - cy); if (d < bestD) { bestD = d; best = { x: bx, y: by, w: r.width, h: r.height }; } }
    ctaTarget = best; lightRects = [...document.querySelectorAll('[data-hg-light]')].map(el => el.getBoundingClientRect()).filter(r => r.bottom >= -40 && r.top <= innerHeight + 40 && r.width > 0); darkRects = [...document.querySelectorAll('[data-hg-dark]')].map(el => el.getBoundingClientRect()).filter(r => r.bottom >= -40 && r.top <= innerHeight + 40 && r.width > 0);
  };
  rescan(); setInterval(rescan, 400);
  const FEATHER = 26, darkTargetAt = (px, py) => { for (const r of darkRects) if (px >= r.left - 4 && px <= r.right + 4 && py >= r.top - 4 && py <= r.bottom + 4) return 0; let best = 0; for (const r of lightRects) { const dx = Math.max(r.left - px, 0, px - r.right), dy = Math.max(r.top - py, 0, py - r.bottom), dist = Math.hypot(dx, dy), v = dist <= 0 ? 1 : Math.max(0, 1 - dist / FEATHER); if (v > best) best = v; } return best; };
  let t = 0;
  const draw = () => {
    t++; ctx.clearRect(0, 0, w, h); const windX = Math.sin(t * 0.0006) * 0.55 + Math.sin(t * 0.00021 + 2.1) * 0.3, windY = 0.5 + Math.sin(t * 0.00037 + 1.3) * 0.2, since = performance.now() - mouse.t;
    for (const p of P) {
      const turb = Math.sin(t * 0.0022 + p.phase) * 0.4; p.vx *= 0.965; p.vy *= 0.965; p.vx += ((windX + turb) - p.vx) * 0.02; p.vy += (windY - p.vy) * 0.02;
      if (since < 1400) { const dx = p.x - mouse.x, dy = p.y - mouse.y, dist = Math.hypot(dx, dy) || 1, rad = 185 * dpr; if (dist < rad) { const f = 1 - dist / rad, tx = -dy / dist, ty = dx / dist, speed = Math.hypot(mouse.vx, mouse.vy), gust = 0.22 + Math.min(speed * 0.16, 4.2); p.vx += tx * f * gust * 0.075; p.vy += ty * f * gust * 0.05 + dy / dist * f * 0.013; } }
      if (ctaTarget) { const targetX = ctaTarget.x * dpr, yDist = Math.abs(ctaTarget.y * dpr - p.y), influence = Math.max(0, 1 - yDist / (520 * dpr)); if (influence > 0) { const dx = targetX - p.x; p.vx += Math.sign(dx) * Math.min(Math.abs(dx) / (340 * dpr), 1) * influence * 0.018; } }
      p.x += p.vx * dpr; p.y += p.vy * dpr; p.rot += p.spin + p.vx * 0.008; p.flut += p.flutSpd; if (p.y > h + 40) { p.y = -40 - Math.random() * 80; p.x = Math.random() * w * 0.55 - 40; } if (p.x > w + 40) p.x = -40; if (p.x < -60) p.x = w + 30;
      const scaleX = 0.7 + 0.3 * Math.abs(Math.cos(p.flut)), target = darkTargetAt(p.x / dpr, p.y / dpr); p.dark += (target - p.dark) * p.darkRate;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.scale(scaleX, 1); ctx.shadowColor = 'rgba(0,0,0,0.25)'; ctx.shadowBlur = 4 * dpr; ctx.shadowOffsetY = 2 * dpr; petal(ctx, p.s * dpr, p.tint, false, p.kind, p.curl, p); ctx.restore();
      if (p.dark > 0.01) { ctx.save(); ctx.globalAlpha = Math.min(1, p.dark); ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.scale(scaleX, 1); ctx.shadowColor = 'rgba(0,0,0,0.18)'; ctx.shadowBlur = 3 * dpr; ctx.shadowOffsetY = 1.5 * dpr; petal(ctx, p.s * dpr, p.tint, true, p.kind, p.curl, p); ctx.restore(); }
    }
    requestAnimationFrame(draw);
  };
  draw();
})();
