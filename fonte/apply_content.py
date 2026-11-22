#!/usr/bin/env python3
"""Aplica o conteudo real (curriculo) nos blocos pt/fr/en e nos dados do bundle.
Idempotente: reescreve pt-block/fr-block/en-block a partir de *.base.txt e index.orig.js a partir de index.orig.base.js.
Depois rode build.py."""
import os, re, shutil
here = os.path.dirname(os.path.abspath(__file__))
P = lambda n: os.path.join(here, n)

# backups (so na primeira vez)
for src, base in [('pt-block.txt','pt-block.base.txt'),('fr-block.txt','fr-block.base.txt'),
                  ('en-block.txt','en-block.base.txt'),('index.orig.js','index.orig.base.js')]:
    if not os.path.exists(P(base)): shutil.copy(P(src), P(base))

def esc(s): return s.replace('\\','\\\\').replace('`','\\`').replace('${','\\${')
def js(v, ind=6):
    pad = ' '*ind
    if isinstance(v, str): return '`'+esc(v)+'`'
    if isinstance(v, list):
        if all(isinstance(x,str) for x in v) and sum(len(x) for x in v) < 70:
            return '['+', '.join(js(x) for x in v)+']'
        return '[\n'+''.join(pad+'  '+js(x,ind+2)+',\n' for x in v)+pad+']'
    if isinstance(v, dict):
        return '{\n'+''.join(pad+'  '+k+': '+js(x,ind+2)+',\n' for k,x in v.items())+pad+'}'
    raise TypeError(v)

def span_end(s, i):
    """i = indice do primeiro char do valor; devolve indice logo apos o valor."""
    depth = 0
    while i < len(s):
        c = s[i]
        if c == '`':
            i += 1
            while s[i] != '`':
                i += 2 if s[i] == '\\' else 1
        elif c in '[{(': depth += 1
        elif c in ']})':
            depth -= 1
        elif c == ',' and depth == 0: return i
        i += 1
        if depth < 0: return i-1
    return i

def set_key(s, key, value, indent=6):
    m = re.search(r'^'+' '*indent+re.escape(key)+r': ', s, re.M)
    assert m, key
    a = m.end(); b = span_end(s, a)
    return s[:a] + js(value, indent) + s[b:]

# ------------------------------------------------------------------ conteudo
L = {}
L['pt'] = dict(
 heroKicker='João Pedro Guimarães — desenvolvedor full stack',
 heroTitle='Ideias que viram produto',
 heroText='Estudante de Ciência da Computação (4º semestre), com foco em back-end, front-end e IA aplicada. De forma independente, construí mais de 20 aplicações e protótipos full-stack: SaaS, dashboards e ferramentas com classificação automática, RAG e análise em tempo real. Autodidata, com mais de 45 cursos e bootcamps concluídos, busco minha primeira oportunidade como júnior, trainee ou estagiário para evoluir junto a uma equipe de tecnologia.',
 heroFacts=[['20+','aplicações full-stack'],['45+','cursos e bootcamps'],['4º','semestre de Ciência da Computação']],
 nav=['Projetos','Sobre','Stack','Cursos','Contato'],
 cta='Fale comigo',
 aboutKicker='Sobre', aboutTitle='Do problema ao produto',
 aboutText=[
  'Sou estudante de Ciência da Computação no Centro Universitário UDF (4º semestre) e desenvolvedor full stack em formação, com foco em IA aplicada e UX.',
  'Construí de forma independente mais de 20 aplicações: classificação automática, RAG, análise em tempo real e automação de atendimento. Costumo começar pelo PRD e pelo fluxo do usuário, depois prototipo e implemento.',
  'Aprendo na prática: mais de 45 cursos e bootcamps (Santander Full Stack, DIO/AWS, AWS Cloud Practitioner, Segurança Cibernética) e, principalmente, projetos próprios que levo até o fim.'],
 aboutMeta=[['Baseado em','Brasília, DF'],['Idiomas','Português — nativo, francês e espanhol — básico'],['Busco','Estágio, trainee ou vaga júnior, em equipe']],
 stackKicker='Stack', stackTitle='Com o que eu trabalho',
 stackHint='As tecnologias que uso nos meus projetos — do front-end à IA.',
 stackGroups=dict(frontend='Front-end', backend='Back-end e dados', ai='IA aplicada', product='Produto e UX', tooling='Ferramentas'),
 experienceKicker='Cursos', experienceTitle='Como eu aprendo',
 experienceHint='Bootcamps, certificações e formação prática — mais de 45 cursos concluídos.',
 experienceModes=dict(full='Bootcamp', part='Curso', alongside='Formação'),
 experienceAlongside='Diversos', experiencePresent='atual',
 experience=dict(
  viver=dict(summary='Formação prática em automação e agentes de IA.', points=['WhatsApp Business API e atendimento multiagentes.','Tráfego pago com IA e automação de processos.']),
  eldorado=dict(summary='Curso de 24h sobre segurança cibernética, do ataque à defesa.', points=['Fundamentos de ataque e defesa em segurança da informação.']),
  cloud=dict(summary='Certificação de fundamentos da nuvem AWS.', points=['Conceitos de computação em nuvem, serviços e segurança na AWS.']),
  genai=dict(summary='Bootcamps práticos de Machine Learning e IA generativa na AWS.', points=['Amazon Bedrock e Amazon SageMaker em projetos práticos.']),
  santander=dict(summary='Bootcamp Santander Full Stack Developer (125h) e formação complementar com mais de 45 cursos, projetos práticos e mentorias.', points=['IA, Machine Learning, Java, Spring Boot, Angular, Git/GitHub e bancos de dados.','Base dos meus primeiros projetos full-stack.']),
  others=dict(summary='Cursos complementares.', points=['Gestão Arquivística de Documentos.','Desenvolvimento de Equipes.','Justiça e Diálogo Social (140h) — Universidade Aberta do Nordeste.','Informática – Pacote Office (80h) — Infobrás.']),
 ),
 educationKicker='Formação', educationTitle='Onde eu estudo',
 education=dict(udf=dict(degree='Graduação', field='Ciência da Computação', note='Cursando o 4º semestre (2025–2028), com foco em desenvolvimento back-end, front-end e soluções de Inteligência Artificial.')),
 schools=dict(udf=dict(name='Centro Universitário UDF', city='Brasília')),
 contactKicker='Contato', contactTitle='Fale comigo',
 contactHint='Conte-me sobre a oportunidade ou o projeto — eu mesmo respondo.',
 owner='João Pedro Guimarães',
 meta=dict(
  homeDescription='João Pedro Guimarães, desenvolvedor full stack júnior: React, TypeScript, Supabase e IA aplicada. Mais de 20 aplicações e protótipos, estudante de Ciência da Computação.',
  worksDescription='Projetos de João Pedro Guimarães: SaaS, dashboards e ferramentas com IA aplicada, feitos com React, TypeScript e Supabase.',
  privacyDescription='Quais dados este site coleta, onde ficam guardados e como falar comigo sobre eles.'),
)
L['en'] = dict(
 heroKicker='João Pedro Guimarães — full stack developer',
 heroTitle='Ideas that become products',
 heroText='Computer Science student (4th semester) focused on back-end, front-end and applied AI. On my own, I built 20+ full-stack apps and prototypes: SaaS products, dashboards and tools with automatic classification, RAG and real-time analysis. Self-taught, with 45+ courses and bootcamps completed, I am looking for my first opportunity as a junior, trainee or intern to grow alongside a tech team.',
 heroFacts=[['20+','full-stack apps'],['45+','courses and bootcamps'],['4th','semester of Computer Science']],
 nav=['Projects','About','Stack','Courses','Contact'],
 cta='Get in touch',
 aboutKicker='About', aboutTitle='From problem to product',
 aboutText=[
  'I am a Computer Science student at Centro Universitário UDF (4th semester) and a full stack developer in training, focused on applied AI and UX.',
  'On my own I built 20+ applications: automatic classification, RAG, real-time analysis and support automation. I usually start from the PRD and the user flow, then prototype and implement.',
  'I learn by doing: 45+ courses and bootcamps (Santander Full Stack, DIO/AWS, AWS Cloud Practitioner, Cybersecurity) and, above all, my own projects that I take to the end.'],
 aboutMeta=[['Based in','Brasília, Brazil'],['Languages','Portuguese — native, French and Spanish — basic'],['Looking for','Internship, trainee or junior role, in a team']],
 stackKicker='Stack', stackTitle='What I work with',
 stackHint='The technologies I use in my projects — from front-end to AI.',
 stackGroups=dict(frontend='Front-end', backend='Back-end and data', ai='Applied AI', product='Product and UX', tooling='Tooling'),
 experienceKicker='Courses', experienceTitle='How I learn',
 experienceHint='Bootcamps, certifications and hands-on training — 45+ courses completed.',
 experienceModes=dict(full='Bootcamp', part='Course', alongside='Training'),
 experienceAlongside='Various', experiencePresent='current',
 experience=dict(
  viver=dict(summary='Hands-on training in automation and AI agents.', points=['WhatsApp Business API and multi-agent customer support.','Paid traffic with AI and process automation.']),
  eldorado=dict(summary='24h course on cybersecurity, from attack to defense.', points=['Fundamentals of attack and defense in information security.']),
  cloud=dict(summary='AWS cloud fundamentals certification.', points=['Cloud computing concepts, services and security on AWS.']),
  genai=dict(summary='Hands-on bootcamps in Machine Learning and generative AI on AWS.', points=['Amazon Bedrock and Amazon SageMaker in practical projects.']),
  santander=dict(summary='Santander Full Stack Developer bootcamp (125h) and complementary training with 45+ courses, practical projects and mentoring.', points=['AI, Machine Learning, Java, Spring Boot, Angular, Git/GitHub and databases.','The base of my first full-stack projects.']),
  others=dict(summary='Complementary courses.', points=['Records Management.','Team Development.','Justice and Social Dialogue (140h) — Universidade Aberta do Nordeste.','Computing – Office Suite (80h) — Infobrás.']),
 ),
 educationKicker='Education', educationTitle='Where I study',
 education=dict(udf=dict(degree='Bachelor’s', field='Computer Science', note='Currently in the 4th semester (2025–2028), focused on back-end and front-end development and Artificial Intelligence solutions.')),
 schools=dict(udf=dict(name='Centro Universitário UDF', city='Brasília')),
 contactKicker='Contact', contactTitle='Get in touch',
 contactHint='Tell me about the opportunity or the project — I answer myself.',
 owner='João Pedro Guimarães',
 meta=dict(
  homeDescription='João Pedro Guimarães, junior full stack developer: React, TypeScript, Supabase and applied AI. 20+ apps and prototypes, Computer Science student.',
  worksDescription='Projects by João Pedro Guimarães: SaaS, dashboards and applied-AI tools built with React, TypeScript and Supabase.',
  privacyDescription='What data this site collects, where it is stored and how to contact me about it.'),
)
L['fr'] = dict(
 heroKicker='João Pedro Guimarães — développeur full stack',
 heroTitle='Des idées qui deviennent des produits',
 heroText='Étudiant en informatique (4e semestre), spécialisé en back-end, front-end et IA appliquée. De manière indépendante, j’ai construit plus de 20 applications et prototypes full-stack : SaaS, tableaux de bord et outils avec classification automatique, RAG et analyse en temps réel. Autodidacte, avec plus de 45 cours et bootcamps terminés, je cherche ma première opportunité (junior, trainee ou stage) pour progresser au sein d’une équipe tech.',
 heroFacts=[['20+','applications full-stack'],['45+','cours et bootcamps'],['4e','semestre d’informatique']],
 nav=['Projets','À propos','Stack','Formations','Contact'],
 cta='Me contacter',
 aboutKicker='À propos', aboutTitle='Du problème au produit',
 aboutText=[
  'Je suis étudiant en informatique au Centro Universitário UDF (4e semestre) et développeur full stack en formation, avec un intérêt pour l’IA appliquée et l’UX.',
  'J’ai construit de manière indépendante plus de 20 applications : classification automatique, RAG, analyse en temps réel et automatisation du support. Je pars généralement du PRD et du parcours utilisateur, puis je prototype et j’implémente.',
  'J’apprends par la pratique : plus de 45 cours et bootcamps (Santander Full Stack, DIO/AWS, AWS Cloud Practitioner, cybersécurité) et surtout mes propres projets, menés jusqu’au bout.'],
 aboutMeta=[['Basé à','Brasília, Brésil'],['Langues','Portugais — natif, français et espagnol — notions'],['Je cherche','Stage, trainee ou poste junior, en équipe']],
 stackKicker='Stack', stackTitle='Avec quoi je travaille',
 stackHint='Les technologies que j’utilise dans mes projets — du front-end à l’IA.',
 stackGroups=dict(frontend='Front-end', backend='Back-end et données', ai='IA appliquée', product='Produit et UX', tooling='Outils'),
 experienceKicker='Formations', experienceTitle='Comment j’apprends',
 experienceHint='Bootcamps, certifications et formation pratique — plus de 45 cours terminés.',
 experienceModes=dict(full='Bootcamp', part='Cours', alongside='Formation'),
 experienceAlongside='Divers', experiencePresent='en cours',
 experience=dict(
  viver=dict(summary='Formation pratique en automatisation et agents IA.', points=['WhatsApp Business API et support client multi-agents.','Trafic payant avec IA et automatisation des processus.']),
  eldorado=dict(summary='Cours de 24 h sur la cybersécurité, de l’attaque à la défense.', points=['Fondamentaux de l’attaque et de la défense en sécurité de l’information.']),
  cloud=dict(summary='Certification sur les fondamentaux du cloud AWS.', points=['Concepts du cloud, services et sécurité sur AWS.']),
  genai=dict(summary='Bootcamps pratiques de Machine Learning et d’IA générative sur AWS.', points=['Amazon Bedrock et Amazon SageMaker dans des projets pratiques.']),
  santander=dict(summary='Bootcamp Santander Full Stack Developer (125 h) et formation complémentaire de plus de 45 cours, projets pratiques et mentorats.', points=['IA, Machine Learning, Java, Spring Boot, Angular, Git/GitHub et bases de données.','La base de mes premiers projets full-stack.']),
  others=dict(summary='Cours complémentaires.', points=['Gestion archivistique des documents.','Développement d’équipes.','Justice et dialogue social (140 h) — Universidade Aberta do Nordeste.','Bureautique – Pack Office (80 h) — Infobrás.']),
 ),
 educationKicker='Formation', educationTitle='Où j’étudie',
 education=dict(udf=dict(degree='Licence', field='Informatique', note='4e semestre en cours (2025–2028), axé sur le développement back-end, front-end et les solutions d’intelligence artificielle.')),
 schools=dict(udf=dict(name='Centro Universitário UDF', city='Brasília')),
 contactKicker='Contact', contactTitle='Me contacter',
 contactHint='Parlez-moi de l’opportunité ou du projet — je réponds moi-même.',
 owner='João Pedro Guimarães',
 meta=dict(
  homeDescription='João Pedro Guimarães, développeur full stack junior : React, TypeScript, Supabase et IA appliquée. Plus de 20 applications et prototypes, étudiant en informatique.',
  worksDescription='Projets de João Pedro Guimarães : SaaS, tableaux de bord et outils d’IA appliquée avec React, TypeScript et Supabase.',
  privacyDescription='Quelles données ce site collecte, où elles sont stockées et comment me contacter à ce sujet.'),
)

