// ---- i18n: English/Spanish toggle ----
const translations = {
  'nav.services': 'Servicios',
  'nav.reviews': 'Reseñas',
  'nav.shop': 'Taller',
  'nav.contact': 'Contacto',
  'nav.callToBook': 'Llamar para Reservar',

  'hero.eyebrow': 'West Palm Beach, FL &nbsp;·&nbsp; Solo con Cita',
  'hero.title': 'Hecho para<br><span class="text-boost">el límite.</span>',
  'hero.lede': 'Reparación general, mejoras de rendimiento, coilovers, suspensión de aire y motores completos — hecho bien, con cita.',
  'hero.cta': 'Reservar una Cita',

  'marquee.general': 'REPARACIÓN GENERAL',
  'marquee.perf': 'MEJORAS DE RENDIMIENTO',
  'marquee.coil': 'INSTALACIÓN DE COILOVERS',
  'marquee.air': 'SUSPENSIÓN DE AIRE',
  'marquee.engine': 'MOTORES COMPLETOS',

  'services.eyebrow': 'Hoja de Especificaciones',
  'services.title': 'Lo que construimos y reparamos',
  'services.gen.title': 'Reparación General',
  'services.gen.desc': 'Diagnósticos, frenos, fluidos, sistema eléctrico y todo lo que tu auto necesita para estar listo para la calle.',
  'services.perf.title': 'Mejoras de Rendimiento',
  'services.perf.desc': 'Piezas de mejora, soporte de tuning y actualizaciones de hardware según cómo realmente manejas tu auto.',
  'services.coil.title': 'Instalación de Coilovers',
  'services.coil.desc': 'Instalación con peso por esquina y ajuste de altura correcto — forma y función, calibrados juntos.',
  'services.air.title': 'Suspensión de Aire',
  'services.air.desc': 'Instalación y diagnóstico de sistemas de aire, desde la primera instalación hasta reparación de fugas y mejoras.',
  'services.engine.title': 'Motores Completos',
  'services.engine.desc': 'Motores construidos para calle o pista — maquinados, ensamblados y rodados de la manera correcta.',
  'services.wheels.title': 'Llantas y Rines',
  'services.wheels.desc': 'Ajuste, montaje, balanceo y paquetes de llantas/rines según tu configuración, no solo lo que hay en inventario.',

  'process.eyebrow': 'Cómo Funciona la Reserva',
  'process.title': 'Solo con cita — así vale la pena',
  'process.lede': 'Cada auto tiene su propia bahía y toda la atención de JJ. Sin fila de espera, sin trabajos apurados.',
  'process.step1.title': 'Contáctanos',
  'process.step1.desc': 'Llama o envía un DM a <a href="https://www.instagram.com/jjs.speedshop/" target="_blank" rel="noopener">@jjs.speedshop</a> con tu vehículo y lo que necesita.',
  'process.step2.title': 'Programa tu cita',
  'process.step2.desc': 'Reservamos un horario en la bahía para que tu auto esté en trabajo desde el momento en que llega.',
  'process.step3.title': 'Diagnóstico y trabajo',
  'process.step3.desc': 'Confirmamos piezas, especificaciones y tiempo estimado contigo antes de desarmar o pedir nada.',
  'process.step4.title': 'Recoge y maneja',
  'process.step4.desc': 'Te explicamos todo lo que se hizo, para que sepas exactamente qué tiene tu auto ahora.',

  'reviews.eyebrow': 'Lo Que Dicen',
  'reviews.title': 'Opiniones de clientes',
  'reviews.count': '61 reseñas de Google',
  'reviews.r1': 'Un Dodge Challenger Scat Pack recibió una alineación completa con medidas de antes y después, además de una explicación clara sobre el desgaste desigual de las llantas por una alineación previa.',
  'reviews.r2': 'Elogiado por una instalación eficiente de un downpipe a un precio justo, con aviso anticipado sobre llantas que pronto necesitarían reemplazo.',
  'reviews.r3': 'Un cliente viajó desde Miami por llantas, resortes de rebaje y un trabajo completo de frenos — destacando la rapidez y precios transparentes sin sorpresas.',
  'reviews.r4': 'Descrito como un mecánico "excepcional" y confiable, con conocimiento en todo tipo de marcas y modelos — ganándose un cliente leal y recurrente.',
  'reviews.src': 'Reseña de Google',
  'reviews.readAll': 'Ver todas las reseñas en Google →',

  'instagram.eyebrow': 'Trabajo Reciente',
  'instagram.title': 'Sigue los proyectos',
  'instagram.lede': 'El trabajo más reciente se publica antes de llegar al sitio web. Síguenos para ver proyectos en progreso, antes/después y disponibilidad de citas.',
  'instagram.viewBtn': 'Ver @jjs.speedshop en Instagram →',

  'about.eyebrow': 'El Taller',
  'about.title': 'Taller pequeño. Trabajo serio.',
  'about.p1': 'JJ\'s SpeedShop LLC es un taller de rendimiento y reparación general ubicado en West Palm Beach, Florida. Trabajamos solo con cita para que cada auto reciba tiempo y atención real — desde reparaciones de rutina hasta trabajos completos de suspensión y motor.',
  'about.p2': 'Si necesita manejarse mejor, frenar mejor o tener más potencia, es el tipo de trabajo que nos gusta hacer.',
  'about.tag1': 'Solo con Cita',
  'about.tag3': 'Operado por el Dueño',
  'about.hours': 'Horario',

  'days.mon': 'Lun',
  'days.tue': 'Mar',
  'days.wed': 'Mié',
  'days.thu': 'Jue',
  'days.fri': 'Vie',
  'days.sat': 'Sáb',
  'days.sun': 'Dom',
  'hours.closed': 'Cerrado',

  'contact.eyebrow': 'Reserva una Cita',
  'contact.title': 'Trae tu auto a la bahía.',
  'contact.lede': 'Solo con cita — llama o envía un DM por Instagram para programar. Dinos el vehículo y lo que necesita, y reservamos un horario.',
  'contact.call': 'Llamar / Mensaje',
  'contact.dm': 'DM de Instagram',
  'contact.address': 'Dirección del Taller',
  'contact.note': 'Solo con cita — llama o envía un DM antes de pasar.',

  'footer.tag': 'Reparación General · Mejoras de Rendimiento · Coilovers · Suspensión de Aire · Motores Completos',
};

