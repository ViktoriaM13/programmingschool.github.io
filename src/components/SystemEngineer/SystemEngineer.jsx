import React from 'react';
import systemEng from './SystemEngineer.module.css';
import systemEngineerImg from '../../img/system-engineer.svg';

const SystemEngineer = () => {
    return (
        <section className={`text-center systemEngin ${systemEng.systemEngin}`} id="systemEngin">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 col-lg-6">
                        <h1 className="text-uppercase animate__animated animate__fadeInLeft">
                            Системное администрирование <br/>и кибербезопасность
                        </h1>
                    </div>
                    <div className="col-sm-9 col-md-5 col-lg-6">
                        <img src={systemEngineerImg} alt="Иллюстрация" className="img-fluid animate__animated animate__fadeInRight"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SystemEngineer;