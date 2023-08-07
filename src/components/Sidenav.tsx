/* eslint-disable @next/next/no-img-element */
export default function Sidenav({ isSignedIn }: { isSignedIn: boolean }) {
  return (
    <aside className="aside-nav">
      <nav>
        <h3 style={{ paddingTop: "20px" }}>
          <a href={"/"}>Stack</a>
        </h3>
        <ul>
          <li>
            <h5>
              <a href={"/explore"} className="nav-element">
                <img
                  src="/icons/explore.svg"
                  alt="explore logo"
                  width={15}
                  height={15}
                />{" "}
                Explore
              </a>
            </h5>
          </li>
          {isSignedIn && (
            <>
              <li>
                <h5>
                  <a href={"/create"} className="nav-element">
                    <img
                      src="/icons/create.svg"
                      alt="create logo"
                      width={15}
                      height={15}
                    />{" "}
                    Create
                  </a>
                </h5>
              </li>
              <li>
                <h5>
                  <a href={"/profile"} className="nav-element">
                    <img
                      src="/icons/profile.svg"
                      alt="profile logo"
                      width={15}
                      height={15}
                    />{" "}
                    Profile
                  </a>
                </h5>
              </li>
              <li>
                <h5
                  onClick={() => {
                    document.cookie =
                      "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    window.location.assign(window.location.href);
                  }}
                >
                  <a href={""} className="nav-element">
                    <img
                      src="/icons/signout.svg"
                      alt="signout logo"
                      width={15}
                      height={15}
                    />{" "}
                    Sign Out
                  </a>
                </h5>
              </li>
            </>
          )}

          {!isSignedIn && (
            <>
              <li>
                <h5>
                  <a href={"/create"} className="nav-element">
                    <img
                      src="/icons/create.svg"
                      alt="create logo"
                      width={15}
                      height={15}
                    />{" "}
                    Create
                  </a>
                </h5>
              </li>

              <li>
                <h5>
                  <a href={"/signup"} className="nav-element">
                    <img
                      src="/icons/signup.svg"
                      alt="signup logo"
                      width={15}
                      height={15}
                    />{" "}
                    Sign Up
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
