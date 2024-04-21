function openEditModal() {
    document.getElementById('editModal').style.display = 'block';
}
document.querySelector('#editModal .closeEdit').addEventListener('click', function() {
    document.getElementById('editModal').style.display = 'none';
});
window.onclick = function(event) {
    if (event.target == document.getElementById('editModal')) {
        document.getElementById('editModal').style.display = 'none';
    }
};
document.getElementById('editForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var editTitre = document.getElementById('editTitre').value;
    var editBrief = document.getElementById('editBrief').value;
    var editDifficulte = document.getElementById('editDifficulte').value;
    console.log("Titre modifié :", editTitre);
    console.log("Brief modifié :", editBrief);
    console.log("Difficulté modifiée :", editDifficulte);

    document.getElementById('editModal').style.display = 'none';
});

var editBtns = document.querySelectorAll('.editBtn');
for (var i = 0; i < editBtns.length; i++) {
    editBtns[i].addEventListener('click', openEditModal);
}