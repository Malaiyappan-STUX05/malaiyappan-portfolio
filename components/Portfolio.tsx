"use client";

import { useEffect, useRef } from "react";

/* â”€â”€â”€ RESUME DATA â”€â”€â”€ */
const DATA = {
  name: "Malaiyappan S",
  role: "Cybersecurity Engineer",
  tagline: "B.Tech CSE Â· Cybersecurity Â· SRM IST",
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
      date: "May 2025 â€“ Jul 2025",
      company: "Palo Alto Networks (AICTE)",
      role: "Security Intern Â· Remote",
      desc: "Selected through AICTE Cybersecurity Cohort. Implemented Zero Trust security using PAN-OS, Cortex XSOAR, and Prisma Cloud â€” enhanced SIEM efficiency by 30%.",
    },
    {
      date: "Feb 2025 â€“ Mar 2025",
      company: "Hack Secure",
      role: "Blue Team Intern Â· Remote",
      desc: "Detected and analyzed 20+ real-world threats using Wireshark, Wazuh SIEM, and Autopsy. Enhanced forensic reporting and lateral movement detection.",
    },
    {
      date: "Jan 2025 â€“ Feb 2025",
      company: "Zscaler (AICTE)",
      role: "Security Intern Â· Remote",
      desc: "Designed Zero Trust workflows using ZIA, ZPA, and IAM policies, securing access for 100+ simulated endpoints in cloud-native environments.",
    },
    {
      date: "Nov 2024 â€“ Jan 2025",
      company: "Corizo Technologies",
      role: "Cybersecurity Intern Â· Hybrid",
      desc: "Conducted VAPT for 15+ applications using Burp Suite, Sqlmap, Nmap, and Nikto. Identified OWASP Top 10 flaws and simulated real-world attacks in Kali Linux.",
    },
    {
      date: "May 2024 â€“ Jul 2024",
      company: "NCSRC, New Delhi",
      role: "Cybersecurity Intern Â· On-site",
      desc: "Authored content for the NCSRC Handbook and built insider threat tools using Python, auditd, and Streamlit with threat modeling and risk scoring systems.",
    },
  ],
  projects: [
    {
      name: "Vulnerability Risk Scoring System",
      desc: "Extended CVSS with ML and RoBERTa NLP to improve vulnerability prioritization â€” 38% better reclassification, 93% higher extraction precision on 150k+ CVE records.",
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
      name: "Secure File Sharing â€” NIST CSF Sim",
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
      icon: "ğŸ›¡ï¸",
      name: "Security Operations",
      list: "SIEM Â· SOAR Â· Threat Hunting Â· Incident Response Â· Blue Team Automation",
    },
    {
      icon: "ğŸ”",
      name: "Offensive & Forensics",
      list: "VAPT Â· Burp Suite Â· Metasploit Â· Wireshark Â· Autopsy Â· Kali Linux",
    },
    {
      icon: "â˜ï¸",
      name: "Cloud & Zero Trust",
      list: "AWS (IAM, CloudTrail, Security Hub) Â· Azure RBAC Â· Zscaler ZIA/ZPA Â· Prisma Cloud",
    },
    {
      icon: "ğŸ’»",
      name: "Programming & Scripting",
      list: "Python Â· Bash Â· PowerShell Â· C++ Â· SQL",
    },
    {
      icon: "ğŸ“Š",
      name: "Monitoring & Detection",
      list: "Wazuh Â· ELK Stack Â· Nessus Â· Nmap Â· Docker Â· Kubernetes Â· Ansible",
    },
    {
      icon: "ğŸ†",
      name: "Certifications",
      list: "CompTIA Security+ Â· CCNA (Routing & CyberOps) Â· AWSML Essentials",
    },
  ],
  achievements: [
    "Top 10 Finalist â”” State-Level CTF, SRM Valliammai Engineering College",
    "Young Scientist Award â”” National Science Congress (2018)",
    "CTF Lead & Co-Ordinator @Entinals (500+ students)",
    "Contributing Author â€” NCSRC Cybersecurity Handbook, 4th Edition",
    "Bug Reporter â€” Elogit on HackerOne",
  ],
};

