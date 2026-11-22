#!/usr/bin/env python3
"""Troca os projetos do autor anterior pelos projetos do João Pedro.
Ordem: python3 apply_content.py && python3 apply_projects.py && python3 build.py
Idempotente: WorksView e moreWorks sao reescritos a partir de copias *.base."""
import os, re, shutil, sys
from PIL import Image

here = os.path.dirname(os.path.abspath(__file__))
root = os.path.dirname(here)
# no repositorio do GitHub o site publicado fica em public/ e estes scripts em fonte/
if os.path.isdir(os.path.join(root, 'public')): root = os.path.join(root, 'public')
P = lambda *a: os.path.join(here, *a)
R = lambda *a: os.path.join(root, *a)
sys.path.insert(0, here)
from apply_content import set_key  # reaproveita o editor de chaves (reexecuta apply_content, ok: idempotente)

DOMAIN = 'https://joaopedroguimaraes.pages.dev'

# ------------------------------------------------------------------ projetos
# slug = id convertido (camelCase -> kebab), igual ao Ae() do bundle
W = [
 dict(id='diarioOficialScanner', shot='diario-oficial-scanner', src='diario-oficial-scanner', bg='#f4efe4',
      tags=dict(type=['saas'], industry=['gov'], client=['own'], tech=['react','ts','supabase','ai']),
      title='Diário Oficial Scanner',
      pt='SaaS de monitoramento de diários oficiais (DOU, DOEs e DOMs) com classificação automática de publicações por IA e alertas por WhatsApp e e-mail; arquitetura orientada a eventos com cron jobs, 9 Edge Functions e pipeline próprio de avaliação do classificador.',
      en='A SaaS that monitors official gazettes (DOU, state and municipal) with AI classification of publications and WhatsApp and e-mail alerts; event-driven architecture with cron jobs, 9 Edge Functions and a custom pipeline to evaluate the classifier.',
      fr='SaaS de veille des journaux officiels brésiliens (DOU, États et communes) avec classification des publications par IA et alertes WhatsApp et e-mail ; architecture événementielle avec cron jobs, 9 Edge Functions et pipeline d’évaluation du classifieur.'),
 dict(id='assinaAi', shot='assina-ai', src='assina-ai', bg='#ffffff',
      tags=dict(type=['saas'], industry=['legal'], client=['own'], tech=['react','ts','supabase']),
      title='Assina.ai',
      pt='Plataforma de assinatura digital de contratos com conformidade PAdES/ICP-Brasil, gestão de envelopes e templates, controle de acesso por papéis (RBAC) e trilha de auditoria completa.',
      en='A digital contract-signing platform compliant with PAdES/ICP-Brasil: envelopes and templates, role-based access control (RBAC) and a full audit trail.',
      fr='Plateforme de signature électronique de contrats conforme PAdES/ICP-Brasil : enveloppes et modèles, contrôle d’accès par rôles (RBAC) et piste d’audit complète.'),
 dict(id='akuraAds', shot='akura-ads', src='trafego-pago', bg='#071a33',
      tags=dict(type=['dashboard'], industry=['marketing'], client=['own'], tech=['react','ts','ai']),
      title='Akura Ads · Tráfego Pago',
      pt='Gerenciador de anúncios no estilo Meta Ads Manager: campanhas, conjuntos de anúncios, criativos, públicos, geração de copy por IA e testes A/B. O projeto mais extenso do portfólio, com 46 telas.',
      en='An ads manager in the style of Meta Ads Manager: campaigns, ad sets, creatives, audiences, AI-generated copy and A/B tests. The largest project in the portfolio, with 46 screens.',
      fr='Gestionnaire de publicités façon Meta Ads Manager : campagnes, ensembles de publicités, créas, audiences, textes générés par IA et tests A/B. Le plus grand projet du portfolio, avec 46 écrans.'),
 dict(id='myDashboard', shot='my-dashboard', src='my-dashboard', bg='#f6f3ff',
      tags=dict(type=['dashboard'], industry=['data'], client=['own'], tech=['react','ts','ai']),
      title='My Dashboard',
      pt='Criador de dashboards com integrações reais a fontes externas (Pipedrive, Google Sheets, Mercado Livre), geração de insights por IA e compartilhamento público de painéis.',
      en='A dashboard builder with real integrations (Pipedrive, Google Sheets, Mercado Livre), AI-generated insights and public dashboard sharing.',
      fr='Créateur de tableaux de bord avec de vraies intégrations (Pipedrive, Google Sheets, Mercado Livre), insights générés par IA et partage public des tableaux.'),
 dict(id='liveCoach', shot='live-coach', src='live-coach', bg='#0b0d12',
      tags=dict(type=['platform'], industry=['sales'], client=['own'], tech=['react','supabase','ai']),
      title='Live Coach',
      pt='Coaching de atendimento em tempo real: recebe a transcrição ao vivo via WebSocket, analisa com IA a cada ciclo e exibe checklist dinâmico, alertas por palavra-chave e base de conhecimento (RAG).',
      en='Real-time call coaching: takes the live transcript over WebSocket, analyses it with AI every cycle and shows a dynamic checklist, keyword alerts and a knowledge base (RAG).',
      fr='Coaching d’appels en temps réel : reçoit la transcription en direct via WebSocket, l’analyse par IA à chaque cycle et affiche une checklist dynamique, des alertes par mot-clé et une base de connaissances (RAG).'),
 dict(id='briefbot', shot='briefbot', src='briefbot', bg='#0f1115',
      tags=dict(type=['platform'], industry=['services'], client=['own'], tech=['react','supabase','ai']),
      title='BriefBot',
      pt='Plataforma de reuniões com videoconferência, transcrição em tempo real e geração automática de resumos e action items por IA, com notificações por e-mail.',
      en='A meetings platform with video calls, real-time transcription and AI-generated summaries and action items, with e-mail notifications.',
      fr='Plateforme de réunions avec visioconférence, transcription en temps réel, résumés et actions générés par IA et notifications par e-mail.'),
 dict(id='gabineteConectado', shot='gabinete-conectado', src='gabinete-conectado', bg='#14452f',
      tags=dict(type=['platform'], industry=['gov'], client=['own'], tech=['react','ts','supabase']),
      title='Gabinete Conectado',
      pt='Sistema de gestão para gabinete parlamentar: agenda integrada ao Google Calendar, controle da CEAP, tramitação de projetos de lei e verbas, com controle de acesso por papéis (RBAC).',
      en='A management system for a parliamentary office: agenda synced with Google Calendar, expense quota (CEAP) control, bill and budget tracking, with role-based access control.',
      fr='Système de gestion pour un cabinet parlementaire : agenda synchronisé avec Google Calendar, suivi des frais de mandat (CEAP), des projets de loi et des crédits, avec contrôle d’accès par rôles.'),
 dict(id='juristechAi', shot='juristech-ai', src='juristech-ai', bg='#0a0f1a',
      tags=dict(type=['saas'], industry=['legal'], client=['own'], tech=['react','ts','supabase','ai']),
      title='Juristech AI',
      pt='Plataforma jurídica com geração de petições assistida por IA e gestão de casos, clientes e publicações.',
      en='A legal platform with AI-assisted petition drafting and management of cases, clients and publications.',
      fr='Plateforme juridique avec rédaction de requêtes assistée par IA et gestion des dossiers, des clients et des publications.'),
 dict(id='guerraDeCartas', shot='guerra-de-cartas', src='guerra-de-cartas', bg='#6fb7e6',
      url='https://guerra-de-cartas-3d.pages.dev/', host='guerra-de-cartas-3d.pages.dev',
      tags=dict(type=['game'], industry=['games'], client=['own'], tech=['react','ts','three']),
      title='Guerra de Cartas',
      pt='Jogo de cartas em 3D no navegador, projeto de fã inspirado em Card Wars (Hora de Aventura): batalhas por turnos com criaturas animadas, arenas, campanha e trilha sonora. React Three Fiber, GSAP e Zustand. Sem fins comerciais. Jogável online.',
      en='A 3D card game in the browser, a fan project inspired by Card Wars (Adventure Time): turn-based battles with animated creatures, arenas, a campaign and soundtrack. React Three Fiber, GSAP and Zustand. Non-commercial. Playable online.',
      fr='Jeu de cartes en 3D dans le navigateur, projet de fan inspiré de Card Wars (Adventure Time) : combats au tour par tour avec créatures animées, arènes, campagne et bande-son. React Three Fiber, GSAP et Zustand. Sans but commercial.'),
 dict(id='arqStudio', shot='arq-studio', src='arq3d-studio', bg='#fafafa',
      tags=dict(type=['saas'], industry=['design'], client=['own'], tech=['react','ts','three','ai']),
      title='Arq3D Studio',
      pt='Plataforma de IA para arquitetura: transforma uma foto, planta ou referência em modelo 3D pronto para Lumion, SketchUp ou Revit.',
      en='An AI platform for architects: turns a photo, floor plan or reference into a 3D model ready for Lumion, SketchUp or Revit.',
      fr='Plateforme d’IA pour l’architecture : transforme une photo, un plan ou une référence en modèle 3D prêt pour Lumion, SketchUp ou Revit.'),
 dict(id='wasabii', shot='wasabii', src='project-canvas', bg='#050505',
      tags=dict(type=['saas'], industry=['design'], client=['own'], tech=['react','ts','three']),
      title='Wasabii',
      pt='Plataforma de modelagem 3D para moda: organize projetos, colabore com a equipe e trabalhe em um editor 3D feito para a web.',
      en='A 3D modelling platform for fashion: organise projects, collaborate with your team and work in a 3D editor built for the web.',
      fr='Plateforme de modélisation 3D pour la mode : organisez vos projets, collaborez en équipe et travaillez dans un éditeur 3D pensé pour le web.'),
 dict(id='megaAutomacao', shot='mega-automacao', src='mega-automacao', bg='#0b0b10',
      tags=dict(type=['platform'], industry=['marketing'], client=['own'], tech=['react','ts','ai']),
      title='Mega Automação',
      pt='Automação de redes sociais com IA: posts e visuais gerados por IA, agenda, analytics e piloto automático para Instagram, TikTok, LinkedIn, YouTube e outras redes.',
      en='Social media automation with AI: AI-generated posts and visuals, scheduling, analytics and autopilot for Instagram, TikTok, LinkedIn, YouTube and more.',
      fr='Automatisation des réseaux sociaux par IA : posts et visuels générés par IA, planification, analytics et pilote automatique pour Instagram, TikTok, LinkedIn, YouTube et d’autres.'),
 dict(id='agendaFlow', shot='agenda-flow', src='agendaflow', bg='#f5f7f4',
      url='https://pedrodereky.github.io/AgendaFlow/', host='pedrodereky.github.io/AgendaFlow',
      tags=dict(type=['platform'], industry=['services'], client=['own'], tech=['js']),
      title='AgendaFlow',
      pt='Agendamento full-stack para serviços locais: serviços, profissionais e horários com regras de negócio reais e uma experiência simples. Demo online.',
      en='Full-stack booking for local businesses: services, professionals and time slots with real business rules and a simple experience. Live demo.',
      fr='Prise de rendez-vous full-stack pour les commerces de proximité : services, professionnels et créneaux avec de vraies règles métier et une expérience simple. Démo en ligne.'),
]
HOME = ['diarioOficialScanner', 'assinaAi', 'akuraAds', 'myDashboard', 'liveCoach', 'briefbot', 'gabineteConectado']

