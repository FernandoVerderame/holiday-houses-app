import { useEffect } from 'react';
import apartmentGalleryStyle from './ApartmentGallery.module.scss';

const ApartmentGallery = ({ filteredImages }) => {
    useEffect(() => {
        // Inizializza Swiper
        const swiper = new Swiper('.swiper', {
            slidesPerView: 3,
            spaceBetween: 15,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });


        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <>
            {filteredImages?.length === 0 ? (
                <div className="col-12">
                    <p className="text-center text-white h3">Gallery images not found!</p>
                </div>
            ) : (
                <div className={`${apartmentGalleryStyle.gallery} swiper`}>
                    <div className="swiper-wrapper">
                        {filteredImages?.map(({ id, url }) => (
                            <div key={id} className="swiper-slide">
                                <div className={apartmentGalleryStyle.thumb}>
                                    <img
                                        src={url ? `http://${url}` : "https://placehold.co/600x400"}
                                        alt={`Image-${id}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={`swiper-button-next ${apartmentGalleryStyle.next}`}></div>
                    <div className={`swiper-button-prev ${apartmentGalleryStyle.prev}`}></div>
                    <div className={`swiper-pagination ${apartmentGalleryStyle.pagination}`}></div>
                </div>
            )}
        </>
    );
};

export default ApartmentGallery;