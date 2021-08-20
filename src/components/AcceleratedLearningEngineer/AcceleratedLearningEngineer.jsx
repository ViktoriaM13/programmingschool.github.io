import React from 'react';
import Diploma from '../Diploma/Diploma';
import PriceWebDevAccelerated from '../PriceWebDevAccelerated/PriceWebDevAccelerated';
import Stages from '../Stages/Stages';
import SystemEngineer from '../SystemEngineer/SystemEngineer';
import TrainingProgramEngineerAccelerated from '../TrainingProgramEngineerAccelerated/TrainingProgramEngineerAccelerated';
import acceleratedLearningEngineer from './AcceleratedLearningEngineer.module.css';

const AcceleratedLearningEngineer = () => {
    return (
        <div>
            <SystemEngineer/>
            <TrainingProgramEngineerAccelerated/>
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

export default AcceleratedLearningEngineer;