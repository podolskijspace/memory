import React from 'react';
import Area from "../area/Area";
import {connect} from "react-redux";

function App({data}) {


  return (
    <div className="app">
      <Area data={data}/>
    </div>
  );
}

const mstp = ({data}) => {
  return {
    data,
  }
}

const mdtp = () => {

}


export default connect(mstp, mdtp)(App);