// import hero from "../assests/hero.png";

const AboutHero = () => {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
       height: "calc(100vh - 80px)",
marginTop: "80px",  

        overflow: "hidden"
      }}
    >
      {/* BACKGROUND IMAGE */}
      <img
        src={require("../assests/hero.png")}
        alt="Wyreflow About background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1
        }}
      />

      {/* GRADIENT OVERLAY (NOT FULL BLACK) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.1) 100%)",
          zIndex: 2
        }}
      />

      {/* CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0 8%"
        }}
      >
        <div style={{ maxWidth: "620px" }}>
          <span
            style={{
              color: "#aaa",
              letterSpacing: "1px",
              fontSize: "14px"
            }}
          >
            | About
          </span>

          <h1
            style={{
              fontSize: "64px",
              fontWeight: "700",
              lineHeight: "1.15",
              margin: "20px 0"
            }}
          >
            Building Digital Pathways <br /> for Success
          </h1>

          <p
            style={{
              fontSize: "16px",
              color: "#ddd",
              maxWidth: "520px",
              lineHeight: "1.7"
            }}
          >
            At Wyreflow, we create innovative digital solutions that drive
            growth and transform your business for long-term success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
