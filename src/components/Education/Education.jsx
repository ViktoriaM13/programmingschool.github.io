import React from 'react';
import education from './Education.module.css';
import graduationCap from '../../img/graduation-cap.png';

const Education = () => {
    return (
        <section className={`text-center education ${education.education}`} id="education">
            <div className="container position-relative">
                <div>
                    <h1 className="text-uppercase animate__animated animate__fadeInLeft">
                        Профессиональное образование <br/> для&nbsp;школьников
                    </h1>
                    <p className="m-auto animate__animated animate__fadeInLeftBig">
                        Первый модуль учебной программы - это хорошая профессиональная ориентация. Учащиеся пробуют свои силы на практике в программировании, графическом дизайне, web разработке и системной инженерии - и только после делают окончательный выбор будущей профессии, опираясь на рекомендацию преподавателя и результаты тестирования по окончанию первого модуля.
                    </p>
                    <div className={`${education.wrap} animate__animated animate__fadeInRightBig`}>
                        <img src={graduationCap} alt="Выпускной колпак" className="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education;