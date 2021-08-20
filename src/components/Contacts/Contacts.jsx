import React from 'react';
import $ from "jquery";
import contacts from './Contacts.module.css';
import circleStripedGrey from '../../img/circle-striped-grey.svg';

const Contacts = () => {
    $(function() {
        let offsetTopContacts = $('#contacts').offset().top;
        if ($('#contacts')[0] && offsetTopContacts < 300) {
            $('#contacts').addClass(`${contacts.contactsPage}`);
            $('#contacts h2').each(function(){
                $(this).addClass(`animate__jackInTheBox ${contacts.noLine}`);
            });
            $('.head-text').each(function(){
                $(this).addClass("animate__fadeInLeft");
            });
            $('.contacts-block').each(function(){
                $(this).addClass("animate__fadeInRight");
            });
            $('#contacts img').each(function(){
                $(this).addClass("animate__fadeInTopLeft");
            });
        }
        $(window).on("scroll resize", function() {
            $('#contacts h2').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650 || imagePos < 1000) {
                    $(this).addClass("animate__jackInTheBox");
                }
            });
            $('.head-text').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInLeft");
                }
            });
            $('.contacts-block').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInRight");
                }
            });
            $('#contacts img').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInTopLeft");
                }
            });
        });
    })
    return (
        <section className={`${contacts.contacts} contacts text-center`} id="contacts">
            <div className="container position-relative">
                <img src={circleStripedGrey} alt="Геометрическая фигура" className={`position-absolute ${contacts.circleStriped} animate__animated`}/>
                <div className={`${contacts.head}`}>
                    <h2 className="text-uppercase animate__animated">
                        Контакты
                    </h2>
                    <p className="head-text animate__animated">
                        Главный офис находится в центральном районе города, что позволяет любому слушателю удачно добраться до места обучения
                    </p>
                </div>
                <div className={`${contacts.block} contacts-block d-flex justify-content-between align-items-center flex-lg-row flex-column animate__animated`}>
                    <div className={`${contacts.text} order-1 order-lg-0`}>
                        <a href="https://yandex.ru/maps/-/CCUiIPW8WB" target="_blank" rel="noreferrer">
                            г. Краснодар, ул. Базовская, дом 254<br/>
                            (Центральный район, угол ул. Базовская/ул. Промышленная)
                        </a>
                        <p>
                            Приемная комиссия<br/>
                            <a href="tel:89884872695">8 (988) 487-26-95</a> - многоканальный
                        </p>
                        <p>
                            e-mail: <a href="mailto:nochu-cit@mail.ru">nochu-cit@mail.ru</a>
                        </p>
                        <p>
                            Приемные дни: СБ/ВС с 14:00 до 18:00
                        </p>
                    </div>
                    <iframe title="map" src="https://yandex.ru/map-widget/v1/-/CCUer4VIcA" frameBorder="0" allowFullScreen={true} className={`${contacts.map}`}></iframe>
                </div>
            </div>
        </section>
    )
}

export default Contacts;
