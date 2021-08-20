import React from 'react';
import footer from './Footer.module.css';
import twitter from '../../img/twitter.svg';
import instagram from '../../img/instagram.svg';
import facebook from '../../img/facebook.svg';
import vk from '../../img/vk.svg';
import whatsapp from '../../img/whatsapp.svg';
import { NavLink } from 'react-router-dom';
import $ from "jquery";

const Footer = () => {
    $(function() {
        $(window).on("scroll resize", function() {
            $('.socials').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+800) {
                    $(this).addClass("animate__fadeInLeft");
                }
            });
            $('.policy').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+800) {
                    $(this).addClass("animate__fadeInRight");
                }
            });
            $('.footer .details p').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+1000) {
                    $(this).addClass("animate__fadeInLeft");
                }
            });
            $('.footer .details ul').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+1000) {
                    $(this).addClass("animate__fadeInRight");
                }
            });
        });
    })
    return (
        <footer className={`footer ${footer.footer} text-white`} id="footer">
            <div className="container text-center">
                <ul className={`${footer.socials} socials p-0 mx-auto d-flex justify-content-between animate__animated`}>
                    <li className="d-block">
                        <a href="https://twitter.com/NochuCit" className="d-block" target="_blank" rel="noreferrer">
                            <img src={twitter} alt="Twitter" />
                        </a>
                    </li>
                    <li className="d-block">
                        <a href="https://www.instagram.com/itproger_krd/?hl=ru" className="d-block" target="_blank" rel="noreferrer">
                            <img src={instagram} alt="Instagram" />
                        </a>
                    </li>
                    <li className="d-block">
                        <a href="https://www.facebook.com/Schoolprogrammkrd/" className="d-block" target="_blank" rel="noreferrer">
                            <img src={facebook} alt="Facebook" />
                        </a>
                    </li>
                    <li className="d-block">
                        <a href="https://vk.com/school_programm_krd" className="d-block" target="_blank" rel="noreferrer">
                            <img src={vk} alt="Vk" />
                        </a>
                    </li>
                    <li className="d-block">
                        <a href="https://api.whatsapp.com/send?phone=79884872695" className="d-block" target="_blank" rel="noreferrer">
                            <img src={whatsapp} alt="Whatsapp" />
                        </a>
                    </li>
                </ul>
                <NavLink 
                    to="/policy"
                    className={`${footer.policy} policy d-block mb-0 animate__animated`}
                >
                    Политика конфиденциальности
                </NavLink>
                <div className={`${footer.details} details text-center`}>
                    <p className="mb-0 animate__animated">
                        Web-studio на базе IT компании "ЦИТ"
                        <br/>
                        © 1996-2021. Все права защищены
                    </p>
                    <ul className="d-flex align-items-center flex-column flex-sm-row justify-content-center p-0 mt-3 mb-0 animate__animated">
                        <li className="d-block mr-sm-4 order-2 order-sm-0">
                            <a href="https://vk.com/neproducer" target="_blank" rel="noreferrer" className="d-flex align-items-center mb-0">
                                <img src={vk} alt="Vk" className="mr-2"/>
                                Андрей Ищенко
                            </a>
                        </li>
                        <li className="d-block mr-sm-4 mb-2 mb-sm-0 order-1 order-sm-0">
                            <a href="https://www.instagram.com/sefirosu_sensei/" target="_blank" rel="noreferrer" className="d-flex align-items-center mb-0">
                                <img src={instagram} alt="Instagram" className="mr-2"/>
                                Никита Кибалко
                            </a>
                        </li>
                        <li className="d-block order-0 mb-2 mb-sm-0 order-sm-0">
                            <a href="https://vk.com/id324769362" target="_blank" rel="noreferrer" className="d-flex align-items-center mb-0">
                                <img src={vk} alt="Vk" className="mr-2"/>
                                Виктория Михайлова
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;