def slug(i): return re.sub(r'([0-9])([a-zA-Z])', r'\1-\2', re.sub(r'([a-z])([A-Z0-9])', r'\1-\2', i)).lower()
for w in W:
    w.setdefault('url', f'/projetos/{slug(w["id"])}/')
    w.setdefault('host', f'/projetos/{slug(w["id"])}')

# ------------------------------------------------------------------ imagens
shots = P('shots'); out = R('assets', 'works'); os.makedirs(out, exist_ok=True)
for w in W:
    for size in ('wide', 'narrow'):
        Image.open(os.path.join(shots, f'{w["src"]}-{size}.png')).convert('RGB').save(
            os.path.join(out, f'{w["shot"]}-{size}.webp'), 'WEBP', quality=82, method=6)

# ------------------------------------------------------------------ paginas /projetos/<slug>/ (abertas no portal)
for w in W:
    if not w['url'].startswith('/projetos/'): continue
    d = R('projetos', slug(w['id'])); os.makedirs(d, exist_ok=True)
    open(os.path.join(d, 'index.html'), 'w', encoding='utf8').write(f'''<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{w["title"]} — João Pedro Guimarães</title>
<meta name="robots" content="noindex">
<style>
  html, body {{ margin: 0; height: 100%; background: {w["bg"]}; }}
  picture, img {{ display: block; width: 100%; height: 100%; }}
  img {{ object-fit: cover; object-position: top center; }}
</style>
</head>
<body>
<picture>
  <source media="(max-aspect-ratio: 1/1)" srcset="/assets/works/{w["shot"]}-narrow.webp">
  <img src="/assets/works/{w["shot"]}-wide.webp" alt="{w["title"]}">
</picture>
</body>
</html>
''')

