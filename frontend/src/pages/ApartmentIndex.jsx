import { NavLink } from "react-router-dom";
import { FaPlusSquare as AddApartment } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "../utils/axiosClient.js";
import { MdEdit as Edit } from "react-icons/md";
import { MdDelete as Delete } from "react-icons/md";
import { FaCheckCircle as Checked } from "react-icons/fa";
import { FaCircleXmark as NotChecked } from "react-icons/fa6";


const ApartmentIndex = () => {

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
            <section id="dashboard-apartments">

                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center py-4 px-4">
                        <h1 className="m-0 text-white">Appartamenti</h1>
                        {/* Aggiungi appartamento */}
                        <NavLink className="btn btn-primary border" to={'/dashboard/create'}>
                            <AddApartment className="me-2" />
                            Appartamento
                        </NavLink>
                    </div>

                    <div className="row">
                        {apartments.length === 0 ? (
                            <div className="col-12 bg-gray">

                                {/* Nel caso non ci siano appartamenti */}
                                <p className="text-center text-white h3">Non ci sono appartamenti!</p>

                            </div>
                        ) : (
                            <div className="col-12 bg-gray">
                                <div className="card mt-4 p-2">
                                    {/* Tabella appartamenti */}
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="d-none d-lg-table-cell">Anteprima</th>
                                                <th scope="col">ID</th>
                                                <th scope="col">Nome <span className="d-none d-md-inline">Appartamento</span></th>
                                                <th scope="col">Pubblicato</th>
                                                <th scope="col">Stanze</th>
                                                <th scope="col">Letti</th>
                                                <th scope="col">Bagni</th>
                                                <th scope="col">SQM</th>
                                                <th scope="col">Ospiti</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {apartments.map(({ id, slug, title, cover, bathrooms, visible, beds, sqm, guests }) => (
                                                <tr key={id}>
                                                    {/* Colonna anteprima immagine */}
                                                    <td className="d-none d-lg-table-cell">
                                                        <img src={cover ? `http://${cover}` : "https://placehold.co/600x400"} alt={title} className="img-fluid table-img rounded-1" />
                                                    </td>

                                                    {/* Colonna ID */}
                                                    <td>{id}</td>

                                                    {/* Nome appartamento con link */}
                                                    <td>{title}</td>

                                                    {/* Colonna pubblicato */}
                                                    <td>{visible ? <Checked className="fs-5 text-success" /> : <NotChecked className="fs-5 text-danger" />}</td>

                                                    {/* Stanze */}
                                                    <td>{beds}</td>

                                                    {/* Letti */}
                                                    <td>{beds}</td>

                                                    {/* Bagni */}
                                                    <td>{bathrooms}</td>

                                                    {/* Superficie in metri quadri */}
                                                    <td>{sqm}</td>

                                                    {/* Ospiti */}
                                                    <td>{guests}</td>

                                                    {/* Azioni */}
                                                    <td className="text-end">
                                                        <NavLink className="btn btn-warning text-white me-2" to={`/dashboard/${slug}/edit`}><Edit /></NavLink>
                                                        <button className="btn btn-danger"><Delete /></button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ApartmentIndex;