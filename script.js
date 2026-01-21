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

        // ABRIR LINKS

        function toggleMenu() {
            // 1. Selecionamos os elementos que vamos mexer
            var conteudo = document.getElementById("conteudoPizza");
            var texto = document.getElementById("textoBotao");

            // 2. Alternamos a classe 'ativo' no conteúdo
            // Isso faz ele aparecer ou sumir baseado no CSS que criamos
            conteudo.classList.toggle("ativo");

            // 3. Verificamos se está aberto para trocar o texto
            if (conteudo.classList.contains("ativo")) {
                texto.innerText = "VER MENOS";
            } else {
                texto.innerText = "EXPANDIR";
            }
        }