import apartmentInfoStyle from './ApartmentInfo.module.scss';
import mastercard from '../../../assets/images/mastercard.png';
import visa from '../../../assets/images/visa.png';
import paypal from '../../../assets/images/paypal.png';

const ApartmentAdditionalInfo = () => {
    return (
        <>
            <div className='row'>
                {/* Check In */}
                <div className='col-3 fw-semibold text-black'>Check - In :</div>
                <div className='col-9 mb-4'>6:00 - 23:00</div>

                {/* Check Out */}
                <div className='col-3 fw-semibold text-black'>Check - Out :</div>
                <div className='col-9 mb-4'>6:00 - 23:00</div>

                {/* Calcellazione / Pagamento */}
                <div className='col-3 fw-semibold text-black'>Cancellation/prepayment :</div>
                <div className='col-9 mb-4'>Cancellation and prepayment policies vary according to guest house type. Please enter the dates of your stay and check the conditions of your required house.</div>

                {/* Bambini ed letti extra */}
                <div className='col-3 fw-semibold text-black'>Children and extra beds :</div>
                <div className='col-9 mb-4'>All children are welcome. One child under 6 years is charged EUR 50 per night when using existing beds. There is no capacity for extra beds in the room. Supplements are not calculated automatically in the total costs and will have to be paid for separately during your stay.</div>

                {/* Animali domestici */}
                <div className='col-3 fw-semibold text-black'>Pets :</div>
                <div className='col-9 mb-4'>Pets are allowed</div>

                {/* Info aggiuntive */}
                <div className='col-3 fw-semibold text-black'>Additional info :</div>
                <div className='col-9 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores explicabo iure necessitatibus vel eligendi nobis tempora. Tenetur iure obcaecati ullam esse enim placeat officia? Ut culpa iste debitis harum odio.
                    Amet animi aut quibusdam esse sunt, eveniet quia deserunt quas voluptas aspernatur veritatis autem fugiat molestias architecto expedita doloremque soluta, ut harum, beatae ullam perferendis! Possimus sit recusandae cum! Veniam.
                    Hic, laborum natus ullam animi exercitationem enim cum vel rem dignissimos obcaecati totam, dolor repudiandae aspernatur corrupti. Deleniti at, provident doloribus laudantium fugit nesciunt omnis quis quasi fugiat aut autem.
                    Eveniet, asperiores laudantium! Ipsa, nam aut. Dicta fugiat id quisquam cum temporibus ad optio eum, obcaecati, ab perferendis doloremque nulla quidem deserunt recusandae reprehenderit dolor? Atque laboriosam qui tenetur commodi!
                    Dolor voluptatibus nostrum velit, itaque maxime eaque quia neque repellendus dignissimos quo voluptatum tempore nobis numquam perspiciatis facilis cupiditate? Veritatis odio tempora modi debitis deserunt, voluptas iste repellat vel commodi.
                </div>

                {/* Opzioni di pagamento */}
                <div className='col-3 fw-semibold text-black pt-3'>Payment options :</div>
                <div className='col-9'>
                    <ul className={apartmentInfoStyle.payment}>
                        <li><img src={visa} alt="Visa" /></li>
                        <li><img src={mastercard} alt="Mastercard" className={apartmentInfoStyle.mastercard} /></li>
                        <li><img src={paypal} alt="PayPal" className={apartmentInfoStyle.paypal} /></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ApartmentAdditionalInfo;