"use client";

import { useEffect, useRef } from "react";

/* ─── RESUME DATA ─── */
const DATA = {
  name: "Malaiyappan S",
  role: "Cybersecurity Engineer",
  tagline: "B.Tech CSE · Cybersecurity · SRM IST",
  email: "malaiyappan.official@gmail.com",
  phone: "+91 9842287003",
  github: "https://github.com/Malaiyappan-STUX05",
  linkedin: "https://www.linkedin.com/in/malaiyappanssecurityprofessional/",
  stats: [
    { num: "8.41", lbl: "CGPA / 10" },
    { num: "5+", lbl: "Internships" },
    { num: "6+", lbl: "Projects" },
    { num: "3", lbl: "Certifications" },
  ],
  bio: [
    "I'm a <strong>Cybersecurity Engineer</strong> and final-year B.Tech student at <em>SRM Institute of Science and Technology</em>, specializing in threat detection, Blue Team operations, and cloud security.",
    "I've interned at <strong>Palo Alto Networks</strong>, <strong>Zscaler</strong>, <strong>Hack Secure</strong>, and the <strong>National Cybersecurity Research Council</strong>, building real-world skills in SIEM, SOAR, Zero Trust, and VAPT.",
    "I'm actively looking for <strong>full-time security roles</strong> where I can hunt threats, build detection pipelines, and make systems harder to break.",
  ],
  experience: [
    {
      date: "May 2025 – Jul 2025",
      company: "Palo Alto Networks (AICTE)",
      role: "Security Intern · Remote",
      desc: "Selected through AICTE Cybersecurity Cohort. Implemented Zero Trust security using PAN-OS, Cortex XSOAR, and Prisma Cloud — enhanced SIEM efficiency by 30%.",
    },
    {
      date: "Feb 2025 – Mar 2025",
      company: "Hack Secure",
      role: "Blue Team Intern · Remote",
      desc: "Detected and analyzed 20+ real-world threats using Wireshark, Wazuh SIEM, and Autopsy. Enhanced forensic reporting and lateral movement detection.",
    },
    {
      date: "Jan 2025 – Feb 2025",
      company: "Zscaler (AICTE)",
      role: "Security Intern · Remote",
      desc: "Designed Zero Trust workflows using ZIA, ZPA, and IAM policies, securing access for 100+ simulated endpoints in cloud-native environments.",
    },
    {
      date: "Nov 2024 – Jan 2025",
      company: "Corizo Technologies",
      role: "Cybersecurity Intern · Hybrid",
      desc: "Conducted VAPT for 15+ applications using Burp Suite, Sqlmap, Nmap, and Nikto. Identified OWASP Top 10 flaws and simulated real-world attacks in Kali Linux.",
    },
    {
      date: "May 2024 – Jul 2024",
      company: "NCSRC, New Delhi",
      role: "Cybersecurity Intern · On-site",
      desc: "Authored content for the NCSRC Handbook and built insider threat tools using Python, auditd, and Streamlit with threat modeling and risk scoring systems.",
    },
  ],
  projects: [
    {
      name: "Vulnerability Risk Scoring System",
      desc: "Extended CVSS with ML and RoBERTa NLP to improve vulnerability prioritization — 38% better reclassification, 93% higher extraction precision on 150k+ CVE records.",
      tags: ["Python", "ML", "RoBERTa", "NLP"],
      link: "https://github.com/Malaiyappan-STUX05",
    },
    {
      name: "Insider Threat Detection System",
      desc: "90%+ detection accuracy across 6+ log types in DevSecOps environments using XGBoost, Isolation Forest, and Autoencoders with live Streamlit dashboards.",
      tags: ["Python", "XGBoost", "Streamlit", "Autoencoders"],
      link: "https://github.com/Malaiyappan-STUX05",
    },
    {
      name: "Secure File Sharing — NIST CSF Sim",
      desc: "Role-based access control, logging, and backups on AWS simulating all five NIST CSF phases: Identify, Protect, Detect, Respond, Recover.",
      tags: ["Python", "C++", "AWS", "NIST CSF"],
      link: "https://github.com/Malaiyappan-STUX05",
    },
    {
      name: "Home Lab SIEM Implementation",
      desc: "Centralized SIEM across 2 Linux VMs and 1 Windows VM. Ingested and analyzed authentication, system, and security logs to surface suspicious activity patterns.",
      tags: ["Linux", "Windows", "SIEM", "Log Analysis"],
      link: "https://github.com/Malaiyappan-STUX05",
    },
  ],
  skills: [
    {
      icon: "🛡️",
      name: "Security Operations",
      list: "SIEM · SOAR · Threat Hunting · Incident Response · Blue Team Automation",
    },
    {
      icon: "🔍",
      name: "Offensive & Forensics",
      list: "VAPT · Burp Suite · Metasploit · Wireshark · Autopsy · Kali Linux",
    },
    {
      icon: "☁️",
      name: "Cloud & Zero Trust",
      list: "AWS (IAM, CloudTrail, Security Hub) · Azure RBAC · Zscaler ZIA/ZPA · Prisma Cloud",
    },
    {
      icon: "💻",
      name: "Programming & Scripting",
      list: "Python · Bash · PowerShell · C++ · SQL",
    },
    {
      icon: "📊",
      name: "Monitoring & Detection",
      list: "Wazuh · ELK Stack · Nessus · Nmap · Docker · Kubernetes · Ansible",
    },
    {
      icon: "🏆",
      name: "Certifications",
      list: "CompTIA Security+ · CCNA (Routing & CyberOps) · AWS ML Essentials",
    },
  ],
  achievements: [
    "Top 10 Finalist — State-Level CTF, SRM Valliammai Engineering College",
    "Young Scientist Award — National Science Congress (2018)",
    "CTF Lead & Co-Ordinator @ Centinals (500+ students)",
    "Contributing Author — NCSRC Cybersecurity Handbook, 4th Edition",
    "Bug Reporter — Elogit on HackerOne",
  ],
};

