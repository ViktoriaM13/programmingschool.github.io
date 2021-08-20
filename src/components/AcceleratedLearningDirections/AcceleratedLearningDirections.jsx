import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import $ from "jquery";
import Parallax from 'parallax-js';
import acceleratedLearningDirectionsStyle from './AcceleratedLearningDirections.module.css';
import laptopCode from '../../img/laptop-code.svg';
import pencilRuler from '../../img/pencil-ruler.svg';
import laptop from '../../img/laptop.svg';
import tools from '../../img/tools.svg';
import figureNine from '../../img/geometric-figure-9.svg';
import figureNineDark from '../../img/geometric-figure-9-dark.svg';
import figureTen from '../../img/geometric-figure-10.svg';

$(function() {
    $(window).on("scroll resize", function() {
        $('#choiceAccelerated h2').each(function(){
            let imagePos = $(this).offset().top;
    
            let topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+800) {
                $(this).addClass("animate__jackInTheBox");
            }
        });
        $('.web, .programmer, .choiceAcceleratedText').each(function(){
            let imagePos = $(this).offset().top;
    
            let topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__fadeInLeft");
            }
        });
        $('#choiceAccelerated .btn').each(function(){
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
    if($('#scene-choiceAccelerated-one')[0]) {
        if($(document).width() > 1199) {
            let scene = $('#scene-choiceAccelerated-one').get(0);
            let parallaxInstance = new Parallax(scene, {
                relativeInput: true
            });
            let scene2 = $('#scene-choiceAccelerated-two').get(0);
            let parallaxInstance2 = new Parallax(scene2, {
                relativeInput: true
            });
            let scene3 = $('#scene-choiceAccelerated-three').get(0);
            let parallaxInstance3 = new Parallax(scene3, {
                relativeInput: true
            });
            let scene4 = $('#scene-choiceAccelerated-four').get(0);
            let parallaxInstance4 = new Parallax(scene4, {
                relativeInput: true
            });
        }
    }
}

const AcceleratedLearningDirections = () => {
    useEffect(() => {
        parallaxShow();
    })
    return (
        <section className={`${acceleratedLearningDirectionsStyle.choiceAccelerated} choiceAccelerated text-center`} id="choiceAccelerated">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h2 className="text-uppercase mx-auto animate__animated">
                            Выбирайте профессию, которую можно получить вместе со школьным аттестатом
                        </h2>
                    </div>
                    <div className="col-sm-11 col-md-8 col-lg-6 col-xl-5">
                        <div className={`mx-auto position-relative ${acceleratedLearningDirectionsStyle.item} web animate__animated`}>
                            <div id="scene-choiceAccelerated-one" className={`${acceleratedLearningDirectionsStyle.scene}`}>
                                <div data-depth="0.1">
                                    <div className={`${acceleratedLearningDirectionsStyle.circle} ${acceleratedLearningDirectionsStyle.circleSix} position-absolute`}></div>
                                </div>
                                <div>
                                    <img src={figureTen} alt="Геометрическая фигура" className={`position-absolute ${acceleratedLearningDirectionsStyle.figureTen}`}/>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${acceleratedLearningDirectionsStyle.circle} ${acceleratedLearningDirectionsStyle.circleFour} position-absolute`}></div>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${acceleratedLearningDirectionsStyle.circle} ${acceleratedLearningDirectionsStyle.circleFive} position-absolute`}></div>
                                </div>
                                <div>
                                    <img src={figureNine} alt="Геометрическая фигура" className={`position-absolute ${acceleratedLearningDirectionsStyle.figureNine} directionsGeometricFigure`}/>
                                    <img src={figureNineDark} alt="Геометрическая фигура" className={`position-absolute ${acceleratedLearningDirectionsStyle.figureNine} directionsGeometricFigureDark`}/>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${acceleratedLearningDirectionsStyle.circle} ${acceleratedLearningDirectionsStyle.circleOne} position-absolute`}></div>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${acceleratedLearningDirectionsStyle.circle} ${acceleratedLearningDirectionsStyle.circleTwo} position-absolute`}></div>
                                </div>
                                <div data-depth="0.6">
                                    <div className={`${acceleratedLearningDirectionsStyle.circle} ${acceleratedLearningDirectionsStyle.circleThree} position-absolute`}></div>
                                </div>
                            </div>
                            <div className="position-relative">
                                <img src={laptopCode} alt="Ноутбук и код" className={`${acceleratedLearningDirectionsStyle.icon}`}/>
                                <h3 className="text-white">
                                    Web-разработчик /<br/>Front-end /<br/>Back-end
                                </h3>
                                <NavLink 
                                    to="/web-developer-accelerated"
                                    className={`${acceleratedLearningDirectionsStyle.btn} btn badge-pill border-0 animate__animated animate__delay-1.5s`}
                                >
                                    Узнать больше
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-11 col-md-8 col-lg-6 col-xl-5">
                        <div className={`mx-auto position-relative ${acceleratedLearningDirectionsStyle.item} designer animate__animated`}>
                            <div id="scene-choiceAccelerated-two" className={`${acceleratedLearningDirectionsStyle.scene}`}>
                                <div data-depth="0.4">
                                    <div className={`${acceleratedLearningDirectionsStyle.circle} ${acceleratedLearningDirectionsStyle.circleSeven} position-absolute`}></div>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${acceleratedLearningDirectionsStyle.circle} ${acceleratedLearningDirectionsStyle.circleTen} position-absolute`}></div>
                                </div>
                                <div>
                                    <img src={figureTen} alt="Геометрическая фигура" className={`position-absolute ${acceleratedLearningDirectionsStyle.figureTen}`}/>
                                </div>
                                <div>
                                    <img src={figureNine} alt="Геометрическая фигура" className={`position-absolute ${acceleratedLearningDirectionsStyle.figureNine} directionsGeometricFigure`}/>
                                    <img src={figureNineDark} alt="Геометрическая фигура" className={`position-absolute ${acceleratedLearningDirectionsStyle.figureNine} directionsGeometricFigureDark`}/>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${acceleratedLearningDirectionsStyle.circle} ${acceleratedLearningDirectionsStyle.circleEight} position-absolute`}></div>
                                </div>
                                <div data-depth="0.1">
                                    <div className={`${acceleratedLearningDirectionsStyle.circle} ${acceleratedLearningDirectionsStyle.circleNine} position-absolute`}></div>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${acceleratedLearningDirectionsStyle.circle} ${acceleratedLearningDirectionsStyle.circleEleven} position-absolute`}></div>
                                </div>
                                <div data-depth="0.6">
                                    <div className={`${acceleratedLearningDirectionsStyle.circle} ${acceleratedLearningDirectionsStyle.circleTwelve} position-absolute`}></div>
                                </div>
                            </div>
                            <div className="position-relative">
                                <img src={pencilRuler} alt="Карандаш" className={`${acceleratedLearningDirectionsStyle.icon}`}/>
                                <h3 className="text-white">
                                    Графический дизайнер /<br/>Архитектурное<br/>проектирование и 3D
                                </h3>
                                <NavLink 
                                    to="/graphic-designer-accelerated"
                                    className={`${acceleratedLearningDirectionsStyle.btn} btn badge-pill border-0 animate__animated animate__delay-1.5s`}
                                >
                                    Узнать больше
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-11 col-md-8 col-lg-6 col-xl-5">
                        <div className={`mx-auto position-relative ${acceleratedLearningDirectionsStyle.item} programmer animate__animated`}>
                            <div id="scene-choiceAccelerated-three" className={`${acceleratedLearningDirectionsStyle.scene}`}>
                                <div data-depth="0.4">
                                    <div className={`${acceleratedLearningDirectionsStyle.circle} ${acceleratedLearningDirectionsStyle.circleThirteen} position-absolute`}></div>
                                </div>
                                <div data-depth="0.1">
                                    <div className={`${acceleratedLearningDirectionsStyle.circle} ${acceleratedLearningDirectionsStyle.circleSixteen} position-absolute`}></div>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${acceleratedLearningDirectionsStyle.circle} ${acceleratedLearningDirectionsStyle.circleSeventeen} position-absolute`}></div>
                                </div>
                                <div>
                                    <img src={figureTen} alt="Геометрическая фигура" className={`position-absolute ${acceleratedLearningDirectionsStyle.figureTen}`}/>
                                </div>
                                <div>
                                    <img src={figureNine} alt="Геометрическая фигура" className={`position-absolute ${acceleratedLearningDirectionsStyle.figureNine} directionsGeometricFigure`}/>
                                    <img src={figureNineDark} alt="Геометрическая фигура" className={`position-absolute ${acceleratedLearningDirectionsStyle.figureNine} directionsGeometricFigureDark`}/>
                                </div>
                                <div data-depth="0.1">
                                    <div className={`${acceleratedLearningDirectionsStyle.circle} ${acceleratedLearningDirectionsStyle.circleFourteen} position-absolute`}></div>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${acceleratedLearningDirectionsStyle.circle} ${acceleratedLearningDirectionsStyle.circleFifteen} position-absolute`}></div>
                                </div>
                                <div data-depth="0.6">
                                    <div className={`${acceleratedLearningDirectionsStyle.circle} ${acceleratedLearningDirectionsStyle.circleEighteen} position-absolute`}></div>
                                </div>
                            </div>
                            <div className="position-relative">
                                <img src={laptop} alt="Ноутбук" className={`${acceleratedLearningDirectionsStyle.icon}`}/>
                                <h3 className="text-white">
                                    Программист /<br/>Программная инженерия
                                </h3>
                                <NavLink 
                                    to="/programmer-accelerated"
                                    className={`${acceleratedLearningDirectionsStyle.btn} btn badge-pill border-0 animate__animated animate__delay-1.5s`}
                                >
                                    Узнать больше
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-11 col-md-8 col-lg-6 col-xl-5">
                        <div className={`mx-auto position-relative ${acceleratedLearningDirectionsStyle.item} engineer animate__animated`}>
                            <div id="scene-choiceAccelerated-four" className={`${acceleratedLearningDirectionsStyle.scene}`}>
                                <div data-depth="0.1">
                                    <div className={`${acceleratedLearningDirectionsStyle.circle} ${acceleratedLearningDirectionsStyle.circleTwentyTwo} position-absolute`}></div>
                                </div>
                                <div>
                                    <img src={figureTen} alt="Геометрическая фигура" className={`position-absolute ${acceleratedLearningDirectionsStyle.figureTen}`}/>
                                </div>
                                <div data-depth="0.4">
                                    <div className={`${acceleratedLearningDirectionsStyle.circle} ${acceleratedLearningDirectionsStyle.circleNineteen} position-absolute`}></div>
                                </div>
                                <div>
                                    <img src={figureNine} alt="Геометрическая фигура" className={`position-absolute ${acceleratedLearningDirectionsStyle.figureNine} directionsGeometricFigure`}/>
                                    <img src={figureNineDark} alt="Геометрическая фигура" className={`position-absolute ${acceleratedLearningDirectionsStyle.figureNine} directionsGeometricFigureDark`}/>
                                </div>
                                <div data-depth="0.1">
                                    <div className={`${acceleratedLearningDirectionsStyle.circle} ${acceleratedLearningDirectionsStyle.circleTwenty} position-absolute`}></div>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${acceleratedLearningDirectionsStyle.circle} ${acceleratedLearningDirectionsStyle.circleTwentyOne} position-absolute`}></div>
                                </div>
                                <div data-depth="0.2">
                                    <div className={`${acceleratedLearningDirectionsStyle.circle} ${acceleratedLearningDirectionsStyle.circleTwentyThree} position-absolute`}></div>
                                </div>
                                <div data-depth="0.6">
                                    <div className={`${acceleratedLearningDirectionsStyle.circle} ${acceleratedLearningDirectionsStyle.circleTwentyFour} position-absolute`}></div>
                                </div>
                            </div>
                            <div className="position-relative">
                            <img src={tools} alt="Инструменты" className={`${acceleratedLearningDirectionsStyle.icon}`}/>
                                <h3 className="text-white">
                                    Системный инженер /<br/>Кибербезопасность
                                </h3>
                                <NavLink 
                                    to="/system-engineer-accelerated"
                                    className={`${acceleratedLearningDirectionsStyle.btn} btn badge-pill border-0 animate__animated animate__delay-1.5s`}
                                >
                                    Узнать больше
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-11">
                        <div className={`choiceAcceleratedText ${acceleratedLearningDirectionsStyle.detail} animate__animated`}>
                            <p>
                                Занятия проходят по принципу: <br/>изучили теорию и сразу закрепили ее на практике!
                            </p>
                            <p>
                                Только в нашей Школе - каждый первокурсник проходит сначала базовый модуль, на котором он погрузившись в каждое из отделений по итогу выбирает именно ту профессию, которая вызвала у него максимальный интерес.
                            </p>
                            <p>
                                Таким образом, выбор будущей профессии становится осознанным и дальнейший учебный процесс доставляет одно удовольствие!
                            </p>
                            <p>
                                Ведь учащийся изучает только профильные предметы по выбранной им специальности!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AcceleratedLearningDirections;