function mail() {
    let inputmail = document.getElementById("loginform").value;
    console.log(inputmail);
    const mailaccettate = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com", "anna@gmail.com"];
    for (let i=0; i< mailaccettate.length; i++) {
        if (inputmail === mailaccettate[i]) {
            // Qui routine per sbloccare l'accesso
            console.log('Login effettuato.');
            console.log(i);
            break;
        }
        i++;
    }
}