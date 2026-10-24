"""Test both CLI modes, output safety and title escaping."""
from pathlib import Path
import os, shutil, subprocess, sys, tempfile, unittest
ROOT = Path(__file__).resolve().parent.parent
NODE = os.environ.get('NODE_BINARY') or shutil.which('node')

class GeneratorTests(unittest.TestCase):
    def test_both_modes_and_no_overwrite(self):
        self.assertTrue(NODE,'需要 Node.js；可透過 NODE_BINARY 指定')
        with tempfile.TemporaryDirectory() as tmp:
            for mode in ('review','inquiry'):
                out=Path(tmp)/mode
                command=[sys.executable,str(ROOT/'scripts/new_deck.py'),'--mode',mode,'--out',str(out),
                         '--title','Test <title> & "quotes"','--chapters','Ratios::1-1 Ratios']
                result=subprocess.run(command,capture_output=True)
                self.assertEqual(result.returncode,0,result.stderr)
                document=(out/'index.html').read_text(encoding='utf-8')
                self.assertNotIn('{{',document)
                self.assertIn('&lt;title&gt;',document)
                self.assertEqual('cdn.jsdelivr.net' in document,mode=='review')
                result=subprocess.run([NODE,str(ROOT/'scripts/verify_deck.js'),str(out)],capture_output=True)
                self.assertEqual(result.returncode,0,result.stdout+result.stderr)
                before=(out/'ch1.js').read_bytes()
                self.assertNotEqual(subprocess.run(command,capture_output=True).returncode,0)
                self.assertEqual((out/'ch1.js').read_bytes(),before)
                if mode=='inquiry':
                    for phase in range(5): self.assertIn('"phase": '+str(phase),before.decode('utf-8'))

if __name__=='__main__': unittest.main()
