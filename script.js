        // Ano Atual
        document.getElementById("ano-copyright").textContent = new Date().getFullYear();

        // compartilhamento
        const btnShare = document.getElementById('btn-compartilhar');

        btnShare.addEventListener('click', async () => {
            // Dados a serem compartilhados
            const shareData = {
                title: document.title, // Título da página atual
                text: 'Dê uma olhada neste conteúdo incrível!',
                url: "https://maps.app.goo.gl/aoP2dARxXpMtfNs5A" // URL da página atual
            };

            try {
                // Verifica se o navegador suporta a API de compartilhamento nativa
                if (navigator.share) {
                    await navigator.share(shareData);
                    console.log('Conteúdo compartilhado com sucesso!');
                } else {
                    // Fallback: Copia para a área de transferência se não suportar nativo
                    await navigator.clipboard.writeText(shareData.url);
                    alert('Link copiado para a área de transferência!');
                }
            } catch (err) {
                console.error('Erro ao compartilhar:', err);
            }
        });

function alternarMenu() {
    var conteudo = document.getElementById("conteudoPizza");
    var botao = document.getElementById("btnAcao");

    // 1. Adiciona ou remove a classe 'aberto' do conteúdo
    conteudo.classList.toggle("aberto");

    // 2. Verifica se abriu para trocar o texto
    if (conteudo.classList.contains("aberto")) {
        botao.innerText = "VER MENOS";
    } else {
        botao.innerText = "EXPANDIR";
    }
}

// Aumenta imagem

// Pega os elementos
var modal = document.getElementById("meuModal");
var img = document.getElementById("minhaImagem");
var modalImg = document.getElementById("imgExpandida");

// Ao clicar na imagem pequena:
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src; // Usa a mesma fonte da imagem clicada
}

// Pega o botão de fechar (o X)
var span = document.getElementsByClassName("fechar")[0];

// Ao clicar no X, fecha o modal
span.onclick = function() { 
  modal.style.display = "none";
}

// (Opcional) Fechar ao clicar fora da imagem
modal.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}