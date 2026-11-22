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

## Formulário de contato

Os formulários "Fale comigo" e "Achou um bug?" enviam para `functions/api/contato.js` (Cloudflare Pages Function),
que manda cada mensagem por e-mail usando o [Resend](https://resend.com). Configure em
Cloudflare → Workers & Pages → joaopedroguimaraes → Settings → Variables and Secrets (ambiente Production):

| Variável | Valor |
|---|---|
| `RESEND_API_KEY` (tipo *Secret*) | chave criada em resend.com → API Keys |
| `CONTACT_TO` | e-mail que recebe as mensagens |
| `CONTACT_FROM` (opcional) | remetente; sem domínio próprio, o padrão `Portfólio <onboarding@resend.dev>` só entrega para o e-mail da conta do Resend |

Depois de salvar, refaça o último deploy. Sem a chave, a função responde 503 e o site mostra o e-mail para contato direto.

```bash
node scripts/test-contato.mjs   # testa a função sem rede
```
