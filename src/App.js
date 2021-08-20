import React, { useEffect } from 'react';
import { Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import whatsapp from './img/whatsapp-regular.svg';
import phone from './img/telephone.svg';
import FullTraining from './components/FullTraining/FullTraining';
import Footer from './components/Footer/Footer';
import Header2 from './components/Header2/Header2';
import About from './components/About/About';
import Reviews from './components/Reviews/Reviews';
import Contacts from './components/Contacts/Contacts';
import Directions from './components/Directions/Directions';
import FullTrainingWebDev from './components/FullTrainingWebDev/FullTrainingWebDev';
import FullTrainingGraphDes from './components/FullTrainingGraphDes/FullTrainingGraphDes';
import FullTrainingProgrammer from './components/FullTrainingProgrammer/FullTrainingProgrammer';
import FullTrainingSystemEngineer from './components/FullTrainingSystemEngineer/FullTrainingSystemEngineer';
import ITKids from './components/ITKids/ITKids';
import AcceleratedLearning from './components/AcceleratedLearning/AcceleratedLearning';
import AcceleratedLearningWebDev from './components/AcceleratedLearningWebDev/AcceleratedLearningWebDev';
import AcceleratedLearningGraphDes from './components/AcceleratedLearningGraphDes/AcceleratedLearningGraphDes';
import AcceleratedLearningProgrammer from './components/AcceleratedLearningProgrammer/AcceleratedLearningProgrammer';
import AcceleratedLearningEngineer from './components/AcceleratedLearningEngineer/AcceleratedLearningEngineer';
import Policy from './components/Policy/Policy';
import Test from './components/Test/Test';


import Cours from './components/Courses/Cours.jsx';

const App = (props) => {
  
  let arr = props.state.Courses.CoursesData.map(el => <Route path={el.link} render={el.comp} ></Route>)

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="App d-flex flex-column justify-content-between">
      <Route
        path='/'
        exact
        render={Home}
      />
      <Route
        path='/:name'
        exact
        render={() => <div><Header2/></div>}
      />
      <Route
        path='/full-training'
        exact
        render={FullTraining}
      />
      <Route
        path='/about'
        exact
        render={() => <div><About/></div>}
      />
      <Route
        path='/directions'
        exact
        render={() => <div><Directions/></div>}
      />
      <Route
        path='/reviews'
        exact
        render={Reviews}
      />
      <Route
        path='/contacts'
        exact
        render={Contacts}
      />
      <Route
        path='/web-developer'
        exact
        render={FullTrainingWebDev}
      />
      <Route
        path='/graphic-designer'
        exact
        render={FullTrainingGraphDes}
      />
      <Route
        path='/programmer'
        exact
        render={FullTrainingProgrammer}
      />
      <Route
        path='/system-engineer'
        exact
        render={FullTrainingSystemEngineer}
      />
      <Route
        path='/it-kids'
        exact
        render={ITKids}
      />
      <Route
        path='/accelerated-learning'
        exact
        render={AcceleratedLearning}
      />
      <Route
        path='/web-developer-accelerated'
        exact
        render={AcceleratedLearningWebDev}
      />
      <Route
        path='/graphic-designer-accelerated'
        exact
        render={AcceleratedLearningGraphDes}
      />
      <Route
        path='/programmer-accelerated'
        exact
        render={AcceleratedLearningProgrammer}
      />
      <Route
        path='/system-engineer-accelerated'
        exact
        render={AcceleratedLearningEngineer}
      />
      <Route
        path='/policy'
        exact
        render={Policy}
      />
      <Route
        path='/test'
        exact
        component = {Test}
      />

      <div className="container">
        <Route path='/Cours' render = { () => <Cours state = {props.state.Courses} />}></Route>
        {arr}
      </div>

      <Footer/>
      <div className="widgets">
        <a href="tel:+79884872695" className="d-flex justify-content-center align-items-center rounded-circle position-relative mb-3 animate__animated animate__swing animate__infinite animate__slow">
            <img src={phone} alt="Телефон"/>
        </a>
        <a href="https://api.whatsapp.com/send?phone=79884872695" className="d-flex justify-content-center align-items-center rounded-circle position-relative animate__animated animate__swing animate__infinite animate__slow" target="_blank" rel="noreferrer">
            <img src={whatsapp} alt="Whatsapp"/>
        </a>
      </div>
    </div>
  );
}

export default App;
