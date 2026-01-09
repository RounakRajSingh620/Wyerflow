import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn
} from "react-icons/fa";

import logo from "../assests/wyreflow.png";

const Footer = () => {
  return (
    <footer style={{ background: "#000", padding: "80px 8%", color: "#fff" }}>
      {/* SOCIAL */}
      <div style={{ marginBottom: "60px" }}>
        <h4 style={{ fontSize: "22px" }}>Social</h4>
        <p style={{ color: "#aaa", marginTop: "6px" }}>
          Follow us for the latest update
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "40px"
          }}
        >
          <SocialItem
            icon={<FaFacebookF />}
            label="Facebook"
            link="https://www.facebook.com/wyreflowtechnologies/"
          />

          <SocialItem
            icon={<FaInstagram />}
            label="Instagram"
            link="https://www.instagram.com/wyreflow_technologies/"
          />

          <SocialItem
            icon={<FaYoutube />}
            label="Youtube"
            link="https://www.youtube.com/@WyreflowTechnologies"
          />

          <SocialItem
            icon={<FaLinkedinIn />}
            label="LinkedIn"
            link="https://www.linkedin.com/company/wyreflow-technologies"
          />
        </div>
      </div>

      <hr style={{ borderColor: "#222", margin: "50px 0" }} />

      {/* LINKS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "80px"
        }}
      >
        <FooterColumn
          title="Industries"
          items={[
            "Banking",
            "Consulting",
            "Communications and Media",
            "E-commerce",
            "Ed-Tech / Education",
            "Government & Public Services",
            "HealthCare",
            "High-Tech",
            "Recruitment",
            "Software and Platforms",
            "Transportation & Logistics"
          ]}
        />

        <FooterColumn
          title="Services"
          items={[
            "Artificial Intelligence",
            "Cloud",
            "Consulting",
            "Cybersecurity",
            "Cognitive Business Operations",
            "Data & Analytics",
            "Enterprises solution",
            "Network Solution and Services"
          ]}
        />

        <FooterColumn
          title="More Information"
          items={[
            "About us",
            "Career",
            "Contact us",
            "Privacy Notice",
            "Terms & Condition"
          ]}
        />
      </div>

      {/* BOTTOM */}
      <div
        style={{
          marginTop: "70px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <img src={logo} alt="Wyreflow logo" style={{ height: "28px" }} />

        <p style={{ color: "#777" }}>© 2024 Wyreflow. All Rights Reserved</p>

        <div style={{ display: "flex", gap: "18px" }}>
          <BottomIcon
            icon={<FaFacebookF />}
            link="https://www.facebook.com/wyreflowtechnologies/"
          />
          <BottomIcon
            icon={<FaInstagram />}
            link="https://www.instagram.com/wyreflow_technologies/"
          />
          <BottomIcon
            icon={<FaYoutube />}
            link="https://www.youtube.com/@WyreflowTechnologies"
          />
          <BottomIcon
            icon={<FaLinkedinIn />}
            link="https://www.linkedin.com/company/wyreflow-technologies"
          />
        </div>
      </div>
    </footer>
  );
};

/* ================= SOCIAL ITEM ================= */

const SocialItem = ({ icon, label, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    style={{
      display: "flex",
      alignItems: "center",
      gap: "14px",
      cursor: "pointer",
      textDecoration: "none",
      color: "#fff"
    }}
    onMouseEnter={e => {
      e.currentTarget.firstChild.style.boxShadow =
        "0 0 18px rgba(255,255,255,0.9)";
      e.currentTarget.firstChild.style.transform = "scale(1.1)";
    }}
    onMouseLeave={e => {
      e.currentTarget.firstChild.style.boxShadow = "none";
      e.currentTarget.firstChild.style.transform = "scale(1)";
    }}
  >
    <div
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: "#fff",
        color: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease"
      }}
    >
      {icon}
    </div>

    <div>
    
      <div>
         <img
  src={require("../assests/wyreflow.png")}
  alt="Wyreflow logo"
  style={{ height: "22px" }}
/>
      </div>

      <div style={{ fontSize: "18px", color: "#ddd" }}>{label}</div>
    </div>
  </a>
);

/* ================= BOTTOM ICON ================= */

const BottomIcon = ({ icon, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    style={{ textDecoration: "none", color: "#fff" }}
  >
    <div
      style={{
        width: "34px",
        height: "34px",
        borderRadius: "50%",
        border: "1px solid #fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.3s ease"
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow =
          "0 0 14px rgba(255,255,255,0.9)";
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      {icon}
    </div>
  </a>
);

/* ================= FOOTER COLUMN ================= */

const FooterColumn = ({ title, items }) => (
  <div>
    <h4 style={{ marginBottom: "18px" }}>{title}</h4>
    {items.map(item => (
      <p
        key={item}
        style={{
          color: "#aaa",
          fontSize: "14px",
          marginBottom: "10px",
          cursor: "pointer"
        }}
      >
        {item}
      </p>
    ))}
  </div>
);

export default Footer;
