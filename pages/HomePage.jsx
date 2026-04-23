import React from "react";
import AnimatedCount from "../components/AnimatedCount";
import Mesh3D from "../components/Mesh3D";

export default function HomePage() {
  return (
    <main id="home">
      <div className="space-layer" aria-hidden="true">
        <div className="space-stars"></div>
        <span className="space-orb circle"></span>
        <span className="space-orb square"></span>
        <span className="space-orb pill"></span>
        <span className="space-wire w1"></span>
        <span className="space-wire w2"></span>
        <span className="space-wire w3"></span>
      </div>

      <section>
        <div className="container hero-grid">
          <div className="hero-left reveal">
            <div className="badge">Open to new opportunities</div>
            <h1 className="hero-title">
              Hi, I&apos;m <span className="gradient">Jayasurya</span>
            </h1>
            <p className="hero-copy">
              I work in marketing, focusing on both strategy and creativity. I&apos;ve worked with different brands across industries,
              managing projects and building campaigns from idea to execution. I&apos;m interested in content and storytelling, and my love
              for cinema influences how I approach visuals and campaigns.
            </p>
            <p className="hero-copy">I believe marketing should do more than reach people. It should connect with them.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#portfolio">
                Explore Portfolio
              </a>
              <a className="button button-secondary" href="#contact">
                Instagram
              </a>
            </div>

            <div className="contact-card reveal delay-1" style={{ marginTop: "1.5rem" }}>
              <div className="contact-icon">⚡</div>
              <div>
                <div className="contact-label">Focus</div>
                <div className="contact-value">
                  Account handling, content creation, campaign planning, and storytelling execution.
                </div>
              </div>
            </div>
          </div>

          <aside className="hero-right reveal delay-1 home-3d-zone">
            <div className="mn-box profile-showcase">
              <span className="profile-chip chip-one" aria-hidden="true">Visual Storyteller</span>
              <span className="profile-chip chip-two" aria-hidden="true">Brand Creative</span>
              <div className="profile-frame">
                <img className="profile-image" src="/assets/profile.png" alt="Jayasurya profile" loading="eager" decoding="async" />
              </div>
            </div>
            <div className="stats-grid">
              <div className="stat">
                <AnimatedCount target={20} suffix="+" />
                <span>Brands</span>
              </div>
              <div className="stat">
                <strong>3+</strong>
                <span>Years of Experience</span>
              </div>
              <div className="stat">
                <strong>&#x221E;</strong>
                <span>Creative Idea</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <div className="divider"></div>

      <section id="about">
        <div className="container">
          <Mesh3D hueOffset={200} size="small" position="top-right" />
          <div className="section-head reveal">
            <div className="section-label">About</div>
            <h2 className="section-title">
              Hi, I&apos;m <em>Jayasurya.</em>
            </h2>
            <p className="section-copy">
              I work in marketing with a balance of strategic thinking and creative execution. I manage projects and campaigns end-to-end
              and keep execution aligned with client goals.
            </p>
          </div>

          <div className="grid-2">
            <article className="panel reveal">
              <p className="quote">Marketing should do more than reach people. It should connect with them.</p>
              <ul className="check-list">
                <li>I&apos;ve worked with different brands across industries from idea to execution.</li>
                <li>I focus on clear account handling, planning, and campaign delivery.</li>
                <li>I combine storytelling with practical performance-focused execution.</li>
              </ul>
            </article>
            <article className="panel reveal delay-1" id="integrations">
              <div className="section-label">Integrations</div>
              <p className="section-copy" style={{ marginTop: 0 }}>
                The strengths I bring into every project and team:
              </p>
              <div
                className="skills-grid"
                style={{
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  marginTop: "0.85rem",
                }}
              >
                <div className="skill-card">
                  <div className="skill-icon">⚡</div>
                  <h3>Quick Learner</h3>
                  <p>Learns fast and adapts to new tools and trends.</p>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">🤝</div>
                  <h3>Team Player</h3>
                  <p>Works well with teams and builds strong collaboration.</p>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">🔁</div>
                  <h3>Adaptable</h3>
                  <p>Handles change smoothly and stays flexible.</p>
                </div>
                <div className="skill-card">
                  <div className="skill-icon">🎯</div>
                  <h3>Accountable</h3>
                  <p>Takes ownership and delivers results on time.</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* <section id="experience">
        <div className="container">
          <Mesh3D hueOffset={280} size="small" position="bottom-left" />
          <div className="section-head reveal">
            <div className="section-label">Experience</div>
            <h2 className="section-title">
              What I <em>do.</em>
            </h2>
            <p className="section-copy">
              Hands-on delivery across account handling, campaign planning, production coordination, and performance execution.
            </p>
          </div>
          <div className="stack-grid">
            <article className="exp-card reveal">
              <h3>Client Management</h3>
              <p>Managed client communication, expectation setting, and day-to-day execution alignment across industries.</p>
              <div style={{ marginTop: "0.7rem" }}>
                <span className="tag">Account Handling</span>
              </div>
            </article>
            <article className="exp-card reveal delay-1">
              <h3>Campaign Planning</h3>
              <p>Built campaign structures from objective mapping to rollout, with clear milestone tracking and delivery ownership.</p>
              <div style={{ marginTop: "0.7rem" }}>
                <span className="tag">Planning</span>
              </div>
            </article>
            <article className="exp-card reveal delay-2">
              <h3>Execution &amp; Optimization</h3>
              <p>Executed campaign assets, ad workflows, and content pipelines while optimizing performance for better outcomes.</p>
              <div style={{ marginTop: "0.7rem" }}>
                <span className="tag">Execution</span>
              </div>
            </article>
          </div>
        </div>
      </section> */}
      <div className="divider"></div>

      <section id="skills">
        <div className="container">
          <Mesh3D hueOffset={130} size="small" position="top-right" />
          <div className="section-head reveal">
            <div className="section-label">Skills</div>
            <h2 className="section-title">
              Core <em>Capabilities.</em>
            </h2>
          </div>
          <div className="stack-grid">
            <article className="skill-card reveal">
              <div className="skill-icon">📈</div>
              <h3>Marketing &amp; Strategy</h3>
              <p>Digital marketing, campaign planning, business development, and client handling.</p>
            </article>
            <article className="skill-card reveal delay-1">
              <div className="skill-icon">🎯</div>
              <h3>Performance Marketing</h3>
              <p>Meta Ads, Google Ads, YouTube Ads, and lead generation campaigns.</p>
            </article>
            <article className="skill-card reveal delay-2">
              <div className="skill-icon">🎬</div>
              <h3>Content &amp; Creativity</h3>
              <p>Content creation, copywriting, social media management, and shoot planning.</p>
            </article>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="tools">
        <div className="container">
          <Mesh3D hueOffset={45} size="small" position="bottom-right" />
          <div className="section-head reveal">
            <div className="section-label">Tools</div>
            <h2 className="section-title">
              Tools I <em>use.</em>
            </h2>
          </div>
          <div className="tool-grid reveal">
            <div className="tool-pill">
              <img src="/assets/tools/meta.png" alt="Meta Ads logo" loading="lazy" decoding="async" />
              <span>Meta Ads</span>
            </div>
            <div className="tool-pill">
              <img src="/assets/tools/canva.png" alt="Canva logo" loading="lazy" decoding="async" />
              <span>Canva</span>
            </div>
            <div className="tool-pill">
              <img src="/assets/tools/chatgpt.png" alt="ChatGPT logo" loading="lazy" decoding="async" />
              <span>ChatGPT</span>
            </div>
            <div className="tool-pill">
              <img src="/assets/tools/gemini.png" alt="Gemini logo" loading="lazy" decoding="async" />
              <span>Gemini</span>
            </div>
            <div className="tool-pill">
              <img src="/assets/tools/cladue.png" alt="Claude logo" loading="lazy" decoding="async" />
              <span>Claude</span>
            </div>
            <div className="tool-pill">
              <img src="/assets/tools/flied.png" alt="Higgsfield logo" loading="lazy" decoding="async" />
              <span>Higgsfield</span>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="portfolio">
        <div className="container">
          <Mesh3D hueOffset={20} size="small" position="top-left" />
          <div className="section-head reveal">
            <h2 className="section-title">
              20+ <em>Brands</em>
            </h2>
            <p className="section-copy">Key client work and services delivered across campaigns, content, account handling, and growth.</p>
          </div>

          <div className="brand-grid">
            <article className="brand-card highlight reveal">
              <div className="brand-logo-wrap">
                <img src="/assets/brands/royal.png" alt="Royal Enfield logo" className="brand-logo" loading="lazy" decoding="async" />
              </div>
              <h3>Royal Enfield</h3>
              <div className="chips">
                <span className="chip">Account Handling</span>
                <span className="chip">Lead Generation Campaigns</span>
                <span className="chip">Ads</span>
              </div>
            </article>

            <article className="brand-card reveal delay-1">
              <div className="brand-logo-wrap">
                <img src="/assets/brands/Madras Coffee House.png" alt="Madras Coffee House logo" className="brand-logo" loading="lazy" decoding="async" />
              </div>
              <h3>Madras Coffee House</h3>
              <div className="chips">
                <span className="chip">Account &amp; Client Management</span>
                <span className="chip">Content Creation</span>
                <span className="chip">Influencer Marketing Campaigns</span>
              </div>
            </article>

            <article className="brand-card reveal delay-2">
              <div className="brand-logo-wrap">
                <img src="/assets/brands/gem.png" alt="Gem Hospital logo" className="brand-logo" loading="lazy" decoding="async" />
              </div>
              <h3>Gem Hospital</h3>
              <div className="chips">
                <span className="chip">Account &amp; Client Management</span>
                <span className="chip">Content Creation</span>
                <span className="chip">Meta Ad Campaigns</span>
              </div>
            </article>

            <article className="brand-card reveal">
              <div className="brand-logo-wrap">
                <img src="/assets/brands/surya.png" alt="Sooriya Hospital logo" className="brand-logo" loading="lazy" decoding="async" />
              </div>
              <h3>Sooriya Hospital</h3>
              <div className="chips">
                <span className="chip">Content Planning</span>
                <span className="chip">Video Production</span>
              </div>
            </article>

            <article className="brand-card reveal delay-1">
              <div className="brand-logo-wrap">
                <img src="/assets/brands/healing.png" alt="Healing Earth logo" className="brand-logo" loading="lazy" decoding="async" />
              </div>
              <h3>Healing Earth</h3>
              <div className="chips">
                <span className="chip">Account &amp; Client Management</span>
                <span className="chip">Content Creation</span>
                <span className="chip">Lead Generation Campaigns</span>
              </div>
            </article>

            <article className="brand-card reveal delay-2">
              <div className="brand-logo-wrap">
                <img src="/assets/brands/kice.png" alt="KIC's Ice Cream logo" className="brand-logo" loading="lazy" decoding="async" />
              </div>
              <h3>KIC&apos;s Ice Cream</h3>
              <div className="chips">
                <span className="chip">Account &amp; Client Management</span>
              </div>
            </article>

            <article className="brand-card reveal">
              <div className="brand-logo-wrap">
                <img src="/assets/brands/Hindustan College.png" alt="Hindustan College logo" className="brand-logo" loading="lazy" decoding="async" />
              </div>
              <h3>Hindustan College, Padur</h3>
              <div className="chips">
                <span className="chip">Account Handling</span>
                <span className="chip">Content Creation</span>
                <span className="chip">Admission Campaigns</span>
              </div>
            </article>

            <article className="brand-card reveal delay-1">
              <div className="brand-logo-wrap">
                <img src="/assets/brands/srihome.png" alt="SriHome logo" className="brand-logo" loading="lazy" decoding="async" />
              </div>
              <h3>SriHome Homecare Consumables</h3>
              <div className="chips">
                <span className="chip">Account Handling</span>
                <span className="chip">Content Creation</span>
                <span className="chip">Phone &amp; WhatsApp</span>
              </div>
            </article>

            <article className="brand-card reveal delay-2">
              <div className="brand-logo-wrap" style={{ fontSize: "1.6rem", fontWeight: "800", color: "var(--neon-blue)", opacity: 0.8 }}>
                +
              </div>
              <h3>More Brand Work</h3>
              <div className="chips">
                <span className="chip">20+ Brands</span>
                <span className="chip">Cross-Industry</span>
                <span className="chip">Campaign Execution</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="creative">
        <Mesh3D hueOffset={170} size="small" position="bottom-left" />
        <div className="container grid-2">
          <article className="panel reveal">
            <div className="section-label">Cinema &amp; Storytelling</div>
            <h2 className="section-title">
              Visual thinking for <em>better content.</em>
            </h2>
            <div className="timeline" style={{ marginTop: "0.9rem" }}>
              <p>I&apos;ve worked on client shoots, contributing to ideas, direction, and execution.</p>
              <p>
                My interest in cinema helps me think visually and create content that feels natural, engaging, and connects with people.
              </p>
            </div>
          </article>

          <article className="panel reveal delay-1">
            <div className="section-label">Creative Lens</div>
            <h2 className="section-title">
              Story-first, <em>brand-aligned.</em>
            </h2>
            <p className="section-copy" style={{ marginTop: "0.9rem" }}>
              I approach each visual as part of a larger brand story. The objective is to keep content natural, engaging, and connected to
              campaign goals, not just aesthetically strong.
            </p>
            <div className="chips" style={{ marginTop: "1rem" }}>
              <span className="chip">Ideas</span>
              <span className="chip">Direction</span>
              <span className="chip">Execution</span>
              <span className="chip">Storytelling</span>
            </div>
          </article>
        </div>
      </section>

      <div className="divider"></div>

      <section id="approach">
        <div className="container">
          <Mesh3D hueOffset={280} size="small" position="bottom-left" />
          <div className="section-head reveal">
            <div className="section-label">Experience</div>
            <h2 className="section-title">
              What I <em>do.</em>
            </h2>
            <p className="section-copy">
              Hands-on delivery across account handling, campaign planning, production coordination, and performance execution.
            </p>
          </div>
          <div className="stack-grid">
            <article className="exp-card reveal">
              <h3>Client Management</h3>
              <p>Managed client communication, expectation setting, and day-to-day execution alignment across industries.</p>
              <div style={{ marginTop: "0.7rem" }}>
                <span className="tag">Account Handling</span>
              </div>
            </article>
            <article className="exp-card reveal delay-1">
              <h3>Campaign Planning</h3>
              <p>Built campaign structures from objective mapping to rollout, with clear milestone tracking and delivery ownership.</p>
              <div style={{ marginTop: "0.7rem" }}>
                <span className="tag">Planning</span>
              </div>
            </article>
            <article className="exp-card reveal delay-2">
              <h3>Execution &amp; Optimization</h3>
              <p>Executed campaign assets, ad workflows, and content pipelines while optimizing performance for better outcomes.</p>
              <div style={{ marginTop: "0.7rem" }}>
                <span className="tag">Execution</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="education">
        <div className="container">
          <Mesh3D hueOffset={110} size="small" position="bottom-right" />
          <div className="section-head reveal">
            <div className="section-label">Education &amp; Certifications</div>
            <h2 className="section-title">
              Background <em>Snapshot.</em>
            </h2>
          </div>
          <div className="edu-grid">
            <article className="edu-card reveal">
              <h3>Education</h3>
              <ul className="edu-list">
                <li>
                  <strong>B.Tech - Artificial Intelligence &amp; Data Science</strong>
                  <br />
                  Undergraduate degree blending technology with intelligent systems.
                </li>
                <li>
                  <strong>Diploma in Computer Science Engineering</strong>
                  <br />
                  Technical foundation in computing and systems.
                </li>
                <li>
                  <strong>CBSE Schooling</strong>
                  <br />
                  National curriculum board schooling.
                </li>
              </ul>
            </article>
            <article className="edu-card reveal delay-1">
              <h3>Certifications</h3>
              <ul className="edu-list">
                <li>
                  <strong>NASSCOM - Data Acquisition</strong>
                  <br />
                  Awarded Gold Rank for outstanding performance.
                </li>
                <li>
                  <strong>ICT Academy Learnathon</strong>
                  <br />
                  Completion of ICT Academy intensive learning program.
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="strengths">
        <div className="container">
          <Mesh3D hueOffset={355} size="small" position="top-left" />
          <div className="section-head reveal">
            <div className="section-label">Strengths</div>
            <h2 className="section-title">
              Personal <em>Strengths.</em>
            </h2>
          </div>
          <div className="strength-grid">
            <article className="strength-card reveal">
              <h3>Quick Learner</h3>
              <p>Learns fast and adapts to new tools and trends.</p>
            </article>
            <article className="strength-card reveal delay-1">
              <h3>Team Player</h3>
              <p>Works well with teams and builds strong collaboration.</p>
            </article>
            <article className="strength-card reveal delay-2">
              <h3>Adaptable</h3>
              <p>Handles change smoothly and stays flexible.</p>
            </article>
            <article className="strength-card reveal">
              <h3>Accountable</h3>
              <p>Takes ownership and delivers results on time.</p>
            </article>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section id="contact">
        <div className="container">
          <Mesh3D hueOffset={220} size="small" position="bottom-right" />
          <div className="section-head reveal">
            <div className="section-label">Contact</div>
            <h2 className="section-title">
              Let&apos;s <em>connect.</em>
            </h2>
            <p className="section-copy">Reach out for account handling, content, campaigns, or collaboration support.</p>
          </div>

          <div className="contact-grid">
            <a className="contact-card reveal" href="https://instagram.com/hustle_helios" target="_blank" rel="noreferrer">
              <div className="contact-icon">IG</div>
              <div>
                <div className="contact-label">Instagram</div>
                <div className="contact-value">hustle_helios</div>
              </div>
            </a>

            <a className="contact-card reveal delay-1" href="mailto:jayasurya1402@gmail.com">
              <div className="contact-icon">@</div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">jayasurya1402@gmail.com</div>
              </div>
            </a>

            <a className="contact-card reveal" href="tel:8072048389">
              <div className="contact-icon">TEL</div>
              <div>
                <div className="contact-label">Phone</div>
                <div className="contact-value">+91 80720 48389</div>
              </div>
            </a>

            <a className="contact-card reveal delay-1" href="https://wa.me/918072048389" target="_blank" rel="noreferrer">
              <div className="contact-icon">WA</div>
              <div>
                <div className="contact-label">WhatsApp</div>
                <div className="contact-value">+91 80720 48389</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
