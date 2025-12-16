import "./SoftwareTesting.css";
import SEO from "../../components/SEO";
import useReveal from "../../hooks/useReveal";
import {
  CheckCircle,
  Gauge,
  ShieldCheck,
  Bug,
  Layers
} from "lucide-react";

const SoftwareTesting = () => {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();
  const r4 = useReveal();

  return (
    <main className="service page-gradient">
      <SEO
        title="Software Testing & Quality Assurance | Softgrade Solutions"
        description="Comprehensive software testing and quality assurance services ensuring performance, reliability, and security."
      />

      {/* ===== Hero ===== */}
      <section className="service-hero hero-gradient">
        <CheckCircle className="service-hero-icon" />
        <h1>Software Testing & Quality Assurance</h1>
        <p>
          Ensuring application quality, performance, and reliability through
          comprehensive testing strategies and industry-proven tools.
        </p>
      </section>

      {/* ===== Overview ===== */}
      <section className="service-overview">
        <div ref={r1} className="service-card glass-card reveal">
          <p>
            Softgrade Solutions Private Limited delivers end-to-end software
            testing and quality assurance services that help organizations
            release reliable, secure, and high-performing applications. Our
            testing approach ensures applications perform consistently across
            platforms, devices, and environments.
          </p>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section className="service-grid">
        <div ref={r2} className="service-tile glass-card reveal">
          <Gauge className="tile-icon" />
          <h3>Performance & Load Testing</h3>
          <p>
            We validate application performance, scalability, and stability
            under real-world and peak load conditions using industry-leading
            tools.
          </p>
          <ul>
            <li>WebLOAD</li>
            <li>Apache JMeter</li>
            <li>NeoLoad</li>
            <li>LoadRunner</li>
            <li>LoadUI</li>
            <li>Loadster</li>
            <li>WAPT</li>
          </ul>
        </div>

        <div ref={r3} className="service-tile glass-card reveal">
          <Bug className="tile-icon" />
          <h3>Application Testing</h3>
          <p>
            Our application testing services ensure functional accuracy,
            usability, and compatibility across web, desktop, and mobile
            platforms.
          </p>
          <ul>
            <li>Functional Testing</li>
            <li>Regression Testing</li>
            <li>Usability Testing</li>
            <li>Integration Testing</li>
            <li>Compatibility Testing</li>
          </ul>
        </div>

        <div ref={r4} className="service-tile glass-card reveal">
          <Layers className="tile-icon" />
          <h3>Automation Testing Tools</h3>
          <p>
            We leverage modern automation frameworks and tools to accelerate
            testing cycles while maintaining accuracy and coverage.
          </p>
          <ul>
            <li>Selenium</li>
            <li>Katalon Studio</li>
            <li>TestCafe</li>
            <li>Ranorex Studio</li>
            <li>Sikuli</li>
            <li>QTP / UFT</li>
            <li>EggPlant Functional</li>
            <li>QF-Test</li>
            <li>Watir & Watin</li>
          </ul>
        </div>

        <div className="service-tile glass-card reveal">
          <ShieldCheck className="tile-icon" />
          <h3>Quality & Security Assurance</h3>
          <p>
            Our quality assurance practices focus on reducing production risks
            by identifying defects early and ensuring applications meet quality,
            security, and compliance standards before release.
          </p>
        </div>
      </section>
    </main>
  );
};

export default SoftwareTesting;
