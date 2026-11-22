# Portfólio — João Pedro Guimarães

Site estático (Vue + three.js já compilados) publicado no Cloudflare Pages em
https://joaopedroguimaraes.pages.dev — em português, francês e inglês.

```
public/   ← pasta publicada (é isto que vai para o ar)
fonte/    ← scripts que geram os textos, os projetos e o bundle de public/
scripts/  ← checagem usada no CI
```

## Publicação

O Cloudflare Pages publica a pasta `public/` a cada push na branch `main` (sem comando de build).
Cada branch ganha um link de pré-visualização.

## Editar conteúdo

Os textos (PT/FR/EN), os projetos e os dados ficam em `fonte/`:

- `fonte/apply_content.py` — nome, hero, sobre, stack, cursos, formação, contato e privacidade.
- `fonte/apply_projects.py` — lista de projetos, descrições, filtros e capturas (`fonte/shots/*.png`).
- `fonte/apply_cleanup.py` — mantém fora do site as seções do template que não são usadas e falha o build se algum vestígio do template original voltar.

Depois de editar, regere o site:

```bash
cd fonte && python3 apply_content.py && python3 apply_projects.py && python3 apply_cleanup.py && python3 build.py
```

Requer Python 3 com Pillow (`pip install pillow`) para converter as capturas em WebP.

## Checagem

```bash
node scripts/check-site.mjs
```

Confere que todo arquivo citado pelo site existe em `public/`. Roda no CI a cada push e pull request.
