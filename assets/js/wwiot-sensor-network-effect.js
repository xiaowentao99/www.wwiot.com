/*
 * WWIOT 首页首屏：传感器粒子网络 / 中心 AP / 点击无线信号联动
 * 用法：
 * 1) 在首屏容器上加 class="hero"，或 data-wwiot-network；
 * 2) 在 index.html 结尾引入：<script src="/js/wwiot-sensor-network-effect.js"></script>
 * 3) 可选配置：window.WWIOTNetworkEffectConfig = { selector: '.hero', apTop: '14%', networkCenterY: 0.43 };
 */
(function () {
  'use strict';

  var defaultConfig = {
    selector: '[data-wwiot-network], .hero',
    apTop: '13.5%',              // AP 高度，越小越靠顶部
    networkCenterY: 0.43,        // 传感器环绕主题的垂直中心点，0.43 约在标题附近
    zIndex: 2,
    showHint: true,
    showOrbs: true,
    sensorCountDesktop: 8,
    sensorCountMobile: 6,
    fullWidthOrbit: true,        // 轨迹扩展到左右 100% 宽度
    clickText: '点击任意位置 · 无线信号汇聚至中心网关'
  };

  var userConfig = window.WWIOTNetworkEffectConfig || {};
  var config = Object.assign({}, defaultConfig, userConfig);

  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  function injectStyle() {
    if (document.getElementById('wwiot-network-effect-style')) return;
    var style = document.createElement('style');
    style.id = 'wwiot-network-effect-style';
    style.textContent = `
      .wwiot-network-host{
        position:relative !important;
        overflow:hidden !important;
        isolation:isolate;
      }
      .wwiot-network-host > .wwiot-network-canvas{
        position:absolute;
        inset:0;
        width:100%;
        height:100%;
        z-index:var(--wwiot-effect-z, 2);
        pointer-events:none;
      }
      .wwiot-orb{
        position:absolute;
        border-radius:50%;
        z-index:0;
        pointer-events:none;
      }
      .wwiot-orb-blue{
        width:320px;
        height:320px;
        background:rgba(91,151,255,.22);
        right:8%;
        top:6%;
      }
      .wwiot-orb-cyan{
        width:138px;
        height:138px;
        background:rgba(89,188,228,.14);
        left:30%;
        top:42%;
      }
      .wwiot-orb-warm{
        width:210px;
        height:210px;
        background:rgba(255,158,122,.18);
        left:10%;
        bottom:18%;
      }
      .wwiot-network-ap{
        position:absolute;
        left:50%;
        top:var(--wwiot-ap-top, 13.5%);
        transform:translateX(-50%);
        width:160px;
        height:94px;
        border-radius:28px;
        z-index:calc(var(--wwiot-effect-z, 2) + 3);
        pointer-events:none;
        background:rgba(255,255,255,.84);
        backdrop-filter:blur(16px);
        border:1px solid rgba(11,99,246,.16);
        box-shadow:0 22px 60px rgba(11,99,246,.14);
        display:flex;
        align-items:center;
        justify-content:center;
        gap:14px;
        padding:16px 18px;
        color:#0f172a;
        font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",Arial,sans-serif;
      }
      .wwiot-network-ap .wwiot-ap-icon{
        width:42px;
        height:42px;
        border-radius:15px;
        position:relative;
        background:linear-gradient(135deg,rgba(11,99,246,.12),rgba(24,183,165,.18));
        box-shadow:inset 0 0 0 1px rgba(11,99,246,.12);
        flex:0 0 auto;
      }
      .wwiot-network-ap .wwiot-ap-icon:before,
      .wwiot-network-ap .wwiot-ap-icon:after{
        content:"";
        position:absolute;
        border-radius:50%;
        top:50%;
        transform:translateY(-50%);
      }
      .wwiot-network-ap .wwiot-ap-icon:before{
        width:10px;
        height:10px;
        background:#18b7a5;
        left:10px;
      }
      .wwiot-network-ap .wwiot-ap-icon:after{
        width:8px;
        height:8px;
        background:#0b63f6;
        right:10px;
      }
      .wwiot-network-ap strong{
        display:block;
        font-size:15px;
        line-height:1.15;
        font-weight:800;
      }
      .wwiot-network-ap span{
        display:block;
        margin-top:6px;
        font-size:11px;
        color:#64748b;
        letter-spacing:.03em;
        white-space:nowrap;
      }
      .wwiot-center-rings{
        position:absolute;
        left:50%;
        top:var(--wwiot-ap-top, 13.5%);
        width:330px;
        height:330px;
        transform:translate(-50%,-35%);
        z-index:calc(var(--wwiot-effect-z, 2) + 1);
        pointer-events:none;
        opacity:.9;
      }
      .wwiot-center-rings .wwiot-dot{
        position:absolute;
        left:50%;
        top:50%;
        width:10px;
        height:10px;
        margin:-5px;
        border-radius:50%;
        background:#18b7a5;
        box-shadow:0 0 0 8px rgba(24,183,165,.1);
      }
      .wwiot-center-rings .wwiot-wave{
        position:absolute;
        left:50%;
        top:50%;
        width:16px;
        height:16px;
        margin:-8px;
        border:1px solid rgba(11,99,246,.26);
        border-radius:50%;
        animation:wwiotWave 4.8s ease-out infinite;
      }
      .wwiot-center-rings .wwiot-wave:nth-child(2){animation-delay:1.2s;}
      .wwiot-center-rings .wwiot-wave:nth-child(3){animation-delay:2.4s;}
      .wwiot-center-rings .wwiot-wave:nth-child(4){animation-delay:3.6s;}
      @keyframes wwiotWave{
        0%{transform:scale(.45);opacity:.6;}
        85%,100%{transform:scale(16);opacity:0;}
      }
      .wwiot-click-hint{
        position:absolute;
        left:50%;
        top:calc(var(--wwiot-ap-top, 13.5%) + 108px);
        transform:translateX(-50%);
        z-index:calc(var(--wwiot-effect-z, 2) + 3);
        font-size:12px;
        font-weight:700;
        color:#64748b;
        background:rgba(255,255,255,.64);
        border:1px solid rgba(226,232,240,.75);
        border-radius:999px;
        padding:8px 14px;
        backdrop-filter:blur(10px);
        pointer-events:none;
        white-space:nowrap;
        font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",Arial,sans-serif;
      }
      @media (max-width:900px){
        .wwiot-network-ap{top:var(--wwiot-ap-top-mobile, 12.5%);}
        .wwiot-center-rings{top:var(--wwiot-ap-top-mobile, 12.5%);opacity:.75;}
        .wwiot-click-hint{top:calc(var(--wwiot-ap-top-mobile, 12.5%) + 98px);}
      }
      @media (max-width:560px){
        .wwiot-network-ap{width:140px;height:82px;top:var(--wwiot-ap-top-mobile, 10.5%);}
        .wwiot-center-rings{width:240px;height:240px;top:var(--wwiot-ap-top-mobile, 10.5%);}
        .wwiot-click-hint{top:calc(var(--wwiot-ap-top-mobile, 10.5%) + 88px);font-size:11px;padding:7px 12px;}
      }
    `;
    document.head.appendChild(style);
  }

  function createEl(tag, className, html) {
    var el = document.createElement(tag);
    if (className) el.className = className;
    if (html !== undefined) el.innerHTML = html;
    return el;
  }

  function initHost(host) {
    if (!host || host.dataset.wwiotNetworkInited === '1') return;
    host.dataset.wwiotNetworkInited = '1';
    host.classList.add('wwiot-network-host');
    host.style.setProperty('--wwiot-effect-z', String(config.zIndex));
    host.style.setProperty('--wwiot-ap-top', config.apTop);
    host.style.setProperty('--wwiot-ap-top-mobile', userConfig.apTopMobile || config.apTop);

    var canvas = createEl('canvas', 'wwiot-network-canvas');
    host.insertBefore(canvas, host.firstChild);

    if (config.showOrbs) {
      host.insertBefore(createEl('span', 'wwiot-orb wwiot-orb-blue'), canvas.nextSibling);
      host.insertBefore(createEl('span', 'wwiot-orb wwiot-orb-cyan'), canvas.nextSibling);
      host.insertBefore(createEl('span', 'wwiot-orb wwiot-orb-warm'), canvas.nextSibling);
    }

    var rings = createEl('div', 'wwiot-center-rings', '<span class="wwiot-dot"></span><span class="wwiot-wave"></span><span class="wwiot-wave"></span><span class="wwiot-wave"></span><span class="wwiot-wave"></span>');
    var ap = createEl('div', 'wwiot-network-ap', '<div class="wwiot-ap-icon"></div><div><strong>网关 AP</strong><span>LoRa / 4G 数据汇聚</span></div>');
    host.appendChild(rings);
    host.appendChild(ap);

    if (config.showHint) {
      host.appendChild(createEl('div', 'wwiot-click-hint', config.clickText));
    }

    startEffect(host, canvas, ap);
  }

  function startEffect(host, canvas, hubEl) {
    var ctx = canvas.getContext('2d');
    var width = 0;
    var height = 0;
    var dpr = 1;
    var sensors = [];
    var packets = [];
    var clickSignals = [];
    var alarms = [];
    var frame = 0;
    var lastAlarmAt = 0;
    var mouse = { x: null, y: null, active: false };

    var sensorTypes = [
      { name:'温湿度', value:'28.6℃', color:'#0b63f6', alarm:'超温报警' },
      { name:'压力', value:'0.62MPa', color:'#18b7a5', alarm:'压力异常' },
      { name:'液位', value:'76%', color:'#0e9ddf', alarm:'水位报警' },
      { name:'门磁', value:'关闭', color:'#f59e0b', alarm:'门磁触发' },
      { name:'烟雾', value:'正常', color:'#64748b', alarm:'烟雾报警' },
      { name:'倾角', value:'0.05°', color:'#14b8a6', alarm:'倾角异常' },
      { name:'水浸', value:'干燥', color:'#0b63f6', alarm:'漏水报警' },
      { name:'RS485', value:'采集中', color:'#18b7a5', alarm:'数据上报' }
    ];

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = host.clientWidth;
      height = host.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createSensors();
    }

    function hubCenter() {
      var hostRect = host.getBoundingClientRect();
      var r = hubEl.getBoundingClientRect();
      return {
        x: r.left - hostRect.left + r.width / 2,
        y: r.top - hostRect.top + r.height / 2
      };
    }

    function createSensors() {
      var compact = width < 720;
      var count = compact ? config.sensorCountMobile : config.sensorCountDesktop;
      var center = { x: width / 2, y: height * config.networkCenterY };

      // 轨迹扩展到左右接近 100% 宽度，卡片不超出屏幕。
      var baseRX = config.fullWidthOrbit ? Math.max(220, width * (compact ? 0.42 : 0.47)) : width * 0.28;
      var baseRY = Math.max(100, height * (compact ? 0.16 : 0.19));

      sensors = Array.from({ length: count }, function (_, i) {
        var t = sensorTypes[i % sensorTypes.length];
        var angle = ((Math.PI * 2) / count) * i - Math.PI / 2;
        var ring = i % 2;
        return Object.assign({}, t, {
          angle: angle,
          orbitX: baseRX - ring * (compact ? 18 : 36),
          orbitY: baseRY + ring * (compact ? 16 : 28),
          speed: 0.0014 + Math.random() * 0.001,
          phase: Math.random() * Math.PI * 2,
          floatAmp: 4 + Math.random() * 4,
          centerX: center.x,
          centerY: center.y,
          w: compact ? 86 : 106,
          h: compact ? 40 : 48,
          status: 'normal',
          pulse: Math.random() * 2
        });
      });

      packets = sensors.map(function (_, i) {
        return {
          from: i,
          t: Math.random(),
          speed: 0.004 + Math.random() * 0.003,
          kind: Math.random() > 0.74 ? 'alarm' : 'data'
        };
      });
    }

    function roundRect(x, y, w, h, r) {
      var rr = Math.min(r, w / 2, h / 2);
      ctx.beginPath();
      ctx.moveTo(x + rr, y);
      ctx.arcTo(x + w, y, x + w, y + h, rr);
      ctx.arcTo(x + w, y + h, x, y + h, rr);
      ctx.arcTo(x, y + h, x, y, rr);
      ctx.arcTo(x, y, x + w, y, rr);
      ctx.closePath();
    }

    function sensorPos(s) {
      var x = s.centerX + Math.cos(s.angle) * s.orbitX;
      var y = s.centerY + Math.sin(s.angle) * s.orbitY + Math.sin(s.phase) * s.floatAmp;

      // 保护边界：轨迹很宽时，卡片仍保留一点边距。
      var margin = s.w / 2 + 16;
      x = Math.max(margin, Math.min(width - margin, x));
      y = Math.max(110, Math.min(height - 120, y));
      return { x: x, y: y };
    }

    function updateSensors() {
      var center = { x: width / 2, y: height * config.networkCenterY };
      sensors.forEach(function (s) {
        s.centerX += (center.x - s.centerX) * 0.03;
        s.centerY += (center.y - s.centerY) * 0.03;
        s.phase += 0.024;
        s.angle += s.speed;
        s.pulse += 0.03;

        if (mouse.active) {
          var p = sensorPos(s);
          var dx = p.x - mouse.x;
          var dy = p.y - mouse.y;
          var dist = Math.hypot(dx, dy);
          if (dist < 145) {
            s.angle += (dx > 0 ? 1 : -1) * 0.0022;
          }
        }
      });
    }

    function drawLine(a, b, emphasis) {
      var grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
      grad.addColorStop(0, emphasis ? 'rgba(24,183,165,.28)' : 'rgba(11,99,246,.12)');
      grad.addColorStop(1, emphasis ? 'rgba(11,99,246,.26)' : 'rgba(24,183,165,.14)');
      ctx.strokeStyle = grad;
      ctx.lineWidth = emphasis ? 1.4 : 1;
      ctx.setLineDash([6, 10]);
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.quadraticCurveTo((a.x + b.x) / 2, (a.y + b.y) / 2 - 26, b.x, b.y);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    function drawGlow(x, y, r, rgbaPrefix, alpha) {
      var g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, rgbaPrefix + alpha + ')');
      g.addColorStop(0.85, rgbaPrefix + '0)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawSensor(s) {
      var p = sensorPos(s);
      var x = p.x - s.w / 2;
      var y = p.y - s.h / 2;
      ctx.save();
      ctx.shadowColor = 'rgba(15,23,42,.10)';
      ctx.shadowBlur = 18;
      ctx.shadowOffsetY = 9;
      roundRect(x, y, s.w, s.h, 15);
      ctx.fillStyle = 'rgba(255,255,255,.84)';
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.strokeStyle = s.status === 'alarm' ? 'rgba(245,158,11,.34)' : 'rgba(11,99,246,.14)';
      ctx.stroke();

      ctx.beginPath();
      ctx.fillStyle = s.status === 'alarm' ? '#f59e0b' : s.color;
      ctx.arc(x + 18, y + s.h / 2, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.strokeStyle = s.status === 'alarm' ? 'rgba(245,158,11,.24)' : 'rgba(24,183,165,.22)';
      ctx.lineWidth = 1;
      ctx.arc(x + 18, y + s.h / 2, 12 + Math.sin(s.pulse) * 1.5, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = '#0f172a';
      ctx.font = '700 13px "PingFang SC", "Microsoft YaHei", Arial';
      ctx.fillText(s.name, x + 32, y + 19);
      ctx.fillStyle = s.status === 'alarm' ? '#d97706' : '#64748b';
      ctx.font = '600 11px "PingFang SC", "Microsoft YaHei", Arial';
      ctx.fillText(s.status === 'alarm' ? '报警上报' : s.value, x + 32, y + 35);
      ctx.restore();
    }

    function packetPoint(from, to, t) {
      var cx = (from.x + to.x) / 2;
      var cy = (from.y + to.y) / 2 - 26;
      var x = (1 - t) * (1 - t) * from.x + 2 * (1 - t) * t * cx + t * t * to.x;
      var y = (1 - t) * (1 - t) * from.y + 2 * (1 - t) * t * cy + t * t * to.y;
      return { x: x, y: y };
    }

    function drawPackets() {
      var center = hubCenter();
      packets.forEach(function (p) {
        var s = sensors[p.from];
        if (!s) return;
        var from = sensorPos(s);
        p.t += p.speed;
        if (p.t > 1) {
          p.t = 0;
          p.kind = Math.random() > 0.76 ? 'alarm' : 'data';
          if (p.kind === 'alarm' && alarms.length < 5) {
            s.status = 'alarm';
            alarms.push({ x: from.x, y: from.y - 34, text: s.alarm, life: 1, sensor: s });
            window.setTimeout(function () { s.status = 'normal'; }, 2200);
          }
        }
        var q = packetPoint(from, center, p.t);
        ctx.beginPath();
        ctx.fillStyle = p.kind === 'alarm' ? 'rgba(245,158,11,.95)' : 'rgba(24,183,165,.95)';
        ctx.arc(q.x, q.y, p.kind === 'alarm' ? 4 : 3.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.fillStyle = p.kind === 'alarm' ? 'rgba(245,158,11,.12)' : 'rgba(24,183,165,.12)';
        ctx.arc(q.x, q.y, p.kind === 'alarm' ? 11 : 9, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function drawAlarms() {
      alarms = alarms.filter(function (a) { return a.life > 0; });
      alarms.forEach(function (a) {
        a.life -= 0.008;
        a.y -= 0.18;
        ctx.save();
        ctx.globalAlpha = Math.max(0, a.life);
        ctx.font = '700 12px "PingFang SC", "Microsoft YaHei", Arial';
        var w = ctx.measureText(a.text).width + 24;
        roundRect(a.x - w / 2, a.y - 18, w, 28, 14);
        ctx.fillStyle = 'rgba(255,255,255,.92)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(245,158,11,.28)';
        ctx.stroke();
        ctx.fillStyle = '#d97706';
        ctx.fillText(a.text, a.x - w / 2 + 12, a.y + 1);
        ctx.restore();
      });
    }

    function createClickSignal(x, y) {
      var center = hubCenter();
      clickSignals.push({ x: x, y: y, tx: center.x, ty: center.y, t: 0, life: 1, rings: [0, 0.15, 0.3] });
      alarms.push({ x: x, y: y - 24, text: '手动触发 · 无线信号', life: 1 });
    }

    function drawClickSignals() {
      clickSignals = clickSignals.filter(function (s) { return s.life > 0; });
      clickSignals.forEach(function (s) {
        s.t += 0.017;
        s.life -= 0.007;
        s.rings.forEach(function (delay) {
          var k = Math.max(0, Math.min(1, s.t - delay));
          if (k <= 0 || k >= 1) return;
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(11,99,246,' + ((1 - k) * 0.42) + ')';
          ctx.lineWidth = 1.5;
          ctx.arc(s.x, s.y, 18 + k * 92, 0, Math.PI * 2);
          ctx.stroke();
        });
        var t = Math.min(1, s.t);
        ctx.setLineDash([7, 10]);
        var grad = ctx.createLinearGradient(s.x, s.y, s.tx, s.ty);
        grad.addColorStop(0, 'rgba(24,183,165,' + ((1 - t) * 0.22 + 0.08) + ')');
        grad.addColorStop(1, 'rgba(11,99,246,' + ((1 - t) * 0.32 + 0.12) + ')');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.quadraticCurveTo((s.x + s.tx) / 2, Math.min(s.y, s.ty) - 80, s.tx, s.ty);
        ctx.stroke();
        ctx.setLineDash([]);

        for (var i = 0; i < 3; i++) {
          var tt = Math.min(1, Math.max(0, t - i * 0.12));
          if (tt <= 0) continue;
          var cx = (1 - tt) * (1 - tt) * s.x + 2 * (1 - tt) * tt * ((s.x + s.tx) / 2) + tt * tt * s.tx;
          var cy = (1 - tt) * (1 - tt) * s.y + 2 * (1 - tt) * tt * (Math.min(s.y, s.ty) - 80) + tt * tt * s.ty;
          ctx.beginPath();
          ctx.fillStyle = i === 0 ? 'rgba(11,99,246,.96)' : 'rgba(24,183,165,.85)';
          ctx.arc(cx, cy, 5 - i, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    }

    function maybeCreateAmbientAlarm(now) {
      if (now - lastAlarmAt < 3200) return;
      if (Math.random() < 0.016 && sensors.length) {
        lastAlarmAt = now;
        var s = sensors[Math.floor(Math.random() * sensors.length)];
        s.status = 'alarm';
        var p = sensorPos(s);
        alarms.push({ x: p.x, y: p.y - 34, text: s.alarm, life: 1, sensor: s });
        window.setTimeout(function () { s.status = 'normal'; }, 2000);
      }
    }

    function draw(now) {
      frame++;
      ctx.clearRect(0, 0, width, height);
      var center = hubCenter();
      drawGlow(center.x, center.y, 120, 'rgba(11,99,246,', 0.06);
      drawGlow(center.x, center.y, 72, 'rgba(24,183,165,', 0.07);

      updateSensors();
      sensors.forEach(function (s, idx) {
        var p = sensorPos(s);
        drawLine(p, center, idx % 2 === 0);
      });

      drawPackets();
      drawClickSignals();
      sensors.forEach(drawSensor);
      drawAlarms();
      maybeCreateAmbientAlarm(now || performance.now());
      window.requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize, { passive: true });
    host.addEventListener('mousemove', function (e) {
      var r = host.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      mouse.active = true;
    }, { passive: true });
    host.addEventListener('mouseleave', function () { mouse.active = false; }, { passive: true });
    host.addEventListener('click', function (e) {
      var r = host.getBoundingClientRect();
      createClickSignal(e.clientX - r.left, e.clientY - r.top);
    }, { passive: true });

    resize();
    draw();
    window.setTimeout(function () { createClickSignal(width * 0.27, height * 0.58); }, 900);
  }

  function init() {
    injectStyle();
    var hosts = document.querySelectorAll(config.selector);
    if (!hosts.length) return;
    Array.prototype.forEach.call(hosts, initHost);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.WWIOTNetworkEffect = {
    init: init
  };
})();