PRIV = {
 'pt': dict(updated='Atualizado em 21 de novembro de 2026', sections=[
  dict(title='Quem trata os dados', text=['Este site pertence a João Pedro Guimarães. Para qualquer dúvida, escreva para pedro.derek@icloud.com.']),
  dict(title='O que é coletado', text=['No momento, este site não coleta dados pessoais, não usa cookies de rastreamento e não tem anúncios.', 'Se você me escrever por e-mail ou pelo LinkedIn, uso a mensagem apenas para responder.']),
  dict(title='O que o seu navegador armazena', text=['O site lembra no seu navegador (localStorage) o seu idioma, se o som está ligado, que você já viu a introdução e o contador de bugs esmagados. Isso nunca sai do seu dispositivo, e você pode limpar nas configurações do navegador. Como qualquer servidor, a hospedagem pode manter logs técnicos de requisições (endereço IP, horário, página).']),
  dict(title='Seus direitos', text=['Você pode perguntar quais dados eu tenho sobre você e pedir que sejam corrigidos ou excluídos, escrevendo para pedro.derek@icloud.com.']),
  dict(title='Alterações', text=['Quando o site passar a coletar estatísticas ou receber mensagens por formulário, esta política será atualizada e a nova versão aparecerá nesta página com uma nova data.'])]),
 'en': dict(updated='Updated on November 21, 2026', sections=[
  dict(title='Who handles the data', text=['This site belongs to João Pedro Guimarães. For any question, write to pedro.derek@icloud.com.']),
  dict(title='What is collected', text=['At the moment this site does not collect personal data, does not use tracking cookies and has no ads.', 'If you write to me by e-mail or on LinkedIn, I use the message only to reply.']),
  dict(title='What your browser stores', text=['The site remembers in your browser (localStorage) your language, whether sound is on, that you have seen the intro and the squashed-bugs counter. This never leaves your device, and you can clear it in your browser settings. Like any server, the hosting may keep technical request logs (IP address, time, page).']),
  dict(title='Your rights', text=['You can ask what data I hold about you and ask for it to be corrected or deleted by writing to pedro.derek@icloud.com.']),
  dict(title='Changes', text=['When the site starts collecting statistics or receiving messages through a form, this policy will be updated and the new version will appear on this page with a new date.'])]),
 'fr': dict(updated='Mis à jour le 21 novembre 2026', sections=[
  dict(title='Qui traite les données', text=['Ce site appartient à João Pedro Guimarães. Pour toute question, écrivez à pedro.derek@icloud.com.']),
  dict(title='Ce qui est collecté', text=['Pour le moment, ce site ne collecte aucune donnée personnelle, n’utilise pas de cookies de suivi et n’a pas de publicité.', 'Si vous m’écrivez par e-mail ou sur LinkedIn, j’utilise le message uniquement pour répondre.']),
  dict(title='Ce que stocke votre navigateur', text=['Le site mémorise dans votre navigateur (localStorage) votre langue, si le son est activé, que vous avez vu l’intro et le compteur de bugs écrasés. Cela ne quitte jamais votre appareil et vous pouvez l’effacer dans les paramètres du navigateur. Comme tout serveur, l’hébergeur peut conserver des journaux techniques de requêtes (adresse IP, heure, page).']),
  dict(title='Vos droits', text=['Vous pouvez demander quelles données j’ai sur vous et demander leur correction ou suppression en écrivant à pedro.derek@icloud.com.']),
  dict(title='Modifications', text=['Lorsque le site commencera à collecter des statistiques ou à recevoir des messages via un formulaire, cette politique sera mise à jour et la nouvelle version apparaîtra sur cette page avec une nouvelle date.'])]),
}

