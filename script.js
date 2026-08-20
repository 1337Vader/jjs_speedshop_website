// ---- Footer year ----
document.getElementById('year').textContent = new Date().getFullYear();

// ---- Mobile nav toggle ----
const header = document.getElementById('siteHeader');
const navToggle = document.getElementById('navToggle');
navToggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.mobile-nav a').forEach(a => {
  a.addEventListener('click', () => {
    header.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---- Boost gauge: draw ticks + sweep needle to redline on load ----
(function buildGauge(){
  const cx = 150, cy = 150;
  const startAngle = -125; // deg, matches needle rest transform
  const endAngle = 125;
  const totalTicks = 20;
  const ticksGroup = document.querySelector('.gauge-ticks');
  const labelsGroup = document.querySelector('.gauge-labels');
  if(!ticksGroup) return;

  for(let i = 0; i <= totalTicks; i++){
    const angle = startAngle + (endAngle - startAngle) * (i / totalTicks);
    const rad = (angle - 90) * Math.PI / 180;
    const isMajor = i % 4 === 0;
    const isRed = i >= totalTicks - 4;
    const rOuter = 128;
    const rInner = isMajor ? 110 : 118;
    const x1 = cx + rOuter * Math.cos(rad);
    const y1 = cy + rOuter * Math.sin(rad);
    const x2 = cx + rInner * Math.cos(rad);
    const y2 = cy + rInner * Math.sin(rad);
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1.toFixed(1));
    line.setAttribute('y1', y1.toFixed(1));
    line.setAttribute('x2', x2.toFixed(1));
    line.setAttribute('y2', y2.toFixed(1));
    line.setAttribute('class', [isMajor ? 'major' : '', isRed ? 'redzone' : ''].join(' ').trim());
    ticksGroup.appendChild(line);

    if(isMajor){
      const rLabel = 96;
      const lx = cx + rLabel * Math.cos(rad);
      const ly = cy + rLabel * Math.sin(rad);
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', lx.toFixed(1));
      text.setAttribute('y', (ly + 4).toFixed(1));
      text.setAttribute('text-anchor', 'middle');
      text.textContent = String(i / 4 * 5);
      labelsGroup.appendChild(text);
    }
  }

  const needle = document.getElementById('gaugeNeedle');
  if(!needle) return;
  // Sweep to near-redline once, then settle back slightly (idle "running" feel)
  requestAnimationFrame(() => {
    setTimeout(() => { needle.style.transform = 'rotate(96deg)'; }, 300);
    setTimeout(() => { needle.style.transform = 'rotate(58deg)'; }, 1700);
  });
})();
