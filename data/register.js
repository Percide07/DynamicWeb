function registerUser(nom, email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const isEmailExists = users.some(user => user.email === email);
    if (isEmailExists) {
        alert("L'adresse e-mail est déjà utilisée.");
        return;
    }

    users.push({ nom: nom, email: email, password: password });
    localStorage.setItem('users', JSON.stringify(users));
    alert("Inscription réussie. Vous pouvez maintenant vous connecter.");
    window.location.href = "../html/user_dash.html";
}

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

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('stripe-register').addEventListener('submit', function(event) {
        event.preventDefault();
        const nom = document.getElementsByName('nom')[0].value;
        const email = document.getElementsByName('email')[0].value;
        const password = document.getElementsByName('password')[0].value;
        registerUser(nom, email, password);
    });

    document.getElementById('stripe-login').addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementsByName('email')[0].value;
        const password = document.getElementsByName('password')[0].value;
        authenticateUser(email, password);
    });
});
