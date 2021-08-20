import React from 'react';
import $ from "jquery";
import priceWebDevAccelerated from './PriceWebDevAccelerated.module.css';
import coin from '../../img/coin.svg';
import coinDark from '../../img/coin-dark.svg';

const PriceWebDevAccelerated = (props) => {
    $(function() {
        $(window).on("scroll resize", function() {
            $('#priceWebAccelerated h2').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__jackInTheBox");
                }
            });
            $('.priceWebDevAcceleratedCardOne').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInLeft");
                }
            });
            $('.priceWebDevAcceleratedCardTwo').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInUp");
                }
            });
            $('.priceWebDevAcceleratedCardThree').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInRight");
                }
            });
        });
    })
    return (
        <section className={`text-center priceWebAccelerated ${priceWebDevAccelerated.priceWebAccelerated}`} id="priceWebAccelerated">
            <div className="container position-relative">
                <div className="row align-items-center justify-content-center">
                    <div className="col-12">
                        <h2 className="text-uppercase animate__animated">
                            Стоимость обучения
                        </h2>
                    </div>
                    <div className="col-sm-7 col-lg-4">
                        <div className={`${priceWebDevAccelerated.card} priceWebDevCard priceWebDevAcceleratedCardOne animate__animated`}>
                            <h3 className="m-0">
                                год (модуль)
                            </h3>
                            <div className={`${priceWebDevAccelerated.text}`}>
                                <p>
                                    1152 академических часа занимает учебная программа полностью
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
                        <div className={`${priceWebDevAccelerated.card} ${priceWebDevAccelerated.cardRed} priceWebDevAcceleratedCardTwo animate__animated`}>
                            <h3 className="m-0">
                                месяц
                            </h3>
                            <div className={`${priceWebDevAccelerated.text}`}>
                                <p>
                                    Оплата строго до 25 числа каждого месяца*
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
                        <div className={`${priceWebDevAccelerated.card} priceWebDevCard priceWebDevAcceleratedCardThree animate__animated`}>
                            <h3 className="m-0">
                                полгода (семестр)
                            </h3>
                            <div className={`${priceWebDevAccelerated.text}`}>
                                <p>
                                    2 модуля (24 месяца) длительность всей учебной программы
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
                    <img src={coin} alt="Монеты" className={`position-absolute ${priceWebDevAccelerated.img} priceWebDevAcceleratedImg`}/>
                    <img src={coinDark} alt="Монеты" className={`position-absolute ${priceWebDevAccelerated.img} priceWebDevAcceleratedImgDark`}/>
                </div>
            </div>
        </section>
    )
}

export default PriceWebDevAccelerated;