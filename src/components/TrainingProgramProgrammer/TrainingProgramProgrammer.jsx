import React from 'react';
import $ from "jquery";
import trainingProgramProgrammer from './TrainingProgramProgrammer.module.css';

const TrainingProgramProgrammer = () => {
    $(function() {
        $(window).on("scroll resize", function() {
            $('.trainingProgramProgrammerOffer, .trainingProgramProgrammerModTwo, .trainingProgramProgrammerModFour, .trainingProgramProgrammerText').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInLeft");
                }
            });
            $('.trainingProgramProgrammerModOne, .trainingProgramProgrammerModThree, .trainingProgramProgrammerModFive').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInRight");
                }
            });
        });
    })
    return (
        <section className={`trainingProgramProgrammer ${trainingProgramProgrammer.trainingProgramProgrammer}`} id="trainingProgramProgrammer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className={`${trainingProgramProgrammer.offer} trainingProgramProgrammerOffer animate__animated`}>
                            <h2 className="text-uppercase mb-0d">
                                Чему вы научитесь
                            </h2>
                            <p>
                                В учебной программе более 10 языков программирования
                            </p>
                        </div>
                        <div className={`${trainingProgramProgrammer.block} trainingProgramBlock ${trainingProgramProgrammer.moduleOne} trainingProgramProgrammerModOne animate__animated d-block d-md-none`}>
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
                        <div className={`${trainingProgramProgrammer.block} trainingProgramBlock ${trainingProgramProgrammer.moduleTwo} trainingProgramProgrammerModTwo animate__animated`}>
                            <h3 className="text-white">
                                Модуль # 2
                            </h3>
                            <ul className="m-0">
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Углубление в программировании на python
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Программирование на Visual Basic
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Программирование на C++
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Unreal Engine (part1)
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
                        <div className={`${trainingProgramProgrammer.block} trainingProgramBlock ${trainingProgramProgrammer.moduleThree} trainingProgramProgrammerModThree animate__animated d-block d-md-none`}>
                            <h3 className="text-white">
                                Модуль # 3
                            </h3>
                            <ul className="m-0">
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Unreal Engine (part2)
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Github
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Работа с сервером SQL + Firebase
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Программирование на С#
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Разработка игр на unity 3D
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
                        <div className={`${trainingProgramProgrammer.block} trainingProgramBlock ${trainingProgramProgrammer.moduleFour} trainingProgramProgrammerModFour animate__animated`}>
                            <h3 className="text-white">
                                Модуль # 4
                            </h3>
                            <ul className="m-0">
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Java
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Разработка мобильных приложений
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
                        <div className={`${trainingProgramProgrammer.block} trainingProgramBlock ${trainingProgramProgrammer.moduleFive} trainingProgramProgrammerModFive animate__animated d-block d-md-none`}>
                            <h3 className="text-white">
                                Модуль # 5
                            </h3>
                            <ul className="m-0">
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Тестирование программного обеспечения / тестировщик ПО
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        1С конфигуратор
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Машинное обучение
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
                                        Дипломный проект
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <p className={`${trainingProgramProgrammer.text} font-italic trainingProgramProgrammerText animate__animated`}>
                            Занятия проходят 1 раз в неделю 4 ак.часа, в месяц 16 уроков. Полный срок обучения составляет 5 лет.
                        </p>
                    </div>
                    <div className="col-md-6 d-none d-md-block">
                        <div className={`${trainingProgramProgrammer.block} trainingProgramBlock ${trainingProgramProgrammer.moduleOne} trainingProgramProgrammerModOne animate__animated`}>
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
                        <div className={`${trainingProgramProgrammer.block} trainingProgramBlock ${trainingProgramProgrammer.moduleThree} trainingProgramProgrammerModThree animate__animated`}>
                            <h3 className="text-white">
                                Модуль # 3
                            </h3>
                            <ul className="m-0">
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Unreal Engine (part2)
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Github
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Работа с сервером SQL + Firebase
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Программирование на С#
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Разработка игр на unity 3D
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
                        <div className={`${trainingProgramProgrammer.block} trainingProgramBlock ${trainingProgramProgrammer.moduleFive} trainingProgramProgrammerModFive animate__animated`}>
                            <h3 className="text-white">
                                Модуль # 5
                            </h3>
                            <ul className="m-0">
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Тестирование программного обеспечения / тестировщик ПО
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        1С конфигуратор
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Машинное обучение
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
                                        Дипломный проект
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrainingProgramProgrammer;