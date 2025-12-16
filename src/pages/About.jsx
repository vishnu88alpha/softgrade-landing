import "./About.css";
import useReveal from "../hooks/useReveal";
import {
  Building2,
  Target,
  Users,
  ShieldCheck,
  Leaf
} from "lucide-react";

const About = () => {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();
  const r4 = useReveal();
  const r5 = useReveal();

  return (
    <main className="about page-gradient">
      {/* ===== Hero Section ===== */}
      <section className="about-hero hero-gradient">
        <h1>About Softgrade Solutions Private Limited</h1>
        <p>
          A customer-focused and technology-driven consulting firm delivering
          sustainable growth through innovation.
        </p>
      </section>

      {/* ===== Company Overview ===== */}
      <section className="about-section">
        <div ref={r1} className="about-card glass-card reveal">
          <Building2 className="about-icon" />
          <h3>Who We Are</h3>
          <p>
            Softgrade Solutions Private Limited is a customer-focused and
            technology-driven consulting firm providing IT consulting, staffing,
            product engineering, and enterprise application development services.
          </p>
          <p>
            We help organizations craft real value from their software
            development initiatives through innovation and execution.
          </p>
        </div>
      </section>

      {/* ===== Mission ===== */}
      <section className="about-section">
        <div ref={r2} className="about-card glass-card reveal">
          <Target className="about-icon" />
          <h3>Our Mission</h3>
          <p>
            We build strong foundations that enable organizations to grow
            collectively and sustainably through informed decision-making.
          </p>
          <p>
            By addressing challenges such as weak staffing, ineffective
            performance standards, and incorrect problem evaluation, we help
            businesses overcome growth barriers with stable and reliable
            solutions.
          </p>
        </div>
      </section>

      {/* ===== Values ===== */}
      <section className="values">
        <h2>Our Core Values</h2>

        <div className="values-grid">
          <div ref={r3} className="value-card glass-card reveal">
            <Users className="about-icon" />
            <h4>Spirit of Collaboration</h4>
            <p>
              We build trust and confidence through close customer engagement to
              deliver meaningful and unique results.
            </p>
          </div>

          <div ref={r4} className="value-card glass-card reveal">
            <ShieldCheck className="about-icon" />
            <h4>Reliability</h4>
            <p>
              Quality that speaks for itself. We believe in doing what is right
              and delivering services that meet and exceed expectations.
            </p>
          </div>

          <div ref={r5} className="value-card glass-card reveal">
            <Leaf className="about-icon" />
            <h4>Sustainability</h4>
            <p>
              We invest in sustainable strategies that optimize technology usage,
              reduce costs, and support long-term economic and social stability.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
