import React from 'react';
import programmerStyle from './Programmer.module.css';
import programmerImg from '../../img/programmer2.svg';

const Programmer = () => {
    return (
        <section className={`text-center programmerPage ${programmerStyle.programmer}`} id="programmerPage">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 col-lg-6">
                        <h1 className="text-uppercase animate__animated animate__fadeInLeft">
                            Программирование&nbsp;/ <br className="d-block d-md-none"/>Программная инженерия
                        </h1>
                    </div>
                    <div className="col-sm-9 col-md-5 col-lg-6">
                        <img src={programmerImg} alt="" className="img-fluid animate__animated animate__fadeInRight"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Programmer;