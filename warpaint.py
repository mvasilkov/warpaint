#!/usr/bin/env python3


def warpaint(s):
    s = s.strip()
    return s


def cli():
    import sys
    s = open(sys.argv[1], encoding='utf8').read()
    print(warpaint(s))

if __name__ == '__main__':
    cli()
