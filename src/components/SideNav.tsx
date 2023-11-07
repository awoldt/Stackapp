/* eslint-disable @next/next/no-img-element */
export default function Nav() {
  return (
    <>
  <nav className="nav">
    <div className="nav-left">
      <ul>
        <li><a href="/" className="nav-logo">Stack</a></li>


        {/* SHOULD DISPLAY ONLY WHEN USER HAS SIGNED IN */}
        <li><a href="/create" className="nav-element">Create</a></li>
        <li><a href="/profile" className="nav-element">Profile</a></li>
        {/* *** */}


      </ul>
    </div>
    <div className="nav-right">
      <ul>

        
        {/* SHOULD DISPLAY ONLY WHEN USER IS NOT SIGNED IN */}
        <li><a href="/signup" className="nav-signup">Sign Up</a></li>
        <li><a href="/signin" className="nav-element">Login</a></li>
        {/* *** */}


      </ul>
    </div>
  </nav>
    </>
  );
}
