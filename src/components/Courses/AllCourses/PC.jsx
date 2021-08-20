import { NavLink } from 'react-router-dom';
import pcicon from '../../../img/Пользователь ПК(компьютер с нуля)(1).svg'

const PC = () => {
    return(
        <div className="container cours">

            <div className="row d-flex align-items-center justify-content-between crs-mr">
                <div className="col align-items-center">
                    <h3 className="h1">Пользователь ПК (компьютер с нуля)</h3>
                    <h3 className="lead">50 000р.</h3>
                </div>

                <div className="col img-right">
                    <img src={ pcicon } width="250" className="img-fluid" alt={ pcicon } />
                </div>
            </div>
            
            <p className="lead">
                Умение грамотно и эффективно пользоваться ПК сегодня — насущная необходимость. Это пропуск в мир цифровых технологий и базовое требование при приеме практически на любую работу. Если Вы хотите увеличить эффективность Вашей деятельности, повысить профессиональный статус, то Вам необходимо пройти обучение у нас в Школе по курсу "Пользователь ПК".
            </p>

            <h4>В программу курса входит:</h4>

            <h5>1 уровень:</h5>

            <ul className="lead">
                <li key={Math.random()}>Основы работы с ПК</li>
                <li key={Math.random()}>Клавиатура</li>
                <li key={Math.random()}>Компоненты пк</li>
                <li key={Math.random()}>Операционные системы</li>
                <li key={Math.random()}>Файловая система</li>
                <li key={Math.random()}>Вирусы / антивирусы</li>
                <li key={Math.random()}>Основы word / excel</li>
            </ul>

            <p className="lead">
                Уровень рассчитан на 20 ак/ч
            </p>

            <h5>2 уровень:</h5>

            <ul className="lead">
                <li key={Math.random()}>Основы работы с пк</li>
                <li key={Math.random()}>Текстовый редактор microsoft word</li>
                <li key={Math.random()}>Электронные таблицы microsoft excel</li>
                <li key={Math.random()}>Презентации power point</li>
            </ul>

            <p className="lead">
                Уровень рассчитан на 40 ак/ч
            </p>

            <h5>3 уровень:</h5>

            <ul className="lead">
                <li key={Math.random()}>Основы работы с пк</li>
                <li key={Math.random()}>Текстовый редактор microsoft word</li>
                <li key={Math.random()}>Электронные таблицы microsoft excel</li>
                <li key={Math.random()}>Презентации power point</li>
                <li key={Math.random()}>Компьютерные сети</li>
            </ul>

            <p className="lead">
                Уровень рассчитан на 52 ак/ч
            </p>

            <p className="lead">
                Занятия проходят в удобное для ученика и преподавателя время (пару раз в неделю по 2-3 часа). Расписание составляется при заключении договора. Вы обучаетесь в малокомплектной группе (до 5 человек), начать обучение можно любой момент, как только Вы будете готовы приступить к занятиям. По окончанию курса Вас ожидает выпускной экзамен, Сертификат который котируется у работодателей, а так же пожизненная тех поддержка от вашего преподавателя и помощь в трудоустройстве!
            </p>

            <p className="lead">
                Для расчета стоимости выберите вариант который Вам подходит: индивидуальные занятия 1500 руб / 1 ак час или групповые 1000 руб / 1 ак час - и умножьте стоимость на общее количество академических часов данного курса. Оплата возможна в 2 части.
            </p>

            <p className="lead">
                online: занятия дистанционно<br />
                offline: занятия с посещением школы
            </p>

            <NavLink to="/Cours"><button className="btn btn-danger btn-lg">Назад</button></NavLink>

        </div>
    )
}

export default PC;