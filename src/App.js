import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import About from './components/About'
import Random from './components/MainPg/Random'
import axios from 'axios'
import './App.css';

class App extends Component {
  state={
    loading:false,
    charac:[{"char_id":117,"name":"Stacey Ehrmantraut","birthday":"Unknown","occupation":["Mother"],"img":"https://vignette.wikia.nocookie.net/breakingbad/images/b/b3/StaceyEhrmantraut.png/revision/latest?cb=20150310150049","status":"?","nickname":"Stacey","appearance":[],"portrayed":"Kerry Condon","category":"Better Call Saul","better_call_saul_appearance":[]}]
  }
  getCharac=async (id)=>{
    this.setState({loading:true});
    const res=await axios.get(`https://www.breakingbadapi.com/api/characters/${id}`)
    // console.log(res.data);
    this.setState({charac:res.data,loading:false});
  }
  render() {
    const {loading,charac}=this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' render={props=>(
                <Fragment>
                  <Random getCharac={this.getCharac} loading={loading} charac={charac[0]}/>
                </Fragment>
              )
              }/>
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
