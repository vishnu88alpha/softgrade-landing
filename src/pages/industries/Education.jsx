import "./Education.css";
import SEO from "../../components/SEO";
import useReveal from "../../hooks/useReveal";
import {
  GraduationCap,
  Monitor,
  BookOpen,
  Users,
  ShieldCheck,
  BarChart3
} from "lucide-react";

const Education = () => {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();
  const r4 = useReveal();
  const r5 = useReveal();
  const r6 = useReveal();

  return (
    <main className="industry page-gradient">
      <SEO
        title="Education Technology Solutions | Softgrade Solutions"
        description="Digital transformation solutions for schools, colleges, universities, and EdTech platforms."
      />

      {/* ===== Hero ===== */}
      <section className="industry-hero hero-gradient">
        <GraduationCap className="industry-hero-icon" />
        <h1>Education Technology Solutions</h1>
        <p>
          Empowering educational institutions with secure, scalable, and
          future-ready digital platforms that enhance learning experiences.
        </p>
      </section>

      {/* ===== Overview ===== */}
      <section className="industry-overview">
        <div ref={r1} className="industry-card glass-card reveal">
          <p>
            Softgrade Solutions Private Limited partners with educational
            institutions and EdTech organizations to modernize learning
            environments. We design and deliver digital solutions that improve
            accessibility, engagement, administration, and data-driven
            decision-making.
          </p>
        </div>
      </section>

      {/* ===== Offerings ===== */}
      <section className="industry-grid">
        <div ref={r2} className="industry-tile glass-card reveal">
          <Monitor className="tile-icon" />
          <h3>Learning Management Systems (LMS)</h3>
          <p>
            Custom LMS platforms enabling online learning, assessments,
            content delivery, progress tracking, and student engagement.
          </p>
        </div>

        <div ref={r3} className="industry-tile glass-card reveal">
          <BookOpen className="tile-icon" />
          <h3>Digital Classrooms & Portals</h3>
          <p>
            Secure web and mobile portals for students, teachers, and parents
            with real-time access to schedules, resources, and performance data.
          </p>
        </div>

        <div ref={r4} className="industry-tile glass-card reveal">
          <Users className="tile-icon" />
          <h3>Student & Faculty Management</h3>
          <p>
            Centralized systems for admissions, attendance, academic records,
            faculty workflows, and communication management.
          </p>
        </div>

        <div ref={r5} className="industry-tile glass-card reveal">
          <ShieldCheck className="tile-icon" />
          <h3>Data Security & Compliance</h3>
          <p>
            Protecting sensitive student and institutional data through secure
            architectures, access control, and compliance-driven solutions.
          </p>
        </div>

        <div ref={r6} className="industry-tile glass-card reveal">
          <BarChart3 className="tile-icon" />
          <h3>Analytics & Performance Insights</h3>
          <p>
            Advanced analytics dashboards that provide insights into academic
            performance, engagement trends, and operational efficiency.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Education;
