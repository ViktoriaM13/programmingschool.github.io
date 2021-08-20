import { NavLink } from 'react-router-dom';
import aiicon from '../../../img/ADOBE ILLUSTRATOR(5).svg'

const AI = () => {
    return(
        <div className="container cours">

            <div className="row d-flex align-items-center justify-content-between crs-mr">
                <div className="col align-items-center">
                    <h3 className="h1">ADOBE ILLUSTRATOR</h3>
                    <h3 className="lead">50 000р.</h3>
                </div>

                <div className="col img-right">
                    <img src={ aiicon } width="250" className="img-fluid" alt={ aiicon } />
                </div>
            </div>
            
            <h4>Что получают ученики нашего курса по ADOBE ILLUSTRATOR:</h4>

            <ul className="lead">
                <li key={Math.random()}>Уверенное владение инструментарием. Вы изучите с нуля: Adobe Illustrator</li>
                <li key={Math.random()}>Новые скилы и современные знания по: основам типографики, маркетинга, колористики, иконографике, прорисовке персонажа, типографической верстке и печати, айдентике и брендировании компании и многое другое</li>
                <li key={Math.random()}>Опыт и работы для портфолио. Опыт и работы для вашего портфолио, иконографика, ретушь и создание афиши, создание каталога, разработка и отрисовка персонажа, разработка фирменного стиля и брендбука, создание и анимация логотипа, создание презентации дипломного проекта по брендбуку компании</li>
            </ul>

            <h4>В программу курса входит:</h4>

            <ul className="lead">
                <li key={Math.random()}>Интерфейс программы</li>
                <li key={Math.random()}>Создание простых иллюстраций</li>
                <li key={Math.random()}>Колористика и цветовые гармонии</li>
                <li key={Math.random()}>Стилистика</li>
                <li key={Math.random()}>Психофизиология цвета в дизайне</li>
                <li key={Math.random()}>Инструменты по подбору цветовых схем</li>
                <li key={Math.random()}>Верстка текстовых блоков</li>
                <li key={Math.random()}>Практика по типографике</li>
                <li key={Math.random()}>Главные шаги для продажи продукта как организовать себя и построить свою работу</li>
                <li key={Math.random()}>И многое другое</li>
            </ul>

            <p className="lead">
                Занятия проходят в удобное для ученика и преподавателя время (пару раз в неделю по 2-3 часа). Расписание составляется при заключении договора. Вы обучаетесь в малокомплектной группе (до 5 человек), начать обучение можно любой момент, как только Вы будете готовы приступить к занятиям. По окончанию курса Вас ожидает выпускной экзамен, Сертификат который котируется у работодателей, а так же пожизненная тех поддержка от вашего преподавателя и помощь в трудоустройстве!
            </p>

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

export default AI;