import React, { Component } from 'react';
import './App.css';
import BasicInfo from './BasicInfo/BasicInfo'


// class App extends Component {
//   render() {
//     return (
//     <div className="App">
//      <h1>Hello ! This is Week 1 of React Challenges</h1>
//     </div>
//   );
// }
//} ; 


class App extends Component{
  constructor(props) {
    super (props) ; 
    this.state ={
      persons: [
        {name: "Rida Fatimah" ,  number: "(123)-456-789" , DOB: "07/09/2001"}, 
        {name: "Numa Fatimah" ,  number: "(123)-456-789" , DOB: "08/11/2002"}
      ]
    } ; 
  }
  render(){
    return <BasicInfo persons = {this.state.persons}/>
  }
}


export default App;
