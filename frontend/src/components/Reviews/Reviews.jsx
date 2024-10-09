import axios from "../../utils/axiosClient.js";
import { useEffect, useState } from "react";
import reviewsStyle from './Reviews.module.scss';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

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

    return (
        <>
            <div className="row">
                <div className="col-12">
                    {reviews.length === 0 ? (
                        <div className="col-12">

                            {/* Nel caso non ci siano recensioni */}
                            <p className="text-center h3">Leave a review!</p>

                        </div>
                    ) : (
                        reviews.map(({ id, name, country, title, description, rating }) => (
                            <div key={id} className="col-12">
                                <div className={`card ${reviewsStyle.cardReview}`}>
                                    <div className="d-flex justify-content-center gap-3">
                                        <h3 className={reviewsStyle.title}>{title}</h3>
                                        <div className={reviewsStyle.rating}>{rating}</div>
                                    </div>

                                    <p className={reviewsStyle.description}>" {description} "</p>
                                    <div className={reviewsStyle.author}>{name}</div>
                                    <div className={reviewsStyle.country}>{country}</div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

export default Reviews;