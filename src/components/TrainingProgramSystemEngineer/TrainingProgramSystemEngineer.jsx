import React from 'react';
import $ from "jquery";
import trainingProgramEngineer from './TrainingProgramSystemEngineer.module.css';

const TrainingProgramSystemEngineer = () => {
    $(function() {
        $(window).on("scroll resize", function() {
            $('.trainingProgramEngineerOffer, .trainingProgramEngineerModTwo, .trainingProgramEngineerModFour, .trainingProgramEngineerText').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInLeft");
                }
            });
            $('.trainingProgramEngineerModOne, .trainingProgramEngineerModThree, .trainingProgramEngineerModFive').each(function(){
                let imagePos = $(this).offset().top;
        
                let topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+650) {
                    $(this).addClass("animate__fadeInRight");
                }
            });
        });
    })
    return (
        <section className={`trainingProgramEngineer ${trainingProgramEngineer.trainingProgramEngineer}`} id="trainingProgramEngineer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className={`${trainingProgramEngineer.offer} trainingProgramEngineerOffer animate__animated`}>
                            <h2 className="text-uppercase mb-0d">
                                Чему вы научитесь
                            </h2>
                            <p>
                                Администрировать операционные системы Windows Linux, заниматься информационной безопасностью и многое другое
                            </p>
                        </div>
                        <div className={`${trainingProgramEngineer.block} trainingProgramBlock ${trainingProgramEngineer.moduleOne} trainingProgramEngineerModOne animate__animated d-block d-md-none`}>
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
                        <div className={`${trainingProgramEngineer.block} trainingProgramBlock ${trainingProgramEngineer.moduleTwo} trainingProgramEngineerModTwo animate__animated`}>
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
                        <div className={`${trainingProgramEngineer.block} trainingProgramBlock ${trainingProgramEngineer.moduleThree} trainingProgramEngineerModThree animate__animated d-block d-md-none`}>
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
                        <div className={`${trainingProgramEngineer.block} trainingProgramBlock ${trainingProgramEngineer.moduleFour} trainingProgramEngineerModFour animate__animated`}>
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
                        <div className={`${trainingProgramEngineer.block} trainingProgramBlock ${trainingProgramEngineer.moduleFive} trainingProgramEngineerModFive animate__animated d-block d-md-none`}>
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
                        <p className={`${trainingProgramEngineer.text} font-italic trainingProgramEngineerText animate__animated`}>
                            Занятия проходят 1 раз в неделю 4 ак.часа, в месяц 16 уроков. Полный срок обучения составляет 5 лет.
                        </p>
                    </div>
                    <div className="col-md-6 d-none d-md-block">
                        <div className={`${trainingProgramEngineer.block} trainingProgramBlock ${trainingProgramEngineer.moduleOne} trainingProgramEngineerModOne animate__animated`}>
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
                        <div className={`${trainingProgramEngineer.block} trainingProgramBlock ${trainingProgramEngineer.moduleThree} trainingProgramEngineerModThree animate__animated`}>
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
                        <div className={`${trainingProgramEngineer.block} trainingProgramBlock ${trainingProgramEngineer.moduleFive} trainingProgramEngineerModFive animate__animated`}>
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
                </div>
            </div>
        </section>
    )
}

export default TrainingProgramSystemEngineer;