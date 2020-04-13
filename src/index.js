import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

//Components
import Header from "./components/header";
import Infolist from "./components/infoList";
import Footer from "./components/footer";

class App extends Component {

  state = {
    info:[],
    filtered:[]
  }

 

  componentDidMount() {
    axios.get(`https://corona.lmao.ninja/countries`)
    .then(response => {
      this.setState({
        info: response.data
    })
    })
}

getKeyword = (event) => {
  //console.log(event.target.value)
  let keyword = event.target.value.toLowerCase();
  //console.log(keyword);
  let filtered = this.state.info.filter((item)=>{
    let country = item.country.toLowerCase();
      return country.indexOf(keyword) > -1
  });
  this.setState({
      filtered
  })
 // console.log(this.state.filtered)
}


  render() {
    let infoFiltered = this.state.filtered;
    let infoWhole = this.state.info
    return (
      <div>
        <Header keywords={this.getKeyword}/>
        <Infolist list={infoFiltered.length === 0 ? infoWhole : infoFiltered}>
         
        </Infolist>
        <Footer/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"))