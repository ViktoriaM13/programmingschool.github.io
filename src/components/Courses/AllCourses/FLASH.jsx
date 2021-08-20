import { NavLink } from 'react-router-dom';
import flicon from '../../../img/Adobe Flash(4).svg'

const FLASH = () => {
    return(
        <div className="container cours">

            <div className="row d-flex align-items-center justify-content-between crs-mr">
                <div className="col align-items-center">
                    <h3 className="h1">FLASH</h3>
                    <h3 className="lead">50 000р.</h3>
                </div>

                <div className="col img-right">
                    <img src={ flicon } width="250" className="img-fluid" alt={ flicon } />
                </div>
            </div>
            
            <p className="lead">
                Adobe Flash - мультимедийная платформа, используемая для создания векторной анимации и интерактивных приложений (в том числе, игр), а также для интеграции видеороликов в web-страницы. Adobe Flash позволяет работать с векторной, растровой и ограниченно с трёхмерной графикой.
            </p>

            <p className="lead">
                Самое широкое применение flash-анимация находит в web-дизайне и web-программировании. Баннеры и анимация, созданные при помощи flash-технологии, добавляют любому, даже очень строгому сайту элемент интерактивности и притягательности.
            </p>

            <h4>В программу курса входит:</h4>

            <ul className="lead">
                <li key={Math.random()}>Базовые понятия Flash-анимации</li>
                <li key={Math.random()}>Морфинг</li>
                <li key={Math.random()}>Сцена Scene</li>
                <li key={Math.random()}>Timeline (Временная шкала)</li>
                <li key={Math.random()}>Frame (Кадр), Key Frame (Ключевой кадр) и др.</li>
                <li key={Math.random()}>Создание и настройка параметров документа. Рисование. Растро-вые заливки и типы линий. Сохранение и экспорт файлов</li>
                <li key={Math.random()}>Анимация</li>
                <li key={Math.random()}>Покадровая Frame-by-frame (рисуется каждый кадр)</li>
                <li key={Math.random()}>Анимация движения Classic Tween</li>
                <li key={Math.random()}>Анимация формы Shape Tween</li>
                <li key={Math.random()}>Анимация движения по пути</li>
                <li key={Math.random()}>Использование градиентной заливки</li>
                <li key={Math.random()}>Работа с текстом</li>
                <li key={Math.random()}>Статический текст (Static Text)</li>
                <li key={Math.random()}>Динамический текст (Dynamic Text)</li>
                <li key={Math.random()}>Вращающийся текст</li>
                <li key={Math.random()}>Создание кнопки во Flash</li>
                <li key={Math.random()}>Понятие о библиотеке, символах и экземплярах</li>
                <li key={Math.random()}>Работа со слоями</li>
                <li key={Math.random()}>Простые слои</li>
                <li key={Math.random()}>Слои-маски (Анимация маски, Текстовая маска)</li>
                <li key={Math.random()}>Работа с ActionScript.</li>
                <li key={Math.random()}>Цифровые часы</li>
                <li key={Math.random()}>Аналоговые часы</li>
                <li key={Math.random()}>ActionScript3.0. Простая фотогаллерея</li>
                <li key={Math.random()}>ActionScript 3.0. Меню с выпадающими картинками</li>
                <li key={Math.random()}>Создание рекламного баннера</li>
                <li key={Math.random()}>Работа со звуком в Adobe Flash CS5</li>
            </ul>

            <p className="lead">
                Занятия проходят в удобное для ученика и преподавателя время (пару раз в неделю по 2-3 часа). Расписание составляется при заключении договора. Вы обучаетесь в малокомплектной группе (до 5 человек), начать обучение можно любой момент, как только Вы будете готовы приступить к занятиям. По окончанию курса Вас ожидает выпускной экзамен, Сертификат который котируется у работодателей, а так же пожизненная тех поддержка от вашего преподавателя и помощь в трудоустройстве!
            </p>

            <p className="lead">
                Для расчета стоимости выберите вариант который Вам подходит: индивидуальные занятия 1500 руб / 1 ак час или групповые 1000 руб / 1 ак час - и умножьте стоимость на общее количество академических часов данного курса. Оплата возможна в 2 части.
            </p>

            <p className="lead">
                Курс рассчитан на 32 академических часов. Длительность 1,5 месяца (при посещении 3 занятия в неделю по 3 академических часа - график можно обсудить на собеседовании/тестировании в школе).
            </p>

            <p className="lead">
                online: занятия дистанционно<br />
                offline: занятия с посещением школы
            </p>

            <NavLink to="/Cours"><button className="btn btn-danger btn-lg">Назад</button></NavLink>

        </div>
    )
}

export default FLASH;