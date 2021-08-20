import React from 'react';
import $ from "jquery";
import itKidsStyle from './TrainingProgramITKids.module.css';

const TrainingProgramITKids = () => {
    $(function() {
        $(window).on("scroll resize", function() {
            $('.trainingProgramKidsTitle').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__jackInTheBox");
                }
            });
            $('.trainingProgramKidsOffer, .trainingProgramKidsProf, .trainingProgramKidsDetail').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInLeft");
                }
            });
            $('.trainingProgramKidsLite, .trainingProgramKidsText').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInRight");
                }
            });
        });
    })
    return (
        <section className={`itKids ${itKidsStyle.itKids}`} id="itKids">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className={`text-center ${itKidsStyle.title} trainingProgramKidsTitle animate__animated`}>
                            <h2 className="text-uppercase">
                                Проведем это лето интересно и полезно!
                            </h2>
                            <p className="m-auto">
                                2 варианта посещения лагеря: <br className="d-block d-sm-none"/>#лайт и #профи
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={`${itKidsStyle.offer} trainingProgramKidsOffer text-center text-lg-left animate__animated`}>
                            <h3 className="mb-0">
                                Программа <br className="d-block d-sm-none"/>летнего лагеря
                            </h3>
                            <p>
                                Программа ориентирована на знакомство с профессиями сферы&nbsp;IT
                            </p>
                        </div>
                        <div className={`${itKidsStyle.block} ${itKidsStyle.lite} itKidsBlock trainingProgramKidsLite d-block d-md-none animate__animated`}>
                            <span className={`text-right d-block ${itKidsStyle.time}`}>
                                48 академических часов
                            </span>
                            <h4 className="text-white">
                                #ЛАЙТ
                            </h4>
                            <ul className="m-0">
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Основы работы с компьютером
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Видеомонтаж / Переходы / Спец эффекты
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Обработка фотографий / Ретушь / Создание артов
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        3D моделирование / Анимация / Мультипликация
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Разработка сайтов / Верстка / Дизайн
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Разработка игр / Roblox
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Создание своего блога / Видеоблогинг
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Работа в сети / Безопасный интернет
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Создание презентаций / Оформление видеопрезентаций
                                    </p>
                                </li>
                            </ul>
                            <span className={`d-block ${itKidsStyle.price}`}>
                                6,500 руб/мес
                            </span>
                        </div>
                        <div className={`${itKidsStyle.block} ${itKidsStyle.prof} itKidsBlock trainingProgramKidsProf animate__animated`}>
                            <span className={`text-right d-block ${itKidsStyle.time}`}>
                                70 академических часов
                            </span>
                            <h4 className="text-white">
                                #ПРОФИ
                            </h4>
                            <ul className="m-0">
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Основы работы с компьютером
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Видеомонтаж / Переходы / Спец эффекты
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Обработка фотографий / Ретушь / Создание артов
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        3D моделирование / Анимация / Мультипликация
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Разработка сайтов / Верстка / Дизайн
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Разработка игр / Roblox
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Создание своего блога / Видеоблогинг
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Работа в сети / Безопасный интернет
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Создание презентаций / Оформление видеопрезентаций
                                    </p>
                                </li>
                            </ul>
                            <span className={`d-block ${itKidsStyle.price}`}>
                                25 тыс руб/смена
                            </span>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className={`${itKidsStyle.block} ${itKidsStyle.lite} itKidsBlock trainingProgramKidsLite d-none d-md-block animate__animated`}>
                            <span className={`text-right d-block ${itKidsStyle.time}`}>
                                48 академических часов
                            </span>
                            <h4 className="text-white">
                                #ЛАЙТ
                            </h4>
                            <ul className="m-0">
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Основы работы с компьютером
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Видеомонтаж / Переходы / Спец эффекты
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Обработка фотографий / Ретушь / Создание артов
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        3D моделирование / Анимация / Мультипликация
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Разработка сайтов / Верстка / Дизайн
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Разработка игр / Roblox
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Создание своего блога / Видеоблогинг
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Работа в сети / Безопасный интернет
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Создание презентаций / Оформление видеопрезентаций
                                    </p>
                                </li>
                            </ul>
                            <span className={`d-block ${itKidsStyle.price}`}>
                                6,500 руб/мес
                            </span>
                        </div>
                        <p className={`${itKidsStyle.text} font-italic trainingProgramKidsText text-center text-md-left animate__animated`}>
                            В группах по 10 -12 человек единомышленников и потенциальных друзей&nbsp;!)
                        </p>
                    </div>
                    <div className="col-md-11 col-lg-8">
                        <p className={`text-center mb-0 ${itKidsStyle.detail} trainingProgramKidsDetail animate__animated`}>
                            Лучшие ученики получат возможность продолжить обучение и поступить на наши профессиональные направления по ИТ специальностям без вступительных экзаменов.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrainingProgramITKids;