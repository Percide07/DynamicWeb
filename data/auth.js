function authenticateUser(email, password) {
    const adminEmail = "admin@gmail.com";
    const adminPassword = "12345";
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (email === adminEmail && password === adminPassword) {
        localStorage.setItem('currentUser', JSON.stringify({ email: email, isAdmin: true }));
        alert("Authentification réussie en tant qu'administrateur.");
        window.location.href = "../html/admin_dash.html";
        return;
    }

    const currentUser = users.find(user => user.email === email && user.password === password);
    if (currentUser) {
        localStorage.setItem('currentUser', JSON.stringify({ email: email, isAdmin: false }));
        alert("Authentification réussie en tant qu'utilisateur.");
        window.location.href = "../html/user_dash.html";
    } else {
        alert("Adresse e-mail ou mot de passe incorrect.");
    }
}

document.getElementById('stripe-login').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementsByName('email')[0].value;
    const password = document.getElementsByName('password')[0].value;
    authenticateUser(email, password);
});
