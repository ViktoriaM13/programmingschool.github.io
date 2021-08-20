import React, { useEffect } from 'react';
import about from './About.module.css';
import robot from '../../img/robot.png';
import rocket from '../../img/rocket.png';
import $ from "jquery";
import Parallax from 'parallax-js';

const parallaxShow = () => {
    if($('#scene-about')[0]) {
        if($(document).width() > 1199) {
            let scene = $('#scene-about').get(0);
            let parallaxInstance = new Parallax(scene, {
                relativeInput: true
            });
        }
    }
}

const About = () => {
    $(function() {
        let offsetTopAbout = $('#about').offset().top;
        if ($('#about')[0] && offsetTopAbout < 300) {
            $('#about').addClass(`${about.aboutBig}`);
            $('#about h2').each(function(){
                $(this).addClass("animate__jackInTheBox");
            });
            $('#about p').each(function(){
                $(this).addClass("animate__fadeInLeft");
            });
            $('#about img').each(function(){
                $(this).addClass("animate__fadeInRight");
            });
        }
        $(window).on("scroll resize", function() {
            $('#about h2').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__jackInTheBox");
                }
            });
            $('#about p').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInLeft");
                }
            });
            $('#about img').each(function(){
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
        <section className={`${about.about} about text-center`} id="about">
            <div className="container position-relative">
                <div id="scene-about" className="d-none d-xl-block">
                    <div data-depth="0.4">
                        <img src={rocket} alt="Ракета" className={`${about.rocket}`}/>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12">
                        <h2 className="text-uppercase animate__animated">
                            О нас
                        </h2>
                    </div>
                    <div className="col-lg-8 order-1 order-lg-0">
                        <div>
                            <p className="animate__animated">
                                Мы имеем государственную лицензию и большой опыт в своем деле - работаем с 1996 года. 
                                Образование детей и взрослых обеспечивает профессиональную ориентацию, 
                                а так же является надежным комплектом универсальных знаний в сфере IT, 
                                которые пригодятся абсолютно в любой отрасли!
                            </p>
                            <p className="animate__animated">
                                Мы консультируем как государственные структуры, так и бизнес-сектор, сотрудничаем с более чем 1000 IT-Компаниями по всему миру. 
                                Программирование - один из ключевых навыков, которому нужно учиться уже сегодня. 
                                Каждый год Школа выпускает высококвалифицированных IT-специалистов, 
                                готовых после обучения приступить к решению серьезных проектов в ведущих компаниях России и других стран! 
                                По мнению топовых<br/>HR-экспертов наши выпускники являются одними из самых востребованных на рынке труда.
                            </p>
                            <p className="m-0 animate__animated">
                                Будущее зависит от того, что Вы делаете сегодня!
                                Считаете, что все это можно узнать из книг и интернета? 
                                Но бумага не ответит на ваши вопросы, а монитор не даст совета. 
                                Приходите и учитесь с успешными менторами и наставниками - всему, что связано с миром высоких технологий.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <img src={robot} alt="Робот" className={`img-fluid animate__animated ${about.img}`}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;