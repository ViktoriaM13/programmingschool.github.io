import Courses from './Courses.jsx';
import React from "react";
import {NavLink} from 'react-router-dom';
import Collapsible from "react-collapsible";

const Crs = (props) =>{

    const result = props.state.map(f => {
        return(
            {
                id: f.id,
                name: f.name,
                link: f.link,
                color: f.color,
                image: f.image
            }
        )
    })

    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = e => {
        setSearchTerm(e.target.value);
    };

    React.useEffect(() => {
            const results = result.filter(cours => {
                return (
                    cours.name.toLowerCase().includes(searchTerm)
                )
            })
        setSearchResults(results);
    }, [searchTerm]);

    const progr = (props) => {
        if (props === 'progr') {
            const results = result.filter(cours => {
                return (
                    (cours.color === 'progr' || cours.color === 'progr-webs' || cours.color === 'all-courses')
                )
            })
            setSearchResults(results)
        }
    }

    const webs = (props) => {
        if (props === 'webs') {
            const results = result.filter(cours => {
                return (
                    cours.color === 'webs' || cours.color === 'progr-webs' || cours.color === 'webs-des' || cours.color === 'all-courses'
                )
            })
            setSearchResults(results)
        }
    }

    const des = (props) => {
        if (props === 'des') {
            const results = result.filter(cours => {
                return (
                    cours.color === 'des' || cours.color === 'webs-des' || cours.color === 'all-courses'
                )
            })
            setSearchResults(results)
        }
    }

    const adm = (props) => {
        if (props === 'adm') {
            const results = result.filter(cours => {
                return (
                    cours.color === 'adm' || cours.color === 'all-courses'
                )
            })
            setSearchResults(results)
        }
    }

    const all = (props) => {
        if (props === 'all') {
            const results = result.filter(cours => {
                return (
                    cours.id <= 100
                )
            })
            setSearchResults(results)
        }
    }
    
    return(
        <div>
            <div>
                <Courses />
            </div>
            <div className="input-group mb-3">
                <input className="form-control my-1 border-radius-elements" type="search" placeholder="Поиск" aria-label="Search" value={searchTerm} onChange={handleChange} />
            </div>
            <Collapsible
                trigger="Направления &#9660;"
                containerElementProps={{ id: 'my-cool-identifier', lang: 'en' }}
                triggerStyle={{ cursor:'pointer', background:'#dc3545', color:'#fff', padding:'1%', 'border-radius':'5px'}}
            >
                <div className="d-flex align-items-center justify-content-center flex-wrap mt-3">
                    <button className="courseBtnCollapsible progr" style={{width:'200px', height:'60px', fontSize:'18px'}} onClick={()=>progr('progr')}>Программирование</button>
                    <button className="courseBtnCollapsible webs" style={{width:'200px', height:'60px', fontSize:'18px'}} onClick={()=>webs('webs')}>Web-разработка</button>
                    <button className="courseBtnCollapsible des" style={{width:'200px', height:'60px', fontSize:'18px'}} onClick={()=>des('des')}>Графический дизайн</button>
                    <button className="courseBtnCollapsible adm" style={{width:'200px', height:'60px', fontSize:'18px'}} onClick={()=>adm('adm')}>Кибербезопасность</button>
                    <button className="courseBtnCollapsible all-courses" style={{width:'200px', height:'60px', fontSize:'18px'}} onClick={()=>all('all')}>Все курсы</button>
                </div>
            </Collapsible>
            <div className="row justify-content-center mt-2">
                {searchResults.map(item => (
                    <div className="col-sm-7 col-md-5 col-lg-4 col-xl-3 m-xl-2 courseCardBodyWrap">
                        <div className="card-body courseCardBody">
                            <NavLink to={item.link}> 
                                <img src={item.image} className="card-img-top img-fluid p-3" />
                                <button style={{width:'200px'}} className={`${item.color} courseBtn btn btn-lg p-3`}>{item.name}</button>
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Crs;
