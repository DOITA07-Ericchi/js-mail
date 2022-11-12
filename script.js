function mail() {
    let inputmail = document.getElementById("loginform").value;
    console.log(inputmail);
    const mailaccettate = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];
    let arealogin = document.getElementById('arealogin');
    let risultato = document.getElementById("resultbox");
    for (let i = 0; i < mailaccettate.length; i++) {
        if (inputmail == mailaccettate[i]) {
            // Qui routine per sbloccare l'accesso
            console.log('Accesso effettuato.');
            console.log(i);
            risultato.innerHTML("Accesso effettuato.");
            break;
        } else {
            risultato.innerHTML("Accesso negato.")
        }
        arealogin.classList.remove("d-none");
        arealogin.classList.add("d-block");
    }
}