ROLES = {'pt': {'viver': 'Automação e agentes de IA', 'eldorado': 'Segurança Cibernética: do ataque à defesa (24h)', 'cloud': 'Cloud Practitioner Essentials', 'genai': 'Machine Learning e GenAI', 'santander': 'Bootcamp Full Stack Developer (125h)', 'others': 'Gestão, equipes e informática'}, 'en': {'viver': 'Automation and AI agents', 'eldorado': 'Cybersecurity: from attack to defense (24h)', 'cloud': 'Cloud Practitioner Essentials', 'genai': 'Machine Learning and GenAI', 'santander': 'Full Stack Developer bootcamp (125h)', 'others': 'Management, teams and computing'}, 'fr': {'viver': 'Automatisation et agents IA', 'eldorado': 'Cybersécurité : de l’attaque à la défense (24 h)', 'cloud': 'Cloud Practitioner Essentials', 'genai': 'Machine Learning et GenAI', 'santander': 'Bootcamp Full Stack Developer (125 h)', 'others': 'Gestion, équipes et bureautique'}}
for _l, _r in ROLES.items():
    for _k, _v in _r.items():
        L[_l]['experience'][_k] = dict(role=_v, **L[_l]['experience'][_k])

# ------------------------------------------------------------------ blocos de idioma
def patch_block(text, lang):
    for k, v in L[lang].items():
        text = set_key(text, k, v)
    pp = PRIV[lang]
    text = set_key(text, 'privacyPage', dict(kicker=None, updated=pp['updated'], sections=pp['sections']), 6) if False else text
    # privacyPage: mantem kicker, troca updated e sections
    text = re.sub(r'(      privacyPage: \{\n        kicker: `[^`]*`,\n)        updated: `[^`]*`,\n        sections: \[.*?\n        \],\n      \},',
                  lambda m: m.group(1)+'        updated: '+js(pp['updated'])+',\n        sections: '+js(pp['sections'], 8)+',\n      },',
                  text, count=1, flags=re.S)
    assert pp['updated'] in text
    # textos que citavam Telegram nos formularios (ainda sem backend)
    text = text.replace('Telegram ou telefone','e-mail ou LinkedIn') if False else text
    return text

