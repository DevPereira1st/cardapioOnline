// Espera o documento carregar para melhor usabilidade 
document.addEventListener('DOMContentLoaded', function () {

    // Seleciona todos os containers que tem a classe 'imgdaPizza'
    var containers = document.querySelectorAll('.imgdaPizza');

    // Passa por cada container encontrado
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