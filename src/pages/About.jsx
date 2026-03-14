import "../styles/global.css";
import "../styles/About.css";
import avatar from "../assets/avatar3.jpg";
import Agile from "../assets/Agile_TECHBASE.pdf";
import Aptis from "../assets/Aptis_Certificate.pdf";
import transcript from "../assets/Academic_Transcript.pdf";

export default function AboutSection() {
  return (
    <section id="about" className="about-container">
      {/* Ảnh đại diện bên trái */}
      <div className="about-left">
        <img
          src={avatar} 
          alt="Tran Thi Thao Nguyen"
          className="about-avatar"
        />
      </div>

      {/* Thông tin bên phải */}
      <div className="about-right">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I'm <strong>Tran Thi Thao Nguyen</strong>, a Computer Science student at Ton Duc Thang University.
          I have a strong interest in <strong>technology, data, and user-centered problem solving</strong>.
          Throughout my studies, I’ve built a solid foundation across <strong>software development, data analysis, system design, and product thinking</strong>.
          <br /><br />
          I enjoy exploring how technology can be applied to real-world challenges—from analyzing data 
          and designing intuitive user experiences to developing reliable software systems.
          <br /><br />
          My goal is to gain hands-on experience in a dynamic working environment where I can contribute,
          learn from others, and expand my skills across both technical and product-oriented roles.
          <br /><br />
          <em>I value teamwork, adaptability, and continuous improvement in every project I take on.</em>
        </p>

        

        <div className="about-info">
          <p><strong>Date of Birth:</strong> 20 June 2004</p>
          <p><strong>Current Location:</strong> Nha Be, Ho Chi Minh City, Vietnam</p>
        </div>

        {/* Học vấn */}
        <div className="about-section">
          <h3>Education</h3>
          <p>
            <strong>Ton Duc Thang University</strong> – Bachelor of Computer Science<br />
            <strong>GPA:</strong> 7.83 / 10.0 (Current)<br />
            <strong>Study Period:</strong> 2022 – 2026 <br />
            <strong>Expected Graduation:</strong> 2026<br />
            <strong>Transcript: </strong> 
            <a
              href={transcript}
              target="_blank"
              rel="noreferrer"
              className="cert-link"
            >
            View Transcript (PDF)
          </a><br />
          </p>
        </div>
        

        <div className="about-section">
          <h3>Career Objective</h3>
          <p>
            To gain hands-on experience in a dynamic environment where I can apply my skills in 
            software development, data analysis, system design, and problem-solving. I aim to 
            contribute to real-world projects while continuously expanding my capabilities across both technical and product-oriented roles.
          </p>
        </div>

        {/* Kỹ năng chính */}
        <div className="about-section">
          <h3>Technical Skills</h3>
          <ul>
            <li><strong>Programming Languages:</strong> Python, C, Java, JavaScript, PHP</li>
            <li><strong>Frameworks:</strong> TensorFlow, Keras, PyTorch, Apache Spark, Hadoop, React, Fast API</li>
            <li><strong>Databases:</strong> MySQL, MongoDB, Supabase</li>
            <li><strong>Tools:</strong> GitHub, Visual Studio Code, Kaggle, Google Colab, Hugging Face, Docker, Figma, Draw.io, Word, Excel, PowerPoint</li>
          </ul>
        </div>

        {/* Môn học nổi bật */}
        <div className="about-section">
          <h3>Relevant Coursework</h3>
          <p>
            Data Structures, Artificial Intelligence, Machine Learning, Deep Learning,
            Natural Language Processing, Massive Data Processing.
          </p>
        </div>

        <div className="about-section">
          <h3>Certificates</h3>
          <a
            href={Agile}
            target="_blank"
            rel="noreferrer"
            className="cert-link"
          >
            Agile Development & Scrum Framework – Issued 25/10/2024 by TECHBASE (at Ton Duc Thang University)
          </a> <br />
          <a
            href={Aptis}
            target="_blank"
            rel="noreferrer"
            className="cert-link"
          >
            Aptis English Certificate (B2 – CEFR) – Issued 01/03/2026 by British Council
          </a> <br />
        </div>

        <div className="about-section">
          <h3>Languages</h3>
          <ul>
            <li><strong>Vietnamese:</strong> Native</li>
            <li><strong>English:</strong> B2 (CEFR)</li>
          </ul>
        </div>

        <div className="about-section">
          <h3>Soft Skills</h3>
          <ul>
            <li>Teamwork and collaboration</li>
            <li>Critical thinking and problem-solving</li>
            <li>Time management and adaptability</li>
            <li>Continuous learning mindset</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
