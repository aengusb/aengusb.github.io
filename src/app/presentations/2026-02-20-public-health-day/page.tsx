'use client';

import Presentation from '@/components/presentations/Presentation';
import {
  TitleSlide,
  ContentSlide,
  TwoColumnSlide,
  SectionSlide,
  ThankYouSlide,
  BulletList,
  Figure,
  HighlightBox,
  Citation,
} from '@/components/presentations/Slide';

const IMG = '/presentations/2026-02-20-public-health-day/images';

export default function PublicHealthDay() {
  return (
    <Presentation theme="personal">

      {/* ── 1. Title — centered image with overlapping labels ── */}
      <div className="h-full w-full relative overflow-hidden bg-black flex flex-col items-center justify-center">
        {/* Event name */}
        <p className="text-xl text-white/50 uppercase tracking-widest mb-6">
          Research &amp; Public Health Day
        </p>

        {/* Image + overlapping text wrapper */}
        <div className="relative w-[65%] max-w-[850px]">
          {/* The image */}
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={`${IMG}/title-bg.png`}
              alt="Information Ecosystem Health / Health Misinformation"
              className="w-full h-auto block"
            />
          </div>

          {/* Top label — right-aligned, overlapping image from the left */}
          <div className="absolute z-10 text-right" style={{ top: '15vh', left: '10vw' }}>
            <p className="text-2xl md:text-4xl font-semibold uppercase tracking-wide" style={{ color: '#6BA539', WebkitTextStroke: '1.25px rgba(255,255,255,0.4)' }}>
              Information
              <br />
              Ecosystem
            </p>
          </div>

          {/* Bottom label — left-aligned, overlapping image from the right */}
          <div className="absolute z-10 text-left" style={{ bottom: '22vh', right: '13vw' }}>
            <p className="text-2xl md:text-4xl font-semibold text-red-500 uppercase tracking-wide" style={{ WebkitTextStroke: '1.25px rgba(255,255,255,0.4)' }}>
              Misinformation
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-10 py-4 z-20">
          <span className="text-lg text-white/50 font-medium tracking-wide">February 20, 2026</span>
          <span className="text-lg text-white/50 font-medium tracking-wide">Aengus Bridgman</span>
        </div>
      </div>

      {/* ── 2. About me / MEO ─────────────────────────── */}
      <ContentSlide
        category="Introduction"
        title="The Media Ecosystem Observatory"
        slideNumber={2}
        footerText="abridgman.ca"
      >
        <BulletList
          items={[
            <span key="1"><strong>MEO</strong> — Canada&apos;s digital media monitoring infrastructure at McGill</span>,
            <span key="2">We study the <strong>health of information ecosystems</strong> — not just individual pieces of content</span>,
            <span key="3">Digital trace data across platforms: X, Facebook, Instagram, YouTube, TikTok, Telegram, podcasts</span>,
            <span key="4">Part of the <strong>Canadian Digital Media Research Network</strong> (CDMRN) — 14 research labs nationwide</span>,
          ]}
        />
        <Citation refs={[
          'Bridgman et al., Like it or Not: The Changing Canadian Information Ecosystem, 2025',
          'Bridgman et al., Infodemic Pathways: Evaluating the Role That Traditional and Social Media Play in Cross-National Information Transfer, 2021',
          'Bridgman et al., The Causes and Consequences of COVID-19 Misperceptions: Understanding the Role of News and Social Media, 2020',
        ]} />
      </ContentSlide>

      {/* ── 3. The metaphor ───────────────────────────── */}
      <ContentSlide
        category="The Metaphor"
        title="What Is a &quot;Healthy&quot; Information Ecosystem?"
        slideNumber={3}
        footerText="abridgman.ca"
      >
        <div className="grid grid-cols-2 gap-8 mt-4">
          <HighlightBox variant="teal">
            <p className="font-semibold text-[var(--accent-primary)] mb-3">Healthy Ecosystem</p>
            <ul className="space-y-2 text-lg">
              <li>Diverse, independent sources</li>
              <li>Functional feedback loops — corrections propagate</li>
              <li>Resilience to shocks and manipulation</li>
              <li>Trust calibrated to evidence quality</li>
            </ul>
          </HighlightBox>
          <HighlightBox variant="indigo">
            <p className="font-semibold text-[var(--accent-secondary)] mb-3">Diseased Ecosystem</p>
            <ul className="space-y-2 text-lg">
              <li>Monocultures of information, algorithmically amplified</li>
              <li>Broken feedback — misinformation stickier than corrections</li>
              <li>Vulnerable to cascading failure</li>
              <li>Trust driven by identity, not evidence</li>
            </ul>
          </HighlightBox>
        </div>
        <HighlightBox variant="amber">
          <p>The key insight: <strong>health misinformation isn&apos;t just bad content — it&apos;s a symptom of a diseased information ecosystem.</strong> And it makes the ecosystem sicker.</p>
        </HighlightBox>
        <Citation refs={[
          'Introne et al., Healthier Information Ecosystems: A Definition and Agenda, 2024',
          'Benkler et al., Network Propaganda, 2018',
        ]} />
      </ContentSlide>

      {/* ── 4. The ecosystem in numbers ──────────────── */}
      <ContentSlide
        category="The Metaphor"
        title="The Ecosystem at Scale"
        slideNumber={4}
        footerText="abridgman.ca"
      >
        <BulletList
          items={[
            <span key="1">Misinformation is <strong>~1% of media consumption</strong> — but concentrated among heavy consumers who drive outsized influence</span>,
            <span key="2">The information ecosystem is <strong>asymmetrically polarized</strong> — alternative media networks operate disconnected from mainstream norms</span>,
            <span key="3">Polarized ecosystems can <strong>reorganize social networks</strong> via information cascades — the information shapes the community, not just vice versa</span>,
            <span key="4">The ecosystem for science communication has <strong>fundamentally changed</strong> — fragmented, platformized, algorithmically curated</span>,
          ]}
        />
        <Citation refs={[
          'Allen et al., Evaluating the Fake News Problem at the Scale of the Information Ecosystem, 2020',
          'Tokita et al., Polarized Information Ecosystems Can Reorganize Social Networks via Information Cascades, 2021',
          'Krause et al., Our Changing Information Ecosystem for Science and Why It Matters for Effective Science Communication, 2025',
        ]} />
      </ContentSlide>

      {/* ── 5. Section: The Diagnosis ─────────────────── */}
      <SectionSlide
        title="The Diagnosis"
        subtitle="What does health misinformation actually look like in the wild?"
      />

      {/* ── 6. Podcast grid hero ─────────────────────── */}
      <div className="h-full w-full relative overflow-hidden bg-[var(--bg-primary)]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${IMG}/podcast-grid.jpg)`,
            opacity: 0.45,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)]/80 via-[var(--bg-primary)]/40 to-[var(--bg-primary)]/90" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-16">
          <p className="text-lg uppercase tracking-widest text-[var(--accent-primary)] opacity-60 mb-4 animate-fade-in">
            <span className="opacity-60">{"// "}</span>The Diagnosis
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-12 text-center animate-slide-up">
            The Health Podcast Landscape
          </h2>

          <div className="flex justify-around items-center w-full max-w-4xl mb-12">
            <div className="text-center p-4 animate-count-up">
              <div className="text-6xl md:text-7xl font-bold text-[var(--accent-primary)] mb-2">613</div>
              <div className="text-lg md:text-xl text-[var(--text-secondary)] uppercase tracking-wide">Channels</div>
            </div>
            <div className="text-center p-4 animate-count-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-6xl md:text-7xl font-bold text-[var(--accent-secondary)] mb-2">88,164</div>
              <div className="text-lg md:text-xl text-[var(--text-secondary)] uppercase tracking-wide">Episodes</div>
            </div>
            <div className="text-center p-4 animate-count-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-6xl md:text-7xl font-bold text-[var(--accent-tertiary)] mb-2">6 Years</div>
              <div className="text-lg md:text-xl text-[var(--text-secondary)] uppercase tracking-wide">24/7 Listening</div>
            </div>
          </div>

          <p className="text-2xl text-[var(--text-secondary)] text-center max-w-3xl animate-fade-in stagger-3">
            From mainstream health shows to political talk radio to alternative medicine — every channel you see behind me.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-10 py-4 border-t border-[var(--border-color)] bg-[var(--bg-primary)]/90 z-10">
          <span className="text-lg text-[var(--text-tertiary)] font-medium tracking-wide">abridgman.ca</span>
          <span className="text-lg text-[var(--text-tertiary)]">6</span>
        </div>
      </div>

      {/* ── 7. The spectrum ───────────────────────────── */}
      <ContentSlide
        category="The Diagnosis"
        title="The Health Information Spectrum"
        slideNumber={7}
        footerText="abridgman.ca"
      >
        <div className="grid grid-cols-3 gap-6 mt-4 flex-1">
          <div className="slide-card p-6 border-t-2 border-[var(--accent-primary)]">
            <h3 className="text-2xl font-bold text-[var(--accent-primary)] mb-4">Evidence-Based</h3>
            <ul className="space-y-2 text-lg text-[var(--text-secondary)]">
              <li>Huberman Lab</li>
              <li>Peter Attia (The Drive)</li>
              <li>BBC Health Check</li>
            </ul>
            <p className="text-base text-[var(--text-tertiary)] mt-4">Peer-reviewed sources, expert guests, caveats acknowledged</p>
          </div>
          <div className="slide-card p-6 border-t-2 border-[var(--accent-tertiary)]">
            <h3 className="text-2xl font-bold text-[var(--accent-tertiary)] mb-4">Functional / Alternative</h3>
            <ul className="space-y-2 text-lg text-[var(--text-secondary)]">
              <li>Dr. Mark Hyman (699 segments)</li>
              <li>Wellness Mama</li>
              <li>Wise Traditions</li>
            </ul>
            <p className="text-base text-[var(--text-tertiary)] mt-4">Mix of evidence and ideology, anti-establishment framing</p>
          </div>
          <div className="slide-card p-6 border-t-2 border-[var(--accent-secondary)]">
            <h3 className="text-2xl font-bold text-[var(--accent-secondary)] mb-4">Misinformation Vectors</h3>
            <ul className="space-y-2 text-lg text-[var(--text-secondary)]">
              <li>Dr. Mercola (522 segments)</li>
              <li>Alex Jones (3,097 segments)</li>
              <li>Bannon&apos;s War Room</li>
            </ul>
            <p className="text-base text-[var(--text-tertiary)] mt-4">Conspiracy theories, anti-vax content, politicized health claims</p>
          </div>
        </div>
      </ContentSlide>

      {/* ── 8. The political-health nexus ──────────────── */}
      <TwoColumnSlide
        category="The Diagnosis"
        title="When Political Media Becomes Health Media"
        questionTitle="The unexpected overlap"
        slideNumber={8}
        footerText="abridgman.ca"
        left={
          <>
            <BulletList
              items={[
                <span key="1"><strong>Alex Jones:</strong> 3,097 segments — the single largest source in our health-adjacent corpus</span>,
                <span key="2"><strong>Bannon&apos;s War Room:</strong> 1,014 segments of daily political content with health claims</span>,
                <span key="3">Political talk shows are now <strong>major vectors</strong> for health misinformation</span>,
              ]}
            />
            <HighlightBox variant="indigo">
              <p>Health misinformation has become <strong>politically encoded</strong> — vaccine skepticism, fluoride fears, and dietary conspiracies are now identity markers.</p>
            </HighlightBox>
          </>
        }
        right={
          <Figure
            src={`${IMG}/podcast-landscape.png`}
            alt="Visualization of the health podcast landscape showing the spectrum from evidence-based to misinformation"
            caption="Source: MEO podcast monitoring, 2025–2026"
          />
        }
      />

      {/* ── 9. The harm is real ───────────────────────── */}
      <ContentSlide
        category="The Diagnosis"
        title="The Harm Is Measurable"
        slideNumber={9}
        footerText="abridgman.ca"
      >
        <div className="grid grid-cols-2 gap-8 mt-4 flex-1">
          <div>
            <BulletList
              items={[
                <span key="1">A single exposure to vaccine misinformation <strong>reduced vaccination intent by 6.4 percentage points</strong></span>,
                <span key="2">Health misinformation exposure <strong>follows existing health disparities</strong> — those with lower health literacy are more exposed and more affected</span>,
                <span key="3">Platform self-regulation has been <strong>largely ineffective</strong> — Facebook&apos;s vaccine misinfo policies failed to curb spread</span>,
              ]}
            />
          </div>
          <div>
            <HighlightBox variant="teal">
              <p className="font-semibold text-[var(--accent-primary)] mb-3">Protective Factors</p>
              <ul className="space-y-2 text-lg">
                <li><strong>Trust in scientists</strong> — the #1 predictor of resistance to health misinformation across countries</li>
                <li><strong>Analytic thinking</strong> — not intelligence, but reflective engagement with claims</li>
                <li><strong>Traditional media use</strong> — reliance on social media for news increases susceptibility</li>
              </ul>
            </HighlightBox>
          </div>
        </div>
        <Citation refs={[
          'Loomba et al., Measuring the Impact of COVID-19 Vaccine Misinformation on Vaccination Intent in the UK and USA, 2021',
          'Southwell et al., Health Misinformation Exposure and Health Disparities: Observations and Opportunities, 2023',
          "Broniatowski et al., The Efficacy of Facebook's Vaccine Misinformation Policies and Architecture during the COVID-19 Pandemic, 2023",
          'Roozenbeek et al., Susceptibility to Misinformation about COVID-19 around the World, 2021',
        ]} />
      </ContentSlide>

      {/* ── 10. Section: The Treatment ────────────────── */}
      <SectionSlide
        title="The Treatment"
        subtitle="What works — and what role can health researchers play?"
      />

      {/* ── 11. The intervention toolbox ──────────────── */}
      <ContentSlide
        category="The Treatment"
        title="The Intervention Toolbox"
        slideNumber={11}
        footerText="abridgman.ca"
      >
        <div className="grid grid-cols-3 gap-6 mt-4 flex-1">
          <div className="slide-card p-5 border-t-2 border-[var(--accent-primary)]">
            <h3 className="text-xl font-bold text-[var(--accent-primary)] mb-3">Prebunking / Inoculation</h3>
            <p className="text-lg text-[var(--text-secondary)]">Expose people to <strong>weakened forms</strong> of misinformation to build resistance — just like a vaccine.</p>
            <p className="text-base text-[var(--text-tertiary)] mt-3">Strongest and most durable effects. Teaching manipulation techniques beats correcting specific myths.</p>
          </div>
          <div className="slide-card p-5 border-t-2 border-[var(--accent-tertiary)]">
            <h3 className="text-xl font-bold text-[var(--accent-tertiary)] mb-3">Corrections & Fact-Checking</h3>
            <p className="text-lg text-[var(--text-secondary)]">Work but <strong>effects are modest</strong> (d&nbsp;=&nbsp;0.29) and <strong>decay within days</strong>. Need ongoing treatment, not one-time intervention.</p>
            <p className="text-base text-[var(--text-tertiary)] mt-3">Simpler language more effective. Full refutations beat partial ones.</p>
          </div>
          <div className="slide-card p-5 border-t-2 border-[var(--accent-secondary)]">
            <h3 className="text-xl font-bold text-[var(--accent-secondary)] mb-3">Combination Therapy</h3>
            <p className="text-lg text-[var(--text-secondary)]">No single intervention is sufficient. <strong>Combining approaches</strong> is the most effective strategy — like disease control.</p>
            <p className="text-base text-[var(--text-tertiary)] mt-3">Combined interventions can trigger ecosystem-level collapse of misinformation cascades.</p>
          </div>
        </div>
        <Citation refs={[
          'Lewandowsky and van der Linden, Countering Misinformation and Fake News Through Inoculation and Prebunking, 2021',
          'Walter et al., Fact-Checking: A Meta-Analysis of What Works and for Whom, 2020',
          'Carey et al., The Ephemeral Effects of Fact-Checks on COVID-19 Misperceptions in the United States, Great Britain and Canada, 2022',
          'Bak-Coleman et al., Combining Interventions to Reduce the Spread of Viral Misinformation, 2022',
          'Kozyreva et al., Toolbox of Individual-Level Interventions against Online Misinformation, 2024',
        ]} />
      </ContentSlide>

      {/* ── 12. The public health parallel ────────────── */}
      <ContentSlide
        category="The Treatment"
        title="A Public Health Approach to Information"
        slideNumber={12}
        footerText="abridgman.ca"
      >
        <div className="grid grid-cols-2 gap-8 mt-2">
          <div>
            <p className="text-2xl font-bold text-[var(--accent-primary)] mb-4">Disease Control</p>
            <ul className="space-y-3 text-lg text-[var(--text-secondary)]">
              <li><strong>Vaccination</strong> — primary prevention</li>
              <li><strong>Surveillance</strong> — track spread</li>
              <li><strong>Treatment</strong> — manage infections</li>
              <li><strong>Combination</strong> — no single tool works</li>
              <li><strong>Chronic management</strong> — ongoing, not one-time</li>
            </ul>
          </div>
          <div>
            <p className="text-2xl font-bold text-[var(--accent-secondary)] mb-4">Information Ecosystem</p>
            <ul className="space-y-3 text-lg text-[var(--text-secondary)]">
              <li><strong>Prebunking</strong> — inoculate before exposure</li>
              <li><strong>Monitoring</strong> — track what&apos;s circulating</li>
              <li><strong>Fact-checking</strong> — correct misinformation</li>
              <li><strong>Multi-level</strong> — individual + platform + policy</li>
              <li><strong>Sustained</strong> — effects decay, need boosters</li>
            </ul>
          </div>
        </div>
        <HighlightBox variant="amber">
          <p>The misinformation challenge is <strong>structurally identical</strong> to public health challenges you already know how to solve. The tools map directly.</p>
        </HighlightBox>
        <Citation refs={[
          'Vivion et al., Prebunking Messaging to Inoculate against COVID-19 Vaccine Misinformation: An Effective Strategy for Public Health, 2022',
          'Bode and Vraga, See Something, Say Something: Correction of Global Health Misinformation on Social Media, 2018',
        ]} />
      </ContentSlide>

      {/* ── 13. Role of health researchers ─────────────── */}
      <ContentSlide
        category="The Treatment"
        title="Your Role in the Ecosystem"
        slideNumber={13}
        footerText="abridgman.ca"
      >
        <BulletList
          items={[
            <span key="1"><strong>Produce accessible science</strong> — the vacuum gets filled by Mercola if you don&apos;t fill it. Peer corrections on social media reduce misperceptions.</span>,
            <span key="2"><strong>Be the trusted source</strong> — trust in scientists is the strongest protective factor against health misinformation. Your credibility matters.</span>,
            <span key="3"><strong>Understand the information environment</strong> — your findings land in a contested, algorithmically curated space. The deficit model is dead.</span>,
            <span key="4"><strong>Collaborate across disciplines</strong> — epidemiology meets media studies meets platform governance. The ecosystem demands it.</span>,
          ]}
        />
        <Citation refs={[
          'Bode and Vraga, See Something, Say Something: Correction of Global Health Misinformation on Social Media, 2018',
          'Roozenbeek et al., Susceptibility to Misinformation about COVID-19 around the World, 2021',
          'Krause et al., Our Changing Information Ecosystem for Science and Why It Matters for Effective Science Communication, 2025',
        ]} />
      </ContentSlide>

      {/* ── 14. Thank you ─────────────────────────────── */}
      <ThankYouSlide
        title="Thank You"
        contacts={[
          { name: 'Aengus Bridgman', email: 'aengus.bridgman@mcgill.ca' },
          { name: 'MEO', email: 'mediaecosystemobservatory.com' },
        ]}
      />
    </Presentation>
  );
}
