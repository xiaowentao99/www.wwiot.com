(() => {
  const inIframe = window.self !== window.top;
  const items = [
    { title: '温湿度与环境', links: [['WW-10 工业温湿度', 'ww10.html'], ['WW-11 室内温湿度', 'ww11.html'], ['WW-12 无屏温湿度', 'ww12.html'], ['WW-13 无线测温杆', 'ww13.html']] },
    { title: '开关量与安防', links: [['WW-20 开关量采集', 'ww20.html'], ['WW-21 人体感应', 'ww21.html'], ['WW-22 烟感报警', 'ww22.html'], ['WW-26 水浸/门磁', 'ww26.html'], ['WW-27 无线门磁', 'ww27.html']] },
    { title: '压力、液位与运动', links: [['WW-50 无线倾角', 'ww50.html'], ['WW-70 消防压力', 'ww70.html'], ['WW-71 工业压力', 'ww71.html'], ['WW-72 迷你压力', 'ww72.html'], ['WW-73 无线液位', 'ww73.html'], ['WW-78 微差压', 'ww78.html']] },
    { title: '采集器与网关', links: [['WW-D1 数据采集器', 'ww-d1.html'], ['WW-D2 / WW-D3 数据采集器', 'ww-d2-d3.html'], ['WW-G1 工业网关', 'ww-g1.html'], ['WW-G2 LoRaWAN 网关', 'ww-g2.html']] }
  ];

  // 在文档中心 iframe 中加载时，不重复显示左侧菜单
  if (inIframe) {
    document.documentElement.classList.add('manual-in-iframe');
    const style = document.createElement('style');
    style.textContent = `
      html.manual-in-iframe body { margin-left: 0 !important; padding-top: 0 !important; }
      html.manual-in-iframe .manual-sidebar { display: none !important; }
    `;
    document.head.appendChild(style);
    return;
  }

  const current = location.pathname.split('/').pop();
  const style = document.createElement('style');
  style.textContent = `
    .manual-sidebar { position: fixed; z-index: 1000; top: 0; left: 0; bottom: 0; width: 248px; padding: 24px 14px; overflow-y: auto; background: #fff; border-right: 1px solid #e2e8f0; box-shadow: 4px 0 18px rgba(15,23,42,.06); font: 14px/1.6 -apple-system,BlinkMacSystemFont,"Segoe UI","Microsoft YaHei",sans-serif; }
    .manual-sidebar__brand { display: block; margin: 0 10px 22px; color: #172554; font-size: 18px; font-weight: 700; text-decoration: none; }
    .manual-sidebar__home { display: block; margin: 0 4px 20px; padding: 9px 12px; color: #2563eb; background: #eff6ff; border-radius: 7px; text-decoration: none; font-weight: 600; }
    .manual-sidebar__group { margin: 18px 0 0; }
    .manual-sidebar__title { padding: 0 10px 6px; color: #64748b; font-size: 12px; font-weight: 700; }
    .manual-sidebar a.manual-sidebar__item { display: block; padding: 8px 10px; color: #475569; border-radius: 7px; text-decoration: none; }
    .manual-sidebar a.manual-sidebar__item:hover, .manual-sidebar a.manual-sidebar__item.is-active { color: #1d4ed8; background: #eff6ff; font-weight: 600; }
    .manual-sidebar__toggle { display: none; }
    body.manual-with-sidebar { margin-left: 248px; }
    @media (max-width: 900px) {
      .manual-sidebar { width: 100%; height: auto; bottom: auto; max-height: 56px; padding: 10px 14px; overflow: hidden; }
      .manual-sidebar.is-open { max-height: 80vh; overflow-y: auto; }
      .manual-sidebar__brand { display: inline-block; margin: 4px 0 4px 8px; font-size: 16px; }
      .manual-sidebar__toggle { display: block; float: right; margin: 0 4px; padding: 7px 11px; color: #1d4ed8; background: #eff6ff; border: 0; border-radius: 6px; cursor: pointer; }
      .manual-sidebar__home { margin: 12px 4px; }
      body.manual-with-sidebar { margin-left: 0; padding-top: 56px; }
    }
  `;
  document.head.appendChild(style);

  const aside = document.createElement('aside');
  aside.className = 'manual-sidebar';
  aside.setAttribute('aria-label', '产品说明书菜单');
  aside.innerHTML = '<a class="manual-sidebar__brand" href="index.html">万维物联网 · 文档中心</a><button class="manual-sidebar__toggle" type="button" aria-expanded="false">目录</button><a class="manual-sidebar__home" href="index.html">← 返回说明书中心</a>';

  items.forEach(group => {
    const section = document.createElement('section');
    section.className = 'manual-sidebar__group';
    section.innerHTML = `<div class="manual-sidebar__title">${group.title}</div>`;
    group.links.forEach(([label, href]) => {
      const link = document.createElement('a');
      link.className = 'manual-sidebar__item' + (href === current ? ' is-active' : '');
      // 跳转到文档中心并用 hash 在右侧加载，避免整页跳到单篇说明书
      link.href = 'index.html#' + href;
      link.textContent = label;
      section.appendChild(link);
    });
    aside.appendChild(section);
  });

  document.body.prepend(aside);
  document.body.classList.add('manual-with-sidebar');
  aside.querySelector('.manual-sidebar__toggle').addEventListener('click', () => {
    const open = aside.classList.toggle('is-open');
    aside.querySelector('.manual-sidebar__toggle').setAttribute('aria-expanded', String(open));
  });
})();
