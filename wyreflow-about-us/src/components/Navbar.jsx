const Navbar = () => {
  return (
  <nav
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "80px",          
    zIndex: 1000,
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(8px)",
    display: "flex",
    justifyContent: "space-around" ,
    alignItems: "center",
    padding: "0 8%"
  }}
>

  <img
  src={require("../assests/wyreflow.png")}
  alt="Wyreflow logo"
  style={{ height: "32px" }}
/>

      <ul style={{display:"flex", gap:"30px", listStyle:"none"}}>
        <li>Home</li>
        <li>Services</li>
        <li style={{borderBottom:"2px solid #fff"}}>About Us</li>
        <li>Career</li>
        <li>Industries</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