function initI18n(){
  const elements = document.querySelectorAll('[data-i18n]');
  if(!elements.length) return;

  elements.forEach(el => {
    if(!el.dataset.i18nEn){
      el.dataset.i18nEn = el.innerHTML;
    }
  });

  function setLanguage(lang, persist){
    document.documentElement.lang = lang;
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if(lang === 'es' && translations[key]){
        el.innerHTML = translations[key];
      } else {
        el.innerHTML = el.dataset.i18nEn;
      }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });
    if(persist){
      try { localStorage.setItem('jjs-lang', lang); } catch(e){ /* storage unavailable */ }
    }
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang, true));
  });

  let saved = 'en';
  try { saved = localStorage.getItem('jjs-lang') || 'en'; } catch(e){ /* storage unavailable */ }
  setLanguage(saved, false);
}
initI18n();

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

// ---- Scroll reveal ----
(function scrollReveal(){
  const items = document.querySelectorAll('.reveal');
  if(!items.length) return;
  if(!('IntersectionObserver' in window)){
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  items.forEach(el => io.observe(el));
})();

// ---- Instagram embeds: load Instagram's official embed script only if posts are present ----
(function loadInstagramEmbeds(){
  const grid = document.getElementById('instagramEmbeds');
  if(!grid || !grid.children.length) return; // nothing to embed yet
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.instagram.com/embed.js';
  document.body.appendChild(script);
})();

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