# ------------------------------------------------------------------ bundle (index.orig.js)
o = open(P('index.orig.js'), encoding='utf8').read()

def js_work(w, home=False):
    t = w['tags']
    tags = ', '.join(f"{k}: [{', '.join('`'+x+'`' for x in v)}]" for k, v in t.items())
    if home:
        return f"""    {{
      id: `{w['id']}`,
      url: `{w['url']}`,
      host: `{w['host']}`,
      images: {{ wide: {w['_wide']}, narrow: {w['_narrow']} }},
      background: `{w['bg']}`,
      embed: !0,
    }},
"""
    return f"""    {{
      id: `{w['id']}`,
      shot: `{w['shot']}`,
      url: `{w['url']}`,
      host: `{w['host']}`,
      background: `{w['bg']}`,
      embed: !0,
      tags: {{ {tags} }},
    }},
"""

# lista completa (Se)
a = o.index('  Se = [\n'); b = o.index('\n  ],\n', a)
o = o[:a] + '  Se = [\n' + ''.join(js_work(w) for w in W) + '  ]' + o[b + 4:]

# 7 da home (R_) e as constantes de imagem exportadas para o moreWorks antigo
VARS = [('D_', 'E_'), ('N_', 'M_'), ('T_', 'w_'), ('k_', 'O_'), ('L_', 'I_'), ('F_', 'P_'), ('j_', 'A_')]
byid = {w['id']: w for w in W}
consts = ''
for (wv, nv), wid in zip(VARS, HOME):
    w = byid[wid]; w['_wide'], w['_narrow'] = wv, nv
    consts += f"  {nv} = `/assets/works/{w['shot']}-narrow.webp`,\n  {wv} = `/assets/works/{w['shot']}-wide.webp`,\n"
