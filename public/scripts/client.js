// client.js — interactividad del portfolio (tema, reveal, nav, hover-video, filtro de blog, circuito del hero)
(function () {
  var root = document.documentElement;

  // ── Tema persistente + menú móvil ──
  document.addEventListener('click', function (e) {
    var tb = e.target.closest('[data-theme-toggle]');
    if (tb) {
      var cur = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      var next = cur === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('fr_theme', next); } catch (err) {}
    }
    var burger = e.target.closest('[data-burger]');
    if (burger) {
      var mob = document.querySelector('[data-mobile]');
      if (mob) mob.classList.toggle('is-open');
      burger.classList.toggle('is-open');
    }
    var ml = e.target.closest('[data-mobile] a');
    if (ml) {
      var m2 = document.querySelector('[data-mobile]');
      if (m2) m2.classList.remove('is-open');
      var bg = document.querySelector('[data-burger]');
      if (bg) bg.classList.remove('is-open');
    }
  });

  // ── Reveal al scroll ──
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    reveals.forEach(function (r) { r.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (r) {
      var rect = r.getBoundingClientRect();
      if (rect.top < (window.innerHeight || 800) * 0.95) r.classList.add('in');
      else io.observe(r);
    });
  }

  // ── Borde del nav al scrollear ──
  var nav = document.querySelector('.nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('nav--scrolled', window.scrollY > 24); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ── Hover-vídeo en tarjetas de proyecto ──
  document.querySelectorAll('[data-hovid]').forEach(function (el) {
    var v = el.querySelector('video');
    var hint = el.querySelector('.hovid__hint');
    if (!v) return;
    var play = function () { v.play().then(function () { v.classList.add('is-on'); if (hint) hint.classList.add('is-hidden'); }).catch(function () {}); };
    var stop = function () { v.classList.remove('is-on'); if (hint) hint.classList.remove('is-hidden'); try { v.pause(); } catch (err) {} };
    el.addEventListener('mouseenter', play);
    el.addEventListener('mouseleave', stop);
    el.addEventListener('focusin', play);
    el.addEventListener('focusout', stop);
  });

  // ── Filtro de blog por tags ──
  var fb = document.querySelector('[data-blog-filters]');
  if (fb) {
    var cards = Array.prototype.slice.call(document.querySelectorAll('[data-post-card]'));
    fb.addEventListener('click', function (e) {
      var b = e.target.closest('[data-tag]');
      if (!b) return;
      var tag = b.getAttribute('data-tag');
      fb.querySelectorAll('[data-tag]').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      cards.forEach(function (c) {
        var tags = (c.getAttribute('data-tags') || '').split('|');
        c.style.display = (tag === '__all' || tags.indexOf(tag) !== -1) ? '' : 'none';
      });
    });
  }

  // ── Animación de circuito del hero ──
  var canvas = document.querySelector('.hero-fx');
  if (canvas && canvas.getContext) initCircuit(canvas);

  function initCircuit(canvas) {
    var ctx = canvas.getContext('2d');
    var w = 0, h = 0, dpr = 1, traces = [], pads = [], pulses = [], fg = '#211d16', acc = '#211d16', last = 0, frame = 0, visible = true, raf = 0;
    var rand = function (a, b) { return a + Math.random() * (b - a); };
    var randi = function (n) { return Math.floor(Math.random() * n); };
    var pick = function (arr) { return arr[randi(arr.length)]; };
    var clamp = function (v, a, b) { return Math.max(a, Math.min(b, v)); };
    function readColors() {
      var cs = getComputedStyle(root);
      fg = (cs.getPropertyValue('--fg') || '#211d16').trim() || '#211d16';
      var a = (cs.getPropertyValue('--accent') || '').trim();
      acc = a || fg;
    }
    function motionOn() {
      var m = (getComputedStyle(root).getPropertyValue('--motion') || '1').trim();
      return m !== '0' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    function build() {
      var cell = 44;
      var cols = Math.max(4, Math.round(w / cell)), rows = Math.max(4, Math.round(h / cell));
      var gx = w / cols, gy = h / rows;
      traces = []; pads = [];
      var dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
      var tc = clamp(Math.round((w * h) / 14000), 10, 70);
      for (var n = 0; n < tc; n++) {
        var x = randi(cols + 1) * gx, y = randi(rows + 1) * gy;
        var pts = [{ x: x, y: y }];
        var dir = pick(dirs);
        var segs = 2 + randi(3);
        for (var i = 0; i < segs; i++) {
          if (i > 0 && Math.random() < 0.85) { var turns = dir[0] !== 0 ? [[0, 1], [0, -1]] : [[1, 0], [-1, 0]]; dir = pick(turns); }
          var len = 1 + randi(3);
          var nx = clamp(x + dir[0] * len * gx, 0, w), ny = clamp(y + dir[1] * len * gy, 0, h);
          if (nx === x && ny === y) continue;
          pts.push({ x: nx, y: ny }); x = nx; y = ny;
        }
        if (pts.length < 2) continue;
        var total = 0, seglen = [];
        for (var j = 1; j < pts.length; j++) { var d = Math.hypot(pts[j].x - pts[j-1].x, pts[j].y - pts[j-1].y); seglen.push(d); total += d; }
        traces.push({ pts: pts, seglen: seglen, total: total });
        pads.push({ x: pts[0].x, y: pts[0].y, r: rand(2.2, 3.4), io: Math.random() < 0.35, ph: rand(0, 6.28) });
        var e2 = pts[pts.length - 1];
        pads.push({ x: e2.x, y: e2.y, r: rand(2.2, 3.4), io: Math.random() < 0.35, ph: rand(0, 6.28) });
      }
      var pc = clamp(Math.round(traces.length * 0.4), 6, 22);
      pulses = [];
      for (var k = 0; k < pc; k++) pulses.push(spawn());
    }
    function spawn() { var ti = randi(traces.length); return { ti: ti, d: rand(0, traces[ti] ? traces[ti].total : 0), speed: rand(34, 78) }; }
    function pointAt(tr, dist) {
      if (dist <= 0) return tr.pts[0];
      var acc2 = 0;
      for (var i = 0; i < tr.seglen.length; i++) {
        if (acc2 + tr.seglen[i] >= dist) { var t = (dist - acc2) / (tr.seglen[i] || 1); var a = tr.pts[i], b = tr.pts[i+1]; return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t }; }
        acc2 += tr.seglen[i];
      }
      return tr.pts[tr.pts.length - 1];
    }
    function resize() {
      var rect = canvas.parentElement.getBoundingClientRect();
      w = Math.max(1, rect.width); h = Math.max(1, rect.height);
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      readColors(); build(); drawStatic();
    }
    function drawTraces() {
      ctx.lineJoin = 'round'; ctx.lineCap = 'round'; ctx.strokeStyle = fg; ctx.lineWidth = 1.1; ctx.globalAlpha = 0.085;
      for (var i = 0; i < traces.length; i++) { var tr = traces[i]; ctx.beginPath(); ctx.moveTo(tr.pts[0].x, tr.pts[0].y); for (var p = 1; p < tr.pts.length; p++) ctx.lineTo(tr.pts[p].x, tr.pts[p].y); ctx.stroke(); }
      ctx.globalAlpha = 1;
    }
    function drawPads(time) {
      var bg = (getComputedStyle(root).getPropertyValue('--bg') || '#f4eee2').trim() || '#f4eee2';
      for (var i = 0; i < pads.length; i++) {
        var p = pads[i];
        if (p.io) { var pulse = 0.18 + 0.22 * (0.5 + 0.5 * Math.sin(time * 0.0022 + p.ph)); ctx.globalAlpha = pulse; ctx.fillStyle = acc; ctx.beginPath(); ctx.arc(p.x, p.y, p.r + 1.1, 0, 6.2832); ctx.fill(); }
        ctx.globalAlpha = p.io ? 0.5 : 0.16; ctx.fillStyle = fg; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.2832); ctx.fill();
        ctx.globalAlpha = 1; ctx.fillStyle = bg; ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 0.42, 0, 6.2832); ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
    function drawPulses() {
      ctx.save(); ctx.shadowBlur = 9; ctx.shadowColor = acc;
      for (var i = 0; i < pulses.length; i++) {
        var p = pulses[i], tr = traces[p.ti]; if (!tr) continue;
        for (var k = 0; k < 5; k++) { var dd = p.d - k * 5.2; if (dd < 0) continue; var pt = pointAt(tr, dd); ctx.globalAlpha = (1 - k / 5) * 0.5; ctx.fillStyle = acc; ctx.beginPath(); ctx.arc(pt.x, pt.y, 1.9 - k * 0.25, 0, 6.2832); ctx.fill(); }
        var head = pointAt(tr, p.d); ctx.globalAlpha = 0.95; ctx.fillStyle = acc; ctx.beginPath(); ctx.arc(head.x, head.y, 2.1, 0, 6.2832); ctx.fill();
      }
      ctx.restore(); ctx.globalAlpha = 1;
    }
    function drawStatic() { ctx.clearRect(0, 0, w, h); drawTraces(); drawPads(0); drawPulses(); }
    function loop(ts) {
      raf = requestAnimationFrame(loop);
      if (!visible) { last = ts; return; }
      var dt = Math.min(0.05, (ts - last) / 1000 || 0); last = ts; frame++;
      if (frame % 90 === 0) readColors();
      ctx.clearRect(0, 0, w, h); drawTraces(); drawPads(ts);
      for (var i = 0; i < pulses.length; i++) { var p = pulses[i], tr = traces[p.ti]; if (!tr) { var s = spawn(); p.ti = s.ti; p.d = s.d; p.speed = s.speed; continue; } p.d += p.speed * dt; if (p.d > tr.total + 30) { var s2 = spawn(); p.ti = s2.ti; p.d = s2.d; p.speed = s2.speed; } }
      drawPulses();
    }
    function start() { cancelAnimationFrame(raf); if (motionOn()) { last = performance.now(); raf = requestAnimationFrame(loop); } else drawStatic(); }
    new ResizeObserver(function () { resize(); start(); }).observe(canvas.parentElement);
    new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }, { threshold: 0 }).observe(canvas);
    new MutationObserver(function () { readColors(); start(); }).observe(root, { attributes: true, attributeFilter: ['data-theme', 'style'] });
    resize(); start();
  }
})();
