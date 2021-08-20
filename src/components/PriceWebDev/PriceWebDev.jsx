import React from 'react';
import $ from "jquery";
import priceWebDev from './PriceWebDev.module.css';

const PriceWebDev = (props) => {
    $(function() {
        $(window).on("scroll resize", function() {
            $('#priceWeb h2').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__jackInTheBox");
                }
            });
            $('.priceWebDevCardOne').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInLeft");
                }
            });
            $('.priceWebDevCardTwo').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInUp");
                }
            });
            $('.priceWebDevCardThree').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInRight");
                }
            });
        });
    })
    return (
        <section className={`text-center priceWeb ${priceWebDev.priceWeb}`} id="priceWeb">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-12">
                        <h2 className="text-uppercase animate__animated">
                            Стоимость обучения
                        </h2>
                    </div>
                    <div className="col-sm-7 col-lg-4">
                        <div className={`${priceWebDev.card} priceWebDevCard priceWebDevCardOne animate__animated`}>
                            <h3 className="m-0">
                                год (модуль)
                            </h3>
                            <div className={`${priceWebDev.text}`}>
                                <p>
                                    оплата за год вперед
                                </p>
                                <p>
                                    оплата за качественное образование от А до Я
                                </p>
                                <p>
                                    стоимость фиксирована
                                </p>
                                <p>
                                    {props.yearNumberOfLessons} в семестре
                                </p>
                            </div>
                            <span>
                                {props.yearPrice} ₽
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-7 col-lg-4">
                        <div className={`${priceWebDev.card} ${priceWebDev.cardRed} priceWebDevCardTwo animate__animated`}>
                            <h3 className="m-0">
                                месяц
                            </h3>
                            <div className={`${priceWebDev.text}`}>
                                <p>
                                    самый удобный и доступный способ оплаты за качественное образование от А до Я
                                </p>
                                <p>
                                    стоимость фиксирована
                                </p>
                                <p>
                                    {props.monthNumberOfLessons} в месяц
                                </p>
                            </div>
                            <span>
                                {props.monthPrice} ₽
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-7 col-lg-4">
                        <div className={`${priceWebDev.card} priceWebDevCard priceWebDevCardThree animate__animated`}>
                            <h3 className="m-0">
                                полгода (семестр)
                            </h3>
                            <div className={`${priceWebDev.text}`}>
                                <p>
                                    оплата за пол года вперед
                                </p>
                                <p>
                                    оплата за качественное образование от А до Я
                                </p>
                                <p>
                                    стоимость фиксирована
                                </p>
                                <p>
                                    {props.semesterNumberOfLessons} в семестре
                                </p>
                            </div>
                            <span>
                                {props.semesterPrice} ₽
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PriceWebDev;