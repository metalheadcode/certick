import React from "react"
import { Route, Switch } from "react-router-dom"
import FootersLayoutsTypeNinth from "./layouts/FooterLayouts/FootersLayoutsTypeNinth/FootersLayoutsTypeNinth"
import Header from "./layouts/Header/Header.js"
import Homescreen from "./screens/Homescreen"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Homescreen />
        </Route>
      </Switch>
      <FootersLayoutsTypeNinth />
    </div>
  )
}

export default App
