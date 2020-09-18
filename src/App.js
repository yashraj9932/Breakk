import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import About from './components/About'
import Random from './components/MainPg/Random'
import Ocomp from './components/MainPg/Ocomp'
import Quote from './components/Quote'
import Death from './components/Death'
import axios from 'axios'
import './App.css';
import Character from './components/Character';
import Alert from './components/Sircar/Alert'
import Search from './components/Sircar/Search'

class App extends Component {
  state={
    loading:false,
    charac:[{"char_id":117,"name":"Stacey Ehrmantraut","birthday":"Unknown","occupation":["Mother"],"img":"https://vignette.wikia.nocookie.net/breakingbad/images/b/b3/StaceyEhrmantraut.png/revision/latest?cb=20150310150049","status":"?","nickname":"Stacey","appearance":[],"portrayed":"Kerry Condon","category":"Better Call Saul","better_call_saul_appearance":[]}],
    quotee:[],
    image:{},
    death:{},
    charr:{}
  }
  getCharac=async ()=>{
    // getCharac=async (id)=>{
    this.setState({loading:true});
    // const res=await axios.get(`https://www.breakingbadapi.com/api/characters/${id}`)
    const res=await axios.get(`https://www.breakingbadapi.com/api/character/random`)
    // console.log(res.data);
    this.setState({charac:res.data,loading:false});
  }
  squote=async ()=>{
    this.setState({loading:true});
    const res=await axios.get("https://www.breakingbadapi.com/api/quote/random")
    this.setState({quotee:res.data,loading:false});
  }
  getImg=async (fname)=>{
    this.setState({loading:true});
    const res=await axios.get(`https://www.breakingbadapi.com/api/characters?name=${fname}`)
    this.setState({image:res.data[0].img,loading:false})
  }
  sdeath=async () =>{
    this.setState({loading:true});
    const res=await axios.get(`https://www.breakingbadapi.com/api/random-death`)
    this.setState({death:res.data,loading:false})
  }
  getCha=async(cname)=>{
    this.setState({loading:true});
    const res=await axios.get(`https://www.breakingbadapi.com/api/characters?name=${cname}`)
    this.setState({charr:res.data[0],loading:false})
  }
  alertt=(msg,type)=>{
    console.log("alert haii")
  }
  clearr=()=>{
    this.setState({ charr:{}, loading: false })
  }
  render() {
    const {loading,charac,quotee,image,death,charr}=this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' render={props=>(
                <Fragment>
                  <Random getCharac={this.getCharac} loading={loading} charac={charac[0]}/>
                  <Ocomp/>
                </Fragment>
              )
              }/>
              <Route exact path='/about' component={About} />
              <Route exact path='/Quote' render={props=>(
                <Fragment>
                  <Quote squote={this.squote} getImg={this.getImg}quotee={quotee[0]} image={image}/>
                </Fragment>
              )}/>
              <Route exact path='/Death' render={props=>(
                <Fragment>
                <Death sdeath={this.sdeath} death={death}/>
                </Fragment>
              )}/>
              <Route exact path='/Character' render={props=>(
                <Fragment>
                  <Alert/>
                  <Search alertt={this.alertt} clearr={this.clearr} getCha={this.getCha} loading={loading}/>
                  <Character charr={charr} loading={loading}/>
                </Fragment>
              )}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
