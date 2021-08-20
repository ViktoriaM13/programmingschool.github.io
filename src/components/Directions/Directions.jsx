import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import directions from './Directions.module.css';
import $ from "jquery";
import Parallax from 'parallax-js';
import figureOne from '../../img/geometric-figure-1.svg';
import figureOneDark from '../../img/geometric-figure-dark-1.svg';
import figureTwo from '../../img/geometric-figure-2.svg';
import figureThree from '../../img/geometric-figure-3.svg';
import figureThreeDark from '../../img/geometric-figure-dark-3.svg';
import figureFour from '../../img/geometric-figure-4.svg';
import figureFive from '../../img/geometric-figure-5.svg';
import figureSix from '../../img/geometric-figure-6.svg';
import figureSeven from '../../img/geometric-figure-7.svg';
import figureEight from '../../img/geometric-figure-8.svg';
import figureEightDark from '../../img/geometric-figure-dark-8.svg';
import circleStripedRed from '../../img/circle-striped-red.svg';
import triangleOne from '../../img/triangle-1.svg';
import triangleTwo from '../../img/triangle-2.svg';
import triangleThree from '../../img/triangle-3.svg';
import triangleFour from '../../img/triangle-4.svg';
import wavyLine from '../../img/wavy-line.svg';

const parallaxShow = () => {
    if($('#scene-directions-one')[0]) {
        if($(document).width() > 1199) {
            let scene = $('#scene-directions-one').get(0);
            let parallaxInstance = new Parallax(scene, {
                relativeInput: true
            });
            let scene2 = $('#scene-directions-two').get(0);
            let parallaxInstance2 = new Parallax(scene2, {
                relativeInput: true
            });
            let scene3 = $('#scene-directions-three').get(0);
            let parallaxInstance3 = new Parallax(scene3, {
                relativeInput: true
            });
            let scene4 = $('#scene-directions-four').get(0);
            let parallaxInstance4 = new Parallax(scene4, {
                relativeInput: true
            });
        }
    }
}

