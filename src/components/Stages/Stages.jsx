import React from 'react';
import $ from "jquery";
import stagesClass from './Stages.module.css';

const Stages = () => {
    $(function() {
        $(window).on("scroll resize", function() {
            $('#stages h2').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__jackInTheBox");
                }
            });
            $('.stagesItemOne').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInLeft");
                }
            });
            $('.stagesItemTwo, .stagesText').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInBottomLeft");
                }
            });
            $('.stagesItemThree').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInBottomRight");
                }
            });
            $('.stagesItemFour').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInRight");
                }
            });
        });
    })
    return (
        <section className={`text-center stages ${stagesClass.stages}`} id="stages">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h2 className="text-uppercase animate__animated">
                            Для поступления в нашу школу необходимо:
                        </h2>
                    </div>
                    <div className="col-lg-3 p-lg-0">
                        <div className={`${stagesClass.item} stagesItemOne animate__animated`}>
                            <span className="text-uppercase d-inline-block rounded-circle">
                                1
                            </span>
                            <h3>
                                Записаться на собеседование
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-3 p-lg-0">
                        <div className={`${stagesClass.item} ${stagesClass.itemSolid} stagesItemTwo animate__animated`}>
                            <span className="text-uppercase d-inline-block rounded-circle">
                                2
                            </span>
                            <h3>
                                Пройти тестирование
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-3 p-lg-0">
                        <div className={`${stagesClass.item} stagesItemThree animate__animated`}>
                            <span className="text-uppercase d-inline-block rounded-circle">
                                3
                            </span>
                            <h3>
                                Заключить договор
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-3 p-lg-0">
                        <div className={`${stagesClass.item} ${stagesClass.itemSolid} stagesItemFour animate__animated`}>
                            <span className="text-uppercase d-inline-block rounded-circle">
                                4
                            </span>
                            <h3>
                                Приступить к занятиям
                            </h3>
                        </div>
                    </div>
                    <div className="col-12">
                        <p className={`${stagesClass.text} stagesText animate__animated`}>
                            Запись на собеседование / тестирование <br className="d-block d-md-none"/>по тел.: +7 (988) 487-26-95
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stages;