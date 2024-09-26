import apartmentInfoStyle from './ApartmentInfo.module.scss';

const ApartmentInfo = ({ title, description, rooms, beds, bathrooms, sqm, guests, services }) => {
    return (
        <>
            <h1>{title}</h1>
        </>
    );
};

export default ApartmentInfo;