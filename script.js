
const shareData = {
  title: 'Cardapio Dallas Pizzaria',
  text: 'Confirá nossas pizzas',
  url: 'https://maps.app.goo.gl/9qHAa7iF7AABQJG98'
};

const btn = document.querySelector('compartilharBtn');

btn.addEventListener('click', async () => {
  try {
    // Abre a aba nativa do sistema (Android, iOS, Windows, etc.)
    await navigator.share(shareData);
    console.log('Compartilhado com sucesso');
  } catch (err) {
    console.log('O usuário cancelou ou o navegador não suporta: ' + err);
  }
});