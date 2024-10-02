import { useEffect, useState } from "react";
import ApartmentCard from "../ApartmentCard/ApartmentCard";
import axios from "../../../utils/axiosClient.js";
import { Link } from "react-router-dom";

const ApartmentList = () => {

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
        <>
            <div className="row g-5">
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
        </>
    );
};

export default ApartmentList;