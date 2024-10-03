import { Alert } from "bootstrap";
import ContactForm from "../components/ContactUs/ContactForm/ContactForm.jsx";
import ContactUsInfo from "../components/ContactUs/ContactUsInfo.jsx";
import Navbar from "../components/Navbar/Navbar.jsx";
import { useState } from "react";

const ContactUs = () => {

    // useState Alert
    const [alert, setAlert] = useState(null);

    // Chiamata per la creazione del messaggio
    const createMessage = async formData => {
        const res = await axios.post('/messages', formData);

        if (res.status < 400) {
            setAlert({ type: 'success', message: `Messaggio inviato con successo!` });
        }
    }

    return (
        <>
            <section id="contact-us-jumbo">
                <div className="container-home">
                    <Navbar />

                    <h1>Contact Us</h1>
                    <p>" Contact us whenever you need "</p>
                </div>
            </section>

            <section id="contact-us-info">
                <div className="container">
                    <ContactUsInfo />
                </div>
            </section>

            <section id="contact-form">
                <div className="container">
                    {/* Mostra l'alert se esiste */}
                    {alert && (
                        <Alert
                            type={alert.type}
                            message={alert.message}
                            onClose={() => setAlert(null)}
                        />
                    )}

                    <ContactForm
                        onSubmit={createMessage}
                    />
                </div>
            </section>
        </>
    );
};

export default ContactUs;