import os
import re

folders = ['impressum', 'datenschutz', 'tos', 'projektvertrag', 'wartung']

with open('index.html', 'r', encoding='utf-8') as f:
    template = f.read()

# Extract prefix and suffix
main_start = template.find('<main style="position:relative;z-index:10">')
main_end = template.find('</main>', main_start)

if main_start == -1 or main_end == -1:
    print("Error: Could not find <main> in index.html")
    exit(1)

prefix = template[:main_start]
suffix = template[main_end + 7:]

def fix_template(html):
    html = html.replace('src="./support.js"', 'src="/support.js"')
    html = html.replace('src="./image-slot.js"', 'src="/image-slot.js"')
    html = html.replace('src="assets/', 'src="/assets/')
    html = html.replace('href="assets/', 'href="/assets/')
    html = html.replace('href="guide.html"', 'href="/guide.html"')
    html = html.replace('href="{{ goHome }}"', 'href="/"')
    html = html.replace('href="./favicon-white.png"', 'href="/favicon-white.png"')
    
    html = html.replace('onClick="{{ goHome }}"', 'href="/"')
    html = html.replace('onClick="{{ navContact }}"', 'href="/#contact"')
    html = html.replace('onClick="{{ navProjects }}"', 'href="/#projects"')
    html = html.replace('onClick="{{ navAbout }}"', 'href="/#about"')
    html = html.replace('onClick="{{ navServices }}"', 'href="/#services"')
    html = html.replace('onClick="{{ navGuide }}"', 'href="/#guides"')
    
    return html

prefix = fix_template(prefix)
suffix = fix_template(suffix)

def safe_span_replace(html):
    html = re.sub(r'<span([^>]*href="[^"]+"[^>]*)>(.*?)</span>', r'<a\1>\2</a>', html)
    html = re.sub(r'<button([^>]*href="[^"]+"[^>]*)>(.*?)</button>', r'<a\1>\2</a>', html)
    return html

prefix = safe_span_replace(prefix)
suffix = safe_span_replace(suffix)

css = """
  .legal-content { max-width: 760px; margin: 0 auto; padding: 160px 32px 100px; color: #f4f2f7; font-weight: 300; line-height: 1.7; position: relative; z-index: 10; }
  .legal-content h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(34px, 5vw, 62px); font-weight: 500; margin-bottom: 56px; color: #c3a6e0; font-style: italic; line-height: 1.1; letter-spacing: -0.02em; }
  .legal-content h2 { font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 500; margin-top: 56px; margin-bottom: 16px; color: #c3a6e0; }
  .legal-content h3 { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 500; margin-top: 32px; margin-bottom: 12px; color: #c3a6e0; opacity: 0.9; }
  .legal-content p { margin-bottom: 24px; opacity: 0.75; font-size: 16px; }
  .legal-content ul { margin-bottom: 24px; padding-left: 20px; opacity: 0.75; font-size: 16px; }
  .legal-content li { margin-bottom: 10px; }
  .legal-content a { color: #d9c6ee; text-decoration: none; border-bottom: 1px solid rgba(217,198,238,0.3); transition: border-color 0.2s; }
  .legal-content a:hover { border-bottom-color: rgba(217,198,238,0.8); }
  .legal-content strong { font-weight: 500; color: #fff; opacity: 0.9; }
  .legal-content .btn-download { display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.15); color: #fff; padding: 14px 28px; border-radius: 8px; font-size: 15px; font-weight: 500; text-decoration: none !important; border-bottom: none !important; margin: 24px 0 48px; transition: all 0.3s; }
  .legal-content .btn-download:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.3); transform: translateY(-2px); }
  .legal-content .disclaimer-box { background: rgba(195,166,224,0.08); border: 1px solid rgba(195,166,224,0.25); border-radius: 12px; padding: 24px 32px; margin-bottom: 48px; text-align: center; }
  .legal-content .disclaimer-title { font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: 0.15em; color: #c3a6e0; margin-bottom: 12px; text-transform: uppercase; font-weight: 600; }
  .legal-content .disclaimer-text { font-size: 14.5px; line-height: 1.6; color: rgba(244,242,247,0.7); margin: 0; }
  .legal-content .page-label { font-family: 'Space Mono', monospace; font-size: 11px; letter-spacing: 0.16em; opacity: 0.45; margin-bottom: 16px; display: block; text-transform: uppercase; }
  .legal-content .highlight-box { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 24px 32px; margin: 40px 0; }
  .legal-content .highlight-box p { margin: 0; }
  .legal-content .divider { height: 1px; background: rgba(255,255,255,0.08); margin: 48px 0; }
</style>
"""
prefix = prefix.replace('</style>', css)

for folder in folders:
    idx_path = os.path.join(folder, 'index.html')
    if not os.path.exists(idx_path):
        continue
    
    with open(idx_path, 'r', encoding='utf-8') as f:
        old_content = f.read()
    
    old_main_match = re.search(r'<main[^>]*>(.*?)</main>', old_content, re.DOTALL)
    if not old_main_match:
        continue
        
    content = old_main_match.group(1).strip()
    content = re.sub(r'<div class="footer-legal">.*?</div>', '', content, flags=re.DOTALL)
    
    new_html = prefix + '<main class="legal-content">\n' + content + '\n</main>' + suffix
    
    old_title_match = re.search(r'<title>(.*?)</title>', old_content)
    if old_title_match:
        old_title = old_title_match.group(1)
        new_html = re.sub(r'<title>.*?</title>', f'<title>{old_title}</title>', new_html)
    
    with open(idx_path, 'w', encoding='utf-8') as f:
        f.write(new_html)

print("Rebuilt legal pages!")
