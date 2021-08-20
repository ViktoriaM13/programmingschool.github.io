import { NavLink } from 'react-router-dom';
import dsicon from '../../../img/Data Science(3).svg'

const DS = () => {
    return(
        <div className="container cours">

            <div className="row d-flex align-items-center justify-content-between crs-mr">
                <div className="col align-items-center">
                    <h3 className="h1">Data Science</h3>
                    <h3 className="lead">50 000р.</h3>
                </div>

                <div className="col img-right">
                    <img src={ dsicon } width="250" className="img-fluid" alt={ dsicon } />
                </div>
            </div>

            <h4>В программе курса:</h4>

            <ul className="lead">
                <li key={Math.random()}>Базы данных/SQL. 30 АК часов</li>
                <li key={Math.random()}>Основы языка Python. 50 АК часов</li>
                <li key={Math.random()}>Библиотеки для анализа данных/Pandas, Numpy, Matplotlib, Plotly. 50 АК часов</li>
            </ul>

            <p className="lead">
                Срок обучения 3-3,5 месяца при индивидуальном графике занятий 2-3 раза в неделю по 3 часа. Начать можете в любой момент как будете готовы, оплачивать можно по блокам (есть рассрочка) , по окончанию обучения вы получаете знания, науки и свидетельство. Занятия без воды , основной упор на практику. Преподаватели практики с большим опытом работы в сфере ИТ
            </p>

            <p className="lead">
                Для расчета стоимости выберите вариант который Вам подходит: индивидуальные занятия 1500 руб / 1 ак час или групповые 1000 руб / 1 ак час - и умножьте стоимость на общее количество академических часов данного курса. Оплата возможна в 2 части.
            </p>

            <p className="lead">
                Курс рассчитан на 130 академических часов. Длительность 4-6 месяцев (при посещении 3 занятия в неделю по 3 академических часа - график можно обсудить на собеседовании/тестировании в школе). 
            </p>

            <p className="lead">
                online: занятия дистанционно<br />
                offline: занятия с посещением школы
            </p>

            <NavLink to="/Cours"><button className="btn btn-danger btn-lg">Назад</button></NavLink>

        </div>
    )
}

export default DS;