import axios from "../utils/axiosClient.js";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import { Link } from "react-router-dom";
import ApartmentCard from "../components/Apartments/ApartmentCard/ApartmentCard.jsx";
import { PiPanorama as Panorama } from "react-icons/pi";
import { IoDiamondOutline as Diamond } from "react-icons/io5";
import { GiReceiveMoney as Investment } from "react-icons/gi";

const Home = () => {

    // useState degli appartamenti
    const [apartments, setApartments] = useState([]);

    // Fetch degli appartamenti
    const fecthApartments = async () => {
        const res = await axios.get(`/apartments`);
        const newApartments = res.data.data;
        setApartments(newApartments);
    };

    // useEffect degli appartamenti
    useEffect(() => {
        fecthApartments();
    }, []);

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

            {/* Perchè scegliere noi */}
            <section id="choose-us">
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
            </section>

            {/* Sezione appartamenti */}
            <section id="apartments">
                <div className="container">
                    <h2>Our Homestay</h2>
                    <h4>We have the best rooms for you</h4>

                    <div className="row gap-3">
                        {apartments.length === 0 ? (
                            <div className="col-12">

                                {/* Nel caso non ci appartamenti */}
                                <p className="text-center text-white h3">Apartments not found!</p>

                            </div>
                        ) : (
                            apartments.map(({ id, title, slug, cover, description, visible, beds, sqm, guests }) => (
                                visible === true &&
                                <div key={id} className="col-4">

                                    {/* Tasto show del singolo appartamento */}
                                    <Link to={`/apartments/${slug}`} style={{ textDecoration: 'none', color: 'black' }}>

                                        {/* Card dell'appartamento */}
                                        <ApartmentCard
                                            title={title}
                                            slug={slug}
                                            cover={cover}
                                            description={description}
                                            beds={beds}
                                            sqm={sqm}
                                            guests={guests}
                                        />

                                    </Link>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>

        </div >
    );
}

export default Home;