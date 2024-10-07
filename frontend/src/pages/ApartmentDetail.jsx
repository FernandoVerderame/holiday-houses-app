import axios from "../utils/axiosClient.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApartmentInfo from "../components/Apartments/ApartmentInfo/ApartmentInfo.jsx";
import ApartmentJumbo from "../components/Apartments/ApartmentJumbo/ApartmentJumbo.jsx";
import ApartmentList from "../components/Apartments/ApartmentList/ApartmentList.jsx";
import ApartmentGallery from "../components/Apartments/ApartmentGallery/ApartmentGallery.jsx";
import Loader from "../components/Loader/Loader.jsx";

const ApartmentDetail = () => {
    const { slug } = useParams();
    const [apartment, setApartment] = useState(null);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch della singola foto
    const fetchApartment = async () => {
        try {
            const res = await axios.get(`/apartments/${slug}`);
            const newApartment = res.data;
            setApartment(newApartment);
        } catch (error) {
            console.error("Errore nel recupero dell'appartamento:", error);
        }
    };

    // Fetch della galleria foto
    const fetchImages = async () => {
        try {
            const res = await axios.get(`/images`);
            const newImages = res.data;
            setImages(newImages);
        } catch (error) {
            console.error("Errore nel recupero della galleria:", error);
        }
    };

    // Funzione per verificare il caricamento
    const checkLoading = () => {
        if (apartment && images.length > 0) {
            setLoading(false);
        }
    };

    useEffect(() => {
        setLoading(true);
        fetchApartment();
        fetchImages();
        window.scrollTo(0, 0);
    }, [slug]);

    useEffect(() => {
        checkLoading();
    }, [apartment, images]); // Controlla il caricamento ogni volta che apartment o images cambiano

    if (loading) {
        return <Loader />;
    }

    // Filtro delle immagini in base all'apartmentId
    const filteredImages = images.filter(
        (image) => image.apartmentId === apartment?.id
    );

    return (
        <>
            <ApartmentJumbo title={apartment?.title} cover={apartment?.cover} />

            {/* Galleria immagini*/}
            <section id="apartment-gallery">
                <ApartmentGallery filteredImages={filteredImages} />
            </section>

            {/* Info appartamento */}
            <section id="apartment-info" className="py-5">
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
            </section>

            {/* Sezione appartamenti */}
            <section id="apartments">
                <div className="container">
                    <h2>Other Homestay</h2>
                    <h4>You may also like other homestay</h4>
                    <ApartmentList />
                </div>
            </section>
        </>
    );
};

export default ApartmentDetail;
