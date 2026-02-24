document.getElementById('lead-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const result = document.getElementById('form-result');
  if (result) result.textContent = 'Thanks! A roofing specialist will call you within 15 minutes.';
});