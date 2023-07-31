/* eslint-disable @next/next/no-img-element */
export default function Sidenav({ isSignedIn }: { isSignedIn: boolean }) {
  return (
    <aside className="aside-nav">
      <nav>
        <h3>
          <a href={"/"} style={{ paddingTop: "20px" }}>Stack</a>
        </h3>
        <ul>
          {isSignedIn && (
            <>
              <li className="nav-element">
                <h5>
                  <a href={"/create"}>Create
                  </a>
                </h5>
              </li>
              <li className="nav-element">
                <h5>
                  <a href={"/profile"}>
                    Profile
                  </a>
                </h5>
              </li>
              <li className="nav-element" style={{ cursor: "pointer" }}>
                <h5
                  onClick={() => {
                    document.cookie =
                      "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    window.location.assign("/");
                  }}
                >
                  Sign Out
                </h5>
              </li>
            </>
          )}

          {!isSignedIn && (
            <>
              <li className="nav-element">
                <h5>
                  <a href={"/signin"}>Sign In
                  </a>
                </h5>
              </li>
              <li className="nav-element">
                <h5>
                  <a href={"/signup"}>Sign Up
                  </a>
                </h5>
              </li>
            </>
          )}
        </ul>
      </nav>
    </aside>
  );
}
