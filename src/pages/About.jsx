import "../styles/global.css";
import "../styles/About.css"; // file CSS riêng cho phần này
import avatar from "../assets/avatar3.jpg";
import CV from "../assets/CV.pdf";
import Agile from "../assets/Agile_TECHBASE.pdf";

export default function AboutSection() {
  return (
    <section id="about" className="about-container">
      {/* Ảnh đại diện bên trái */}
      <div className="about-left">
        <img
          src={avatar}  // đặt ảnh avatar trong thư mục public/assets
          alt="Tran Thi Thao Nguyen"
          className="about-avatar"
        />
      </div>

      {/* Thông tin bên phải */}
      <div className="about-right">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I'm <strong>Tran Thi Thao Nguyen</strong>, a Computer Science student at Ton Duc Thang University.
          I'm deeply interested in <strong>Artificial Intelligence</strong>,{" "}
          <strong>Machine Learning</strong>, <strong>Deep Learning</strong>, <strong>Natural Language Processing</strong>, and <strong>Data Science</strong> — particularly in
          applying these fields to solve practical challenges.
          <br />
          <br />
          Over the course of my studies, I've developed a strong foundation in{" "}
          algorithms, data processing, and model implementation. My goal is to gain
          real-world experience through internships that allow me to combine creativity
          and technology.
          <br />
          <br />
          <em>
            I value teamwork, adaptability, and continuous learning in every project I work on.
          </em>
        </p>

        

        <div className="about-info">
          <p><strong>Date of Birth:</strong> 20 June 2004</p>
          <p><strong>Current Location:</strong> Nha Be, Ho Chi Minh City, Vietnam</p>
          {/* <p><strong>Education:</strong> Ton Duc Thang University – Computer Science</p> */}
        </div>

        {/* Học vấn */}
        <div className="about-section">
          <h3>Education</h3>
          <p>
            <strong>Ton Duc Thang University</strong> – Bachelor of Computer Science<br />
            {/* <strong>Major:</strong> Artificial Intelligence & Data Science<br /> */}
            <strong>GPA:</strong> 7.72 / 10.0 (Current)<br />
            <strong>Study Period:</strong> 2022 – 2026 <br />
            <strong>Expected Graduation:</strong> 2026<br />
            {/* <strong>Achievements:</strong> University Scholarship for Excellent Academic Performance (2023) */}
          </p>
        </div>
        

        <div className="about-section">
          <h3>Career Objective</h3>
          <p>
            My goal is to gain hands-on experience in Data Science and Artificial Intelligence, 
            focusing on building and optimizing machine learning models to solve real-world problems.
          </p>
        </div>

        {/* 4️⃣ Kỹ năng chính */}
        <div className="about-section">
          <h3>Technical Skills</h3>
          <ul>
            <li><strong>Languages:</strong> Python, C, Java, JavaScript, PHP</li>
            <li><strong>Frameworks:</strong> TensorFlow, Keras, PyTorch, Apache Spark, Hadoop, React, Fast API</li>
            <li><strong>Databases:</strong> MySQL, MongoDB, Supabase</li>
            <li><strong>Tools:</strong> GitHub, Visual Studio Code, Kaggle, Google Colab, Docker, Hugging Face</li>
          </ul>
        </div>

        {/* 5️⃣ Môn học nổi bật */}
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
          {/* <a
            href="/assets/MOS_Excel_Certificate.pdf"
            target="_blank"
            rel="noreferrer"
            className="cert-link"
          >
            Microsoft Office Specialist (Excel) – 2023
          </a> <br />
          <a
            href="/assets/TensorFlow_Certificate.pdf"
            target="_blank"
            rel="noreferrer"
            className="cert-link"
          >
            TensorFlow Developer Certificate – 2024
          </a> <br /> */}
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



        

        <a
          href={CV}
          className="btn-download"
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
