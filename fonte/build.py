#!/usr/bin/env python3
"""Gera assets/index-w3BRHVFD.js com idiomas PT / FR / EN a partir do bundle legivel original."""
import re, sys, os
here = os.path.dirname(os.path.abspath(__file__))
root = os.path.dirname(here)
# no repositorio do GitHub o site publicado fica em public/ e estes scripts em fonte/
if os.path.isdir(os.path.join(root, 'public')): root = os.path.join(root, 'public')
L = open(os.path.join(here, 'index.orig.js'), encoding='utf8').read().split('\n')
pt = open(os.path.join(here, 'pt-block.txt'), encoding='utf8').read().rstrip('\n').split('\n')
fr = open(os.path.join(here, 'fr-block.txt'), encoding='utf8').read().rstrip('\n').split('\n')

en = open(os.path.join(here, 'en-block.txt'), encoding='utf8').read().rstrip('\n').split('\n')
iu = next(i for i, l in enumerate(L) if l == '    uk: {')
ie = next(i for i, l in enumerate(L) if l == '    en: {')
ee = next(i for i in range(ie + 1, len(L)) if L[i] == '    },')
out = L[:iu] + ['    pt: {'] + pt + ['    },', '    fr: {'] + fr + ['    },', '    en: {'] + en + L[ee:]
s = '\n'.join(out)

def rep(old, new, count=1):
    global s
    assert s.count(old) >= 1, old
    s = s.replace(old, new) if count == 0 else s.replace(old, new, count)

rep("{ code: `uk`, label: `UA` },", "{ code: `pt`, label: `PT` },")
rep("{ code: `ru`, label: `RU` },", "{ code: `fr`, label: `FR` },")
rep("ct = { uk: ``, ru: `-ru`, en: `-en` }", "ct = { pt: `-pt`, fr: `-fr`, en: `-en` }")
rep("locales: { uk: `uk_UA`, ru: `ru_RU`, en: `en_US` }", "locales: { pt: `pt_BR`, fr: `fr_FR`, en: `en_US` }")
s = re.sub(r"name: \{ uk: `[^`]*`, ru: `[^`]*`, en: (`[^`]*`) \}", r"name: { pt: \1, fr: \1, en: \1 }", s)
assert 'uk:' not in s.replace('pt:', ''), 'sobrou uk:'
open(os.path.join(root, 'assets', 'index-w3BRHVFD.js'), 'w', encoding='utf8').write(s)
print('ok', len(s))

from jsedit import assert_clean
assert_clean([os.path.join(root, 'assets', 'index-w3BRHVFD.js')], here)
print('ok bundle sem vestígios')
