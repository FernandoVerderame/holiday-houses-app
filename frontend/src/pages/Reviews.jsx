import axios from "../utils/axiosClient.js";
import { useEffect, useRef, useState } from "react";
import DeleteModal from "../components/Modal/Modal.jsx";
import Alert from "../components/Alert/Alert.jsx";
import { format } from 'date-fns';
import { it } from 'date-fns/locale';

const Reviews = () => {

    // useState Alert
    const [alert, setAlert] = useState(null);

    // useState delle recensioni
    const [reviews, setReviews] = useState([]);

    // Fetch delle recensioni
    const fetchReviews = async () => {
        const res = await axios.get('/reviews');
        const newReviews = res.data.data;
        setReviews(newReviews);
    }

    useEffect(() => {
        fetchReviews();
    }, []);

    // Funzione per aggiornare lo stato della recensione (visibile)
    const toggleReviewVisibility = async (id, currentVisibleState) => {
        try {
            // Effettua la chiamata PATCH per aggiornare il campo 'visible'
            const updatedReview = await axios.patch(`/reviews/${id}`, {
                visible: !currentVisibleState
            });

            // Aggiorna lo stato del componente con la nuova lista di recensioni
            const updatedReviews = reviews.map(review =>
                review.id === id ? { ...review, visible: !currentVisibleState } : review
            );
            setReviews(updatedReviews);

            // Mostra un alert per confermare l'aggiornamento
            setAlert({ type: 'success', message: `Recensione con id "${id}" aggiornata con successo!` });
        } catch (error) {
            setAlert({ type: 'error', message: `Errore nell'aggiornamento della recensione con id "${id}".` });
        }
    };

    // useState eliminazione della recensione
    const [reviewToDelete, setReviewToDelete] = useState(null);

    // Chiamata per l'eliminazione della recensione
    const deleteReview = async () => {
        if (reviewToDelete) {
            await axios.delete(`/reviews/${reviewToDelete}`);
            setReviews(reviews.filter(review => review.id !== reviewToDelete));
            setDeleteMode(false);
            setAlert({ type: 'error', review: `Recensione con id:"${reviewToDelete}" eliminato con successo!` });
        }
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

    // Formattazione data
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, 'dd/MM/yy HH:mm', { locale: it });
    };

    return (
        <section id="dashboard-reviews">
            <div className="container-fluid">
                <div className="p-4">
                    <h1 className="m-0 text-white">Recensioni</h1>
                </div>

                {/* Mostra l'alert se esiste */}
                {alert && (
                    <Alert
                        type={alert.type}
                        message={alert.message}
                        onClose={() => setAlert(null)}
                    />
                )}

                {/* Modale eliminazione */}
                <DeleteModal
                    dialogRef={dialogRef}
                    title={reviewToDelete}
                    setDeleteMode={setDeleteMode}
                    deleteBtn={deleteReview}
                />

                <div className="row">
                    {reviews.length === 0 ? (
                        <div className="col-12 bg-gray">

                            {/* Nel caso non ci siano recensioni */}
                            <p className="text-center h3 mt-4">Non ci sono recensioni!</p>

                        </div>
                    ) : (
                        <div className="col-12 bg-gray">
                            <div className="container-fluid">
                                <div className="mt-4 p-2">
                                    <table className="table table-white table-hover shadow-lg shadow-border">
                                        {/* Tabella recensioni */}
                                        <thead>
                                            <tr>
                                                <th scope="col">Nome</th>
                                                <th scope="col">Paese</th>
                                                <th scope="col" className="d-none d-lg-table-cell">Titolo</th>
                                                <th scope="col">Descrizione</th>
                                                <th scope="col">Votazione</th>
                                                <th scope="col">Pubblicata</th>
                                                <th scope="col">Appartamento</th>
                                                <th scope="col" className="d-none d-lg-table-cell">Data</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {reviews.map(({ id, name, country, title, description, rating, visible, apartment, createdAt }) => (
                                                <tr key={id}>
                                                    <td>{name}</td>

                                                    <td>{country}</td>

                                                    <td className="d-none d-lg-table-cell">{title}</td>

                                                    <td>{description}</td>

                                                    <td>{rating}/5</td>

                                                    <td>
                                                        <div className="form-check form-switch">
                                                            <input
                                                                type="checkbox"
                                                                role="switch"
                                                                checked={visible}
                                                                onChange={() => toggleReviewVisibility(id, visible)}
                                                                className="form-check-input"
                                                            />
                                                            <span className="slider round"></span>
                                                        </div>
                                                    </td>

                                                    <td>{apartment?.title || 'N/A'}</td>

                                                    <td className="d-none d-lg-table-cell">{formatDate(createdAt)}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section >
    );
}

export default Reviews;