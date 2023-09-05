function verificarInputs() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let celular = document.getElementById("celular").value;
    let img = document.getElementById("img").value;
    let data = document.getElementById("data").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let cidade = document.getElementById("cidade").value;
    let instagram = document.getElementById("instagram").value;
    let github = document.getElementById("github").value;

    if (nome == "" || telefone == "" || celular == "" || img == "" || data == "" || "" || email == "" ||
        cep == "" || cidade == "" || instagram == "" || github == "") {
        return true
    } else {
        return false
    }

}
function getZodiacSign(date) {
    let birthdate = new Date(date);
    let day = birthdate.getDate();
    let month = birthdate.getMonth() + 1;

    if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
        return "Capricórnio ♑";
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        return "Aquário ♒";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "Peixes ♓";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        return "Áries ♈";
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return "Touro ♉";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Gêmeos ♊";
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        return "Câncer ♋";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        return "Leão ♌";
    } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        return "Virgem ♍";
    } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        return "Libra ♎";
    } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        return "Escorpião ♏";
    } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        return "Sagitário ♐";
    }
}

function msg(msg, tipoMsg) {

    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = '';

    const msgTela = `
<p class="${tipoMsg}">${msg}</p>
`
    msgDiv.innerHTML = msgTela;

    setTimeout(function () {
        msgDiv.innerHTML = '';
    }, 3000);
}
class Agenda {
    constructor(nome, telefone, celular, img, data, idade, signo, email, cep, cidade, instagram, github, id) {
        this.nome = nome;
        this.telefone = telefone;
        this.celular = celular;
        this.img = img;
        this.data = data;
        this.idade = idade;
        this.signo = signo;
        this.email = email;
        this.cep = cep;
        this.cidade = cidade;
        this.instagram = instagram;
        this.github = github;
        this.id = id
    }

}
function cadastrar() {

    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let celular = document.getElementById("celular").value;
    let img = document.getElementById("img").value;
    let data = document.getElementById("data").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let cidade = document.getElementById("cidade").value;
    let instagram = document.getElementById("instagram").value;
    let github = document.getElementById("github").value;
    
    const agenda = new Agenda(nome, telefone, celular, img, data,calcularIdade(data),getZodiacSign(data), email, cep, cidade, instagram, github, randomID())
    Agendalista.addCadastro(agenda)

}
function calcularIdade(idade){
    let aniversario = idade
    let date = new Date(aniversario);
    var monthDiff = Date.now() - date.getTime();
    var ageDiff = new Date( monthDiff);

    var year = ageDiff.getUTCFullYear();
    
    var cal = Math.abs(year - 1970);
    return cal;
}
class AgendaList {
    constructor() {
        this.cadastroArray = [];
    }
    addCadastro(agenda) {
        if (verificarInputs()) {
            msg("Preencha todos os campos", "erro")
        } else {
            msg("Numero Cadastrado", "sucesso")
            this.cadastroArray.push(agenda)

            renderizar()
            limparInputs()
        }

    }
}
function randomID() {

   return Math.floor(Math.random() * 9999)

}
Agendalista = new AgendaList();
function limparInputs() {
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("celular").value = "";
    document.getElementById("img").value = "";
    document.getElementById("data").value = "";
    document.getElementById("email").value = "";
    document.getElementById("cep").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("instagram").value = "";
    document.getElementById("github").value = "";
}

function renderizar() {
    let listHTML = document.getElementById("containerLista");
    listHTML.innerHTML = ""
    Agendalista.cadastroArray.forEach(agenda => {
        const cadastroDiv = `
        <div class="detalhes"onclick="renderizar2(${agenda.id})" >
        <p><b>nome:</b> ${agenda.nome} </p>
        <p><b>telefone:</b> ${agenda.telefone} </p>
        <p><b>celular:</b> ${agenda.celular} </p>
        <img src="${agenda.img}" alt="${agenda.img}">
        </div>

        `
        listHTML.innerHTML += cadastroDiv;

    })
}

function renderizar2(id) {
    let listHTML = document.getElementById("aside");
    listHTML.innerHTML = ""
    Agendalista.cadastroArray.filter(agenda => {
        if(agenda.id == id){

        
        const cadastroDiv = `
        <div class="detalhes2" >
        <p><b>Identificador:</b> ${agenda.id} </p>
        <p><b>nome:</b> ${agenda.nome} </p>
        <p><b>telefone:</b> ${agenda.telefone} </p>
        <p><b>celular:</b> ${agenda.celular} </p>
        <img src="${agenda.img}" alt="${agenda.img}">
        <p><b>data:</b>  ${agenda.data} </p>
        <p><b>Idade:</b> ${agenda.idade}</p>
        <p><b>Signo:</b> ${agenda.signo}</p>
        <p><b>email:</b> ${agenda.email} </p>
        <p><b>cep:</b>  ${agenda.cep} </p>
        <p><b>cidade:</b> ${agenda.cidade} </p>
        <p><b>instagram:</b>  ${agenda.instagram} </p>
        <p><b>github:</b>  ${agenda.github} </p>
        <a href="https://www.instagram.com/${agenda.instagram}"><i class="fa-brands fa-instagram" style="color: #ffffff;"></i>
        <a href="https://web.whatsapp.com${agenda.celular}"><i class="fa-brands fa-whatsapp" style="color: #ffffff;"></i>
       <a href="https://github.com/${agenda.github}"> <i class="fa-brands fa-github" style="color: #ffffff;"></i>
        </div>

        `
        listHTML.innerHTML += cadastroDiv;
        }
    })
}