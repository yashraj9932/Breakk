import React from 'react'
import {Link} from 'react-router-dom'

const Comps = ({ comp }) => {
    return (
        <div style={{width:"100%"}}>
            <div className="card text-center" style={{float:'left',width:'80%'}}>
                <h3>{comp.line}</h3>
            </div>
            <Link to={'/'+comp.name} className="btn btn-dark my-1" style={{float:'right'}}>{comp.name}</Link>
        </div>
    )
}

export default Comps
