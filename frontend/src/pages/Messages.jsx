import axios from "../utils/axiosClient.js";
import { useEffect, useRef, useState } from "react";
import DeleteModal from "../components/Modal/Modal.jsx";
import Alert from "../components/Alert/Alert.jsx";
import { format } from 'date-fns';
import { it } from 'date-fns/locale';

const Messages = () => {

    // useState Alert
    const [alert, setAlert] = useState(null);

    // useState dei messaggi
    const [messages, setMessages] = useState([]);

    // Fetch dei messaggi
    const fetchMessages = async () => {
        const res = await axios.get('/messages');
        const newMessages = res.data.data;
        setMessages(newMessages);
    }

    useEffect(() => {
        fetchMessages();
    }, []);

    // useState eliminazione del messaggio
    const [messageToDelete, setMessageToDelete] = useState(null);

    // Chiamata per l'eliminazione del messaggio
    const deleteMessage = async () => {
        if (messageToDelete) {
            await axios.delete(`/messages/${messageToDelete}`);
            setMessages(messages.filter(message => message.id !== messageToDelete));
            setDeleteMode(false);
            setAlert({ type: 'error', message: `Messaggio con id:"${messageToDelete}" eliminato con successo!` });
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
        <section id="dashboard-messages">
            <div className="container-fluid">
                <div className="p-4">
                    <h1 className="m-0 text-white">Messaggi</h1>
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
                    title={messageToDelete}
                    setDeleteMode={setDeleteMode}
                    deleteBtn={deleteMessage}
                />

                <div className="row">
                    {messages.length === 0 ? (
                        <div className="col-12 bg-gray">

                            {/* Nel caso non ci siano messaggi */}
                            <p className="text-center h3 mt-4">Non ci sono messaggi!</p>

                        </div>
                    ) : (
                        <div className="col-12 bg-gray">
                            <div className="container-fluid">
                                <div className="mt-4 p-2">
                                    <table className="table table-white table-hover shadow-lg shadow-border">
                                        {/* Tabella messaggi */}
                                        <thead>
                                            <tr>
                                                <th scope="col">Nome</th>
                                                <th scope="col">Email</th>
                                                <th scope="col" className="d-none d-lg-table-cell">Telefono</th>
                                                <th scope="col">Contenuto</th>
                                                <th scope="col" className="d-none d-lg-table-cell">Data</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {messages.map(({ id, name, email, phone, content, createdAt }) => (
                                                <tr key={id}>
                                                    <td>{name}</td>

                                                    <td>{email}</td>

                                                    <td className="d-none d-lg-table-cell">{phone}</td>

                                                    <td>{content}</td>

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

export default Messages;