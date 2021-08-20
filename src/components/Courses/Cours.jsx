import Crs from './Crs.jsx';

const Cours = (props) => {
    return(
        <div className="coursWrapper text-center">
            <Crs state = {props.state.CoursesData} />
        </div>
    );
}

export default Cours;