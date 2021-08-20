import { NavLink } from 'react-router-dom';
import mbicon from '../../../img/Разработка мобильных приложений(4).svg'

const MB = () => {
    return(
        <div className="container cours">

            <div className="row d-flex align-items-center justify-content-between crs-mr">
                <div className="col align-items-center">
                    <h3 className="h1">РАЗРАБОТКА МОБИЛЬНЫХ ПРИЛОЖЕНИЙ ANDROID</h3>
                    <h3 className="lead">50 000р.</h3>
                </div>

                <div className="col img-right">
                    <img src={ mbicon } width="250" className="img-fluid" alt={ mbicon } />
                </div>
            </div>
            
            <p className="lead">
                Мобильные технологии — часть современного мира, притом — необходимая часть. Они нужны для повышения продуктивности труда, управления финансами, навигации, общения и развлечения. Мобильные приложения для бизнеса и досуга разрабатываются под разные платформы: iOS, Android, Windows Phone и другие.
            </p>

            <p className="lead">
                В настоящее время наличие мобильных приложений становится таким же маркетинговым бизнес-стандартом, как наличие сайта. А значит — растет спрос на квалифицированных профессионалов в области разработки подобных приложений.
            </p>

            <p className="lead">
                После прохождения курса слушатели смогут создавать приложения для операционной системы Android; управлять навигацией между различными активностями приложения; использовать фрагменты и т.д.
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

export default MB;