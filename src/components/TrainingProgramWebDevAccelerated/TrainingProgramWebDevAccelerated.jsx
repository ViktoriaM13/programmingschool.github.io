import React from 'react';
import $ from "jquery";
import trainingProgramWebDevAcceleratedStyle from './TrainingProgramWebDevAccelerated.module.css';

const TrainingProgramWebDevAccelerated = () => {
    $(function() {
        $(window).on("scroll resize", function() {
            $('.trainingProgramWebAcceleratedOffer, .trainingProgramWebAcceleratedModTwo, .trainingProgramWebAcceleratedModFour, .trainingProgramWebAcceleratedText, .trainingProgramWebDevAcceleratedDetail').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInLeft");
                }
            });
                $('.trainingProgramWebAcceleratedModOne, .trainingProgramWebModAcceleratedThree, .trainingProgramWebModAcceleratedFive').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInRight");
                }
            });
        });
    })
    return (
        <section className={`trainingProgramWebAccelerated ${trainingProgramWebDevAcceleratedStyle.trainingProgramWebAccelerated}`} id="trainingProgramWebAccelerated">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className={`${trainingProgramWebDevAcceleratedStyle.offer} trainingProgramWebAcceleratedOffer animate__animated`}>
                            <h2 className="text-uppercase mb-0d">
                                Чему вы научитесь
                            </h2>
                            <p>
                                На этом учебном направлении мы готовим frontend и backend разработчиков
                            </p>
                        </div>
                        <div className={`${trainingProgramWebDevAcceleratedStyle.block} trainingProgramBlock ${trainingProgramWebDevAcceleratedStyle.moduleOne} trainingProgramWebAcceleratedModOne animate__animated d-block d-md-none`}>
                            <h3 className="text-white">
                                Модуль # 1
                            </h3>
                            <ul className="m-0">
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Пользовательский курс
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Сети. Интернет
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Текстовый редактор
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Табличный редактор
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Основа верстки. HTML
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Создание презентаций
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Основы работы с компьютером
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Основы программирования. Python
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Растровая графика. Adobe Photoshop
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Настройка и администрирование операционной системы Windows
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Проф. ориентация
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Бизнес - кейс
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Защита курсового проекта
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Экзамен
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className={`${trainingProgramWebDevAcceleratedStyle.block} trainingProgramBlock ${trainingProgramWebDevAcceleratedStyle.moduleTwo} trainingProgramWebAcceleratedModTwo animate__animated`}>
                            <h3 className="text-white">
                                Модуль # 2
                            </h3>
                            <ul className="m-0">
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Github
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        CSS
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Bootstrap фреймворк
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Разработка Ux/Ui дизайна
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Adobe Illustrator (xd)
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Java script
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Курсовой проект
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className={`${trainingProgramWebDevAcceleratedStyle.block} trainingProgramBlock ${trainingProgramWebDevAcceleratedStyle.moduleThree} trainingProgramWebModAcceleratedThree animate__animated d-block d-md-none`}>
                            <h3 className="text-white">
                                Модуль # 3
                            </h3>
                            <ul className="m-0">
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Jquery
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Ajax
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        React + Nodejs
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        PHP
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Работа с сервером mysql
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Seo оптимизация
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Бизнес кейс
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Курсовой проект
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className={`${trainingProgramWebDevAcceleratedStyle.block} trainingProgramBlock ${trainingProgramWebDevAcceleratedStyle.moduleFour} trainingProgramWebAcceleratedModFour animate__animated`}>
                            <h3 className="text-white">
                                Модуль # 4
                            </h3>
                            <ul className="m-0">
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Конструкторы для разработки сайтов
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Django фреймворк
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Angular фреймворк
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Wordpress
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        CMS Joomla
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Разработка сайта на 1C битрикс
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Разработка сайта на Drupal
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Бизнес кейс
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Защита курсового проекта
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className={`${trainingProgramWebDevAcceleratedStyle.block} trainingProgramBlock ${trainingProgramWebDevAcceleratedStyle.moduleFive} trainingProgramWebModAcceleratedFive animate__animated d-block d-md-none`}>
                            <h3 className="text-white">
                                Модуль # 5
                            </h3>
                            <ul className="m-0">
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Vuejs
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Rest API + Json 1
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Тестирование ПО / тестировщик ПО
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Интернет маркетинг
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Стратегия профессионального роста
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Бизнес кейс
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Защита дипломного проекта
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <p className={`${trainingProgramWebDevAcceleratedStyle.text} font-italic trainingProgramWebAcceleratedText animate__animated`}>
                            Занятия проходят 3 раза в неделю 4 ак.часа. Полный срок обучения составляет 2 года.
                        </p>
                    </div>
                    <div className="col-md-6 d-none d-md-block">
                        <div className={`${trainingProgramWebDevAcceleratedStyle.block} trainingProgramBlock ${trainingProgramWebDevAcceleratedStyle.moduleOne} trainingProgramWebAcceleratedModOne animate__animated`}>
                            <h3 className="text-white">
                                Модуль # 1
                            </h3>
                            <ul className="m-0">
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Пользовательский курс
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Сети. Интернет
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Текстовый редактор
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Табличный редактор
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Основа верстки. HTML
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Создание презентаций
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Основы работы с компьютером
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Основы программирования. Python
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Растровая графика. Adobe Photoshop
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Настройка и администрирование операционной системы Windows
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Проф. ориентация
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Бизнес - кейс
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Защита курсового проекта
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Экзамен
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className={`${trainingProgramWebDevAcceleratedStyle.block} trainingProgramBlock ${trainingProgramWebDevAcceleratedStyle.moduleThree} trainingProgramWebModAcceleratedThree animate__animated`}>
                            <h3 className="text-white">
                                Модуль # 3
                            </h3>
                            <ul className="m-0">
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Jquery
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Ajax
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        React + Nodejs
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        PHP
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Работа с сервером mysql
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Seo оптимизация
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Бизнес кейс
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Курсовой проект
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className={`${trainingProgramWebDevAcceleratedStyle.block} trainingProgramBlock ${trainingProgramWebDevAcceleratedStyle.moduleFive} trainingProgramWebModAcceleratedFive animate__animated`}>
                            <h3 className="text-white">
                                Модуль # 5
                            </h3>
                            <ul className="m-0">
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Vuejs
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Rest API + Json 1
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Тестирование ПО / тестировщик ПО
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Интернет маркетинг
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Стратегия профессионального роста
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Бизнес кейс
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Защита дипломного проекта
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <p className={`text-center ${trainingProgramWebDevAcceleratedStyle.detail} trainingProgramWebDevAcceleratedDetail mb-0 animate__animated`}>
                            Занятия начинаются с 5 сентября по расписанию. <br/>Вы так же можете выбрать смену: первую (с 10:00) или вторую (с 18:00).
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrainingProgramWebDevAccelerated;