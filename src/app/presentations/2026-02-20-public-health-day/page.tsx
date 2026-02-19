'use client';

import Presentation from '@/components/presentations/Presentation';
import {
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
    <Presentation theme="meo">

      {/* ── 1. Title ── */}
      <div className="h-full w-full relative overflow-hidden bg-black flex flex-col items-center justify-center">
        <p className="text-xl text-white/50 uppercase tracking-widest mb-6">
          Research &amp; Public Health Day
        </p>
        <div className="relative w-[80%] max-w-[1200px]">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img
              src={`${IMG}/title-bg.png`}
              alt="Information Ecosystem Health / Health Misinformation"
              className="w-full h-auto block"
            />
          </div>
          <div className="absolute z-10 text-right" style={{ top: '8vh', left: '10vw' }}>
            <p className="text-2xl md:text-5xl font-semibold uppercase tracking-wide" style={{ color: '#6BA539', WebkitTextStroke: '1.25px rgba(255,255,255,0.4)' }}>
              Information
              <br />
              Ecosystem
            </p>
          </div>
          <div className="absolute z-10 text-left" style={{ bottom: '18vh', right: '13vw' }}>
            <p className="text-2xl md:text-5xl font-semibold text-red-500 uppercase tracking-wide" style={{ WebkitTextStroke: '1.25px rgba(255,255,255,0.4)' }}>
              Misinformation
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-10 py-4 z-20">
          <span className="text-lg text-white/50 font-medium tracking-wide">February 20, 2026</span>
          <span className="text-lg text-white/50 font-medium tracking-wide">Aengus Bridgman</span>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          ACT 1 — THE HOOK: WHERE DO CANADIANS GET HEALTH INFO?
          Three advances building a punchline
          ══════════════════════════════════════════════════ */}

      {/* ── 2. Hook beat 1: The doctor ── */}
      <div className="h-full w-full relative overflow-hidden bg-[var(--bg-primary)] grid-bg flex flex-col items-center justify-center">
        <p className="absolute top-8 left-12 text-lg uppercase tracking-widest text-[var(--accent-primary)] opacity-60 animate-fade-in">
          <span className="opacity-60">{"// "}</span>Where Canadians Get Health Information
        </p>
        <div className="text-center animate-slide-up">
          <div className="text-8xl md:text-9xl font-bold text-[var(--accent-primary)] mb-4">3×</div>
          <p className="text-4xl text-[var(--text-primary)] mb-2">per year</p>
          <p className="text-2xl text-[var(--text-secondary)]">The average Canadian sees their doctor about three times a year</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-10 py-4 border-t border-[var(--border-color)] bg-[var(--bg-primary)]/90">
          <span className="text-lg text-[var(--text-tertiary)] font-medium tracking-wide">abridgman.ca</span>
          <span className="text-lg text-[var(--text-tertiary)]">2</span>
        </div>
      </div>

      {/* ── 4. Hook beat 3: Two tiers — alt health + political/general ── */}
      <div className="h-full w-full relative overflow-hidden bg-[var(--bg-primary)] grid-bg flex flex-col items-center justify-center">
        <p className="absolute top-8 left-12 text-lg uppercase tracking-widest text-[var(--accent-primary)] opacity-60 animate-fade-in">
          <span className="opacity-60">{"// "}</span>Where Canadians Get Health Information
        </p>

        {/* Top tier: Alternative Health */}
        <div className="w-full max-w-6xl mb-6">
          <p className="text-xl text-[var(--accent-tertiary)] font-bold uppercase tracking-widest mb-3 animate-fade-in">
            Top &ldquo;Alternative Health&rdquo; Podcasts in Canada
          </p>
          <div className="grid grid-cols-6 gap-4 animate-slide-up">
            {[
              { name: 'Passion Struck', img: 'alt-health/passion-struck-with-john-r-miles.jpg' },
              { name: 'Feel Better, Live More', img: 'alt-health/feel-better-live-more-with-dr-rangan-chatterjee.jpg' },
              { name: 'Well with Arielle Lorre', img: 'alt-health/well-with-arielle-lorre.jpg' },
              { name: 'Feminist Wellness', img: 'alt-health/feminist-wellness.jpg' },
              { name: 'Dhru Purohit Show', img: 'alt-health/dhru-purohit-show.jpg' },
              { name: 'Dr. Tyna Show', img: 'alt-health/the-dr-tyna-show.jpg' },
              { name: 'Wellness Process', img: 'alt-health/the-wellness-process.jpg' },
              { name: 'Dylan Gemelli', img: 'alt-health/the-dylan-gemelli-podcast.jpg' },
              { name: 'mindbodygreen', img: 'alt-health/the-mindbodygreen-podcast.jpg' },
              { name: 'Dr. Ardis Show', img: 'alt-health/the-dr-ardis-show-podcast.jpg' },
              { name: 'Wise Traditions', img: 'alt-health/wise-traditions.jpg' },
              { name: 'Doctor Youn', img: 'alt-health/the-doctor-youn-show.jpg' },
            ].map((pod, i) => (
              <div key={i} className="flex flex-col items-center animate-fade-in" style={{ animationDelay: `${0.03 * i}s` }}>
                <img
                  src={`${IMG}/${pod.img}`}
                  alt={pod.name}
                  className="w-24 h-24 rounded-lg shadow-lg border border-[var(--accent-tertiary)]/30 object-cover"
                />
                <p className="text-sm text-white/50 mt-1 text-center leading-tight">{pod.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom tier: Not health podcasts — but talk about health constantly */}
        <div className="w-full max-w-6xl">
          <p className="text-xl text-[var(--accent-secondary)] font-bold uppercase tracking-widest mb-3 animate-fade-in stagger-2">
            Not Health Podcasts — But Talk About Health Constantly
          </p>
          <div className="grid grid-cols-6 gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            {[
              { name: 'Alex Jones', img: 'channels/the-alex-jones-show-infowars-com.jpg' },
              { name: 'Dana Loesch', img: 'channels/the-dana-show-with-dana-loesch-politics-culture-commentary.jpg' },
              { name: "Bannon's War Room", img: 'channels/bannon-s-war-room.jpg' },
              { name: 'Clay & Buck', img: 'channels/the-clay-travis-and-buck-sexton-show.jpg' },
              { name: 'Joe Rogan', img: 'channels/the-joe-rogan-experience.jpg' },
              { name: 'Russell Brand', img: 'channels/stay-free-with-russell-brand.jpg' },
              { name: 'Flyover Conservatives', img: 'channels/flyover-conservatives.jpg' },
              { name: 'Liz Wheeler', img: 'channels/the-liz-wheeler-show.jpg' },
              { name: 'Redacted News', img: 'channels/redacted-news.jpg' },
              { name: 'Megyn Kelly', img: 'channels/the-megyn-kelly-show.jpg' },
              { name: 'Glenn Beck', img: 'channels/the-glenn-beck-program.jpg' },
              { name: 'Charlie Kirk', img: 'channels/the-charlie-kirk-show.jpg' },
            ].map((pod, i) => (
              <div key={i} className="flex flex-col items-center animate-fade-in" style={{ animationDelay: `${0.3 + 0.03 * i}s` }}>
                <img
                  src={`${IMG}/${pod.img}`}
                  alt={pod.name}
                  className="w-24 h-24 rounded-lg shadow-lg border border-[var(--accent-secondary)]/30 object-cover"
                />
                <p className="text-sm text-white/50 mt-1 text-center leading-tight">{pod.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-10 py-4 border-t border-white/10">
          <span className="text-base text-white/30 font-medium tracking-wide">abridgman.ca</span>
          <span className="text-base text-white/30">4</span>
        </div>
      </div>

      {/* ── 3. Hook beat 2: AI chatbots ── */}
      <div className="h-full w-full relative overflow-hidden bg-[var(--bg-primary)] grid-bg flex flex-col items-center justify-center">
        <p className="absolute top-8 left-12 text-lg uppercase tracking-widest text-[var(--accent-primary)] opacity-60 animate-fade-in">
          <span className="opacity-60">{"// "}</span>Where Canadians Get Health Information
        </p>
        <div className="text-center animate-slide-up">
          <div className="text-8xl md:text-9xl font-bold text-[var(--accent-secondary)] mb-4">50%</div>
          <p className="text-4xl text-[var(--text-primary)] mb-2">of Canadians</p>
          <p className="text-2xl text-[var(--text-secondary)]">have turned to AI chatbots for health information</p>
          <p className="text-xl text-[var(--text-tertiary)] mt-4">Only 27% trust it to be accurate — but they use it anyway</p>
        </div>
        <Citation refs={['CMA / Abacus Data, Health and Media Tracking Survey, 2025 (N = 5,000)']} />
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-10 py-4 border-t border-[var(--border-color)] bg-[var(--bg-primary)]/90">
          <span className="text-lg text-[var(--text-tertiary)] font-medium tracking-wide">abridgman.ca</span>
          <span className="text-lg text-[var(--text-tertiary)]">3</span>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          ACT 2 — THE FRAMEWORK: How I Think About the Problem
          ══════════════════════════════════════════════════ */}

      <SectionSlide
        title="How do we make sense of this?"
      />

      {/* ── 6. The ecosystem metaphor ── */}
      <ContentSlide
        category="The Framework"
        title="What is a &quot;Healthy&quot; Information Ecosystem?"
        slideNumber={6}
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

      {/* ── 7. Who I am (light, woven into the story) ── */}
      <div className="h-full w-full relative overflow-hidden bg-[var(--bg-primary)] flex">
        <div className="accent-line w-full absolute top-0" />
        {/* Left side — credentials as context */}
        <div className="w-[45%] flex flex-col justify-center pl-16 pr-8 z-10 pt-8">
          <p className="text-base uppercase tracking-widest text-[var(--accent-primary)] opacity-60 mb-4 animate-fade-in">
            <span className="opacity-60">{"// "}</span>The Framework
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] leading-tight mb-4 animate-slide-up">
            Studying the Ecosystem
          </h2>
          <div className="accent-line w-24 my-4 animate-fade-in stagger-2" />
          <p className="text-xl text-[var(--text-secondary)] mb-2 animate-fade-in stagger-3">
            <strong className="text-[var(--text-primary)]">Media Ecosystem Observatory &mdash; Canada&apos;s digital media monitoring infrastructure</strong>
          </p>
          <ul className="space-y-3 text-xl text-[var(--text-secondary)] mt-4">
            <li className="animate-fade-in" style={{ animationDelay: '0.3s' }}>Real-time tracking across X, Facebook, Instagram, YouTube, TikTok, Telegram, podcasts</li>
            <li className="animate-fade-in" style={{ animationDelay: '0.4s' }}>Canadian Digital Media Research Network</li>
            <li className="animate-fade-in" style={{ animationDelay: '0.5s' }}>Election monitoring, information manipulation response, ecosystem health reporting</li>
          </ul>
        </div>

        {/* Right side — publication grid */}
        <div className="w-[55%] flex items-center justify-center p-8">
          <div className="grid grid-cols-4 gap-3 w-full">
            {[
              { title: 'Understanding Vaccine Hesitancy in Canada', venue: 'MEO Report', year: '2020', color: 'var(--accent-primary)' },
              { title: 'COVID-19 Misperceptions', venue: 'HKS Misinformation Review', year: '2020', color: 'var(--accent-secondary)' },
              { title: 'Public Health Communication on Social Media', venue: 'Canadian Public Policy', year: '2021', color: 'var(--accent-primary)' },
              { title: 'Infodemic Pathways', venue: 'Frontiers in Political Science', year: '2021', color: 'var(--accent-tertiary)' },
              { title: 'Social Distrust in Quebec', venue: 'CJPS', year: '2022', color: 'var(--accent-tertiary)' },
              { title: 'Studies in Digital Politics', venue: 'Oxford University Press', year: '2024', color: 'var(--accent-tertiary)' },
              { title: 'Russian Funding of Political Influencers', venue: 'MEO Incident Report', year: '2024', color: 'var(--accent-secondary)' },
              { title: 'Can-PolNews: A Multi-Platform Dataset of Political Discourse', venue: 'ICWSM', year: '2025', color: 'var(--accent-primary)' },
              { title: 'The Canadian Information Ecosystem during the 2025 Federal Election', venue: 'MEO Report', year: '2025', color: 'var(--accent-primary)' },
              { title: 'Ripple Effects of the Charlie Kirk Assassination', venue: 'MEO Incident Report', year: '2025', color: 'var(--accent-secondary)' },
              { title: 'Building MEO from Scratch', venue: 'J. Quantitative Description', year: '2025', color: 'var(--accent-primary)' },
              { title: 'Canadian Election 2025', venue: 'MEO Report', year: '2025', color: 'var(--accent-secondary)' },
            ].map((pub, i) => (
              <div
                key={i}
                className="p-3 rounded-lg border animate-fade-in"
                style={{
                  background: 'var(--bg-secondary)',
                  borderColor: pub.color,
                  borderTopWidth: '3px',
                  animationDelay: `${0.1 + i * 0.08}s`,
                }}
              >
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: pub.color, opacity: 0.8 }}>{pub.year}</p>
                <p className="text-sm font-semibold text-[var(--text-primary)] leading-snug mb-1">{pub.title}</p>
                <p className="text-xs text-[var(--text-tertiary)]">{pub.venue}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-10 py-4 border-t border-[var(--border-color)] bg-[var(--bg-primary)]/90 z-20">
          <span className="text-lg text-[var(--text-tertiary)] font-medium tracking-wide">abridgman.ca</span>
          <span className="text-lg text-[var(--text-tertiary)]">7</span>
        </div>
      </div>

      {/* ── 8. The ecosystem at scale ── */}
      <ContentSlide
        category="The Framework"
        title="The Ecosystem at scale"
        slideNumber={8}
        footerText="abridgman.ca"
      >
        <BulletList
          items={[
            // NOTES: Long tail of distribution and influence
            <span key="1">Misinformation is just <strong>~1% of media consumption</strong></span>,
            // NOTES: Key point about ecosystem framing
            <span key="2">The information ecosystem is <strong>asymmetrically polarized</strong></span>,
            // NOTES: the information shapes the community, not just vice versa
            <span key="3">Polarized ecosystems <strong>reorganize social networks</strong></span>,
            // NOTES: fragmented, platformized, algorithmically curated
            <span key="4">The ecosystem for science communication has <strong>fundamentally changed</strong></span>,
          ]}
        />
        <Citation refs={[
          'Allen et al., Evaluating the Fake News Problem at the Scale of the Information Ecosystem, 2020',
          'Tokita et al., Polarized Information Ecosystems Can Reorganize Social Networks via Information Cascades, 2021',
          'Krause et al., Our Changing Information Ecosystem for Science, 2025',
        ]} />
      </ContentSlide>

      {/* ══════════════════════════════════════════════════
          ACT 3 — THE DIAGNOSIS: Novel Podcast Findings
          ══════════════════════════════════════════════════ */}

      <SectionSlide
        title="What does it actually look like?"
      />

      {/* ── 10. Podcast landscape hero ── */}
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
          <span className="text-lg text-[var(--text-tertiary)]">10</span>
        </div>
      </div>

      {/* ── 11. The spectrum ── */}
      <ContentSlide
        category="The Diagnosis"
        title="The Health Information Spectrum"
        slideNumber={11}
        footerText="abridgman.ca"
      >
        <div className="grid grid-cols-3 gap-6 mt-4 flex-1">
          <div className="slide-card p-6 border-t-2 border-[var(--accent-primary)]">
            <h3 className="text-2xl font-bold text-[var(--accent-primary)] mb-4">Evidence-Based</h3>
            <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
              <li>Huberman Lab</li>
              <li>Peter Attia (The Drive)</li>
              <li>BBC Health Check</li>
            </ul>
            <p className="text-lg text-[var(--text-tertiary)] mt-4">Peer-reviewed sources, expert guests, caveats acknowledged</p>
          </div>
          <div className="slide-card p-6 border-t-2 border-[var(--accent-tertiary)]">
            <h3 className="text-2xl font-bold text-[var(--accent-tertiary)] mb-4">Functional / Alternative</h3>
            <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
              <li>Dr. Mark Hyman (108 hours)</li>
              <li>Wellness Mama</li>
              <li>Wise Traditions</li>
            </ul>
            <p className="text-lg text-[var(--text-tertiary)] mt-4">Mix of evidence and ideology, anti-establishment framing</p>
          </div>
          <div className="slide-card p-6 border-t-2 border-[var(--accent-secondary)]">
            <h3 className="text-2xl font-bold text-[var(--accent-secondary)] mb-4">Misinformation Vectors</h3>
            <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
              <li className="flex items-center gap-2">
                <img src={`${IMG}/mercola.jpg`} alt="Dr. Mercola" className="w-8 h-8 rounded-full inline-block" />
                Dr. Mercola (671 hours)
              </li>
              <li className="flex items-center gap-2">
                <img src={`${IMG}/alex-jones.jpg`} alt="Alex Jones" className="w-8 h-8 rounded-full inline-block" />
                Alex Jones (2,902 hours)
              </li>
              <li>Bannon&apos;s War Room</li>
            </ul>
            <p className="text-lg text-[var(--text-tertiary)] mt-4">Conspiracy theories, anti-vax content, politicized health claims</p>
          </div>
        </div>
      </ContentSlide>

      {/* ── 12. The political-health nexus ── */}
      <TwoColumnSlide
        category="The Diagnosis"
        title="When Political Media Becomes Health Media"
        questionTitle="The unexpected overlap"
        slideNumber={12}
        footerText="abridgman.ca"
        left={
          <>
            <BulletList
              items={[
                <span key="1"><strong>Alex Jones:</strong> 2,902 hours of episodes discussing health over 3,000 times — the single largest source in our corpus</span>,
                <span key="2"><strong>Bannon&apos;s War Room:</strong> 28 hours of political content with health claims</span>,
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

      {/* ── 13. PLACEHOLDER: What they're actually saying ──
           TODO: Use UMAP clusters or topic analysis visualization
           Show thematic patterns — what health misinformation sounds like at scale
           Images available: umap_clusters.png, top_topics.png
      ── */}
      <TwoColumnSlide
        category="The Diagnosis"
        title="What They're Actually Saying"
        questionTitle="Thematic patterns at scale"
        slideNumber={13}
        footerText="abridgman.ca"
        left={
          <>
            <BulletList
              items={[
                <span key="1"><strong>TODO:</strong> Top topic clusters from the podcast data</span>,
                <span key="2"><strong>TODO:</strong> Key narrative themes (anti-pharma, natural immunity, etc.)</span>,
                <span key="3"><strong>TODO:</strong> How health topics blend with political narratives</span>,
              ]}
            />
            <HighlightBox variant="amber">
              <p><strong>TODO:</strong> Key insight from topic modeling — what surprised you?</p>
            </HighlightBox>
          </>
        }
        right={
          <Figure
            src={`${IMG}/top_topics.png`}
            alt="Topic analysis of health podcast content"
            caption="Source: MEO podcast monitoring, 2025–2026"
          />
        }
      />

      {/* ── 14. PLACEHOLDER: The temporal dimension ──
           TODO: Use temporal heatmap visualization
           Show how health misinfo spikes around events
           Image available: temporal_heatmap.png
      ── */}
      <TwoColumnSlide
        category="The Diagnosis"
        title="Health Misinformation Is Reactive"
        questionTitle="It spikes when it matters most"
        slideNumber={14}
        footerText="abridgman.ca"
        left={
          <>
            <BulletList
              items={[
                <span key="1"><strong>TODO:</strong> Key spikes — what events triggered surges?</span>,
                <span key="2"><strong>TODO:</strong> Temporal patterns — seasonal, event-driven, strategic?</span>,
                <span key="3"><strong>TODO:</strong> The speed of response — how quickly does misinfo follow real events?</span>,
              ]}
            />
            <HighlightBox variant="teal">
              <p><strong>TODO:</strong> Key temporal insight — misinformation isn&apos;t static background noise, it&apos;s strategically timed.</p>
            </HighlightBox>
          </>
        }
        right={
          <Figure
            src={`${IMG}/temporal_heatmap.png`}
            alt="Temporal heatmap showing health misinformation spikes around key events"
            caption="Source: MEO podcast monitoring, 2025–2026"
          />
        }
      />

      {/* ── 15. The harm is measurable ── */}
      <ContentSlide
        category="The Diagnosis"
        title="The Harm Is Measurable"
        slideNumber={15}
        footerText="abridgman.ca"
      >
        <div className="grid grid-cols-2 gap-8 mt-4 flex-1">
          <div>
            <BulletList
              items={[
                <span key="1">A single exposure to vaccine misinformation <strong>reduced vaccination intent by 6.4 percentage points</strong></span>,
                <span key="2">Health misinformation exposure <strong>follows existing health disparities</strong> — those with lower health literacy are more exposed and more affected</span>,
                <span key="3">Canadians who followed AI health advice were <strong>5× more likely to experience harm</strong> than those who did not</span>,
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
          'Loomba et al., Measuring the Impact of COVID-19 Vaccine Misinformation, Nature Human Behaviour, 2021',
          'Southwell et al., Health Misinformation Exposure and Health Disparities, 2023',
          'CMA / Abacus Data, Health and Media Tracking Survey, 2025',
          'Roozenbeek et al., Susceptibility to Misinformation about COVID-19 around the World, 2021',
        ]} />
      </ContentSlide>

      {/* ══════════════════════════════════════════════════
          ACT 4 — THE UNCOMFORTABLE TRUTH
          ══════════════════════════════════════════════════ */}

      <SectionSlide
        title="Why is this so hard?"
      />

      {/* ── 17. What we thought would work ── */}
      <ContentSlide
        category="The Challenge"
        title="The Conventional Wisdom"
        slideNumber={17}
        footerText="abridgman.ca"
      >
        <div className="grid grid-cols-3 gap-6 mt-4 flex-1">
          <div className="slide-card p-5 border-t-2 border-[var(--accent-primary)]">
            <h3 className="text-2xl font-bold text-[var(--accent-primary)] mb-3">Fact-Check It</h3>
            <p className="text-xl text-[var(--text-secondary)]">Correct the misinformation and people will update their beliefs.</p>
            <div className="mt-4 p-3 rounded bg-[var(--bg-secondary)]">
              <p className="text-base text-[var(--accent-tertiary)]">Reality: Effects <strong>decay within days</strong>. Need ongoing treatment, not one-time intervention.</p>
            </div>
          </div>
          <div className="slide-card p-5 border-t-2 border-[var(--accent-secondary)]">
            <h3 className="text-2xl font-bold text-[var(--accent-secondary)] mb-3">Moderate Platforms</h3>
            <p className="text-xl text-[var(--text-secondary)]">Get platforms to remove misinformation and the problem goes away.</p>
            <div className="mt-4 p-3 rounded bg-[var(--bg-secondary)]">
              <p className="text-base text-[var(--accent-tertiary)]">Reality: Facebook&apos;s vaccine policies were <strong>largely ineffective</strong>. Architecture undermines moderation.</p>
            </div>
          </div>
          <div className="slide-card p-5 border-t-2 border-[var(--accent-tertiary)]">
            <h3 className="text-2xl font-bold text-[var(--accent-tertiary)] mb-3">Teach Media Literacy</h3>
            <p className="text-xl text-[var(--text-secondary)]">Educate people to be better information consumers.</p>
            <div className="mt-4 p-3 rounded bg-[var(--bg-secondary)]">
              <p className="text-base text-[var(--accent-tertiary)]">Reality: <strong>Majority of RCTs show no effect.</strong> The interventions experts prefer most have the weakest evidence.</p>
            </div>
          </div>
        </div>
        <Citation refs={[
          'Carey et al., The Ephemeral Effects of Fact-Checks, Nature Human Behaviour, 2022',
          "Broniatowski et al., Facebook's Vaccine Misinformation Policies, Science Advances, 2023",
          'Blair et al., Interventions to Counter Misinformation: Lessons from Global North & South, 2024',
        ]} />
      </ContentSlide>

      {/* ── 18. The meta-finding ── */}
      <ContentSlide
        category="The Challenge"
        title="The Evidence-Practice Gap"
        slideNumber={18}
        footerText="abridgman.ca"
      >
        <div className="flex-1 flex flex-col justify-center">
          <HighlightBox variant="indigo">
            <p className="text-2xl leading-relaxed">
              The interventions <strong>most favored by experts and policymakers</strong> do not align with the evidence base. Experts systematically prefer interventions that have been <strong>least studied or shown to be mostly ineffective</strong>.
            </p>
          </HighlightBox>
          <div className="grid grid-cols-2 gap-8 mt-8">
            <div>
              <p className="text-2xl font-bold text-[var(--accent-primary)] mb-3">What has strong evidence</p>
              <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
                <li><strong>Inoculation / prebunking</strong> — most consistent positive effects</li>
                <li><strong>Accuracy nudges</strong> — shift attention to veracity before sharing</li>
                <li><strong>Combination approaches</strong> — 50-70% more effective than single interventions</li>
                <li><strong>Structural factors</strong> — explain 83% of variance in resilience across 18 democracies</li>
              </ul>
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--accent-tertiary)] mb-3">The elephant in the room</p>
              <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
                <li><strong>Partisanship</strong> — 96% of experts agree it&apos;s the primary driver of misinformation belief</li>
                <li>Yet <strong>virtually no interventions target it directly</strong></li>
                <li>The problem is structural and political, not just informational</li>
              </ul>
            </div>
          </div>
        </div>
        <Citation refs={[
          'Blair et al., Interventions to Counter Misinformation, 2024',
          'Altay et al., A Survey of Expert Views on Misinformation, 2023',
          'Humprecht et al., Resilience to Online Disinformation, 2020',
          'Bak-Coleman et al., Combining Interventions, Nature Human Behaviour, 2022',
        ]} />
      </ContentSlide>

      {/* ── 19. The AI accelerant ── */}
      <ContentSlide
        category="The Challenge"
        title="The AI Accelerant"
        slideNumber={19}
        footerText="abridgman.ca"
      >
        <div className="grid grid-cols-2 gap-8 mt-4 flex-1">
          <div>
            <p className="text-2xl font-bold text-[var(--accent-tertiary)] mb-4">The Threat Multiplier</p>
            <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
              <li><strong>40 million Americans</strong> use ChatGPT daily for health questions — it may already be the largest &ldquo;health provider&rdquo; in North America</li>
              <li>AI wellness influencers, personalized supplement recommendations, AI-generated &ldquo;medical advice&rdquo; at scale</li>
              <li>Misinformation becomes <strong>personalized</strong> — tailored to your specific fears and health anxieties</li>
              <li>The trust gap: people use it <strong>despite not trusting it</strong> — convenience beats skepticism</li>
            </ul>
          </div>
          <div>
            <p className="text-2xl font-bold text-[var(--accent-primary)] mb-4">The Potential Tool</p>
            <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
              <li><strong>Real-time monitoring</strong> — AI can track emerging health misinfo faster than human analysts</li>
              <li><strong>Prebunking at scale</strong> — personalized inoculation messages timed to emerging narratives</li>
              <li><strong>Accessible science communication</strong> — translating research into plain language, multiple formats</li>
              <li>The question: <strong>who builds the health AI, and with what incentives?</strong></li>
            </ul>
          </div>
        </div>
        <Citation refs={[
          'CMA / Abacus Data, Health and Media Tracking Survey, 2025',
          'OpenAI Health Report, 2025',
          'ECRI, 2026 Health Tech Hazard Report, 2026',
        ]} />
      </ContentSlide>

      {/* ══════════════════════════════════════════════════
          ACT 5 — THE TREATMENT: What Actually Works + What You Can Do
          ══════════════════════════════════════════════════ */}

      <SectionSlide
        title="What can we do about it?"
      />

      {/* ── 21. The public health parallel ── */}
      <ContentSlide
        category="The Treatment"
        title="A Public Health Approach to Information"
        slideNumber={21}
        footerText="abridgman.ca"
      >
        <div className="grid grid-cols-2 gap-8 mt-2">
          <div>
            <p className="text-2xl font-bold text-[var(--accent-primary)] mb-4">Disease Control</p>
            <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
              <li><strong>Vaccination</strong> — primary prevention</li>
              <li><strong>Surveillance</strong> — track spread</li>
              <li><strong>Treatment</strong> — manage infections</li>
              <li><strong>Combination</strong> — no single tool works</li>
              <li><strong>Chronic management</strong> — ongoing, not one-time</li>
            </ul>
          </div>
          <div>
            <p className="text-2xl font-bold text-[var(--accent-secondary)] mb-4">Information Ecosystem</p>
            <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
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
          'Lewandowsky and van der Linden, Countering Misinformation Through Inoculation and Prebunking, 2021',
          'Bode and Vraga, See Something, Say Something, 2018',
          'Kozyreva et al., Toolbox of Individual-Level Interventions against Online Misinformation, 2024',
        ]} />
      </ContentSlide>

      {/* ── 22. The practitioner's toolkit ── */}
      <ContentSlide
        category="The Treatment"
        title="What Can Be Done"
        slideNumber={22}
        footerText="abridgman.ca"
      >
        <div className="grid grid-cols-2 gap-6 mt-4 flex-1">
          <div className="slide-card p-5 border-t-2 border-[var(--accent-primary)]">
            <h3 className="text-2xl font-bold text-[var(--accent-primary)] mb-3">As Communicators</h3>
            <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
              {/* NOTES: lead with the manipulation technique, not the myth */}
              <li><strong>Prebunk, don&apos;t just debunk</strong></li>
              {/* NOTES: if you don't produce accessible science, Mercola and Jones will fill the space */}
              <li><strong>Fill the vacuum</strong></li>
              {/* NOTES: visual corrections outperform text by a wide margin */}
              <li><strong>Use visuals</strong></li>
              {/* NOTES: effects decay in days, not months. Boosters work for information too */}
              <li><strong>Repeat</strong></li>
            </ul>
          </div>
          <div className="slide-card p-5 border-t-2 border-[var(--accent-secondary)]">
            <h3 className="text-2xl font-bold text-[var(--accent-secondary)] mb-3">As Researchers</h3>
            <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
              {/* NOTES: your findings land in a contested, algorithmically curated space */}
              <li><strong>Think about circulation</strong></li>
              {/* NOTES: more facts alone don't fix this */}
              <li><strong>The deficit model is dead</strong></li>
              {/* NOTES: epidemiology + media studies + platform governance */}
              <li><strong>Partner across disciplines</strong></li>
              {/* NOTES: trust in scientists is the #1 protective factor */}
              <li><strong>Your credibility matters</strong></li>
            </ul>
          </div>
          <div className="slide-card p-5 border-t-2 border-[var(--accent-tertiary)]">
            <h3 className="text-2xl font-bold text-[var(--accent-tertiary)] mb-3">As Citizens</h3>
            <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
              {/* NOTES: peer corrections on social media reduce misperceptions */}
              <li><strong>See something, say something</strong></li>
              {/* NOTES: pause before sharing, ask "is this accurate?" */}
              <li><strong>Friction is your friend</strong></li>
              {/* NOTES: monocultures make ecosystems fragile */}
              <li><strong>Diversify your information diet</strong></li>
            </ul>
          </div>
          <div className="slide-card p-5 border-t-2 border-[var(--text-tertiary)]" style={{ borderTopColor: 'var(--text-secondary)' }}>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">As Professionals</h3>
            <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
              {/* NOTES: journalism support, platform accountability, public health infrastructure for information */}
              <li><strong>The structural levers are policy choices</strong></li>
              {/* NOTES: not just the ones that feel good */}
              <li><strong>Demand evidence-based interventions</strong></li>
              {/* NOTES: the health system and information system are the same system now */}
              <li><strong>Build bridges</strong></li>
            </ul>
          </div>
        </div>
        <Citation refs={[
          'Bode and Vraga, See Something, Say Something, 2018',
          'Vivion et al., Prebunking Messaging to Inoculate against COVID-19 Vaccine Misinformation, 2022',
          'Walter et al., Evaluating the Impact of Attempts to Correct Health Misinformation, 2020',
        ]} />
      </ContentSlide>

      {/* ── 23. PLACEHOLDER: Closing reflection ──
           TODO: A personal/reflective beat before thank you
           Could be: a quote, a story, a call to action, a provocation
           Something that lands emotionally after all the evidence
      ── */}
      <div className="h-full w-full relative overflow-hidden bg-[var(--bg-secondary)] grid-bg flex flex-col items-center justify-center px-16">
        <div className="max-w-3xl text-center">
          <p className="text-lg uppercase tracking-widest text-[var(--accent-primary)] opacity-60 mb-8 animate-fade-in">
            <span className="opacity-60">{"// "}</span>The Treatment
          </p>
          <p className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight animate-slide-up">
            {/* TODO: Your closing line — something that sticks */}
            &ldquo;The information ecosystem is a public health issue. And public health professionals are information ecosystem participants — whether they know it or not.&rdquo;
          </p>
          <div className="accent-line w-32 mx-auto mt-8 animate-fade-in stagger-3" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-10 py-4 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/90">
          <span className="text-lg text-[var(--text-tertiary)] font-medium tracking-wide">abridgman.ca</span>
          <span className="text-lg text-[var(--text-tertiary)]">23</span>
        </div>
      </div>

      {/* ── 24. Thank you ── */}
      <ThankYouSlide
        title="Thank You"
        contacts={[
          { name: 'Aengus Bridgman', email: 'aengus.bridgman@mcgill.ca' },
          { name: 'Media Ecosystem Observatory', email: 'meo.ca' },
          { name: 'Centre for Media, Technology and Democracy', email: 'mediatechdemocracy.com' },
        ]}
      />
    </Presentation>
  );
}
