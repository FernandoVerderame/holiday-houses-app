import apartmentInfoStyle from './ApartmentInfo.module.scss';

const ApartmentInfo = ({ title, description, rooms, beds, bathrooms, sqm, guests, services }) => {
    return (
        <>
            <section id='apartment-info'></section>
            <h1>{title}</h1>
        </>
    );
};

export default ApartmentInfo;