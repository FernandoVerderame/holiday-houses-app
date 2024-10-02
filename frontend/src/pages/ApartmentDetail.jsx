import axios from "../utils/axiosClient.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApartmentInfo from "../components/Apartments/ApartmentInfo/ApartmentInfo.jsx";
import ApartmentJumbo from "../components/Apartments/ApartmentJumbo/ApartmentJumbo.jsx";
import ApartmentList from "../components/Apartments/ApartmentList/ApartmentList.jsx";
import ApartmentGallery from "../components/Apartments/ApartmentGallery/ApartmentGallery.jsx";

const ApartmentDetail = () => {

    // Recupero lo slug dai parametri
    const { slug } = useParams();

    // useState del singolo appartamento
    const [apartment, setApartment] = useState(null);

    //useState della gallaria foto
    const [images, setImages] = useState(null);

    // Stato per monitorare il caricamento
    const [loading, setLoading] = useState(true);

    // Fecth della singola foto
    const fetchApartment = async () => {
        try {
            const res = await axios.get(`/apartments/${slug}`);
            const newApartment = res.data;
            setApartment(newApartment);
            setLoading(false); // Fine del caricamento quando l'appartamento è caricato
        } catch (error) {
            console.error("Errore nel recupero dell'appartamento:", error);
            setLoading(false); // Fine del caricamento anche in caso di errore
        }
    };

    // Fetch della galleria foto
    const fetchImages = async () => {
        try {
            const res = await axios.get(`/images`);
            const newImages = res.data;
            setImages(newImages);
            setLoading(false); // Fine del caricamento quando l'appartamento è caricato
        } catch (error) {
            console.error("Errore nel recupero della galleria:", error);
            setLoading(false); // Fine del caricamento anche in caso di errore
        }
    }

    useEffect(() => {
        fetchApartment();
        window.scrollTo(0, 0); // Scroll forzato in cima alla pagina quando il componente viene montato
        return () => {
            setApartment(null);
        };
    }, [slug]);

    useEffect(() => {
        fetchImages();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Mostra un loader durante il caricamento
    }

    // Filtro delle immagini in base all'apartmentId
    const filteredImages = images?.filter(image => image.apartmentId === apartment?.id);

    return (
        <>
            {/* Jumbotron Appartamento */}
            <ApartmentJumbo
                title={apartment?.title}
                cover={apartment?.cover}
            />

            {/* Galleria immagini*/}
            <section id="apartment-gallery" style={{ height: '500px', backgroundColor: 'lightgray' }}>
                <ApartmentGallery
                    filteredImages={filteredImages}
                />
            </section>

            {/* Info appartamento */}
            <section id='apartment-info' className="py-5">
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
            <section id="apartments" >
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