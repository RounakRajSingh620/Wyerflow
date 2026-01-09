import bg from "../assests/cta.png";

const CTA = () => (
  <section
    style={{
      background: `linear-gradient(to right,#000,transparent),url(${bg}) center/cover`,
      padding: "120px 8%"
    }}
  >
    <h2>Where Technology Meets Vision</h2>
    <p>Combining technology and vision to drive innovation and growth.</p>

    {/* JOIN US LINK */}
    <a
      href="https://wyreflow.com/pages-html/career.html"
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <button
        style={{
          padding: "12px 30px",
          borderRadius: "30px",
          cursor: "pointer"
        }}
      >
        JOIN US →
      </button>
    </a>
  </section>
);

export default CTA;