export default function Portfolio() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animId: number;
    let cleanup: (() => void) | undefined;

    const init = async () => {
      /* â”€â”€â”€ Dynamic imports (browser only) â”€â”€â”€ */
      const [THREEmod, { gsap }, { ScrollTrigger }, { default: Lenis }] =
        await Promise.all([
          import("three"),
          import("gsap"),
          import("gsap/ScrollTrigger"),
          import("lenis"),
        ]);

      gsap.registerPlugin(ScrollTrigger);

      /* â”€â”€â”€ Lenis smooth scroll â”€â”€â”€ */
      const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((t) => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);

      /* â”€â”€â”€ Custom cursor â”€â”€â”€ */
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

      /* â”€â”€â”€ Cinematic Loader â”€â”€â”€ */
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

      /* â”€â”€â”€ Three.js particle hero â”€â”€â”€ */
      const canvas = canvasRef.current;
      if (!canvas) return;

      const renderer = new THREEmod.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);

      const scene = new THREEmod.Scene();
      const camera = new THREEmod.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
      camera.position.z = 50;

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

      const glowGeo = new THREEmod.SphereGeometry(12, 32, 32);
      const glowMat = new THREEmod.MeshBasicMaterial({
        color: 0x0d9488, transparent: true, opacity: 0.04, wireframe: false,
      });
      const glowMesh = new THREEmod.Mesh(glowGeo, glowMat);
      scene.add(glowMesh);

      let targetX = 0, targetY = 0;
      const onMouseMove3D = (e: MouseEvent) => {
        targetX = (e.clientX / window.innerWidth - 0.5) * 0.8;
        targetY = (e.clientY / window.innerHeight - 0.5) * 0.8;
      };
      window.addEventListener("mousemove", onMouseMove3D;° ¢ÆWBBÒ°¢6öç7Bæ–ÖFRÒ‚’Óâ°¢æ–Ô–BÒ&WVW7Dæ–ÖF–öäg&ÖR†æ–ÖFR“°¢B³Òã3°¢ö–çG2ç&÷FF–öâç’ÒB¢ãB²F&vWE‚¢ã3°¢ö–çG2ç&÷FF–öâç‚ÒB¢ã"ÒF&vWE’¢ã#°¢vÆ÷tÖW6‚ç&÷FF–öâç’ÒB¢ãs°¢&VæFW&W"ç&VæFW"‡66VæRÂ6ÖW&“°¢Ó°¢æ–ÖFR‚“° ¢6öç7Böå&W6—¦RÒ‚’Óâ°¢6ÖW&æ7V7BÒv–æF÷ræ–ææW%v–GF‚òv–æF÷ræ–ææW$†V–v‡C°¢6ÖW&çWFFU&ö¦V7F–öäÖG&—‚‚“°¢&VæFW&W"ç6WE6—¦R‡v–æF÷ræ–ææW%v–GF‚Âv–æF÷ræ–ææW$†V–v‡B“°¢Ó°¢v–æF÷ræFDWfVçDÆ—7FVæW"‚'&W6—¦R"Âöå&W6—¦R“° ¢6öç7BT4RÒ'÷vW#2æ–ä÷WB#° ¢w6çWF–Ç2çFô'&“Ä…DÔÄVÆVÖVçCâ‚"ç6V7F–öâÖÆ&VÂ"’æf÷$V6‚‚†VÂ’Óâ°¢w6çFò†VÂÂ°¢÷6—G“¢Â“¢ÂGW&F–öã¢ãrÂV6S¢T4RÀ¢67&öÆÅG&–vvW#¢²G&–vvW#¢VÂÂ7F'C¢'F÷ƒRR"ÒÀ¢Ò“°¢Ò“° ¢Fö7VÖVçBçVW'•6VÆV7F÷$ÆÃÄ…DÔÄVÆVÖVçCâ‚"ç6V7F–öâ×F—FÆR"’æf÷$V6‚‚‡F—FÆR’Óâ°¢6öç7B6†'2ÒF—FÆRçVW'•6VÆV7F÷$ÆÃÄ…DÔÄVÆVÖVçCâ‚"æ6†""“°¢–b†6†'2æÆVæwF‚â’°¢w6çFò†6†'2Â°¢“¢ÂGW&F–öã¢ã‚ÂV6S¢'÷vW#Bæ÷WB"Â7FvvW#¢ãRÀ¢67&öÆÅG&–vvW#¢²G&–vvW#¢F—FÆRÂ7F'C¢'F÷ƒRR"ÒÀ¢Ò“°¢Ğ¢Ò“° ¢w6çWF–Ç2çFô'&“Ä…DÔÄVÆVÖVçCâ‚"æ&÷WBÖ&–ò"’æf÷$V6‚‚‡Â’’Óâ°¢w6çFò‡Â°¢÷6—G“¢Â“¢ÂGW&F–öã¢ãrÂV6S¢T4RÂFVÆ“¢’¢ã"À¢67&öÆÅG&–vvW#¢²G&–vvW#¢Â7F'C¢'F÷ƒ‚R"ÒÀ¢Ò“°¢Ò“° ¢w6çWF–Ç2çFô'&“Ä…DÔÄVÆVÖVçCâ‚"ç7FBÖ&÷‚"’æf÷$V6‚‚†&÷‚Â’’Óâ°¢w6çFò†&÷‚Â°¢÷6—G“¢Â“¢ÂGW&F–öã¢ãbÂV6S¢T4RÂFVÆ“¢’¢ãÀ¢67&öÆÅG&–vvW#¢²G&–vvW#¢&÷‚Â7F'C¢'F÷ƒ‚R"ÒÀ¢Ò“°¢Ò“° ¢w6çWF–Ç2çFô'&“Ä…DÔÄVÆVÖVçCâ‚"æW‡Ö—FVÒ"’æf÷$V6‚‚†—FVÒÂ’’Óâ°¢w6çFò†—FVÒÂ°¢÷6—G“¢Âƒ¢ÂGW&F–öã¢ãrÂV6S¢T4RÂFVÆ“¢’¢ãrÀ¢67&öÆÅG&–vvW#¢²G&–vvW#¢—FVÒÂ7F'C¢'F÷ƒ‚R"ÒÀ¢Ò“°¢Ò“° ¢w6çWF–Ç2çFô'&“Ä…DÔÄVÆVÖVçCâ‚"ç&ö¦V7BÖ—FVÒ"’æf÷$V6‚‚†—FVÒÂ’’Óâ°¢w6çFò†—FVÒÂ°¢÷6—G“¢Âƒ¢ÂGW&F–öã¢ãrÂV6S¢T4RÂFVÆ“¢’¢ã‚À¢67&öÆÅG&–vvW#¢²G&–vvW#¢—FVÒÂ7F'C¢'F÷ƒ‚R"ÒÀ¢Ò“°¢Ò“° ¢w6çWF–Ç2çFô'&“Ä…DÔÄVÆVÖVçCâ‚"ç6¶–ÆÂÖ6&B"’æf÷$V6‚‚†6&BÂ’’Óâ°¢w6çFò†6&BÂ°¢÷6—G“¢Â“¢ÂGW&F–öã¢ãbÂV6S¢T4RÂFVÆ“¢†’R2’¢ã‚À¢67&öÆÅG&–vvW#¢²G&–vvW#¢6&BÂ7F'C¢'F÷“R"ÒÀ¢Ò“°¢Ò“° ¢w6çFò‚"æ6öçF7B×7V""Â°¢÷6—G“¢ÂGW&F–öã¢ãrÂV6S¢T4RÀ¢67&öÆÅG&–vvW#¢²G&–vvW#¢"æ6öçF7B×7V""Â7F'C¢'F÷ƒ‚R"ÒÀ¢Ò“°¢w6çFò‚"æ6öçF7BÖVÖ–Â"Â°¢÷6—G“¢ÂGW&F–öã¢ãrÂV6S¢T4RÀ¢67&öÆÅG&–vvW#¢²G&–vvW#¢"æ6öçF7BÖVÖ–Â"Â7F'C¢'F÷ƒ‚R"ÒÀ¢Ò“°¢w6çFò‚"ç6ö6–Â×&÷r"Â°¢÷6—G“¢ÂGW&F–öã¢ãrÂV6S¢T4RÀ¢67&öÆÅG&–vvW#¢²G&–vvW#¢"ç6ö6–Â×&÷r"Â7F'C¢'F÷“R"ÒÀ¢Ò“° ¢6ÆVçWÒ‚’Óâ°¢6æ6VÄæ–ÖF–öäg&ÖR†æ–Ô–B“°¢v–æF÷rç&VÖ÷fTWfVçDÆ—7FVæW"‚&Ö÷W6VÖ÷fR"ÂöäÖ÷fR“°¢v–æF÷rç&VÖ÷fTWfVçDÆ—7FVæW"‚&Ö÷W6VÖ÷fR"ÂöäÖ÷W6TÖ÷fS4B“°¢v–æF÷rç&VÖ÷fTWfVçDÆ—7FVæW"‚'&W6—¦R"Âöå&W6—¦R“°¢ÆVæ—2æFW7G&÷’‚“°¢&VæFW&W"æF—7÷6R‚“°¢vVòæF—7÷6R‚“°¢ÖBæF—7÷6R‚“°¢67&öÆÅG&–vvW"ævWDÆÂ‚’æf÷$V6‚‚‡B’ÓâBæ¶–ÆÂ‚’“°¢Ó°¢Ó° ¢–æ—B‚“° ¢&WGW&â‚’Óâ6ÆVçWòâ‚“°¢ÒÂµÒ“° ¢6öç7B7Æ—Ev÷&G2Ò‡FW‡C¢7G&–ær’Óà¢FW‡Bç7Æ—B‚""’æÖ‚‡rÂ’’Óâ€¢Ç7â6Æ74æÖSÒ'v÷&B"¶W“×¶—Óç·wÒfæ'7³Â÷7ãà¢’“° ¢6öç7B7Æ—D6†'2Ò‡FW‡C¢7G&–ær’Óâ°¢6öç7Bv÷&G2ÒFW‡Bç7Æ—B‚""“°¢&WGW&âv÷&G2æÖ‚‡rÂv’’Óâ€¢Ç7â6Æ74æÖSÒ'v÷&B"¶W“×·v—Óà¢·rç7Æ—B‚""’æÖ‚†2Â6’’Óâ€¢Ç7â6Æ74æÖSÒ&6†""¶W“×¶6—Óç¶7ÓÂ÷7ãà¢’—Ğ¢·v’Âv÷&G2æÆVæwF‚ÒbbÇ7â6Æ74æÖSÒ&6†"#âfæ'7³Â÷7ãçĞ¢Â÷7ãà¢’“°¢Ó° ¢&WGW&â€¢Ãà¢²ò¢5U%4õ"¢÷Ğ¢ÆF—b6Æ74æÖSÒ&7W'6÷""óà¢ÆF—b6Æ74æÖSÒ&7W'6÷"×&–ær"óà ¢²ò¢ÄôDU"¢÷Ğ¢ÆF—b–CÒ&ÆöFW"#à¢ÆF—b6Æ74æÖSÒ&ÆöFW"ÖæÖR#äÖÆ—–â3ÂöF—cà¢ÆF—b6Æ74æÖSÒ&ÆöFW"ÖçVÒ#ãSÂöF—cà¢ÆF—b6Æ74æÖSÒ&ÆöFW"Ö&""óà¢ÂöF—cà ¢²ò¢äb¢÷Ğ¢Ææcà¢Æ‡&VcÒ"2"6Æ74æÖSÒ&æbÖÆövò#äÕ3Âöà¢ÇVÂ6Æ74æÖSÒ&æbÖÆ–æ·2#à¢ÆÆ“ãÆ‡&VcÒ"6&÷WB#ä&÷WCÂöãÂöÆ“à¢ÆÆ“ãÆ‡&VcÒ"6W‡W&–Væ6R#äW‡W&–Væ6SÂöãÂöÆ“à¢ÆÆ“ãÆ‡&VcÒ"7&ö¦V7G2#å&ö¦V7G3ÂöãÂöÆ“à¢ÆÆ“ãÆ‡&VcÒ"76¶–ÆÇ2#å6¶–ÆÇ3ÂöãÂöÆ“à¢ÆÆ“ãÆ‡&VcÒ"66öçF7B#ä6öçF7CÂöãÂöÆ“à¢Â÷VÃà¢Âöæcà ¢²ò¢„U$ò¢÷Ğ¢Ç6V7F–öâ6Æ74æÖSÒ&†W&ò"–CÒ&†öÖR#à¢Æ6çf2&Vc×¶6çf5&VgÒ–CÒ&†W&òÖ6çf2"óà¢ÆF—b6Æ74æÖSÒ&†W&òÖ–ææW"#à¢Ç6Æ74æÖSÒ&†W&ò×Fr#ç´DDçFvÆ–æWÓÂ÷à¢Æƒ6Æ74æÖSÒ&†W&òÖæÖR#à¢Ç7â6Æ74æÖSÒ&Æ–æR#ç·7Æ—Ev÷&G2‚$ÖÆ—–â"—ÓÂ÷7ãà¢Ç7â6Æ74æÖSÒ&Æ–æR#ç·7Æ—Ev÷&G2‚%2"—ÓÂ÷7ãà¢Âöƒà¢Ç6Æ74æÖSÒ&†W&ò×&öÆR#ç´DDç&öÆWÓÂ÷à¢ÆF—b6Æ74æÖSÒ&†W&òÖ7F#à¢Æ‡&VcÒ"66öçF7B"6Æ74æÖSÒ&'Fâ'Fâ×&–Ö'’#ä†—&RÖSÂöà¢Æ‡&VcÒ"7&ö¦V7G2"6Æ74æÖSÒ&'Fâ'FâÖ÷WFÆ–æR#åf–Wrv÷&³Âöà¢ÂöF—cà¢ÂöF—cà¢ÆF—b6Æ74æÖSÒ'67&öÆÂÖ–æF–6F÷"#à¢ÆF—b6Æ74æÖSÒ'67&öÆÂÖÆ–æR"óà¢67&öÆÀ¢ÂöF—cà¢Â÷6V7F–öãà ¢²ò¢$õUB¢÷Ğ¢ÆF—b–CÒ&&÷WB"6Æ74æÖSÒ'6V7F–öâ#à¢ÆF—b6Æ74æÖSÒ'6V7F–öâÖÆ&VÂ#ã(	B&÷WCÂöF—cà¢Æƒ"6Æ74æÖSÒ'6V7F–öâ×F—FÆR#ç·7Æ—D6†'2‚%v†ò’Ò"—ÓÂöƒ#à¢ÆF—b6Æ74æÖSÒ&&÷WBÖw&–B#à¢ÆF—b6Æ74æÖSÒ&&÷WBÖ&–ò#à¢´DDæ&–òæÖ‚‡Â’’Óâ€¢Ç¶W“×¶—ÒFævW&÷W6Ç•6WD–ææW$…DÔÃ×·²õö‡FÖÃ¢×Òóà¢’—Ğ¢ÂöF—cà¢ÆF—b6Æ74æÖSÒ'7FG2Öw&–B#à¢´DDç7FG2æÖ‚‡2Â’’Óâ€¢ÆF—b6Æ74æÖSÒ'7FBÖ&÷‚"¶W“×¶—Óà¢ÆF—b6Æ74æÖSÒ'7FBÖçVÒ#ç·2æçV×ÓÂöF—cà¢ÆF—b6Æ74æÖSÒ'7FBÖÆ&Â#ç·2æÆ&ÇÓÂöF—cà¢ÂöF—cà¢’—Ğ¢ÂöF—cà¢ÂöF—cà¢ÂöF—cà ¢²ò¢U…U$”Tä4R¢÷Ğ¢ÆF—b–CÒ&W‡W&–Væ6R"6Æ74æÖSÒ&W‡×6V7F–öâ#à¢ÆF—b6Æ74æÖSÒ'6V7F–öâÖÆ&VÂ#ã"(	BW‡W&–Væ6SÂöF—cà¢Æƒ"6Æ74æÖSÒ'6V7F–öâ×F—FÆR#ç·7Æ—D6†'2‚%v†W&R’wfRv÷&¶VB"—ÓÂöƒ#à¢ÆF—b6Æ74æÖSÒ&W‡ÖÆ—7B#à¢´DDæW‡W&–Væ6RæÖ‚†RÂ’’Óâ€¢ÆF—b6Æ74æÖSÒ&W‡Ö—FVÒ"¶W“×¶—Óà¢ÆF—b6Æ74æÖSÒ&W‡ÖFFR#ç¶RæFFWÓÂöF—cà¢ÆF—cà¢ÆF—b6Æ74æÖSÒ&W‡Ö6ö×ç’#ç¶Ræ6ö×ç—ÓÂöF—cà¢ÆF—b6Æ74æÖSÒ&W‡×&öÆR#ç¶Rç&öÆWÓÂöF—cà¢ÆF—b6Æ74æÖSÒ&W‡ÖFW62#ç¶RæFW67ÓÂöF—cà¢ÂöF—cà¢ÂöF—cà¢’—Ğ¢ÂöF—cà¢ÂöF—cà ¢²ò¢$ô¤T5E2¢÷Ğ¢ÆF—b–CÒ'&ö¦V7G2"6Æ74æÖSÒ'&ö¦V7G2×6V7F–öâ#à¢ÆF—b6Æ74æÖSÒ'6V7F–öâÖÆ&VÂ#ã2(	B&ö¦V7G3ÂöF—cà¢Æƒ"6Æ74æÖSÒ'6V7F–öâ×F—FÆR#ç·7Æ—D6†'2‚%v†B’wfR'V–ÇB"—ÓÂöƒ#à¢ÆF—cà¢´DDç&ö¦V7G2æÖ‚‡Â’’Óâ€¢Æ¢‡&Vc×·æÆ–æ·Ğ¢F&vWCÒ%ö&Ææ² ¢&VÃÒ&æö÷VæW"æ÷&VfW'&W" ¢6Æ74æÖSÒ'&ö¦V7BÖ—FVÒ ¢¶W“×¶—Ğ¢7G–ÆS×·²F—7Æ“¢&w&–B"ÂFW‡DFV6÷&F–öã¢&æöæR"×Ğ¢à¢Ç7â6Æ74æÖSÒ'&ö¢ÖçVÒ#ã¶’²ÓÂ÷7ãà¢ÆF—cà¢ÆF—b6Æ74æÖSÒ'&ö¢ÖæÖR#ç·ææÖWÓÂöF—cà¢ÆF—b6Æ74æÖSÒ'&ö¢ÖFW62#ç·æFW67ÓÂöF—cà¢ÆF—b6Æ74æÖSÒ'&ö¢×Fw2"7G–ÆS×·²Ö&v–åF÷¢#&VÒ"×Óà¢·çFw2æÖ‚‡BÂ¢’Óâ€¢Ç7â6Æ74æÖSÒ'&ö¢×Fr"¶W“×¶§Óç·GÓÂ÷7ãà¢’—Ğ¢ÂöF—cà¢ÂöF—cà¢ÆF—b6Æ74æÖSÒ'&ö¢Ö'&÷r#î(isÂöF—cà¢Âöà¢’—Ğ¢ÂöF—cà¢ÂöF—cà ¢²ò¢4´”ÄÅ2¢÷Ğ¢ÆF—b–CÒ'6¶–ÆÇ2"6Æ74æÖSÒ'6¶–ÆÇ2×6V7F–öâ#à¢ÆF—b6Æ74æÖSÒ'6V7F–öâÖÆ&VÂ#ãB)IB6¶–ÆÇ3ÂöF—cà¢Æƒ"6Æ74æÖSÒ'6V7F–öâ×F—FÆR#ç·7Æ—D6†'2‚%v†B’¶æ÷r"—ÓÂöƒ#à¢ÆF—b6Æ74æÖSÒ'6¶–ÆÇ2Öw&–B#à¢´DDç6¶–ÆÇ2æÖ‚‡2Â’’Óâ€¢ÆF—b6Æ74æÖSÒ'6¶–ÆÂÖ6&B"¶W“×¶—Óà¢ÆF—b6Æ74æÖSÒ'6¶–ÆÂÖ–6öâ#ç·2æ–6öçÓÂöF—cà¢ÆF—b6Æ74æÖSÒ'6¶–ÆÂÖæÖR#ç·2ææÖWÓÂöF—cà¢ÆF—b6Æ74æÖSÒ'6¶–ÆÂÖÆ—7B#ç·2æÆ—7GÓÂöF—cà¢ÂöF—cà¢’—Ğ¢ÂöF—cà¢ÆF—b7G–ÆS×·²Ö&v–åF÷¢#G&VÒ"×Óà¢ÆF—b6Æ74æÖSÒ'6V7F–öâÖÆ&VÂ"7G–ÆS×·²÷6—G“¢ÂÖ&v–ä&÷GFöÓ¢#ãW&VÒ"×Óà¢6†–WfVÖVçG2b&V6övæ—F–öà¢ÂöF—cà¢ÇVÂ7G–ÆS×·²Æ—7E7G–ÆS¢&æöæR"ÂF—7Æ“¢&fÆW‚"ÂfÆW„F—&V7F–öã¢&6öÇVÖâ"Âv¢"ã—&VÒ"×Óà¢´DDæ6†–WfVÖVçG2æÖ‚†Â’’Óâ€¢ÆÆ¢¶W“×¶—Ğ¢7G–ÆS×·°¢föçE6—¦S¢"ã“'&VÒ"Â6öÆ÷#¢'f"‚ÒÖ×WFVB’"ÂFF–ætÆVgC¢#ã'&VÒ"À¢&÷&FW$ÆVgC¢#'‚6öÆ–Bf"‚Ò×FVÂÖF–Ò’"À¢×Ğ¢à¢Ç7â7G–ÆS×·²6öÆ÷#¢'f"‚Ò×FVÂ’"ÂÖ&v–å&–v‡C¢"ãW&VÒ"×Óî(i#Â÷7ãç¶Ğ¢ÂöÆ“à¢’—Ğ¢Â÷VÃà¢ÂöF—cà¢ÂöF—cà ¢²ò¢4ôåD5B¢÷Ğ¢ÆF—b–CÒ&6öçF7B"6Æ74æÖSÒ&6öçF7B×6V7F–öâ#à¢ÆF—b6Æ74æÖSÒ'6V7F–öâÖÆ&VÂ"7G–ÆS×·²÷6—G“¢×ÓãR(	B6öçF7CÂöF—cà¢Æƒ"6Æ74æÖSÒ'6V7F–öâ×F—FÆR"7G–ÆS×·²Ö&v–ä&÷GFöÓ¢#ãW&VÒ"×Óç·7Æ—D6†'2‚$ÆWBw2v÷&²FövWF†W""—ÓÂöƒ#à¢Ç6Æ74æÖSÒ&6öçF7B×7V"#à¢÷VâFògVÆÂ×F–ÖR7–&W'6V7W&—G’&öÆW2Â6V7W&—G’Væv–æVW&–ær÷6—F–öç2ÂæB6öç7VÇF–ærà¢Â÷à¢Æ‡&Vc×¶Ö–ÇFó¢G´DDæVÖ–ÇÖÒ6Æ74æÖSÒ&6öçF7BÖVÖ–Â#à¢´DDæVÖ–ÇĞ¢Âöà¢ÆF—b6Æ74æÖSÒ'6ö6–Â×&÷r#à¢Æ‡&Vc×´DDæv—F‡V'ÒF&vWCÒ%ö&Ææ²"&VÃÒ&æö÷VæW"æ÷&VfW'&W"#à¢Ç7ãî(ªÓÂ÷7ãâv—D‡V ¢Âöà¢Æ‡&Vc×´DDæÆ–æ¶VF–çÒF&vWCÒ%ö&Ææ²"&VÃÒ&æö÷VæW"æ÷&VfW'&W"#à¢Ç7ãî(isÂ÷7ãâÆ–æ¶VD–à¢Âöà¢Æ‡&Vc×¶FVÃ¢G´DDç†öæWÖÓà¢Ç7ãî)ÈcÂ÷7ãâ´DDç†öæWĞ¢Âöà¢ÂöF—cà¢ÂöF—cà ¢²ò¢dôõDU"¢÷Ğ¢Æfö÷FW#à¢Ç7ãì*’##bÖÆ—–â3Â÷7ãà¢Ç7ãä'V–ÇBv—F‚æW‡Bæ§2+rF‡&VRæ§2+ru4Â÷7ãà¢Âöfö÷FW#à¢Âóà¢“°§Ğ