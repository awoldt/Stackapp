export default function explorePage() {
    return <>
        <div className="card-container" style={{ paddingTop: "40px" }}>
            <div className="card-empty">
                <h1>Explore Stacks</h1>
                <h5>Enter the details of your tech stack&apos;s development.</h5>
            </div>
        </div>

        <div className="card-container">
            <div className="card">
                <div className="stack-item">
                    <img
                        src="icons/noprofile.png"
                        alt="user-profile-img"
                        style={{ cursor: "pointer" }}
                    />
                </div>
                <div style={{ marginBottom: "75px" }}>
                    <div style={{ float: "left" }}>
                        <h1>
                            Code Tracker
                        </h1>
                    </div>
                    <div className="user-profile-containerParent" style={{ float: "right" }}>
                        <div className="user-profile-container" style={{ marginTop: "10px" }}>
                            <button className="btn-like">
                                <img src="/icons/like.svg" className="white-svg" alt="globe icon" width={25} height={15} />20.4k
                            </button>
                        </div>
                    </div>
                </div>

                <div className="user-profile-containerParent">
                    {/* <a href={page_data.creator_data.href}> */}

                    <div className="user-profile-container" style={{ marginTop: "0px" }}>
                        <img
                            // src={page_data.creator_data.profile_pic!}
                            //  alt={page_data.creator_data.username + " profile picture"}

                            src="icons/noprofile.png"
                            alt="user-profile-img"
                            style={{ cursor: "pointer" }}
                            className="user-profile-img"

                        />
                        {/* {page_data.creator_data.first_name !== null && ( */}

                        <span style={{ paddingLeft: "8px", paddingTop: "6px" }}>
                            <b>
                                {/* {page_data.creator_data.first_name}{" "}
                                            {page_data.creator_data.last_name !== null && (
                                            <>{page_data.creator_data.last_name}</> )} */}

                                Test Developer
                            </b>
                            <p style={{ fontSize: "16px", opacity: "0.85" }}>
                                {/* @{page_data.creator_data.username} */}

                                @testdev
                            </p>
                        </span>
                        {/* )} */}
                    </div>
                    {/* </a> */}
                </div>
            </div>
        </div>
    </>
}