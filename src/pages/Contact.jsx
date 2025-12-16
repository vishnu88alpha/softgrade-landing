import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  /* ================= VALIDATION ================= */
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    if (form.phone && form.phone.length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please enter your message";
    }

    return newErrors;
  };

  /* ================= HANDLERS ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });

    // Clear error as user types
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");

    // Simulated submit
    setTimeout(() => {
      setStatus("success");
      setForm({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <main className="contact page-gradient">
      {/* ===== Hero ===== */}
      <section className="contact-hero hero-gradient">
        <h1>Contact Us</h1>
        <p>
          We look forward to discussing how Softgrade Solutions Private Limited
          can support your business objectives.
        </p>
      </section>

      {/* ===== Content ===== */}
      <section className="contact-content">
        {/* ===== Info Card ===== */}
        <div className="contact-info glass-card">
          <h3>Office Locations</h3>

          <div className="info-grid">
            <div className="info-block fade-in">
              <span className="info-icon">📍</span>
              <div>
                <strong>Head Office – India</strong>
                <p>
                  SURVEY NO: 93, KOTARLAPALLI (VIL),
                  <br />
                  49 KOTHAPALLI MITTA (POST),
                  <br />
                  SR PURAM (MON),
                  <br />
                  CHITTOOR, Andhra Pradesh – 517167
                </p>
              </div>
            </div>

            <div className="info-block fade-in">
              <span className="info-icon">📞</span>
              <div>
                <p><strong>Phone:</strong> +91 93478 74316</p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:support@softgradesolutions.com"
                    className="email-link"
                  >
                    support@softgradesolutions.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Form Card ===== */}
        <form className="contact-form glass-card" onSubmit={handleSubmit} noValidate>
          <h3>Get in Touch</h3>

          <div className="field">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </div>

          <div className="field">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </div>

          <div className="field">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="field-error">{errors.phone}</span>}
          </div>

          <div className="field">
            <textarea
              name="message"
              rows="4"
              placeholder="Address / Message"
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && (
              <span className="field-error">{errors.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="btn-gradient btn-full"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="success" aria-live="polite">
              Thank you for contacting us. Our team will reach out shortly.
            </p>
          )}
        </form>
      </section>
    </main>
  );
};

export default Contact;
