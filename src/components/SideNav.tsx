/* eslint-disable @next/next/no-img-element */
export default function Nav() {
  return (
    <>
  <nav className="nav">
    <div className="nav-left">
      <ul>
        <li><a href="/" className="nav-logo">Stack</a></li>
        <li><a href="/" className="nav-element">Create</a></li>
        <li><a href="/" className="nav-element">Profile</a></li>
      </ul>
    </div>
    <div className="nav-right">
      <ul>
        <li><a href="/" className="nav-signup">Sign Up</a></li>
        <li><a href="/" className="nav-element">Login</a></li>
      </ul>
    </div>
  </nav>
    </>
  );
}
