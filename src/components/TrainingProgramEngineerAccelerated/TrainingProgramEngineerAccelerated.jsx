import React from 'react';
import $ from "jquery";
import trainingProgramEngineerAcceleratedStyle from './TrainingProgramEngineerAccelerated.module.css';

const TrainingProgramEngineerAccelerated = () => {
    $(function() {
        $(window).on("scroll resize", function() {
            $('.trainingProgramEngineerAcceleratedOffer, .trainingProgramEngineerAcceleratedModTwo, .trainingProgramEngineerAcceleratedModFour, .trainingProgramEngineerAcceleratedText, .trainingProgramEngineerAcceleratedDetail').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInLeft");
                }
            });
                $('.trainingProgramEngineerAcceleratedModOne, .trainingProgramEngineerModAcceleratedThree, .trainingProgramEngineerModAcceleratedFive').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInRight");
                }
            });
        });
    })
    return (
        <section className={`trainingProgramEngineerAccelerated ${trainingProgramEngineerAcceleratedStyle.trainingProgramEngineerAccelerated}`} id="trainingProgramEngineerAccelerated">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className={`${trainingProgramEngineerAcceleratedStyle.offer} trainingProgramEngineerAcceleratedOffer animate__animated`}>
                            <h2 className="text-uppercase mb-0d">
                                Чему вы научитесь
                            </h2>
                            <p>
                                Администрировать операционные системы Windows Linux, заниматься информационной безопасностью и многое другое
                            </p>
                        </div>
                        <div className={`${trainingProgramEngineerAcceleratedStyle.block} trainingProgramBlock ${trainingProgramEngineerAcceleratedStyle.moduleOne} trainingProgramEngineerAcceleratedModOne animate__animated d-block d-md-none`}>
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
                        <div className={`${trainingProgramEngineerAcceleratedStyle.block} trainingProgramBlock ${trainingProgramEngineerAcceleratedStyle.moduleTwo} trainingProgramEngineerAcceleratedModTwo animate__animated`}>
                            <h3 className="text-white">
                                Модуль # 2
                            </h3>
                            <ul className="m-0">
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Аппаратное обеспечение
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Служба удаленного доступа
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Администрирование баз данных
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        SQL
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Локальные вычислительные сети
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Сети и телекоммуникационное оборудование
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
                        <div className={`${trainingProgramEngineerAcceleratedStyle.block} trainingProgramBlock ${trainingProgramEngineerAcceleratedStyle.moduleThree} trainingProgramEngineerModAcceleratedThree animate__animated d-block d-md-none`}>
                            <h3 className="text-white">
                                Модуль # 3
                            </h3>
                            <ul className="m-0">
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Администрирование WinServer
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Система управления базами данных MSAccess⠀
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Администрирование Linux (Ubuntu)
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        PowerShell
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Резервное копирование / восстановление данных
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
                        <div className={`${trainingProgramEngineerAcceleratedStyle.block} trainingProgramBlock ${trainingProgramEngineerAcceleratedStyle.moduleFour} trainingProgramEngineerAcceleratedModFour animate__animated`}>
                            <h3 className="text-white">
                                Модуль # 4
                            </h3>
                            <ul className="m-0">
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Методики расследования хакерских инцидентов
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Информационная безопасность
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
                        <div className={`${trainingProgramEngineerAcceleratedStyle.block} trainingProgramBlock ${trainingProgramEngineerAcceleratedStyle.moduleFive} trainingProgramEngineerModAcceleratedFive animate__animated d-block d-md-none`}>
                            <h3 className="text-white">
                                Модуль # 5
                            </h3>
                            <ul className="m-0">
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Администрирование 1С
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Тестирование ПО / Тестировщик
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Работа С Web серверами / сервисами
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Microtik / Cisco
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        API телефония / АТС
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
                        <p className={`${trainingProgramEngineerAcceleratedStyle.text} font-italic trainingProgramEngineerAcceleratedText animate__animated`}>
                            Занятия проходят 3 раза в неделю 4 ак.часа. Полный срок обучения составляет 2 года.
                        </p>
                    </div>
                    <div className="col-md-6 d-none d-md-block">
                        <div className={`${trainingProgramEngineerAcceleratedStyle.block} trainingProgramBlock ${trainingProgramEngineerAcceleratedStyle.moduleOne} trainingProgramEngineerAcceleratedModOne animate__animated`}>
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
                        <div className={`${trainingProgramEngineerAcceleratedStyle.block} trainingProgramBlock ${trainingProgramEngineerAcceleratedStyle.moduleThree} trainingProgramEngineerModAcceleratedThree animate__animated`}>
                            <h3 className="text-white">
                                Модуль # 3
                            </h3>
                            <ul className="m-0">
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Администрирование WinServer
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Система управления базами данных MSAccess⠀
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Администрирование Linux (Ubuntu)
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        PowerShell
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Резервное копирование / восстановление данных
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
                        <div className={`${trainingProgramEngineerAcceleratedStyle.block} trainingProgramBlock ${trainingProgramEngineerAcceleratedStyle.moduleFive} trainingProgramEngineerModAcceleratedFive animate__animated`}>
                            <h3 className="text-white">
                                Модуль # 5
                            </h3>
                            <ul className="m-0">
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Администрирование 1С
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Тестирование ПО / Тестировщик
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Работа С Web серверами / сервисами
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        Microtik / Cisco
                                    </p>
                                </li>
                                <li className="d-flex">
                                    <span>&bull;</span>
                                    <p>
                                        API телефония / АТС
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
                        <p className={`text-center ${trainingProgramEngineerAcceleratedStyle.detail} trainingProgramEngineerAcceleratedDetail mb-0 animate__animated`}>
                            Занятия начинаются с 5 сентября по расписанию. <br/>Вы так же можете выбрать смену: первую (с 10:00) или вторую (с 18:00).
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TrainingProgramEngineerAccelerated;