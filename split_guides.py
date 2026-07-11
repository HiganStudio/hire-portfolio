import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update the T object mapping in JS
content = content.replace(
    "navGuide:setRoute('guide'),",
    "navGuide1:setRoute('guide1'), navGuide2:setRoute('guide2'), navGuide3:setRoute('guide3'),"
)

content = content.replace(
    "isGuide:this.state.route==='guide',",
    "isGuide1:this.state.route==='guide1', isGuide2:this.state.route==='guide2', isGuide3:this.state.route==='guide3',"
)

content = content.replace(
    "onClick=\"{{ navGuide }}\">{{ t.guide1 }}",
    "onClick=\"{{ navGuide1 }}\">{{ t.guide1 }}"
)
content = content.replace(
    "onClick=\"{{ navGuide }}\">{{ t.guide2 }}",
    "onClick=\"{{ navGuide2 }}\">{{ t.guide2 }}"
)
content = content.replace(
    "onClick=\"{{ navGuide }}\">{{ t.guide3 }}",
    "onClick=\"{{ navGuide3 }}\">{{ t.guide3 }}"
)

content = content.replace(
    "guide:{ prefix:{de:'Wir teilen',en:'We share'}, words:{de:['Wissen','Strategien','Taktiken','Architektur','Code'],en:['knowledge','strategies','tactics','architecture','code']} }",
    """guide1:{ prefix:{de:'Wir teilen',en:'We share'}, words:{de:['Wissen','Strategien','Taktiken','Architektur','Code'],en:['knowledge','strategies','tactics','architecture','code']} },
    guide2:{ prefix:{de:'Wir befreien',en:'We free'}, words:{de:['Ideen','Systeme','Daten','Kunden','Wachstum'],en:['ideas','systems','data','clients','growth']} },
    guide3:{ prefix:{de:'Wir formen',en:'We shape'}, words:{de:['Ästhetik','Identität','Emotionen','Qualität','Wahrnehmung'],en:['aesthetics','identity','emotions','quality','perception']} }"""
)

