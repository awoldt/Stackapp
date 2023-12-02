/* eslint-disable @next/next/no-img-element */
export default function Nav({ isSignedIn }: { isSignedIn: boolean }) {
  return (
    <>
      <nav className="nav">
        <div className="nav-left">
          <ul>
            <li>
              <a href="/" className="nav-logo">
                Stack
              </a>
            </li>
            <li>
            <a href="/explore" className="nav-element" style={{ display: "flex", alignItems: "center", marginBottom: "0", marginTop: "0"}}>
                {/* <img src="/imgs/icons/globe.svg" />&nbsp; */}
                Explore
              </a>
            </li>

            {isSignedIn && (
              <>
                <li>
                  <a href="/create" className="nav-element" style={{ display: "flex", alignItems: "center", marginBottom: "0", marginTop: "0"}}>
                  {/* <img src="/imgs/icons/create.svg" />&nbsp; */}
                  Create
                  </a>
                </li>
                <li>
                  <a href="/profile" className="nav-element" style={{ display: "flex", alignItems: "center", marginBottom: "0", marginTop: "0"}}>
                  {/* <img src="/imgs/icons/profile.svg" />&nbsp; */}
                  Profile
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
        {!isSignedIn && (
          <div className="nav-right">
            <ul>
              <li>
                <a href="/signup" className="nav-signup">
                Sign Up
                </a>
              </li>
              <li>
                <a href="/signin" className="nav-element" style={{ display: "flex", alignItems: "center", marginBottom: "0", marginTop: "0"}}>
                  {/* <img src="/imgs/icons/signup.svg" />&nbsp; */}
                  Login
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
