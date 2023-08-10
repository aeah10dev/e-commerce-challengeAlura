const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'admin@sportzone.com' && password === 'administrador') {
    alert('Inicio de sesión exitoso como administrador.');
    window.location.href = 'productos.html';
  } else {
    alert('Credenciales incorrectas. Inténtalo de nuevo.');
  }
});