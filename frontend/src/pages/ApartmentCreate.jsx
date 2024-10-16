import { useState } from "react";
import axios from "../utils/axiosClient.js";
import FormApartment from "../components/Dashboard/FormApartment/FormApartment.jsx";
import { useNavigate, Link } from "react-router-dom";

const ApartmentCreate = () => {

    // Recupero useNavigate da react router dom
    const navigate = useNavigate();

    // Chiamata per la creazione dell'appartamento
    const createApartment = async formData => {
        const res = await axios.post('/apartments', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });

        if (res.status < 400) {
            // Redirect all'appartamento appena creato con messaggio di successo come stato
            navigate(`/dashboard/apartments`, {
                state: { alert: { type: 'success', message: 'Appartamento creato con successo!' } }
            });
        }
    }

    return (
        <>
            <section id="create-apartment">
                <div className="header-main">
                    <div className="container-fluid">
                        <div className="p-4 header-main">
                            <h1 className="m-0 text-white">Crea</h1>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="card mt-4 p-4">
                        <FormApartment
                            onSubmit={createApartment}
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default ApartmentCreate;