for lang, fn in [('pt','pt-block'),('fr','fr-block'),('en','en-block')]:
    s = open(P(fn+'.base.txt'), encoding='utf8').read()
    open(P(fn+'.txt'), 'w', encoding='utf8').write(patch_block(s, lang))

# ------------------------------------------------------------------ dados do bundle (index.orig.js)
o = open(P('index.orig.base.js'), encoding='utf8').read()
def rep(old, new):
    global o
    assert o.count(old) == 1, (o.count(old), old[:60])
    o = o.replace(old, new)

def replace_array(var, new_js):
    """substitui 'var = [ ... ],' (2 espacos de indent) pelo novo literal."""
    global o
    m = re.search(r'^  '+re.escape(var)+r' = \[', o, re.M)
    assert m, var
    a = m.end()-1
    depth = 0; i = a
    while True:
        c = o[i]
        if c == '`':
            i += 1
            while o[i] != '`': i += 2 if o[i]=='\\' else 1
        elif c == '[': depth += 1
        elif c == ']':
            depth -= 1
            if depth == 0: break
        i += 1
    o = o[:m.start()] + '  '+var+' = '+new_js.rstrip().rstrip(',') + o[i+1:]

# redes (linkedin, github, e-mail); ba/xa/Sa deixam de depender de telegram/instagram
GH = "`M9 19c-5 1.5-5-2.5-7-3`, `M16 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22`"
LI = "`M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`, `M7.5 10.5V17`, `M7.5 7.2v.1`, `M11.5 17v-6.5`, `M11.5 13.6c0-1.9 1.2-3.1 2.8-3.1s2.4 1.1 2.4 3V17`"
replace_array('_a', """[
    { id: `linkedin`, name: `LinkedIn`, url: `https://www.linkedin.com/in/pedro-guimarães-8b1411372/`, handle: `in/pedro-guimarães`, icon: [%s] },
    { id: `github`, name: `GitHub`, url: `https://github.com/pedrodereky`, handle: `pedrodereky`, icon: [%s] },
    { id: `email`, name: `E-mail`, url: `mailto:pedro.derek@icloud.com`, handle: `pedro.derek@icloud.com`, icon: [`M3 5h18v14H3z`, `M3 7l9 6 9-6`] },
  ],""" % (LI, GH))
