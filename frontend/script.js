document.getElementById('leadForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const company = document.getElementById('company').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById('status').textContent = 'Please enter valid name and email.';
    return;
  }

  const response = await fetch('https://your-backend-url.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, company, message }),
  });

  const result = await response.json();
  document.getElementById('status').textContent = result.message;
});
