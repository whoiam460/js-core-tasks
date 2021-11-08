

import logo from '../img/logo.jpeg'

const Cards = (props) => {
    const{hrf}= props


    return (
     <>
       <div className="card" style={ {width: '18rem', margin: '0 auto'} }>
            <img src={logo} className="card-img-top" alt="logo"/>
            <div className="card-body">
                <h5 className="card-title">React</h5>
                <p className="card-text">Задания для прокачки React</p>
                <a href={hrf} className="btn btn-primary" target='_blank' rel="noreferrer">Google search</a>
            </div>
        </div>
    </>
    )
}

export default Cards