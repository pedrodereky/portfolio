/*
  Configuração do portfólio — é aqui que entram o vídeo, a música e os contatos.

  VÍDEO
    tipo: "youtube" | "vimeo" | "arquivo" | ""   (vazio = mostra o espaço reservado)
    id:   ID do vídeo no YouTube (ex.: "dQw4w9WgXcQ") ou no Vimeo
    src:  caminho do arquivo quando tipo = "arquivo" (ex.: "assets/media/apresentacao.mp4")
    capa: imagem de capa opcional (ex.: "assets/media/capa-video.jpg")

  MÚSICA
    src: caminho do mp3 (ex.: "assets/media/trilha.mp3").
         Vazio = toca uma trilha ambiente gerada no próprio navegador.
    titulo / artista: aparecem no botão de som.
*/
window.SITE = {
  video: {
    tipo: "",
    id: "",
    src: "",
    capa: "",
    duracao: ""
  },
  musica: {
    src: "",
    titulo: "",
    artista: ""
  },
  contato: {
    email: "pedro.derek@icloud.com",
    github: "https://github.com/pedrodereky",
    linkedin: "",
    whatsapp: ""
  }
};
