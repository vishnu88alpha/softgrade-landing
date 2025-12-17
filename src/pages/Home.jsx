import "./Home.css";
import banner from "../assets/banner.webp";
import {
  Rocket,
  ShieldCheck,
  Lightbulb,
  Users,
  Layers,
  Cpu,
} from "lucide-react";
import useReveal from "../hooks/useReveal";

import { Link } from "react-router-dom";

const Home = () => {
  const r1 = useReveal();
  const r2 = useReveal();
  const r3 = useReveal();
  const r4 = useReveal();
  const r5 = useReveal();
  const r6 = useReveal();

  return (
    <main className="home page-gradient">
      {/* ================= HERO / BANNER ================= */}
      <section className="banner hero-gradient">
        <img src={banner} alt="Technology Consulting Banner" />
        <div className="banner-overlay">
          <h1>Technology-Driven Consulting</h1>
          <p>Delivering value through innovation & execution</p>

          <div className="banner-cta">
            <Link
              to="/services/application-development"
              className="btn-gradient btn-lg"
            >
              Get Started
            </Link>

            <Link to="/contact" className="btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="what-we-do">
        <h2>What We Do</h2>

        <div className="tiles">
          <div ref={r1} className="tile glass-card reveal">
            <Rocket className="tile-icon" />
            <h4>Execution</h4>
            <p>Highly skilled teams delivering reliable results.</p>
          </div>

          <div ref={r2} className="tile glass-card reveal">
            <ShieldCheck className="tile-icon" />
            <h4>Quality</h4>
            <p>World-class standards aligned to business goals.</p>
          </div>

          <div ref={r3} className="tile glass-card reveal">
            <Lightbulb className="tile-icon" />
            <h4>Innovation</h4>
            <p>Modern tools and end-to-end product expertise.</p>
          </div>
        </div>
      </section>

      {/* ================= DIFFERENCE ================= */}
      <section className="difference">
        <h2>What makes us different?</h2>

        <div className="tiles">
          <div ref={r4} className="tile glass-card reveal">
            <Users className="tile-icon" />
            <h4>Efficient Teams</h4>
            <p>Flexible and execution-focused professionals.</p>
          </div>

          <div ref={r5} className="tile glass-card reveal">
            <Layers className="tile-icon" />
            <h4>Industry Knowledge</h4>
            <p>Deep experience across multiple industries.</p>
          </div>

          <div ref={r6} className="tile glass-card reveal">
            <Cpu className="tile-icon" />
            <h4>Cutting Edge Tech</h4>
            <p>Secure, scalable, and future-ready systems.</p>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats">
        <div className="stat glass-card">
          <h3>9+</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat glass-card">
          <h3>60+</h3>
          <p>Projects Delivered</p>
        </div>
        <div className="stat glass-card">
          <h3>10+</h3>
          <p>Enterprise Clients</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
