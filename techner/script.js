document.addEventListener('DOMContentLoaded', ()=>{
  // reveal sections
  requestAnimationFrame(()=> document.querySelectorAll('.hero, .section, .footer').forEach(el=>el.classList.add('reveal')))

  // smooth anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href.startsWith('#')){
        e.preventDefault();
        const target = document.querySelector(href);
        if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    })
  })

  // contact form: open mailto fallback
  const form = document.getElementById('contactForm');
  form && form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    const subject = encodeURIComponent('Project inquiry from ' + name);
    const body = encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0A${message}`);
    const mailto = `mailto:hello@techner.example?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  })
})
