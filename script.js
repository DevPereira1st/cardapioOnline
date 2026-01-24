
// PUXA ANO ANUAL PARA O COPYRIGHT  
document.getElementById("ano-copyright").textContent = new Date().getFullYear();

// API DE COMPARTILHAMENTO
const btnShare = document.getElementById('btn-compartilhar');

btnShare.addEventListener('click', async () => {

    // 1. Pergunta o nome do usuário antes de compartilhar
    let nomeUsuario = prompt("Qual o seu nome para colocar no convite?");

    // Se o usuário cancelar ou não digitar nada, definimos um padrão
    if (!nomeUsuario) {
        nomeUsuario = "Um amigo";
    }

    // 2. Montamos o texto dinâmico com o nome da pessoa e o local
    const mensagem = `🍕 Olá! ${nomeUsuario} está te convidando para dar uma olhada neste cardápio incrível!\n\n📍 Local: https://maps.app.goo.gl/aoP2dARxXpMtfNs5A`;

    // 3. Dados a serem compartilhados (Corrigido para não repetir propriedades)
    const shareData = {
        title: document.title,
        text: mensagem,
        url: "\nhttps://dallascardapio.vercel.app/" // O link do site fica separado do texto
    };

    try {
        if (navigator.share) {
            await navigator.share(shareData);
            console.log('Conteúdo compartilhado com sucesso!');
        } else {
            await navigator.clipboard.writeText(shareData.text + " " + shareData.url);
            alert('Link copiado para a área de transferência!');
        }
    } catch (err) {
        console.error('Erro ao compartilhar:', err);
    }
});

// FECHA E ABRE O CARDAPIO

function alternarMenu(idDoConteudo, botaoClicado) {
    // 1. Pega a div de conteúdo específica baseada no ID que enviamos no HTML
    var conteudo = document.getElementById(idDoConteudo);

    // 2. Adiciona ou remove a classe 'aberto' apenas nessa div
    conteudo.classList.toggle("aberto");

    // 3. Verifica se essa div específica abriu para trocar o texto do botão
    if (conteudo.classList.contains("aberto")) {
        botaoClicado.innerText = "EXPANDIR";
    } else {
        botaoClicado.innerText = "VER MENOS";
    }
}
// AUMENTA CADA IMAGEM INDEPENDENTE

// Espera o documento carregar (opcional, mas recomendado)
document.addEventListener('DOMContentLoaded', function () {

    // 1. Seleciona todos os containers que possuem a classe 'imgdaPizza'
    // Cada um desses containers tem dentro de si uma <img> e um <div class="modal">
    var containers = document.querySelectorAll('.imgdaPizza');

    // 2. Passa por cada container encontrado (loop)
    containers.forEach(function (container) {

        // Dentro deste container específico, buscamos os elementos:
        var imgPequena = container.querySelector('img');      // A imagem clicável
        var modal = container.querySelector('.modal');        // O modal escondido
        var modalImg = modal.querySelector('.modal-conteudo');// Onde a foto grande aparece
        var span = modal.querySelector('.fechar');            // O botão X

        // --- Configura o clique na imagem pequena ---
        imgPequena.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src; // Copia o src da imagem clicada para o modal
        }

        // --- Configura o clique no X ---
        span.onclick = function () {
            modal.style.display = "none";
        }

        // --- Configura o clique fora da imagem (fundo escuro) ---
        modal.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }
    });

});