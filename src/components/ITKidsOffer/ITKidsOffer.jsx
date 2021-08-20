import React from 'react';
import ITKidsOfferClass from './ITKidsOffer.module.css';
import itKidsImg from '../../img/it-kids.svg';
import rocket from '../../img/rocket.svg';

const ITKidsOffer = () => {
    return (
        <section className={`text-center ITKidsOffer ${ITKidsOfferClass.ITKidsOffer}`} id="ITKidsOffer">
            <div className="container">
                <div>
                    <h1 className="text-uppercase animate__animated animate__fadeInLeft">
                        Летний лагерь <span>IT&nbsp;KIDS</span>
                    </h1>
                    <div className="position-relative">
                        <img src={itKidsImg} alt="Иллюстрация" className={`${ITKidsOfferClass.pic} img-fluid animate__animated animate__fadeInLeftBig`}/>
                        <img src={rocket} alt="Ракета" className={`${ITKidsOfferClass.rocket} position-absolute animate__animated animate__flip animate__infinite animate__slow`}/>
                    </div>
                    <p className="animate__animated animate__fadeInRight">
                        Летний лагерь ждет всех желающих от 10 до 14 лет<br/>
                        В основе программы — проектный подход и интенсивная практика: дети научатся реализовывать свои проекты и презентовать их, займутся разработкой компьютерных игр под руководством экспертов, будут изучать основы графического дизайна, мы посвятим их в тонкости 3D моделирования, дадим возможность самостоятельно сверстать свой первый сайт и введём их в мир видеоблогинга!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ITKidsOffer;