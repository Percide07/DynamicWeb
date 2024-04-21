    function ajouterUtilisateur(nom, dateCreation) {
        var tableau = document.getElementById('dataTable');
        var nouvelleLigne = tableau.insertRow(-1);
        var celluleNom = nouvelleLigne.insertCell(0);
        celluleNom.textContent = nom;
        var celluleDateCreation = nouvelleLigne.insertCell(1);
        celluleDateCreation.textContent = dateCreation;
        var celluleDifficulte = nouvelleLigne.insertCell(2);
        celluleDifficulte.innerHTML = '<img src="/images/see.png" alt="" style="width: 15px; height: 15px;">';
        var celluleValide = nouvelleLigne.insertCell(3);
        celluleValide.innerHTML = '<img src="/images/close.png" alt="" style="width: 15px; height: 15px;">';
        var celluleModifier = nouvelleLigne.insertCell(4);
        celluleModifier.innerHTML = '<img src="/images/edit_blue.png" alt="" style="width: 15px; height: 15px;" class="editBtn">';
        var celluleSupprimer = nouvelleLigne.insertCell(5);
        celluleSupprimer.innerHTML = '<img src="/images/bin.png" alt="" style="width: 20px; height: 20px;">';
    }

    document.getElementById('addForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var nom = document.getElementById('titre').value;
        var dateCreation = new Date().toLocaleDateString();
        ajouterUtilisateur(nom, dateCreation);
        document.getElementById('myModal').style.display = 'none';
    });

    function openModal() {
        document.getElementById('myModal').style.display = 'block';
    }

    document.getElementsByClassName('close')[0].addEventListener('click', function() {
        document.getElementById('myModal').style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target == document.getElementById('myModal')) {
            document.getElementById('myModal').style.display = 'none';
        }
    };

    document.getElementById('openModalBtn').addEventListener('click', openModal);

    function openEditModal() {
        document.getElementById('editModal').style.display = 'block';
    }

    document.getElementsByClassName('close')[0].addEventListener('click', function() {
        document.getElementById('editModal').style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target == document.getElementById('editModal')) {
            document.getElementById('editModal').style.display = 'none';
        }
    };

    document.getElementById('editForm').addEventListener('submit', function(event) {
        event.preventDefault();
        console.log("Données soumises pour la modification");
        document.getElementById('editModal').style.display = 'none';
    });

    var editBtns = document.getElementsByClassName('editBtn');
    for (var i = 0; i < editBtns.length; i++) {
        editBtns[i].addEventListener('click', openEditModal);
    }