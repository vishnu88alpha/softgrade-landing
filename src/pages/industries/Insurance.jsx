import "./Insurance.css";
import SEO from "../../components/SEO";
import useReveal from "../../hooks/useReveal";
import {
  Shield,
  FileCheck,
  Users,
  BarChart3,
  Lock,
  RefreshCcw
} from "lucide-react";

const Insurance = () => {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();
  const r4 = useReveal();
  const r5 = useReveal();
  const r6 = useReveal();

  return (
    <main className="industry page-gradient">
      <SEO
        title="Insurance Technology Solutions | Softgrade Solutions"
        description="Digital insurance solutions for policy management, claims processing, analytics, and regulatory compliance."
      />

      {/* ===== Hero ===== */}
      <section className="industry-hero hero-gradient">
        <Shield className="industry-hero-icon" />
        <h1>Insurance Technology Solutions</h1>
        <p>
          Enabling digital transformation for insurers through secure,
          scalable, and customer-centric technology platforms.
        </p>
      </section>

      {/* ===== Overview ===== */}
      <section className="industry-overview">
        <div ref={r1} className="industry-card glass-card reveal">
          <p>
            Softgrade Solutions Private Limited partners with insurance
            providers to modernize legacy systems, streamline operations,
            and improve customer experiences. Our solutions are designed
            to meet evolving regulatory requirements while ensuring
            operational efficiency and data security.
          </p>
        </div>
      </section>

      {/* ===== Offerings ===== */}
      <section className="industry-grid">
        <div ref={r2} className="industry-tile glass-card reveal">
          <FileCheck className="tile-icon" />
          <h3>Policy Administration Systems</h3>
          <p>
            End-to-end policy lifecycle management covering policy issuance,
            renewals, endorsements, and cancellations with automation and
            accuracy.
          </p>
        </div>

        <div ref={r3} className="industry-tile glass-card reveal">
          <RefreshCcw className="tile-icon" />
          <h3>Claims Processing & Automation</h3>
          <p>
            Intelligent claims management solutions that reduce turnaround
            time, improve transparency, and enhance customer satisfaction.
          </p>
        </div>

        <div ref={r4} className="industry-tile glass-card reveal">
          <Users className="tile-icon" />
          <h3>Customer Portals & Mobile Apps</h3>
          <p>
            Secure digital channels for policyholders to manage policies,
            submit claims, track status, and receive notifications.
          </p>
        </div>

        <div ref={r5} className="industry-tile glass-card reveal">
          <Lock className="tile-icon" />
          <h3>Security & Regulatory Compliance</h3>
          <p>
            Solutions designed to comply with insurance regulations,
            data privacy laws, and security standards while protecting
            sensitive customer information.
          </p>
        </div>

        <div ref={r6} className="industry-tile glass-card reveal">
          <BarChart3 className="tile-icon" />
          <h3>Analytics & Risk Management</h3>
          <p>
            Advanced analytics and reporting platforms that support
            underwriting decisions, fraud detection, and risk assessment.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Insurance;
