export default function Footer() {
  const myStyle = {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    cursor: "pointer",
    fontSize: "14px",
    opacity: 1,
  };

  return (
    <footer>
      <div className="footer-container">
        <a
          className="nav-element"
          style={myStyle}
          href="/tech"
          title="View all technologies offered to make your Stack with"
        >
          Technologies
        </a>
        <a className="nav-element" style={myStyle} href={"/privacy"}>
          Privacy Policy
        </a>
        {/* <a className="nav-element" style={myStyle} href={"/about"}>
          About Stack
        </a> */}
      </div>
      <hr />
      <div className="footer-container" style={{ marginBottom: "2rem" }}>
        <p style={{ fontSize: "12px" }}>&copy;Stack 2023. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
