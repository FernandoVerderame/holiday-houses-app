import apartmentInfoStyle from './ApartmentInfo.module.scss';
import { TbAirConditioning as AirConditioning } from "react-icons/tb";
import {
    FaWifi as WiFi,
    FaSquareParking as Parking
} from "react-icons/fa6";
import { MdOutlinePets as Pets } from "react-icons/md";
import { FaTv as TV } from "react-icons/fa";
import { BiSolidWasher as Washer } from "react-icons/bi";
import { useState } from 'react';
import ApartmentAdditionalInfo from './ApartmentAdditionalInfo';

// Mappo tra le stringhe del database e i componenti delle icone
const iconMap = {
    WiFi: WiFi,
    Parking: Parking,
    AirConditioning: AirConditioning,
    Pets: Pets,
    TV: TV,
    Washer: Washer
};

const ApartmentInfo = ({ title, description, rooms, beds, bathrooms, sqm, guests, services }) => {

    // Stato locale per tenere traccia della sezione attiva
    const [activeSection, setActiveSection] = useState('description');

    return (
        <>
            <div className='container'>
                {/* Nav menù info */}
                <ul className={apartmentInfoStyle.navInfo}>
                    <li
                        className={activeSection === 'description' ? apartmentInfoStyle.active : ''}
                        onClick={() => setActiveSection('description')}
                        role='button'
                    >
                        Description
                    </li>
                    <li
                        className={activeSection === 'additional' ? apartmentInfoStyle.active : ''}
                        onClick={() => setActiveSection('additional')}
                        role='button'
                    >
                        Additional
                    </li>
                    <li
                        className={activeSection === 'reviews' ? apartmentInfoStyle.active : ''}
                        onClick={() => setActiveSection('reviews')}
                        role='button'
                    >
                        Reviews
                    </li>
                </ul>

                {/* Info */}
                <div className='row g-5'>
                    <div className='col-8'>
                        {activeSection === 'description' && (
                            <div className={apartmentInfoStyle.description}>
                                {description ? description : 'No description available.'}
                            </div>
                        )}

                        {activeSection === 'additional' && (
                            <div className={apartmentInfoStyle.additional}>
                                <ApartmentAdditionalInfo />
                            </div>
                        )}

                        {activeSection === 'reviews' && (
                            <div className={apartmentInfoStyle.reviews}>
                                <h4>Reviews</h4>
                                <p>User reviews will go here.</p>
                            </div>
                        )}

                        {/* Servizi */}
                        {services?.length > 0 ? (
                            <div>
                                <h4 className={apartmentInfoStyle.services}>Services</h4>
                                <ul>
                                    {services.map((service, i) => {
                                        // Ottiengo l'icona dal mapping delle icone
                                        const IconComponent = iconMap[service.icon];
                                        return (
                                            <li key={`service-${i}`} className="d-flex align-items-center mb-2 fw-semibold">
                                                {/* Renderizza l'icona dinamicamente se esiste */}
                                                {IconComponent && <IconComponent className="me-3 fs-4 my-1" />}
                                                {service.label}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ) : (
                            // Nel caso non ci fossero servizi
                            <p className='mt-4'>No services</p>
                        )}
                    </div>
                    <div className='col-4'>
                        <div className={apartmentInfoStyle.cardInfo}>
                            <h3>{title}</h3>

                            <div className={`button ${apartmentInfoStyle.btnCard}`} role='button'>Contact Us</div>

                            <ul>
                                <li><span>Guests :</span>{guests}</li>
                                <li><span>Rooms :</span>{rooms}</li>
                                <li><span>Beds :</span>{beds}</li>
                                <li><span>Bathrooms :</span>{bathrooms}</li>
                                <li><span>Sqm :</span>{sqm}m<sup>2</sup></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ApartmentInfo;