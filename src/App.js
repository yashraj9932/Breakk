import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Random from "./components/MainPg/Random";
import Ocomp from "./components/MainPg/Ocomp";
import Quote from "./components/Quote";
import Death from "./components/Death";
import axios from "axios";
import "./App.css";
import Character from "./components/Character";
import Alert from "./components/Sircar/Alert";
import Search from "./components/Sircar/Search";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [charac, setCharac] = useState([
    {
      char_id: 117,
      name: "Stacey Ehrmantraut",
      birthday: "Unknown",
      occupation: ["Mother"],
      img:
        "https://vignette.wikia.nocookie.net/breakingbad/images/b/b3/StaceyEhrmantraut.png/revision/latest?cb=20150310150049",
      status: "?",
      nickname: "Stacey",
      appearance: [],
      portrayed: "Kerry Condon",
      category: "Better Call Saul",
      better_call_saul_appearance: []
    }
  ]);
  const [quotee, setquote] = useState([
    {
      quote_id: 23,
      quote:
        "Yo 148, 3-to-the-3-to-the-6-to-the-9. Representin’ the ABQ. What up, biatch? Leave it at the tone!",
      author: "Jesse Pinkman",
      series: "Breaking Bad"
    }
  ]);
  const [image, setImg] = useState({});
  const [death, setdeath] = useState({});
  const [charr, setCha] = useState({});

  const getCharac = async () => {
    // getCharac=async (id)=>{
    setLoading(true);
    // const res=await axios.get(`https://www.breakingbadapi.com/api/characters/${id}`)
    const res = await axios.get(
      `https://www.breakingbadapi.com/api/character/random`
    );
    // console.log(res.data);
    setCharac(res.data);
    setLoading(false);
  };
  const squote = async () => {
    setLoading(true);
    const res = await axios.get(
      "https://www.breakingbadapi.com/api/quote/random"
    );
    setquote(res.data);
    setLoading(false);
  };
  const getImg = async fname => {
    setLoading(true);
    const res = await axios.get(
      `https://www.breakingbadapi.com/api/characters?name=${fname}`
    );
    setImg(res.data[0].img);
    setLoading(false);
  };
  const sdeath = async () => {
    setLoading(true);
    const res = await axios.get(
      `https://www.breakingbadapi.com/api/random-death`
    );
    setdeath(res.data);
    setLoading(false);
  };
  const getCha = async cname => {
    setLoading(true);
    const res = await axios.get(
      `https://www.breakingbadapi.com/api/characters?name=${cname}`
    );
    setLoading(false);
    setCha(res.data[0]);
  };
  const alertt = (msg, type) => {
    console.log("alert haii");
  };
  const clearr = () => {
    setCha({});
    setLoading(false);
  };
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <Random
                    getCharac={getCharac}
                    loading={loading}
                    charac={charac[0]}
                  />
                  <Ocomp />
                </Fragment>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/Quote"
              render={props => (
                <Fragment>
                  <Quote
                    squote={squote}
                    getImg={getImg}
                    quotee={quotee[0]}
                    image={image}
                  />
                </Fragment>
              )}
            />
            <Route
              exact
              path="/Death"
              render={props => (
                <Fragment>
                  <Death sdeath={sdeath} deathh={death} />
                </Fragment>
              )}
            />
            <Route
              exact
              path="/Character"
              render={props => (
                <Fragment>
                  <Alert />
                  <Search alertt={alertt} clearr={clearr} getCha={getCha} />
                  <Character charr={charr} loading={loading} />
                </Fragment>
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
