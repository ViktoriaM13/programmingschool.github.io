import React from 'react';
import Diploma from '../Diploma/Diploma';
import PriceWebDev from '../PriceWebDev/PriceWebDev';
import Stages from '../Stages/Stages';
import TrainingProgramWebDev from '../TrainingProgramWebDev/TrainingProgramWebDev';
import WebDeveloper from '../WebDeveloper/WebDeveloper';
import fullTrainingWebDev from './FullTrainingWebDev.module.css';

const FullTrainingWebDev = () => {
    return (
        <div>
            <WebDeveloper/>
            <TrainingProgramWebDev/>
            <Diploma/>
            <PriceWebDev 
                yearPrice={'72 600'} 
                monthPrice={'6 600'} 
                semesterPrice={'36 300'}
                yearNumberOfLessons={'200 уроков'}
                monthNumberOfLessons={'16 уроков'}
                semesterNumberOfLessons={'100 уроков'}
            />
            <Stages/>
        </div>
    )
}

export default FullTrainingWebDev;