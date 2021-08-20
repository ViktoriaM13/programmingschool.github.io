import { NavLink } from 'react-router-dom';
import swifticon from '../../../img/SWIFT(3).svg'

const Swift = () => {
    return(
        <div className="container cours">

            <div className="row d-flex align-items-center justify-content-between crs-mr">
                <div className="col align-items-center">
                    <h3 className="h1">SWIFT</h3>
                    <h3 className="lead">50 000р.</h3>
                </div>

                <div className="col img-right">
                    <img src={ swifticon } width="250" className="img-fluid" alt={ swifticon } />
                </div>
            </div>

            <p className="lead">
                Это практический курс для тех, кто хочет научиться основам программирования на Swift с индивидуальным наставником, написать код для реальных проектов и получить первые заказы. Вы пройдете по шагам весь процесс разработки iOS-приложения: идея — разработка — публикация. Курс подойдет студентам с нулевым опытом. По окончанию обучения выпускник получает Сертификат, реальные проекты как элементы портфолио (в процессе обучения они разрабатываются учеником), тех поддержку своего наставника пожизненно и помощь в трудоустройстве!
            </p>

            <p className="lead">
                Разработка приложений в рамках, заданных Apple, вполне доступна новичку и не сильно ограничивает возможности.
            </p>

            <h4>Программа:</h4>

            <ul className="lead">
                <li key={Math.random()}>Введение</li>
                <li key={Math.random()}>Основы</li>
                <li key={Math.random()}>Базовые операторы</li>
                <li key={Math.random()}>Управление ходом исполнения</li>
                <li key={Math.random()}>Коллекции</li>
                <li key={Math.random()}>Циклы, строки и символы</li>
                <li key={Math.random()}>Условный код 2 - Инструкция switch</li>
                <li key={Math.random()}>Функции</li>
                <li key={Math.random()}>Замыкания</li>
                <li key={Math.random()}>Перечисления</li>
                <li key={Math.random()}>Классы и структуры</li>
                <li key={Math.random()}>Классы и структуры 2</li>
                <li key={Math.random()}>Инициализация</li>
                <li key={Math.random()}>ARC</li>
                <li key={Math.random()}>Опциональная цепочка и обработки ошибок</li>
                <li key={Math.random()}>Приведение типов, вложенные типы и расширения</li>
                <li key={Math.random()}>Протоколы</li>
                <li key={Math.random()}>Дженерики или шаблоны</li>
                <li key={Math.random()}>Продвинутые операторы и арифметика</li>
            </ul>

            <p className="lead">
               Для расчета стоимости выберите вариант который Вам подходит: индивидуальные занятия 1500 руб / 1 ак час или групповые 1000 руб / 1 ак час - и умножьте стоимость на общее количество академических часов данного курса. Оплата возможна в 2 части.
            </p>

            <p className="lead">
                Курс рассчитан на 36 академических часов. Длительность 1,5 месяца (при посещении 3 занятия в неделю по 3 академических часа - график можно обсудить на собеседовании/тестировании в школе).   
            </p>

            <p className="lead">
                online: занятия дистанционно<br />
                offline: занятия с посещением школы
            </p>

            <NavLink to="/Cours"><button className="btn btn-danger btn-lg">Назад</button></NavLink>

        </div>
    )
}

export default Swift;