const Directions = () => {
    $(function() {
        let offsetTopDirections = $('#directions').offset().top;
        if ($('#directions')[0] && offsetTopDirections < 300) {
            $('#directions').addClass(`directionsPage`);
            $('#directions h2').each(function(){
                $(this).addClass("animate__jackInTheBox");
            });
            $('#directions .btn').each(function(){
                $(this).addClass("animate__bounceIn");
            });
            $('#directions img, #directions .circle, .full-training, .accelerated-learning').each(function(){
                $(this).addClass("animate__fadeInLeft");
            });
            $('#directions .container>img').removeClass('d-xl-block');
            $(`#directions .container>div.circle`).removeClass('d-xl-block');
            $('.short-term-training, .it-kids').each(function(){
                $(this).addClass("animate__fadeInRight");
            });
        }
        $(window).on("scroll resize", function() {
            $('#directions h2').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__jackInTheBox");
                }
            });
            $('#directions .btn').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__bounceIn");
                }
            });
            $('#directions img, #directions .circle, .full-training, .accelerated-learning').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInLeft");
                }
            });
            $('#directions .circle').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInTopLeft");
                }
            });
            $('.short-term-training, .it-kids').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInRight");
                }
            });
        });
    })
    useEffect(() => {
        parallaxShow();
    })
    return (
        <section className={`${directions.directions} directions text-center`} id="directions">
            <div className="container position-relative">
                <img src={circleStripedRed} alt="Геометрическая фигура" className={`position-absolute ${directions.circleStriped} animate__animated d-none d-xl-block`}/>
                <div className={`${directions.circle} ${directions.circleRed} circle position-absolute animate__animated d-none d-xl-block`}></div>
                <img src={wavyLine} alt="Волнистая линия" className={`position-absolute ${directions.wavyLine} animate__animated d-none d-xl-block`}/>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h2 className="text-uppercase animate__animated">
                            Направления
                        </h2>
                    </div>
                    <div className="col-sm-11 col-md-8 col-lg-6 col-xl-5">
                        <div className={`position-relative mx-auto ${directions.item} full-training animate__animated`}>
                            <div id="scene-directions-one" className={`${directions.scene}`}>
                                <div data-depth="0.4">
                                    <div className={`${directions.circle} ${directions.circleOne} position-absolute`}></div>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${directions.circle} ${directions.circleThree} position-absolute`}></div>
                                </div>
                                <div data-depth="0.1">
                                    <div className={`${directions.circle} ${directions.circleFour} position-absolute`}></div>
                                </div>
                                <div>
                                    <img src={figureOne} alt="Геометрическая фигура" className={`position-absolute ${directions.figureOne} directionsGeometricFigure`}/>
                                    <img src={figureOneDark} alt="Геометрическая фигура" className={`position-absolute ${directions.figureOne} directionsGeometricFigureDark`}/>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${directions.circle} ${directions.circleTwo} position-absolute`}></div>
                                </div>
                                <div>
                                    <img src={figureTwo} alt="Геометрическая фигура" className={`position-absolute ${directions.figureTwo}`}/>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${directions.circle} ${directions.circleSix} position-absolute`}></div>
                                </div>
                                <div data-depth="0.6">
                                    <div className={`${directions.circle} ${directions.circleFive} position-absolute`}></div>
                                </div>
                                <div>
                                    <img src={triangleOne} alt="Треугольник" className={`position-absolute ${directions.triangleOne}`}/>
                                </div>
                            </div>
                            <div className="position-relative">
                                <h3 className="text-white">
                                    Полное<br/>обучение
                                </h3>
                                <NavLink 
                                    to="/full-training"
                                    className={`${directions.btn} directionsBtn btn badge-pill border-0 animate__animated animate__delay-1.5s`}
                                >
                                    Узнать больше
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-11 col-md-8 col-lg-6 col-xl-5">
                        <div className={`position-relative mx-auto ${directions.item} short-term-training animate__animated`}>
                            <div id="scene-directions-two" className={`${directions.scene}`}>
                                <div data-depth="0.4">
                                    <div className={`${directions.circle} ${directions.circleTen} position-absolute`}></div>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${directions.circle} ${directions.circleEleven} position-absolute`}></div>
                                </div>
                                <div>
                                    <img src={figureThree} alt="Геометрическая фигура" className={`position-absolute ${directions.figureThree} directionsGeometricFigure`}/>
                                    <img src={figureThreeDark} alt="Геометрическая фигура" className={`position-absolute ${directions.figureThree} directionsGeometricFigureDark`}/>
                                </div>
                                <div data-depth="0.3">
                                    <div className={`${directions.circle} ${directions.circleEight} position-absolute`}></div>
                                </div>
                                <div>
                                    <img src={figureFour} alt="Геометрическая фигура" className={`position-absolute ${directions.figureFour}`}/>
                                </div>
                                <div data-depth="0.7">
                                    <div className={`${directions.circle} ${directions.circleSeven} position-absolute`}></div>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${directions.circle} ${directions.circleNine} position-absolute`}></div>
                                </div>
                                <div data-depth="0.6">
                                    <div className={`${directions.circle} ${directions.circleTwelve} position-absolute`}></div>
                                </div>
                                <div>
                                    <img src={triangleTwo} alt="Треугольник" className={`position-absolute ${directions.triangleTwo}`}/>
                                </div>
                            </div>
                            <div className="position-relative">
                                <h3 className="text-white">
                                    Краткосрочное<br/>обучение
                                </h3>
                                <NavLink 
                                    to="/Cours"
                                    className={`${directions.btn} directionsBtn btn badge-pill border-0 animate__animated animate__delay-1.5s`}
                                >
                                    Узнать больше
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-11 col-md-8 col-lg-6 col-xl-5">
                        <div className={`position-relative mx-auto ${directions.item} accelerated-learning animate__animated`}>
                            <div id="scene-directions-three" className={`${directions.scene}`}>
                                <div data-depth="0.4">
                                    <div className={`${directions.circle} ${directions.circleSixteen} position-absolute`}></div>
                                </div>
                                <div>
                                    <img src={figureSix} alt="Геометрическая фигура" className={`position-absolute ${directions.figureSix} directionsGeometricFigure`}/>
                                    <img src={figureThreeDark} alt="Геометрическая фигура" className={`position-absolute ${directions.figureSix} directionsGeometricFigureDark`}/>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${directions.circle} ${directions.circleFourteen} position-absolute`}></div>
                                </div>
                                <div data-depth="0.3">
                                    <div className={`${directions.circle} ${directions.circleSeventeen} position-absolute`}></div>
                                </div>
                                <div data-depth="0.6">
                                    <div className={`${directions.circle} ${directions.circleEighteen} position-absolute`}></div>
                                </div>
                                <div>
                                    <img src={figureFive} alt="Геометрическая фигура" className={`position-absolute ${directions.figureFive}`}/>
                                </div>
                                <div data-depth="0.4">
                                    <div className={`${directions.circle} ${directions.circleThirteen} position-absolute`}></div>
                                </div>
                                <div data-depth="0.4">
                                    <div className={`${directions.circle} ${directions.circleFifteen} position-absolute`}></div>
                                </div>
                                <div>
                                    <img src={triangleThree} alt="Треугольник" className={`position-absolute ${directions.triangleThree}`}/>
                                </div>
                            </div>
                            <div className="position-relative">
                                <h3 className="text-white">
                                    Ускоренное<br/>обучение
                                </h3>
                                <NavLink 
                                    to="/accelerated-learning"
                                    className={`${directions.btn} directionsBtn btn badge-pill border-0 animate__animated animate__delay-1.5s`}
                                >
                                    Узнать больше
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-11 col-md-8 col-lg-6 col-xl-5">
                        <div className={`position-relative mx-auto ${directions.item} it-kids animate__animated`}>
                            <div id="scene-directions-four" className={`${directions.scene}`}>
                                <div data-depth="0.3">
                                    <div className={`${directions.circle} ${directions.circleTwenty} position-absolute`}></div>
                                </div>
                                <div data-depth="0.3">
                                    <div className={`${directions.circle} ${directions.circleTwentyTwo} position-absolute`}></div>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${directions.circle} ${directions.circleTwentyThree} position-absolute`}></div>
                                </div>
                                <div>
                                    <img src={figureEight} alt="Геометрическая фигура" className={`position-absolute ${directions.figureEight} directionsGeometricFigure`}/>
                                    <img src={figureEightDark} alt="Геометрическая фигура" className={`position-absolute ${directions.figureEight} directionsGeometricFigureDark`}/>
                                </div>
                                <div>
                                    <img src={figureSeven} alt="Геометрическая фигура" className={`position-absolute ${directions.figureSeven}`}/>
                                </div>
                                <div data-depth="0.4">
                                    <div className={`${directions.circle} ${directions.circleTwentyOne} position-absolute`}></div>
                                </div>
                                <div data-depth="0.3">
                                    <div className={`${directions.circle} ${directions.circleTwentyFour} position-absolute`}></div>
                                </div>
                                <div data-depth="0.8">
                                    <div className={`${directions.circle} ${directions.circleTwentyFive} position-absolute`}></div>
                                </div>
                                <div>
                                    <img src={triangleFour} alt="Треугольник" className={`position-absolute ${directions.triangleFour}`}/>
                                </div>
                            </div>
                            <div className="position-relative">
                                <h3 className="text-white">
                                    Летний<br/>лагерь
                                </h3>
                                <NavLink 
                                    to="/it-kids"
                                    className={`${directions.btn} directionsBtn btn badge-pill border-0 animate__animated animate__delay-1.5s`}
                                >
                                    Узнать больше
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <NavLink 
                            to="/test"
                            className={`directionsLinkTest`}
                        >
                            Пройти тест: "Кто вы из мира IT?"
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Directions;