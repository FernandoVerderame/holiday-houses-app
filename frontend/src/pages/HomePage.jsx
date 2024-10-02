import Navbar from "../components/Navbar/Navbar.jsx";
import { NavLink, useLocation } from "react-router-dom";
import { PiPanorama as Panorama } from "react-icons/pi";
import { IoDiamondOutline as Diamond } from "react-icons/io5";
import { GiReceiveMoney as Investment } from "react-icons/gi";
import { scroller } from "react-scroll";
import ApartmentList from "../components/Apartments/ApartmentList/ApartmentList.jsx";

const Home = () => {

    const location = useLocation(); // Ottieni la location corrente

    // Funzione per scrollare alla sezione "apartments" se sei sulla home
    const handleScrollToSection = () => {
        scroller.scrollTo('apartments', {
            smooth: true,
            duration: 500
        });
    };

    return (
        <>

            {/* Jumbotron */}
            <section id="jumbotron">
                <div className="container-home">
                    <Navbar />

                    <div className="sec-title">
                        <h1 className="home-title">Welcome <i>to</i> Holiday Houses.</h1>
                        <p>Chilling out on the bed in your guest house watching television, while wearing your own pajamas, is <br /> sometimes the best part of a vacation.</p>

                        <div className="d-flex gap-3">
                            <div className="button about" role="button">About Us</div>
                            <NavLink
                                className="button apartments"
                                to="/#apartments" // Naviga verso la home con l'anchor
                                onClick={(e) => {
                                    if (location.pathname === '/') { // Se sei già sulla home
                                        e.preventDefault(); // Impedisci la navigazione
                                        handleScrollToSection(); // Esegui lo scroll
                                    }
                                }}
                            >See Apartments
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section >

            {/* Perchè scegliere noi */}
            < section id="choose-us" >
                <div className="container">
                    <h2>Why Choose Us</h2>
                    <h4>Why should you choose our apartment?</h4>

                    <div className="row g-5">
                        <div className="col-4">
                            <div className="card">
                                <div className="icon">
                                    <Panorama className=" fs-1" />
                                </div>
                                <h5>Vision Panorama</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium similique dolorem neque accusantium animi provident, aperiam quibusdam temporibus.</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <div className="icon">
                                    <Diamond className="fs-1" />
                                </div>
                                <h5>5 Star Standard Living</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium similique dolorem neque accusantium animi provident, aperiam quibusdam temporibus.</p>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <div className="icon">
                                    <Investment className="fs-1" />
                                </div>
                                <h5>Resonable Investment Rate</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium similique dolorem neque accusantium animi provident, aperiam quibusdam temporibus.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Sezione appartamenti */}
            < section id="apartments" >
                <div className="container">
                    <h2>Our Homestay</h2>
                    <h4>We have the best rooms for you</h4>

                    <ApartmentList
                    />
                </div>
            </section >

        </>
    );
}

export default Home;