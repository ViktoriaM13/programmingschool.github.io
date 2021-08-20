import React from 'react';
import Diploma from '../Diploma/Diploma';
import GraphicDesigner from '../GraphicDesigner/GraphicDesigner';
import PriceWebDevAccelerated from '../PriceWebDevAccelerated/PriceWebDevAccelerated';
import Stages from '../Stages/Stages';
import TrainingProgramGraphDesAccelerated from '../TrainingProgramGraphDesAccelerated/TrainingProgramGraphDesAccelerated';
import acceleratedLearningGraphDes from './AcceleratedLearningGraphDes.module.css';

const AcceleratedLearningGraphDes = () => {
    return (
        <div>
            <GraphicDesigner/>
            <TrainingProgramGraphDesAccelerated/>
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

export default AcceleratedLearningGraphDes;