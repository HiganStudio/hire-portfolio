<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Higan Studio — Digitale Produkte, Design &amp; Automatisierung</title>
<script src="./support.js"></script>
</head>
<body>
<x-dc>
<helmet>
<link rel="icon" type="image/svg+xml" href="./favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
  *{box-sizing:border-box}
  html,body{margin:0;padding:0}
  body{font-family:'Inter',system-ui,sans-serif;background:#0a0a0a}
  html,body{overflow-x:clip}
  a{color:inherit;text-decoration:none}
  ::selection{background:rgba(124,90,166,.4)}
  .hg-caret{display:inline-block;width:2px;background:currentColor;margin-left:2px;animation:hgBlink 1s steps(1) infinite;vertical-align:baseline}
  @keyframes hgBlink{50%{opacity:0}}
  @keyframes hgUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
  .hg-reveal{opacity:0;transform:translateY(26px);transition:transform 1s cubic-bezier(.2,.7,.2,1),opacity 1s ease}
  .hg-reveal.hg-in{opacity:1;transform:none}
  .hg-navlink{position:relative;transition:opacity .25s}
  .hg-navlink:hover{opacity:.55}
  .hg-tile{transition:transform .5s cubic-bezier(.2,.7,.2,1)}
  .hg-tile:hover{transform:translateY(-8px)}
  .hg-tile:hover .hg-device{transform:translateY(-6px) scale(1.015)}
  .hg-device{transition:transform .6s cubic-bezier(.2,.7,.2,1)}
  .hg-block{will-change:transform,opacity}
  .hg-cta{display:inline-flex;align-items:center;gap:16px;padding:7px 7px 7px 28px;border-radius:11px;border:1px solid rgba(244,242,247,.22);background:rgba(244,242,247,.04);color:#f4f2f7;font-size:14.5px;font-weight:500;letter-spacing:.01em;cursor:pointer;font-family:inherit;transition:background .35s ease,border-color .35s ease}
  .hg-cta:hover{background:rgba(244,242,247,.09);border-color:rgba(244,242,247,.4)}
  .hg-cta .hg-ar{width:40px;height:40px;border-radius:8px;background:#c3a6e0;color:#1c1424;display:inline-flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;transition:transform .35s cubic-bezier(.2,.8,.2,1),background .3s ease}
  .hg-cta:hover .hg-ar{transform:translate(3px,-3px);background:#e2d3f5}
  .hg-cta.hg-cta-onlight{border-color:#15131a;background:#15131a;color:#fff}
  .hg-cta.hg-cta-onlight:hover{background:#2a2733;border-color:#2a2733}
  .hg-cta.hg-cta-onlight .hg-ar{background:#fff;color:#15131a}
  .hg-cta.hg-cta-onlight:hover .hg-ar{background:#f4f2f7}
  .hg-day{width:34px;height:34px;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;border:none;font-size:13px;font-family:inherit}
  .hg-guide{position:relative;display:inline-block;opacity:.65;transition:transform .3s ease,opacity .3s ease}
  .hg-guide::before{content:'→';position:absolute;left:-20px;top:0;opacity:0;transition:left .3s ease,opacity .3s ease}
  .hg-guide:hover{transform:translateX(20px);opacity:1}
  .hg-guide:hover::before{left:-22px;opacity:.7}
  .hg-flow-arrow{opacity:0;transform:scale(.6)}
  .hg-wf{opacity:0;transform:translateY(46px) scale(.9) rotateX(12deg);transform-origin:center bottom;perspective:600px;transition:opacity .75s cubic-bezier(.22,.9,.26,1.1),transform .9s cubic-bezier(.22,.9,.26,1.15)}
  .hg-flow.hg-in .hg-wf{opacity:1;transform:translateY(0) scale(1) rotateX(0)}
  .hg-flow.hg-in .hg-wf:nth-child(1){transition-delay:.05s}
  .hg-flow.hg-in .hg-wf:nth-child(3){transition-delay:.28s}
  .hg-flow.hg-in .hg-wf:nth-child(5){transition-delay:.51s}
  .hg-flow.hg-in .hg-wf{transition:opacity .75s cubic-bezier(.22,.9,.26,1.1),transform .9s cubic-bezier(.22,.9,.26,1.15),border-color .3s ease,background .3s ease,box-shadow .3s ease}
  .hg-flow.hg-in .hg-wf:hover{transform:translateY(-9px) scale(1.015);border-color:#d9c6ee !important;background:rgba(200,170,230,.1) !important;box-shadow:0 20px 44px rgba(200,170,230,.22)}
  .hg-wf span{transition:opacity .3s ease,transform .5s cubic-bezier(.3,1.4,.4,1);display:inline-block}
  .hg-flow.hg-in .hg-wf span{transform:scale(1)}
  .hg-wf:not(.hg-flow.hg-in .hg-wf) span{transform:scale(.5)}
  .hg-wf h3{transition:color .3s ease}
  .hg-flow.hg-in .hg-wf:hover h3{color:#e4d3f5}
  .hg-flow.hg-in .hg-wf:hover span{opacity:.85}
  @keyframes hgArrowPulse{0%,100%{box-shadow:0 0 0 0 rgba(195,166,224,0)}50%{box-shadow:0 0 0 6px rgba(195,166,224,.12)}}
  .hg-flow.hg-in .hg-flow-arrow{animation:hgArrowPulse 2.4s ease-in-out infinite,hgFlowArrowIn .7s cubic-bezier(.3,1.4,.4,1) .3s both}
  @keyframes hgFlowArrowIn{from{opacity:0;transform:scale(.6)}to{opacity:1;transform:scale(1)}}
  .hg-scroll-cue{position:fixed;z-index:38;left:50%;bottom:116px;width:34px;height:34px;pointer-events:auto;cursor:pointer;opacity:0;transform:translate(-50%,8px);transition:opacity .25s ease,transform .25s ease;filter:drop-shadow(0 2px 6px rgba(0,0,0,.55))}
  /* symmetric down-chevron: a centered SQUARE with equal right+bottom borders,
     rotated exactly 45deg — the two arms mirror across the vertical axis */
  .hg-scroll-cue::after{content:'';position:absolute;top:50%;left:50%;width:14px;height:14px;transform:translate(-50%,-62%) rotate(45deg);border-right:2.5px solid rgba(244,242,247,.95);border-bottom:2.5px solid rgba(244,242,247,.95)}
  .hg-scroll-cue.hg-visible{opacity:.95;transform:translate(-50%,0);animation:hgScrollCue 1.8s ease-in-out infinite}
  @keyframes hgScrollCue{0%,100%{transform:translate(-50%,0)}50%{transform:translate(-50%,11px)}}
  @media (prefers-reduced-motion:reduce){.hg-scroll-cue.hg-visible{animation:none}.hg-reveal,.hg-wf,.hg-tile,.hg-device{transition-duration:.01ms!important}}
</style>
<script src="./image-slot.js"></script>
</helmet>
<div ref="{{ rootRef }}" style="position:relative;min-height:100vh;color:#f4f2f7;background:#0a0a0a">

  <canvas ref="{{ petalCanvas }}" style="position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:999"></canvas>

  <header style="position:fixed;top:0;left:0;right:0;z-index:40;display:flex;align-items:center;justify-content:space-between;padding:22px 40px;background:rgba(10,10,10,.72);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid rgba(255,255,255,.06)">
    <a href="{{ goHome }}" onClick="{{ goHome }}" style="display:flex;align-items:center;cursor:pointer">
      <img src="assets/higan-logo-white-trim.png" alt="Higan" style="height:38px;width:auto;display:block">
    </a>
    <div style="display:flex;align-items:center;gap:26px">
      <button onClick="{{ navContact }}" style="background:none;border:none;color:inherit;font:inherit;font-size:13.5px;font-weight:400;cursor:pointer;padding:8px 2px" class="hg-navlink">{{ t.contact }}</button>
      <button onClick="{{ toggleLang }}" style="background:none;border:none;color:inherit;font:inherit;font-size:13px;letter-spacing:.14em;cursor:pointer;padding:8px 2px;opacity:.7" class="hg-navlink">{{ langLabel }}</button>
    </div>
  </header>

  <nav ref="{{ navRef }}" style="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:39;width:auto;transition:opacity .3s ease;will-change:transform">
    <div style="display:flex;align-items:stretch;background:#fbfbfc;border-radius:8px;padding:4px;box-shadow:0 14px 40px rgba(0,0,0,.5)" data-hg-light="1">
      <span class="hg-navlink" style="text-align:center;cursor:pointer;color:#17151d;padding:9px 18px;font-size:12.5px;font-weight:500;white-space:nowrap" onClick="{{ navProjects }}">{{ t.projects }}</span>
      <span class="hg-navlink" style="text-align:center;cursor:pointer;color:#17151d;padding:9px 18px;font-size:12.5px;font-weight:500;white-space:nowrap" onClick="{{ navAbout }}">{{ t.about }}</span>
      <span class="hg-navlink" style="text-align:center;cursor:pointer;color:#17151d;padding:9px 18px;font-size:12.5px;font-weight:500;white-space:nowrap" onClick="{{ navServices }}">{{ t.services }}</span>
      <span class="hg-navlink" style="text-align:center;cursor:pointer;color:#17151d;padding:9px 18px;font-size:12.5px;font-weight:500;white-space:nowrap" onClick="{{ navContact }}">{{ t.contact }}</span>
    </div>
  </nav>
  <div ref="{{ scrollCueRef }}" onClick="{{ scrollCueClick }}" role="button" tabindex="0" aria-label="Scroll down" class="hg-scroll-cue"></div>

  <main style="position:relative;z-index:10">

    <!-- ================= HOME ================= -->
    <sc-if value="{{ isHome }}" hint-placeholder-val="{{ true }}">
    <div data-screen-label="Home">
      <section style="height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:120px 24px 60px;overflow:hidden">
        <h1 style="font-family:'Cormorant Garamond',serif;font-weight:500;font-size:clamp(38px,6.4vw,92px);line-height:1.06;margin:0;max-width:16ch;animation:hgUp 1s ease both .1s">
          {{ heroPre }}<br>
          <span style="font-style:italic;color:#c3a6e0">{{ typedWord }}</span><span class="hg-caret" style="height:.86em"></span>
        </h1>
      </section>

      <!-- PROJECT TILES -->
      <section style="max-width:1240px;margin:0 auto;padding:120px 32px 40px">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:42px">
          <h2 style="font-family:'Cormorant Garamond',serif;font-weight:500;font-size:clamp(28px,3.4vw,48px);margin:0">{{ t.selectedWork }}</h2>
          <span style="font-family:'Space Mono',monospace;opacity:.4;font-size:12px;letter-spacing:.14em">{{ t.projectsCap }}</span>
        </div>
        <div ref="{{ tilesSlot }}"></div>
      </section>

      <!-- WHAT WE OFFER -->
      <section style="max-width:1100px;margin:0 auto;padding:90px 32px 40px">
        <h2 style="font-family:'Cormorant Garamond',serif;font-weight:500;font-size:clamp(28px,3.6vw,50px);margin:0 0 8px;text-align:center">{{ t.offerTitle }}</h2>
        <p style="text-align:center;opacity:.5;font-weight:300;margin:0 0 60px">{{ t.offerSub }}</p>
        <sc-for list="{{ offers }}" as="o" hint-placeholder-count="5">
          <div class="hg-reveal" style="display:grid;grid-template-columns:.2fr 1fr 1fr;gap:32px;padding:38px 0;border-top:1px solid rgba(255,255,255,.12)">
            <span style="font-family:'Space Mono',monospace;font-size:14px;opacity:.4">{{ o.num }}</span>
            <div>
              <h3 style="font-family:'Cormorant Garamond',serif;font-weight:500;font-size:30px;margin:0 0 10px">{{ o.title }}</h3>
              <p style="margin:0;opacity:.55;font-size:14.5px;line-height:1.7;font-weight:300;max-width:38ch">{{ o.desc }}</p>
            </div>
            <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:11px">
              <sc-for list="{{ o.items }}" as="it" hint-placeholder-count="4">
                <li style="font-size:14.5px;opacity:.75;display:flex;gap:12px;align-items:baseline"><span style="color:#c3a6e0;font-size:9px">◆</span>{{ it }}</li>
              </sc-for>
            </ul>
          </div>
        </sc-for>
      </section>

      <section style="max-width:1000px;margin:0 auto;padding:20px 32px 200px">
        <div class="hg-reveal" style="background:#fdfdfd;color:#15131a;border-radius:24px;box-shadow:0 30px 90px rgba(0,0,0,.5);display:grid;grid-template-columns:1fr 1fr;gap:36px;align-items:center;padding:clamp(32px,4vw,56px)" data-hg-light="1">
          <h2 style="font-family:'Cormorant Garamond',serif;font-weight:500;font-style:italic;font-size:clamp(26px,2.8vw,38px);line-height:1.2;margin:0">{{ t.ready }}</h2>
          <div>
            <p style="margin:0 0 24px;font-size:15px;line-height:1.7;font-weight:300;opacity:.7">{{ t.readySub }}</p>
            <button class="hg-cta hg-cta-onlight" data-hg-dark="1" onClick="{{ navContact }}"><span>{{ t.discovery }}</span><span class="hg-ar">↗</span></button>
          </div>
        </div>
      </section>
    </div>
    </sc-if>

    <!-- ================= SERVICES ================= -->
    <sc-if value="{{ isServices }}" hint-placeholder-val="{{ true }}">
    <div data-screen-label="Services">
      <section style="height:100vh;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:24px">
        <h1 style="font-family:'Cormorant Garamond',serif;font-weight:500;font-size:clamp(38px,6.4vw,92px);line-height:1.06;margin:0;max-width:16ch">
          {{ heroPre }}<br>
          <span style="font-style:italic;color:#c3a6e0">{{ typedWord }}</span><span class="hg-caret" style="height:.86em"></span>
        </h1>
      </section>

      <!-- CLIENT WORKFLOW DIAGRAM -->
      <section style="max-width:1080px;margin:0 auto;padding:60px 32px 40px">
        <p style="font-family:'Space Mono',monospace;font-size:12px;letter-spacing:.18em;opacity:.45;margin:0 0 6px">01 — {{ t.workflowTitle }}</p>
        <h2 style="font-family:'Cormorant Garamond',serif;font-weight:500;font-size:clamp(26px,3.4vw,44px);margin:0 0 50px">{{ t.workflowHead }}</h2>
        <div class="hg-flow hg-reveal" style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px">
          <sc-for list="{{ workflow }}" as="w" hint-placeholder-count="3">
            <div class="hg-wf" style="border:1px solid rgba(255,255,255,.18);border-radius:16px;padding:24px 22px;background:rgba(255,255,255,.02);text-align:center;aspect-ratio:1;display:flex;flex-direction:column;align-items:center;justify-content:center;box-sizing:border-box">
              <span style="font-family:'Space Mono',monospace;font-size:12px;opacity:.4;margin-bottom:10px">{{ w.num }}</span>
              <h3 style="font-family:'Cormorant Garamond',serif;font-weight:500;font-size:25px;margin:0 0 8px">{{ w.title }}</h3>
              <p style="margin:0;opacity:.55;font-size:13.5px;line-height:1.55;font-weight:300">{{ w.desc }}</p>
            </div>

          </sc-for>
        </div>
      </section>

      <!-- FALLING / ASSEMBLING BLOCKS -->
      <section ref="{{ fallRef }}" style="max-width:1000px;margin:0 auto;padding:0 32px;position:relative;z-index:41">
        <div style="height:100vh;display:flex;flex-direction:column;justify-content:center;padding:96px 0 24px;box-sizing:border-box">
          <p style="font-family:'Space Mono',monospace;font-size:clamp(10px,1.3vh,12px);letter-spacing:.18em;opacity:.45;margin:0 0 clamp(4px,.8vh,6px);flex-shrink:0">02 — {{ t.buildTitle }}</p>
          <h2 style="font-family:'Cormorant Garamond',serif;font-weight:500;font-size:clamp(20px,3.2vh,40px);margin:0 0 clamp(16px,3vh,40px);flex-shrink:0">{{ t.buildHead }}</h2>
          <div style="flex:1;min-height:0;max-height:68vh;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr 1fr;gap:clamp(8px,1.4vh,16px)">
            <div class="hg-block" data-order="3" data-fy="-420" data-rot="-2" style="opacity:0;grid-column:span 2;overflow:hidden;border:1px solid rgba(255,255,255,.18);border-radius:12px;padding:clamp(14px,2.4vh,28px);background:rgba(255,255,255,.02);display:flex;flex-direction:column;justify-content:center">
              <p style="font-family:'Space Mono',monospace;font-size:clamp(9px,1vh,10.5px);letter-spacing:.16em;opacity:.6;margin:0 0 clamp(3px,.6vh,9px)">AESTHETISCHE DOMINANZ</p>
              <h3 style="font-family:'Cormorant Garamond',serif;font-weight:500;font-size:clamp(17px,3vh,34px);margin:0 0 clamp(3px,.7vh,10px)">{{ t.blk3t }}</h3>
              <p style="margin:0;opacity:.7;font-size:clamp(11px,1.5vh,14px);line-height:1.5;font-weight:300;max-width:52ch;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical">{{ t.blk3d }}</p>
            </div>
            <div class="hg-block" data-order="1" data-fy="-420" data-rot="2" style="opacity:0;overflow:hidden;border:1px solid rgba(255,255,255,.16);border-radius:12px;padding:clamp(12px,2vh,26px);background:rgba(255,255,255,.03);display:flex;flex-direction:column;justify-content:center">
              <p style="font-family:'Space Mono',monospace;font-size:clamp(9px,1vh,10.5px);letter-spacing:.16em;opacity:.5;margin:0 0 clamp(3px,.6vh,9px)">CUSTOM INTEGRATION</p>
              <h3 style="font-family:'Cormorant Garamond',serif;font-weight:500;font-size:clamp(15px,2.2vh,23px);margin:0 0 clamp(3px,.6vh,9px)">{{ t.blk2t }}</h3>
              <p style="margin:0;opacity:.6;font-size:clamp(10px,1.3vh,13.5px);line-height:1.45;font-weight:300;overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical">{{ t.blk2d }}</p>
            </div>
            <div class="hg-block" data-order="2" data-fy="-420" data-rot="-2" style="opacity:0;overflow:hidden;border:1px solid rgba(255,255,255,.16);border-radius:12px;padding:clamp(12px,2vh,26px);background:rgba(255,255,255,.03);display:flex;flex-direction:column;justify-content:center">
              <p style="font-family:'Space Mono',monospace;font-size:clamp(9px,1vh,10.5px);letter-spacing:.16em;opacity:.5;margin:0 0 clamp(3px,.6vh,9px)">DAS MOMENTUM</p>
              <h3 style="font-family:'Cormorant Garamond',serif;font-weight:500;font-size:clamp(15px,2.2vh,23px);margin:0 0 clamp(3px,.6vh,9px)">{{ t.blkMt }}</h3>
              <p style="margin:0;opacity:.6;font-size:clamp(10px,1.3vh,13.5px);line-height:1.45;font-weight:300;overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical">{{ t.blkMd }}</p>
            </div>
            <div class="hg-block" data-order="0" data-fy="-420" data-rot="2" style="opacity:0;grid-column:span 2;overflow:hidden;border:1px solid rgba(255,255,255,.16);border-radius:12px;padding:clamp(14px,2.4vh,28px);background:rgba(255,255,255,.03);display:flex;flex-direction:column;justify-content:center">
              <p style="font-family:'Space Mono',monospace;font-size:clamp(9px,1vh,10.5px);letter-spacing:.16em;opacity:.5;margin:0 0 clamp(3px,.6vh,9px)">DAS FUNDAMENT & BACKEND</p>
              <h3 style="font-family:'Cormorant Garamond',serif;font-weight:500;font-size:clamp(16px,2.7vh,30px);margin:0 0 clamp(3px,.7vh,10px)">{{ t.blk1t }}</h3>
              <p style="margin:0;opacity:.65;font-size:clamp(11px,1.4vh,14px);line-height:1.5;font-weight:300;max-width:52ch;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical">{{ t.blk1d }}</p>
            </div>
          </div>
        </div>
      </section>

      <section style="max-width:1000px;margin:0 auto;padding:60px 32px 200px">
        <div class="hg-reveal" style="background:#fdfdfd;color:#15131a;border-radius:24px;box-shadow:0 30px 90px rgba(0,0,0,.5);display:grid;grid-template-columns:1fr 1fr;gap:36px;align-items:center;padding:clamp(32px,4vw,56px)" data-hg-light="1">
          <h2 style="font-family:'Cormorant Garamond',serif;font-weight:500;font-style:italic;font-size:clamp(26px,2.8vw,38px);line-height:1.2;margin:0">{{ t.ready }}</h2>
          <div>
            <p style="margin:0 0 24px;font-size:15px;line-height:1.7;font-weight:300;opacity:.7">{{ t.readySub }}</p>
            <button class="hg-cta hg-cta-onlight" data-hg-dark="1" onClick="{{ navContact }}"><span>{{ t.discovery }}</span><span class="hg-ar">↗</span></button>
          </div>
        </div>
      </section>
    </div>
    </sc-if>

    <!-- ================= ABOUT ================= -->
    <sc-if value="{{ isAbout }}" hint-placeholder-val="{{ true }}">
    <div data-screen-label="About">
      <section style="height:100vh;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:24px">

        <h1 style="font-family:'Cormorant Garamond',serif;font-weight:500;font-size:clamp(38px,6.4vw,92px);line-height:1.06;margin:0;max-width:16ch">
          {{ heroPre }}<br>
          <span style="font-style:italic;color:#c3a6e0">{{ typedWord }}</span><span class="hg-caret" style="height:.86em"></span>
        </h1>
      </section>
      <section style="max-width:900px;margin:0 auto;padding:60px 32px 200px">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:40px;padding-top:40px;border-top:1px solid rgba(255,255,255,.12)">
          <div class="hg-reveal"><h3 style="font-family:'Cormorant Garamond',serif;font-weight:500;font-size:26px;margin:0 0 10px">{{ t.mission }}</h3><p style="opacity:.6;font-weight:300;line-height:1.7;margin:0">{{ t.missionD }}</p></div>
          <div class="hg-reveal"><h3 style="font-family:'Cormorant Garamond',serif;font-weight:500;font-size:26px;margin:0 0 10px">{{ t.vision }}</h3><p style="opacity:.6;font-weight:300;line-height:1.7;margin:0">{{ t.visionD }}</p></div>
        </div>
      </section>
      <section style="max-width:1000px;margin:0 auto;padding:20px 32px 200px">
        <div class="hg-reveal" style="background:#fdfdfd;color:#15131a;border-radius:24px;box-shadow:0 30px 90px rgba(0,0,0,.5);display:grid;grid-template-columns:1fr 1fr;gap:36px;align-items:center;padding:clamp(32px,4vw,56px)" data-hg-light="1">
          <h2 style="font-family:'Cormorant Garamond',serif;font-weight:500;font-style:italic;font-size:clamp(26px,2.8vw,38px);line-height:1.2;margin:0">{{ t.ready }}</h2>
          <div>
            <p style="margin:0 0 24px;font-size:15px;line-height:1.7;font-weight:300;opacity:.7">{{ t.readySub }}</p>
            <button class="hg-cta hg-cta-onlight" data-hg-dark="1" onClick="{{ navContact }}"><span>{{ t.discovery }}</span><span class="hg-ar">↗</span></button>
          </div>
        </div>
      </section>
    </div>
    </sc-if>

    <!-- ================= CONTACT ================= -->
    <!-- ================= GUIDE ================= -->
    <sc-if value="{{ isGuide }}" hint-placeholder-val="{{ true }}">
    <div data-screen-label="Guide">
      <section style="height:100vh;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:24px">
        <h1 style="font-family:'Cormorant Garamond',serif;font-weight:500;font-size:clamp(38px,6.4vw,92px);line-height:1.06;margin:0;max-width:16ch;animation:hgUp 1s ease both .1s">
          {{ heroPre }}<br>
          <span style="font-style:italic;color:#c3a6e0">{{ typedWord }}</span><span class="hg-caret" style="height:.86em"></span>
        </h1>
      </section>
      
      <section style="max-width:800px;margin:0 auto;padding:40px 32px 120px;display:flex;flex-direction:column;align-items:stretch" class="contact-layout">
        
        <div style="margin-bottom:80px;text-align:center">
          <span style="font-family:'Space Mono',monospace;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;opacity:0.5;margin-bottom:20px;display:inline-block;padding:8px 16px;border:1px solid rgba(255,255,255,0.1);border-radius:20px">Free Guide</span>
          <h2 style="font-family:'Cormorant Garamond',serif;font-size:clamp(42px,5.5vw,72px);font-weight:500;line-height:1.1;margin:0 0 20px">The Open Source Advantage</h2>
          <p style="font-size:22px;color:#c3a6e0;opacity:1;margin:0;font-weight:300">Why Paying for SaaS is Holding You Back</p>
        </div>

        <div style="font-size:17px;line-height:1.8;opacity:0.8;font-weight:300;margin-bottom:60px">
          <p style="margin-bottom:24px">As a modern founder, you want to ensure you're building a digital product that scales without arbitrary limits or bloated enterprise licensing fees. Reclaiming your digital sovereignty is the ultimate competitive advantage.</p>
          <p style="margin-bottom:0">In this free guide, you'll learn how to leverage powerful open-source architectures to make thousands of global developers work for you, effectively eliminating recurring SaaS costs while increasing stability.</p>
        </div>

        <h3 style="font-family:'Cormorant Garamond',serif;font-size:clamp(28px,4vw,40px);font-weight:500;margin:0 0 40px;text-align:center">What you are about to learn</h3>
        <ul style="list-style:none;padding:0;margin:0 0 80px;display:flex;flex-direction:column;gap:30px">
          <li style="display:flex;gap:24px;align-items:flex-start;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);padding:32px;border-radius:16px">
            <span style="font-family:'Space Mono',monospace;color:#c3a6e0;font-size:16px;margin-top:2px;opacity:0.8">01</span>
            <div><strong style="font-size:18px;font-weight:500">The true cost of Vendor Lock-in</strong><br><span style="opacity:0.7;font-size:15px;line-height:1.6;font-family:'Inter',sans-serif;color:inherit;display:block;margin-top:8px;font-weight:300">How SaaS subscriptions silently drain your resources and limit your growth potential over a 5-year span.</span></div>
          </li>
          <li style="display:flex;gap:24px;align-items:flex-start;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);padding:32px;border-radius:16px">
            <span style="font-family:'Space Mono',monospace;color:#c3a6e0;font-size:16px;margin-top:2px;opacity:0.8">02</span>
            <div><strong style="font-size:18px;font-weight:500">Architecting for Sovereignty</strong><br><span style="opacity:0.7;font-size:15px;line-height:1.6;font-family:'Inter',sans-serif;color:inherit;display:block;margin-top:8px;font-weight:300">Building a tech stack that belongs entirely to you, allowing unrestricted data ownership and portability.</span></div>
          </li>
          <li style="display:flex;gap:24px;align-items:flex-start;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);padding:32px;border-radius:16px">
            <span style="font-family:'Space Mono',monospace;color:#c3a6e0;font-size:16px;margin-top:2px;opacity:0.8">03</span>
            <div><strong style="font-size:18px;font-weight:500">Open Source at Enterprise Scale</strong><br><span style="opacity:0.7;font-size:15px;line-height:1.6;font-family:'Inter',sans-serif;color:inherit;display:block;margin-top:8px;font-weight:300">Harnessing the global developer community to keep your infrastructure secure, modern, and auto-scaling.</span></div>
          </li>
          <li style="display:flex;gap:24px;align-items:flex-start;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);padding:32px;border-radius:16px">
            <span style="font-family:'Space Mono',monospace;color:#c3a6e0;font-size:16px;margin-top:2px;opacity:0.8">04</span>
            <div><strong style="font-size:18px;font-weight:500">Transition & Execution</strong><br><span style="opacity:0.7;font-size:15px;line-height:1.6;font-family:'Inter',sans-serif;color:inherit;display:block;margin-top:8px;font-weight:300">A step-by-step framework for decoupling your current setup and moving towards total independence.</span></div>
          </li>
        </ul>

        <div style="margin-bottom:100px">
          <p style="font-family:'Cormorant Garamond',serif;font-style:italic;font-size:clamp(24px,4vw,34px);line-height:1.4;color:#fff;text-align:center;margin:0 0 40px">
            "If you want to rethink your architecture, escape restrictive licenses, and execute a truly scalable open-source foundation—we are here to support you. You can count on us."
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
          <div style="display:flex;flex-direction:column;gap:24px;text-align:left;max-width:500px;margin:0 auto">
            <div>
              <label style="display:block;font-family:'Space Mono',monospace;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.6);margin-bottom:10px">First name*</label>
              <input type="text" placeholder="Levi" style="width:100%;background:rgba(0,0,0,0.2);border:1px solid rgba(255,255,255,0.15);color:#fff;padding:16px 20px;border-radius:12px;font-family:'Inter',sans-serif;font-size:15px;outline:none;transition:border-color 0.2s" onfocus="this.style.borderColor='rgba(255,255,255,0.4)'" onblur="this.style.borderColor='rgba(255,255,255,0.15)'">
            </div>
            <div>
              <label style="display:block;font-family:'Space Mono',monospace;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.6);margin-bottom:10px">Company name</label>
              <input type="text" placeholder="Higan Studio" style="width:100%;background:rgba(0,0,0,0.2);border:1px solid rgba(255,255,255,0.15);color:#fff;padding:16px 20px;border-radius:12px;font-family:'Inter',sans-serif;font-size:15px;outline:none;transition:border-color 0.2s" onfocus="this.style.borderColor='rgba(255,255,255,0.4)'" onblur="this.style.borderColor='rgba(255,255,255,0.15)'">
            </div>
            <div>
              <label style="display:block;font-family:'Space Mono',monospace;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.6);margin-bottom:10px">Email address*</label>
              <input type="text" placeholder="contact&#64;higan.studio" style="width:100%;background:rgba(0,0,0,0.2);border:1px solid rgba(255,255,255,0.15);color:#fff;padding:16px 20px;border-radius:12px;font-family:'Inter',sans-serif;font-size:15px;outline:none;transition:border-color 0.2s" onfocus="this.style.borderColor='rgba(255,255,255,0.4)'" onblur="this.style.borderColor='rgba(255,255,255,0.15)'">
            </div>
            <button class="hg-navlink" style="display:inline-flex;align-items:center;justify-content:center;background:#fff;color:#000;padding:18px 32px;border-radius:12px;font-family:'Inter',sans-serif;font-weight:500;font-size:15px;border:none;cursor:pointer;width:100%;margin-top:16px;transition:transform 0.2s" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'" onclick="alert('Thank you! Your guide will be sent shortly.')">Request now for free →</button>
          </div>
          <div style="font-size:12px;opacity:0.4;margin-top:32px;line-height:1.6;max-width:500px;margin-left:auto;margin-right:auto">Higan Studio needs the contact information you provide to us to contact you about our products and services. You can unsubscribe from these communications at any time.</div>
        </div>
      </section>
    </div>
    </sc-if>

    <sc-if value="{{ isContact }}" hint-placeholder-val="{{ true }}">
    <div data-screen-label="Contact">
      <section style="height:100vh;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:24px">
        <h1 style="font-family:'Cormorant Garamond',serif;font-weight:500;font-size:clamp(38px,6.4vw,92px);line-height:1.06;margin:0;max-width:16ch">
          {{ heroPre }}<br>
          <span style="font-style:italic;color:#c3a6e0">{{ typedWord }}</span><span class="hg-caret" style="height:.86em"></span>
        </h1>
      </section>
      <div ref="{{ bookingSlot2 }}"></div>
      <div style="height:120px"></div>
    </div>
    </sc-if>

  </main>

  <!-- FOOTER -->
  <footer ref="{{ footerRef }}" style="position:relative;z-index:10;border-top:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.015)">
    <div style="max-width:1240px;margin:0 auto;padding:64px 40px 30px;display:grid;grid-template-columns:1.3fr .8fr 1fr;gap:40px">
      <div>
        <img src="assets/higan-logo-white-trim.png" alt="Higan" style="height:34px;margin-bottom:18px">
        <p style="opacity:.5;font-weight:300;font-size:14px;line-height:1.7;margin:0 0 20px;max-width:30ch">{{ t.footBlurb }}</p>
        <p style="opacity:.6;font-weight:300;font-size:14px;margin:0 0 8px">Hamburg, Deutschland</p>
        <p style="font-family:'Space Mono',monospace;opacity:.4;font-size:12px;margin:0 0 18px">© 2026 Higan</p>
        <div style="display:flex;gap:10px">
          <a href="#" aria-label="Instagram" class="hg-navlink" style="width:38px;height:38px;border-radius:10px;border:1px solid rgba(255,255,255,.18);display:flex;align-items:center;justify-content:center"><span style="width:16px;height:16px;border:1.5px solid #f4f2f7;border-radius:5px;position:relative;display:inline-block"><span style="position:absolute;inset:0;margin:auto;width:6px;height:6px;border:1.4px solid #f4f2f7;border-radius:50%"></span><span style="position:absolute;top:2px;right:2px;width:2px;height:2px;border-radius:50%;background:#f4f2f7"></span></span></a>
          <a href="#" aria-label="LinkedIn" class="hg-navlink" style="width:38px;height:38px;border-radius:10px;border:1px solid rgba(255,255,255,.18);display:flex;align-items:center;justify-content:center"><span style="font-family:'Space Mono',monospace;font-weight:700;font-size:13px">in</span></a>
        </div>
      </div>
      <div>
        <p style="font-family:'Space Mono',monospace;font-size:11px;letter-spacing:.16em;text-transform:uppercase;opacity:.4;margin:0 0 16px">{{ t.getInTouch }}</p>
        <span class="hg-navlink" style="opacity:.8;font-weight:400;font-size:15px;cursor:pointer;display:block;margin-bottom:10px" onClick="{{ navContact }}">{{ t.contact }} →</span>
        <a href="/levi/" class="hg-navlink" style="opacity:.8;font-weight:400;font-size:15px;display:block;margin-bottom:10px">Levi Zimmermann →</a>
        <a href="mailto:contact&#64;higan.studio" class="hg-navlink" style="opacity:.6;font-weight:300;font-size:14px">contact&#64;higan.studio</a>
      </div>
      <div>
        <p style="font-family:'Space Mono',monospace;font-size:11px;letter-spacing:.16em;text-transform:uppercase;opacity:.4;margin:0 0 16px">{{ t.guides }}</p>
        <div style="display:flex;flex-direction:column;gap:10px">
          <a class="hg-guide" style="font-weight:300;font-size:14px;display:block;" href="/guides/open-source/">{{ t.guide1 }}</a>
          <a class="hg-guide" style="font-weight:300;font-size:14px;display:block;" href="/guides/vendor-lock-in/">{{ t.guide2 }}</a>
          <a class="hg-guide" style="font-weight:300;font-size:14px;display:block;" href="/guides/trust-through-aesthetics/">{{ t.guide3 }}</a>
        </div>
      </div>
    </div>
    <div style="max-width:1240px;margin:0 auto;padding:20px 40px 34px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:16px;border-top:1px solid rgba(255,255,255,.08);font-family:'Space Mono',monospace;font-size:12px;opacity:.45">
      <div style="display:flex;gap:24px;flex-wrap:wrap">
        <a href="/projektvertrag" class="hg-navlink" style="text-decoration:none">{{ t.projektvertrag }}</a>
        <a href="/wartung" class="hg-navlink" style="text-decoration:none">{{ t.wartung }}</a>
        <a href="/tos" class="hg-navlink" style="text-decoration:none">{{ t.tos }}</a>
      </div>
      <div style="display:flex;gap:24px">
        <a href="/impressum" class="hg-navlink" style="text-decoration:none">{{ t.impressum }}</a>
        <a href="/datenschutz" class="hg-navlink" style="text-decoration:none">{{ t.datenschutz }}</a>
      </div>
    </div>
  </footer>

</div>
</x-dc>
<script type="text/x-dc" data-dc-script data-props="{&quot;$preview&quot;:{&quot;width&quot;:1280,&quot;height&quot;:880}}">
class Component extends DCLogic {
  state = { lang:'de', route:'home', wordIdx:0, typed:'', monthOffset:0, selectedDay:null, selectedTime:null };

  T = {
    de:{ studio:'Digitalstudio · Wien', projects:'Projekte', services:'Dienstleistungen', about:'Über uns', blog:'Blog', contact:'Kontakt',
      impressum:'Impressum', datenschutz:'Datenschutz', tos:'AGB', projektvertrag:'Projektvertrag', wartung:'SLA / Wartung',
      heroSub:'Wir bauen digitale Produkte, die durch Ästhetik führen und durch Substanz überzeugen.', scroll:'( scroll )',
      ready:'Ready to connect?', readySub:'In einem 30-minütigen Discovery Call finden wir heraus, ob wir zueinander passen.', discovery:'Discovery Call',
      selectDate:'Datum & Uhrzeit wählen', timezone:'Mitteleuropäische Zeit', videoInfo:'Web-Konferenz-Details nach Bestätigung',
      bookingIntro:'Hi! Ich freue mich auf unser Gespräch über dein Projekt. Bis bald!', bookingHead:'Wähle einen Termin',
      selectedWork:'Ausgewählte Arbeiten', projectsCap:'AUSGEWÄHLTE PROJEKTE', viewProjects:'Alle Projekte ansehen',
      tileHiganLabel:'higan studio', tileHiganH:'Unser eigenes Studio, neu gedacht', tileHigan:'Marke, Web-Entwicklung und Motion Design für unser eigenes Studio — kompromisslos umgesetzt.',
      tileCircuitLabel:'circuit', tileCircuitH:'Automatisierung im großen Stil', tileCircuit:'Plattform-Interface, Design-System und Full-Stack-Entwicklung einer Automatisierungs-Suite.',
      tileDocklysLabel:'docklys', tileDocklysH:'Laptop trifft Smartphone', tileDocklys:'Konzeption, Design und responsive Entwicklung einer Web-App über Laptop und Mobile.',
      offerTitle:'Was wir bieten', offerSub:'Fünf Disziplinen, ein System.',
      workflowTitle:'Client Workflow', workflowHead:'Von der Discovery bis zur Skalierung.',
      buildTitle:'Wie wir bauen', buildHead:'Modular gedacht, Stück für Stück gebaut.', scrollAssemble:'SCROLL — BLÖCKE FALLEN',
      blk1t:'Das Fundament', blk1d:'Scrap your overpriced „Enterprise" Systeme. Wir bauen auf Open-Source-Technologien und evaluieren für jedes Projekt das passende Fundament und den passenden Tech-Stack.',
      blk2t:'Custom Integration', blk2d:'Maßgeschneiderte Schnittstellen, die sich sauber in deine bestehende Landschaft einfügen — links andocken, rechts skalieren.',
      blkMt:'Das Momentum', blkMd:'KI-Workflows, Automatisierungen und modulare Architektur, die mit deinem Produkt mitwachsen.',
      blk3t:'Aesthetische Dominanz', blk3d:'Strukturiertes Motion Design, ästhetische Innovation und eine Design-Language, die im Kopf bleibt und über allem thront.',
      mission:'Unsere Mission', missionD:'Digitale Produkte bauen, die sich anfühlen wie sie aussehen: präzise, lebendig, kompromisslos.', vision:'Unsere Vision', visionD:'Die Standardmesslatte für digitales Handwerk im deutschsprachigen Raum heben.',
      contactSub:'Erzähl uns von deinem Projekt — oder buch direkt einen Termin. Wir antworten innerhalb von 24 Stunden.',
      footBlurb:'Digitalstudio für ästhetische, performante und skalierbare Produkte.', guides:'Free Guides', getInTouch:'Kontakt', guide1:'Etwas, das dir gehört', guide2:'Dein Stack bleibt flexibel', guide3:'Marke mit Premium-Feeling',
      wf:[{num:'01',title:'Discovery',desc:'Wir verstehen dein Produkt, deine Nutzer und deine Ziele.'},{num:'02',title:'Umsetzung',desc:'Design und Engineering in engen, sichtbaren Iterationen.'},{num:'03',title:'Skalierung',desc:'Wir wachsen mit — Wartung, Automation und neue Module.'}],
      posts:[{tag:'ESSAY',title:'Warum „Enterprise"-Software meistens ein Fehler ist',date:'JUN 2026'},{tag:'GUIDE',title:'Der richtige Tech-Stack für 2026',date:'MAI 2026'},{tag:'NOTES',title:'Motion Design als Conversion-Werkzeug',date:'APR 2026'}] },
    en:{ studio:'Digital Studio · Vienna', projects:'Projects', services:'Services', about:'About Us', blog:'Blog', contact:'Contact',
      impressum:'Imprint', datenschutz:'Privacy Policy', tos:'Terms of Service', projektvertrag:'Project Contract', wartung:'SLA / Maintenance',
      heroSub:'We build digital products that lead with aesthetics and win on substance.', scroll:'( scroll )',
      ready:'Ready to connect?', readySub:'In a 30-minute discovery call we find out if we are a fit.', discovery:'Discovery Call',
      selectDate:'Select a Date & Time', timezone:'Central European Time', videoInfo:'Web conferencing details upon confirmation',
      bookingIntro:"Hi! I'm looking forward to our chat about your project. See you soon!", bookingHead:'Pick a time',
      selectedWork:'Selected Work', projectsCap:'SELECTED PROJECTS', viewProjects:'View all projects',
      tileHiganLabel:'higan studio', tileHiganH:'Our own studio, reimagined', tileHigan:'Brand, web development and motion design for our own studio — executed without compromise.',
      tileCircuitLabel:'circuit', tileCircuitH:'Automation at scale', tileCircuit:'Platform interface, design system and full-stack build of an automation suite.',
      tileDocklysLabel:'docklys', tileDocklysH:'Laptop meets phone', tileDocklys:'Concept, design and responsive development of a web app across laptop and mobile.',
      offerTitle:'What we offer', offerSub:'Five disciplines, one system.',
      workflowTitle:'Client Workflow', workflowHead:'From discovery to scale.',
      buildTitle:'How we build', buildHead:'Thought in modules, built piece by piece.', scrollAssemble:'SCROLL — BLOCKS FALL',
      blk1t:'The Foundation', blk1d:'Scrap your overpriced "enterprise" systems. We build on open-source technologies and evaluate the right foundation and tech stack for every project.',
      blk2t:'Custom Integration', blk2d:'Tailored interfaces that slot cleanly into your existing landscape — dock on the left, scale on the right.',
      blkMt:'The Momentum', blkMd:'AI workflows, automation and modular architecture that grow with your product.',
      blk3t:'Aesthetic Dominance', blk3d:'Structured motion design, aesthetic innovation and a design language that stays with you and towers above the rest.',
      mission:'Our Mission', missionD:'Build digital products that feel the way they look: precise, alive, uncompromising.', vision:'Our Vision', visionD:'Raise the default bar for digital craft.',
      contactSub:'Tell us about your project — or book a slot directly. We reply within 24 hours.',
      footBlurb:'Digital studio for aesthetic, performant and scalable products.', guides:'Free Guides', getInTouch:'Contact', guide1:'Build Something You Actually Own', guide2:'Keep Your Stack Flexible', guide3:'Make Your Brand Feel Premium',
      wf:[{num:'01',title:'Discovery',desc:'We understand your product, your users and your goals.'},{num:'02',title:'Delivery',desc:'Design and engineering in tight, visible iterations.'},{num:'03',title:'Scale',desc:'We grow with you — maintenance, automation and new modules.'}],
      posts:[{tag:'ESSAY',title:'Why "enterprise" software is usually a mistake',date:'JUN 2026'},{tag:'GUIDE',title:'The right tech stack for 2026',date:'MAY 2026'},{tag:'NOTES',title:'Motion design as a conversion tool',date:'APR 2026'}] }
  };

  wordSets = {
    home:{ prefix:{de:'Wir entwickeln',en:'We develop'}, words:{de:['ästhetisch','performant','innovativ','skalierbar','kompromisslos'],en:['aesthetic','performant','innovative','scalable','uncompromising']} },
    services:{ prefix:{de:'Wir bauen',en:'We build'}, words:{de:['strukturiert','messbar','automatisiert','skalierbar','präzise'],en:['structured','measurable','automated','scalable','precise']} },
    about:{ prefix:{de:'Wir denken',en:'We think'}, words:{de:['menschlich','neugierig','ehrlich','konsequent','langfristig'],en:['human','curious','honest','consistent','long-term']} },
    projects:{ prefix:{de:'Wir liefern',en:'We deliver'}, words:{de:['poliert','mutig','präzise','wirkungsvoll','termingerecht'],en:['polished','bold','precise','impactful','on-time']} },
    contact:{ prefix:{de:'Lass uns',en:"Let's be"}, words:{de:['verbunden','sichtbar','erreichbar','bereit'],en:['connected','visible','reachable','ready']} },
    guide:{ prefix:{de:'Wir teilen',en:'We share'}, words:{de:['Wissen','Strategien','Taktiken','Architektur','Code'],en:['knowledge','strategies','tactics','architecture','code']} }
  };

  componentDidMount(){
    // This renderer does not reliably supply previous state to componentDidUpdate.
    this._prevRoute=this.state.route;
    this.startTyping();
    this.initPetals();
    this._onScroll = ()=>{ if(this._st) return; this._st=requestAnimationFrame(()=>{ this._st=null; this.onScroll(); }); };
    addEventListener('scroll', this._onScroll, {passive:true});
    addEventListener('resize', this._onScroll, {passive:true});
    this._onScrollIntent=()=>this.cancelScrollPrompt();
    addEventListener('wheel', this._onScrollIntent, {passive:true});
    addEventListener('touchstart', this._onScrollIntent, {passive:true});
    this.mountSlots();
    this.onScroll();
    this.startScrollPrompt(180);
    this._scrollPromptTimer=setInterval(()=>this.startScrollPrompt(),8000);
  }
  componentWillUnmount(){ removeEventListener('scroll',this._onScroll); removeEventListener('wheel',this._onScrollIntent); removeEventListener('touchstart',this._onScrollIntent); cancelAnimationFrame(this._raf); cancelAnimationFrame(this._fallRaf); this.cancelScrollPrompt(); clearInterval(this._scrollPromptTimer); }
  slotSig(){ return [this.state.route,this.state.lang,this.state.selectedDay,this.state.selectedTime,this.state.monthOffset].join('|'); }
  componentDidUpdate(){
    const routeChanged = this._prevRoute!==this.state.route;
    this._prevRoute=this.state.route;
    if(routeChanged){ this.setState({typed:'',wordIdx:0}); requestAnimationFrame(()=>{ window.scrollTo(0,0); this._sig=null; this.mountSlots(); this.onScroll(); this.startScrollPrompt(120); setTimeout(()=>{ this._sig=null; this.mountSlots(); },90); }); return; }
    // only rebuild injected slots when their inputs actually changed — never on typing ticks
    if(this.slotSig()!==this._sig){ requestAnimationFrame(()=>this.mountSlots()); }
    // re-sync nav position/visibility on every render (not just real scroll events) — otherwise
    // the frequent typing-animation re-renders reset the nav's inline style and it glitches
    this.syncNav();
  }
  observeAll(){ this.revealScan(); }
  revealScan(){ const vh=innerHeight; document.querySelectorAll('.hg-reveal:not(.hg-in),.hg-flow:not(.hg-in)').forEach(el=>{ if(el.getBoundingClientRect().top < vh*0.9) el.classList.add('hg-in'); }); }

  onScroll(){
    this.revealScan();
    this.syncNav();
    this.syncScrollCue();
    // Tetris drop — autoplayed once via startBlockFall(), triggered from this scroll handler
    // (IntersectionObserver is unreliable in this preview environment)
    if(this._fall && !this._blocksPlayed){
      const vh=innerHeight, r=this._fall.getBoundingClientRect();
      const visible=Math.min(r.bottom,vh)-Math.max(r.top,0);
      const ratio=Math.max(0,visible)/r.height;
      if(ratio>=0.85) this.startBlockFall();
    }
  }

  isAtTop(){ return (window.scrollY||document.documentElement.scrollTop||0)<=2; }
  syncScrollCue(){
    if(this._scrollCue) this._scrollCue.classList.toggle('hg-visible',this._cueNudging||this.isAtTop());
  }
  startScrollPrompt(delay=0){
    clearTimeout(this._scrollPromptDelay);
    this._scrollPromptDelay=setTimeout(()=>this.nudgeScrollPrompt(),delay);
  }
  nudgeScrollPrompt(){
    if(document.hidden||this._cueNudging||!this.isAtTop()||matchMedia('(prefers-reduced-motion: reduce)').matches){ this.syncScrollCue(); return; }
    this._cueNudging=true;
    this.syncScrollCue();
    // Smooth, symmetric peek: ease down far enough to reveal a slice of the
    // next section's text, dwell so it's readable, then ease back — all with
    // the same easeInOutCubic curve so down and up mirror each other.
    const start=performance.now();
    const distance=Math.min(170,Math.round(innerHeight*0.22));
    // one clean pop (~2.3s of motion) then a clear ~2.7s pause, so the 5s
    // interval reads as a distinct beat rather than near-constant scrolling
    const down=800, hold=600, up=900, total=down+hold+up;
    const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
    const frame=now=>{
      const el=now-start; let y;
      if(el<down) y=ease(el/down)*distance;
      else if(el<down+hold) y=distance;
      else if(el<total) y=distance*(1-ease((el-down-hold)/up));
      else { window.scrollTo(0,0); this._cueNudging=false; this.syncScrollCue(); return; }
      window.scrollTo(0,y);
      this._scrollPromptRaf=requestAnimationFrame(frame);
    };
    this._scrollPromptRaf=requestAnimationFrame(frame);
  }
  cancelScrollPrompt(){
    clearTimeout(this._scrollPromptDelay);
    cancelAnimationFrame(this._scrollPromptRaf);
    if(this._cueNudging) window.scrollTo(0,0);
    this._cueNudging=false;
    this.syncScrollCue();
  }

  // Nav docking is re-applied here AND from componentDidUpdate — the typing animation calls
  // setState every ~40-120ms, and each re-render resets the nav's inline style back to its
  // static template value, which without this second call-site caused a visible glitch/flicker
  // in the docked position every single typing tick (not just on real scroll events).
  syncNav(){
    const nav=this._nav, footer=this._footer;
    if(!nav||!footer||this._navForceHidden) return;
    const vh=innerHeight, fr=footer.getBoundingClientRect();
    const navH=nav.offsetHeight, bottomGap=24;
    const rawShift=Math.max(0,(vh-bottomGap)-(fr.top-16));
    const shift=Math.round(rawShift); // whole pixels only — kills sub-pixel shimmer while docking
    if(fr.top - 16 <= vh - bottomGap) {
      nav.style.position = 'absolute';
      nav.style.bottom = (footer.offsetHeight + 16) + 'px';
      nav.style.transform = 'translateX(-50%)';
    } else {
      nav.style.position = 'fixed';
      nav.style.bottom = bottomGap + 'px';
      nav.style.transform = 'translateX(-50%)';
    }
    const wasHidden=!!this._navHidden;
    const hideAt = navH+bottomGap+10, showAt = navH+bottomGap+90; // wide hysteresis band, no flicker at the boundary
    const hide = wasHidden ? (fr.top < showAt) : (fr.top < hideAt);
    this._navHidden = hide;
    if(hide !== wasHidden || this._navHideInit!==true){
      this._navHideInit=true;
      nav.style.opacity = hide ? '0' : '1';
      nav.style.visibility = hide ? 'hidden' : 'visible';
    }
  }

  // Blocks fall on their own timeline once the section is reached. Scroll is gently held
  // (wheel/touch/keys intercepted) only while they're falling, then released automatically.
  startBlockFall(){
    if(this._blocksPlayed) return;
    this._blocksPlayed = true;
    const wrap=this._fall; if(!wrap) return;
    // nav stays visible throughout — the falling-blocks section already sits at a higher
    // z-index (41) than the nav (39), so the Fundament block simply drops down and renders
    // on top of it, no hiding needed
    const blocks=[...wrap.querySelectorAll('.hg-block')].sort((a,b)=>(+a.dataset.order||0)-(+b.dataset.order||0));
    const n=blocks.length; if(!n) return;
    const perBlock=750, gap=520;
    const totalMs=(n-1)*gap+perBlock+300;
    const start=performance.now();
    const fyValue = -window.innerHeight;
    const frame=()=>{
      const now=performance.now()-start;
      blocks.forEach(b=>{
        const i=+b.dataset.order||0, t0=i*gap;
        const local=Math.max(0,Math.min(1,(now-t0)/perBlock));
        const e=1-Math.pow(1-local,3.4);
        const fy=fyValue, rot=+b.dataset.rot||0;
        b.style.transform='translateY('+((1-e)*fy).toFixed(1)+'px) rotate('+((1-e)*rot).toFixed(2)+'deg)';
        b.style.opacity = local<=0 ? '0' : Math.min(1,local*3).toFixed(3);
      });
      if(now<totalMs){ this._fallRaf=requestAnimationFrame(frame); }
    };
    frame();
  }
  startTyping(){
    const tick=()=>{
      const set=this.wordSets[this.state.route]||this.wordSets.home;
      const w=set.words[this.state.lang][this.state.wordIdx%set.words[this.state.lang].length];
      const cur=this.state.typed;
      if(this._del){
        if(cur.length===0){ this._del=false; this.setState(s=>({wordIdx:s.wordIdx+1})); this._timer=setTimeout(tick,120); }
        else { this.setState({typed:cur.slice(0,-1)}); this._timer=setTimeout(tick,36); }
      } else {
        if(cur.length===w.length){ this._timer=setTimeout(()=>{ this._del=true; tick(); },1150); }
        else { this.setState({typed:w.slice(0,cur.length+1)}); this._timer=setTimeout(tick,74); }
      }
    };
    this._timer=setTimeout(tick,400);
  }

  initPetals(){
    const cv=this._petal; if(!cv) return;
    const ctx=cv.getContext('2d');
    let w,h,dpr;
    const resize=()=>{ dpr=Math.min(devicePixelRatio||1,2); w=cv.width=innerWidth*dpr; h=cv.height=innerHeight*dpr; };
    resize(); addEventListener('resize',resize);
    const mouse={x:-9999,y:-9999,t:-9999,vx:0,vy:0};
    addEventListener('pointermove',e=>{
      const rawX=e.clientX*dpr, rawY=e.clientY*dpr;
      const dx=rawX-mouse.x, dy=rawY-mouse.y;
      mouse.vx = mouse.vx*0.7 + dx*0.3; mouse.vy = mouse.vy*0.7 + dy*0.3;
      mouse.x=rawX; mouse.y=rawY; mouse.t=performance.now();
    });
    const N=20, P=[];
    for(let i=0;i<N;i++){ P.push({
      x:Math.random()*w*0.6, y:Math.random()*h*1.5-h*0.5,
      s:14+Math.random()*13, vx:0.15+Math.random()*0.25, vy:0.3+Math.random()*0.3,
      rot:Math.random()*6.28, spin:(Math.random()-.5)*0.007,
      flut:Math.random()*6.28, flutSpd:0.012+Math.random()*0.018, phase:Math.random()*6.28,
      tint:Math.random()*0.12,
      kind:Math.random()<0.78?'petal':'stem', curl:Math.random()<0.5?-1:1,
      dark:0, darkRate:0.02+Math.random()*0.035,
      len:0.85+Math.random()*0.45, bend:0.55+Math.random()*1.15, wid:0.55+Math.random()*0.35,
      waveAmp:0.55+Math.random()*1.1, waveFreq:4+Math.floor(Math.random()*4), tipCurl:Math.pow(Math.random(),1.5)*1.15
    }); }
    const petal=(ctx,s,tint,dark,kind,curl,shp)=>{
      shp=shp||{len:1,bend:1,wid:1,waveAmp:1,waveFreq:6,tipCurl:0};
      const g=ctx.createLinearGradient(0,-s,0,s*0.4);
      let stroke, fillDim;
      if(dark){
        g.addColorStop(0,'rgba(6,6,8,0.92)');
        g.addColorStop(0.55,'rgba(22,20,26,0.95)');
        g.addColorStop(1,'rgba(2,2,4,0.5)');
        stroke='rgba(255,255,255,0.22)'; fillDim='rgba(15,14,17,0.9)';
      } else {
        g.addColorStop(0,'rgba(255,'+(255-tint*40)+','+(255-tint*30)+',0.92)');
        g.addColorStop(0.55,'rgba(255,'+(252-tint*30)+','+(253-tint*20)+',0.97)');
        g.addColorStop(1,'rgba(240,'+(232-tint*30)+','+(240-tint*20)+',0.45)');
        stroke='rgba(210,190,215,0.45)'; fillDim='rgba(255,255,255,0.85)';
      }
      if(kind==='stem'){
        // spider-lily stamen: a long sweeping filament, gently wavy and organic
        const {len, bend, waveAmp} = shp;
        const baseL = s * 0.95 * len; // slightly shorter overall length
        
        const p0 = [0, baseL];
        const p1 = [curl * s * 0.25 * bend, s * 0.2];
        const p2 = [curl * s * 0.6 * bend, -s * 0.5 * len];
        const p3 = [curl * s * 0.4 * bend, -s * 1.15 * len];
        
        const bez=(p0,p1,p2,p3,tt)=>{ const m=1-tt,a=m*m*m,b=3*m*m*tt,c=3*m*tt*tt,d=tt*tt*tt;
          return [a*p0[0]+b*p1[0]+c*p2[0]+d*p3[0], a*p0[1]+b*p1[1]+c*p2[1]+d*p3[1]]; };
          
        const Ns = 20; 
        const spinePts = [];
        for(let i=0; i<=Ns; i++) {
          const tt = i / Ns;
          const [bx, by] = bez(p0, p1, p2, p3, tt);
          
          let nx = 1, ny = 0;
          if (tt > 0.01 && tt < 0.99) {
             const prev = bez(p0,p1,p2,p3,tt - 0.01);
             const dx = bx - prev[0], dy = by - prev[1];
             const dl = Math.hypot(dx, dy) || 1;
             nx = -(dy/dl); ny = dx/dl;
          }
          // gentle organic waviness - much reduced (only 1 or 2 bends, tiny amplitude)
          const env = Math.sin(tt * Math.PI); 
          const ripple = Math.sin(tt * Math.PI * 2.5) * s * 0.015 * waveAmp * env;
          spinePts.push([bx + nx * ripple, by + ny * ripple]);
        }
        
        // Draw the main filament (stamen)
        ctx.strokeStyle = fillDim;
        ctx.lineWidth = Math.max(0.5, s * 0.03); // made a bit thinner overall
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(spinePts[0][0], spinePts[0][1]);
        for(let i=1; i<=Ns; i++) ctx.lineTo(spinePts[i][0], spinePts[i][1]);
        ctx.stroke();
        
        // Add subtle highlight line for realism
        ctx.strokeStyle = stroke;
        ctx.lineWidth = Math.max(0.2, s * 0.01);
        ctx.beginPath();
        ctx.moveTo(spinePts[0][0], spinePts[0][1]);
        for(let i=1; i<=Ns; i++) ctx.lineTo(spinePts[i][0], spinePts[i][1]);
        ctx.stroke();

        // The anther (dot on top) - angled, organic, pill-like
        const lp = spinePts[Ns], pp = spinePts[Ns-1];
        const angle = Math.atan2(lp[1] - pp[1], lp[0] - pp[0]) + Math.PI/2;
        
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.save();
        ctx.translate(lp[0], lp[1]);
        ctx.rotate(angle);
        // anther shape: much smaller dot
        ctx.ellipse(0, -s*0.03, s*0.05, s*0.09, 0, 0, Math.PI*2);
        ctx.fill();
        ctx.strokeStyle = stroke;
        ctx.lineWidth = 0.5;
        ctx.stroke();
        ctx.restore();
        
        return;
      }
      // spider-lily petal: clean slender curved blade built from a single spine + tapering
      // half-width, so the outline always closes cleanly (no crossing/lumpy segments)
      const {len,bend,wid,waveAmp,waveFreq,tipCurl=0}=shp;
      const bez=(p0,p1,p2,p3,tt)=>{ const m=1-tt,a=m*m*m,b=3*m*m*tt,c=3*m*tt*tt,d=tt*tt*tt;
        return [a*p0[0]+b*p1[0]+c*p2[0]+d*p3[0], a*p0[1]+b*p1[1]+c*p2[1]+d*p3[1]]; };
      const p0=[0,s*len], p1=[curl*s*0.28*bend,s*len*0.35], p2=[curl*s*0.5*bend,-s*len*0.5], p3=[curl*s*0.22*bend,-s*len*1.08];
      // Curl the tip as a SMOOTH arc: walk the base spine and rotate each successive step by a
      // gently-accumulating angle in the tip zone (integrated curvature) — a crook, never an L-kink.
      const NpC=28, SP=[]; {
        const base=[]; for(let i=0;i<=NpC;i++) base.push(bez(p0,p1,p2,p3,i/NpC));
        SP.push(base[0].slice()); let ang=0;
        for(let i=1;i<=NpC;i++){
          const tt=i/NpC;
          let dx=base[i][0]-base[i-1][0], dy=base[i][1]-base[i-1][1];
          const tipT=Math.max(0,(tt-0.5)/0.5);
          ang += -curl*Math.pow(tipT,1.7)*tipCurl*0.55;   // radians added per step, ramps toward tip
          const ca=Math.cos(ang), sa=Math.sin(ang);
          SP.push([SP[i-1][0]+dx*ca-dy*sa, SP[i-1][1]+dx*sa+dy*ca]);
        }
      }
      const spine=tt=>{
        const f=Math.min(Math.max(tt,0),1)*NpC, i=Math.floor(f), fr=f-i;
        if(i>=NpC) return SP[NpC];
        const a=SP[i], b=SP[i+1]; return [a[0]+(b[0]-a[0])*fr, a[1]+(b[1]-a[1])*fr];
      };
      const hwMax=s*0.3*wid;
      const halfW=tt=>{
        let hv=hwMax*Math.pow(Math.sin(Math.PI*Math.min(Math.max(tt,0.02),0.99)),0.62);
        if(tt>0.82) hv*=1-((tt-0.82)/0.18)*0.85; // taper to a fine tip
        if(tt<0.12) hv*=0.55+(tt/0.12)*0.45;     // narrower rounded base
        return Math.max(hv,s*0.012);
      };
      const Np=26, pts=[];
      for(let i=0;i<=Np;i++){
        const tt=i/Np, [x,y]=spine(tt);
        const [xa,ya]=spine(Math.max(0,tt-0.01)), [xb,yb]=spine(Math.min(1,tt+0.01));
        let nx=-(yb-ya), ny=(xb-xa); const nl=Math.hypot(nx,ny)||1; nx/=nl; ny/=nl;
        const env=Math.sin(tt*Math.PI);
        const ripple=Math.sin(tt*waveFreq*Math.PI*2)*hwMax*0.14*waveAmp*env;
        pts.push([x,y,nx,ny,halfW(tt)+ripple]);
      }
      ctx.fillStyle=g;
      ctx.beginPath();
      for(let i=0;i<=Np;i++){ const [x,y,nx,ny,hw]=pts[i]; const px=x+nx*hw,py=y+ny*hw; if(i===0)ctx.moveTo(px,py); else ctx.lineTo(px,py); }
      for(let i=Np;i>=0;i--){ const [x,y,nx,ny,hw]=pts[i]; ctx.lineTo(x-nx*hw,y-ny*hw); }
      ctx.closePath(); ctx.fill();
      ctx.strokeStyle=stroke; ctx.lineWidth=0.6;
      ctx.stroke();
      // subtle volume: one soft highlight running down the spine so the blade reads as gently folded
      ctx.save();
      ctx.globalCompositeOperation='overlay';
      ctx.beginPath();
      for(let i=1;i<Np;i++){ const [x,y]=pts[i]; if(i===1)ctx.moveTo(x,y); else ctx.lineTo(x,y); }
      ctx.strokeStyle='rgba(255,255,255,0.4)';
      ctx.lineWidth=Math.max(1,s*0.14*wid);
      ctx.lineCap='round';
      ctx.stroke();
      ctx.restore();
    };
    // periodically rescan DOM for the nearest visible Discovery-Call button + light/dark zones (cheap, throttled).
    // Dark elements (e.g. black buttons sitting inside a light card) are scanned AFTER light ones and
    // take priority, so a petal passing over a black button on a white card correctly turns light, not dark.
    let ctaTarget=null, lightRects=[], darkRects=[];
    const rescan=()=>{
      const btns=[...document.querySelectorAll('.hg-cta')];
      let best=null,bestD=Infinity;
      const cx=w/(2*dpr),cy=h/(2*dpr);
      for(const b of btns){
        const r=b.getBoundingClientRect();
        if(r.bottom<0||r.top>innerHeight||r.width===0) continue;
        const bx=r.left+r.width/2, by=r.top+r.height/2;
        const d=Math.hypot(bx-cx,by-cy);
        if(d<bestD){ bestD=d; best={x:bx,y:by,w:r.width,h:r.height}; }
      }
      ctaTarget=best;
      lightRects=[...document.querySelectorAll('[data-hg-light]')].map(el=>el.getBoundingClientRect()).filter(r=>r.bottom>=-40&&r.top<=innerHeight+40&&r.width>0);
      darkRects=[...document.querySelectorAll('[data-hg-dark]')].map(el=>el.getBoundingClientRect()).filter(r=>r.bottom>=-40&&r.top<=innerHeight+40&&r.width>0);
    };
    rescan();
    setInterval(rescan,400);
    // smooth, feathered "am I over a light area" test — no hard mask, no per-frame canvas compositing
    const FEATHER=26;
    const darkTargetAt=(px,py)=>{
      // dark (black) elements win outright — a petal directly over one must go light/white,
      // even if that element sits nested inside a larger light card
      for(const r of darkRects){
        if(px>=r.left-4&&px<=r.right+4&&py>=r.top-4&&py<=r.bottom+4) return 0;
      }
      let best=0;
      for(const r of lightRects){
        const dx=Math.max(r.left-px,0,px-r.right), dy=Math.max(r.top-py,0,py-r.bottom);
        const dist=Math.hypot(dx,dy);
        const v=dist<=0?1:Math.max(0,1-dist/FEATHER);
        if(v>best) best=v;
      }
      return best;
    };
    let t=0;
    const draw=()=>{
      t++; ctx.clearRect(0,0,w,h);
      const windX=Math.sin(t*0.0006)*0.55+Math.sin(t*0.00021+2.1)*0.3;
      const windY=0.5+Math.sin(t*0.00037+1.3)*0.2;
      const since=performance.now()-mouse.t;
      for(const p of P){
        const turb=Math.sin(t*0.0022+p.phase)*0.4;
        // simulated air drag: any excess speed (from gusts) bleeds off every frame, realistically
        p.vx*=0.965; p.vy*=0.965;
        p.vx+=((windX+turb)-p.vx)*0.02;
        p.vy+=(windY-p.vy)*0.02;
        if(since<1400){
          const dx=p.x-mouse.x,dy=p.y-mouse.y,dist=Math.hypot(dx,dy)||1,rad=185*dpr;
          if(dist<rad){
            const f=1-dist/rad; const tx=-dy/dist,ty=dx/dist;
            const speed=Math.hypot(mouse.vx,mouse.vy);
            const gust=0.22+Math.min(speed*0.16,4.2); // the faster the mouse moves, the more intense the push
            p.vx+=tx*f*gust*0.075; p.vy+=ty*f*gust*0.05+dy/dist*f*0.013;
          }
        }
        if(ctaTarget){
          // subtle steering only — no homing/orbiting, petals should still fall naturally,
          // just happen to drift past the button's column more often
          const targetX=ctaTarget.x*dpr;
          const yDist=Math.abs(ctaTarget.y*dpr-p.y);
          const influence=Math.max(0,1-yDist/(520*dpr));
          if(influence>0){
            const dx=targetX-p.x;
            p.vx+=Math.sign(dx)*Math.min(Math.abs(dx)/(340*dpr),1)*influence*0.018;
          }
        }
        p.x+=p.vx*dpr; p.y+=p.vy*dpr; p.rot+=p.spin+p.vx*0.008; p.flut+=p.flutSpd;
        if(p.y>h+40){ p.y=-40-Math.random()*80; p.x=Math.random()*w*0.55-40; }
        if(p.x>w+40) p.x=-40; if(p.x<-60) p.x=w+30;
        const fl=Math.cos(p.flut); // gentle flutter — stays broadside, no dramatic edge-on flip
        const scaleX=0.7+0.3*Math.abs(fl);
        // smoothly fade toward light/dark based on what's behind the petal right now — each
        // particle eases at its own slightly different rate, so they never all flip together
        const target=darkTargetAt(p.x/dpr,p.y/dpr);
        p.dark += (target-p.dark)*p.darkRate;
        // base pass: the light/white petal, always drawn
        ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot); ctx.scale(scaleX,1);
        ctx.shadowColor='rgba(0,0,0,0.25)'; ctx.shadowBlur=4*dpr; ctx.shadowOffsetY=2*dpr;
        petal(ctx,p.s*dpr,p.tint,false,p.kind,p.curl,p);
        ctx.restore();
        // dark pass blended in on top at partial alpha — a soft cross-fade, not a hard swap
        if(p.dark>0.01){
          ctx.save(); ctx.globalAlpha=Math.min(1,p.dark);
          ctx.translate(p.x,p.y); ctx.rotate(p.rot); ctx.scale(scaleX,1);
          ctx.shadowColor='rgba(0,0,0,0.18)'; ctx.shadowBlur=3*dpr; ctx.shadowOffsetY=1.5*dpr;
          petal(ctx,p.s*dpr,p.tint,true,p.kind,p.curl,p);
          ctx.restore();
        }
      }
      this._raf=requestAnimationFrame(draw);
    };
    draw();
  }

  // ---------- device mockups (raw HTML strings) ----------
  laptop(slotId, big){
    const ar=big?'16/10':'16/10';
    return '<div class="hg-device" style="width:100%;max-width:'+(big?'100%':'78%')+';margin-left:auto">'
      +'<div style="background:#111114;border-radius:11px 11px 3px 3px;padding:9px 9px 10px;box-shadow:0 20px 40px rgba(0,0,0,.28)">'
      +'<div style="border-radius:5px;overflow:hidden;background:#fff;aspect-ratio:'+ar+'"><image-slot id="'+slotId+'" shape="rect" placeholder="Screenshot hier ablegen"></image-slot></div></div>'
      +'<div style="height:9px;background:linear-gradient(#d4d4d8,#a8a8b0);border-radius:0 0 8px 8px;width:118%;margin-left:-9%;position:relative">'
      +'<div style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:70px;height:4px;background:rgba(0,0,0,.18);border-radius:0 0 6px 6px"></div></div></div>';
  }
  // browser chrome matching the reference exactly: dark toolbar with traffic-light dots,
  // a small logo badge + center nav labels, right-side icon cluster, then a blank screenshot area
  browser(slotId,label,accent,big){
    const navItems=['Work','About','Services','Contact'];
    return '<div class="hg-device" style="width:100%;border-radius:'+(big?'12px':'10px')+';overflow:hidden;background:#fff;box-shadow:0 20px 44px rgba(0,0,0,.26)">'
      +'<div style="display:flex;align-items:center;gap:14px;padding:'+(big?'11px 16px':'9px 13px')+';background:#181a20">'
        +'<div style="display:flex;gap:5px;flex-shrink:0"><span style="width:7px;height:7px;border-radius:50%;background:#4a4c56"></span><span style="width:7px;height:7px;border-radius:50%;background:#4a4c56"></span><span style="width:7px;height:7px;border-radius:50%;background:#4a4c56"></span></div>'
        +'<div style="display:flex;align-items:center;gap:6px;flex-shrink:0"><span style="width:16px;height:16px;border-radius:4px;background:'+accent+';display:inline-flex;align-items:center;justify-content:center;font-family:\'Space Mono\',monospace;font-size:8px;color:#fff;font-weight:700">'+label.charAt(0)+'</span><span style="font-family:\'Space Mono\',monospace;font-size:9.5px;color:#e8e8ec;letter-spacing:.04em">'+label+'</span></div>'
        +'<div style="display:flex;gap:14px;flex:1;justify-content:center">'+navItems.map(n=>'<span style="font-size:9px;color:#8b8d97;font-family:\'Space Mono\',monospace;letter-spacing:.04em">'+n+'</span>').join('')+'</div>'
        +'<div style="display:flex;gap:9px;flex-shrink:0;align-items:center">'
          +'<svg width="11" height="11" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="#8b8d97" stroke-width="1.3"></circle><line x1="10.8" y1="10.8" x2="14" y2="14" stroke="#8b8d97" stroke-width="1.3" stroke-linecap="round"></line></svg>'
          +'<svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M8 2c-2 0-3.3 1.5-3.3 3.6v2.3L3.4 10.8h9.2L11.3 7.9V5.6C11.3 3.5 10 2 8 2z" stroke="#8b8d97" stroke-width="1.2" stroke-linejoin="round"></path><path d="M6.4 12.5a1.6 1.6 0 0 0 3.2 0" stroke="#8b8d97" stroke-width="1.2"></path></svg>'
          +'<span style="width:15px;height:15px;border-radius:50%;background:#3a3c46"></span>'
        +'</div></div>'
      +'<div style="aspect-ratio:'+(big?'16/11':'16/10')+'"><image-slot id="'+slotId+'" shape="rect" placeholder="Screenshot hier ablegen"></image-slot></div></div>';
  }
  phone(slotId,small){
    return '<div class="hg-device" style="width:'+(small?'100%':'30%')+';flex-shrink:0;border-radius:'+(small?'13px':'16px')+';background:#111114;padding:'+(small?'4px':'5px')+';box-shadow:0 18px 36px rgba(0,0,0,.3)">'
      +'<div style="border-radius:'+(small?'9px':'11px')+';overflow:hidden;background:#fff;aspect-ratio:9/19"><image-slot id="'+slotId+'" shape="rect" placeholder="Screenshot"></image-slot></div></div>';
  }

  mountSlots(){
    const t=this.T[this.state.lang];
    // project tiles markup
    const tile=(label,head,name,desc,deviceHTML,bg,accent)=>
      '<div class="hg-tile hg-reveal" style="display:flex;flex-direction:column;gap:18px">'
      +'<div style="position:relative;border-radius:22px;padding:28px 26px;aspect-ratio:16/10;overflow:hidden;display:flex;align-items:center;gap:18px;background:'+bg+'" data-hg-light="1">'
      +'<div style="flex:0 0 42%;z-index:1">'
      +'<p style="font-family:\'Space Mono\',monospace;font-size:11px;letter-spacing:.08em;color:'+accent+';opacity:.85;margin:0 0 10px">'+label+'</p>'
      +'<h3 style="font-family:\'Cormorant Garamond\',serif;font-weight:600;font-size:22px;line-height:1.18;color:'+accent+';margin:0">'+head+'</h3></div>'
      +'<div style="flex:1;display:flex;justify-content:flex-end">'+deviceHTML+'</div></div>'
      +'<div><h4 style="font-family:\'Space Mono\',monospace;font-weight:700;font-size:17px;margin:0 0 8px;text-decoration:underline;text-underline-offset:4px;cursor:pointer">'+name+'</h4>'
      +'<p style="opacity:.55;font-weight:300;font-size:14px;line-height:1.6;margin:0">'+desc+'</p></div></div>';
    const tilesHTML='<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:26px">'
      +tile(t.tileHiganLabel,t.tileHiganH,'Higan Studio',t.tileHigan,this.browser('proj-higan-screen','higan.studio','#5a3a86'),'linear-gradient(160deg,#efe7fb,#ddccf5)','#5a3a86')
      +tile(t.tileCircuitLabel,t.tileCircuitH,'Circuit',t.tileCircuit,this.browser('proj-circuit-screen','circuit.io','#2a2a33',true),'linear-gradient(160deg,#ececef,#dcdce1)','#2a2a33')
      +tile(t.tileDocklysLabel,t.tileDocklysH,'Docklys',t.tileDocklys,'<div style="position:relative;width:78%"><div style="width:100%">'+this.laptop('proj-dockly-laptop',false)+'</div><div style="position:absolute;bottom:-14%;right:-22%;width:38%">'+this.phone('proj-dockly-phone',true)+'</div></div>','linear-gradient(160deg,#dfeafb,#c7d8f7)','#1b263f')
      +'</div>';
    // tiles only depend on lang — inject once per (route mount, lang); never on calendar clicks
    const tileSig=this.state.route+'|'+this.state.lang;
    if(this._tiles && this._tiles.__sig!==tileSig){ this._tiles.innerHTML=tilesHTML; this._tiles.__sig=tileSig; }

    // booking calendar — rebuild only when calendar state changes
    const bookingHTML=this.bookingMarkup(t);
    if(this._booking){ this._booking.innerHTML=bookingHTML.wrap; this.wireBooking(this._booking); }
    if(this._booking2){ this._booking2.innerHTML=bookingHTML.wrap; this.wireBooking(this._booking2); }

    this._sig=this.slotSig();
    this.observeAll();
  }

  monthData(){
    const lang=this.state.lang;
    const monthNames=lang==='de'?['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember']:['January','February','March','April','May','June','July','August','September','October','November','December'];
    const today=new Date(), base=new Date(today.getFullYear(),today.getMonth()+this.state.monthOffset,1);
    const y=base.getFullYear(),m=base.getMonth();
    const firstDow=(new Date(y,m,1).getDay()+6)%7, dim=new Date(y,m+1,0).getDate();
    return {monthNames,y,m,firstDow,dim,today,label:monthNames[m]+' '+y};
  }
  bookingMarkup(t){
    const md=this.monthData();
    const weekdays=this.state.lang==='de'?['Mo','Di','Mi','Do','Fr','Sa','So']:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    let cells='';
    for(let i=0;i<md.firstDow;i++) cells+='<button class="hg-day" style="visibility:hidden"></button>';
    for(let d=1;d<=md.dim;d++){
      const dow=new Date(md.y,md.m,d).getDay();
      const past=this.state.monthOffset===0 && d<md.today.getDate();
      const we=dow===0||dow===6, dis=past||we, key=md.y+'-'+md.m+'-'+d, sel=this.state.selectedDay===key;
      cells+='<button class="hg-day" data-day="'+(dis?'':key)+'" '+(dis?'disabled':'')+' style="cursor:'+(dis?'default':'pointer')+';background:'+(sel?'#7c5aa6':'transparent')+';color:'+(sel?'#fff':(dis?'rgba(21,19,26,.25)':'#15131a'))+';font-weight:'+(sel?'600':'400')+'">'+d+'</button>';
    }
    const wd=weekdays.map(x=>'<span style="text-align:center;font-size:10.5px;opacity:.42;padding:6px 0">'+x+'</span>').join('');
    let slotsHTML='';
    if(this.state.selectedDay){
      slotsHTML='<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:16px">'+['09:00','11:00','14:00','16:30'].map(s=>{
        const a=this.state.selectedTime===s;
        return '<button data-slot="'+s+'" style="padding:9px 15px;border-radius:999px;font:inherit;font-size:13px;cursor:pointer;border:1px solid '+(a?'#7c5aa6':'rgba(21,19,26,.16)')+';background:'+(a?'#7c5aa6':'transparent')+';color:'+(a?'#fff':'#15131a')+'">'+s+'</button>';
      }).join('')+'</div>';
    }
    const dayNum=this.state.selectedDay?this.state.selectedDay.split('-')[2]:'';
    const chosen=(this.state.selectedDay&&this.state.selectedTime)?((this.state.lang==='de'?'Ausgewählt: ':'Selected: ')+dayNum+'. '+md.label.split(' ')[0]+' · '+this.state.selectedTime):(this.state.selectedDay?(this.state.lang==='de'?'Wähle eine Uhrzeit':'Pick a time'):(this.state.lang==='de'?'Wähle ein Datum':'Pick a date'));
    const wrap='<section style="max-width:1020px;margin:0 auto;padding:clamp(20px,4vh,40px) 32px clamp(10px,2vh,20px);text-align:center">'
      +'<h2 style="font-family:\'Cormorant Garamond\',serif;font-weight:500;font-size:clamp(24px,3.6vh,50px);margin:0 0 clamp(8px,1.4vh,14px)">'+t.ready+'</h2>'
      +'<p style="opacity:.6;font-size:clamp(13px,1.6vh,15.5px);line-height:1.6;font-weight:300;max-width:46ch;margin:0 auto clamp(18px,3.4vh,40px)">'+t.readySub+'</p>'
      +'<div style="text-align:left;background:#fdfdfd;color:#15131a;border-radius:24px;overflow:hidden;display:grid;grid-template-columns:1fr 1.15fr;box-shadow:0 30px 90px rgba(0,0,0,.55)" data-hg-light="1">'
      +'<div style="padding:clamp(18px,3.4vh,40px);display:flex;flex-direction:column;border-right:1px solid rgba(0,0,0,.08)">'
      +'<div style="width:clamp(38px,5.6vh,52px);height:clamp(38px,5.6vh,52px);border-radius:50%;background:linear-gradient(155deg,#8a68b4,#4a2f6b);display:flex;align-items:center;justify-content:center;color:#fff;font-family:\'Cormorant Garamond\',serif;font-size:clamp(15px,2vh,19px);margin-bottom:clamp(10px,1.8vh,18px)">HG</div>'
      +'<p style="margin:0 0 4px;font-size:clamp(11px,1.3vh,12.5px);opacity:.5;font-weight:500">Higan Team</p>'
      +'<h3 style="font-family:\'Cormorant Garamond\',serif;font-weight:600;font-size:clamp(18px,2.6vh,25px);margin:0 0 clamp(10px,2vh,22px)">'+t.discovery+' · 30 min</h3>'
      +'<div style="display:flex;align-items:center;gap:10px;margin-bottom:clamp(6px,1.2vh,12px);font-size:clamp(11.5px,1.4vh,13.5px);opacity:.7"><span aria-hidden="true" style="width:16px;height:16px;border:1.4px solid currentColor;border-radius:50%;flex-shrink:0;position:relative"><i style="position:absolute;left:7px;top:2.5px;width:1.4px;height:4.6px;background:currentColor;transform-origin:bottom"></i><i style="position:absolute;left:7px;top:7.1px;width:3.8px;height:1.4px;background:currentColor;transform-origin:left"></i></span>30 min</div>'
      +'<div style="display:flex;align-items:center;gap:10px;margin-bottom:clamp(10px,2vh,22px);font-size:clamp(11.5px,1.4vh,13.5px);opacity:.7"><span aria-hidden="true" style="width:18px;height:12px;border:1.4px solid currentColor;border-radius:3px;flex-shrink:0;position:relative"><i style="position:absolute;right:-5px;top:2.5px;width:0;height:0;border-top:3px solid transparent;border-bottom:3px solid transparent;border-left:5px solid currentColor"></i></span>'+t.videoInfo+'</div>'
      +'<p style="font-size:clamp(11.5px,1.3vh,13.5px);line-height:1.6;opacity:.6;margin:0 0 clamp(8px,1.6vh,18px)">'+t.bookingIntro+'</p>'
      +'<a href="mailto:contact&#64;higan.studio" style="font-family:\'Cormorant Garamond\',serif;font-size:clamp(15px,2vh,20px);border-bottom:1px solid #7c5aa6;padding-bottom:2px;width:fit-content">contact&#64;higan.studio</a></div>'
      +'<div style="padding:clamp(18px,3vh,36px)">'
      +'<p style="font-family:\'Cormorant Garamond\',serif;font-weight:600;font-size:clamp(16px,2vh,20px);margin:0 0 clamp(10px,1.8vh,20px)">'+t.selectDate+'</p>'
      +'<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:clamp(6px,1.2vh,14px)">'
      +'<button data-nav="prev" style="background:none;border:none;font-size:16px;padding:4px 8px;color:#15131a;cursor:'+(this.state.monthOffset>0?'pointer':'default')+';opacity:'+(this.state.monthOffset>0?'1':'.25')+'">←</button>'
      +'<span style="font-weight:600;font-size:clamp(12.5px,1.5vh,14px)">'+md.label+'</span>'
      +'<button data-nav="next" style="background:none;border:none;font-size:16px;cursor:pointer;color:#15131a;padding:4px 8px">→</button></div>'
      +'<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;margin-bottom:4px;justify-items:center">'+wd+'</div>'
      +'<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;justify-items:center">'+cells+'</div>'+slotsHTML
      +'<div style="display:flex;align-items:center;gap:8px;margin-top:clamp(10px,1.8vh,20px);padding-top:clamp(8px,1.4vh,16px);border-top:1px solid rgba(0,0,0,.08);font-size:11.5px;opacity:.55"><span style="width:12px;height:12px;border:1.3px solid currentColor;border-radius:50%;flex-shrink:0"></span>'+t.timezone+'</div>'
      +'<div style="display:flex;align-items:center;justify-content:space-between;gap:14px;margin-top:clamp(10px,1.8vh,22px);padding-top:clamp(8px,1.6vh,18px);border-top:1px solid rgba(0,0,0,.08)">'
      +'<p style="opacity:.5;font-size:12.5px;font-weight:300;margin:0">'+chosen+'</p>'
      +'<button class="hg-cta hg-cta-onlight" data-hg-dark="1" data-book="1" style="flex-shrink:0"><span>'+t.discovery+'</span><span class="hg-ar">↗</span></button></div>'
      +'</div></div>'
      +'</section>';
    return {wrap};
  }
  wireBooking(root){
    root.querySelectorAll('[data-day]').forEach(b=>{ const k=b.getAttribute('data-day'); if(k) b.onclick=()=>this.setState({selectedDay:k,selectedTime:null}); });
    root.querySelectorAll('[data-slot]').forEach(b=>{ b.onclick=()=>this.setState({selectedTime:b.getAttribute('data-slot')}); });
    const pv=root.querySelector('[data-nav="prev"]'); if(pv) pv.onclick=()=>{ if(this.state.monthOffset>0) this.setState(s=>({monthOffset:s.monthOffset-1,selectedDay:null,selectedTime:null})); };
    const nx=root.querySelector('[data-nav="next"]'); if(nx) nx.onclick=()=>this.setState(s=>({monthOffset:s.monthOffset+1,selectedDay:null,selectedTime:null}));
    const bk=root.querySelector('[data-book]'); if(bk) bk.onmouseenter=()=>{ const r=bk.getBoundingClientRect(); this._pull={x:r.left+r.width/2,y:r.top+r.height/2}; this._pullT=120; };
  }

  renderVals(){
    const t=this.T[this.state.lang];
    const setRoute=r=>()=>{ this.setState({route:r}); requestAnimationFrame(()=>window.scrollTo(0,0)); };
    const set=this.wordSets[this.state.route]||this.wordSets.home;
    const wf=t.wf.map((w,i)=>({...w,arrow:i<t.wf.length-1}));
    const off=this.state.lang==='de'?[
      {num:'01',title:'Systeme',desc:'Robuste digitale Produkte — vom Interface bis zur Infrastruktur.',items:['Websites','Mobile Apps','E-Commerce','Desktop Apps','Automatisierungen','API-Entwicklung']},
      {num:'02',title:'Design',desc:'Von der Idee zur Oberfläche — Design das führt und konvertiert.',items:['UX / Wireframing','Prototyping','Motion Design','Conversion Rate','Design Language']},
      {num:'03',title:'Strategie',desc:'Klare Roadmaps und die richtige technische Grundlage.',items:['Roadmap','Tech-Stack-Evaluierung','Skalierbarkeit','Produktstrategie']},
      {num:'04',title:'Automation',desc:'KI-Agenten, LLM-Integration und Workflow-Automatisierung.',items:['KI-Agenten & LLM','Workflow-Automation','Data Scraping & APIs']},
      {num:'05',title:'Beratung',desc:'Von der Idee bis zur laufenden Betreuung.',items:['Idee','Qualität','Support','Wartung','Audits']}
    ]:[
      {num:'01',title:'Systems',desc:'Robust digital products — from interface to infrastructure.',items:['Websites','Mobile Apps','E-Commerce','Desktop Apps','Automations','API Development']},
      {num:'02',title:'Design',desc:'From idea to interface — design that leads and converts.',items:['UX / Wireframing','Prototyping','Motion Design','Conversion Rate','Design Language']},
      {num:'03',title:'Strategy',desc:'Clear roadmaps and the right technical foundation.',items:['Roadmap','Tech-Stack Evaluation','Scalability','Product Strategy']},
      {num:'04',title:'Automation',desc:'AI agents, LLM integration and workflow automation.',items:['AI Agents & LLM','Workflow Automation','Data Scraping & APIs']},
      {num:'05',title:'Consulting',desc:'From the idea to ongoing care.',items:['Idea','Quality','Support','Maintenance','Audits']}
    ];
    return {
      t, petalCanvas:el=>this._petal=el,
      rootRef:el=>this._root=el, navRef:el=>this._nav=el, footerRef:el=>this._footer=el, scrollCueRef:el=>{this._scrollCue=el;this.syncScrollCue();},
      scrollCueClick:e=>{ e&&e.preventDefault&&e.preventDefault(); clearTimeout(this._scrollPromptDelay); cancelAnimationFrame(this._scrollPromptRaf); this._cueNudging=false; this.syncScrollCue();
        // controlled eased glide (browser-agnostic, ~750ms) down ~90% of a screen
        const startY=window.scrollY, target=Math.round(startY+innerHeight*0.9), dur=750, t0=performance.now();
        const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;
        const step=now=>{ const p=Math.min(1,(now-t0)/dur); window.scrollTo(0,startY+(target-startY)*ease(p)); if(p<1) this._scrollPromptRaf=requestAnimationFrame(step); };
        this._scrollPromptRaf=requestAnimationFrame(step); },
      fallRef:el=>{ this._fall=el; },
      tilesSlot:el=>this._tiles=el, bookingSlot2:el=>this._booking2=el,
      langLabel:this.state.lang==='de'?'DE':'EN',
      toggleLang:()=>this.setState(s=>({lang:s.lang==='de'?'en':'de',typed:'',wordIdx:0})),
      heroPre:set.prefix[this.state.lang], typedWord:this.state.typed,
      goHome:e=>{e&&e.preventDefault&&e.preventDefault();this.setState({route:'home'});requestAnimationFrame(()=>window.scrollTo(0,0));},
      navProjects:setRoute('home'), navServices:setRoute('services'), navAbout:setRoute('about'), navContact:setRoute('contact'), navGuide:setRoute('guide'),
      isHome:this.state.route==='home', isServices:this.state.route==='services', isAbout:this.state.route==='about', isContact:this.state.route==='contact', isGuide:this.state.route==='guide',
      isDe:this.state.lang==='de', isEn:this.state.lang==='en',
      offers:off, workflow:wf
    };
  }
}
</script>
</body>
</html>