a = min(o.index(f'  {v} = `/assets/') for pair in VARS for v in pair); b = o.index('\n  ],\n', o.index('  R_ = [', a))
o = o[:a] + consts + '  R_ = [\n' + ''.join(js_work(byid[i], home=True) for i in HOME) + '  ]' + o[b + 4:]
open(P('index.orig.js'), 'w', encoding='utf8').write(o)

# ------------------------------------------------------------------ textos (pt/fr/en)
FILTERS = {
 'pt': dict(type=dict(saas='SaaS', dashboard='Dashboard', platform='Plataforma', game='Jogo'),
            industry=dict(gov='Setor público', legal='Jurídico', marketing='Marketing', sales='Vendas e atendimento', data='Dados e BI', services='Serviços', design='Arquitetura e design', games='Jogos'),
            client=dict(own='Próprio')),
 'en': dict(type=dict(saas='SaaS', dashboard='Dashboard', platform='Platform', game='Game'),
            industry=dict(gov='Public sector', legal='Legal', marketing='Marketing', sales='Sales and support', data='Data and BI', services='Services', design='Architecture and design', games='Games'),
            client=dict(own='Own')),
 'fr': dict(type=dict(saas='SaaS', dashboard='Tableau de bord', platform='Plateforme', game='Jeu'),
            industry=dict(gov='Secteur public', legal='Juridique', marketing='Marketing', sales='Ventes et support', data='Données et BI', services='Services', design='Architecture et design', games='Jeux'),
            client=dict(own='Personnel')),
}
HINT = {
 'pt': 'SaaS, dashboards, plataformas com IA e jogos — filtre por tipo, setor e tecnologia. Alguns repositórios são privados; o código está disponível sob solicitação.',
 'en': 'SaaS, dashboards, AI platforms and games — filter by type, industry and technology. Some repositories are private; code is available on request.',
 'fr': 'SaaS, tableaux de bord, plateformes d’IA et jeux — filtrez par type, secteur et technologie. Certains dépôts sont privés ; le code est disponible sur demande.',
}
for lang, fn in [('pt', 'pt-block'), ('fr', 'fr-block'), ('en', 'en-block')]:
    s = open(P(fn + '.txt'), encoding='utf8').read()
    s = set_key(s, 'works', {i: dict(title=byid[i]['title'], text=byid[i][lang]) for i in HOME})
    s = set_key(s, 'moreWorks', {w['id']: dict(title=w['title'], text=w[lang]) for w in W})
    s = set_key(s, 'workFilterValues', FILTERS[lang])
    s = set_key(s, 'allWorksHint', HINT[lang])
    open(P(fn + '.txt'), 'w', encoding='utf8').write(s)

