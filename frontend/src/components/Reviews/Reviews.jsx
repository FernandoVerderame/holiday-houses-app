import axios from "../../utils/axiosClient.js";
import { useEffect, useState, useRef } from "react";
import reviewsStyle from './Reviews.module.scss';
import { NavLink } from "react-router-dom";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const swiperRef = useRef(null); // Crea un riferimento per Swiper

    // Fetch delle recensioni
    const fetchReviews = async () => {
        try {
            const res = await axios.get(`/reviews`);
            const newReviews = res.data.data;
            setReviews(newReviews);
        } catch (error) {
            console.error("Errore nel recupero delle recensioni:", error);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    useEffect(() => {
        if (swiperRef.current) {
            const swiper = new Swiper(swiperRef.current, {
                slidesPerView: 1,
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
        }
    }, [reviews]);

    return (
        <>
            <div className="row">
                {reviews?.length === 0 ? (
                    <div className="col-12">
                        <NavLink className={`button ${reviewsStyle.btn}`}>Send review</NavLink>
                    </div>
                ) : (
                    <div className={`card ${reviewsStyle.cardReview} swiper`} ref={swiperRef}>
                        <div className="swiper-wrapper">
                            {reviews?.map(({ id, name, country, title, description, rating, visible }) => (
                                visible === true &&
                                <div key={id} className="swiper-slide">
                                    <div className="d-flex justify-content-center gap-3">
                                        <h3 className={reviewsStyle.title}>{title}</h3>
                                        <div className={reviewsStyle.rating}>{rating}</div>
                                    </div>
                                    <p className={reviewsStyle.description}>" {description} "</p>
                                    <div className={reviewsStyle.author}>{name}</div>
                                    <div className={reviewsStyle.country}>{country}</div>
                                </div>
                            ))}
                        </div>

                        <div className={`swiper-button-next ${reviewsStyle.next}`}></div>
                        <div className={`swiper-button-prev ${reviewsStyle.prev}`}></div>
                        <div className={`swiper-pagination ${reviewsStyle.pagination}`}></div>
                    </div>
                )}

                <div className="col-12">
                    <NavLink className={`button ${reviewsStyle.btn}`}>Send review</NavLink>
                </div>
            </div>
        </>
    );
};

export default Reviews;