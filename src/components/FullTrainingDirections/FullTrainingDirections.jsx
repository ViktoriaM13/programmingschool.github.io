import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import $ from "jquery";
import Parallax from 'parallax-js';
import fulltrainingdirections from './FullTrainingDirections.module.css';
import laptopCode from '../../img/laptop-code.svg';
import pencilRuler from '../../img/pencil-ruler.svg';
import laptop from '../../img/laptop.svg';
import tools from '../../img/tools.svg';
import figureNine from '../../img/geometric-figure-9.svg';
import figureNineDark from '../../img/geometric-figure-9-dark.svg';
import figureTen from '../../img/geometric-figure-10.svg';

$(function() {
    $(window).on("scroll resize", function() {
        $('#choice h2').each(function(){
            let imagePos = $(this).offset().top;

            let topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+800) {
                $(this).addClass("animate__jackInTheBox");
            }
        });
        $('.web, .programmer').each(function(){
            let imagePos = $(this).offset().top;

            let topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__fadeInLeft");
            }
        });
        $('#choice .btn').each(function(){
            let imagePos = $(this).offset().top;

            let topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__bounceIn");
            }
        });
        $('.designer, .engineer').each(function(){
            let imagePos = $(this).offset().top;

            let topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__fadeInRight");
            }
        });
    });
})

const parallaxShow = () => {
    if($('#scene-choice-one')[0]) {
        if($(document).width() > 1199) {
            let scene = $('#scene-choice-one').get(0);
            let parallaxInstance = new Parallax(scene, {
                relativeInput: true
            });
            let scene2 = $('#scene-choice-two').get(0);
            let parallaxInstance2 = new Parallax(scene2, {
                relativeInput: true
            });
            let scene3 = $('#scene-choice-three').get(0);
            let parallaxInstance3 = new Parallax(scene3, {
                relativeInput: true
            });
            let scene4 = $('#scene-choice-four').get(0);
            let parallaxInstance4 = new Parallax(scene4, {
                relativeInput: true
            });
        }
    }
}

