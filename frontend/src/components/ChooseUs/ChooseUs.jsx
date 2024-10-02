import { PiPanorama as Panorama } from "react-icons/pi";
import { IoDiamondOutline as Diamond } from "react-icons/io5";
import { GiReceiveMoney as Investment } from "react-icons/gi";

const ChooseUs = () => {
    return (
        <>
            <div className="row g-5">
                <div className="col-4">
                    <div className="card">
                        <div className="icon">
                            <Panorama className="fs-1" />
                        </div>
                        <h5>Vision Panorama</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium similique dolorem neque accusantium animi provident, aperiam quibusdam temporibus.</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="icon">
                            <Diamond className="fs-1" />
                        </div>
                        <h5>5 Star Standard Living</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium similique dolorem neque accusantium animi provident, aperiam quibusdam temporibus.</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="icon">
                            <Investment className="fs-1" />
                        </div>
                        <h5>Resonable Investment Rate</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium similique dolorem neque accusantium animi provident, aperiam quibusdam temporibus.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChooseUs;