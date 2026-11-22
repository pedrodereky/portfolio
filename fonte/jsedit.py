"""Edição de literais JS no bundle (sem efeitos colaterais ao importar)."""
import re


def esc(s):
    return s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')


def js(v, ind=6):
    pad = ' ' * ind
    if isinstance(v, str):
        return '`' + esc(v) + '`'
    if isinstance(v, list):
        if all(isinstance(x, str) for x in v) and sum(len(x) for x in v) < 70:
            return '[' + ', '.join(js(x) for x in v) + ']'
        return '[\n' + ''.join(pad + '  ' + js(x, ind + 2) + ',\n' for x in v) + pad + ']'
    if isinstance(v, dict):
        if not v:
            return '{}'
        return '{\n' + ''.join(pad + '  ' + k + ': ' + js(x, ind + 2) + ',\n' for k, x in v.items()) + pad + '}'
    raise TypeError(v)


def literal_end(s, i):
    """i = posição de '[', '{' ou '('; devolve o índice do fechamento correspondente."""
    depth = 0
    while True:
        c = s[i]
        if c == '`':
            i += 1
            while s[i] != '`':
                i += 2 if s[i] == '\\' else 1
        elif c in '[{(':
            depth += 1
        elif c in ']})':
            depth -= 1
            if depth == 0:
                return i
        i += 1


def value_end(s, i):
    """i = início do valor de uma chave; devolve o índice logo após o valor."""
    if s[i] in '[{(':
        return literal_end(s, i) + 1
    if s[i] == '`':
        j = i + 1
        while s[j] != '`':
            j += 2 if s[j] == '\\' else 1
        return j + 1
    m = re.compile(r'[,\n]').search(s, i)
    return m.start()


def set_key(s, key, value, indent=6):
    m = re.search(r'^' + ' ' * indent + re.escape(key) + r': ', s, re.M)
    assert m, key
    a = m.end()
    return s[:a] + js(value, indent) + s[value_end(s, a):]


def set_var(s, var, new_literal):
    """substitui o literal de '  var = <literal>' (indent de 2 espaços)."""
    m = re.search(r'^  ' + re.escape(var) + r' = ([\[{])', s, re.M)
    assert m, var
    a = m.start(1)
    return s[:a] + new_literal + s[literal_end(s, a) + 1:]


BANNED = re.compile(r'telegram(?!bot)|steamcommunity|discord\.com|[\u0400-\u04FF]', re.I)


def assert_clean(paths, base):
    """Falha se algum arquivo tiver vestígios do template original."""
    import os
    found = []
    for f in paths:
        if os.path.exists(f):
            for m in BANNED.finditer(open(f, encoding='utf8', errors='ignore').read()):
                found.append(f'{os.path.relpath(f, base)}: {m.group(0)!r}')
    if found:
        raise SystemExit('Vestígios do template encontrados:\n' + '\n'.join(sorted(set(found))[:40]))