export default function Portfolio() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animId: number;
    let cleanup: (() => void) | undefined;

    const init = async () => {
      /* ─── Dynamic imports (browser only) ─── */
      const [THREEmod, { gsap }, { ScrollTrigger }, { default: Lenis }] =
        await Promise.all([
          import("three"),
          import("gsap"),
          import("gsap/ScrollTrigger"),
          import("lenis"),
        ]);

      gsap.registerPlugin(ScrollTrigger);

      /* ─── Lenis smooth scroll ─── */
      const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((t) => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);

      /* ─── Custom cursor ─── */
      const cur = document.querySelector<HTMLElement>(".cursor");
      const ring = document.querySelector<HTMLElement>(".cursor-ring");
      let mx = 0, my = 0, rx = 0, ry = 0;
      const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
      window.addEventListener("mousemove", onMove);
      const moveCursor = () => {
        if (cur) { cur.style.left = mx + "px"; cur.style.top = my + "px"; }
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        if (ring) { ring.style.left = rx + "px"; ring.style.top = ry + "px"; }
        requestAnimationFrame(moveCursor);
      };
      moveCursor();

      /* ─── Cinematic Loader ─── */
      const loader = document.getElementById("loader");
      const numEl = document.querySelector<HTMLElement>(".loader-num");
      const bar = document.querySelector<HTMLElement>(".loader-bar");
      let prog = 0;

      const interval = setInterval(() => {
        prog = Math.min(100, prog + Math.random() * 14);
        if (numEl) numEl.textContent = Math.floor(prog) + "%";
        if (bar) bar.style.width = prog + "%";
        if (prog >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            gsap.to(loader, {
              yPercent: -100,
              duration: 1.1,
              ease: "power4.inOut",
              onComplete: () => {
                if (loader) loader.style.display = "none";
              },
            });
            gsap.to("nav", { opacity: 1, duration: 0.6, delay: 0.4 });
            // Hero entrance
            gsap.to(".hero-tag", { opacity: 1, y: 0, duration: 0.7, delay: 0.6 });
            gsap.to(".hero-name .word", {
              y: 0, duration: 0.9, ease: "power4.out",
              stagger: 0.08, delay: 0.75,
            });
            gsap.to(".hero-role", { opacity: 1, duration: 0.7, delay: 1.1 });
            gsap.to(".hero-cta", { opacity: 1, duration: 0.7, delay: 1.25 });
            gsap.to(".scroll-indicator", { opacity: 1, duration: 0.7, delay: 1.5 });
          }, 350);
        }
      }, 100);

      /* ─── Three.js particle hero ─── */
      const canvas = canvasRef.current;
      if (!canvas) return;

      const renderer = new THREEmod.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);

      const scene = new THREEmod.Scene();
      const camera = new THREEmod.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
      camera.position.z = 50;

      /* Particles */
      const COUNT = window.innerWidth < 768 ? 1800 : 4000;
      const positions = new Float32Array(COUNT * 3);
      for (let i = 0; i < COUNT * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 160;
      }
      const geo = new THREEmod.BufferGeometry();
      geo.setAttribute("position", new THREEmod.BufferAttribute(positions, 3));
      const mat = new THREEmod.PointsMaterial({
        color: 0x0d9488, size: 0.18, transparent: true, opacity: 0.65,
        sizeAttenuation: true,
      });
      const points = new THREEmod.Points(geo, mat);
      scene.add(points);

      /* Ambient glow sphere */
      const glowGeo = new THREEmod.SphereGeometry(12, 32, 32);
      const glowMat = new THREEmod.MeshBasicMaterial({
        color: 0x0d9488, transparent: true, opacity: 0.04, wireframe: false,
      });
      const glowMesh = new THREEmod.Mesh(glowGeo, glowMat);
      scene.add(glowMesh);

      /* Mouse parallax */
      let targetX = 0, targetY = 0;
      const onMouseMove3D = (e: MouseEvent) => {
        targetX = (e.clientX / window.innerWidth - 0.5) * 0.8;
        targetY = (e.clientY / window.innerHeight - 0.5) * 0.8;
      };
      window.addEventListener("mousemove", onMouseMove3D);

      let t = 0;
      const animate = () => {
        animId = requestAnimationFrame(animate);
        t += 0.003;
        points.rotation.y = t * 0.04 + targetX * 0.3;
        points.rotation.x = t * 0.02 - targetY * 0.2;
        glowMesh.rotation.y = t * 0.07;
        renderer.render(scene, camera);
      };
      animate();

      /* Resize */
      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener("resize", onResize);

      /* ─── GSAP Scroll Animations ─── */
      const EASE = "power3.inOut";

      // Section labels fade
      gsap.utils.toArray<HTMLElement>(".section-label").forEach((el) => {
        gsap.to(el, {
          opacity: 1, y: 0, duration: 0.7, ease: EASE,
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // Section title char reveals
      document.querySelectorAll<HTMLElement>(".section-title").forEach((title) => {
        const chars = title.querySelectorAll<HTMLElement>(".char");
        if (chars.length > 0) {
          gsap.to(chars, {
            y: 0, duration: 0.8, ease: "power4.out", stagger: 0.015,
            scrollTrigger: { trigger: title, start: "top 85%" },
          });
        }
      });

      // About bio paragraphs
      gsap.utils.toArray<HTMLElement>(".about-bio p").forEach((p, i) => {
        gsap.to(p, {
          opacity: 1, y: 0, duration: 0.7, ease: EASE, delay: i * 0.12,
          scrollTrigger: { trigger: p, start: "top 88%" },
        });
      });

      // Stats
      gsap.utils.toArray<HTMLElement>(".stat-box").forEach((box, i) => {
        gsap.to(box, {
          opacity: 1, y: 0, duration: 0.6, ease: EASE, delay: i * 0.1,
          scrollTrigger: { trigger: box, start: "top 88%" },
        });
      });

      // Experience items stagger from left
      gsap.utils.toArray<HTMLElement>(".exp-item").forEach((item, i) => {
        gsap.to(item, {
          opacity: 1, x: 0, duration: 0.7, ease: EASE, delay: i * 0.07,
          scrollTrigger: { trigger: item, start: "top 88%" },
        });
      });

      // Project items stagger from left
      gsap.utils.toArray<HTMLElement>(".project-item").forEach((item, i) => {
        gsap.to(item, {
          opacity: 1, x: 0, duration: 0.7, ease: EASE, delay: i * 0.08,
          scrollTrigger: { trigger: item, start: "top 88%" },
        });
      });

      // Skill cards stagger
      gsap.utils.toArray<HTMLElement>(".skill-card").forEach((card, i) => {
        gsap.to(card, {
          opacity: 1, y: 0, duration: 0.6, ease: EASE, delay: (i % 3) * 0.08,
          scrollTrigger: { trigger: card, start: "top 90%" },
        });
      });

      // Contact fade in
      gsap.to(".contact-sub", {
        opacity: 1, duration: 0.7, ease: EASE,
        scrollTrigger: { trigger: ".contact-sub", start: "top 88%" },
      });
      gsap.to(".contact-email", {
        opacity: 1, duration: 0.7, ease: EASE,
        scrollTrigger: { trigger: ".contact-email", start: "top 88%" },
      });
      gsap.to(".social-row", {
        opacity: 1, duration: 0.7, ease: EASE,
        scrollTrigger: { trigger: ".social-row", start: "top 90%" },
      });

      /* Cleanup */
      cleanup = () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mousemove", onMouseMove3D);
        window.removeEventListener("resize", onResize);
        lenis.destroy();
        renderer.dispose();
        geo.dispose();
        mat.dispose();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    };

    init();

    return () => cleanup?.();
  }, []);

  /* ─── Helpers ─── */
  const splitWords = (text: string) =>
    text.split(" ").map((w, i) => (
      <span className="word" key={i}>{w}&nbsp;</span>
    ));

  const splitChars = (text: string) => {
    const words = text.split(" ");
    return words.map((w, wi) => (
      <span className="word" key={wi}>
        {w.split("").map((c, ci) => (
          <span className="char" key={ci}>{c}</span>
        ))}
        {wi < words.length - 1 && <span className="char">&nbsp;</span>}
      </span>
    ));
  };

  return (
    <>
      {/* ─── CURSOR ─── */}
      <div className="cursor" />
      <div className="cursor-ring" />

      {/* ─── LOADER ─── */}
      <div id="loader">
        <div className="loader-name">Malaiyappan S</div>
        <div className="loader-num">0%</div>
        <div className="loader-bar" />
      </div>

      {/* ─── NAV ─── */}
      <nav>
        <a href="#" className="nav-logo">MS</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* ─── HERO ─── */}
      <section className="hero" id="home">
        <canvas ref={canvasRef} id="hero-canvas" />
        <div className="hero-inner">
          <p className="hero-tag">{DATA.tagline}</p>
          <h1 className="hero-name">
            <span className="line">{splitWords("Malaiyappan")}</span>
            <span className="line">{splitWords("S")}</span>
          </h1>
          <p className="hero-role">{DATA.role}</p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Hire Me</a>
            <a href="#projects" className="btn btn-outline">View Work</a>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-line" />
          scroll
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <div id="about" className="section">
        <div className="section-label">01 — About</div>
        <h2 className="section-title">{splitChars("Who I Am")}</h2>
        <div className="about-grid">
          <div className="about-bio">
            {DATA.bio.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
          <div className="stats-grid">
            {DATA.stats.map((s, i) => (
              <div className="stat-box" key={i}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-lbl">{s.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── EXPERIENCE ─── */}
      <div id="experience" className="exp-section">
        <div className="section-label">02 — Experience</div>
        <h2 className="section-title">{splitChars("Where I've Worked")}</h2>
        <div className="exp-list">
          {DATA.experience.map((e, i) => (
            <div className="exp-item" key={i}>
              <div className="exp-date">{e.date}</div>
              <div>
                <div className="exp-company">{e.company}</div>
                <div className="exp-role">{e.role}</div>
                <div className="exp-desc">{e.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── PROJECTS ─── */}
      <div id="projects" className="projects-section">
        <div className="section-label">03 — Projects</div>
        <h2 className="section-title">{splitChars("What I've Built")}</h2>
        <div>
          {DATA.projects.map((p, i) => (
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-item"
              key={i}
              style={{ display: "grid", textDecoration: "none" }}
            >
              <span className="proj-num">0{i + 1}</span>
              <div>
                <div className="proj-name">{p.name}</div>
                <div className="proj-desc">{p.desc}</div>
                <div className="proj-tags" style={{ marginTop: "1rem" }}>
                  {p.tags.map((t, j) => (
                    <span className="proj-tag" key={j}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="proj-arrow">↗</div>
            </a>
          ))}
        </div>
      </div>

      {/* ─── SKILLS ─── */}
      <div id="skills" className="skills-section">
        <div className="section-label">04 — Skills</div>
        <h2 className="section-title">{splitChars("What I Know")}</h2>
        <div className="skills-grid">
          {DATA.skills.map((s, i) => (
            <div className="skill-card" key={i}>
              <div className="skill-icon">{s.icon}</div>
              <div className="skill-name">{s.name}</div>
              <div className="skill-list">{s.list}</div>
            </div>
          ))}
        </div>
        {/* Achievements */}
        <div style={{ marginTop: "4rem" }}>
          <div className="section-label" style={{ opacity: 1, marginBottom: "1.5rem" }}>
            Achievements & Recognition
          </div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".9rem" }}>
            {DATA.achievements.map((a, i) => (
              <li
                key={i}
                style={{
                  fontSize: ".92rem", color: "var(--muted)", paddingLeft: "1.2rem",
                  borderLeft: "2px solid var(--teal-dim)",
                }}
              >
                <span style={{ color: "var(--teal)", marginRight: ".5rem" }}>→</span>{a}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ─── CONTACT ─── */}
      <div id="contact" className="contact-section">
        <div className="section-label" style={{ opacity: 1 }}>05 — Contact</div>
        <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>{splitChars("Let's Work Together")}</h2>
        <p className="contact-sub">
          Open to full-time cybersecurity roles, security engineering positions, and consulting.
        </p>
        <a href={`mailto:${DATA.email}`} className="contact-email">
          {DATA.email}
        </a>
        <div className="social-row">
          <a href={DATA.github} target="_blank" rel="noopener noreferrer">
            <span>⌥</span> GitHub
          </a>
          <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer">
            <span>↗</span> LinkedIn
          </a>
          <a href={`tel:${DATA.phone}`}>
            <span>✆</span> {DATA.phone}
          </a>
        </div>
      </div>

      {/* ─── FOOTER ─── */}
      <footer>
        <span>© 2026 Malaiyappan S</span>
        <span>Built with Next.js · Three.js · GSAP</span>
      </footer>
    </>
  );
}