# ------------------------------------------------------------------ chunks separados
def from_base(path):
    base = P('chunks', os.path.basename(path) + '.base')
    os.makedirs(P('chunks'), exist_ok=True)
    if not os.path.exists(base): shutil.copy(path, base)
    return open(base, encoding='utf8').read()

# moreWorks: mapa shot -> imagem
mw = R('assets', 'moreWorks-CX-Gvj0p.js'); from_base(mw)
mp = ','.join(f'"../assets/works/{w["shot"]}-{s}.webp":`/assets/works/{w["shot"]}-{s}.webp`' for w in W for s in ('narrow', 'wide'))
open(mw, 'w', encoding='utf8').write(
    'import{et as r,nt as u,rt as m}from"./index-w3BRHVFD.js";var _=Object.assign({' + mp + '}),'
    'v=(e,t)=>_[`../assets/works/${u(e,t)}`]??null,y=e=>{let t=v(e,r.wide);return{wide:t,narrow:v(e,r.narrow)??t}},'
    'b=m.map(e=>({...e,images:y(e)}));export{b as t};')

# WorksView: facetas do filtro e rotulos de tecnologia
wv = [f for f in os.listdir(R('assets')) if f.startswith('WorksView-') and f.endswith('.js')][0]
s = from_base(R('assets', wv))
a = s.index(',J=[{id:`type`'); b = s.index(',se=e=>', a)
s = s[:a] + (',J=[{id:`type`,values:[`saas`,`dashboard`,`platform`,`game`]},'
             '{id:`industry`,values:[`gov`,`legal`,`marketing`,`sales`,`data`,`services`,`design`,`games`]},'
             '{id:`tech`,values:[`react`,`ts`,`supabase`,`ai`,`three`,`js`]}],'
             'oe={client:{},tech:{react:`React`,ts:`TypeScript`,supabase:`Supabase`,ai:`IA generativa`,three:`three.js`,js:`JavaScript`}}') + s[b:]
open(R('assets', wv), 'w', encoding='utf8').write(s)

# CaseView: rotulo acessivel do link "voltar" dizia "site"
cv = [f for f in os.listdir(R('assets')) if f.startswith('CaseView-') and f.endswith('.js')][0]
s = from_base(R('assets', cv)).replace('"aria-label":`site — ${', '"aria-label":`João Pedro Guimarães — ${')
open(R('assets', cv), 'w', encoding='utf8').write(s)

# tela de abertura (BIOS) da cena 3D ainda dizia "Site"
gh = [f for f in os.listdir(R('assets')) if f.startswith('glyphHeroScene-') and f.endswith('.js')][0]
s = from_base(R('assets', gh))
assert '`Site BIOS v6.66`,`(C) 2026 SITE`' in s or '`JP BIOS v6.66`' in s
s = s.replace('`Site BIOS v6.66`,`(C) 2026 SITE`', '`JP BIOS v6.66`,`(C) 2026 JOÃO PEDRO`')
open(R('assets', gh), 'w', encoding='utf8').write(s)

# ------------------------------------------------------------------ sitemap / urls
urls = ['/', '/work/', '/privacy/'] + [f'/work/{slug(w["id"])}/' for w in W]
open(R('urls.txt'), 'w').write('\n'.join(urls) + '\n')
open(R('sitemap.xml'), 'w').write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
    + ''.join(f'\t<url><loc>{DOMAIN}{u}</loc><lastmod>2026-11-22</lastmod></url>\n' for u in urls) + '</urlset>\n')
print('ok', len(W), 'projetos')
