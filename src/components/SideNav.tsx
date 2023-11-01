/* eslint-disable @next/next/no-img-element */
export default function Nav() {
  return (
    <>
      <aside className="aside-nav">
        <nav>
          <span className="title">
            <a href={"/"}>Stack</a>
          </span>

          <ul>
            <>
              {/* <li>
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
                  </li> */}
              <li>
                <span className="subtitle">
                  <a href={"/create"} className="nav-element">
                    <img
                      src="/imgs/icons/create.svg"
                      alt="create icon"
                      width={15}
                      height={15}
                    />{" "}
                    Create
                  </a>
                </span>
              </li>
              <li>
                <span className="subtitle">
                  <a href={"/profile"} className="nav-element">
                    <img
                      src="/imgs/icons/profile.svg"
                      alt="profile icon"
                      width={15}
                      height={15}
                    />{" "}
                    Profile
                  </a>
                </span>
              </li>
            </>
          </ul>
        </nav>
      </aside>

      <div className="center-nav">
        <div className="dropdown">
          <button className="dropbtn">
            <span className="title">Stack</span>
          </button>
          <div className="dropdown-content">
            {/* <span className="subtitle">
                    <a href={"/explore"}>
                      <img
                        src="/icons/explore.svg"
                        alt="explore logo"
                        width={15}
                        height={15}
                      />{" "}
                      Explore
                    </a>
                  </span> */}
            <span className="subtitle">
              <a href={"/create"}>
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
              <a href={"/profile"}>
                <img
                  src="/icons/profile.svg"
                  alt="profile logo"
                  width={15}
                  height={15}
                />{" "}
                Profile
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