const FullTrainingDirections = () => {
    useEffect(() => {
        parallaxShow();
    })
    return (
        <section className={`${fulltrainingdirections.choice} choice text-center`} id="choice">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h2 className="text-uppercase mx-auto animate__animated">
                            Выбирайте профессию, которую можно получить вместе со школьным аттестатом
                        </h2>
                    </div>
                    <div className="col-sm-11 col-md-8 col-lg-6 col-xl-5">
                        <div className={`mx-auto position-relative ${fulltrainingdirections.item} web animate__animated`}>
                            <div id="scene-choice-one" className={`${fulltrainingdirections.scene}`}>
                                <div data-depth="0.1">
                                    <div className={`${fulltrainingdirections.circle} ${fulltrainingdirections.circleSix} position-absolute`}></div>
                                </div>
                                <div>
                                    <img src={figureTen} alt="Геометрическая фигура" className={`position-absolute ${fulltrainingdirections.figureTen}`}/>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${fulltrainingdirections.circle} ${fulltrainingdirections.circleFour} position-absolute`}></div>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${fulltrainingdirections.circle} ${fulltrainingdirections.circleFive} position-absolute`}></div>
                                </div>
                                <div>
                                    <img src={figureNine} alt="Геометрическая фигура" className={`position-absolute ${fulltrainingdirections.figureNine} directionsGeometricFigure`}/>
                                    <img src={figureNineDark} alt="Геометрическая фигура" className={`position-absolute ${fulltrainingdirections.figureNine} directionsGeometricFigureDark`}/>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${fulltrainingdirections.circle} ${fulltrainingdirections.circleOne} position-absolute`}></div>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${fulltrainingdirections.circle} ${fulltrainingdirections.circleTwo} position-absolute`}></div>
                                </div>
                                <div data-depth="0.6">
                                    <div className={`${fulltrainingdirections.circle} ${fulltrainingdirections.circleThree} position-absolute`}></div>
                                </div>
                            </div>
                            <div className="position-relative">
                                <img src={laptopCode} alt="Ноутбук и код" className={`${fulltrainingdirections.icon}`}/>
                                <h3 className="text-white">
                                    Web-разработчик /<br/>Front-end /<br/>Back-end
                                </h3>
                                <NavLink
                                    to="/web-developer"
                                    className={`${fulltrainingdirections.btn} btn badge-pill border-0 animate__animated animate__delay-1.5s`}
                                >
                                    Узнать больше
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-11 col-md-8 col-lg-6 col-xl-5">
                        <div className={`mx-auto position-relative ${fulltrainingdirections.item} designer animate__animated`}>
                            <div id="scene-choice-two" className={`${fulltrainingdirections.scene}`}>
                                <div data-depth="0.4">
                                    <div className={`${fulltrainingdirections.circle} ${fulltrainingdirections.circleSeven} position-absolute`}></div>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${fulltrainingdirections.circle} ${fulltrainingdirections.circleTen} position-absolute`}></div>
                                </div>
                                <div>
                                    <img src={figureTen} alt="Геометрическая фигура" className={`position-absolute ${fulltrainingdirections.figureTen}`}/>
                                </div>
                                <div>
                                    <img src={figureNine} alt="Геометрическая фигура" className={`position-absolute ${fulltrainingdirections.figureNine} directionsGeometricFigure`}/>
                                    <img src={figureNineDark} alt="Геометрическая фигура" className={`position-absolute ${fulltrainingdirections.figureNine} directionsGeometricFigureDark`}/>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${fulltrainingdirections.circle} ${fulltrainingdirections.circleEight} position-absolute`}></div>
                                </div>
                                <div data-depth="0.1">
                                    <div className={`${fulltrainingdirections.circle} ${fulltrainingdirections.circleNine} position-absolute`}></div>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${fulltrainingdirections.circle} ${fulltrainingdirections.circleEleven} position-absolute`}></div>
                                </div>
                                <div data-depth="0.6">
                                    <div className={`${fulltrainingdirections.circle} ${fulltrainingdirections.circleTwelve} position-absolute`}></div>
                                </div>
                            </div>
                            <div className="position-relative">
                                <img src={pencilRuler} alt="Карандаш" className={`${fulltrainingdirections.icon}`}/>
                                <h3 className="text-white">
                                    Графический дизайнер /<br/>Архитектурное<br/>проектирование и 3D
                                </h3>
                                <NavLink
                                    to="/graphic-designer"
                                    className={`${fulltrainingdirections.btn} btn badge-pill border-0 animate__animated animate__delay-1.5s`}
                                >
                                    Узнать больше
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-11 col-md-8 col-lg-6 col-xl-5">
                        <div className={`mx-auto position-relative ${fulltrainingdirections.item} programmer animate__animated`}>
                            <div id="scene-choice-three" className={`${fulltrainingdirections.scene}`}>
                                <div data-depth="0.4">
                                    <div className={`${fulltrainingdirections.circle} ${fulltrainingdirections.circleThirteen} position-absolute`}></div>
                                </div>
                                <div data-depth="0.1">
                                    <div className={`${fulltrainingdirections.circle} ${fulltrainingdirections.circleSixteen} position-absolute`}></div>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${fulltrainingdirections.circle} ${fulltrainingdirections.circleSeventeen} position-absolute`}></div>
                                </div>
                                <div>
                                    <img src={figureTen} alt="Геометрическая фигура" className={`position-absolute ${fulltrainingdirections.figureTen}`}/>
                                </div>
                                <div>
                                    <img src={figureNine} alt="Геометрическая фигура" className={`position-absolute ${fulltrainingdirections.figureNine} directionsGeometricFigure`}/>
                                    <img src={figureNineDark} alt="Геометрическая фигура" className={`position-absolute ${fulltrainingdirections.figureNine} directionsGeometricFigureDark`}/>
                                </div>
                                <div data-depth="0.1">
                                    <div className={`${fulltrainingdirections.circle} ${fulltrainingdirections.circleFourteen} position-absolute`}></div>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${fulltrainingdirections.circle} ${fulltrainingdirections.circleFifteen} position-absolute`}></div>
                                </div>
                                <div data-depth="0.6">
                                    <div className={`${fulltrainingdirections.circle} ${fulltrainingdirections.circleEighteen} position-absolute`}></div>
                                </div>
                            </div>
                            <div className="position-relative">
                                <img src={laptop} alt="Ноутбук" className={`${fulltrainingdirections.icon}`}/>
                                <h3 className="text-white">
                                    Программист /<br/>Программная инженерия
                                </h3>
                                <NavLink
                                    to="/programmer"
                                    className={`${fulltrainingdirections.btn} btn badge-pill border-0 animate__animated animate__delay-1.5s`}
                                >
                                    Узнать больше
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-11 col-md-8 col-lg-6 col-xl-5">
                        <div className={`mx-auto position-relative ${fulltrainingdirections.item} engineer animate__animated`}>
                            <div id="scene-choice-four" className={`${fulltrainingdirections.scene}`}>
                                <div data-depth="0.1">
                                    <div className={`${fulltrainingdirections.circle} ${fulltrainingdirections.circleTwentyTwo} position-absolute`}></div>
                                </div>
                                <div>
                                    <img src={figureTen} alt="Геометрическая фигура" className={`position-absolute ${fulltrainingdirections.figureTen}`}/>
                                </div>
                                <div data-depth="0.4">
                                    <div className={`${fulltrainingdirections.circle} ${fulltrainingdirections.circleNineteen} position-absolute`}></div>
                                </div>
                                <div>
                                    <img src={figureNine} alt="Геометрическая фигура" className={`position-absolute ${fulltrainingdirections.figureNine} directionsGeometricFigure`}/>
                                    <img src={figureNineDark} alt="Геометрическая фигура" className={`position-absolute ${fulltrainingdirections.figureNine} directionsGeometricFigureDark`}/>
                                </div>
                                <div data-depth="0.1">
                                    <div className={`${fulltrainingdirections.circle} ${fulltrainingdirections.circleTwenty} position-absolute`}></div>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${fulltrainingdirections.circle} ${fulltrainingdirections.circleTwentyOne} position-absolute`}></div>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${fulltrainingdirections.circle} ${fulltrainingdirections.circleTwentyThree} position-absolute`}></div>
                                </div>
                                <div data-depth="0.6">
                                    <div className={`${fulltrainingdirections.circle} ${fulltrainingdirections.circleTwentyFour} position-absolute`}></div>
                                </div>
                            </div>
                            <div className="position-relative">
                            <img src={tools} alt="Инструменты" className={`${fulltrainingdirections.icon}`}/>
                                <h3 className="text-white">
                                    Системный инженер /<br/>Кибербезопасность
                                </h3>
                                <NavLink
                                    to="/system-engineer"
                                    className={`${fulltrainingdirections.btn} btn badge-pill border-0 animate__animated animate__delay-1.5s`}
                                >
                                    Узнать больше
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FullTrainingDirections;
