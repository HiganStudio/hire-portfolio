import os
import re

en_translations = {
    'impressum': '''<div class="page-label">Legal</div>
  <h1>Imprint</h1>

  <h2>Information according to § 5 DDG</h2>
  <p>
    <strong>Levi Zimmermann</strong><br>
    Higan Studio<br>
    Hohenhorn, Schleswig-Holstein<br>
    Germany
  </p>

  <h2>Contact</h2>
  <p>
    Email: <a href="mailto:contact@higan.studio">contact@higan.studio</a><br>
    Phone: <a href="tel:+4915233541953">+49 152 335 41953</a>
  </p>

  <div class="divider"></div>

  <h2>Notice on Value Added Tax (VAT)</h2>
  <p>
    As a small business owner pursuant to § 19 (1) UStG, no value-added tax is charged and reported.
  </p>

  <div class="divider"></div>

  <h2>Responsible for the content according to § 55 (2) RStV</h2>
  <p>
    <strong>Levi Zimmermann</strong><br>
    Hohenhorn, Schleswig-Holstein, Germany
  </p>

  <div class="divider"></div>

  <h2>Liability for Content</h2>
  <p>
    As a service provider, we are responsible for our own content on these pages in accordance with general laws under § 7 (1) DDG. However, according to §§ 8 to 10 DDG, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
  </p>
  <p>
    Obligations to remove or block the use of information under general laws remain unaffected. However, liability in this regard is only possible from the point in time at which we become aware of a specific legal violation. If we become aware of such violations, we will remove this content immediately.
  </p>

  <h2>Liability for Links</h2>
  <p>
    Our website contains links to external third-party websites, over whose content we have no influence. Therefore, we cannot accept any liability for this external content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking.
  </p>

  <h2>Copyright</h2>
  <p>
    The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use.
  </p>''',

    'tos': '''<div class="page-label">Legal</div>
  <h1>Terms of Service (AGB)</h1>

  <h2>1. Scope</h2>
  <p>
    These terms apply to all services (web design, development, SEO, e-commerce) provided by Levi Zimmermann (Higan Studio) to clients. Deviating terms and conditions of the client are not recognized unless Levi Zimmermann expressly agrees to them in writing.
  </p>

  <h2>2. Conclusion of Contract</h2>
  <p>
    A contract is concluded when the client accepts an offer from Levi Zimmermann (in writing or by email) or Levi Zimmermann confirms an order from the client.
  </p>

  <h2>3. Services and Obligations to Cooperate</h2>
  <p>
    The scope of services results from the respective offer. The client is obligated to provide all information, texts, images, and access required for the provision of the service in good time and in digital form. Delays caused by lack of cooperation are at the expense of the delivery time.
  </p>

  <h2>4. Remuneration and Small Business Regulation</h2>
  <p>
    The prices agreed in the offer apply. According to <strong>§ 19 UStG (small business regulation)</strong>, no VAT is charged or shown on invoices. Invoices are payable immediately upon receipt without deduction, unless otherwise agreed.
  </p>

  <h2>5. Copyright and Rights of Use</h2>
  <p>
    The drafts, source code, and design remain the copyrighted property of Levi Zimmermann. Upon full payment of the remuneration, the client receives a simple right to use the work results for the contractually intended purpose, unrestricted in terms of time and space. Passing it on to third parties or sub-licensing is only permitted after written agreement.
  </p>

  <h2>6. Warranty and Liability</h2>
  <p>
    Levi Zimmermann is liable for defects within the scope of statutory provisions. Liability for slight negligence is excluded, provided no essential contractual obligations have been violated. The client is solely liable for the content they provide (e.g., images, texts). The client indemnifies Levi Zimmermann from any third-party claims arising from legal violations by this content.
  </p>

  <h2>7. Final Provisions</h2>
  <p>
    The law of the Federal Republic of Germany applies. The place of jurisdiction is, as far as legally permissible, the registered office of Levi Zimmermann. Should individual provisions be invalid, the validity of the remaining provisions remains unaffected.
  </p>''',

    'projektvertrag': '''<div class="page-label">Legal / Projects</div>
  <h1>Website Creation Contract</h1>

  <a href="/public/muster-projektvertrag.pdf" class="btn-download">Download Sample Contract (PDF)</a>

  <div class="highlight-box">
    <p><strong>Focus:</strong> This contract secures the project workflow and the milestone payment model. It defines clear obligations to cooperate and rules for acceptance.</p>
  </div>

  <h2>§ 1 Subject of the Contract</h2>
  <p>
    The contractor (Levi Zimmermann, Higan Studio) undertakes to design, create, and program a website for the client in accordance with the respective individual offer.
  </p>

  <h2>§ 2 Client's Obligations to Cooperate</h2>
  <p>
    The client will provide all content required for the implementation (texts, images, logos) promptly and in digital form. Delays caused by the client's lack of cooperation will extend the agreed delivery times accordingly.
  </p>

  <h2>§ 3 Remuneration and Payment Terms (Milestone Model)</h2>
  <p>
    According to <strong>§ 19 UStG</strong>, no VAT is charged. For mutual security, payment is made according to a binding milestone model:
  </p>
  <ul>
    <li><strong>1st Milestone (30% deposit):</strong> Due immediately upon conclusion of the contract. The project starts after receipt of payment.</li>
    <li><strong>2nd Milestone (40% interim payment):</strong> Due after presentation and approval of the basic web design by the client.</li>
    <li><strong>3rd Milestone (30% final payment):</strong> Due after technical completion and final acceptance, but strictly before the final live launch (deployment) of the website.</li>
  </ul>

  <h2>§ 4 Acceptance</h2>
  <p>
    After completion, the contractor will make the website available on a test environment for review. The client undertakes to check and approve the website within <strong>7 working days</strong>. Minor adjustment requests (max. 2 correction loops) are included in the package price. After that, the work is considered accepted.
  </p>

  <h2>§ 5 LLM Visibility and SEO</h2>
  <p>
    The contractor uses modern technologies (e.g., Schema.org, clean HTML) to optimize machine readability for search engines and AI models (LLMs).
  </p>
  <p>
    However, the contractor owes <strong>no specific success</strong> (such as 1st place in search results or a guaranteed mention by AI models like ChatGPT), as these algorithms are beyond their sphere of influence.
  </p>''',

    'wartung': '''<div class="page-label">Legal / Support</div>
  <h1>Service Level Agreement (SLA)</h1>

  <a href="/public/muster-sla-wartung.pdf" class="btn-download">Download Service Level Agreement (PDF)</a>

  <div class="highlight-box">
    <p><strong>Note:</strong> This SLA regulates expectations for support times and availability during ongoing maintenance. In particular, it protects the contractor's flexibility during examination phases or illness.</p>
  </div>

  <h2>1. Scope of Services</h2>
  <p>
    This SLA regulates the ongoing technical support, security updates, and content adjustments (in the agreed hourly scope) of the client's website by Levi Zimmermann (Higan Studio).
  </p>

  <h2>§ 2 Support Times and Guaranteed Troubleshooting Model</h2>
  <p>
    The contractor guarantees technical support and troubleshooting of the systems according to a 2-stage support model to ensure high availability for B2B clients:
  </p>
  <p>
    <strong>Stage 1 (Regular Support):</strong> On weekdays from 4:00 PM to 7:00 PM (CET), regular maintenance and content adjustment work is carried out directly by the contractor.
  </p>
  <p>
    <strong>Stage 2 (Critical Emergency Standby):</strong> On weekdays from 8:00 AM to 4:00 PM (CET), a contractually bound, adult employee is deployed on guaranteed on-call duty. This person intervenes immediately in the event of critical system failures (e.g., server down) to ensure the client's operational business continuity.
  </p>

  <h2>3. Limitation of Liability for Downtimes</h2>
  <p>
    The contractor monitors the system within the scope of technical possibilities but assumes no guarantee for 100% server uptime. Outages caused by third-party providers (hosting providers, CDNs like Cloudflare, power outages) are not the responsibility of the provider.
  </p>

  <h2>4. Force Majeure and Illness Clause</h2>
  <p>
    If the contractor is temporarily unable to fulfill their maintenance obligations due to unforeseeable events (force majeure) or proven sudden illness, a reasonable grace period for service provision will be granted.
  </p>
  <p>
    The client will be informed immediately of the outage. If the contractor's absence lasts longer than 4 weeks, both parties have a special right of termination.
  </p>

  <h2>5. Term and Termination</h2>
  <p>
    The maintenance contract is concluded for an indefinite period and can be terminated by either party with a notice period of 30 days to the end of the month in writing (email is sufficient).
  </p>''',

    'datenschutz': '''<div class="page-label">Legal</div>
  <h1>Privacy Policy</h1>
  
  <div class="disclaimer-box">
    <p class="disclaimer-title">Note on Legal Documents</p>
    <p class="disclaimer-text">This is an English translation of the German Privacy Policy for informational purposes only. The legally binding document is the German version.</p>
  </div>

  <h2>1. Privacy at a Glance</h2>
  <h3>General Notes</h3>
  <p>The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data with which you could be personally identified. Detailed information on the subject of data protection can be found in our privacy policy listed below this text.</p>

  <h3>Data Collection on this Website</h3>
  <h4>Who is responsible for data collection on this website?</h4>
  <p>Data processing on this website is carried out by the website operator. You can find their contact details in the section "Notice concerning the party responsible for this website" in this privacy policy.</p>
  <h4>How do we collect your data?</h4>
  <p>Your data is collected on the one hand when you provide it to us. This could, for example, be data you enter into a contact form.</p>
  <p>Other data is collected automatically or after your consent when visiting the website by our IT systems. This is primarily technical data (e.g., Internet browser, operating system, or time of the page request). The collection of this data takes place automatically as soon as you enter this website.</p>
  <h4>What do we use your data for?</h4>
  <p>Part of the data is collected to ensure the error-free provision of the website. Other data may be used to analyze your user behavior.</p>

  <h2>2. Hosting</h2>
  <p>We host the content of our website with the following provider:</p>
  <h3>External Hosting</h3>
  <p>This website is hosted externally. The personal data recorded on this website is stored on the servers of the host(s). This may primarily involve IP addresses, contact requests, meta and communication data, contract data, contact details, names, website access, and other data generated via a website.</p>
  <p>External hosting takes place for the purpose of fulfilling the contract with our potential and existing customers (Art. 6 (1) lit. b GDPR) and in the interest of a secure, fast, and efficient provision of our online offer by a professional provider (Art. 6 (1) lit. f GDPR). If corresponding consent has been requested, processing is carried out exclusively on the basis of Art. 6 (1) lit. a GDPR and § 25 (1) TTDSG, insofar as the consent includes the storage of cookies or access to information in the user's end device (e.g., device fingerprinting) within the meaning of the TTDSG. Consent can be revoked at any time.</p>
  <p>Our host(s) will only process your data to the extent necessary to fulfill their performance obligations and follow our instructions with respect to such data.</p>
  <p>We use the following host(s): <strong>Vercel</strong></p>

  <h2>3. General Notes and Mandatory Information</h2>
  <h3>Data Protection</h3>
  <p>The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy.</p>

  <h3>Responsible Party</h3>
  <p>The responsible party for data processing on this website is:</p>
  <p>
    Levi Zimmermann<br>
    Hohenhorn, Schleswig-Holstein, Germany<br>
    Email: contact@higan.studio
  </p>

  <h3>Revocation of your Consent to Data Processing</h3>
  <p>Many data processing operations are only possible with your express consent. You can revoke consent already given at any time. The legality of the data processing carried out until the revocation remains unaffected by the revocation.</p>

  <h3>SSL or TLS Encryption</h3>
  <p>For security reasons and to protect the transmission of confidential content, such as inquiries you send to us as the site operator, this site uses SSL or TLS encryption. You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://" and by the lock symbol in your browser line.</p>
'''
}

