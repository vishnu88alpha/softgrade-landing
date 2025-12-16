import "./SoftwareDevelopment.css";
import SEO from "../../components/SEO";
import useReveal from "../../hooks/useReveal";
import {
  Code2,
  Users,
  Layers,
  Rocket
} from "lucide-react";

const SoftwareDevelopment = () => {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();
  const r4 = useReveal();

  return (
    <main className="service page-gradient">
      <SEO
        title="Custom Software Development | Softgrade Solutions"
        description="Enterprise-grade custom software development services delivering scalable, secure, and high-performance solutions."
      />

      {/* ===== Hero ===== */}
      <section className="service-hero hero-gradient">
        <Code2 className="service-hero-icon" />
        <h1>Custom Software Development Services</h1>
        <p>
          Delivering robust, scalable, and future-ready software solutions
          tailored to your business objectives.
        </p>
      </section>

      {/* ===== Overview ===== */}
      <section className="service-overview">
        <div ref={r1} className="service-card glass-card reveal">
          <p>
            Softgrade Solutions Private Limited brings together experienced
            developers who are subject matter experts in their respective
            technologies. Leveraging deep technical expertise and industry
            experience, we deliver high-quality custom software solutions that
            drive measurable business value.
          </p>

          <p>
            Our dedicated teams possess strong expertise across a wide range of
            technologies and tools. Regardless of the technology stack, our
            experts ensure reliable delivery, superior quality, and optimal
            performance.
          </p>
        </div>
      </section>

      {/* ===== Key Capabilities ===== */}
      <section className="service-grid">
        <div ref={r2} className="service-tile glass-card reveal">
          <Layers className="tile-icon" />
          <h3>360° Development Approach</h3>
          <p>
            From ideation and design to development, integration, deployment,
            and ongoing support, we cover the complete software lifecycle
            through a structured and proven framework.
          </p>
        </div>

        <div ref={r3} className="service-tile glass-card reveal">
          <Users className="tile-icon" />
          <h3>Client-Centric Delivery</h3>
          <p>
            Our boutique engagement model enables a highly customized approach,
            fostering long-term partnerships while maintaining a sharp focus on
            your specific business requirements.
          </p>
        </div>

        <div ref={r4} className="service-tile glass-card reveal">
          <Code2 className="tile-icon" />
          <h3>Domain Expertise</h3>
          <p>
            We bring deep domain knowledge and niche technical expertise,
            ranging from solution architecture to resolving mission-critical
            challenges and complex firefighting projects.
          </p>
        </div>

        <div className="service-tile glass-card reveal">
          <Rocket className="tile-icon" />
          <h3>Accelerated Time-to-Market</h3>
          <p>
            Our expertise, accelerators, and reusable solution components
            enable faster product rollouts, rapid customizations, and smooth
            delivery—reducing development costs while accelerating market
            entry.
          </p>
        </div>
      </section>
    </main>
  );
};

export default SoftwareDevelopment;
