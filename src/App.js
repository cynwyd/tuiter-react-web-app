import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/tuiter/explore"
                 element={<Tuiter page="explore"/>}/>
          <Route path="/tuiter"
                 element={<Tuiter page="home"/>}/>
          <Route path="/tuiter/*"
                 element={<Tuiter page="home"/>}/>
          <Route path="/*"
                 element={<Labs/>}/>
          <Route path="/hello"
                 element={<HelloWorld/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;