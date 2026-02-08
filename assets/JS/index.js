async function copyLink() {
  const url = window.location.href;
  const mensagem = `Confira todos os links oficiais do Aruik Gastrobar em um só lugar: ${url}`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: "Aruik Gastrobar | Links Oficiais",
        text: mensagem
      });
    } catch (err) {
      console.error("Erro ao compartilhar:", err);
    }
  } else {
    try {
      await navigator.clipboard.writeText(mensagem);
      alert("Link copiado com sucesso!");
    } catch (err) {
      alert("Não foi possível copiar o link.");
    }
  }
}