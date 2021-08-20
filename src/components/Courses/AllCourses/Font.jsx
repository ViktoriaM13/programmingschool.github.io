import { NavLink } from 'react-router-dom';
import fonticon from '../../../img/Технология создания компьютерных шрифтов(3).svg'

const Font = () => {
    return(
        <div className="container cours">

            <div className="row d-flex align-items-center justify-content-between crs-mr">
                <div className="col align-items-center">
                    <h3 className="h1">Технология создания компьютерных шрифтов</h3>
                    <h3 className="lead">50 000р.</h3>
                </div>

                <div className="col img-right">
                    <img src={fonticon} width="250" class="img-fluid" alt={fonticon} />
                </div>
            </div>
            
            <p className="lead">
                Шрифт – это форма письменных или печатных знаков. Рисунок букв алфавита какого- либо языка с относящимися к нему дополнительными знаками цифрами, знаками препинания, расположенными на шрифтовом носителе. Данный курс уникален и аналогов ему нет.
            </p>

            <h4>В программу курса входит:</h4>

            <ul className="lead">
                <li key={Math.random()}>Основы компьютерной графики</li>
                <li key={Math.random()}>Программные средства компьютерной графики</li>
                <li key={Math.random()}>Основы представления цвета</li>
                <li key={Math.random()}>Графические форматы и их структуру</li>
                <li key={Math.random()}>Устройства ввода/вывода графической информации, их характеристики и настройка</li>
                <li key={Math.random()}>Методы растрирования</li>
                <li key={Math.random()}>Методы преобразования растровых изображений</li>
                <li key={Math.random()}>Основы компьютерного дизайна, построения и анализа изображений</li>
                <li key={Math.random()}>Основы композиции, пропорции и перспективы</li>
                <li key={Math.random()}>Методы работы с растровой и векторной графикой</li>
                <li key={Math.random()}>Обработки и коррекции изображений</li>
                <li key={Math.random()}>Имитации техник графического дизайна, подготовки графических проектов</li>
                <li key={Math.random()}>Основы разработки компьютерных шрифтов</li>
                <li key={Math.random()}>Методы разработки фирменного стиля</li>
                <li key={Math.random()}>Создания графических проектов и элементов фирменного стиля</li>
            </ul>

            <p className="lead">
                Вы будите уметь анализировать сложные графические образы, оценивать качество растровых, векторных изображений и шрифтов, использовать программные средства компьютерной графики для создания элементов графического дизайна и обработки растровых и векторных изображений.
            </p>

            <p className="lead">
                У Вас появятся навыки: обработки графической информации; коррекции, монтажа растровых изображений, работы с панелью инструментов, каналами, слоями, палитрой и основными фильтрами в Adobe Photoshop и Adobe Illustrator, композиционного анализа сложных графических образов, допечатной подготовки изображений, ввода вывода графической информации, настройки цвета.
            </p>

            <p className="lead">
                Занятия проходят в удобное для ученика и преподавателя время (пару раз в неделю по 2-3 часа). Расписание составляется при заключении договора. Вы обучаетесь в малокомплектной группе (до 5 человек), начать обучение можно любой момент, как только Вы будете готовы приступить к занятиям. По окончанию курса Вас ожидает выпускной экзамен, Сертификат который котируется у работодателей, а так же пожизненная тех поддержка от вашего преподавателя и помощь в трудоустройстве!
            </p>

            <p className="lead">
                Для расчета стоимости выберите вариант который Вам подходит: индивидуальные занятия 1500 руб / 1 ак час или групповые 1000 руб / 1 ак час - и умножьте стоимость на общее количество академических часов данного курса. Оплата возможна в 2 части. 
            </p>

            <p className="lead">
                Курс рассчитан на 28 академических часов. Длительность 1 месяц (при посещении 3 занятия в неделю по 3 академических часа - график можно обсудить на собеседовании/тестировании в школе). 
            </p>

            <p className="lead">
                online: занятия дистанционно<br />
                offline: занятия с посещением школы
            </p>

            <NavLink to="/Cours"><button className="btn btn-danger btn-lg">Назад</button></NavLink>

        </div>
    )
}

export default Font;