import "./DevOps.css";
import SEO from "../../components/SEO";
import useReveal from "../../hooks/useReveal";
import {
  Infinity,
  Zap,
  TrendingUp,
  Users,
  Smile
} from "lucide-react";

export default function DevOps() {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();
  const r4 = useReveal();
  const r5 = useReveal();

  return (
    <main className="technology page-gradient">
      <SEO
        title="DevOps & CI/CD | Softgrade Solutions"
        description="Automation-driven DevOps and CI/CD practices enabling faster delivery, improved reliability, and cost optimization."
      />

      {/* ===== Hero ===== */}
      <section className="technology-hero hero-gradient">
        <Infinity className="technology-hero-icon" />
        <h1>DevOps & CI/CD</h1>
        <p>
          Automation-driven DevOps practices enabling faster releases,
          improved reliability, and continuous innovation.
        </p>
      </section>

      {/* ===== Overview ===== */}
      <section className="technology-overview">
        <div ref={r1} className="technology-card glass-card reveal">
          <p>
            DevOps integrates development and operations to streamline software
            delivery and improve collaboration. By adopting automation,
            continuous integration, and continuous deployment, organizations
            can respond faster to market demands while maintaining stability
            and quality.
          </p>
        </div>
      </section>

      {/* ===== Benefits ===== */}
      <section className="technology-grid">
        <div ref={r2} className="technology-tile glass-card reveal">
          <Zap className="tile-icon" />
          <h3>Faster Development Cycles</h3>
          <p>
            Shorter release cycles allow businesses to deliver products up to
            60% faster, accelerating time-to-market.
          </p>
        </div>

        <div ref={r3} className="technology-tile glass-card reveal">
          <TrendingUp className="tile-icon" />
          <h3>Enhanced Performance</h3>
          <p>
            Continuous testing, monitoring, and deployment improve system
            stability, performance, and operational efficiency.
          </p>
        </div>

        <div ref={r4} className="technology-tile glass-card reveal">
          <Users className="tile-icon" />
          <h3>Better Collaboration</h3>
          <p>
            DevOps breaks down silos between teams, encouraging shared
            ownership, transparency, and faster issue resolution.
          </p>
        </div>

        <div ref={r5} className="technology-tile glass-card reveal">
          <Smile className="tile-icon" />
          <h3>Customer Satisfaction</h3>
          <p>
            Budget-friendly DevOps strategies ensure reliable, high-quality
            delivery without compromising scalability or performance.
          </p>
        </div>
      </section>
    </main>
  );
}
