const btnShare = document.getElementById('btn-compartilhar');

btnShare.addEventListener('click', async () => {

    // Cria uma caixa de texto e pergunta o nome do usuário antes de compartilhar.
    let nomeUsuario = prompt("Qual o seu nome para colocar no convite?");

    // Se o usuário não digitar nada, definimos um padrão
    if (!nomeUsuario) {
        nomeUsuario = "Um amigo";
    }

    // Texto na qual será compartilhado
    const mensagem = `🍕 Olá! ${nomeUsuario} está te convidando para dar uma olhada neste cardápio incrível!\n\n📍 Local: https://maps.app.goo.gl/aoP2dARxXpMtfNs5A`;

    // Dados que serão compartilhados
    const shareData = {
        title: document.title,
        text: mensagem,
        url: "\nhttps://dallascardapio.vercel.app/"
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
