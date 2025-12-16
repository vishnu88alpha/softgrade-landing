import "./Banking.css";
import SEO from "../../components/SEO";
import useReveal from "../../hooks/useReveal";
import {
  Landmark,
  Layers,
  Settings,
  Smartphone,
  ShieldCheck
} from "lucide-react";

export default function Banking() {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();
  const r4 = useReveal();
  const r5 = useReveal();

  return (
    <main className="industry page-gradient">
      <SEO
        title="Banking & Financial Services | Softgrade Solutions"
        description="Digital transformation and technology solutions for banking and financial institutions."
      />

      {/* ===== Hero ===== */}
      <section className="industry-hero hero-gradient">
        <Landmark className="industry-hero-icon" />
        <h1>Banking & Financial Services</h1>
        <p>
          Helping banks and financial institutions modernize operations,
          improve efficiency, and deliver secure digital experiences.
        </p>
      </section>

      {/* ===== Overview ===== */}
      <section className="industry-overview">
        <div ref={r1} className="industry-card glass-card reveal">
          <p>
            Softgrade Solutions Private Limited partners with banks and financial
            institutions to navigate the challenges of digital disruption,
            regulatory compliance, and evolving customer expectations.
          </p>
          <p>
            Our industry-focused solutions reduce operational costs, enhance
            agility, and enable financial organizations to stay competitive in
            a rapidly changing market.
          </p>
        </div>
      </section>

      {/* ===== Offerings ===== */}
      <section className="industry-grid">
        <div ref={r2} className="industry-tile glass-card reveal">
          <Layers className="tile-icon" />
          <h3>Product & Platform Modernization</h3>
          <p>
            Modernizing banking products, extending product lifecycles, and
            migrating legacy systems to scalable, future-ready platforms.
          </p>
        </div>

        <div ref={r3} className="industry-tile glass-card reveal">
          <Settings className="tile-icon" />
          <h3>Implementation & Integration</h3>
          <p>
            Seamless deployment, customization, localization, and enterprise
            application integration across banking ecosystems.
          </p>
        </div>

        <div ref={r4} className="industry-tile glass-card reveal">
          <Smartphone className="tile-icon" />
          <h3>Digital Transformation</h3>
          <p>
            Secure web portals, mobile banking applications, and end-to-end
            application development and maintenance services.
          </p>
        </div>

        <div ref={r5} className="industry-tile glass-card reveal">
          <ShieldCheck className="tile-icon" />
          <h3>Quality Assurance & Compliance</h3>
          <p>
            Rigorous testing and QA practices to ensure performance, security,
            reliability, and regulatory compliance.
          </p>
        </div>
      </section>
    </main>
  );
}
