import React from 'react';

import {Route} from "react-router-dom"
import Main from "../../pages/main/Main";
import Results from "../../pages/results/Results";


function App() {





  return (
    <div className="app">
      <Route path="/" exact component={()=><Main/>}/>
      <Route path="/results" exact component={()=><Results/>}/>
    </div>
  )
}

export default App;