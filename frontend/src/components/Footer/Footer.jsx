import footerStyle from './Footer.module.scss';
import { FaFacebook as Facebook } from "react-icons/fa";
import { FaLinkedin as Linkedin } from "react-icons/fa";
import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <>
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className='d-flex gap-3 align-items-center mb-4'>
                                <img src={logo} alt="logo" className={footerStyle.logo} />
                                <h2 className='mb-0'>Holiday Houses</h2>
                            </div>

                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis quas voluptas, eveniet officia ipsum aut. Quod sint, consequuntur laboriosam neque soluta, sapiente voluptatum vitae beatae illum, fugit qui sit nisi.</p>
                        </div>
                        <div className='col-4 d-flex flex-column align-items-center'>
                            <h3 className={`mb-4 ${footerStyle.links}`}>Links</h3>

                            <ul className='d-flex flex-column gap-2'>
                                <li><a href="" className="link-underline-light text-white">Home</a></li>
                                <li><a href="" className="link-underline-light text-white">About Us</a></li>
                                <li><a href="" className="link-underline-light text-white">Apartments</a></li>
                                <li><a href="" className="link-underline-light text-white">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className='col-4'>
                            <h3 className='mb-4'>Contact</h3>

                            <ul className='mb-4'>
                                <li className='mb-1'>Phone: <span className='ms-2'>+39 3407501645</span></li>
                                <li>Mail: <span className='ms-2'>fer.verderame@gmail.com</span></li>
                            </ul>

                            <ul className='d-flex gap-4'>
                                <li><a href="https://www.facebook.com/groups/privatecartour?locale=it_IT" className='text-white'><Facebook /></a></li>
                                <li><a href="https://www.linkedin.com/company/holiday-houses1/" className='text-white'><Linkedin /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;