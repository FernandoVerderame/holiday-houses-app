import apartmentGalleryStyle from './ApartmentGallery.module.scss';

const ApartmentGallery = ({ filteredImages }) => {
    return (
        <>
            <div className="row g-3">
                {filteredImages?.length === 0 ? (
                    <div className="col-12">

                        {/* Nel caso non ci appartamenti */}
                        <p className="text-center text-white h3">Gallery images not found!</p>

                    </div>
                ) : (
                    filteredImages.map(({ id, url }) => (
                        <div key={id} className="col-4">
                            <img src={url ? `http://${url}` : "https://placehold.co/600x400"} alt={`Image-${id}`} />
                        </div>
                    ))
                )}
            </div>
        </>
    );
};

export default ApartmentGallery;