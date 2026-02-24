const leadForm = document.getElementById('lead-form');
const formResult = document.getElementById('form-result');

leadForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(leadForm);
  const required = ['name', 'phone', 'email', 'address', 'service'];
  const missing = required.some((field) => !String(data.get(field) || '').trim());

  if (missing) {
    formResult.textContent = 'Please complete all fields so we can schedule your assessment.';
    formResult.style.color = '#b42318';
    return;
  }

  formResult.textContent = 'Thanks! A roofing specialist will contact you within 15 minutes.';
  formResult.style.color = '#0e6d3d';
  leadForm.reset();
});
