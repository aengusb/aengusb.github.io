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

      {/* ── Title ── */}
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
          ══════════════════════════════════════════════════ */}

      {/* ── Hook beat 1: The doctor ── */}
      <div
        data-notes="The average Canadian sees their GP about 3 times a year. But they're exposed to health information online every single day — podcasts, social media, AI chatbots. The question is: who is shaping their understanding of health?"
        className="h-full w-full relative overflow-hidden bg-[var(--bg-primary)] grid-bg flex flex-col items-center justify-center"
      >
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
        </div>
      </div>

      {/* ── Hook beat 2: Podcast landscape ── */}
      <div
        data-notes="These are the top alternative health podcasts in Canada, and below them are political shows that talk about health constantly. The key point: health information doesn't just come from health sources. Political media is now a major vector."
        className="h-full w-full relative overflow-hidden bg-[var(--bg-primary)] grid-bg flex flex-col items-center justify-center"
      >
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
        </div>
      </div>

      {/* ── Hook beat 3: AI chatbots ── */}
      <div
        data-notes="CMA/Abacus survey of 5,000 Canadians. Half have used AI chatbots for health information. But only 27% trust the answers. Convenience beats skepticism — they know it might be wrong and use it anyway. This is the trust paradox."
        className="h-full w-full relative overflow-hidden bg-[var(--bg-primary)] grid-bg flex flex-col items-center justify-center"
      >
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
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          ACT 2 — THE ECOSYSTEM: What's actually going on?
          ══════════════════════════════════════════════════ */}

      <SectionSlide
        title="What's actually going on?"
      />

      {/* ── The ecosystem metaphor (3 fragments: diseased, healthy, insight) ── */}
      <ContentSlide
        category="The Ecosystem"
        title="What is a &quot;healthy&quot; information ecosystem?"
        footerText="abridgman.ca"
        data-fragments={3}
        data-notes="Click through three boxes. First: the diseased ecosystem — trust driven by identity not evidence, monocultures of information, misinformation stickier than corrections, vulnerable to cascading failure. Second: healthy — trust calibrated to evidence quality, diverse and independent sources, corrections propagate effectively, resilience to shocks and manipulation. Third: the key insight — health misinfo is a SYMPTOM of a weak ecosystem. It's not the disease, it's the fever. And it makes the ecosystem (and the population!) sicker. References: Introne et al. 2024, Benkler et al. 2018."
      >
        <div className="grid grid-cols-2 gap-8 mt-4">
          <div className="fragment" data-fragment-index={0}>
            <HighlightBox variant="indigo">
              <p className="font-semibold text-xl text-[var(--accent-secondary)] mb-3">Diseased Ecosystem</p>
              <ul className="space-y-2 text-xl">
                <li>Trust driven by <strong>identity</strong>, not evidence</li>
                <li>Information <strong>monocultures</strong></li>
                <li>Misinformation <strong>stickier</strong> than corrections</li>
                <li><strong>Cascading failure</strong></li>
              </ul>
            </HighlightBox>
          </div>
          <div className="fragment" data-fragment-index={1}>
            <HighlightBox variant="teal">
              <p className="font-semibold text-xl text-[var(--accent-primary)] mb-3">Healthy Ecosystem</p>
              <ul className="space-y-2 text-xl">
                <li>Trust calibrated to <strong>evidence</strong></li>
                <li><strong>Diverse</strong> and independent sources</li>
                <li>Corrections <strong>propagate</strong></li>
                <li><strong>Resilient</strong> to shocks</li>
              </ul>
            </HighlightBox>
          </div>
        </div>
        <div className="fragment" data-fragment-index={2}>
          <HighlightBox variant="amber">
            <p className="text-2xl"><strong>Rampant health misinformation can be a symptom of a weak information ecosystem.</strong></p>
          </HighlightBox>
        </div>
      </ContentSlide>

      {/* ── Who I am (light, woven into the story) ── */}
      <ContentSlide
        category="The Ecosystem"
        title="Studying the ecosystem"
        footerText="abridgman.ca"
        data-notes="Brief credentialing. MEO: real-time monitoring across 7+ platforms (X, Facebook, Instagram, YouTube, TikTok, Telegram, podcasts). Election monitoring and rapid incident response — Tenet Media, Kirkland Lake bots, Charlie Kirk. CDMRN is the pan-Canadian network we helped build. Published in ICWSM, HKS Misinformation Review, Frontiers, plus rapid incident reports. This slide is quick — the data that follows IS the credentialing."
      >
        <BulletList
          items={[
            <span key="1"><strong>Media Ecosystem Observatory</strong> — real-time tracking across 7+ platforms</span>,
            <span key="2"><strong>Election monitoring</strong> &amp; rapid incident response</span>,
            <span key="3"><strong>Canadian Digital Media Research Network</strong> — pan-Canadian partnerships</span>,
          ]}
        />
      </ContentSlide>

      {/* ── Podcast data follows directly — the data IS the credentialing ── */}

      {/* ── Podcast landscape hero ── */}
      <div
        data-notes="Our podcast monitoring project: 613 channels, 88,164 episodes, 6 years of continuous content if you listened 24/7. We transcribed and analyzed all of it. This is the background — every podcast cover you see behind me is in the dataset."
        className="h-full w-full relative overflow-hidden bg-[var(--bg-primary)]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${IMG}/podcast-grid.jpg)`,
            opacity: 0.25,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)]/90 via-[var(--bg-primary)]/60 to-[var(--bg-primary)]/95" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center px-16">
          <div className="rounded-2xl px-16 py-12" style={{ background: 'radial-gradient(ellipse at center, rgba(10,10,15,0.85) 0%, rgba(10,10,15,0.5) 60%, transparent 100%)' }}>
            <p className="text-lg uppercase tracking-widest text-[var(--accent-primary)] opacity-60 mb-4 animate-fade-in text-center">
              <span className="opacity-60">{"// "}</span>The Ecosystem
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-12 text-center animate-slide-up">
              The health podcast landscape
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
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-10 py-4 border-t border-[var(--border-color)] bg-[var(--bg-primary)]/90 z-10">
          <span className="text-lg text-[var(--text-tertiary)] font-medium tracking-wide">abridgman.ca</span>
        </div>
      </div>

      {/* ── The spectrum ── */}
      <ContentSlide
        category="The Ecosystem"
        title="The health information spectrum"
        footerText="abridgman.ca"
        data-notes="Three columns showing the spectrum. Evidence-based: Huberman, Attia, BBC — peer-reviewed, expert guests, caveats acknowledged. These are the shows most people think of when they think 'health podcast.' Functional/Alternative: Hyman has 108 hours of health content (!), Wellness Mama, Wise Traditions — mix of evidence and ideology, anti-establishment framing. They bridge into wellness culture. Misinformation Vectors: Mercola at 671 hours, Alex Jones at 2,902 hours — the sheer volume dwarfs the evidence-based content. Bannon's War Room also a major vector. The key visual takeaway: the misinformation column has orders of magnitude more content than the evidence-based column."
      >
        <div className="grid grid-cols-3 gap-6 mt-4 flex-1">
          <div className="slide-card p-6 border-t-2 border-[var(--text-tertiary)]">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Evidence-Based</h3>
            <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
              <li className="flex items-center gap-3">
                <img src={`${IMG}/channels/huberman-lab.jpg`} alt="Huberman Lab" className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                Huberman Lab
              </li>
              <li className="flex items-center gap-3">
                <img src={`${IMG}/channels/the-drive-peter-attia.jpg`} alt="Peter Attia" className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                Peter Attia (The Drive)
              </li>
              <li className="flex items-center gap-3">
                <img src={`${IMG}/channels/bbc-health-check.jpg`} alt="BBC Health Check" className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                BBC Health Check
              </li>
            </ul>
          </div>
          <div className="slide-card p-6 border-t-2 border-[var(--text-tertiary)]">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Functional / Alternative</h3>
            <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
              <li className="flex items-center gap-3">
                <img src={`${IMG}/channels/the-dr-hyman-show.jpg`} alt="Dr. Mark Hyman" className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                Dr. Mark Hyman
              </li>
              <li className="flex items-center gap-3">
                <img src={`${IMG}/channels/wellness-mama.jpg`} alt="Wellness Mama" className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                Wellness Mama
              </li>
              <li className="flex items-center gap-3">
                <img src={`${IMG}/alt-health/wise-traditions.jpg`} alt="Wise Traditions" className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                Wise Traditions
              </li>
            </ul>
          </div>
          <div className="slide-card p-6 border-t-2 border-[var(--text-tertiary)]">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Misinformation Vectors</h3>
            <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
              <li className="flex items-center gap-3">
                <img src={`${IMG}/channels/dr-joseph-mercola-take-control-of-your-health.jpg`} alt="Dr. Mercola" className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                Dr. Mercola
              </li>
              <li className="flex items-center gap-3">
                <img src={`${IMG}/channels/the-alex-jones-show-infowars-com.jpg`} alt="Alex Jones" className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                Alex Jones
              </li>
              <li className="flex items-center gap-3">
                <img src={`${IMG}/channels/bannon-s-war-room.jpg`} alt="Bannon's War Room" className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                Bannon&apos;s War Room
              </li>
            </ul>
          </div>
        </div>
      </ContentSlide>

      {/* ── The political-health nexus — network slide ── */}
      <div className="h-full w-full relative overflow-hidden bg-[var(--bg-primary)] flex flex-col p-12 pt-10"
        data-notes="What you're seeing is a network of 363 podcast channels that discuss health and vaccine topics. Each node is a channel, sized by how much health content it produces. We computed semantic similarity across 51,000 transcript segments using TF-IDF — so channels are connected not by who links to whom, but by who *sounds like* whom when talking about health. The algorithm detected six distinct ecosystems. The US/CA Right-Wing Ecosystem in blue — Alex Jones, Bannon's War Room, Dana Loesch, Charlie Kirk, Megyn Kelly — is the largest cluster and produces the most health content by far. Alex Jones alone has over 3,000 health segments. These are not health shows. They're political shows that have become the dominant source of health discourse in this media landscape. The Alternative Health cluster in green — Mercola, Dr. Hyman, Huberman Lab, Wise Traditions — sits adjacent. They share some language with the right-wing ecosystem, and that's where the pipeline runs: alternative health framing gets picked up and amplified by political shows with much larger audiences. The Mainstream & Progressive Ecosystem in orange — CNN, NPR, Meet the Press, MeidasTouch — discusses health too, but in fundamentally different ways. The Canadian Ecosystem in red and the Québec Ecosystem in purple form their own clusters, reflecting distinct national media landscapes. And then there's the Long-form cluster — Joe Rogan, Modern Wisdom, Shawn Ryan — which bridges multiple worlds. The key insight: political media IS health media. The biggest nodes on this network are not doctors or health experts. They're political commentators. And the audience doesn't distinguish."
      >
        <div className="accent-line w-full absolute top-0 left-0 right-0" />
        <div className="mb-4 pb-3 border-b border-[var(--border-color)]">
          <span className="section-prefix text-lg uppercase tracking-widest" />
          <span className="text-[var(--accent-primary)] text-lg uppercase tracking-widest opacity-60">
            The Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mt-2">
            Political media <span className="text-[#1E88E5]">IS</span> health media
          </h2>
        </div>
        <div className="flex flex-1 min-h-0 gap-6">
          <div className="flex-1 min-w-0 flex items-center justify-center">
            <img
              src={`${IMG}/network.png`}
              alt="Channel similarity network showing six podcast ecosystems clustered by shared health discourse"
              className="object-contain max-h-full max-w-full"
            />
          </div>
          <div className="w-[28%] flex flex-col justify-center text-[var(--text-secondary)] space-y-4">
            <p className="text-lg leading-relaxed">
              Each node is a podcast channel. Size reflects how often it discusses health topics. Channels are connected when they discuss health in <strong className="text-[var(--text-primary)]">semantically similar ways</strong>.
            </p>
            <p className="text-lg leading-relaxed">
              Six ecosystems emerge: the <strong className="text-[#1E88E5]">US/CA right-wing political show ecosystem</strong> produces the most health content.
            </p>
            <p className="text-lg leading-relaxed">
              <strong className="text-[#43A047]">Alternative health</strong> channels sit adjacent, bridging into political media with larger reach.
            </p>
            <p className="text-sm text-[var(--text-tertiary)] mt-4">
              363 channels, 51K segments. Louvain clustering, ForceAtlas2 layout.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-10 py-4 border-t border-[var(--border-color)] bg-[var(--bg-primary)]/90">
          <span className="text-lg text-[var(--text-tertiary)] font-medium tracking-wide">abridgman.ca</span>
        </div>
      </div>

      {/* ── What they're actually saying — topics + audio clips ── */}
      <div
        data-notes="Play the clips. Alex Jones: 'Low end, vaccines causing half the autism... thousand percent increase.' Megyn Kelly with Dr Hyman: 'toxic stew... mercury or aluminum... Made perfect sense to me.' These are not fringe — these are among the most-listened-to podcasts in North America. The topic modeling confirms: vaccines and autism is the single largest cluster. Health discourse is inseparable from political identity (RFK/CDC cluster). Pharma, fluoride, detox all woven into the same ideological package."
        className="h-full w-full relative overflow-hidden bg-[var(--bg-primary)] grid-bg flex flex-col p-12 pt-10"
      >
        <div className="accent-line w-full absolute top-0 left-0 right-0" />
        <div className="mb-4 pb-3 border-b border-[var(--border-color)]">
          <span className="text-[var(--accent-primary)] text-lg uppercase tracking-widest opacity-60">
            <span className="opacity-60">{"// "}</span>The Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mt-2">
            What they&apos;re actually saying
          </h2>
        </div>

        <div className="flex flex-1 min-h-0 items-center justify-center">
          <div className="w-full max-w-3xl flex flex-col gap-8">
            {[
              {
                file: 'clip-alex-jones.mp3',
                speaker: 'Alex Jones',
                show: 'The Alex Jones Show',
                date: 'Jun 30, 2025',
                quote: '\u201CLow end, we\u2019re talking like vaccines causing half the autism... a thousand percent increase in autism.\u201D',
                img: 'channels/the-alex-jones-show-infowars-com.jpg',
                color: 'var(--accent-tertiary)',
              },
              {
                file: 'clip-megyn-kelly.mp3',
                speaker: 'Megyn Kelly & Dr. Mark Hyman',
                show: 'The Megyn Kelly Show',
                date: '2025',
                quote: '\u201CThe toxic stew... mercury or aluminum should also be factored into that discussion. Made perfect sense to me.\u201D',
                img: 'channels/the-megyn-kelly-show.jpg',
                color: 'var(--accent-secondary)',
              },
            ].map((clip, i) => (
              <div
                key={i}
                className="slide-card p-6 flex gap-5 items-start animate-slide-up"
                style={{ animationDelay: `${i * 0.15}s`, borderLeftWidth: '3px', borderLeftColor: clip.color }}
              >
                <img
                  src={`${IMG}/${clip.img}`}
                  alt={clip.speaker}
                  className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="text-xl font-bold text-[var(--text-primary)]">{clip.speaker}</p>
                    <span className="text-base text-[var(--text-tertiary)]">{clip.date}</span>
                  </div>
                  <p className="text-lg text-[var(--text-secondary)] italic leading-relaxed mb-4">{clip.quote}</p>
                  {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                  <audio controls preload="none" className="w-full h-8 opacity-80">
                    <source src={`/presentations/2026-02-20-public-health-day/audio/${clip.file}`} type="audio/mpeg" />
                  </audio>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-10 py-4 border-t border-[var(--border-color)] bg-[var(--bg-primary)]/90">
          <span className="text-lg text-[var(--text-tertiary)] font-medium tracking-wide">abridgman.ca</span>
        </div>
      </div>

      {/* ── The temporal dimension ── */}
      <div
        data-notes="This timeline shows the full year of monitoring — February 2025 through February 2026. Top panel: total volume of health/vaccine transcript segments per week across all 613 channels. Bottom panel: breakdown by topic. It's event-driven, not steady-state. Largest spike: September 2025, RFK confirmed as HHS Secretary — volume nearly tripled. Measles outbreaks triggered more anti-vaccine content, not less. Fluoride executive order and pharma tariffs each reactivated dormant topics overnight. Every policy moment becomes a narrative opportunity. Your response window is hours, not weeks."
        className="h-full w-full relative overflow-hidden bg-[var(--bg-primary)] flex flex-col p-12 pt-10"
      >
        <div className="accent-line w-full absolute top-0 left-0 right-0" />
        <div className="mb-4 pb-3 border-b border-[var(--border-color)]">
          <span className="text-[var(--accent-primary)] text-lg uppercase tracking-widest opacity-60">
            <span className="opacity-60">{"// "}</span>The Ecosystem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mt-2">
            Chronic and acute
          </h2>
        </div>
        <div className="flex-1 min-h-0 flex items-center justify-center">
          <img
            src={`${IMG}/timeline_events.png`}
            alt="Event-driven timeline showing health discussion spikes around RFK confirmation, measles outbreaks, and policy announcements"
            className="object-contain max-h-full max-w-full rounded-lg"
          />
        </div>
        <p className="text-sm text-[var(--text-tertiary)] text-center mt-2">
          51,302 segments from 613 channels (Feb 2025–Feb 2026). Source: MEO podcast monitoring.
        </p>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-10 py-4 border-t border-[var(--border-color)] bg-[var(--bg-primary)]/90">
          <span className="text-lg text-[var(--text-tertiary)] font-medium tracking-wide">abridgman.ca</span>
        </div>
      </div>

      {/* ── The ecosystem at scale — what the literature says ── */}
      <ContentSlide
        category="The Ecosystem"
        title="The ecosystem at scale"
        footerText="abridgman.ca"
        data-notes="Key literature findings. (1) Allen et al: misinfo is ~1% of consumption but its effects are outsized — it's not about volume, it's about impact in key moments. (2) Asymmetric polarization: vulnerability is concentrated on one side, not evenly distributed — this is consistent across multiple studies and countries. (3) Tokita: information shapes community structure, not just vice versa — polarized ecosystems reorganize social networks through information cascades. (4) Krause: the ecosystem for science communication is now fragmented, platformized, algorithmically curated — scientists are competing with influencers for attention. References: Allen et al. 2020, Tokita et al. 2021, Krause et al. 2025."
      >
        <BulletList
          items={[
            <span key="1">Misinfo is <strong>~1% of consumption</strong> but outsized effects</span>,
            <span key="2">Ecosystem is <strong>asymmetrically polarized</strong></span>,
            <span key="3">Polarization <strong>reorganizes social networks</strong></span>,
            <span key="4">Fact and expert-based communication has <strong>fundamentally changed</strong></span>,
          ]}
        />
      </ContentSlide>

      {/* ── What we find in Canada ── */}
      <ContentSlide
        category="The Ecosystem"
        title="What we find in Canada"
        footerText="abridgman.ca"
        data-notes="Four MEO/CDMRN findings. (1) Meta blocked news in response to the Online News Act — journalism visibility collapsed on the country's largest platform. (2) Political influencers outpaced parties and traditional media in election content volume during 2025. (3) Tenet Media case: Russian government funding Canadian influencers to launder geopolitical narratives. (4) AI-generated fake local news sites proliferated during the 2025 election."
      >
        <BulletList
          items={[
            <span key="1">Journalism visibility collapse</span>,
            <span key="2">Influencers now <strong>outpace parties and media</strong> in elections</span>,
            <span key="3">Foreign actors interested in manipulating Canadian/Western politics (e.g. Tenet Media)</span>,
            <span key="4">AI-generated fake Canadian news sites used for grift</span>,
          ]}
        />
      </ContentSlide>

      {/* ── The harm is measurable ── */}
      <ContentSlide
        category="The Ecosystem"
        title="The harm is measurable"
        footerText="abridgman.ca"
        data-notes="Three harm findings: (1) Loomba et al: a single exposure to vaccine misinformation reduced vaccination intent by 6.4 percentage points — that's clinically significant from ONE exposure. (2) Southwell: health misinfo exposure follows existing health disparities — lower health literacy = more exposure AND more affected. It widens the gap. (3) CMA/Abacus survey: Canadians who followed AI health advice were 5x more likely to experience harm than those who did not. Protective factors: trust in scientists is the #1 predictor of resistance to health misinformation across countries (Roozenbeek et al.). Analytic thinking — not intelligence per se, but reflective engagement with claims. Traditional media use — reliance on social media for news increases susceptibility. References: Loomba et al. 2021, Southwell et al. 2023, CMA/Abacus 2025, Roozenbeek et al. 2021."
      >
        <div className="grid grid-cols-1 gap-8 mt-4 flex-1">
          <div>
            <BulletList
              items={[
                <span key="1">COVID-19 misinfo led to lower bound <strong>2,800 excess deaths</strong> and <strong>$300M</strong> in hospital costs in Canada</span>,
                <span key="2">Upper limit: one exposure produces -6.4 pp vaccination intent</span>,
                <span key="3">Exposure <strong>follows health disparities</strong></span>,
                <span key="4">AI health advice → <strong>5× more likely to experience harm</strong></span>,
              ]}
            />
          </div>
        </div>
        <Citation refs={[
          'Council of Canadian Academies, Fault Lines: Socioeconomic Impacts of Science and Health Misinformation, 2023',
          'Loomba et al., Measuring the Impact of COVID-19 Vaccine Misinformation on Vaccination Intent, 2021',
          'Southwell et al., Misinformation as a Misunderstood Challenge to Public Health, 2023',
          'Roozenbeek et al., Susceptibility to Misinformation about COVID-19 around the World, 2021',
          'CMA / Abacus Data, Health and Media Tracking Survey, 2025',
        ]} />
      </ContentSlide>

      {/* ══════════════════════════════════════════════════
          ACT 3 — THE PROBLEM: Why is this so hard to fix?
          ══════════════════════════════════════════════════ */}

      <SectionSlide
        title="Why is this so hard to fix?"
      />

      {/* ── The communication problem — who owns the conversation ── */}
      <div
        data-notes="Pivot to the communication problem. This is social media data — posts about health and vaccines from Canadian politicians, news media, and influencers. Left: share of posts. Right: share of engagement. Influencers produce ~75% of posts. But engagement — over 95%. News media and politicians are barely visible. Political leadership simply isn't there on these issues. A single influencer post about vaccines gets more engagement than an entire week of Health Canada communications. You are not competing on a level playing field. The platforms are structurally tilted toward influencer content. This is why the harm matters — because the people with the megaphones are not the people with the evidence. Source: MEO digital trace monitoring, Jan 2025–Feb 2026."
        className="h-full w-full relative overflow-hidden bg-[var(--bg-primary)] flex flex-col p-12 pt-10"
      >
        <div className="accent-line w-full absolute top-0 left-0 right-0" />
        <div className="mb-4 pb-3 border-b border-[var(--border-color)]">
          <span className="text-[var(--accent-primary)] text-lg uppercase tracking-widest opacity-60">
            <span className="opacity-60">{"// "}</span>The Problem
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mt-2">
            Who owns the conversation?
          </h2>
        </div>
        <div className="flex-1 min-h-0 flex items-center justify-center">
          <img
            src={`${IMG}/engagement_shares.png`}
            alt="Share of health/vaccine conversation: influencers dominate ~75% of volume and ~95% of engagement compared to news media and politicians"
            className="object-contain max-h-full max-w-full rounded-lg"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-10 py-4 border-t border-[var(--border-color)] bg-[var(--bg-primary)]/90">
          <span className="text-lg text-[var(--text-tertiary)] font-medium tracking-wide">abridgman.ca</span>
        </div>
      </div>

      {/* ── Why conventional approaches fall short ── */}

      {/* ── What we thought would work ── */}
      <ContentSlide
        category="The Problem"
        title="The conventional wisdom"
        footerText="abridgman.ca"
        data-notes="Three conventional approaches and why they fall short. (1) Fact-checking: Carey et al show effects decay within days. You need ongoing treatment, not a one-time intervention. It's like a single dose of antibiotics for a chronic infection. (2) Platform moderation: Broniatowski et al show Facebook's vaccine policies were largely ineffective — the architecture of the platform undermines moderation efforts. Content migrates, reframes, goes to other platforms. (3) Media literacy: Blair et al meta-analysis — majority of RCTs show no effect. The interventions experts prefer most have the weakest evidence base. This is the uncomfortable truth: the field's conventional wisdom doesn't hold up well. References: Carey et al. 2022, Broniatowski et al. 2023, Blair et al. 2024."
      >
        <div className="grid grid-cols-3 gap-6 mt-4 flex-1">
          <div className="slide-card p-5 border-t-2 border-[var(--text-tertiary)]">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Just fact check</h3>
            <div className="mt-4 p-3 rounded bg-[var(--bg-secondary)]">
              <p className="text-xl text-[var(--text-secondary)]">Effects <strong>decay within days</strong> and fail to reach the most convinced</p>
            </div>
          </div>
          <div className="slide-card p-5 border-t-2 border-[var(--text-tertiary)]">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Moderate platforms</h3>
            <div className="mt-4 p-3 rounded bg-[var(--bg-secondary)]">
              <p className="text-xl text-[var(--text-secondary)]">Vaccine policies were <strong>largely ineffective and the algorithmic incentives are simply not there</strong></p>
            </div>
          </div>
          <div className="slide-card p-5 border-t-2 border-[var(--text-tertiary)]">
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Teach Media Literacy</h3>
            <div className="mt-4 p-3 rounded bg-[var(--bg-secondary)]">
              <p className="text-xl text-[var(--text-secondary)]"><strong>Majority of RCTs show no effect</strong> and places enormous burden on individuals</p>
            </div>
          </div>
        </div>
      </ContentSlide>

      {/* ── The meta-finding ── */}
      <ContentSlide
        category="The Problem"
        title="The evidence-practice gap"
        footerText="abridgman.ca"
        data-notes="The key meta-finding from Blair et al and Altay et al. Experts systematically prefer interventions that are least studied or shown to be ineffective — there is a dramatic mismatch between what experts recommend and what the evidence supports. What HAS strong evidence: inoculation/prebunking (most consistent positive effects across studies), accuracy nudges (shift attention to veracity before sharing — simple and scalable), combination approaches (50-70% more effective than single interventions — Bak-Coleman et al.), and structural factors (explain 83% of variance in resilience across 18 democracies — Humprecht et al. — media systems, political polarization, trust in institutions). The elephant in the room: 96% of experts agree partisanship is the primary driver of misinformation belief, yet virtually no interventions target it directly. The problem is structural and political, not just informational. References: Blair et al. 2024, Altay et al. 2023, Humprecht et al. 2020, Bak-Coleman et al. 2022."
      >
        <div className="flex-1 flex flex-col justify-center">
          <HighlightBox variant="indigo">
            <p className="text-2xl leading-relaxed">
              Expert-preferred interventions <strong>don&apos;t align with the evidence</strong>.
            </p>
          </HighlightBox>
          <div className="grid grid-cols-2 gap-8 mt-8">
            <div>
              <p className="text-2xl font-bold text-[var(--accent-primary)] mb-3">What seems to work okay</p>
              <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
                <li><strong>Inoculation / prebunking</strong></li>
                <li><strong>Accuracy nudges</strong></li>
                <li><strong>Combination approaches</strong> (50-70% more effective)</li>
                <li><strong>Structural factors</strong> (83% of variance)</li>
              </ul>
            </div>
            <div>
              <p className="text-2xl font-bold text-[var(--accent-tertiary)] mb-3">The 🐘 in the room </p>
              <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
                <li><strong>Partisanship</strong> and strong ideological conviction</li>
                <li>How do you target it in a democracy?</li>
              </ul>
            </div>
          </div>
        </div>
      </ContentSlide>

      {/* ── The AI accelerant ── */}
      <ContentSlide
        category="The Problem"
        title="The AI accelerant"
        footerText="abridgman.ca"
        data-notes="Dual framing: threat and tool. Threat side: 40M Americans use ChatGPT daily for health questions — it may already be the largest 'health provider' in North America. AI wellness influencers, personalized supplement recommendations, AI-generated 'medical advice' at scale. Misinformation becomes personalized — tailored to your specific fears and health anxieties. The trust gap: people use it despite not trusting it — convenience beats skepticism every time. Tool side: real-time monitoring — AI can track emerging health misinfo faster than any human analyst team. Prebunking at scale — personalized inoculation messages timed to emerging narratives. Accessible science communication — translating research into plain language, multiple formats, multiple languages. The key question for the room: who builds the health AI, and with what incentives? Right now it's tech companies optimizing for engagement, not health outcomes. References: CMA/Abacus 2025, OpenAI Health Report 2025, ECRI 2026."
      >
        <div className="grid grid-cols-2 gap-8 mt-4 flex-1">
          <div>
            <p className="text-2xl font-bold text-[var(--accent-tertiary)] mb-4">Threat Multiplier</p>
            <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
              <li><strong>40M daily</strong> health queries to ChatGPT</li>
              <li><strong>Potential to produce personalized</strong> misinformation at scale</li>
              <li>Used more and more <strong>despite low trust</strong></li>
            </ul>
          </div>
          <div>
            <p className="text-2xl font-bold text-[var(--accent-primary)] mb-4">Potential Tool</p>
            <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
              <li><strong>Real-time monitoring</strong></li>
              <li><strong>Prebunking at scale</strong></li>
              <li><strong>Accessible science communication</strong></li>
            </ul>
          </div>
        </div>
      </ContentSlide>

      {/* ══════════════════════════════════════════════════
          ACT 4 — THE RESPONSE: What can we do?
          ══════════════════════════════════════════════════ */}

      <SectionSlide
        title="What can we do?"
      />

      {/* ── The public health parallel ── */}
      <ContentSlide
        category="The Treatment"
        title="A public health approach to information"
        footerText="abridgman.ca"
        data-notes="The central metaphor for this audience — you already know these tools. Left column: disease control tools they use every day. Right column: exact information ecosystem parallels. Vaccination = prebunking (inoculate before exposure). Surveillance = monitoring (track what's circulating in real time). Treatment = fact-checking (correct misinformation when it appears). Combination = multi-level (individual + platform + policy — no single tool works alone). Chronic management = sustained (effects decay, need boosters — just like vaccines). Acceptable risk thresholds = tolerable levels of misinfo — in public health you don't aim to eliminate all disease, you aim to keep it below a threshold where the system can cope. Same with misinformation: zero misinfo is neither achievable nor desirable in a democracy. The goal is resilience — keeping exposure below the level where it causes measurable harm, just like acceptable infection rates. The amber box: this is structurally identical to what you already do. The tools map directly. You don't need a new paradigm — you need to apply the one you already have. References: Lewandowsky & van der Linden 2021, Bode & Vraga 2018, Kozyreva et al. 2024."
      >
        <div className="grid grid-cols-2 gap-8 mt-2">
          <div>
            <p className="text-2xl font-bold text-[var(--accent-primary)] mb-4">Disease Control</p>
            <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
              <li><strong>Vaccination</strong> — primary prevention</li>
              <li><strong>Surveillance</strong> — track spread</li>
              <li><strong>Treatment</strong> — manage infections</li>
              <li><strong>Combination therapy</strong> — no single tool works</li>
              <li><strong>Chronic management</strong> — ongoing, not one-time</li>
              <li><strong>Acceptable risk thresholds</strong> — not zero disease</li>
            </ul>
          </div>
          <div>
            <p className="text-2xl font-bold text-[var(--accent-secondary)] mb-4">Information Ecosystem</p>
            <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
              <li><strong>Prebunking</strong> — inoculate before exposure</li>
              <li><strong>Monitoring</strong> — track what&apos;s circulating</li>
              <li><strong>Contact and questioning</strong> — correct misinformation</li>
              <li><strong>Multi-level intervention</strong> — individual + platform + policy</li>
              <li><strong>Sustained effort</strong> — effects decay, need boosters</li>
              <li><strong>Tolerable levels of misinfo</strong> — resilience, not elimination</li>
            </ul>
          </div>
        </div>
      </ContentSlide>

      {/* ── The practitioner's toolkit ── */}
      <ContentSlide
        category="The Treatment"
        title="What can be done"
        footerText="abridgman.ca"
        data-notes="Four audience-specific cards — talk through each one. Communicators: prebunk don't just debunk — lead with the manipulation technique, not the myth (Vivion et al. 2022). Fill the vacuum — if you don't produce accessible science, Mercola and Jones will fill it for you. Use visuals — visual corrections outperform text by a wide margin (Walter et al. 2020). Repeat — effects decay in days, not months. Boosters work for information too. Researchers: think about circulation — your findings land in a contested, algorithmically curated space, not a vacuum. Deficit model is dead — more facts alone don't fix this. Partner across disciplines — epidemiology + media studies + platform governance. Your credibility matters — trust in scientists is the #1 protective factor (Roozenbeek et al.). Citizens: see something say something — peer corrections reduce misperceptions more than institutional corrections (Bode & Vraga 2018). Friction is your friend — pause before sharing. Diversify your information diet. Professionals: the structural levers are policy choices — platform regulation, journalism funding, public health communication infrastructure. Demand evidence-based interventions, not just the ones that feel good. Build bridges — the health system and the information system are the same system now."
      >
        <div className="grid grid-cols-2 gap-6 mt-4 flex-1">
          <div className="slide-card p-5 border-t-2 border-[var(--accent-primary)]">
            <h3 className="text-2xl font-bold text-[var(--accent-primary)] mb-3">Communicators</h3>
            <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
              <li><strong>Fill the vacuum</strong></li>
              <li><strong>Tell visual stories</strong></li>
              <li><strong>Repeat often</strong> — effects decay fast</li>
            </ul>
          </div>
          <div className="slide-card p-5 border-t-2 border-[var(--accent-secondary)]">
            <h3 className="text-2xl font-bold text-[var(--accent-secondary)] mb-3">Researchers</h3>
            <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
              <li><strong>Think about circulation</strong></li>
              <li><strong>Deficiency model is dead</strong></li>
              <li><strong>Your credibility matters</strong></li>
            </ul>
          </div>
          <div className="slide-card p-5 border-t-2 border-[var(--accent-tertiary)]">
            <h3 className="text-2xl font-bold text-[var(--accent-tertiary)] mb-3">Citizens</h3>
            <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
              <li><strong>See something, say something</strong></li>
              <li><strong>Friction is your friend</strong></li>
              <li><strong>Diversify</strong> your information diet</li>
            </ul>
          </div>
          <div className="slide-card p-5 border-t-2 border-[var(--text-tertiary)]" style={{ borderTopColor: 'var(--text-secondary)' }}>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3">Professionals</h3>
            <ul className="space-y-3 text-xl text-[var(--text-secondary)]">
              <li><strong>Structural levers (83%) policy choices</strong></li>
              <li><strong>Demand evidence-based interventions</strong></li>
              <li><strong>Build bridges</strong></li>
            </ul>
          </div>
        </div>
      </ContentSlide>

      {/* ── Closing reflection ── */}
      <div
        data-notes="Let this land — pause after reading the quote. The key message: you are already participants in the information ecosystem whether you know it or not. Every paper you publish, every interview you give, every social media post — it enters the same ecosystem as Alex Jones and Dr. Mercola. The question is whether you engage with that reality strategically or pretend it doesn't exist. You don't get to opt out of the information ecosystem. But you can choose to participate deliberately."
        className="h-full w-full relative overflow-hidden bg-[var(--bg-secondary)] grid-bg flex flex-col items-center justify-center px-16"
      >
        <div className="max-w-3xl text-center">
          <p className="text-lg uppercase tracking-widest text-[var(--accent-primary)] opacity-60 mb-8 animate-fade-in">
            <span className="opacity-60">{"// "}</span>The Treatment
          </p>
          <p className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight animate-slide-up">
            &ldquo;The information ecosystem is a public health issue. And public health professionals are information ecosystem participants.&rdquo;
          </p>
          <div className="accent-line w-32 mx-auto mt-8 animate-fade-in stagger-3" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-10 py-4 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/90">
          <span className="text-lg text-[var(--text-tertiary)] font-medium tracking-wide">abridgman.ca</span>
        </div>
      </div>

      {/* ── Thank you ── */}
      <ThankYouSlide
        title="Thank you"
        contacts={[
          { name: 'Aengus Bridgman', email: 'aengus.bridgman@mcgill.ca' },
          { name: 'Media Ecosystem Observatory', email: 'meo.ca' },
          { name: 'Centre for Media, Technology and Democracy', email: 'mediatechdemocracy.com' },
        ]}
      />
    </Presentation>
  );
}
