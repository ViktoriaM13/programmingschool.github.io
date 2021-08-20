import { NavLink } from 'react-router-dom';
import exelicon from '../../../img/Макросы Excel(2).svg'

const Exel = () => {
    return(
        <div className="container cours">

            <div className="row d-flex align-items-center justify-content-between crs-mr">
                <div className="col align-items-center">
                    <h3 className="h1">Базовый курс по работе с Microsoft Office Excel</h3>
                    <h3 className="lead">50 000р.</h3>
                </div>

                <div className="col img-right">
                    <img src={ exelicon } width="250" className="img-fluid" alt={ exelicon } />
                </div>
            </div>

            <h4>Вы научитесь:</h4>

            <ul className="lead">
                <li key={Math.random()}>Запускать Excel</li>
                <li key={Math.random()}>Ориентироваться в интерфейсе Excel</li>
                <li key={Math.random()}>Вводить и редактировать текстовые, числовые данные, временные и денежные параметры</li>
                <li key={Math.random()}>Создавать и работать с формулами и функциями Excel</li>
                <li key={Math.random()}>Преобразовывать рабочие листы Excel</li>
                <li key={Math.random()}>Форматировать данные в рабочем листе Excel</li>
                <li key={Math.random()}>Визуализировать данные с помощью диаграмм Excel</li>
                <li key={Math.random()}>Создавать электронную таблицу Excel</li>
                <li key={Math.random()}>Разбираться в настройках печати Excel</li>
                <li key={Math.random()}>Оперировать горячими клавишами Excel</li>
                <li key={Math.random()}>Создавать и работать с любыми макетами Excel</li>
                <li key={Math.random()}>Уверенно и комфортно оперировать базовыми знаниями по Excel в любой сфере деятельности</li>
                <li key={Math.random()}>И многое другое!</li>
            </ul>

            <p className="lead">
                Занятия в удобное время 2-3 раза в неделю по 3 часа (время и даты обговариваются с преподавателем). Данный курс займет у вас не больше 2-3 недель обучения. В процессе занятий много практики, вас обучает профессионал который обладает педагогическим талантом! Начать обучение можно в любое время, как вы будете готовы, не нужно ждать пока наберется группа.
            </p>

            <p className="lead">
                Для расчета стоимости выберите вариант который Вам подходит: индивидуальные занятия 1500 руб / 1 ак час или групповые 1000 руб / 1 ак час - и умножьте стоимость на общее количество академических часов данного курса. Оплата возможна в 2 части.
            </p>
            
            <p className="lead">
                Курс рассчитан на 12 академических часов. Длительность 2 недели (при посещении 3 занятия в неделю по 3 академических часа - график можно обсудить на собеседовании/тестировании в школе).
            </p>

            <p className="lead">
                online: занятия дистанционно<br />
                offline: занятия с посещением школы
            </p>

            <NavLink to="/Cours"><button className="btn btn-danger btn-lg">Назад</button></NavLink>

        </div>
    )
}

export default Exel;