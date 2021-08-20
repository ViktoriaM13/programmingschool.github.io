import { NavLink } from 'react-router-dom';
import exelicon from '../../../img/Макросы Excel(2).svg'

const MExel = () => {
    return(
        <div className="container cours">

            <div className="row d-flex align-items-center justify-content-between crs-mr">
                <div className="col align-items-center">
                    <h3 className="h1">Макросы в Excel</h3>
                    <h3 className="lead">50 000р.</h3>
                </div>

                <div className="col img-right">
                    <img src={ exelicon } width="250" className="img-fluid" alt={ exelicon } />
                </div>
            </div>

            <p className="lead"> 
                Всю теорию сразу отрабатываете и закрепляете на практике! Вы получите реальные знания и опыт под руководством профессионала!
            </p>

            <h4>Программа:</h4>

            <ul className="lead">
                <li key={Math.random()}>Автоматическая запись макроса в EXCEL.</li>
                <li key={Math.random()}>Программирование объектов EXCEL. Свойства и методы рабочих книг, листов и диапазонов ячеек.</li>
                <li key={Math.random()}>Практика линейного программирования.</li>
                <li key={Math.random()}>Циклы: программирование многократных действий.</li>
                <li key={Math.random()}>Практика программирования циклических алгоритмов.</li>
                <li key={Math.random()}>Основы структурного программирования.</li>
                <li key={Math.random()}>Автоматизация запуска макросов.</li>
            </ul>

            <p className="lead">
                Данный курс займет не больше месяца , занятия индивидуально , график можно выбрать удобный для вас , стоимость курса 24 тысячи рублей, оплатить можно в 2 части, по окончанию курса вы так же получаете сертификат , начать обучение можете в любое время , для поступления запишитесь на собеседование тестирование по номеру телефона +79884872695 и в назначенное время приезжаете к нам в Школу для заключения договора на обучение.
            </p>

            <p className="lead">
                Для расчета стоимости выберите вариант который Вам подходит: индивидуальные занятия 1500 руб / 1 ак час или групповые 1000 руб / 1 ак час - и умножьте стоимость на общее количество академических часов данного курса. Оплата возможна в 2 части.
            </p>
            
            <p className="lead">
                Курс рассчитан на 24 академических часа. Длительность 1 месяц (при посещении 3 занятия в неделю по 3 академических часа - график можно обсудить на собеседовании/тестировании в школе).
            </p>

            <p className="lead">
                online: занятия дистанционно<br />
                offline: занятия с посещением школы
            </p>

            <NavLink to="/Cours"><button className="btn btn-danger btn-lg">Назад</button></NavLink>

        </div>
    )
}

export default MExel;