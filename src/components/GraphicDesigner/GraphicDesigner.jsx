import React from 'react';
import graphDes from './GraphicDesigner.module.css';
import graphicDesigner from '../../img/graph-des.svg';

const GraphicDesigner = () => {
    return (
        <section className={`text-center graphDesigner ${graphDes.graphDesigner}`} id="graphDesigner">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-6">
                        <h1 className="text-uppercase animate__animated animate__fadeInLeft">
                            Графический дизайн&nbsp;/<br/>Архитектурное проектирование и 3D
                        </h1>
                    </div>
                    <div className="col-sm-9 col-md-6">
                        <img src={graphicDesigner} alt="Иллюстрация" className="img-fluid animate__animated animate__fadeInRight"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GraphicDesigner;