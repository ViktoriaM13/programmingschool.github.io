import React from 'react';
import webDev from './WebDeveloper.module.css';
import webDeveloper from '../../img/web-dev.svg';

const WebDeveloper = () => {
    return (
        <section className={`text-center webDev ${webDev.webDev}`} id="webDev">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6">
                        <h1 className="text-uppercase animate__animated animate__fadeInLeft">
                            Web-разработчик /<br/>Front-end /<br className="d-none d-md-block"/> Back-end
                        </h1>
                    </div>
                    <div className="col-sm-9 col-md-6">
                        <img src={webDeveloper} alt="Веб-разработчик" className="img-fluid animate__animated animate__fadeInRight"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WebDeveloper;