import React from 'react';
import Diploma from '../Diploma/Diploma';
import PriceWebDev from '../PriceWebDev/PriceWebDev';
import Programmer from '../Programmer/Programmer';
import Stages from '../Stages/Stages';
import TrainingProgramProgrammer from '../TrainingProgramProgrammer/TrainingProgramProgrammer';
import fullTrainingProgrammer from './FullTrainingProgrammer.module.css';

const FullTrainingProgrammer = () => {
    return (
        <div>
            <Programmer/>
            <TrainingProgramProgrammer/>
            <Diploma/>
            <PriceWebDev 
                yearPrice={'72 600'} 
                monthPrice={'6 600'} 
                semesterPrice={'36 300'}
                yearNumberOfLessons={'192 урока'}
                monthNumberOfLessons={'16 уроков'}
                semesterNumberOfLessons={'96 уроков'}
            />
            <Stages/>
        </div>
    )
}

export default FullTrainingProgrammer;