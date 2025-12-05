import "../styles/global.css";
import "../styles/Contact.css";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { LuSparkles } from "react-icons/lu";
import { SiZalo } from "react-icons/si";
import { SiHuggingface, SiKaggle } from "react-icons/si";


export default function ContactSection() {
  return (
    <section id="contact" className="contact-container">
      <h2 className="contact-title">Contact</h2>

      <p className="contact-desc">
        Feel free to reach out for internship opportunities or collaborations!
      </p>

      <ul className="contact-list">
        <li className="email"><MdEmail /> <strong>Email:</strong> <a href="mailto:thaonguyen01122024@gmail.com">thaonguyen01122024@gmail.com</a></li>
        <li className="phone"><FaPhone /> <strong>Phone:</strong> <a href="tel:+84354151057">+84 354 151 057</a></li>
        <li className="facebook"><FaFacebook /> <strong>Facebook:</strong>{" "}<a href="https://www.facebook.com/thaonguyencktv" target="_blank" rel="noreferrer">facebook.com/thaonguyencktv</a></li>
        <li className="zalo"><SiZalo /> <strong>Zalo:</strong> <a href="https://zalo.me/0354151057" target="_blank" rel="noreferrer">zalo.me/0354151057</a></li>
        <li className="linkedin"><FaLinkedin /> <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/thao-nguyen-tran-441a78320/" target="_blank" rel="noreferrer">linkedin.com/in/thao-nguyen-tran-441a78320</a></li>
        <li className="github"><FaGithub /> <strong>GitHub:</strong> <a href="https://github.com/thaonguyen20604" target="_blank" rel="noreferrer">github.com/thaonguyen20604</a></li>
        <li className="huggingface"><SiHuggingface /> <strong>HuggingFace:</strong>{" "}<a href="https://huggingface.co/tnguyen20604" target="_blank" rel="noreferrer">huggingface.co/tnguyen20604</a></li>
        <li className="kaggle"><SiKaggle /> <strong>Kaggle:</strong>{" "}<a href="https://www.kaggle.com/nguyentran20604" target="_blank" rel="noreferrer">kaggle.com/nguyentran20604</a></li>
      </ul>

      <div className="contact-footer">
        <p><LuSparkles /> Let's build something amazing together!</p>
      </div>
    </section>
  );
}
