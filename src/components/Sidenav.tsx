/* eslint-disable @next/next/no-img-element */
export default function Sidenav({ isSignedIn }: { isSignedIn: boolean }) {
  return (
    <><aside className="aside-nav">
      <nav>
        <span className="title">
          <a href={"/"}>
            Stack
          </a>
        </span>

        <ul>
          {isSignedIn && (
            <>
              <li>
                <span className="subtitle">
                  <a href={"/explore"} className="nav-element">
                    <img
                      src="/icons/explore.svg"
                      alt="explore logo"
                      width={15}
                      height={15} />{" "}
                    Explore
                  </a>
                </span>
              </li>
              <li>
                <span className="subtitle">
                  <a href={"/create"} className="nav-element">
                    <img
                      src="/icons/create.svg"
                      alt="create logo"
                      width={15}
                      height={15} />{" "}
                    Create
                  </a>
                </span>
              </li>
              <li>
                <span className="subtitle">
                  <a href={"/profile"} className="nav-element">
                    <img
                      src="/icons/profile.svg"
                      alt="profile logo"
                      width={15}
                      height={15} />{" "}
                    Profile
                  </a>
                </span>
              </li>
            </>
          )}

          {!isSignedIn && (
            <>
              <li>
                <span className="subtitle">
                  <a href={"/"} className="nav-element">
                    <img
                      src="/icons/home.svg"
                      alt="home logo"
                      width={15}
                      height={15}
                    />{" "}
                    Home
                  </a>
                </span>
              </li>
              <li>
                <span className="subtitle">
                  <a href={"/explore"} className="nav-element">
                    <img
                      src="/icons/explore.svg"
                      alt="explore logo"
                      width={15}
                      height={15} />{" "}
                    Explore
                  </a>
                </span>
              </li>
            </>
          )}
        </ul>
      </nav>
    </aside>

      {isSignedIn && (
        <div className="center-nav">
          <div className="dropdown">
            <button className="dropbtn">
              <span className="title">
                Stack
              </span>
            </button>
            <div className="dropdown-content">
              <span className="subtitle">
                <a href={"/explore"} className="nav-element">
                  <img
                    src="/icons/explore.svg"
                    alt="explore logo"
                    width={15}
                    height={15}
                  />{" "}
                  Explore
                </a>
              </span>
              <span className="subtitle">
                <a href={"/create"} className="nav-element">
                  <img
                    src="/icons/create.svg"
                    alt="create logo"
                    width={15}
                    height={15}
                  />{" "}
                  Create
                </a>
              </span>
              <span className="subtitle">
                <a href={"/profile"} className="nav-element">
                  <img
                    src="/icons/profile.svg"
                    alt="profile logo"
                    width={15}
                    height={15} />{" "}
                  Profile
                </a>
              </span>
            </div>
          </div>
        </div>
      )}

      {!isSignedIn && (
        <div className="center-nav">
          <div className="dropdown">
            <button className="dropbtn">
              <span className="title">
                Stack
              </span>
            </button>
            <div className="dropdown-content">
              <span className="subtitle">
                <a href={"/"} className="nav-element">
                  <img
                    src="/icons/home.svg"
                    alt="home logo"
                    width={15}
                    height={15}
                  />{" "}
                  Home
                </a>
              </span>
              <span className="subtitle">
                <a href={"/explore"} className="nav-element">
                  <img
                    src="/icons/explore.svg"
                    alt="explore logo"
                    width={15}
                    height={15}
                  />{" "}
                  Explore
                </a>
              </span>
              {/* <span className="subtitle">
                <a href={"/create"} className="nav-element">
                  <img
                    src="/icons/create.svg"
                    alt="create logo"
                    width={15}
                    height={15}
                  />{" "}
                  Create
                </a>
              </span> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
