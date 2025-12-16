import "./ApplicationDevelopment.css";
import SEO from "../../components/SEO";
import useReveal from "../../hooks/useReveal";
import {
  Layers,
  Settings,
  RefreshCcw,
  GitMerge,
  ShieldCheck,
} from "lucide-react";

const ApplicationDevelopment = () => {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();
  const r4 = useReveal();
  const r5 = useReveal();

  return (
    <main className="service page-gradient">
      <SEO
        title="Application Development | Softgrade Solutions"
        description="Custom application development, modernization, integration, and security services tailored to enterprise needs."
      />

      {/* ===== Hero ===== */}
      <section className="hero-image application-hero">
        <Layers className="service-hero-icon" />
        <h1>Application Development</h1>
        <p>Designing and delivering secure, scalable applications.</p>
      </section>

      {/* ===== Overview ===== */}
      <section className="service-overview">
        <div ref={r1} className="service-card glass-card reveal">
          <p>
            We design and deliver business applications of varying complexity
            across web, mobile, and cloud platforms. Our focus remains on
            flexibility, security, performance, and seamless integration to
            support long-term business growth.
          </p>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section className="service-grid">
        <div ref={r2} className="service-tile glass-card reveal">
          <Settings className="tile-icon" />
          <h3>Application Management</h3>
          <p>
            We manage and maintain your applications to improve business
            flexibility and optimize IT costs. Our team monitors servers and
            databases to ensure performance, stability, and sustainability.
          </p>
        </div>

        <div ref={r3} className="service-tile glass-card reveal">
          <RefreshCcw className="tile-icon" />
          <h3>Application Modernization</h3>
          <p>
            We modernize legacy applications to enhance efficiency, reduce
            technical debt, and align systems with modern enterprise IT
            strategies.
          </p>
        </div>

        <div ref={r4} className="service-tile glass-card reveal">
          <GitMerge className="tile-icon" />
          <h3>Application Integration</h3>
          <p>
            We integrate multiple independent applications into a unified
            ecosystem, improving data flow, operational efficiency, and user
            experience across platforms.
          </p>
        </div>

        <div ref={r5} className="service-tile glass-card reveal">
          <ShieldCheck className="tile-icon" />
          <h3>Application Security Services</h3>
          <p>
            Our security experts protect applications against evolving threats
            through comprehensive testing and security assessments.
          </p>

          <ul>
            <li>Functional Testing</li>
            <li>Performance Testing</li>
            <li>Usability Testing</li>
            <li>Integration Testing</li>
            <li>Compatibility Testing</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default ApplicationDevelopment;