rep("ba = _a.find((e) => e.id === `telegram`).icon,", "ba = _a[0].icon,")
rep("xa = _a.find((e) => e.id === `linkedin`).icon,", "xa = _a[0].icon,")
rep("Sa = _a.find((e) => e.id === `instagram`).icon,", "Sa = _a[0].icon,")

# stack
replace_array('yi', """[
    { id: `frontend`, items: [`React`, `TypeScript`, `JavaScript`, `HTML / CSS`, `Tailwind CSS`, `shadcn/ui`, `Vite`] },
    { id: `backend`, items: [`Node.js`, `Python`, `PHP`, `SQL`, `PostgreSQL`, `Supabase`, `Edge Functions`] },
    { id: `ai`, items: [`Claude`, `Gemini`, `GPT`, `Prompt engineering`, `RAG`, `AI automation`] },
    { id: `product`, items: [`PRD`, `User flows`, `Prototyping`, `Design systems`] },
    { id: `tooling`, items: [`Git`, `GitHub`, `AWS`, `REST APIs`, `C / C++`] },
  ],""")

# cursos (usa o componente de experiencia)
replace_array('bi', """[
    { id: `viver`, company: `Viver de IA`, role: ``, from: `08.2026`, to: `08.2026`, mode: `part`, tags: [`WhatsApp API`, `AI agents`, `Automation`] },
    { id: `eldorado`, company: `Instituto Eldorado`, role: ``, from: `12.2025`, to: `12.2025`, mode: `part`, tags: [`Cybersecurity`] },
    { id: `cloud`, company: `AWS Training`, role: ``, from: `12.2025`, to: `12.2025`, mode: `part`, tags: [`AWS`, `Cloud`] },
    { id: `genai`, company: `DIO · AWS Nexa`, role: ``, from: `11.2025`, to: `12.2025`, mode: `full`, tags: [`Bedrock`, `SageMaker`, `GenAI`] },
    { id: `santander`, company: `Santander · Alura · DIO`, role: ``, from: `06.2025`, to: `01.2026`, mode: `full`, tags: [`Java`, `Spring Boot`, `Angular`, `Git`, `SQL`] },
    { id: `others`, company: `Outros cursos`, role: ``, from: ``, to: ``, mode: `alongside`, tags: [`Office`, `Gestão`] },
  ],""")
