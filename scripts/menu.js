// PUXA ANO ANUAL PARA O COPYRIGHT  
document.getElementById("ano-copyright").textContent = new Date().getFullYear();

// FECHA E ABRE O CARDAPIO

function alternarMenu(idDoConteudo, botaoClicado) {
    // Pega a div de cada conteúdo no ID
    var conteudo = document.getElementById(idDoConteudo);

    // Adiciona ou remove a classe 'aberto' apenas na div especifica
    conteudo.classList.toggle("aberto");

    // Verifica se a div específica abriu, se estiver aberta troca o texto do botão
    if (conteudo.classList.contains("aberto")) {
        botaoClicado.innerText = "EXPANDIR";
    } else {
        botaoClicado.innerText = "VER MENOS";
    }
}