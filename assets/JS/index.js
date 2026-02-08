async function copyLink() {
  const url = window.location.href;
  const mensagem = `Confira todos os links oficiais do Aruik Gastrobar em um só lugar: ${url}`;

  try {
    if (navigator.share) {
      await navigator.share({
        title: "Aruik Gastrobar | Links Oficiais",
        text: mensagem
      });
    } else {
      await navigator.clipboard.writeText(mensagem);
      alert("Link copiado com sucesso!");
    }
  } catch (err) {
    console.error("Erro ao compartilhar:", err);
  }
}