replace_array('xi', "[{ id: `udf`, school: `udf`, from: `2025`, to: `2028` }],")

# secoes que nao se aplicam: parceiros (Pm) e amigos (Ba) saem da home; banner de cookies sai (sem analytics por enquanto)
rep("                I(Ni),\n                I(Ba),\n", "                I(Ni),\n")
rep("                I(Pm),\n                I(Yg),", "                I(Yg),")
rep("                I(ic),\n", "")

# hobbies: ocultos ate o Pedro enviar os dele
replace_array('ri', "[],")

# marca/seo
rep("name: `site`,\n    brand: `Site`,\n    tagline: `frontend & 3D`,", "name: `João Pedro Guimarães`,\n    brand: `João Pedro Guimarães`,\n    tagline: `Full Stack & IA aplicada`,")
rep("url: ``,\n    name:", "url: `https://joaopedroguimaraes.pages.dev`,\n    name:") if "    url: ``,\n    name:" in o else None
rep("jobTitle: `Frontend engineer`,", "jobTitle: `Full stack developer`,")
rep("knowsAbout: [`Three.js`, `WebGL`, `GSAP`, `PIXI.js`, `Phaser`, `Vue.js`, `JavaScript`, `HTML email`],", "knowsAbout: [`React`, `TypeScript`, `Supabase`, `PostgreSQL`, `Node.js`, `Python`, `Applied AI`, `RAG`],")
rep("profiles: [`telegram`, `linkedin`, `instagram`],", "profiles: [`linkedin`, `github`],")


# logo: troca o wordmark do autor anterior por "JP"
i = o.index("      __name: `SiteLogo`,")
j = o.index("    [[`__scopeId`, `data-v-03989b67`]],", i)
o = o[:i] + """      __name: `SiteLogo`,
      setup(e) {
        return (e, t) => (
          M(),
          _(`svg`, { class: `site-logo`, viewBox: `0 0 150 120`, "aria-hidden": `true`, focusable: `false` }, [
            R(`text`, { x: 0, y: 100, "font-size": 118, "font-weight": 700, fill: `#ff6a14` }, `JP`),
          ])
        );
      },
    },
""" + o[j:]

# datas iguais (inicio = fim) aparecem uma so vez
rep("r = (e) => (e.from ? `${e.from}${Wi}${e.to || t.t(`experiencePresent`)}` : t.t(`experienceAlongside`));",
    "r = (e) => (e.from ? (e.to === e.from ? e.from : `${e.from}${Wi}${e.to || t.t(`experiencePresent`)}`) : t.t(`experienceAlongside`));")

# idioma padrao: portugues (antes era sempre ingles)
rep("Sn = () => (bn(), `en`),", "Sn = () => (bn(), `pt`),")
rep("    language: `en`,\n    locales:", "    language: `pt`,\n    locales:")

open(P('index.orig.js'), 'w', encoding='utf8').write(o)
print('ok')
