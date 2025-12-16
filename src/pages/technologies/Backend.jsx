import "./Backend.css";
import SEO from "../../components/SEO";
import useReveal from "../../hooks/useReveal";
import {
  Server,
  Cpu,
  ShieldCheck,
  Layers,
  Network,
  Boxes
} from "lucide-react";

const Backend = () => {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();
  const r4 = useReveal();
  const r5 = useReveal();

  return (
    <main className="technology page-gradient">
      <SEO
        title="Backend Technologies | Softgrade Solutions"
        description="High-performance backend technologies using Node.js, Java, PHP, REST APIs, and scalable microservices architectures."
      />

      {/* ================= HERO ================= */}
      <section className="tech-hero hero-gradient">
        <Server className="tech-hero-icon" />
        <h1>Backend Technologies</h1>
        <p>
          Powering secure, scalable, and high-performance digital experiences
          through robust backend engineering.
        </p>
      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="tech-section">
        <div ref={r1} className="tech-card glass-card reveal tilt-card">
          <h2>Powering the Digital Experience</h2>
          <p>
            The backend is the engine of every digital product, responsible for
            business logic, data processing, authentication, and integrations.
          </p>
          <p>
            Our backend systems are designed for performance, security,
            scalability, and long-term maintainability.
          </p>
        </div>
      </section>

      {/* ================= TECHNOLOGY GRID ================= */}
      <section className="tech-grid">
        {/* Node.js */}
        <div ref={r2} className="tech-card glass-card reveal tilt-card">
          <Cpu className="tech-icon" />
          <h3>Node.js</h3>

          <div className="tech-badges">
            <span className="badge">Node.js</span>
            <span className="badge">Express</span>
            <span className="badge">Socket.IO</span>
          </div>

          <p>
            An event-driven, non-blocking runtime ideal for building scalable,
            high-performance network applications.
          </p>

          <ul>
            <li>Non-blocking I/O</li>
            <li>Unified JavaScript stack</li>
            <li>Excellent for real-time systems</li>
          </ul>

          <span className="ideal-for">
            APIs, real-time apps & streaming platforms
          </span>
        </div>

        {/* Java */}
        <div ref={r3} className="tech-card glass-card reveal tilt-card">
          <ShieldCheck className="tech-icon" />
          <h3>Java</h3>

          <div className="tech-badges">
            <span className="badge">Java</span>
            <span className="badge">Spring</span>
            <span className="badge">Hibernate</span>
          </div>

          <p>
            A trusted enterprise-grade language known for stability, security,
            and a powerful ecosystem.
          </p>

          <ul>
            <li>Platform independent (JVM)</li>
            <li>Strong security model</li>
            <li>High concurrency support</li>
          </ul>

          <span className="ideal-for">
            Enterprise systems & financial platforms
          </span>
        </div>

        {/* PHP */}
        <div ref={r4} className="tech-card glass-card reveal tilt-card">
          <Layers className="tech-icon" />
          <h3>PHP</h3>

          <div className="tech-badges">
            <span className="badge">PHP</span>
            <span className="badge">Laravel</span>
            <span className="badge">WordPress</span>
          </div>

          <p>
            A flexible and mature scripting language powering a large share of
            modern web platforms.
          </p>

          <ul>
            <li>Rapid development</li>
            <li>Strong CMS ecosystem</li>
            <li>Modern performance improvements</li>
          </ul>

          <span className="ideal-for">
            CMS, e-commerce & business websites
          </span>
        </div>

        {/* REST APIs */}
        <div ref={r5} className="tech-card glass-card reveal tilt-card">
          <Network className="tech-icon" />
          <h3>REST APIs</h3>

          <div className="tech-badges">
            <span className="badge">REST</span>
            <span className="badge">JSON</span>
            <span className="badge">OAuth</span>
          </div>

          <p>
            A standardized architecture enabling secure and efficient
            communication between distributed systems.
          </p>

          <ul>
            <li>Stateless & scalable</li>
            <li>Client-server decoupling</li>
            <li>Standard HTTP methods</li>
          </ul>

          <span className="ideal-for">
            Mobile apps, web apps & integrations
          </span>
        </div>
      </section>

      {/* ================= ARCHITECTURE ================= */}
      <section className="tech-section">
        <div className="tech-card glass-card wide reveal tilt-card">
          <Boxes className="tech-icon" />
          <h2>Microservices & Scalable Architectures</h2>

          <p>
            We build resilient backend architectures designed to scale
            horizontally, tolerate failures, and evolve with business growth.
          </p>

          <h4>Microservices</h4>
          <ul>
            <li>Independent deployments</li>
            <li>Technology flexibility</li>
            <li>Fault isolation & resilience</li>
          </ul>

          <h4>Scalable Architectures</h4>
          <ul>
            <li>Load-balanced horizontal scaling</li>
            <li>Cloud-native deployments (AWS, Azure, GCP)</li>
            <li>Caching & performance optimization</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Backend;
