#!/usr/bin/env python3
"""Mantém o site sem vestígios do template original e falha se algum voltar.
Ordem: apply_content.py -> apply_projects.py -> apply_cleanup.py -> build.py
Idempotente."""
import glob
import os
import re

from jsedit import set_key, set_var

here = os.path.dirname(os.path.abspath(__file__))
root = os.path.dirname(here)
if os.path.isdir(os.path.join(root, 'public')):
    root = os.path.join(root, 'public')
P = lambda *a: os.path.join(here, *a)
R = lambda *a: os.path.join(root, *a)

# seções do template que não fazem parte do site (parceiros, amigos, hobbies): sem texto
EMPTY = dict(partnersKicker='', partnersTitle='', partnersHint='', partnerNames={},
             friendsKicker='', friendsTitle='', friendsHint='',
             hobbiesTitle='', hobbiesText='', hobbies={}, hobbySlider={})
for fn in ('pt-block', 'fr-block', 'en-block'):
    s = open(P(fn + '.txt'), encoding='utf8').read()
    for k, v in EMPTY.items():
        s = set_key(s, k, v)
    open(P(fn + '.txt'), 'w', encoding='utf8').write(s)

o = open(P('index.orig.js'), encoding='utf8').read()
o = set_var(o, 'Om', '[]')  # lista da seção de parceiros
o = set_var(o, 'Jf', '{}')  # vetor do logo do template (o site usa o logo "JP")

# blocos de idioma do template: o build insere pt/fr/en, os demais ficam vazios
L = o.split('\n')
iu = next(i for i, l in enumerate(L) if l == '    uk: {')
ie = next(i for i, l in enumerate(L) if l == '    en: {')
ee = next(i for i in range(ie + 1, len(L)) if L[i] == '    },')
L = L[:iu] + ['    uk: {', '    },', '    ru: {', '    },', '    en: {'] + L[ee:]
open(P('index.orig.js'), 'w', encoding='utf8').write('\n'.join(L))

# CSS: sem a fonte do alfabeto cirílico (o site não tem texto cirílico)
css = [f for f in os.listdir(R('assets')) if f.startswith('index-') and f.endswith('.css')][0]
s = open(R('assets', css), encoding='utf8').read()
s = re.sub(r'@font-face\{[^}]*science-gothic-cyrillic[^}]*\}', '', s)
HIDE = '.site-about__hobbies{display:none}'  # sem hobbies por enquanto; remova quando houver conteúdo
if HIDE not in s:
    s += HIDE
open(R('assets', css), 'w', encoding='utf8').write(s)
for f in os.listdir(R('assets')):
    if f.startswith('science-gothic-cyrillic'):
        os.remove(R('assets', f))

# ------------------------------------------------------------------ trava (o bundle final é checado no fim do build.py)
from jsedit import assert_clean
CHECK = [P(f) for f in ('pt-block.txt', 'fr-block.txt', 'en-block.txt', 'index.orig.js')]
CHECK += [f for f in glob.glob(R('assets', '*.js')) if not os.path.basename(f).startswith('index-')]
CHECK += glob.glob(R('assets', '*.css')) + [R('index.html')]
assert_clean(CHECK, here)
audio = [f for f in os.listdir(R('audio')) if not re.search(r'-(pt|fr|en)\.mp3$', f)]
if audio:
    raise SystemExit('Áudios fora de pt/fr/en: ' + ', '.join(audio))
print('ok limpeza: nenhum vestígio')
