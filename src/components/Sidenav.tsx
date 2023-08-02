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
                  <a href={"/create"}>
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
                  <a href={"/profile"}>
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
                  <a href={"/signin"}>
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
                  <a href={"/signup"}>
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
