import React from "react";
import List from "./component/List";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Detail from "./component/Detail";
import AddWrite from "./component/AddWrite";
import UpdateWriting from "./component/UpdateWriting";

function App() {
  return (
    <Router>
      <div className="main_wrapper">
        <header></header>

        <div className="ui raised very padded text container segment">
          <Route path="/" exact component={List} />
          <Route path="/posts/:id" exact component={Detail} />
          <Route path="/addWrite" component={AddWrite} />
          <Route path="/posts/:id/edit" component={UpdateWriting} />
        </div>
      </div>
    </Router>
  );
}

export default App;
