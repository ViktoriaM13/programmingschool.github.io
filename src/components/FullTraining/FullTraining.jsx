import React from 'react';
import fulltraining from './FullTraining.module.css';
import Education from '../Education/Education';
import FullTrainingDirections from '../FullTrainingDirections/FullTrainingDirections';

const FullTraining = () => {
    return (
        <div>
            <Education/>
            <FullTrainingDirections/>
        </div>
    )
}

export default FullTraining;