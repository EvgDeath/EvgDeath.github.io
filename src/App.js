import React, { useState } from "react";
import './App.css';

function App() {
  const [modalContent, setModalContent] = useState(""); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  return (
    <div>
      <header style={{ textAlign: "center", padding: "10px", backgroundColor: "#f5f5f5" }}>
        <h1>React.js</h1>
      </header>
      <main style={{ margin: "20px" }}>
        <section className="section1" onClick={() => openModal("Це тестовий проєкт React. В цій секції може розміщуватися вступний опис контенту.")}>
          <h2>Тестовий проєкт react</h2>
          <p>Опис проєкту (клік для інфо)</p>
        </section>
        <section className="section2" onClick={() => openModal("Це основна робоча область. Дана секція може містити будь який контент: текст, зображення, відео, аудіо тощо.")}>
          <h2>Робоча область</h2>
          <p>Тут місце для контенту (клік для інфо)</p>
        </section>
      </main>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
      <footer style={{ textAlign: "center", padding: "10px", backgroundColor: "#f5f5f5" }}>
        <h3>Чуприна Євгеній 2024</h3>
        <a href="https://github.com/EvgDeath">GitHub</a>
      </footer>
    </div>
  );
}

export default App;