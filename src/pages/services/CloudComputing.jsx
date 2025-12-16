import "./CloudComputing.css";
import SEO from "../../components/SEO";
import useReveal from "../../hooks/useReveal";
import {
  Cloud,
  Compass,
  ArrowUpRight,
  BarChart3
} from "lucide-react";

const CloudComputing = () => {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();
  const r4 = useReveal();

  return (
    <main className="service page-gradient">
      <SEO
        title="Cloud Computing Services | Softgrade Solutions"
        description="Secure, scalable cloud computing services enabling business agility, cost optimization, and digital transformation."
      />

      {/* ===== Hero ===== */}
      <section className="service-hero hero-gradient">
        <Cloud className="service-hero-icon" />
        <h1>Cloud Computing Services</h1>
        <p>
          Driving innovation and business transformation through secure,
          scalable, and cost-efficient cloud solutions.
        </p>
      </section>

      {/* ===== Overview ===== */}
      <section className="service-overview">
        <div ref={r1} className="service-card glass-card reveal">
          <p>
            Softgrade Solutions Private Limited provides cloud computing services
            that help organizations increase business agility, reduce IT
            complexity, and lower operational costs. Cloud adoption enables
            teams to collaborate efficiently by accessing, editing, and sharing
            information anytime and from anywhere.
          </p>

          <p>
            Our cloud specialists focus on minimizing risk and reducing total
            cost of ownership by combining infrastructure management services
            with secure and compliant cloud practices.
          </p>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section className="service-grid">
        <div ref={r2} className="service-tile glass-card reveal">
          <Compass className="tile-icon" />
          <h3>Cloud Strategy</h3>
          <p>
            We provide comprehensive cloud strategy services to help
            organizations maximize the value of cloud computing while
            minimizing cost and risk. Our experts assist in selecting the right
            cloud model, designing business-grade architectures, simplifying
            migrations, and accelerating cloud adoption.
          </p>
        </div>

        <div ref={r3} className="service-tile glass-card reveal">
          <ArrowUpRight className="tile-icon" />
          <h3>Cloud Migration</h3>
          <p>
            Successful cloud migration begins with a well-defined strategy and
            detailed planning. Our cloud migration services guide organizations
            in transitioning enterprise applications while adapting IT
            processes and compliance frameworks for cloud environments.
          </p>
        </div>

        <div ref={r4} className="service-tile glass-card reveal">
          <BarChart3 className="tile-icon" />
          <h3>Cloud Monitoring, Management & Optimization</h3>
          <p>
            Our cloud monitoring and optimization services help organizations
            reduce operating and support costs while maintaining high service
            levels. We ensure efficient administration of applications through
            proactive monitoring, performance tuning, and continuous
            optimization.
          </p>
        </div>
      </section>
    </main>
  );
};

export default CloudComputing;
