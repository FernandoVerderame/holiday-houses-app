import axios from "../utils/axiosClient.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApartmentInfo from "../components/Apartments/ApartmentInfo/ApartmentInfo.jsx";
import ApartmentJumbo from "../components/Apartments/ApartmentJumbo/ApartmentJumbo.jsx";

const ApartmentDetail = () => {

    // Recupero lo slug dai parametri
    const { slug } = useParams();

    // useState del singolo appartamento
    const [apartment, setApartment] = useState(null);

    // Fecth della singola foto
    const fetchApartment = async () => {
        try {
            const res = await axios.get(`/apartments/${slug}`);
            const newApartment = res.data;
            setApartment(newApartment);
        } catch (error) {
            console.error("Errore nel recupero dell'appartamento:", error);
        }
    };

    useEffect(() => {
        fetchApartment();
        return () => {
            setApartment(null);
        };
    }, [slug]);

    return (
        <>
            {/* Jumbotron Appartamento */}
            <ApartmentJumbo
                title={apartment?.title}
                cover={apartment?.cover}
            />

            {/* Galleria immagini*/}
            <section id="apartment-gallery" style={{ height: '500px', backgroundColor: 'lightgray' }}>

            </section>

            {/* Info appartamento */}
            <ApartmentInfo
                title={apartment?.title}
                description={apartment?.description}
                rooms={apartment?.rooms}
                beds={apartment?.beds}
                bathrooms={apartment?.bathrooms}
                sqm={apartment?.sqm}
                guests={apartment?.guests}
                services={apartment?.services}
            />

        </>
    );
};

export default ApartmentDetail;