# Guide HTMLs
guide_base = """
    <!-- ================= GUIDE {NUM} ================= -->
    <sc-if value="{{ isGuide{NUM} }}" hint-placeholder-val="{{ true }}">
    <div data-screen-label="Guide {NUM}">
      <section style="height:100vh;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:24px">
        <h1 style="font-family:'Cormorant Garamond',serif;font-weight:500;font-size:clamp(38px,6.4vw,92px);line-height:1.06;margin:0;max-width:16ch;animation:hgUp 1s ease both .1s">
          {{ heroPre }}<br>
          <span style="font-style:italic;color:#c3a6e0">{{ typedWord }}</span><span class="hg-caret" style="height:.86em"></span>
        </h1>
      </section>
      
      <section style="max-width:800px;margin:0 auto;padding:40px 32px 120px;display:flex;flex-direction:column;align-items:stretch" class="contact-layout">
        
        <div style="margin-bottom:80px;text-align:center">
          <span style="font-family:'Space Mono',monospace;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;opacity:0.5;margin-bottom:20px;display:inline-block;padding:8px 16px;border:1px solid rgba(255,255,255,0.1);border-radius:20px">Free Guide</span>
          <h2 style="font-family:'Cormorant Garamond',serif;font-size:clamp(42px,5.5vw,72px);font-weight:500;line-height:1.1;margin:0 0 20px">{TITLE}</h2>
          <p style="font-size:22px;color:#c3a6e0;opacity:1;margin:0;font-weight:300">{SUBTITLE}</p>
        </div>

        <div style="font-size:17px;line-height:1.8;opacity:0.8;font-weight:300;margin-bottom:60px">
          {DESC}
        </div>

        <h3 style="font-family:'Cormorant Garamond',serif;font-size:clamp(28px,4vw,40px);font-weight:500;margin:0 0 40px;text-align:center">What you are about to learn</h3>
        <ul style="list-style:none;padding:0;margin:0 0 80px;display:flex;flex-direction:column;gap:30px">
          {LESSONS}
        </ul>

        <div style="margin-bottom:100px">
          <p style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:clamp(24px,4vw,34px);line-height:1.4;color:#fff;text-align:center;margin:0 0 40px">
            "{QUOTE}"
          </p>
          <div style="display:flex;align-items:center;justify-content:center;gap:16px">
            <div style="width:56px;height:56px;border-radius:50%;background:#222;overflow:hidden">
              <img src="https://ui-avatars.com/api/?name=Levi&background=0D0D0D&color=fff" style="width:100%;height:100%;object-fit:cover" alt="Levi">
            </div>
            <div style="text-align:left">
              <div style="font-family:'Space Mono',monospace;font-size:13px;opacity:0.9;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px">Levi Zimmermann</div>
              <div style="font-family:'Inter',sans-serif;font-size:13px;opacity:0.5">Founder, Higan Studio</div>
            </div>
          </div>
        </div>
        
        <div style="background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.1);border-radius:24px;padding:clamp(32px,5vw,56px);margin-top:20px;text-align:center;box-shadow:0 20px 60px rgba(0,0,0,0.5)">
          <h3 style="font-family:'Cormorant Garamond',serif;font-size:clamp(28px,4vw,38px);margin:0 0 16px;font-weight:500">Get your Free Guide today!</h3>
          <p style="font-size:16px;margin-bottom:40px;opacity:0.7;font-weight:300;max-width:80%;margin-left:auto;margin-right:auto">Fill out the form below to get the digital Free Guide sent to your inbox within 24 hours.</p>

          <form style="display:flex;flex-direction:column;gap:20px;text-align:left">
            <input type="email" placeholder="Your work email address..." style="width:100%;padding:18px 24px;border-radius:12px;border:1px solid rgba(255,255,255,0.1);background:rgba(0,0,0,0.2);color:#fff;font-family:inherit;font-size:16px" required>
            <button class="hg-cta hg-cta-onlight" type="submit" style="display:flex;align-items:center;justify-content:center;gap:12px;width:100%;padding:18px 28px;background:#c3a6e0;color:#000;border:none;border-radius:12px;font-family:inherit;font-size:16px;font-weight:600;cursor:pointer;transition:transform 0.2s">
              Send me the Guide
            </button>
          </form>
          <p style="font-size:12px;opacity:0.4;margin:20px 0 0;font-family:'Space Mono',monospace">* No spam. Ever. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
    </sc-if>
"""

