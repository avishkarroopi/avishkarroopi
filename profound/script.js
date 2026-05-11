document.addEventListener('DOMContentLoaded', ()=>{
  // gentle reveal
  requestAnimationFrame(()=> document.querySelectorAll('.hero, .section, .pf-footer').forEach(el=>el.classList.add('reveal')))

  // smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href.startsWith('#')){
        e.preventDefault();
        const t = document.querySelector(href);
        if(t) t.scrollIntoView({behavior:'smooth',block:'start'});
      }
    })
  })

  // contact form fallback -> mailto
  const form = document.getElementById('pfForm');
  if(form) form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    const name = fd.get('name') || '';
    const email = fd.get('email') || '';
    const company = fd.get('company') || '';
    const message = fd.get('message') || '';
    const subject = encodeURIComponent('ProFound consultation request from ' + name);
    const body = encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0ACompany: ${company}%0A%0A${message}`);
    window.location.href = `mailto:contact@profound.example?subject=${subject}&body=${body}`;
  })
})
