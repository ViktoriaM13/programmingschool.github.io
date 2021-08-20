import React from 'react';
import Diploma from '../Diploma/Diploma';
import PriceWebDevAccelerated from '../PriceWebDevAccelerated/PriceWebDevAccelerated';
import Programmer from '../Programmer/Programmer';
import Stages from '../Stages/Stages';
import TrainingProgramProgrammerAccelerated from '../TrainingProgramProgrammerAccelerated/TrainingProgramProgrammerAccelerated';
import acceleratedLearningProgrammer from './AcceleratedLearningProgrammer.module.css';

const AcceleratedLearningProgrammer = () => {
    return (
        <div>
            <Programmer/>
            <TrainingProgramProgrammerAccelerated/>
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

export default AcceleratedLearningProgrammer;