guides = [
    {
        "NUM": "1",
        "TITLE": "The Open Source Advantage",
        "SUBTITLE": "Why Paying for SaaS is Holding You Back",
        "DESC": "<p style='margin-bottom:24px'>As a modern founder, you want to ensure you're building a digital product that scales without arbitrary limits or bloated enterprise licensing fees. Reclaiming your digital sovereignty is the ultimate competitive advantage.</p><p style='margin-bottom:0'>In this free guide, you'll learn how to leverage powerful open-source architectures to make thousands of global developers work for you, effectively eliminating recurring SaaS costs while increasing stability.</p>",
        "LESSONS": [
            ("The true cost of Vendor Lock-in", "How SaaS subscriptions silently drain your resources and limit your growth potential over a 5-year span."),
            ("Architecting for Sovereignty", "Building a tech stack that belongs entirely to you, allowing unrestricted data ownership and portability."),
            ("Open Source at Enterprise Scale", "Harnessing the global developer community to keep your infrastructure secure, modern, and auto-scaling."),
            ("Transition & Execution", "A step-by-step framework for decoupling your current setup and moving towards total independence.")
        ],
        "QUOTE": "If you want to rethink your architecture, escape restrictive licenses, and execute a truly scalable open-source foundation—we are here to support you. You can count on us."
    },
    {
        "NUM": "2",
        "TITLE": "Escaping Vendor Lock-in",
        "SUBTITLE": "Take Back Control of Your Tech Stack",
        "DESC": "<p style='margin-bottom:24px'>Countless businesses fall into the trap of relying heavily on a single proprietary vendor, losing control over their data, their architecture, and their profit margins as scaling costs explode.</p><p style='margin-bottom:0'>This guide exposes the subtle traps of modern vendor lock-in and provides an actionable playbook for liberating your product, migrating to modular systems, and negotiating from a position of power.</p>",
        "LESSONS": [
            ("Identifying the Trap", "How vendors design their ecosystems to make leaving technically and financially unviable."),
            ("The Modular Alternative", "Why microservices and API-driven architectures give you the flexibility to swap components anytime."),
            ("Data Liberation", "Strategies for migrating your core databases and user data without downtime or loss of fidelity."),
            ("The Escape Roadmap", "A precise 90-day plan to decouple from your biggest dependencies and regain sovereignty.")
        ],
        "QUOTE": "True digital independence means your business logic dictates your tech stack, not the other way around. Let's break the chains holding your product back."
    },
    {
        "NUM": "3",
        "TITLE": "Trust Through Aesthetics",
        "SUBTITLE": "Design as a Driver of Conversion",
        "DESC": "<p style='margin-bottom:24px'>In a crowded market, potential clients judge the competence of your entire operation within milliseconds based purely on visual fidelity. A generic template screams compromise, while a premium aesthetic radiates authority.</p><p style='margin-bottom:0'>This guide breaks down the psychological principles behind high-end digital design, showing you exactly how typography, spacing, and micro-interactions turn skeptical visitors into premium clients.</p>",
        "LESSONS": [
            ("The Psychology of Premium", "Why users unconsciously associate better design with superior security, reliability, and service."),
            ("Micro-interactions that Matter", "How subtle animations and responsive feedback loops build visceral trust during the user journey."),
            ("The Typography Advantage", "Selecting and spacing typefaces to convey unquestionable authority and modern elegance."),
            ("Conversion by Design", "Structuring your user experience so that the most beautiful path is also the most profitable one.")
        ],
        "QUOTE": "Aesthetics are not just decoration; they are the most powerful tool for building trust at scale. We design products that command respect from the first pixel."
    }
]

def build_lessons(lessons):
    html = ""
    for idx, (title, desc) in enumerate(lessons):
        html += f'''          <li style="display:flex;gap:24px;align-items:flex-start;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);padding:32px;border-radius:16px">
            <span style="font-family:'Space Mono',monospace;color:#c3a6e0;font-size:16px;margin-top:2px;opacity:0.8">0{idx+1}</span>
            <div><strong style="font-size:18px;font-weight:500">{title}</strong><br><span style="opacity:0.7;font-size:15px;line-height:1.6;font-family:'Inter',sans-serif;color:inherit;display:block;margin-top:8px;font-weight:300">{desc}</span></div>
          </li>\n'''
    return html.strip()

guide_htmls = []
for g in guides:
    html = guide_base.replace("{NUM}", g["NUM"])
    html = html.replace("{TITLE}", g["TITLE"])
    html = html.replace("{SUBTITLE}", g["SUBTITLE"])
    html = html.replace("{DESC}", g["DESC"])
    html = html.replace("{LESSONS}", build_lessons(g["LESSONS"]))
    html = html.replace("{QUOTE}", g["QUOTE"])
    guide_htmls.append(html)

all_guides_html = "\\n".join(guide_htmls)

# Replace the original guide section
match = re.search(r'<!-- ================= GUIDE ================= -->.*?</sc-if>', content, re.DOTALL)
if match:
    content = content.replace(match.group(0), all_guides_html)
else:
    print("Could not find the original GUIDE section")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Split guides into 3 distinct sections!")
