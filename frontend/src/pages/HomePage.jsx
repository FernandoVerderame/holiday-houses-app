import Navbar from "../components/Navbar/Navbar.jsx";

const Home = () => {
    return (
        <div>

            {/* Jumbotron */}
            <section id="jumbotron">
                <div className="container-home">
                    <Navbar />

                    <div className="sec-title">
                        <h1 className="home-title">Welcome <i>to</i> Holiday Houses.</h1>
                        <p>Chilling out on the bed in your guest house watching television, while wearing your own pajamas, is <br /> sometimes the best part of a vacation.</p>

                        <div className="d-flex gap-3">
                            <div className="button about" role="button">About Us</div>
                            <div className="button apartments" role="button">See Apartments</div>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    );
}

export default Home;