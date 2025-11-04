import "../styles/global.css";
import "../styles/Home.css";
// import { PiHandPeaceThin } from "react-icons/pi";
import { PiHandWaving } from "react-icons/pi";


export default function Home() {
  return (
    <div className="andreas-layout">
      {/* HERO SECTION */}
      <section className="hero">
        <h2 className="hero-title"><PiHandWaving /> Hi, I'm Thao Nguyen</h2>
        <p className="hero-desc">
          A Computer Science student passionate about Artificial Intelligence, Machine Learning, and Data Science. <br />
          Based in Ho Chi Minh City, Vietnam.
        </p>
      </section>
    </div>
  );
}