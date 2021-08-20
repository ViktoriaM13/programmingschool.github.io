import { NavLink } from 'react-router-dom';
import psicon from '../../../img/PHOTOSHOP(1).svg'

const PS = () => {
    return(
        <div className="container cours">

            <div className="row d-flex align-items-center justify-content-between crs-mr">
                <div className="col align-items-center">
                    <h3 className="h1">PHOTOSHOP</h3>
                    <h3 className="lead">50 000р.</h3>
                </div>

                <div className="col img-right">
                    <img src={ psicon } width="250" className="img-fluid" alt={ psicon } />
                </div>
            </div>

            <p className="lead">
                Обучение на курсах Photoshop позволит создавать и обрабатывать в графическом редакторе цифровые изображения, постеры, эмблемы, логотипы, работать с отсканированными изображениями и многое другое.            
            </p>

            <p className="lead">
                Начнем обучение с изучения приемов изменения цифровых изображений, реставрации старых снимков, видоизменения уже готовых фотографий. Эти навыки необходимы для создания в дальнейшем собственных изображений.
            </p>

            <h4>В программе курса:</h4>

            <ul className="lead">
                <li key={Math.random()}>Введение. Основы компьютерной графики</li>
                <li key={Math.random()}>Выделение определенных частей изображения</li>
                <li key={Math.random()}>Слои. Работа со слоями, создание многослойного изображения</li>
                <li key={Math.random()}>Многослойное изображение, его редактирование</li>
                <li key={Math.random()}>Использование основной панели инструментов, рисование</li>
                <li key={Math.random()}>Ретуширование с использованием различных плагинов</li>
                <li key={Math.random()}>Сложное соединение фрагментов изображения</li>
                <li key={Math.random()}>Сканирование, обработка и изменение изображения</li>
                <li key={Math.random()}>И многое другое</li>
            </ul>

            <p className="lead">
                Занятия проходят в удобное для ученика и преподавателя время (пару раз в неделю по 2-3 часа). Расписание составляется при заключении договора. Вы обучаетесь в малокомплектной группе (до 5 человек), начать обучение можно любой момент, как только Вы будете готовы приступить к занятиям. По окончанию курса Вас ожидает выпускной экзамен, Сертификат который котируется у работодателей, а так же пожизненная тех поддержка от вашего преподавателя и помощь в трудоустройстве!
            </p>

            <p className="lead">
                Для расчета стоимости выберите вариант который Вам подходит: индивидуальные занятия 1500 руб / 1 ак час или групповые 1000 руб / 1 ак час - и умножьте стоимость на общее количество академических часов данного курса. Оплата возможна в 2 части.
            </p>

            <p className="lead">
                Курс рассчитан на 30 академических часов. Длительность 1,5 месяц (при посещении 3 занятия в неделю по 3 академических часа - график можно обсудить на собеседовании/тестировании в школе). 
            </p>

            <p className="lead">
                online: занятия дистанционно<br />
                offline: занятия с посещением школы
            </p>

            <NavLink to="/Cours"><button className="btn btn-danger btn-lg">Назад</button></NavLink>

        </div>
    )
}

export default PS;