import { useState } from "react";
import "../styles/global.css";
import "../styles/Projects.css";
import { FcBrokenLink } from "react-icons/fc";
import Select from "react-select";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";




export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const projects = [
    {
      name: "Contract Management System",
      desc: "A contract management system developed with C# .NET Framework and SQL Server, following a 3-tier architecture.",
      category: "Software Engineering",
      // img: "/images/projects/contract.jpg",
      link: "https://github.com/thaonguyen20604/Contract-Management-System"
    },
    {
      name: "Voice-Controlled IoT System",
      desc: "Smart home system that allows users to control devices via Google Assistant commands using ESP32, Firebase, and Flutter.",
      category: "Internet of Things",
      // img: "/images/projects/iot.jpg",
      link: "https://github.com/thaonguyen20604/Voice-Controlled-IoT-System"
    },
    {
      name: "POS Web Application",
      desc: "A full-stack point-of-sale (POS) web app for retail management using HTML, CSS, JavaScript, PHP, and MySQL.",
      category: "Web Development",
      // img: "/images/projects/pos.jpg",
      link: "https://github.com/thaonguyen20604/POS-Web-Application"
    },
    {
      name: "Tuition Payment Website",
      desc: "A microservices-based web application that simulates the tuition payment module of an iBanking system.",
      category: "Web Development",
      // img: "/images/projects/pos.jpg",
      link: "https://github.com/thaonguyen20604/Tuition-Payment-Website"
    },
    {
      name: "Tutor Management System",
      desc: "A web-based platform for managing tutor profiles, session scheduling, document submissions, and approval workflows, featuring role-based access control and RESTful API integration.",
      category: "Web Development",
      // img: "/images/projects/tutor_system.jpg",
      link: "https://github.com/thaonguyen20604/Tutor-Management-System"
    },
    {
      name: "Watermark Security System",
      desc: "Information security project implementing DCT/DWT-based digital watermarking to protect image copyrights.",
      category: "Information Security",
      // img: "/images/projects/watermark.jpg",
      link: "https://github.com/thaonguyen20604/Watermark-Security-System"
    },
    {
      name: "Stock Price Prediction",
      desc: "Machine learning model predicting stock opening prices using Linear Regression, SVR, Decision Tree, Random Forest, and Neural Networks (FNN & RNN).",
      category: "Machine Learning",
      // img: "/images/projects/stock.jpg",
      link: "https://github.com/thaonguyen20604/Stock-Price-Prediction"
    },
    {
      name: "House Price Prediction",
      desc: "Data mining project using crawled real-estate data to predict house prices via regression models.",
      category: "Machine Learning",
      // img: "/images/projects/house.jpg",
      link: "https://github.com/thaonguyen20604/House-Price-Prediction"
    },
    {
      name: "8-Puzzle",
      desc: "A Python-based AI project implementing Breadth-First Search (BFS) and A* algorithms to solve the 8-Puzzle problem.",
      category: "Artificial Intelligence",
      // img: "/images/projects/pacman.jpg",
      link: "https://github.com/thaonguyen20604/8-Puzzle"
    },
    {
      name: "Pacman",
      desc: "A Python-based AI project implementing Uniform Cost Search (UCS) and A* algorithms to guide Pacman through a maze to collect all food pellets and visit all four corners.",
      category: "Artificial Intelligence",
      // img: "/images/projects/pacman.jpg",
      link: "https://github.com/thaonguyen20604/Pacman"
    },
    {
      name: "Local Search",
      desc: "Local search project implementing Hill Climbing, Simulated Annealing, and Beam Search to optimize evaluation on the Mona Lisa surface, visualized in 3D with Matplotlib.",
      category: "Artificial Intelligence",
      // img: "/images/projects/pacman.jpg",
      link: "https://github.com/thaonguyen20604/Local-Search"
    },
    {
      name: "VQR with ResNet-CNN-LSTM",
      desc: "Visual Question Answering (VQA) combining CNN and LSTM networks, trained on animal image datasets to answer visual questions such as recognition, counting, and color classification.",
      category: "Deep Learning",
      // img: "/images/projects/ocr.jpg",
      link: "https://github.com/thaonguyen20604/VQR-with-ResNet-CNN-LSTM"
    },
    {
      name: "OCR with CNN-Transformer Decoder",
      desc: "Deep Learning model to extract text from images using CNN and Transformer decoder.",
      category: "Deep Learning",
      // img: "/images/projects/ocr.jpg",
      link: "https://github.com/thaonguyen20604/OCR-with-CNN-Transformer-Decoder"
    },
    {
      name: "N-gram Model for Next-Word Prediction in Vietnamese",
      desc: "NLP project implementing an N-gram language model to predict the next word and compute its probability using bigram/trigram statistics with Laplace smoothing.",
      category: "Natural Language Processing",
      // img: "/images/projects/nlp.jpg",
      link: "https://github.com/thaonguyen20604/N-gram-Model-for-Next-Word-Prediction-in-Vietnamese"
    },
    {
      name: "Vietnamese Toxic Text Classification",
      desc: "Vietnamese toxic comment classification using TF-IDF and PhoBERT embeddings with Logistic Regression, Naive Bayes, and SVM models. Achieved 86.9% accuracy on the ViHSD + Kaggle dataset.",
      category: "Natural Language Processing",
      // img: "/images/projects/nlp.jpg",
      link: "https://github.com/thaonguyen20604/Vietnamese-Toxic-Text-Classification"
    },
    {
      name: "Vietnamese Language Generation Model with LSTM",
      desc: "Vietnamese language model using a 2-layer LSTM network for text generation, trained on Kaggle Vietnamese corpus with perplexity about 5.5.",
      category: "Natural Language Processing",
      // img: "/images/projects/nlp.jpg",
      link: "https://github.com/thaonguyen20604/Vietnamese-Language-Generation-Model-with-LSTM"
    },
    {
      name: "Vietnamese Language Generation Model with Ngram",
      desc: "Vietnamese text generation using a statistical N-gram language model with Kneser-Ney smoothing and perplexity evaluation.",
      category: "Natural Language Processing",
      // img: "/images/projects/nlp.jpg",
      link: "https://github.com/thaonguyen20604/Vietnamese-Language-Generation-Model-with-Ngram"
    },
    {
      name: "Machine Translation Model",
      desc: "A Vietnamese–English neural machine translation system built using Transformer architectures (ViT5, Qwen, PhoBERT), enhanced with GPT-generated synthetic data and a DPO-inspired preference optimization.",
      category: "Natural Language Processing",
      // img: "/images/projects/machine_translation.jpg",
      link: "https://github.com/thaonguyen20604/Machine-Translation"
    },
    {
      name: "VRPTW Optimization",
      desc: "Last-Mile Delivery optimization using Solomon heuristic and Tabu Search.",
      category: "Optimization Algorithms",
      // img: "/images/projects/vrptw.jpg",
      link: "https://github.com/thaonguyen20604/VRPTW-Optimization-in-LMD"
    },
    {
      name: "Hierarchical clustering in non-Euclidean spaces",
      desc: "Implemented an agglomerative (bottom-up) hierarchical clustering algorithm in the form of a class to cluster a synthetic dataset of 10,000 alphabetical strings (length [32, 64]) in a non-Euclidean space.",
      category: "Massive Data Processing",
      // img: "/images/projects/pagerank.jpg",
      link: "https://github.com/thaonguyen20604/Hierarchical-clustering-in-non-Euclidean-spaces"
    },
    {
      name: "Page Rank with PySpark",
      desc: "Implemented Google’s PageRank algorithm in PySpark to rank 400+ pages from it.tdtu.edu.vn. The system crawls, builds a link graph, and iteratively computes page importance scores with damping factor 0.85 until convergence.",
      category: "Massive Data Processing",
      // img: "/images/projects/pagerank.jpg",
      link: "https://github.com/thaonguyen20604/Page-Rank-with-PySpark"
    },
    {
      name: "PCY Algorithm for Frequent Items",
      desc: "Implemented the PCY (Park-Chen-Yu) Algorithm using PySpark DataFrames to identify frequent item pairs and generate association rules.",
      category: "Massive Data Processing",
      // img: "/images/projects/pagerank.jpg",
      link: "https://github.com/thaonguyen20604/PCY-Algorithm-for-Frequent-Items"
    },
    {
      name: "MinHashLSH for Similar Dates",
      desc: "Implemented the MinHashLSH (Locality-Sensitive Hashing) algorithm using PySpark DataFrames to discover pairs of dates (day, month, year) with a Jaccard similarity of at least s.",
      category: "Massive Data Processing",
      // img: "/images/projects/pagerank.jpg",
      link: "https://github.com/thaonguyen20604/MinHashLSH-for-Similar-Dates"
    }
  ];

  const categories = [
  "All",
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing",
  "Internet of Things",
  "Web Development",
  "Information Security",
  "Software Engineering",
  "Optimization Algorithms",
  "Massive Data Processing"
];


  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.category === filter);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + projectsPerPage);

  return (
    <section id="myprojects" className="section project-section">
      <h2>My Projects</h2>

      <Select
        className="custom-select"
        value={{ value: filter, label: filter }}
        onChange={(selected) => {
          setFilter(selected.value);
          setCurrentPage(1);
        }}
        options={categories.map(cat => ({ value: cat, label: cat }))}
        styles={{
          control: (base, state) => ({
            ...base,
            borderRadius: "10px",
            border: state.isFocused ? "2px solid #000" : "1.5px solid #ccc",
            boxShadow: state.isFocused ? "0 0 6px rgba(0,0,0,0.15)" : "none",
            "&:hover": { borderColor: "#555" },
            padding: "2px",
            fontWeight: 500,
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? "#f2f2f2" : "white",
            color: "#333",
            cursor: "pointer",
            padding: "8px 12px",
            borderRadius: "6px",
          }),
          menu: (base) => ({
            ...base,
            borderRadius: "10px",
            marginTop: "5px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            zIndex: 10,
          }),
        }}
      />

      {/* Projects Grid */}
      <div className="project-grid">
        {paginatedProjects.map((p, i) => (
          <div key={i} className="project-card">
            {/* <img src={p.img} alt={p.name} className="project-img" /> */}
            <h3>{p.name}</h3>
            <p>{p.desc}</p>
            <a href={p.link} target="_blank" rel="noreferrer">
              <FcBrokenLink /> View Project
            </a>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
          <IoIosArrowRoundBack />
        </button>
        <span>{currentPage} / {totalPages}</span>
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
          <IoIosArrowRoundForward />
        </button>
      </div>

    </section>
  );
}
