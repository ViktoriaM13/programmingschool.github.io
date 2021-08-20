import React from 'react';
import acceleratedLearningOfferStyle from './AcceleratedLearningOffer.module.css';
import acceleratedLearningImg from '../../img/accelerated-learning.svg';

const AcceleratedLearningOffer = () => {
    return (
        <section className={`acceleratedLearningOffer ${acceleratedLearningOfferStyle.acceleratedLearningOffer}`} id="acceleratedLearningOffer">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-sm-10 col-md-5 col-xl-4 order-1 order-md-0 d-flex justify-content-center">
                        <img src={acceleratedLearningImg} alt="Иллюстрация" className="img-fluid animate__animated animate__fadeInLeft"/>
                    </div>
                    <div className="col-sm-10 col-md-7 col-xl-8">
                        <h1 className="text-uppercase animate__animated animate__fadeInRight mx-auto">
                            - Получи профессию за 2 года!<br/>
                            - Учись тому, что пригодится!<br/>
                            - Стань тем, кем мечтал!
                        </h1>
                    </div>
                    <div className="col-xl-7 order-1 order-md-0">
                        <div className={`text-center ${acceleratedLearningOfferStyle.text} animate__animated animate__fadeInLeft`}>
                            <p>
                                Мы - то самое учебное заведение, которое <br/>Вы искали!
                            </p>
                            <p>
                                Никакой воды в учебных программах, <br/>только профильные предметы.
                            </p>
                            <p>
                                Мы создаем портфолио специалиста, еще на этапе обучения.
                            </p>
                            <p>
                                Помощь в трудоустройстве выпускников!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AcceleratedLearningOffer;