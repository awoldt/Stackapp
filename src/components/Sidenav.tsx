/* eslint-disable @next/next/no-img-element */
export default function Sidenav({ isSignedIn }: { isSignedIn: boolean }) {
  return (
    <aside className="aside-nav">
      <nav>
        <h3>
          <a href={"/"} style={{ paddingTop: "20px" }}>
            Stack
          </a>
        </h3>
        <ul>
          {isSignedIn && (
            <>
              <li className="nav-element">
                <h5>
                  <a href={"/explore"}
                    style={{ padding: "0px" }}
                  >
                    <img
                      src="/icons/explore.svg"
                      alt="explore logo"
                      width={25}
                      height={15}
                    />
                    Explore
                  </a>
                </h5>
              </li>
              <li className="nav-element">
                <h5>
                  <a href={"/create"}
                    style={{ padding: "0px" }}
                  >
                    <img
                      src="/icons/create.svg"
                      alt="create logo"
                      width={25}
                      height={15}
                    />
                    Create
                  </a>
                </h5>
              </li>
              <li className="nav-element">
                <h5>
                  <a href={"/profile"}
                    style={{ padding: "0px" }}
                  >
                    <img
                      src="/icons/profile.svg"
                      alt="profile logo"
                      width={25}
                      height={15}
                    />
                    Profile
                  </a>
                </h5>
              </li>
              <li className="nav-element" style={{ cursor: "pointer" }}>
                <h5
                  onClick={() => {
                    document.cookie =
                      "uid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    window.location.assign(window.location.href);
                  }}
                >
                  <img
                    src="/icons/signout.svg"
                    alt="signout logo"
                    width={25}
                    height={15}
                  />
                  Sign Out
                </h5>
              </li>
            </>
          )}

          {!isSignedIn && (
            <>
              <li className="nav-element">
                <h5>
                  <a href={"/explore"}
                    style={{ padding: "0px" }}
                  >
                    <img
                      src="/icons/explore.svg"
                      alt="explore logo"
                      width={25}
                      height={15}
                      style={{ padding: "0px" }}
                    />
                    Explore
                  </a>
                </h5>
              </li>
              <li className="nav-element">
                <h5>
                  <a href={"/create"}
                    style={{ padding: "0px" }}
                  >
                    <img
                      src="/icons/create.svg"
                      alt="create logo"
                      width={25}
                      height={15}
                    />
                    Create
                  </a>
                </h5>
              </li>
              <li className="nav-element">
                <h5>
                  <a href={"/signin"}
                    style={{ padding: "0px" }}
                  >
                    <img
                      src="/icons/signin.svg"
                      alt="signin logo"
                      width={25}
                      height={15}
                    />
                    Sign In
                  </a>
                </h5>
              </li>
              <li className="nav-element">
                <h5>
                  <a href={"/signup"}
                    style={{ padding: "0px" }}
                  >
                    <img
                      src="/icons/signup.svg"
                      alt="signup logo"
                      width={25}
                      height={15}
                    />
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
