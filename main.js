let dialog = document.getElementById('myDialog')
let moreInfo = document.getElementById('moreInfo')
let closeDialog = document.getElementById('closeDialog')

moreInfo.addEventListener('click', function () {
    dialog.showModal()
})

closeDialog.addEventListener('click', function () {
    dialog.close()
})

function login() {

    const username = document.getElementById("userName").value;
    const password = document.getElementById("userPassword").value;

    if (username === null || username === " " || username === "") {
        alert("Campo Usuário é obrigatório.");
    } else if (password === null || password === " " || password === "") {
        alert("Campo Senha é obrigatório.");
    } else if (username === "admin" && password === "123456") {
        alert("Login foi realizado com sucesso.");
    } else {
        alert("Usuário e/ou senha inválidos.");
    }
}