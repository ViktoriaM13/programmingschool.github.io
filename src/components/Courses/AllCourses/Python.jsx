import { NavLink } from 'react-router-dom';
import pythonicon from '../../../img/Python(2).svg'

const Python = () => {
    return(
        <div className="container cours">

            <div className="row d-flex align-items-center justify-content-between crs-mr">
                <div className="col align-items-center">
                    <h3 className="h1">Python</h3>
                    <h3 className="lead">50 000р.</h3>
                </div>

                <div className="col img-right">
                    <img src={ pythonicon } width="250" className="img-fluid" alt={ pythonicon } />
                </div>
            </div>

            <p className="lead">
                Научитесь с нуля программировать на Python. Вас ждут интенсивные занятий с практикующими разработчиками. 40 часов практики и 10 часов теоретического материала. Портфолио, контакты в IT-сообществе, новая профессия все это будет у Вас по окончанию обучения. Мы так же моем помочь составить резюме и помочь с трудоустройством.
            </p>

            <p className="lead">
                Python — один из самых распространенных языков программирования. Отличается простым и понятным синтаксисом. Это язык, с которого стоит начинать осваивать профессию программиста.
            </p>

            <h4>Программа:</h4>

            <ul className="lead">
                <li key={Math.random()}>Настройка окружения</li>
                <li key={Math.random()}>Базовые структуры данных</li>
                <li key={Math.random()}>Основные операторы</li>
                <li key={Math.random()}>Функции подробнее</li>
                <li key={Math.random()}>Модули и пакеты</li>
                <li key={Math.random()}>Пространства имён и области видимости</li>
                <li key={Math.random()}>Классы и объекты</li>
                <li key={Math.random()}>Наследование классов</li>
                <li key={Math.random()}>Работа с файлами и форматированный вывод</li>
                <li key={Math.random()}>Исключения</li>
                <li key={Math.random()}>Инструменты функционального программирования</li>
                <li key={Math.random()}>Мультипоточность</li>
                <li key={Math.random()}>Стандартные и сторонние библиотеки Python</li>
                <li key={Math.random()}>Поддержание цикла разработки</li>
                <li key={Math.random()}>Библиотеки для работы с данными</li>
                <li key={Math.random()}>Библиотеки для работы с ресурсами</li>
            </ul>

            <p className="lead">
               После курса вы сможете устроиться в компанию, где создают интерактивные веб-сервисы на Python или рассмотреть вакансии для python-разработчика на hh.ru или jobsora
            </p>

            <p className="lead">
               Для расчета стоимости выберите вариант который Вам подходит: индивидуальные занятия 1500 руб / 1 ак час или групповые 1000 руб / 1 ак час - и умножьте стоимость на общее количество академических часов данного курса. Оплата возможна в 2 части.
            </p>

            <p className="lead">
                Курс рассчитан на 50 академических часов. Длительность 1,5-2 месяца (при посещении 3 занятия в неделю по 3 академических часа - график можно обсудить на собеседовании/тестировании в школе).
            </p>

            <p className="lead">
                online: занятия дистанционно<br />
                offline: занятия с посещением школы
            </p>

            <NavLink to="/Cours"><button className="btn btn-danger btn-lg">Назад</button></NavLink>

        </div>
    )
}

export default Python;