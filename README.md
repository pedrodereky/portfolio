# Portfólio — João Pedro Guimarães

Site estático (HTML, CSS e JavaScript, com a cena 3D em three.js) publicado no Cloudflare Pages.

## Estrutura

```
public/            ← pasta publicada (é isto que vai para o ar)
  index.html
  config.js        ← vídeo, música e contatos
  projects.js      ← lista de projetos
  assets/
    css/style.css
    js/            ← gerado pelo build (não editar à mão)
    fonts/         ← Archivo e Newsreader (auto-hospedadas)
    media/         ← coloque aqui o mp3 da trilha e, se quiser, o vídeo
src/               ← código-fonte do JavaScript (cena 3D, som, azulejos)
```

## Como trocar o vídeo

Edite `public/config.js`:

```js
video: { tipo: "youtube", id: "ID_DO_VIDEO", src: "", capa: "", duracao: "2 min" }
```

- YouTube (recomendado, pode ser "não listado"): `tipo: "youtube"` e o `id` do vídeo.
- Vimeo: `tipo: "vimeo"` e o `id`.
- Arquivo próprio: `tipo: "arquivo"` e `src: "assets/media/apresentacao.mp4"`. O Cloudflare Pages aceita arquivos de até 25 MB.

Enquanto `tipo` estiver vazio, o site mostra o espaço reservado "Vídeo em produção". A música abaixa sozinha quando o vídeo toca.

## Como trocar a música

1. Coloque o arquivo em `public/assets/media/` (por exemplo `trilha.mp3`, de preferência com menos de 5 MB).
2. Em `public/config.js`: `musica: { src: "assets/media/trilha.mp3", titulo: "Nome da faixa", artista: "Artista" }`.

Sem arquivo, o botão de som toca uma trilha ambiente gerada no próprio navegador. O som só começa quando o visitante clica em "Ligar som", porque os navegadores bloqueiam áudio automático.

## Como editar os projetos

Tudo está em `public/projects.js`. Cada projeto tem nome, área, resumo, descrição, stack, número de telas e de funções de back-end. `destaque: true` coloca o projeto na seção de destaques; `demo` e `repo` mostram links quando preenchidos.

## Desenvolvimento

```sh
npm install
npm run dev     # http://localhost:8788
npm run build   # gera public/assets/js
```

Só é preciso rodar o build quando algo em `src/` mudar. Mudanças em `config.js`, `projects.js`, `index.html` e no CSS vão direto.

## Publicação

O Cloudflare Pages publica a pasta `public/` a cada push na branch `main` (sem comando de build).

## Checagens

```sh
node scripts/check-projects.mjs   # valida public/projects.js e os totais do index.html
npm run build                     # regenera public/assets/js (versionado)
```

O GitHub Actions roda as duas em todo push e PR, e falha se `public/assets/js` não corresponder ao `src/` atual.
