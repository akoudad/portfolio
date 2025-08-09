// Mobile menu
const toggle = document.querySelector('.menu-toggle')
const links = document.querySelector('.nav-links')
if (toggle && links){
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open')
    toggle.setAttribute('aria-expanded', String(open))
  })
}

// Year
document.getElementById('year').textContent = new Date().getFullYear()

// Reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if (e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target) }
  })
}, {threshold:.12})
document.querySelectorAll('.section, .card, .service').forEach(el=>{
  el.classList.add('reveal'); io.observe(el)
})

// Smooth internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href')
    if (id.length > 1){
      e.preventDefault()
      document.querySelector(id)?.scrollIntoView({behavior:'smooth', block:'start'})
      links?.classList.remove('open')
      toggle?.setAttribute('aria-expanded', 'false')
    }
  })
})
