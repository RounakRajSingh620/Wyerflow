import { useState } from "react";
import commit from "../assests/commitment.png";
import context from "../assests/context.png";
import beliefs from "../assests/beliefs.png";
import roadmap from "../assests/roadmap.png";

const GLANCE_DATA = {
  commitment: {
    tab: "Our Commitment",
    title: "Fostering Lasting Connections",
    description:
      "We prioritize a long-term perspective, cultivating lasting relationships that drive mutual growth and foster sustainable outcomes.",
    image: commit,
  },
  context: {
    tab: "Our Context",
    title: "Shaping Future-Focused Relationships",
    description:
      "We prioritize enduring partnerships that drive innovation, growth, and long-term success for all involved.",
    image: context,
  },
  beliefs: {
    tab: "Our Beliefs",
    title: "Committed to the Impact We Have on Every Life",
    description:
      "Our guiding beliefs in integrity, excellence, and innovation drive our commitment to achieving impactful results and building lasting trust.",
    image: beliefs,
  },
  roadmap: {
    tab: "Our Roadmap",
    title: "Build and Share Knowledge Pathways",
    description:
      "Develop comprehensive knowledge pathways and facilitate their dissemination, ensuring seamless access to critical insights and expertise across your organization.",
    image: roadmap,
  },
};

const GlanceTabs = () => {
  const [activeKey, setActiveKey] = useState("commitment");
  const activeData = GLANCE_DATA[activeKey];

  return (
    <section className="section">
      <h2>Wyreflow at a Glance</h2>

      {/* TABS */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "40px",
        }}
      >
        {Object.entries(GLANCE_DATA).map(([key, item]) => (
          <button
            key={key}
            onClick={() => setActiveKey(key)}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              fontSize: "18px",
              paddingBottom: "10px",
              cursor: "pointer",
              borderBottom:
                activeKey === key ? "2px solid #fff" : "2px solid transparent",
            }}
          >
            {item.tab}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "60px",
          alignItems: "center",
          marginTop: "60px",
        }}
      >
        {/* LEFT TEXT */}
        <div>
          <h3 style={{ fontSize: "36px", marginBottom: "20px" }}>
            {activeData.title}
          </h3>
          <p style={{ maxWidth: "520px" }}>{activeData.description}</p>
        </div>

        {/* RIGHT IMAGE */}
        <img
          src={activeData.image}
          alt={activeData.title}
          style={{
            width: "100%",
            borderRadius: "18px",
          }}
        />
      </div>
    </section>
  );
};

export default GlanceTabs;
