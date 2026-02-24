const leadForm = document.getElementById('lead-form');
const result = document.getElementById('form-result');

leadForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(leadForm);
  const name = formData.get('name')?.toString().trim() || 'there';

  if (result) {
    result.textContent = `Thanks, ${name}! A Summit roofing specialist will call you within 15 minutes.`;
  }

  leadForm.reset();
});

const stickyCta = document.querySelector('.sticky-cta');
window.addEventListener('scroll', () => {
  if (!stickyCta) return;
  stickyCta.style.transform = window.scrollY > 40 ? 'translateY(0)' : 'translateY(0)';
});
