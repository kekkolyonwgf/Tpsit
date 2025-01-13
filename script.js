// Funzione per caricare gli utenti dal backend
async function loadUsers() {
    const response = await fetch('http://localhost:3000/api/users');
    const users = await response.json();
    
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Pulisce la lista
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.name} - ${user.email}`;
      userList.appendChild(li);
    });
  }
  
  // Funzione per inviare un nuovo utente al backend
  async function addUser(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    const response = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    });
  
    if (response.ok) {
      loadUsers();  // Ricarica la lista degli utenti
    }
  }
  
  // Aggiungi l'evento di submit del form
  document.getElementById('userForm').addEventListener('submit', addUser);
  
  // Carica gli utenti quando la pagina è pronta
  loadUsers();
  