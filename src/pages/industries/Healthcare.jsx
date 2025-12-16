import "./Healthcare.css";
import SEO from "../../components/SEO";
import useReveal from "../../hooks/useReveal";
import {
  HeartPulse,
  Hospital,
  ShieldCheck,
  FileText,
  Users,
  BarChart3
} from "lucide-react";

const Healthcare = () => {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();
  const r4 = useReveal();
  const r5 = useReveal();
  const r6 = useReveal();

  return (
    <main className="industry page-gradient">
      <SEO
        title="Healthcare Technology Solutions | Softgrade Solutions"
        description="Digital healthcare solutions for hospitals, clinics, diagnostics, and healthcare providers."
      />

      {/* ===== Hero ===== */}
      <section className="industry-hero hero-gradient">
        <HeartPulse className="industry-hero-icon" />
        <h1>Healthcare Technology Solutions</h1>
        <p>
          Transforming healthcare delivery with secure, compliant, and
          patient-centric digital solutions.
        </p>
      </section>

      {/* ===== Overview ===== */}
      <section className="industry-overview">
        <div ref={r1} className="industry-card glass-card reveal">
          <p>
            Softgrade Solutions Private Limited delivers technology solutions
            that enable healthcare organizations to improve patient care,
            streamline operations, and ensure regulatory compliance. Our
            healthcare platforms are designed for reliability, scalability,
            and data security.
          </p>
        </div>
      </section>

      {/* ===== Offerings ===== */}
      <section className="industry-grid">
        <div ref={r2} className="industry-tile glass-card reveal">
          <Hospital className="tile-icon" />
          <h3>Hospital & Clinic Management Systems</h3>
          <p>
            Integrated platforms for patient registration, appointments,
            billing, inventory, and operational workflows.
          </p>
        </div>

        <div ref={r3} className="industry-tile glass-card reveal">
          <FileText className="tile-icon" />
          <h3>Electronic Health Records (EHR)</h3>
          <p>
            Secure, centralized patient records enabling accurate diagnosis,
            continuity of care, and efficient clinical workflows.
          </p>
        </div>

        <div ref={r4} className="industry-tile glass-card reveal">
          <Users className="tile-icon" />
          <h3>Patient Engagement Platforms</h3>
          <p>
            Web and mobile solutions for appointment scheduling, telemedicine,
            notifications, and patient communication.
          </p>
        </div>

        <div ref={r5} className="industry-tile glass-card reveal">
          <ShieldCheck className="tile-icon" />
          <h3>Security & Compliance</h3>
          <p>
            HIPAA-compliant architectures, secure access controls, audit
            logging, and data protection for sensitive healthcare information.
          </p>
        </div>

        <div ref={r6} className="industry-tile glass-card reveal">
          <BarChart3 className="tile-icon" />
          <h3>Healthcare Analytics & Insights</h3>
          <p>
            Advanced analytics and dashboards to monitor clinical performance,
            patient outcomes, and operational efficiency.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Healthcare;
