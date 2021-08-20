import React from 'react';
import Diploma from '../Diploma/Diploma';
import GraphicDesigner from '../GraphicDesigner/GraphicDesigner';
import PriceWebDev from '../PriceWebDev/PriceWebDev';
import Stages from '../Stages/Stages';
import TrainingProgramGraphDes from '../TrainingProgramGraphDes/TrainingProgramGraphDes';
import fullTrainingGraphDes from './FullTrainingGraphDes.module.css';

const FullTrainingGraphDes = () => {
    return (
        <div>
            <GraphicDesigner/>
            <TrainingProgramGraphDes/>
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

export default FullTrainingGraphDes;