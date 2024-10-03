import ContactUsInfo from "../components/ContactUs/ContactUsInfo";
import Navbar from "../components/Navbar/Navbar";

const ContactUs = () => {
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
        </>
    );
};

export default ContactUs;