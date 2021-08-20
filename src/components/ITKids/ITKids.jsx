import React from 'react';
import ITKidsOffer from '../ITKidsOffer/ITKidsOffer';
import ITKidsQuestion from '../ITKidsQuestion/ITKidsQuestion';
import Stages from '../Stages/Stages';
import TrainingProgramITKids from '../TrainingProgramITKids/TrainingProgramITKids';
import itKids from './ITKids.module.css';

const ITKids = () => {
    return (
        <div>
            <ITKidsOffer/>
            <TrainingProgramITKids/>
            <ITKidsQuestion/>
            <Stages/>
        </div>
    )
}

export default ITKids;