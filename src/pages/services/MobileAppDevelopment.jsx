import "./MobileAppDevelopment.css";
import useReveal from "../../hooks/useReveal";
import { Smartphone, Apple, MonitorSmartphone } from "lucide-react";

const MobileAppDevelopment = () => {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();
  const r4 = useReveal();

  return (
    <main className="service">
      {/* ===== Hero ===== */}
      <section className="hero-image mobile-hero">
        <Smartphone className="service-hero-icon" />
        <h1>Mobile Application Development</h1>
        <p>Designing superior mobile applications.</p>
      </section>

      {/* ===== Overview ===== */}
      <section className="service-overview">
        <div ref={r1} className="service-card glass-card reveal">
          <p>
            Our mobile application development services provide the IT backbone
            for business strategies where packaged software solutions do not
            adequately meet organizational needs. We build secure, scalable, and
            high-performance applications tailored to business objectives.
          </p>
        </div>
      </section>

      {/* ===== Platforms ===== */}
      <section className="service-platforms">
        <div ref={r2} className="platform-card glass-card reveal">
          <Smartphone className="platform-icon android" />

          <h3>Android Application Development</h3>
          <p>
            Our Android developers build high-quality native applications using
            Java and industry-proven libraries. We leverage Android services to
            enable efficient background operations, inter-process communication,
            and performance optimization across devices.
          </p>
          <ul>
            <li>Native Android development using Java</li>
            <li>Efficient background services & IPC</li>
            <li>Secure and scalable architecture</li>
            <li>Wide device compatibility</li>
          </ul>
        </div>

        <div ref={r3} className="platform-card glass-card reveal">
          <Apple className="platform-icon ios" />
          <h3>iOS Application Development</h3>
          <p>
            Our iOS experts build applications that strictly follow Apple’s
            design and development guidelines. We focus on premium UI/UX,
            performance, and scalability while managing complex multi-threaded
            environments.
          </p>
          <ul>
            <li>Apple-compliant UI/UX design</li>
            <li>Advanced animations & gesture handling</li>
            <li>Multi-threaded application development</li>
            <li>Architectural & technical leadership</li>
          </ul>
        </div>

        <div ref={r4} className="platform-card glass-card reveal">
          <MonitorSmartphone className="platform-icon windows" />
          <h3>Windows Application Development</h3>
          <p>
            Our expertise in JavaScript, Silverlight technologies, XAML/C#, and
            HTML5 allows us to deliver complex Windows application solutions,
            including enterprise integrations with platforms such as SharePoint
            and SAP.
          </p>
          <ul>
            <li>Enterprise-grade Windows applications</li>
            <li>Integration with SharePoint & SAP</li>
            <li>Workflow automation support</li>
            <li>Custom enterprise solutions</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default MobileAppDevelopment;
