import Sidenav from "@/components/Sidenav";

export default function explorePage() {
    return <>
    <section>
        <Sidenav isSignedIn={false} />
    </section>
        <div className="card-container" style={{ paddingTop: "40px" }}>
            <div className="card-empty">
                <h1>Explore Stacks</h1>
                <h5>Enter the details of your tech stack&apos;s development.</h5>
            </div>
        </div>

        <div className="card-container" id="savedStacks">
            <div className="card" style={{ textAlign: "center" }}>
                <div className="stack-container">
                    <div className="stack-item">
                        <img src="" />
                    </div>

                    <div className="stack-item">
                        <img src="" />
                    </div>

                    <div className="stack-item">
                        <img src="" />
                    </div>

                    <div className="stack-item">
                        <img src="" />
                    </div>

                    <div className="stack-item">
                        <img src="" />
                    </div>

                    <div className="stack-item">
                        <img src="" />
                    </div>

                    <div className="stack-item">
                        <img src="" />
                    </div>

                    <div className="stack-item">
                        <img src="" />
                    </div>
                </div>
            </div>
        </div>
    </>
}