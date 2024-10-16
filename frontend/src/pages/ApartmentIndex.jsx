import { NavLink, useNavigate, useParams } from "react-router-dom";
import { FaPlusSquare as AddApartment } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import axios from "../utils/axiosClient.js";
import { MdEdit as Edit } from "react-icons/md";
import { MdDelete as Delete } from "react-icons/md";
import { FaCheckCircle as Checked } from "react-icons/fa";
import { FaCircleXmark as NotChecked } from "react-icons/fa6";
import DeleteModal from "../components/Modal/Modal.jsx";

const ApartmentIndex = () => {

    const navigate = useNavigate();

    // useState degli appartamenti
    const [apartments, setApartments] = useState([]);

    // useState per lo slug dell'appartamento da eliminare
    const [apartmentToDelete, setApartmentToDelete] = useState(null);

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

    // Funzione per la cancellazione
    const deleteApartment = async () => {
        await axios.delete(`/apartments/${apartmentToDelete.slug}`);
        fecthApartments();
        setApartmentToDelete(null);
        setDeleteMode(false);
        navigate('/dashboard/apartments', {
            state: { alert: { type: 'error', message: 'Appartamento eliminato con successo!' } }
        });
    }

    // Modale
    const [deleteMode, setDeleteMode] = useState(false);

    const dialogRef = useRef();

    useEffect(() => {
        if (deleteMode) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
    }, [deleteMode]);

    return (
        <>
            <section id="dashboard-apartments">

                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center p-4">
                        <h1 className="m-0 text-white">Appartamenti</h1>
                        {/* Aggiungi appartamento */}
                        <NavLink className="btn btn-primary border" to={'/dashboard/apartments/create'}>
                            <AddApartment className="me-2" />
                            Appartamento
                        </NavLink>
                    </div>

                    {/* Modale eliminazione */}
                    <DeleteModal
                        dialogRef={dialogRef}
                        title={apartmentToDelete?.title}
                        setDeleteMode={setDeleteMode}
                        deleteBtn={deleteApartment}
                    />

                    <div className="row">
                        {apartments.length === 0 ? (
                            <div className="col-12 bg-gray">

                                {/* Nel caso non ci siano appartamenti */}
                                <p className="text-center h3 mt-4">Non ci sono appartamenti!</p>

                            </div>
                        ) : (
                            <div className="col-12 bg-gray">
                                <div className="mt-4 p-2">
                                    {/* Tabella appartamenti */}
                                    <table className="table table-hover shadow-lg shadow-border">
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
                                            {apartments.map(({ id, slug, title, cover, bathrooms, visible, beds, rooms, sqm, guests }) => (
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
                                                    <td>{rooms}</td>

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
                                                        <NavLink className="btn btn-warning text-white me-2" to={`/dashboard/apartments/${slug}/edit`}><Edit /></NavLink>
                                                        <button
                                                            className="btn btn-danger"
                                                            onClick={() => {
                                                                setApartmentToDelete({ slug, title });
                                                                setDeleteMode(true);
                                                            }}
                                                        >
                                                            <Delete />
                                                        </button>
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