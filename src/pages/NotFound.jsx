import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <main className="notfound">
      <section className="notfound-wrapper glass-card">
        {/* Animated GIF / Illustration */}
        <div className="notfound-visual">
          <h1>404</h1>
        </div>

        <div className="notfound-content">
          <h2>Looks like you're lost</h2>
          <p>
            The page you are looking for is not available or has been moved.
          </p>

          <Link to="/" className="btn-primary">
            Go to Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
