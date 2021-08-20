import { NavLink } from 'react-router-dom';
import htmlicon from '../../../img/HTML(2).svg'

const HTML = () => {
    return(
        <div className="container cours">

            <div className="row d-flex align-items-center justify-content-between crs-mr">
                <div className="col align-items-center">
                    <h3 className="h1">HTML</h3>
                    <h3 className="lead">50 000р.</h3>
                </div>

                <div className="col img-right">
                    <img src={ htmlicon } width="250" className="img-fluid" alt={ htmlicon } />
                </div>
            </div>

            <p className="lead">
                Научитесь вносить правки в HTML-код страницы и верстать текстовые блоки. Любой сайт состоит из веб-страниц, а любая страница представляет собой HTML-разметку данных, которые на ней представлены. Данные всегда имеют определенную структуру: заголовки, списки, иллюстрации. Мы научим описывать эту структуру, используя HTML-теги. Обучение проходит online или offline, график занятий максимально удобный (обговаривается напрямую с преподавателем). Преподаватель это действующий web разработчик с педагогическим талантом.
            </p>

            <h4>Программа:</h4>

            <ul className="lead">
                <li key={Math.random()}>Введение</li>
                <li key={Math.random()}>Первая веб-страница</li>
                <li key={Math.random()}>Структура документа</li>
                <li key={Math.random()}>Голова документа</li>
                <li key={Math.random()}>Полезные расширения редактора</li>
                <li key={Math.random()}>Разметка текста</li>
                <li key={Math.random()}>Правила написания кода</li>
                <li key={Math.random()}>Списки</li>
                <li key={Math.random()}>Потомки и родители</li>
                <li key={Math.random()}>Форматирование кода</li>
                <li key={Math.random()}>Атрибуты</li>
                <li key={Math.random()}>Абсолютные и относительные пути</li>
                <li key={Math.random()}>Ссылки</li>
                <li key={Math.random()}>Id и class</li>
                <li key={Math.random()}>Якорь</li>
                <li key={Math.random()}>Формы. Основные элементы</li>
                <li key={Math.random()}>Формы. Специфические элементы</li>
                <li key={Math.random()}>Отправка формы на сервер</li>
                <li key={Math.random()}>Валидация</li>
                <li key={Math.random()}>Теги таблиц</li>
                <li key={Math.random()}>Панель</li>
            </ul>

            <p className="lead">
                По окончанию выпускник получает Сертификат, знания, практические навыки и умения, пожизненную тех поддержку в лице своего наставника и помощь в трудоустройстве!
            </p>

            <p className="lead">
                Для расчета стоимости выберите вариант который Вам подходит: индивидуальные занятия 1500 руб / 1 ак час или групповые 1000 руб / 1 ак час - и умножьте стоимость на общее количество академических часов данного курса. Оплата возможна в 2 части.
            </p>

            <p className="lead">
                Курс рассчитан на 30 академических часов. Длительность 1,5 месяца (при посещении 3 занятия в неделю по 3 академических часа - график можно обсудить на собеседовании/тестировании в школе). 
            </p>

            <p className="lead">
                online: занятия дистанционно<br />
                offline: занятия с посещением школы
            </p>

            <NavLink to="/Cours"><button className="btn btn-danger btn-lg">Назад</button></NavLink>

        </div>
    )
}

export default HTML;