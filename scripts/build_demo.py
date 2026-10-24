#!/usr/bin/env python3
"""Rebuild the juice demo from shared assets and canonical lesson data."""
from pathlib import Path
import subprocess
import sys
root = Path(__file__).resolve().parent.parent
subprocess.run([sys.executable, str(root/'scripts/new_deck.py'),
    '--mode','inquiry','--out',str(root/'demo/juice'),'--force',
    '--title','果汁濃度與比值的本質','--eyebrow','小六數學思維 · 第01週',
    '--cover-title','果汁濃度與比值的本質',
    '--sub','先判斷 → 動手調配 → 記錄數據 → 提出論證 → 應用遷移',
    '--home','果汁探究','--chapters','課堂探究::1-1 情境審查',
    '--lesson',str(root/'examples/juice-lesson.js')],check=True)
