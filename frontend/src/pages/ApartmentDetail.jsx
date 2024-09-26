import axios from "../utils/axiosClient.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

        </>
    );
};

export default ApartmentDetail;