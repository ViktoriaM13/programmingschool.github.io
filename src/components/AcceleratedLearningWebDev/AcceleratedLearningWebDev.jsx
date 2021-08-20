import React from 'react';
import Diploma from '../Diploma/Diploma';
import PriceWebDevAccelerated from '../PriceWebDevAccelerated/PriceWebDevAccelerated';
import Stages from '../Stages/Stages';
import TrainingProgramWebDevAccelerated from '../TrainingProgramWebDevAccelerated/TrainingProgramWebDevAccelerated';
import WebDeveloper from '../WebDeveloper/WebDeveloper';
import acceleratedLearningWebDev from './AcceleratedLearningWebDev.module.css';

const AcceleratedLearningWebDev = () => {
    return (
        <div>
            <WebDeveloper/>
            <TrainingProgramWebDevAccelerated/>
            <Diploma/>
            <PriceWebDevAccelerated
                yearPrice={'180 400'} 
                monthPrice={'16 400'} 
                semesterPrice={'90 200'}
                yearNumberOfLessons={'576 занятий'}
                monthNumberOfLessons={'48 занятий'}
                semesterNumberOfLessons={'288 занятий'}
            />
            <Stages/>
        </div>
    )
}

export default AcceleratedLearningWebDev;