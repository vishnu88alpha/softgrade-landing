import "./API.css";
import SEO from "../../components/SEO";
import useReveal from "../../hooks/useReveal";
import {
  Plug,
  Layers,
  ShieldCheck,
  Zap,
  Share2
} from "lucide-react";

export default function API() {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();
  const r4 = useReveal();
  const r5 = useReveal();

  return (
    <main className="technology page-gradient">
      <SEO
        title="API Development | Softgrade Solutions"
        description="Secure, scalable, and high-performance API development services using REST and GraphQL."
      />

      {/* ===== Hero ===== */}
      <section className="technology-hero hero-gradient">
        <Plug className="technology-hero-icon" />
        <h1>API Development</h1>
        <p>
          Secure, scalable, and high-performance APIs that power modern
          applications and seamless system integrations.
        </p>
      </section>

      {/* ===== Overview ===== */}
      <section className="technology-overview">
        <div ref={r1} className="technology-card glass-card reveal">
          <p>
            APIs are the foundation of modern digital platforms. We design and
            build robust APIs that enable efficient communication between
            applications, services, and systems while ensuring reliability,
            performance, and security.
          </p>
          <p>
            Our API solutions support web, mobile, cloud, and enterprise
            environments, allowing organizations to scale confidently and
            integrate effortlessly.
          </p>
        </div>
      </section>

      {/* ===== Capabilities ===== */}
      <section className="technology-grid">
        <div ref={r2} className="technology-tile glass-card reveal">
          <Layers className="tile-icon" />
          <h3>RESTful APIs</h3>
          <p>
            Standards-based REST APIs designed for scalability, maintainability,
            and seamless integration across platforms.
          </p>
        </div>

        <div ref={r3} className="technology-tile glass-card reveal">
          <Zap className="tile-icon" />
          <h3>GraphQL APIs</h3>
          <p>
            Flexible and efficient data querying with optimized payloads for
            modern frontend and mobile applications.
          </p>
        </div>

        <div ref={r4} className="technology-tile glass-card reveal">
          <ShieldCheck className="tile-icon" />
          <h3>API Security</h3>
          <p>
            Secure authentication, authorization, rate limiting, and data
            protection using OAuth, JWT, and industry best practices.
          </p>
        </div>

        <div ref={r5} className="technology-tile glass-card reveal">
          <Share2 className="tile-icon" />
          <h3>Third-Party Integrations</h3>
          <p>
            Seamless integration with payment gateways, external services, and
            enterprise systems to enable smooth data exchange.
          </p>
        </div>
      </section>
    </main>
  );
}
