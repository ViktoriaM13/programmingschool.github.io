import React from 'react';
import Diploma from '../Diploma/Diploma';
import PriceWebDev from '../PriceWebDev/PriceWebDev';
import Stages from '../Stages/Stages';
import SystemEngineer from '../SystemEngineer/SystemEngineer';
import TrainingProgramSystemEngineer from '../TrainingProgramSystemEngineer/TrainingProgramSystemEngineer';
import fullTrainingSystemEngineer from './FullTrainingSystemEngineer.module.css';

const FullTrainingSystemEngineer = () => {
    return (
        <div>
            <SystemEngineer/>
            <TrainingProgramSystemEngineer/>
            <Diploma/>
            <PriceWebDev 
                yearPrice={'72 600'} 
                monthPrice={'6 600'} 
                semesterPrice={'36 300'}
                yearNumberOfLessons={'192 уроков'}
                monthNumberOfLessons={'16 уроков'}
                semesterNumberOfLessons={'96 уроков'}
            />
            <Stages/>
        </div>
    )
}

export default FullTrainingSystemEngineer;