import React from 'react';
import AcceleratedLearningDirections from '../AcceleratedLearningDirections/AcceleratedLearningDirections';
import AcceleratedLearningOffer from '../AcceleratedLearningOffer/AcceleratedLearningOffer';
import Diploma from '../Diploma/Diploma';
import acceleratedLearningStyle from './AcceleratedLearning.module.css';

const AcceleratedLearning = () => {
    return (
        <div>
            <AcceleratedLearningOffer/>
            <AcceleratedLearningDirections/>
            <Diploma/>
        </div>
    )
}

export default AcceleratedLearning;