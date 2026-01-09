import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import v1 from "../assests/vision1.png";
import v2 from "../assests/vision2.png";
import v3 from "../assests/vision3.png";


const DATA = [
  {
    key: "Vision",
    image: v1,
    text: "We will continue to Rise to be an agile, customer-centric, and purpose-led company, delivering best-in-class technology solutions to our stakeholders."
  },
  {
    key: "Purpose",
    image: v2,
    text: "At Wyreflow, our purpose is to lead the digital transformation journey by delivering innovative solutions that empower businesses to thrive in a dynamic world."
  },
  {
    key: "Value",
    image: v3,
    text: "Wyreflow is built on innovation, integrity, and long-term partnerships. We’re committed to delivering sustainable, impactful solutions."
  }
];

const VisionSlider = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index + DATA.length - 1) % DATA.length);
  const next = () => setIndex((index + 1) % DATA.length);

  return (
    <section className="section" style={{ position: "relative" }}>
      
      {/* ARROWS */}
      <div style={{
        position: "absolute",
        top: "20px",
        right: "8%",
        display: "flex",
        gap: "16px"
      }}>
        <ArrowButton onClick={prev}><FaArrowLeft /></ArrowButton>
        <ArrowButton onClick={next}><FaArrowRight /></ArrowButton>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1.2fr",
          alignItems: "center",
          gap: "60px",
          marginTop: "80px"
        }}
      >
        {/* LEFT LABELS */}
        <div>
 {DATA.map((item, i) => (
  <h2
    key={item.key}
    onClick={() => setIndex(i)}
    style={{
      fontSize: "48px",
      marginBottom: "24px",
      color: i === index ? "#fff" : "#555",
      fontWeight: "600",
      cursor: "pointer",
      transition: "color 0.3s ease"
    }}
  >
    {item.key}
  </h2>
))}

        </div>

        {/* CENTER IMAGE */}
        <img
          src={DATA[index].image}
          alt={`${DATA[index].key} illustration`}
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            objectFit: "cover",
            justifySelf: "center"
          }}
        />

        {/* RIGHT TEXT */}
        <p style={{ maxWidth: "420px" }}>
          {DATA[index].text}
        </p>
      </div>
    </section>
  );
};

const ArrowButton = ({ children, onClick }) => (
  <button
    onClick={onClick}
    style={{
      width: "44px",
      height: "44px",
      borderRadius: "50%",
      background: "transparent",
      border: "1px solid #fff",
      color: "#fff",
      cursor: "pointer"
    }}
  >
    {children}
  </button>
);

export default VisionSlider;
