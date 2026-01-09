import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ_DATA = [
  {
    question: "What does Wyreflow do?",
    answer:
      "Wyreflow offers a range of services including application services, ITES, mobility, cloud, big data, machine learning, and AI."
  },
  {
    question: "What is the future for Wyreflow?",
    answer:
      "Wyreflow’s future is driven by innovation, agility, and a strong focus on customer-centric digital transformation."
  },
  {
    question: "How can Wyreflow help my business grow?",
    answer:
      "Wyreflow helps businesses grow by delivering scalable, secure, and innovative technology solutions tailored to their needs."
  },
  {
    question: "What industries does Wyreflow serve?",
    answer:
      "Wyreflow serves multiple industries including healthcare, finance, manufacturing, education, and public services."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className="section">
      <h2 style={{ marginBottom: "40px" }}>Frequently Asked Questions</h2>

      {FAQ_DATA.map((item, index) => {
        const isOpen = index === activeIndex;

        return (
          <div
            key={index}
            style={{
              borderBottom: "1px solid #222",
              padding: "28px 0"
            }}
          >

            <div
              onClick={() => toggleFAQ(index)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer"
              }}
            >
              <h4 style={{ fontSize: "18px", fontWeight: "500" }}>
                {item.question}
              </h4>

              {isOpen ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </div>

       
            {isOpen && (
              <p
                style={{
                  marginTop: "14px",
                  maxWidth: "900px",
                  color: "#ccc",
                  fontSize: "15px",
                  lineHeight: "1.8"
                }}
              >
                {item.answer}
              </p>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default FAQ;
