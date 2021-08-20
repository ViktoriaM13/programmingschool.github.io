import { NavLink } from 'react-router-dom';
import ppicon from '../../../img/PREMIERE PRO(5).svg'

const AI = () => {
    return(
        <div className="container cours">

            <div className="row d-flex align-items-center justify-content-between crs-mr">
                <div className="col align-items-center">
                    <h3 className="h1">PREMIERE PRO</h3>
                    <h3 className="lead">50 000р.</h3>
                </div>

                <div className="col img-right">
                    <img src={ ppicon } width="250" className="img-fluid" alt={ ppicon } />
                </div>
            </div>
            
            <h4>В программу курса входит:</h4>

            <ul className="lead">
                <li key={Math.random()}>Знакомство с Adobe Premiere Pro</li>
                <li key={Math.random()}>Монтаж видео.</li>
                <li key={Math.random()}>Видеопереходы</li>
                <li key={Math.random()}>Анимирование кадра</li>
                <li key={Math.random()}>Стабилизация видео</li>
                <li key={Math.random()}>Сохранение и вывод видео в разных форматах</li>
                <li key={Math.random()}>"Walk by transition" Топовый переход для видео</li>
                <li key={Math.random()}>Работа с титрами</li>
                <li key={Math.random()}>Скорость видео. Slow moution.</li>
                <li key={Math.random()}>Видеоэффекты</li>
                <li key={Math.random()}>Работа с футажами</li>
                <li key={Math.random()}>Эффект "Видео внутри текста"</li>
                <li key={Math.random()}>Работа со звуком</li>
                <li key={Math.random()}>Разбор функции Auto-Ducking</li>
                <li key={Math.random()}>Фишки быстрого монтажа</li>
                <li key={Math.random()}>Переходы как в кино</li>
                <li key={Math.random()}>Цветокоррекция. Набор из 500 цветовых фильтров. Применение.</li>
                <li key={Math.random()}>Работа с зеленым фоном</li>
                <li key={Math.random()}>Эффект "Клонирование</li>
                <li key={Math.random()}>Эффект двойника</li>
                <li key={Math.random()}>Монтаж со смыслом. Логика в видео.</li>
                <li key={Math.random()}>Саунд-дизайн для видео</li>
                <li key={Math.random()}>Горячие клавиши в Premiere Pro</li>
                <li key={Math.random()}>Программа Pluraleyes. Синхронизация аудио и видео</li>
                <li key={Math.random()}>Набор топовых футажей</li>
                <li key={Math.random()}>Как зарабатывать 50 000р на видеомонтаже</li>
                <li key={Math.random()}>Характеристики для ПК/ноутбука</li>
                <li key={Math.random()}>Свет, объективы, движение, композиция, фишки</li>
                <li key={Math.random()}>Экзамен</li>
            </ul>
            
            <p className="lead">
                Мы обучаем с нуля. Научитесь монтировать видео любой сложности!
                Занятия проходят в удобное для ученика и преподавателя время (пару раз в неделю по 2-3 часа). Расписание составляется при заключении договора. Вы обучаетесь в малокомплектной группе (до 5 человек), начать обучение можно любой момент, как только Вы будете готовы приступить к занятиям. По окончанию курса Вас ожидает выпускной экзамен, Сертификат который котируется у работодателей, а так же пожизненная тех поддержка от вашего преподавателя и помощь в трудоустройстве!            
            </p>

            <p className="lead">
                Для расчета стоимости выберите вариант который Вам подходит: индивидуальные занятия 1500 руб / 1 ак час или групповые 1000 руб / 1 ак час - и умножьте стоимость на общее количество академических часов данного курса. Оплата возможна в 2 части.
            </p>
            
            <p className="lead">
                Курс рассчитан на 54 академических часов. Длительность 2 месяца (при посещении 3 занятия в неделю по 3 академических часа - график можно обсудить на собеседовании/тестировании в школе).
            </p>

            <p className="lead">
                online: занятия дистанционно<br />
                offline: занятия с посещением школы
            </p>

            <NavLink to="/Cours"><button className="btn btn-danger btn-lg">Назад</button></NavLink>

        </div>
    )
}

export default AI;