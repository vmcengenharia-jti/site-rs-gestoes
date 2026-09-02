document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

// Header background on scroll
const header = document.getElementById('header');
const toggleHeaderBg = () => header.classList.toggle('scrolled', window.scrollY > 10);
window.addEventListener('scroll', toggleHeaderBg);
toggleHeaderBg();

// Portfolio tabs
const tabButtons = document.querySelectorAll('.filter-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    tabButtons.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.querySelector(`.tab-panel[data-panel="${btn.dataset.tab}"]`).classList.add('active');
  });
});

// Contact form — envia via Formspree (https://formspree.io) sem sair da página.
// Antes de publicar: crie uma conta gratuita em formspree.io, crie um formulário
// apontando para central@rsgestoes.com e troque "SEU_FORM_ID" no atributo action
// do <form id="contactForm"> (index.html) pelo ID gerado.
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  if (form.action.includes('SEU_FORM_ID')) {
    formNote.textContent = 'Formulário ainda não configurado — veja o README.md.';
    formNote.style.color = '#b5382f';
    return;
  }

  submitBtn.disabled = true;
  formNote.style.color = '';
  formNote.textContent = 'Enviando...';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' },
    });

    if (response.ok) {
      formNote.textContent = 'Mensagem enviada! Em breve entraremos em contato.';
      form.reset();
    } else {
      formNote.textContent = 'Não foi possível enviar. Tente novamente ou use o e-mail ao lado.';
      formNote.style.color = '#b5382f';
    }
  } catch (err) {
    formNote.textContent = 'Não foi possível enviar. Tente novamente ou use o e-mail ao lado.';
    formNote.style.color = '#b5382f';
  } finally {
    submitBtn.disabled = false;
  }
});
