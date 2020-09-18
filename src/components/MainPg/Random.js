import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Spinner from '../Spinner';

 class Random extends Component {
     componentDidMount(){
        //  const x=1+Math.floor(Math.random() * 117)
        // this.props.getCharac(x);
        this.props.getCharac();
     }
     static propTypes={
         getCharac:PropTypes.func.isRequired,
         charac:PropTypes.object.isRequired
     }
    render() {
        const {name,img,nickname,occupation}=this.props.charac;
        const {loading}=this.props;
        if(loading)
        return( <Spinner/>)
        else{
            
        return (
            <div>
                <div className="card text-center">
                <img src={img} alt='' className="round-img" style={{width:'250px'}}/>
                <h1>{name}</h1>
                <p><strong>Occupation: </strong>{occupation}</p>
                <p><strong>Nickname: </strong>{nickname}</p>
                </div>
             </div> )}
    }
}

export default Random
