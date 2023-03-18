import {Routes, Route, BrowserRouter} from "react-router-dom";

import classes from './App.module.scss';
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";


function App() {
  return (
      <BrowserRouter>
        <div className={classes.app}>
          <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/authentication"} element={<Authentication/>}/>
          </Routes>
        </div>
      </BrowserRouter>

  );
}

export default App;