folders = ['impressum', 'datenschutz', 'tos', 'projektvertrag', 'wartung']

for folder in folders:
    idx_path = os.path.join(folder, 'index.html')
    if not os.path.exists(idx_path):
        continue
    
    with open(idx_path, 'r', encoding='utf-8') as f:
        old_content = f.read()
    
    # We need to find the <main class="legal-content"> and replace its contents.
    match = re.search(r'(<main class="legal-content">)(.*?)(</main>)', old_content, re.DOTALL)
    if not match:
        continue
        
    main_open = match.group(1)
    original_html = match.group(2).strip()
    main_close = match.group(3)
    
    # Check if we already wrapped it
    if '<sc-if value="{{ isDe }}">' in original_html:
        # We already processed this file, let's extract the german part.
        ger_match = re.search(r'<sc-if value="{{ isDe }}">(.*?)</sc-if>', original_html, re.DOTALL)
        if ger_match:
            original_html = ger_match.group(1).strip()
            
    german_block = f'  <sc-if value="{{{{ isDe }}}}">\n{original_html}\n  </sc-if>'
    english_block = f'  <sc-if value="{{{{ isEn }}}}">\n{en_translations[folder]}\n  </sc-if>'
    
    new_main_content = german_block + '\n\n' + english_block
    new_html = old_content[:match.start()] + main_open + '\n' + new_main_content + '\n' + main_close + old_content[match.end():]
    
    with open(idx_path, 'w', encoding='utf-8') as f:
        f.write(new_html)

print("Applied English translations to legal pages!")
